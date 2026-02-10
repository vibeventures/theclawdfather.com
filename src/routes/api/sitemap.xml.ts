import { createAPIFileRoute } from '@tanstack/react-start/api'

const SITE_URL = 'https://theclawdfather.com'

export const APIRoute = createAPIFileRoute('/api/sitemap.xml')({
  GET: () => {
    const pages = ['', '/impressum', '/datenschutz']
    const locales = ['de', 'en']

    const urls = locales.flatMap((locale) =>
      pages.map(
        (page) => `
  <url>
    <loc>${SITE_URL}/${locale}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.5'}</priority>
  </url>`
      )
    )

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('')}
</urlset>`

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  },
})
