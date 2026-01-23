export const metadata = {
  title: "Impressum | SEOID",
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Impressum</h1>

      <section className="mt-8 space-y-4 text-sm leading-6 text-slate-200/90">
        <p className="text-slate-300">
          Angaben gemäß § 5 DDG und § 18 MStV.
        </p>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="font-medium text-slate-100">SEOID</p>
          <p>[Firmenname / Betreibername]</p>
          <p>[Straße Hausnr.]</p>
          <p>[PLZ Ort]</p>
          <p>[Land]</p>

          <div className="mt-4">
            <p className="font-medium text-slate-100">Kontakt</p>
            <p>E-Mail: [email@domain.de]</p>
            <p>Telefon: [+49 …] (optional, aber empfohlen)</p>
          </div>

          <div className="mt-4">
            <p className="font-medium text-slate-100">Vertreten durch</p>
            <p>[Name der vertretungsberechtigten Person, falls Firma]</p>
          </div>

          <div className="mt-4">
            <p className="font-medium text-slate-100">Registereintrag</p>
            <p>[Handelsregister, Registernummer, Registergericht] (falls vorhanden)</p>
          </div>

          <div className="mt-4">
            <p className="font-medium text-slate-100">Umsatzsteuer</p>
            <p>USt-IdNr.: [DE…] (falls vorhanden)</p>
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
