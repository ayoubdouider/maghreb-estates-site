// Centrale site-configuratie. Eén bron van waarheid voor NAP, nav en contact.
export const site = {
  naam: 'Maghreb Estates',
  url: 'https://maghreb-estates.com',
  tagline: 'Nederlandstalige begeleiding bij het kopen, beoordelen en beheren van vastgoed in Marokko.',
  telefoon: '+31 6 83 49 87 15',
  telefoonHref: '+31683498715',
  email: 'a.douider@maghreb-estates.com',
  whatsapp: '31683498715',
  land: 'NL',
  logo: '/images/logo.png',
  ogImage: '/images/villa5.jpg',
  // Entity SEO: vul social-/profiel-URL's aan zodra beschikbaar (Instagram, LinkedIn,
  // Facebook, YouTube, Google Business Profile). Leeg laten is beter dan verzinnen.
  sameAs: [] as string[],
  oprichting: 2024,
  // Bedrijfsgegevens — officiële Marokkaanse inschrijving (SARL, ingeschreven bij de
  // rechtbank van Rabat, geïmmatriculeerd 03-05-2026). Leeg = niet tonen (geen nepdata).
  vestigingsplaats: 'Rabat, Marokko',
  adres: 'N°48 Appt 1, Avenue Fal Ouled Oumeir, Agdal', // straat + wijk (Rabat)
  rechtsvorm: 'SARL', // Société à Responsabilité Limitée (besloten vennootschap)
  activiteit: 'Agence immobilière',
  rc: '199575',            // Registre de Commerce (Tribunal de Commerce, Rabat)
  ice: '003968179000032',  // Identifiant Commun de l'Entreprise
  kapitaal: '100.000 MAD',
};

// WhatsApp-linkhelper (optioneel voorgevuld bericht).
export const waLink = (bericht = '', nummer = site.whatsapp) =>
  `https://wa.me/${nummer}${bericht ? `?text=${encodeURIComponent(bericht)}` : ''}`;

// Team — echte gegevens overgenomen van de oude site.
// TODO: LinkedIn-URL's toevoegen zodra bekend; eventueel persoonlijkere bio.
export const team = [
  {
    naam: 'Ayoub Douider',
    rol: 'Vastgoedadviseur & aankoopbegeleider',
    foto: '/images/ayoub.jpg',
    telefoon: '+31 6 83 49 87 15',
    telefoonHref: '+31683498715',
    whatsapp: '31683498715',
    email: 'a.douider@maghreb-estates.com',
    linkedin: '',
    bio: 'Begeleidt Nederlandstalige kopers bij het kopen, controleren en beheren van vastgoed in Marokko. Spreekt Nederlands, Arabisch/Darija en Frans.',
  },
  {
    naam: 'Marouane Haddane',
    rol: 'Vastgoedadviseur & aankoopbegeleider',
    foto: '/images/marouane.png',
    telefoon: '+31 6 44 68 17 82',
    telefoonHref: '+31644681782',
    whatsapp: '31644681782',
    email: 'm.haddane@maghreb-estates.com',
    linkedin: '',
    bio: 'Begeleidt kopers en eigenaren bij aankoop, dossiercontrole en beheer in Marokko, met lokale kennis van de markt en de papieren. Spreekt Nederlands, Arabisch/Darija en Frans.',
  },
];

// De 7 prominente steden (rijke pagina's + Steden-dropdown).
export const prominenteSteden = [
  { naam: 'Tanger', slug: 'tanger' },
  { naam: 'Casablanca', slug: 'casablanca' },
  { naam: 'Rabat', slug: 'rabat' },
  { naam: 'Marrakech', slug: 'marrakech' },
  { naam: 'Agadir', slug: 'agadir' },
  { naam: 'Nador', slug: 'nador' },
  { naam: 'Al Hoceima', slug: 'al-hoceima' },
];

// Hoofdnavigatie — bewust rustig. Per dropdown alleen de kernpagina's die een
// bezoeker direct nodig heeft (max. 3-4 items). Ondersteunende en long-tail
// SEO-pagina's blijven indexeerbaar en worden via de footer en interne links
// bereikbaar gehouden, niet via het hoofdmenu.
export const nav = [
  {
    label: 'Kopen in Marokko',
    href: '/huis-kopen-marokko/',
    children: [
      { label: 'Huis kopen in Marokko', href: '/huis-kopen-marokko/' },
      { label: 'Kopen vanuit Nederland', href: '/huis-kopen-marokko-vanuit-nederland/' },
      { label: 'Aankoopbegeleiding', href: '/aankoopbegeleiding-vastgoed-marokko/' },
      { label: 'Nieuwbouw & off-plan', href: '/nieuwbouw-vastgoed-marokko/' },
    ],
  },
  {
    label: 'Investeren',
    href: '/investeren-vastgoed-marokko/',
    children: [
      { label: 'Investeren in vastgoed', href: '/investeren-vastgoed-marokko/' },
      { label: 'Steden vergelijken', href: '/beste-stad-investeren-vastgoed-marokko/' },
      { label: 'Airbnb & verhuur', href: '/airbnb-marokko-investering/' },
    ],
  },
  {
    label: 'Beheer & verkoop',
    href: '/vastgoedbeheer-marokko/',
    children: [
      { label: 'Vastgoedbeheer', href: '/vastgoedbeheer-marokko/' },
      { label: 'Woning verhuren', href: '/huis-verhuren-marokko-vanuit-nederland/' },
      { label: 'Airbnb-beheer', href: '/airbnb-beheer-marokko/' },
      { label: 'Woning verkopen', href: '/huis-verkopen-marokko-vanuit-nederland/' },
    ],
  },
  {
    label: 'Steden',
    href: '/vastgoed-marokko/',
    children: [
      ...prominenteSteden.map((s) => ({ label: s.naam, href: `/vastgoed-${s.slug}/` })),
      { label: 'Alle steden', href: '/vastgoed-marokko/' },
    ],
  },
  {
    label: 'Kennisbank',
    href: '/kennisbank/',
    children: [
      { label: 'Kosten', href: '/kosten-huis-kopen-marokko/' },
      { label: 'Risico’s', href: '/risicos-huis-kopen-marokko/' },
      { label: 'Juridische documenten', href: '/juridische-documenten-vastgoed-marokko/' },
      { label: 'Begrippenlijst', href: '/begrippen-vastgoed-marokko/' },
      { label: 'Alle artikelen', href: '/kennisbank/' },
    ],
  },
  { label: 'Over ons', href: '/over-ons/' },
];

// Juridische pagina's (footer).
export const legal = [
  { label: 'Privacybeleid', href: '/privacybeleid/' },
  { label: 'Algemene voorwaarden', href: '/algemene-voorwaarden/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
];

// CTA-varianten.
export const ctas = {
  advies: { label: 'Plan gratis adviesgesprek', href: '/contact/' },
  controle: { label: 'Stuur een woning ter controle', href: '/contact/?doel=aankoopcontrole' },
  checklist: { label: 'Ontvang de checklist', href: '/checklist-vastgoed-marokko/' },
  analyse: { label: 'Vraag investeringsanalyse aan', href: '/contact/?doel=investeringsanalyse' },
};
