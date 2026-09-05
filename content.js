/*
 * WACH RECORDS — zentrale Inhalte
 *
 * HIER kannst du später Texte und Bildauswahl ändern.
 * Bilddateien liegen in: assets/images/
 */

const siteContent = {
  home: {
    hero: {
      title: "Felix Wach",
      subtitle: "Fotografie · WACH RECORDS",
      image: "hero-forest"
    },
    introKicker: "Ausgewählte Arbeiten",
    intro: "Fotografische Beobachtungen zwischen Natur, Landschaft, Struktur und Stille.",
    quote: "WACH RECORDS versteht Fotografie als Beobachtung: nah genug für Details, offen genug für Zusammenhänge.",
    magazine: {
      kicker: "Publikation",
      title: "WACH RECORDS\nLeiferde und das Viehmoor 2026",
      text: "Eine fotografische Publikation von Felix Wach. Die erste Ausgabe verbindet ausgewählte Arbeiten in einem gedruckten, kuratierten Format.",
      meta: ["32 Seiten", "DIN A5", "Klammerheftung", "Limitierte Erstauflage"],
      linkText: "Leiferde und das Viehmoor 2026 →",
      coverSub: "Leiferde und das Viehmoor 2026 · Felix Wach"
    },
    gallery: [
      { image: "fog-tree", number: "01", title: "Landschaft", subtitle: "Ausgewählte Arbeit" },
      { image: "new-growth" },
      { image: "bird-branches", number: "02", title: "Struktur", subtitle: "Natur / Form" },
      { image: "railway", number: "03", title: "Spur", subtitle: "Mensch / Landschaft" },
      { image: "morning-field" },
      { image: "forest-floor", number: "04", title: "Wald", subtitle: "Studie" },
      { image: "mushrooms-bw" },
      { image: "treetops" },
      { image: "golden-field", number: "05", title: "Licht", subtitle: "Feldstudie" },
      { image: "robin", number: "06", title: "Tierwelt", subtitle: "Beobachtung" },
      { image: "frost-web" }
    ]
  },

  work: {
    kicker: "Felix Wach",
    title: "Ausgewählte Arbeiten",
    intro: "Eine erste kuratierte Auswahl. Die Struktur ist bewusst offen gehalten, damit später eigenständige Serien wie Natur, Tierwelt oder Schwarz-Weiß ergänzt werden können.",
    items: [
      { image: "hero-forest", title: "Wald", number: "01", alt: "Abstrakte Waldaufnahme" },
      { image: "fog-tree", title: "Landschaft", number: "02", alt: "Baum im Nebel" },
      { image: "bird-branches", title: "Struktur", number: "03", alt: "Vogel in Ästen" },
      { image: "railway", title: "Spur", number: "04", alt: "Bahnstrecke" },
      { image: "morning-field", title: "Licht", number: "05", alt: "Morgennebel" },
      { image: "forest-floor", title: "Wald", number: "06", alt: "Waldboden" },
      { image: "mushrooms-bw", title: "Detail", number: "07", alt: "Pilze auf Baumstamm" },
      { image: "golden-field", title: "Feld", number: "08", alt: "Gräser im Licht" },
      { image: "frost-web", title: "Detail", number: "09", alt: "Spinnennetz" }
    ]
  },

  magazine: {
    kicker: "Publikation",
    title: "Leiferde und das Viehmoor 2026",
    intro: "Die erste Ausgabe von WACH RECORDS. Diese Seite ist bereits für Cover, Innenseiten-Vorschau, Preis und Bestellweg vorbereitet; die finalen Angaben können vor Veröffentlichung eingesetzt werden.",
    formatTitle: "Format",
    formatText: "DIN A5, 32 Seiten, Klammerheftung. Die Erstauflage ist als kleine fotografische Publikation konzipiert.",
    orderTitle: "Bestellung",
    orderText: "Der konkrete Preis und Bestellweg sollten erst eingetragen werden, wenn Versandkosten und Zahlungsabwicklung feststehen. Für die erste kleine Auflage reicht eine einfache Bestellung per E-Mail oder ein externer Zahlungslink.",
    coverSub: "Leiferde und das Viehmoor 2026 · Felix Wach"
  },

  exhibitions: {
    kicker: "Archiv / Kommende",
    title: "Ausstellungen",
    intro: "Hier können kommende und vergangene Ausstellungen chronologisch geführt werden.",
    currentYear: "2026",
    currentText: "26./27.09. LeifArt Leiferde",
    archiveTitle: "Archiv",
    archiveText: "Vergangene Ausstellungen, Beteiligungen und fotografische Präsentationen ergänzen."
  },

  about: {
    kicker: "Das bin ich",
    title: "Felix Wach",
    intro: "Fotografische Arbeiten zwischen Naturbeobachtung, Landschaft, grafischer Struktur und stillen Details.",
    sections: [
      { title: "WACH RECORDS", text: "WACH RECORDS ist die Plattform für fotografische Arbeiten, Publikationen und Ausstellungen von Felix Wach. Die Website ist bewusst reduziert aufgebaut: Die Bilder stehen im Vordergrund, Texte dienen der Einordnung." },
      { title: "Fotografischer Ansatz", text: "Der endgültige Text sollte persönlich formuliert werden und konkrete Arbeitsweise, Themen und Motivation beschreiben. Dieser Abschnitt ist deshalb bewusst noch kurz gehalten." }
    ]
  },

  contact: {
    kicker: "Kontakt",
    title: "Anfragen",
    intro: "Für Ausstellungen, Publikationen, Zusammenarbeit und fotografische Anfragen.",
    email: "E-Mail-Adresse\nfoto@wachrecords.de",
    note: Die echte geschäftliche E-Mail-Adresse wurde nicht angenommen oder erfunden. Vor Veröffentlichung hier deine gewünschte Adresse eintragen."
  },

  legal: {
    provider: "Felix Wach\nRokamp 6a, 38542 Leiferde",
    email: "[foto@wachrecords.de]",
    phone: [Telefon, falls erforderlich/gewünscht],
    other: [ggf. Umsatzsteuer-ID, Registerangaben oder sonstige Pflichtangaben ergänzen],
    privacyAddress: "[Anschrift ergänzen]",
    privacyEmail: "[E-Mail ergänzen]",
    hosting: "[Hosting-Anbieter und die dort anfallende Server-Log-Verarbeitung ergänzen.]"
  }
};
