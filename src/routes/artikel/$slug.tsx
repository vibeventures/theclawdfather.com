import { createFileRoute, notFound } from '@tanstack/react-router'
import { getArticleBySlug } from '@/lib/articles'
import { ArticleLayout } from '@/components/ArticleLayout'

export const Route = createFileRoute('/artikel/$slug')({
  component: ArticlePage,

  loader: ({ params }) => {
    const article = getArticleBySlug(params.slug)
    if (!article) {
      throw notFound()
    }
    return article
  },

  head: ({ loaderData }) => {
    if (!loaderData) return {}

    const { meta } = loaderData
    const url = `https://theclawdfather.com/artikel/${meta.slug}`

    return {
      meta: [
        { title: `${meta.title} | The Clawdfather` },
        { name: 'description', content: meta.description },
        { name: 'author', content: meta.author },
        { name: 'keywords', content: meta.keywords.join(', ') },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },

        // Article specific
        { name: 'article:published_time', content: meta.date },
        { name: 'article:author', content: meta.author },
        { name: 'article:section', content: 'Technology' },

        // OpenGraph
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: url },
        { property: 'og:title', content: meta.title },
        { property: 'og:description', content: meta.description },
        { property: 'og:locale', content: meta.locale === 'de' ? 'de_DE' : 'en_US' },
        { property: 'og:site_name', content: 'The Clawdfather' },
        { property: 'article:published_time', content: meta.date },
        { property: 'article:author', content: 'https://theclawdfather.com' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@peetzweg' },
        { name: 'twitter:creator', content: '@peetzweg' },
        { name: 'twitter:title', content: meta.title },
        { name: 'twitter:description', content: meta.description },
      ],
      links: [
        { rel: 'canonical', href: url },
      ],
    }
  },
})

function ArticlePage() {
  const article = Route.useLoaderData()
  const Content = article.content

  return (
    <ArticleLayout meta={article.meta}>
      <Content />
    </ArticleLayout>
  )
}
