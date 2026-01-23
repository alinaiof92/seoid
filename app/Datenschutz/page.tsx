export const metadata = {
  title: "Datenschutz | SEOID",
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Datenschutzerklärung</h1>

      <section className="mt-8 space-y-4 text-sm leading-6 text-slate-200/90">
        <p className="text-slate-300">
          Diese Hinweise informieren dich über die Verarbeitung personenbezogener Daten
          gemäß Art. 13 DSGVO.
        </p>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="font-medium text-slate-100">1) Verantwortlicher</p>
          <p>[Firmenname / Betreibername]</p>
          <p>[Straße Hausnr.], [PLZ Ort], [Land]</p>
          <p>E-Mail: [email@domain.de]</p>
        </div>

        <h2 className="mt-10 text-xl font-semibold text-slate-100">
          2) Hosting (Vercel)
        </h2>
        <p>
          Diese Website wird über Vercel gehostet. Dabei werden technisch notwendige
          Daten (z.B. IP-Adresse, Zeitpunkt, aufgerufene Seite, User-Agent) in
          Server-Logs verarbeitet, um Betrieb und Sicherheit zu gewährleisten.
        </p>
        <p className="text-slate-300">
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb).
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-100">
          3) Kontaktaufnahme
        </h2>
        <p>
          Wenn du uns per E-Mail kontaktierst, verarbeiten wir deine Angaben zur Bearbeitung
          der Anfrage.
        </p>
        <p className="text-slate-300">
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder
          Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-100">
          4) Terminbuchung via Calendly
        </h2>
        <p>
          Für Terminbuchungen nutzen wir Calendly. Bei der Buchung werden Daten (z.B. Name,
          E-Mail, Terminwunsch) an Calendly übermittelt und dort verarbeitet.
        </p>
        <p>
          Bitte beachte zusätzlich die Datenschutzhinweise von Calendly. (Link in deinem Calendly-Flow)
        </p>
        <p className="text-slate-300">
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Termin-/Anbahnung) und ggf. Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-100">
          5) Empfänger / Auftragsverarbeitung
        </h2>
        <p>
          Wir setzen Dienstleister (z.B. Hosting/Termin-Tool) ein, die Daten in unserem Auftrag verarbeiten
          (Auftragsverarbeitung). Eine Übermittlung in Drittländer kann je nach Anbieter nicht ausgeschlossen
          sein.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-100">
          6) Speicherdauer
        </h2>
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie es für die Zwecke erforderlich ist
          bzw. gesetzliche Aufbewahrungspflichten bestehen.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-100">
          7) Deine Rechte
        </h2>
        <p>
          Du hast u.a. das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit sowie Widerspruch. Außerdem hast du das Recht auf Beschwerde bei einer
          Datenschutzaufsichtsbehörde.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-100">
          8) Änderungen
        </h2>
        <p>
          Wir können diese Datenschutzerklärung anpassen, wenn sich Rechtslage oder Verarbeitung ändern.
        </p>
      </section>
    </main>
  );
}
