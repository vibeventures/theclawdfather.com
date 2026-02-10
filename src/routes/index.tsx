import { createFileRoute } from '@tanstack/react-router'
import { Github, Linkedin, Calendar } from 'lucide-react'
import * as m from '@/paraglide/messages'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'
import { XIcon } from '@/components/icons/XIcon'

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({
    meta: [
      { title: m.site_title() },
      { name: 'description', content: m.site_description() },
    ],
  }),
})

const CAL_LINK =
  'https://cal.com/peetzweg/50min?user=peetzweg&overlayCalendar=true'

const socials = [
  { icon: XIcon, href: 'https://x.com/peetzweg', label: 'X' },
  { icon: Github, href: 'https://github.com/peetzweg', label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/peetzweg/',
    label: 'LinkedIn',
  },
]

function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Header with locale switcher */}
        <header className="flex justify-end mb-16" role="banner">
          <nav aria-label="Language selection">
            <LocaleSwitcher />
          </nav>
        </header>

        {/* Hero */}
        <article itemScope itemType="https://schema.org/Person">
          <section className="mb-16" aria-labelledby="hero-title">
            {/* Logo */}
            <img
              src="/logo.svg"
              alt=""
              aria-hidden="true"
              className="w-12 h-12 mb-6"
            />
            <h1
              id="hero-title"
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              itemProp="name"
            >
              <span className="sr-only">Philip Poloczek - </span>
              The Clawdfather
            </h1>
            <p
              className="text-lg text-neutral-400 mb-6"
              itemProp="description"
            >
              {m.hero_tagline()}
            </p>
            <p className="text-neutral-300 leading-relaxed mb-8">
              {m.hero_bio()}
            </p>

            {/* Primary CTA */}
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-100 text-neutral-900 font-medium rounded-lg hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-100 focus:ring-offset-2 focus:ring-offset-neutral-950"
              aria-label={`${m.cta_book()} - Opens cal.com in new window`}
            >
              <Calendar size={18} aria-hidden="true" />
              {m.cta_book()}
            </a>

            {/* Social links */}
            <nav className="flex gap-4 mt-8" aria-label="Social media links">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={`${label} - Opens in new window`}
                  className="text-neutral-500 hover:text-neutral-300 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded"
                  itemProp="sameAs"
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </nav>

            {/* Hidden structured data helpers */}
            <meta itemProp="jobTitle" content="AI Agent Consultant" />
            <link itemProp="url" href="https://theclawdfather.com" />
            <span
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
              className="sr-only"
            >
              <span itemProp="addressLocality">Berlin</span>,{' '}
              <span itemProp="addressCountry">Germany</span>
            </span>
          </section>
        </article>

        {/* Services */}
        <section aria-labelledby="services-title">
          <h2
            id="services-title"
            className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6"
          >
            {m.services_title()}
          </h2>
          <ul className="space-y-6" role="list">
            <ServiceItem
              title={m.service_installation()}
              description={m.service_installation_desc()}
            />
            <ServiceItem
              title={m.service_consulting()}
              description={m.service_consulting_desc()}
            />
            <ServiceItem
              title={m.service_training()}
              description={m.service_training_desc()}
            />
            <ServiceItem
              title={m.service_talks()}
              description={m.service_talks_desc()}
            />
          </ul>
        </section>

        {/* News */}
        <section aria-labelledby="news-title" className="mt-16">
          <h2
            id="news-title"
            className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6"
          >
            {m.news_title()}
          </h2>
          <ul className="space-y-4" role="list">
            <li className="group">
              <a
                href="https://lu.ma/3j4om77u"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 -mx-4 rounded-lg hover:bg-neutral-900 transition-colors"
              >
                <time className="text-sm text-neutral-500">8. Feb 2026</time>
                <h3 className="text-neutral-100 font-medium mt-1">
                  OpenClaw Berlin Meetup
                </h3>
                <p className="text-neutral-400 text-sm mt-1">
                  Erstes Community-Treffen in Berlin →
                </p>
              </a>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer
          className="mt-24 pt-8 border-t border-neutral-800"
          role="contentinfo"
        >
          <div className="flex flex-col md:flex-row md:justify-between gap-4 text-sm text-neutral-500">
            <p>
              <span aria-hidden="true">&copy;</span>{' '}
              <span className="sr-only">Copyright</span>
              {new Date().getFullYear()} Philip Poloczek
            </p>
            <nav aria-label="Legal links" className="flex gap-6">
              <a
                href="/impressum"
                className="hover:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded"
              >
                {m.footer_impressum()}
              </a>
              <a
                href="/datenschutz"
                className="hover:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-500 rounded"
              >
                {m.footer_privacy()}
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  )
}

function ServiceItem({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <li
      className="group"
      itemScope
      itemType="https://schema.org/Service"
    >
      <h3
        className="text-neutral-100 font-medium mb-1"
        itemProp="name"
      >
        {title}
      </h3>
      <p className="text-neutral-400 text-sm" itemProp="description">
        {description}
      </p>
    </li>
  )
}
