/*
 * WACH RECORDS — zentrale Inhalte
 *
 * HIER kannst du später Texte und Bildauswahl ändern.
 * Bilddateien liegen in: assets/images/
 *
 * Für ein neues Foto einfach den Dateinamen bei jpg/webp ändern.
 */

const siteContent = {
  home: {
    hero: {
      title: "Felix Wach",
      subtitle: "Fotografie · WACH RECORDS",
      image: "hero-forest"
    },
    introKicker: "Selected Work",
    intro: "Fotografische Beobachtungen zwischen Natur, Landschaft, Struktur und Stille.",
    quote: "WACH RECORDS versteht Fotografie als Beobachtung: nah genug für Details, offen genug für Zusammenhänge.",
    magazine: {
      kicker: "Publikationen",
      title: "WACH RECORDS\nLeiferde und das Viehmoor 2026",
      text: "Eine fotografische Publikation von Felix Wach. Die erste Ausgabe verbindet ausgewählte Arbeiten in einem gedruckten, kuratierten Format.",
      meta: ["32 Seiten", "DIN A5", "Klammerheftung", "Limitierte Erstauflage"],
      linkText: "Leiferde und das Viehmoor 2026 →",
      coverSub: "Leiferde und das Viehmoor 2026 · Felix Wach"
    },
    gallery: [
      { image: "fog-tree", number: "01", title: "Landscape", subtitle: "Selected Work" },
      { image: "new-growth" },
      { image: "bird-branches", number: "02", title: "Structure", subtitle: "Nature / Form" },
      { image: "railway", number: "03", title: "Trace", subtitle: "Human / Landscape" },
      { image: "morning-field" },
      { image: "forest-floor", number: "04", title: "Forest", subtitle: "Study" },
      { image: "mushrooms-bw" },
      { image: "treetops" },
      { image: "golden-field", number: "05", title: "Light", subtitle: "Field Study" },
      { image: "robin", number: "06", title: "Wildlife", subtitle: "Observation" },
      { image: "frost-web" }
    ]
  },

  Arbeiten: {
    kicker: "Felix Wach",
    title: "Ausgewählte Arbeiten",
    intro: "Eine erste kuratierte Auswahl. Die Struktur ist bewusst offen gehalten, damit später eigenständige Serien wie Nature, Wildlife oder Black & White ergänzt werden können.",
    items: [
      { image: "hero-forest", title: "Forest", number: "01", alt: "Abstrakte Waldaufnahme" },
      { image: "fog-tree", title: "Landscape", number: "02", alt: "Baum im Nebel" },
      { image: "bird-branches", title: "Structure", number: "03", alt: "Vogel in Ästen" },
      { image: "railway", title: "Trace", number: "04", alt: "Bahnstrecke" },
      { image: "morning-field", title: "Light", number: "05", alt: "Morgennebel" },
      { image: "forest-floor", title: "Forest", number: "06", alt: "Waldboden" },
      { image: "mushrooms-bw", title: "Detail", number: "07", alt: "Pilze auf Baumstamm" },
      { image: "golden-field", title: "Field", number: "08", alt: "Gräser im Licht" },
      { image: "frost-web", title: "Detail", number: "09", alt: "Spinnennetz" }
    ]
  },

  Zine: {
    kicker: "Publikation",
    title: "Leiferde und das Viehmoor 2026",
    intro: "Die erste Ausgabe von WACH RECORDS. Diese Seite ist bereits für Cover, Innenseiten-Vorschau, Preis und Bestellweg vorbereitet; die finalen Angaben können vor Veröffentlichung eingesetzt werden.",
    formatTitle: "Format",
    formatText: "DIN A5, 32 Seiten, Klammerheftung. Die Erstauflage ist als kleine fotografische Publikation konzipiert.",
    orderTitle: "Bestellung",
    orderText: "Der konkrete Preis und Bestellweg sollten erst eingetragen werden, wenn Versandkosten und Zahlungsabwicklung feststehen. Für die erste kleine Auflage reicht eine einfache Bestellung per E-Mail oder ein externer Zahlungslink.",
    coverSub: "Leiferde und das Viehmoor 2026 · Felix Wach"
  },

  Ausstellungen: {
    kicker: "Archive / Kommende",
    title: "Ausstellungen",
    intro: "Hier können kommende und vergangene Ausstellungen chronologisch geführt werden.",
    currentYear: "2026",
    currentText: "Ausstellungstermine ergänzen.",
    archiveTitle: "Archiv",
    archiveText: "Vergangene Ausstellungen, Beteiligungen und fotografische Präsentationen ergänzen."
  },

  Über mich: {
    kicker: "Das bin ich",
    title: "Felix Wach",
    intro: "Fotografische Arbeiten zwischen Naturbeobachtung, Landschaft, grafischer Struktur und stillen Details.",
    sections: [
      { title: "WACH RECORDS", text: "WACH RECORDS ist die Plattform für fotografische Arbeiten, Publikationen und Ausstellungen von Felix Wach. Die Website ist bewusst reduziert aufgebaut: Die Bilder stehen im Vordergrund, Texte dienen der Einordnung." },
      { title: "Fotografischer Ansatz", text: "Der endgültige About-Text sollte persönlich formuliert werden und konkrete Arbeitsweise, Themen und Motivation beschreiben. Dieser Abschnitt ist deshalb bewusst noch kurz gehalten." }
    ]
  },

  Kontakt: {
    kicker: "Contact",
    title: "Anfragen",
    intro: "Für Ausstellungen, Publikationen, Zusammenarbeit und fotografische Anfragen.",
    email: "E-Mail-Adresse\nhier einsetzen",
    note: "Die echte geschäftliche E-Mail-Adresse wurde nicht angenommen oder erfunden. Vor Veröffentlichung hier deine gewünschte Adresse eintragen."
  },

  legal: {
    provider: "Felix Wach\n[ladungsfähige Anschrift ergänzen]",
    email: "[E-Mail ergänzen]",
    phone: "[Telefon, falls erforderlich/gewünscht]",
    other: "[ggf. Umsatzsteuer-ID, Registerangaben oder sonstige Pflichtangaben ergänzen]",
    privacyAddress: "[Anschrift ergänzen]",
    privacyEmail: "[E-Mail ergänzen]",
    hosting: "[Hosting-Anbieter und die dort anfallende Server-Log-Verarbeitung ergänzen.]"
  }
};
