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

## Angebote

### Individuell - €250
**Dein eigener KI Assistent**
Dein Setup, deine API Keys, deine Kontrolle.

Kein weiteres Abo, sondern ein echtes System, das dir gehört. Deine eigene KI Infrastruktur — läuft auf deiner Hardware oder einem kleinen Server, verbunden mit dem KI-Anbieter deiner Wahl.

**Was du bekommst:**
- Vollständige OpenClaw Installation auf deinem Mac, PC oder günstigem VPS
- Bring your own AI — Verbindung zu OpenAI, Anthropic, Mistral oder lokalen Modellen
- Individuelle Persönlichkeit — seriöser Assistent, witziger Begleiter oder irgendwas dazwischen
- Persistenter Speicher — erinnert sich an deine Projekte, Präferenzen und vergangene Gespräche
- Tool-Integrationen — Kalender, Notizen, Browser, was auch immer du tatsächlich nutzt
- Messenger-Zugang — sprich darüber via Telegram, Signal oder WhatsApp
- 1-stündiges Onboarding-Gespräch — wir richten es gemeinsam ein, du weißt danach, wie's geht

**Das ist für dich, wenn:**
- Du eine KI willst, die dir gehört — dein Setup, deine API Keys, deine Kontrolle
- Du ChatGPT ausprobiert hast, aber etwas willst, das sich erinnert und Dinge erledigt
- Du Integrationen mit deinen echten Tools willst, nicht nur ein Chat-Fenster
- Du neugierig auf KI Agenten bist und praktische Erfahrung sammeln willst

**Preis:** €250 (plus deine eigenen KI-Anbieterkosten — typischerweise €20-50/Monat je nach Nutzung)

### Unternehmen - Ab €2.500
**KI Agenten für dein Team**
Integriert, skalierbar, unter deiner Kontrolle.

Kein weiteres SaaS-Tool, das dein Team ignoriert. Das ist KI-Infrastruktur, die sich in deine bestehenden Workflows einklinkt — deine Systeme, deine Daten, deine Anbieter.

**Was du bekommst:**
- OpenClaw Deployment — on-premise, Cloud oder hybrid. Deine Infrastruktur, deine Regeln.
- Bring your own AI — OpenAI, Anthropic, Mistral, Azure oder selbst gehostete Modelle
- Multi-Agenten Setup — dedizierte Agenten für verschiedene Teams oder Funktionen
- System-Integrationen — Slack, E-Mail, Jira, CRM, interne Tools, APIs
- Custom Workflows — automatisiere repetitive Prozesse, für die dein Team Stunden verschwendet
- Team Onboarding Workshop — praktisches Training, damit dein Team es auch wirklich nutzt
- Security & Compliance Review — Daten bleiben da, wo sie bleiben müssen

**Das ist für dich, wenn:**
- Dein Team Stunden für Aufgaben braucht, die KI in Minuten erledigen könnte
- Du KI willst, die innerhalb deiner Systeme arbeitet, nicht in einem separaten Chat-Fenster
- Du Kontrolle über Daten, Anbieter und Infrastruktur brauchst
- Du bereit bist, von 'wir sollten uns KI mal anschauen' zum tatsächlichen Deployment zu kommen

**Preis:** Ab €2.500 (Beinhaltet Architektur, Deployment und Team-Onboarding. Umfang und Preis werden an eure Teamgröße und Anforderungen angepasst.)

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

## Offerings

### Personal - €250
**Your own AI assistant**
Your setup, your API keys, your control.

Not another subscription, an actual system that's yours. Your own AI infrastructure — running on your hardware or a small server, connected to the AI provider of your choice.

**What you get:**
- Full OpenClaw installation on your Mac, PC, or a cheap VPS
- Bring your own AI — connect to OpenAI, Anthropic, Mistral, or run local models
- Custom personality — serious assistant, witty companion, or something in between
- Persistent memory — it remembers your projects, preferences, and past conversations
- Tool integrations — calendar, notes, browser, whatever you actually use
- Messaging access — talk to it via Telegram, Signal, or WhatsApp
- 1-hour onboarding call — we set it up together, you leave knowing how to use it

**This is for you if:**
- You want an AI that's yours — your setup, your API keys, your control
- You've tried ChatGPT but want something that remembers and does things
- You want integrations with your actual tools, not a chat window
- You're curious about AI agents and want hands-on experience

**Price:** €250 (plus your own AI provider costs — typically €20-50/month depending on usage)

### Companies - From €2,500
**AI agents for your team**
Integrated, scalable, under your control.

Not another SaaS tool your team ignores. This is AI infrastructure that plugs into your existing workflows — your systems, your data, your providers.

**What you get:**
- OpenClaw deployment — on-premise, cloud, or hybrid. Your infrastructure, your rules.
- Bring your own AI — OpenAI, Anthropic, Mistral, Azure, or self-hosted models
- Multi-agent setup — dedicated agents for different teams or functions
- System integrations — Slack, email, Jira, CRM, internal tools, APIs
- Custom workflows — automate repetitive processes your team wastes hours on
- Team onboarding workshop — hands-on training so your team actually uses it
- Security & compliance review — data stays where you need it to stay

**This is for you if:**
- Your team spends hours on tasks AI could handle in minutes
- You want AI that works inside your systems, not in a separate chat window
- You need control over data, providers, and infrastructure
- You're ready to move beyond 'we should look into AI' to actually deploying it

**Price:** From €2,500 (Includes architecture, deployment, and team onboarding. Scope and pricing adjusted to your team size and needs.)

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
