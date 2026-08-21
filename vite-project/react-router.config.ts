import type { Config } from '@react-router/dev/config'
import { createClient } from '@sanity/client'

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production'

// NOTE: paths must NOT have trailing slashes — React Router strips them
// before matching against this list, and unmatched paths render as SPA shells.
const staticRoutes = ['/', '/pricing', '/career', '/blogs']

async function getBlogPaths(): Promise<string[]> {
  if (!projectId) {
    console.warn(
      '[prerender] SANITY_PROJECT_ID is not set — skipping blog post prerendering. ' +
        'Set it in .env.local to prerender blog posts.'
    )
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

    const slugs: string[] = await client.fetch(
      `*[_type == "post" && defined(slug.current) && (!defined(seo.noindex) || seo.noindex == false)].slug.current`
    )

    console.log(`[prerender] Found ${slugs.length} blog post(s) in Sanity`)
    return slugs.map((slug) => `/blogs/${slug}`)
  } catch (error) {
    // Fail loudly: deploying without the posts would silently wipe the blog
    // from the site (and look like deleted content to search engines).
    throw new Error(
      '[prerender] Could not fetch blog slugs from Sanity. Failing the build so we never deploy a site with missing blog posts. ' +
        'Check SANITY_PROJECT_ID / SANITY_DATASET and network access, then retry. Original error: ' +
        String(error)
    )
  }
}

export default {
  appDirectory: 'src',
  buildDirectory: 'build',
  ssr: false,
  async prerender() {
    const blogPaths = await getBlogPaths()
    return [...staticRoutes, ...blogPaths]
  },
} satisfies Config
