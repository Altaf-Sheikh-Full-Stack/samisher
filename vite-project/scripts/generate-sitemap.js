import { writeFile } from 'fs/promises'

const SITE_URL = (
  process.env.SITE_URL || 'https://samisher.com'
).replace(/\/+$/, '')

const routes = [
  '/',
  '/pricing/',
]

const urls = routes
  .map((route) => {
    const loc = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`

    return `  <url>
    <loc>${loc}</loc>
  </url>`
  })
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

const outPath = './public/sitemap.xml'

async function main() {
  await writeFile(outPath, xml, 'utf8')

  console.log(
    `Wrote sitemap to ${outPath} (base: ${SITE_URL})`
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
