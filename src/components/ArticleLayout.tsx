import { Link } from '@tanstack/react-router'
import { LocaleSwitcher } from './LocaleSwitcher'
import type { ArticleMeta } from '@/lib/articles'

interface ArticleLayoutProps {
  meta: ArticleMeta
  children: React.ReactNode
}

export function ArticleLayout({ meta, children }: ArticleLayoutProps) {
  const formattedDate = new Date(meta.date).toLocaleDateString(meta.locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Article JSON-LD schema
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.date,
    author: {
      '@type': 'Person',
      name: meta.author,
      url: 'https://theclawdfather.com',
      sameAs: [
        'https://x.com/peetzweg',
        'https://github.com/peetzweg',
        'https://www.linkedin.com/in/peetzweg/',
      ],
    },
    publisher: {
      '@type': 'Person',
      name: 'Philip Poloczek',
      url: 'https://theclawdfather.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://theclawdfather.com/artikel/${meta.slug}`,
    },
    inLanguage: meta.locale === 'de' ? 'de-DE' : 'en-US',
    keywords: meta.keywords.join(', '),
    articleSection: 'Technology',
    isAccessibleForFree: true,
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article
        className="max-w-2xl mx-auto px-6 py-16"
        itemScope
        itemType="https://schema.org/Article"
      >
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <Link
            to="/"
            className="text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            &larr; {meta.locale === 'de' ? 'Zurück' : 'Back'}
          </Link>
          <LocaleSwitcher />
        </header>

        {/* Article meta */}
        <div className="mb-8">
          <time
            dateTime={meta.date}
            className="text-sm text-neutral-500"
            itemProp="datePublished"
          >
            {formattedDate}
          </time>
          <span className="text-neutral-600 mx-2">·</span>
          <span
            className="text-sm text-neutral-500"
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
          >
            <span itemProp="name">{meta.author}</span>
          </span>
        </div>

        {/* Hidden SEO meta */}
        <meta itemProp="headline" content={meta.title} />
        <meta itemProp="description" content={meta.description} />
        <link itemProp="mainEntityOfPage" href={`https://theclawdfather.com/artikel/${meta.slug}`} />
        <span itemProp="publisher" itemScope itemType="https://schema.org/Person" className="hidden">
          <meta itemProp="name" content="Philip Poloczek" />
        </span>

        {/* Article content */}
        <div
          className="prose prose-invert prose-neutral max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-3xl prose-h1:md:text-4xl prose-h1:mb-6
            prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-neutral-300 prose-p:leading-relaxed
            prose-a:text-neutral-100 prose-a:underline prose-a:underline-offset-2
            prose-strong:text-neutral-100
            prose-ul:text-neutral-300 prose-li:marker:text-neutral-500
            prose-hr:border-neutral-800"
          itemProp="articleBody"
        >
          {children}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm text-neutral-500">
                {meta.locale === 'de'
                  ? 'Interesse an AI Agent Consulting?'
                  : 'Interested in AI Agent Consulting?'}
              </p>
              <a
                href="https://cal.com/peetzweg/50min?user=peetzweg&overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-100 font-medium hover:underline"
              >
                {meta.locale === 'de' ? 'Termin buchen →' : 'Book a call →'}
              </a>
            </div>
            <Link
              to="/"
              className="text-sm text-neutral-500 hover:text-neutral-300"
            >
              theclawdfather.com
            </Link>
          </div>
        </footer>
      </article>
    </main>
  )
}
