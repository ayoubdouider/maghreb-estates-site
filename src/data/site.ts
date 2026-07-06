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
  // Bedrijfsgegevens — TODO: invullen zodra bekend. Leeg = niet tonen (geen nepdata).
  vestigingsplaats: '', // TODO: bv. "Tanger, Marokko" of NL-vestiging
  kvk: '',              // TODO: KvK-nummer indien NL-inschrijving
  btw: '',              // TODO: BTW-nummer indien relevant
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

// Hoofdnavigatie — rustig, 6 items + losse CTA-knop in Nav.astro.
export const nav = [
  {
    label: 'Kopen in Marokko',
    href: '/huis-kopen-marokko/',
    children: [
      { label: 'Huis kopen Marokko', href: '/huis-kopen-marokko/' },
      { label: 'Kopen vanuit Nederland', href: '/huis-kopen-marokko-vanuit-nederland/' },
      { label: 'Aankoopbegeleiding', href: '/aankoopbegeleiding-vastgoed-marokko/' },
      { label: 'Appartement kopen', href: '/appartement-kopen-marokko/' },
      { label: 'Nieuwbouwprojecten', href: '/nieuwbouwprojecten-marokko/' },
      { label: 'Off-plan vastgoed', href: '/off-plan-vastgoed-marokko/' },
      { label: 'Appartement in termijnen', href: '/appartement-marokko-kopen-in-termijnen/' },
    ],
  },
  {
    label: 'Investeren',
    href: '/investeren-vastgoed-marokko/',
    children: [
      { label: 'Investeren in vastgoed', href: '/investeren-vastgoed-marokko/' },
      { label: 'Rendement vastgoed', href: '/rendement-vastgoed-marokko/' },
      { label: 'Huurrendement Marokko', href: '/huur-rendement-marokko/' },
      { label: 'Beste stad om te investeren', href: '/beste-stad-investeren-vastgoed-marokko/' },
      { label: 'Airbnb als investering', href: '/airbnb-marokko-investering/' },
    ],
  },
  {
    label: 'Beheer & verhuur',
    href: '/vastgoedbeheer-marokko/',
    children: [
      { label: 'Vastgoedbeheer', href: '/vastgoedbeheer-marokko/' },
      { label: 'Verhuurbeheer', href: '/verhuurbeheer-marokko/' },
      { label: 'Airbnb-beheer', href: '/airbnb-beheer-marokko/' },
      { label: 'Huis verhuren', href: '/huis-verhuren-marokko-vanuit-nederland/' },
      { label: 'Woningbeheer', href: '/woningbeheer-marokko/' },
      { label: 'Huis verkopen', href: '/huis-verkopen-marokko-vanuit-nederland/' },
      { label: 'Waarde woning bepalen', href: '/waarde-woning-marokko-bepalen/' },
    ],
  },
  {
    label: 'Steden',
    href: '/vastgoed-marokko/',
    children: [
      ...prominenteSteden.map((s) => ({ label: s.naam, href: `/vastgoed-${s.slug}/` })),
    ],
  },
  {
    label: 'Kennisbank',
    href: '/risicos-huis-kopen-marokko/',
    children: [
      { label: 'Risico’s huis kopen', href: '/risicos-huis-kopen-marokko/' },
      { label: 'Kosten huis kopen', href: '/kosten-huis-kopen-marokko/' },
      { label: 'Verborgen kosten', href: '/verborgen-kosten-huis-kopen-marokko/' },
      { label: 'Oplichting voorkomen', href: '/oplichting-vastgoed-marokko-voorkomen/' },
      { label: 'Koopcontract', href: '/koopcontract-marokko-vastgoed/' },
      { label: 'Notaris Marokko', href: '/notaris-marokko-vastgoed/' },
      { label: 'Titre foncier', href: '/titre-foncier-marokko/' },
      { label: 'Volmacht bij aankoop', href: '/volmacht-huis-kopen-marokko/' },
      { label: 'Begrippenlijst', href: '/begrippen-vastgoed-marokko/' },
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
