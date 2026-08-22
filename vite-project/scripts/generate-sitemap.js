import { readFile, writeFile } from 'fs/promises'
import { createClient } from '@sanity/client'

// Plain Node doesn't load .env.local automatically — do it manually.
async function loadEnv() {
  try {
    const content = await readFile('./.env.local', 'utf8')
    for (const line of content.split('\n')) {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
      if (match && !process.env[match[1]]) process.env[match[1]] = match[2]
    }
  } catch {
    // No .env.local — fall back to real environment variables.
  }
}

await loadEnv()

const SITE_URL = (
  process.env.SITE_URL || 'https://samisher.com'
).replace(/\/+$/, '')

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production'

const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/pricing/', changefreq: 'monthly', priority: '0.9' },
  { path: '/about/', changefreq: 'monthly', priority: '0.6' },
  { path: '/career/', changefreq: 'monthly', priority: '0.5' },
  { path: '/blogs/', changefreq: 'weekly', priority: '0.8' },
]

async function getBlogUrls() {
  if (!projectId) {
    console.warn('[sitemap] SANITY_PROJECT_ID is not set — skipping blog posts.')
    return []
  }

  try {
    const client = createClient({
      projectId,
      dataset,
      apiVersion: '2024-10-01',
      useCdn: true,
      perspective: 'published',
    })

    return await client.fetch(
      `*[_type == "post" && defined(slug.current) && (!defined(seo.noindex) || seo.noindex == false)]{
        "slug": slug.current,
        "lastmod": coalesce(_updatedAt, publishedAt)
      }`
    )
  } catch (error) {
    console.warn('[sitemap] Failed to fetch blog posts from Sanity:', error)
    return []
  }
}

function isoDate(value) {
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString()
}

async function main() {
  const posts = await getBlogUrls()

  const staticUrls = staticRoutes.map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )

  const postUrls = posts.map(
    ({ slug, lastmod }) => `  <url>
    <loc>${SITE_URL}/blogs/${slug}/</loc>
    ${lastmod ? `<lastmod>${isoDate(lastmod)}</lastmod>` : ''}
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  )

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...postUrls].join('\n')}
</urlset>
`

  const outPath = './public/sitemap.xml'
  await writeFile(outPath, xml, 'utf8')

  console.log(
    `Wrote sitemap to ${outPath} (base: ${SITE_URL}, ${staticRoutes.length} pages + ${posts.length} posts)`
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
