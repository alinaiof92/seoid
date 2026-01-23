```tsx
// app/page.tsx
import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/seoid/new-meeting";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#071225] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#2EE9FF]/15 blur-3xl" />
        <div className="absolute bottom-[-160px] right-[-120px] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-[35%] left-[-160px] h-[420px] w-[420px] rounded-full bg-[#2EE9FF]/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl border border-white/10 bg-white/5 shadow-sm" />
          <span className="text-lg font-semibold tracking-tight">SEOID</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a className="hover:text-white" href="#loesungen">
            Leistungen
          </a>
          <a className="hover:text-white" href="#ablauf">
            Ablauf
          </a>
          <a className="hover:text-white" href="#beispiele">
            Beispiele
          </a>
          <a className="hover:text-white" href="#kontakt">
            Kontakt
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-[#2EE9FF] px-4 py-2 text-sm font-semibold text-[#071225] shadow-sm transition hover:brightness-110"
          >
            Prozess-Check buchen
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2EE9FF]" />
              AI • Automations • Websites • Marketing für KMU
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Wir bauen Systeme, die{" "}
              <span className="text-[#2EE9FF]">Leads bringen</span> und Prozesse{" "}
              <span className="text-[#2EE9FF]">automatisieren</span> – in 14 Tagen.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
              Website + Marketing + Automationen als ein System: Leads kommen rein,
              werden organisiert, automatisch nachverfolgt und in Termine/Umsatz
              verwandelt – messbar und stabil.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-[#2EE9FF] px-5 py-3 text-sm font-semibold text-[#071225] shadow-sm transition hover:brightness-110"
              >
                Kostenlosen Prozess-Check buchen
              </a>
              <a
                href="#beispiele"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                Beispiele ansehen
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/60">
              <span>✅ Antwort in 24h</span>
              <span>✅ ROI-Fokus</span>
              <span>✅ Saubere Übergabe</span>
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white/90">Was du bekommst</p>
                <p className="mt-1 text-sm text-white/60">
                  Ein End-to-End System statt einzelner Tools: Website, Leads, CRM
                  und Automationen greifen sauber ineinander.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#2EE9FF]/10 px-3 py-1 text-xs text-[#2EE9FF]">
                7–14 Tage
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {[
                {
                  title: "Website & Conversion Setup",
                  desc: "Landingpage/Website, CTA, Tracking-Setup, schnelle Ladezeit.",
                },
                {
                  title: "Lead-Flow & CRM Organisation",
                  desc: "Formular/Ads → CRM → Routing → Aufgaben, Zuständigkeiten & Pipeline.",
                },
                {
                  title: "Automationen & Follow-ups",
                  desc: "Termine, Angebote, Erinnerungen, E-Mail/WhatsApp/Slack – stabil und dokumentiert.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#071225]/40 p-4"
                >
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold">Startpunkt</p>
              <p className="mt-1 text-sm text-white/60">
                Wir wählen den Engpass mit dem höchsten ROI – und bauen dafür ein
                System, das dein Team täglich entlastet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="loesungen" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Leistungen</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
              Wir liefern das komplette Setup: Website/LP, Lead-Generierung, CRM-Organisation
              und Automationen – damit nichts liegen bleibt und dein Team schneller arbeitet.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card
            title="Website & Funnel"
            bullets={[
              "Landingpage/Website, die konvertiert",
              "Formulare → Tracking → CRM",
              "Calendly-CTA & Conversion Flow",
            ]}
          />
          <Card
            title="Marketing & Leads"
            bullets={[
              "Meta/Google Setup (je nach Bedarf)",
              "Retargeting & Follow-ups",
              "Reportings & Optimierung",
            ]}
          />
          <Card
            title="Automationen & Ops"
            bullets={[
              "Angebote/Dokumente automatisieren",
              "Termin- & Reminder-Prozesse",
              "Workflows, Freigaben, Notifications",
            ]}
          />
          <Card
            title="CRM & Organisation"
            bullets={[
              "Lead-Routing & Pipeline",
              "Aufgaben & Zuständigkeiten",
              "Monitoring & Alerts",
            ]}
          />
        </div>
      </section>

      {/* Process */}
      <section id="ablauf" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">So läuft’s ab</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Step
              num="01"
              title="Prozess-Check (30 Min)"
              desc="Wir finden den Engpass mit höchstem ROI und definieren Ziel & Messung."
            />
            <Step
              num="02"
              title="Build (7–14 Tage)"
              desc="Wir setzen Website/Leadflow + Automationen um, testen alles und bauen Logging/Alerts."
            />
            <Step
              num="03"
              title="Go-Live & Optimierung"
              desc="Feintuning nach echten Daten – dann sauber dokumentieren & übergeben."
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#071225]/40 p-5">
            <p className="text-sm text-white/70">
              Fokus: <span className="text-white">1 System</span> bauen, das Leads organisiert und sofort Zeit spart.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#2EE9FF] px-5 py-3 text-sm font-semibold text-[#071225] shadow-sm transition hover:brightness-110"
            >
              Prozess-Check buchen
            </a>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="beispiele" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Beispiele</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
          Use-Cases, die in KMU schnell Wirkung zeigen – ohne Buzzword-Bingo.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Example
            title="Landingpage, die Leads liefert"
            desc="LP → Tracking → Formular → CRM → Calendly → Follow-up Automatik."
          />
          <Example
            title="Leads werden automatisch qualifiziert"
            desc="Regeln/Scoring → richtiger Ansprechpartner → Slack/WhatsApp/E-Mail."
          />
          <Example
            title="Sales-Prozess ohne Chaos"
            desc="Pipeline + Aufgaben + Erinnerungen + Angebotsdrafts – alles nachvollziehbar."
          />
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            Lass uns <span className="text-[#2EE9FF]">dein Lead-System</span> bauen – und du entscheidest danach weiter.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
            Kostenloser Call. Klare Empfehlung. Keine Verpflichtung.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#2EE9FF] px-6 py-3 text-sm font-semibold text-[#071225] shadow-sm transition hover:brightness-110"
            >
              Prozess-Check buchen
            </a>
            <a
              href="#loesungen"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p>© {new Date().getFullYear()} SEOID</p>
          <div className="flex gap-4">
            <Link className="hover:text-white" href="/impressum">
              Impressum
            </Link>
            <Link className="hover:text-white" href="/datenschutz">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:bg-white/10">
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/65">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#2EE9FF]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-[#2EE9FF]">{num}</span>
        <span className="text-xs text-white/50">SEOID Method</span>
      </div>
      <p className="mt-3 text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-6 text-white/60">{desc}</p>
    </div>
  );
}

function Example({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-6 text-white/60">{desc}</p>
      <div className="mt-5 inline-flex rounded-2xl border border-white/10 bg-[#071225]/40 px-3 py-1 text-xs text-white/60">
        System statt Handarbeit
      </div>
    </div>
  );
}
```
