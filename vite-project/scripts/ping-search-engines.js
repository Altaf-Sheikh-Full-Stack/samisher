import { readFile, writeFile } from 'fs/promises'
import crypto from 'crypto'
import { createClient } from '@sanity/client'

/**
 * Notifies search engines about new/updated content so URLs get indexed
 * without manually requesting indexing in Google Search Console.
 *
 * - IndexNow (Bing, Yandex, Seznam…) — instant, free, no setup beyond the key.
 * - Google Indexing API — same mechanism as "Request Indexing", automated.
 *
 * Only URLs that are new or changed since the last successful ping are sent
 * (tracked in .indexing-cache.json), so daily quotas are never wasted.
 *
 * Everything is optional: if credentials are missing the script exits cleanly.
 */

const SITE_URL = (
  process.env.SITE_URL || 'https://samisher.com'
).replace(/\/+$/, '')

const CACHE_FILE = './.indexing-cache.json'

// ---------- env loading (plain node doesn't read .env.local) ----------

async function loadEnv() {
  try {
    const content = await readFile('./.env.local', 'utf8')
    for (const line of content.split('\n')) {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
      if (!match || process.env[match[1]]) continue
      let value = match[2]
      // Strip one pair of surrounding quotes if present.
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1)
      }
      process.env[match[1]] = value
    }
  } catch {
    // No .env.local — fall back to real environment variables.
  }
}

await loadEnv()

// ---------- fetch current content from Sanity ----------

async function getUrls() {
  const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID
  const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production'
  if (!projectId) return []

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-10-01',
    useCdn: true,
    perspective: 'published',
  })

  const posts = await client.fetch(
    `*[_type == "post" && defined(slug.current) && (!defined(seo.noindex) || seo.noindex == false)]{
      "slug": slug.current,
      "lastmod": coalesce(_updatedAt, publishedAt)
    }`
  )

  return posts.map(({ slug, lastmod }) => ({
    url: `${SITE_URL}/blogs/${slug}/`,
    lastmod,
  }))
}

// ---------- change detection ----------

async function readCache() {
  try {
    return JSON.parse(await readFile(CACHE_FILE, 'utf8'))
  } catch {
    // First run — nothing known yet.
    return {}
  }
}

async function getChangedUrls(urls) {
  const cache = await readCache()

  const changedPosts =
    process.env.PING_FORCE === '1' ? urls : urls.filter((u) => cache[u.url] !== u.lastmod)

  // Homepage pings once; the blog index re-pings whenever any post changed,
  // so its card list gets refreshed in search results too.
  const homeUrl = `${SITE_URL}/`
  const blogsIndex = `${SITE_URL}/blogs/`
  const staticUrls = []
  if (cache[homeUrl] === undefined || process.env.PING_FORCE === '1') {
    staticUrls.push({ url: homeUrl, lastmod: new Date().toISOString() })
  }
  if (
    (changedPosts.length > 0 && cache[blogsIndex] !== new Date().toISOString().slice(0, 13)) ||
    process.env.PING_FORCE === '1'
  ) {
    staticUrls.push({ url: blogsIndex, lastmod: new Date().toISOString() })
  }

  return [...staticUrls, ...changedPosts]
}

// Post URLs that were announced before but no longer exist in Sanity —
// search engines are told they are gone so they drop out of results fast.
async function getDeletedUrls(currentUrls) {
  const cache = await readCache()
  const currentSet = new Set(currentUrls.map((u) => u.url))
  const postPattern = new RegExp(`^${SITE_URL}/blogs/[^/]+/$`)
  return Object.keys(cache).filter((url) => postPattern.test(url) && !currentSet.has(url))
}

async function saveCache(urls, deletedUrls = []) {
  const cache = await readCache()
  for (const { url, lastmod } of urls) cache[url] = lastmod
  for (const url of deletedUrls) delete cache[url]
  await writeFile(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8')
}

// ---------- IndexNow (Bing, Yandex, Seznam, Naver) ----------

async function pingIndexNow(urls) {
  const key = process.env.INDEXNOW_KEY
  if (!key) {
    console.log('[indexnow] INDEXNOW_KEY not set — skipping.')
    return
  }

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: SITE_URL.replace(/^https?:\/\//, ''),
      key,
      keyLocation: `${SITE_URL}/${key}.txt`,
      urlList: urls.map((u) => u.url),
    }),
  })

  if (res.ok || res.status === 202) {
    console.log(`[indexnow] Submitted ${urls.length} URL(s).`)
  } else {
    console.warn(`[indexnow] Unexpected response ${res.status}: ${await res.text()}`)
  }
}

// ---------- Google Indexing API ----------

function b64url(input) {
  return Buffer.from(input).toString('base64url')
}

async function getGoogleAccessToken() {
  let email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  let privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')

  if (!email && process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    const json = JSON.parse(await readFile(process.env.GOOGLE_APPLICATION_CREDENTIALS, 'utf8'))
    email = json.client_email
    privateKey = json.private_key
  }

  if (!email || !privateKey) return null

  const iat = Math.floor(Date.now() / 1000)
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claim = b64url(
    JSON.stringify({
      iss: email,
      scope: 'https://www.googleapis.com/auth/indexing',
      aud: 'https://oauth2.googleapis.com/token',
      exp: iat + 3600,
      iat,
    })
  )

  const signature = crypto
    .createSign('RSA-SHA256')
    .update(`${header}.${claim}`)
    .sign(privateKey)
    .toString('base64url')

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${header}.${claim}.${signature}`,
  })

  if (!res.ok) throw new Error(`Token exchange failed (${res.status}): ${await res.text()}`)
  return (await res.json()).access_token
}

async function pingGoogle(urls) {
  let token
  try {
    token = await getGoogleAccessToken()
  } catch (error) {
    console.warn(`[google] Could not authenticate: ${error.message}`)
    return
  }
  if (!token) {
    console.log('[google] GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_PRIVATE_KEY not set — skipping.')
    return
  }

  for (const { url, type } of urls) {
    try {
      const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, type }),
      })
      const body = await res.json()
      if (res.ok) {
        console.log(`[google] ${type === 'URL_DELETED' ? 'Deleted' : 'Queued'}: ${url}`)
      } else {
        console.warn(`[google] ${res.status} for ${url}: ${body.error?.message || ''}`)
      }
    } catch (error) {
      console.warn(`[google] Failed for ${url}: ${error.message}`)
    }
  }
}

// ---------- main ----------

async function main() {
  try {
    const allUrls = await getUrls()
    const changed = await getChangedUrls(allUrls)
    const deleted = await getDeletedUrls(allUrls)

    // The blog index lists the posts, so deletions must refresh it too.
    if (deleted.length > 0 && !changed.some((u) => u.url === `${SITE_URL}/blogs/`)) {
      changed.push({ url: `${SITE_URL}/blogs/`, lastmod: new Date().toISOString() })
    }

    if (changed.length === 0 && deleted.length === 0) {
      console.log('[ping] No new, changed or deleted URLs — nothing to do.')
      return
    }

    if (changed.length > 0) {
      console.log(`[ping] Pinging ${changed.length} URL(s):`)
      for (const { url } of changed) console.log(`  - ${url}`)
    }
    if (deleted.length > 0) {
      console.log(`[ping] Announcing ${deleted.length} deleted URL(s):`)
      for (const url of deleted) console.log(`  - ${url}`)
    }

    const notifications = [
      ...changed.map((u) => ({ ...u, type: 'URL_UPDATED' })),
      ...deleted.map((url) => ({ url, type: 'URL_DELETED' })),
    ]

    await Promise.allSettled([pingIndexNow(notifications), pingGoogle(notifications)])
    await saveCache(changed, deleted)
  } catch (error) {
    // Never break the build because of a ping failure.
    console.warn(`[ping] Skipped due to error: ${error.message}`)
  }
}

main()
