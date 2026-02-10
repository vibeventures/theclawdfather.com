import { createAPIFileRoute } from '@tanstack/react-start/api'
import { getAllArticles } from '@/lib/articles'

const SITE_URL = 'https://theclawdfather.com'

export const APIRoute = createAPIFileRoute('/api/sitemap.xml')({
  GET: () => {
    const pages = ['', '/impressum', '/datenschutz']
    const locales = ['de', 'en']

    // Static pages
    const staticUrls = locales.flatMap((locale) =>
      pages.map(
        (page) => `
  <url>
    <loc>${SITE_URL}/${locale}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.5'}</priority>
  </url>`
      )
    )

    // Article pages
    const articles = getAllArticles()
    const articleUrls = articles.map(
      (article) => `
  <url>
    <loc>${SITE_URL}/artikel/${article.slug}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticUrls.join('')}
${articleUrls.join('')}
</urlset>`

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  },
})
