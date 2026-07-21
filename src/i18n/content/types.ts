// Contentmodel voor de vertaalde pagina's.
//
// Eén model voor alle talen, zodat er precies één template nodig is en een
// ontbrekende sectie in een taal meteen opvalt. De Nederlandse pagina's blijven
// losse .astro-bestanden: die zijn ouder, rijker en bevatten SEO-teksten die
// niet één-op-één in dit model passen.

export type Blok =
  | { type: 'tekst'; titel?: string; alineas: string[] }
  | { type: 'checks'; titel?: string; intro?: string; items: string[] }
  | { type: 'cards'; titel?: string; intro?: string; items: { titel: string; tekst: string }[] }
  | { type: 'stappen'; titel?: string; intro?: string; items: { titel: string; tekst: string }[] }
  | { type: 'let-op'; titel: string; tekst: string };

export interface Faq {
  q: string;
  a: string;
}

export interface Pagina {
  /** <title> en meta description. */
  title: string;
  description: string;
  /** Hero. `h1` mag <br /> en <em> bevatten. */
  eyebrow: string;
  h1: string;
  sub: string;
  image: string;
  /** Compacte hero (alles behalve de homepage). */
  compact?: boolean;
  /** Trustregel onder de CTA's; alleen de homepage gebruikt deze. */
  trust?: string[];
  /** Welke CTA's in de hero staan. */
  heroCtas?: ('advies' | 'objectanalyse')[];
  blokken: Blok[];
  faqs?: Faq[];
  /** Afsluitende CTA-band onder de inhoud. */
  slotCta?: { titel: string; tekst: string };
}

/** De pagina's die in elke vertaling aanwezig moeten zijn. */
export type VertaaldeSleutel =
  | 'home' | 'aankoopbegeleiding' | 'investeren' | 'nieuwbouw'
  | 'kopen' | 'kosten' | 'overOns';

/** Contact en adviesgesprek hebben een eigen template met formulier. */
export interface FormulierPagina {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  sub: string;
  /** Opsomming met vinkjes naast het formulier. */
  punten: string[];
  /** Blokken links van het formulier. */
  extra?: { titel: string; tekst: string }[];
  /** Bevestigingstekst na verzending. */
  bevestiging: string;
  /** Tekst die als kopie naar de klant meegaat in de e-mail. */
  kopie: string;
}

export interface TaalContent {
  home: Pagina;
  aankoopbegeleiding: Pagina;
  investeren: Pagina;
  nieuwbouw: Pagina;
  kopen: Pagina;
  kosten: Pagina;
  overOns: Pagina;
  contact: FormulierPagina;
  adviesgesprek: FormulierPagina & { duur: string; besproken: string[] };
}
