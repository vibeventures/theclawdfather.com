import { createFileRoute, Link } from '@tanstack/react-router'
import { getLocale } from '@/paraglide/runtime'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'

export const Route = createFileRoute('/impressum')({
  component: Impressum,
  head: () => ({
    meta: [
      {
        title:
          getLocale() === 'de'
            ? 'Impressum - The Clawdfather'
            : 'Legal Notice - The Clawdfather',
      },
    ],
  }),
})

function Impressum() {
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
          {isDE ? 'Impressum' : 'Legal Notice'}
        </h1>

        <div className="prose prose-invert prose-neutral max-w-none space-y-6 text-neutral-300">
          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-2">
              {isDE ? 'Angaben gemäß § 5 TMG' : 'Information according to § 5 TMG'}
            </h2>
            <p>
              Philip Poloczek
              <br />
              Berlin, Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-2">
              {isDE ? 'Kontakt' : 'Contact'}
            </h2>
            <p>
              E-Mail: contact [at] theclawdfather.com
              <br />
              Web:{' '}
              <a
                href="https://theclawdfather.com"
                className="text-neutral-100 underline"
              >
                theclawdfather.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-2">
              {isDE
                ? 'Verantwortlich für den Inhalt'
                : 'Responsible for content'}
            </h2>
            <p>Philip Poloczek</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-100 mb-2">
              {isDE ? 'Haftungsausschluss' : 'Disclaimer'}
            </h2>
            <p className="text-sm text-neutral-400">
              {isDE
                ? 'Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.'
                : 'The contents of this website have been created with the greatest care. However, no guarantee can be given for the correctness, completeness and topicality of the content.'}
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
