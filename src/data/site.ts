// Centrale site-configuratie. Eén bron van waarheid voor NAP, nav en contact.
export const site = {
  naam: 'Maghreb Estates',
  url: 'https://maghreb-estates.com',
  tagline: 'Vastgoed in Marokko — vanuit Nederland, met Nederlandse duidelijkheid en lokale controle.',
  telefoon: '+31 6 83 49 87 15',
  telefoonHref: '+31683498715',
  email: 'info@maghreb-estates.com',
  whatsapp: '31683498715',
  land: 'NL',
  logo: '/images/logo.png',
  ogImage: '/images/villa5.jpg',
  // Entity SEO: vul social-/profiel-URL's aan zodra beschikbaar (Instagram, LinkedIn,
  // Facebook, YouTube, Google Business Profile). Leeg laten is beter dan verzinnen.
  sameAs: [] as string[],
  oprichting: 2024,
};

// Hoofdnavigatie. Dropdowns houden de balk kort maar ontsluiten alle hubs.
export const nav = [
  {
    label: 'Kopen',
    href: '/huis-kopen-marokko/',
    children: [
      { label: 'Huis kopen Marokko', href: '/huis-kopen-marokko/' },
      { label: 'Kopen vanuit Nederland', href: '/huis-kopen-marokko-vanuit-nederland/' },
      { label: 'Appartement kopen', href: '/appartement-kopen-marokko/' },
      { label: 'Appartement in termijnen', href: '/appartement-marokko-kopen-in-termijnen/' },
      { label: 'Nieuwbouwprojecten', href: '/nieuwbouwprojecten-marokko/' },
      { label: 'Off-plan vastgoed', href: '/off-plan-vastgoed-marokko/' },
      { label: 'Aankoopbegeleiding', href: '/aankoopbegeleiding-vastgoed-marokko/' },
    ],
  },
  {
    label: 'Veilig kopen',
    href: '/risicos-huis-kopen-marokko/',
    children: [
      { label: 'Risico’s huis kopen', href: '/risicos-huis-kopen-marokko/' },
      { label: 'Oplichting voorkomen', href: '/oplichting-vastgoed-marokko-voorkomen/' },
      { label: 'Kosten huis kopen', href: '/kosten-huis-kopen-marokko/' },
      { label: 'Verborgen kosten', href: '/verborgen-kosten-huis-kopen-marokko/' },
      { label: 'Koopcontract', href: '/koopcontract-marokko-vastgoed/' },
      { label: 'Notaris Marokko', href: '/notaris-marokko-vastgoed/' },
      { label: 'Titre foncier', href: '/titre-foncier-marokko/' },
      { label: 'Volmacht bij aankoop', href: '/volmacht-huis-kopen-marokko/' },
      { label: 'Begrippenlijst', href: '/begrippen-vastgoed-marokko/' },
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
    label: 'Beheer & verkoop',
    href: '/vastgoedbeheer-marokko/',
    children: [
      { label: 'Vastgoedbeheer', href: '/vastgoedbeheer-marokko/' },
      { label: 'Verhuurbeheer', href: '/verhuurbeheer-marokko/' },
      { label: 'Woningbeheer', href: '/woningbeheer-marokko/' },
      { label: 'Sleutelbeheer', href: '/sleutelbeheer-marokko/' },
      { label: 'Huis verhuren', href: '/huis-verhuren-marokko-vanuit-nederland/' },
      { label: 'Airbnb-beheer', href: '/airbnb-beheer-marokko/' },
      { label: 'Huis verkopen', href: '/huis-verkopen-marokko-vanuit-nederland/' },
      { label: 'Waarde woning bepalen', href: '/waarde-woning-marokko-bepalen/' },
    ],
  },
  { label: 'Steden', href: '/vastgoed-marokko/#steden' },
  { label: 'Over ons', href: '/over-ons/' },
];

// CTA-varianten, hergebruikt door de <Cta />-component.
export const ctas = {
  advies: { label: 'Plan gratis adviesgesprek', href: '/contact/' },
  controle: { label: 'Laat je aankoop controleren', href: '/contact/?doel=aankoopcontrole' },
  checklist: { label: 'Ontvang de checklist', href: '/contact/?doel=checklist' },
  analyse: { label: 'Vraag investeringsanalyse aan', href: '/contact/?doel=investeringsanalyse' },
};
