export const metadata = {
  title: "Impressum | SEOID",
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Impressum</h1>

      <section className="mt-8 space-y-4 text-sm leading-6 text-slate-200/90">
        <p className="text-slate-300">
          Angaben gemäß § 5 TMG Einzelunternehmen
        </p>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="font-medium text-slate-100">SEOID</p>
          <p>IT & Automation Services</p><p>- Ali Naiof</p>
          <p>Kaiserleistraße 51</p>
          <p>63067 Offenbach</p>
          <p>Deutschland</p>

          <div className="mt-4">
            <p className="font-medium text-slate-100">Kontakt</p>
            <p>E-Mail: team[at]seoid.de</p>
          </div>

          <div className="mt-4">
            <p className="font-medium text-slate-100">Umsatzsteuer</p>
            <p>USt-IdNr.: 27/360/64199 </p>
          </div>
        </div>

        <h2 className="mt-10 text-xl font-semibold text-slate-100">
          Haftung für Inhalte
        </h2>
        <p>
          Wir erstellen die Inhalte dieser Website mit Sorgfalt. Für Richtigkeit,
          Vollständigkeit und Aktualität übernehmen wir keine Gewähr.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-100">
          Haftung für Links
        </h2>
        <p>
          Diese Website enthält ggf. Links zu externen Websites Dritter. Auf deren
          Inhalte haben wir keinen Einfluss.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-100">
          Urheberrecht
        </h2>
        <p>
          Inhalte und Werke auf dieser Website unterliegen dem Urheberrecht.
        </p>
      </section>
    </main>
  );
}
