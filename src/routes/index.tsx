import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-4">The Clawdfather</h1>
        <p className="text-neutral-400">Coming soon.</p>
      </div>
    </main>
  )
}
