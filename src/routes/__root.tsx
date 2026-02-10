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
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { name: 'googlebot', content: 'index, follow' },

        // Keywords (still used by some engines and AI crawlers)
        {
          name: 'keywords',
          content:
            locale === 'de'
              ? 'AI Agent Consulting, OpenClaw, KI Beratung, Berlin, Agent Entwicklung, LLM Integration, AI Automation'
              : 'AI Agent Consulting, OpenClaw, AI Consulting, Berlin, Agent Development, LLM Integration, AI Automation',
        },

        // Geo tags for local SEO
        { name: 'geo.region', content: 'DE-BE' },
        { name: 'geo.placename', content: 'Berlin' },
        { name: 'geo.position', content: '52.52;13.405' },
        { name: 'ICBM', content: '52.52, 13.405' },

        // Theme color
        { name: 'theme-color', content: '#0a0a0a' },
        { name: 'color-scheme', content: 'dark' },
        { name: 'msapplication-TileColor', content: '#0a0a0a' },

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
        { rel: 'alternate', hrefLang: 'de', href: `${SITE_URL}/de` },
        { rel: 'alternate', hrefLang: 'en', href: `${SITE_URL}/en` },
        { rel: 'alternate', hrefLang: 'x-default', href: `${SITE_URL}/de` },

        // Preconnect for performance + SEO
        { rel: 'preconnect', href: 'https://cal.com' },
        { rel: 'dns-prefetch', href: 'https://cal.com' },

        // Icon hints
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'apple-touch-icon', href: '/favicon.ico' },
      ],
    }
  },

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const locale = getLocale()
  const isDE = locale === 'de'

  // Comprehensive structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // Person (knowledge graph entity)
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'Philip Poloczek',
        alternateName: ['peetzweg', 'The Clawdfather'],
        url: SITE_URL,
        image: `${SITE_URL}/favicon.ico`,
        sameAs: [
          'https://x.com/peetzweg',
          'https://github.com/peetzweg',
          'https://www.linkedin.com/in/peetzweg/',
        ],
        jobTitle: isDE ? 'KI Agent Berater' : 'AI Agent Consultant',
        knowsAbout: [
          'Artificial Intelligence',
          'AI Agents',
          'OpenClaw',
          'Large Language Models',
          'Automation',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Berlin',
          addressRegion: 'Berlin',
          addressCountry: 'DE',
        },
      },
      // Professional Service
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#service`,
        name: 'The Clawdfather',
        description: isDE
          ? 'Agent Consulting aus dem Herzen Deutschlands für die EU. OpenClaw Installation, Beratung, Training und Vorträge.'
          : 'Agent Consulting from the heart of Germany for the EU. OpenClaw installation, consulting, training, and talks.',
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.ico`,
        image: `${SITE_URL}/favicon.ico`,
        telephone: '',
        email: 'contact@theclawdfather.com',
        priceRange: '€€€',
        currenciesAccepted: 'EUR',
        paymentAccepted: 'Invoice',
        provider: { '@id': `${SITE_URL}/#person` },
        founder: { '@id': `${SITE_URL}/#person` },
        areaServed: [
          { '@type': 'Country', name: 'Germany' },
          { '@type': 'Country', name: 'Austria' },
          { '@type': 'Country', name: 'Switzerland' },
          {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: 52.52,
              longitude: 13.405,
            },
            geoRadius: '2000 km',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: isDE ? 'Leistungen' : 'Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'OpenClaw Installation',
                description: isDE
                  ? 'Setup, Konfiguration und Deployment von OpenClaw'
                  : 'Setup, configuration and deployment of OpenClaw',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: isDE ? 'Beratung' : 'Consulting',
                description: isDE
                  ? 'Architektur, Strategie und Best Practices für Agent-Systeme'
                  : 'Architecture, strategy and best practices for agent systems',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Training',
                description: isDE
                  ? 'Workshops und Onboarding für Ihr Team'
                  : 'Workshops and onboarding for your team',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: isDE ? 'Vorträge' : 'Talks',
                description: isDE
                  ? 'Konferenz-Talks und Firmenvorträge über AI Agents'
                  : 'Conference talks and company presentations about AI agents',
              },
            },
          ],
        },
      },
      // WebSite (for sitelinks search box potential)
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'The Clawdfather',
        description: isDE
          ? 'Agent Consulting aus dem Herzen Deutschlands'
          : 'Agent Consulting from the heart of Germany',
        publisher: { '@id': `${SITE_URL}/#person` },
        inLanguage: [
          { '@type': 'Language', name: 'German', alternateName: 'de' },
          { '@type': 'Language', name: 'English', alternateName: 'en' },
        ],
      },
      // FAQ Schema (helps with featured snippets)
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: isDE ? 'Was ist OpenClaw?' : 'What is OpenClaw?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isDE
                ? 'OpenClaw ist ein Open-Source-Framework für AI Agents, das die Entwicklung und den Betrieb von autonomen KI-Systemen vereinfacht.'
                : 'OpenClaw is an open-source framework for AI agents that simplifies the development and operation of autonomous AI systems.',
            },
          },
          {
            '@type': 'Question',
            name: isDE
              ? 'Welche Unternehmen können von Agent Consulting profitieren?'
              : 'Which companies can benefit from agent consulting?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isDE
                ? 'Unternehmen jeder Größe, die AI Agents für Automatisierung, Kundenservice, interne Prozesse oder Produktentwicklung einsetzen möchten.'
                : 'Companies of any size looking to deploy AI agents for automation, customer service, internal processes, or product development.',
            },
          },
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
        {/* Plausible Analytics - privacy-friendly, no cookies */}
        <script
          async
          src="https://plausible.io/js/pa-XJag0qxDyQMHn2tOpVCvA.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`,
          }}
        />
      </head>
      <body className="bg-neutral-950">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
