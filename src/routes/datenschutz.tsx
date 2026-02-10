import { createFileRoute, Link } from '@tanstack/react-router'
import { getLocale } from '@/paraglide/runtime'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'

export const Route = createFileRoute('/datenschutz')({
  component: Datenschutz,
  head: () => ({
    meta: [
      {
        title:
          getLocale() === 'de'
            ? 'Datenschutz - The Clawdfather'
            : 'Privacy Policy - The Clawdfather',
      },
    ],
  }),
})

function Datenschutz() {
  const locale = getLocale()
  const isDE = locale === 'de'

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <header className="flex justify-between items-center mb-12">
          <Link to="/" className="text-neutral-400 hover:text-neutral-100">
            &larr; {isDE ? 'Zurück' : 'Back'}
          </Link>
          <LocaleSwitcher />
        </header>

        <h1 className="text-2xl font-bold mb-8">
          {isDE ? 'Datenschutzerklärung' : 'Privacy Policy'}
        </h1>

        <div className="prose prose-invert prose-neutral max-w-none space-y-6 text-neutral-300">
          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-2">
              {isDE ? 'Verantwortlicher' : 'Data Controller'}
            </h2>
            <p>
              Philip Poloczek
              <br />
              Berlin, Deutschland
              <br />
              E-Mail: contact [at] theclawdfather.com
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-2">
              {isDE ? 'Datenerfassung auf dieser Website' : 'Data Collection'}
            </h2>
            <p className="text-sm text-neutral-400">
              {isDE
                ? 'Diese Website verwendet keine Cookies und speichert keine personenbezogenen Daten. Es werden lediglich technisch notwendige Server-Logs (IP-Adresse, Zeitstempel, aufgerufene Seite) für den sicheren Betrieb erhoben.'
                : 'This website does not use cookies and does not store personal data. Only technically necessary server logs (IP address, timestamp, accessed page) are collected for secure operation.'}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-2">
              {isDE ? 'Externe Links' : 'External Links'}
            </h2>
            <p className="text-sm text-neutral-400">
              {isDE
                ? 'Diese Website enthält Links zu externen Diensten (cal.com, GitHub, LinkedIn, X). Für deren Datenschutzpraktiken sind die jeweiligen Anbieter verantwortlich.'
                : 'This website contains links to external services (cal.com, GitHub, LinkedIn, X). The respective providers are responsible for their privacy practices.'}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-2">
              {isDE ? 'Ihre Rechte' : 'Your Rights'}
            </h2>
            <p className="text-sm text-neutral-400">
              {isDE
                ? 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten. Kontaktieren Sie mich bei Fragen.'
                : 'You have the right to access, rectify, delete, and restrict the processing of your data. Contact me with any questions.'}
            </p>
          </section>

          <section>
            <p className="text-xs text-neutral-500">
              {isDE ? 'Stand: Februar 2026' : 'Last updated: February 2026'}
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
