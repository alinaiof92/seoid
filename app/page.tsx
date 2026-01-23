import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/seoid/new-meeting";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#071225] text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl border border-white/10 bg-white/5" />
          <span className="text-lg font-semibold tracking-tight">SEOID</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a className="hover:text-white" href="#loesungen">Leistungen</a>
          <a className="hover:text-white" href="#ablauf">Ablauf</a>
          <a className="hover:text-white" href="#beispiele">Beispiele</a>
          <a className="hover:text-white" href="#kontakt">Kontakt</a>
        </nav>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-2xl bg-[#2EE9FF] px-4 py-2 text-sm font-semibold text-[#071225] transition hover:brightness-110"
        >
          Prozess-Check buchen
        </a>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-10 pb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2EE9FF]" />
          AI • Automations • Websites • Marketing für KMU
        </div>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
          Wir bauen Systeme, die <span className="text-[#2EE9FF]">Leads bringen</span> und Prozesse{" "}
          <span className="text-[#2EE9FF]">automatisieren</span>.
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
          Website + Marketing + CRM + Automationen als ein System: Leads kommen rein, werden organisiert,
          automatisch nachverfolgt und in Termine/Umsatz verwandelt.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-[#2EE9FF] px-5 py-3 text-sm font-semibold text-[#071225] transition hover:brightness-110"
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
      </section>

      <section id="loesungen" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Leistungen</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
          Website/LP, Lead-Generierung, CRM-Organisation und Automationen – damit nichts liegen bleibt.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Website & Funnel" bullets={["LP/Website, die konvertiert", "Tracking + Forms", "Calendly Flow"]} />
          <Card title="Marketing & Leads" bullets={["Meta/Google Setup", "Retargeting", "Reporting"]} />
          <Card title="Automationen & Ops" bullets={["Angebote/Dokumente", "Reminders", "Workflows/Alerts"]} />
          <Card title="CRM & Organisation" bullets={["Pipeline", "Zuständigkeiten", "Monitoring"]} />
        </div>
      </section>

      <section id="ablauf" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Ablauf</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Step num="01" title="Prozess-Check" desc="Wir finden den ROI-Engpass und definieren Ziel & Messung." />
          <Step num="02" title="Build (7–14 Tage)" desc="Website/Leadflow + Automationen umsetzen, testen, stabilisieren." />
          <Step num="03" title="Go-Live" desc="Feintuning nach Daten, Doku & Übergabe." />
        </div>
      </section>

      <section id="beispiele" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Beispiele</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Example title="Landingpage, die Leads liefert" desc="LP → CRM → Calendly → Follow-ups automatisch." />
          <Example title="Automatische Qualifizierung" desc="Regeln/Scoring → Routing → Notification." />
          <Example title="Sales ohne Chaos" desc="Pipeline + Aufgaben + Erinnerungen + Angebotsdrafts." />
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            Kostenloser Prozess-Check – danach entscheidest du weiter.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
            Klarer Plan, schneller ROI, kein Gelaber.
          </p>
          <div className="mt-7">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#2EE9FF] px-6 py-3 text-sm font-semibold text-[#071225] transition hover:brightness-110"
            >
              Prozess-Check buchen
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p>© {new Date().getFullYear()} SEOID</p>
          <div className="flex gap-4">
            <Link className="hover:text-white" href="/impressum">Impressum</Link>
            <Link className="hover:text-white" href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
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
        <span className="text-xs text-white/50">SEOID</span>
      </div>
      <p className="mt-3 text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-6 text-white/60">{desc}</p>
    </div>
  );
}

function Example({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-6 text-white/60">{desc}</p>
    </div>
  );
}
