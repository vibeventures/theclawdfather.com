import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'

import { getLocale } from '@/paraglide/runtime'
import * as m from '@/paraglide/messages'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

const SITE_URL = 'https://theclawdfather.com'

export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: async () => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', getLocale())
    }
  },

  head: () => {
    const locale = getLocale()
    const title = m.site_title()
    const description = m.site_description()
    const url = `${SITE_URL}/${locale}`

    return {
      meta: [
        { charSet: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { title },
        { name: 'description', content: description },
        { name: 'author', content: 'Philip Poloczek' },
        { name: 'robots', content: 'index, follow' },

        // OpenGraph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: url },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:locale', content: locale === 'de' ? 'de_DE' : 'en_US' },
        {
          property: 'og:locale:alternate',
          content: locale === 'de' ? 'en_US' : 'de_DE',
        },
        { property: 'og:site_name', content: 'The Clawdfather' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@peetzweg' },
        { name: 'twitter:creator', content: '@peetzweg' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
      ],
      links: [
        { rel: 'stylesheet', href: appCss },
        { rel: 'canonical', href: url },
        {
          rel: 'alternate',
          hrefLang: 'de',
          href: `${SITE_URL}/de`,
        },
        {
          rel: 'alternate',
          hrefLang: 'en',
          href: `${SITE_URL}/en`,
        },
        {
          rel: 'alternate',
          hrefLang: 'x-default',
          href: `${SITE_URL}/de`,
        },
      ],
    }
  },

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const locale = getLocale()

  // Structured data for Person + Service
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://theclawdfather.com/#person',
        name: 'Philip Poloczek',
        alternateName: 'peetzweg',
        url: 'https://theclawdfather.com',
        sameAs: [
          'https://x.com/peetzweg',
          'https://github.com/peetzweg',
          'https://www.linkedin.com/in/peetzweg/',
        ],
        jobTitle: 'AI Agent Consultant',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Berlin',
          addressCountry: 'DE',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://theclawdfather.com/#service',
        name: 'The Clawdfather',
        description:
          locale === 'de'
            ? 'Agent Consulting aus dem Herzen Deutschlands'
            : 'Agent Consulting from the heart of Germany',
        url: 'https://theclawdfather.com',
        provider: { '@id': 'https://theclawdfather.com/#person' },
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 52.52,
            longitude: 13.405,
          },
          geoRadius: '2000 km',
        },
        serviceType: [
          'AI Agent Consulting',
          'OpenClaw Installation',
          'Technical Training',
        ],
      },
    ],
  }

  return (
    <html lang={locale}>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-neutral-950">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
