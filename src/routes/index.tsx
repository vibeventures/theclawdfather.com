import { createFileRoute } from '@tanstack/react-router'
import { Github, Linkedin, Twitter } from 'lucide-react'
import * as m from '@/paraglide/messages'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'

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
  { icon: Twitter, href: 'https://x.com/peetzweg', label: 'X (Twitter)' },
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
        <header className="flex justify-end mb-16">
          <LocaleSwitcher />
        </header>

        {/* Hero */}
        <section className="mb-16">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            The Clawdfather
          </h1>
          <p className="text-lg text-neutral-400 mb-6">{m.hero_tagline()}</p>
          <p className="text-neutral-300 leading-relaxed mb-8">
            {m.hero_bio()}
          </p>

          {/* CTA */}
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-neutral-100 text-neutral-900 font-medium rounded-lg hover:bg-neutral-200 transition-colors"
          >
            {m.cta_book()}
          </a>

          {/* Social links */}
          <div className="flex gap-4 mt-8">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6">
            {m.services_title()}
          </h2>
          <div className="space-y-6">
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
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row md:justify-between gap-4 text-sm text-neutral-500">
            <p>&copy; {new Date().getFullYear()} Philip Poloczek</p>
            <div className="flex gap-6">
              <a href="/impressum" className="hover:text-neutral-300">
                {m.footer_impressum()}
              </a>
              <a href="/datenschutz" className="hover:text-neutral-300">
                {m.footer_privacy()}
              </a>
            </div>
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
    <div className="group">
      <h3 className="text-neutral-100 font-medium mb-1">{title}</h3>
      <p className="text-neutral-400 text-sm">{description}</p>
    </div>
  )
}
