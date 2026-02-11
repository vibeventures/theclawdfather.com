'use client'

import { motion } from 'motion/react'
import { getLocale } from '@/paraglide/runtime'

export function AgentView() {
  const locale = getLocale()
  const isDE = locale === 'de'

  const markdown = isDE
    ? `# The Clawdfather - Agent Consulting

## Übersicht
- **Name:** Philip Poloczek
- **Standort:** Berlin, Deutschland
- **Rolle:** OpenClaw Contributor & KI Agent Berater
- **Website:** https://theclawdfather.com
- **Termin buchen:** https://cal.com/peetzweg/50min

## Tagline
Agenten Consulting aus dem Herzen von Europa an einem fantastischen Tag.

## Bio
Ich bin Philip, begeisterter OpenClaw Nutzer und Contributor aus Berlin. Ich helfe Unternehmen dabei, KI Agenten effektiv einzusetzen.

## Leistungen

### 1. OpenClaw Installation
Setup, Konfiguration und Deployment von OpenClaw für Ihr Team.

### 2. Beratung
Architektur, Strategie und Best Practices für Agenten-Systeme.

### 3. Training
Workshops und Onboarding für Ihr Team.

### 4. Vorträge
Konferenz-Talks und Firmenvorträge über KI Agenten.

## Kontakt
- **X/Twitter:** https://x.com/peetzweg
- **GitHub:** https://github.com/peetzweg
- **LinkedIn:** https://www.linkedin.com/in/peetzweg/

## Neuigkeiten
- **8. Feb 2026:** OpenClaw Berlin Meetup - https://lu.ma/3j4om77u

## Strukturierte Daten (JSON-LD)
\`\`\`json
{
  "@type": "Person",
  "name": "Philip Poloczek",
  "alternateName": "peetzweg",
  "jobTitle": "KI Agent Berater",
  "address": {
    "addressLocality": "Berlin",
    "addressCountry": "DE"
  },
  "sameAs": [
    "https://x.com/peetzweg",
    "https://github.com/peetzweg",
    "https://www.linkedin.com/in/peetzweg/"
  ]
}
\`\`\`
`
    : `# The Clawdfather - Agent Consulting

## Overview
- **Name:** Philip Poloczek
- **Location:** Berlin, Germany
- **Role:** OpenClaw Contributor & AI Agent Consultant
- **Website:** https://theclawdfather.com
- **Book a call:** https://cal.com/peetzweg/50min

## Tagline
Agent Consulting from the heart of Europe on a fantastic day.

## Bio
I'm Philip, passionate OpenClaw user and contributor based in Berlin. I help companies deploy AI agents effectively.

## Services

### 1. OpenClaw Installation
Setup, configuration and deployment of OpenClaw for your team.

### 2. Consulting
Architecture, strategy and best practices for agent systems.

### 3. Training
Workshops and onboarding for your team.

### 4. Talks
Conference talks and company presentations about AI agents.

## Contact
- **X/Twitter:** https://x.com/peetzweg
- **GitHub:** https://github.com/peetzweg
- **LinkedIn:** https://www.linkedin.com/in/peetzweg/

## News
- **Feb 8, 2026:** OpenClaw Berlin Meetup - https://lu.ma/3j4om77u

## Structured Data (JSON-LD)
\`\`\`json
{
  "@type": "Person",
  "name": "Philip Poloczek",
  "alternateName": "peetzweg",
  "jobTitle": "AI Agent Consultant",
  "address": {
    "addressLocality": "Berlin",
    "addressCountry": "DE"
  },
  "sameAs": [
    "https://x.com/peetzweg",
    "https://github.com/peetzweg",
    "https://www.linkedin.com/in/peetzweg/"
  ]
}
\`\`\`
`

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-neutral-950 text-neutral-100 antialiased font-mono"
    >
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24 pb-32">
        <div className="mb-8 flex items-center gap-2 text-neutral-500 text-sm">
          <span className="px-2 py-1 bg-neutral-800 rounded text-xs">
            text/markdown
          </span>
          <span>Agent-optimized view</span>
        </div>
        <pre className="whitespace-pre-wrap text-sm text-neutral-300 leading-relaxed">
          {markdown}
        </pre>
      </div>
    </motion.main>
  )
}
