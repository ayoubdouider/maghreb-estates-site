// CTA-blokken per paginatype (conversie). Professioneel, geen agressieve sales.
import { waLink } from './site';

export type CtaVariant = 'koop' | 'juridisch' | 'investering' | 'beheer' | 'stad';

interface CtaKnop { label: string; href: string; primary?: boolean; }
interface CtaBlok { titel: string; tekst: string; knoppen: CtaKnop[]; }

const waVraag = waLink('Hallo Maghreb Estates, ik heb een vraag over vastgoed in Marokko. Kunnen jullie meekijken?');

export const ctaContent: Record<CtaVariant, CtaBlok> = {
  koop: {
    titel: 'Twijfelt u over een woning of project?',
    tekst: 'Stuur ons de advertentie, documenten of projectinformatie. Wij kijken kritisch naar de papieren, prijs, locatie en risico’s voordat u verdergaat.',
    knoppen: [
      { label: 'Stuur een woning ter controle', href: '/contact/?doel=aankoopcontrole', primary: true },
      { label: 'Plan gratis adviesgesprek', href: '/contact/' },
    ],
  },
  juridisch: {
    titel: 'Laat controleren vóórdat u tekent',
    tekst: 'De meeste problemen ontstaan voordat de koper bij de notaris zit. Laat documenten, afspraken en betalingsroutes controleren voordat u iets ondertekent of aanbetaalt.',
    knoppen: [
      { label: 'Laat mijn dossier controleren', href: '/contact/?doel=aankoopcontrole', primary: true },
      { label: 'Stel een vraag via WhatsApp', href: waVraag },
    ],
  },
  investering: {
    titel: 'Laat rendement én risico naast elkaar zetten',
    tekst: 'Een goed rendement op papier zegt weinig zonder kosten, leegstand, beheer en verkoopbaarheid. Wij beoordelen of een investering logisch is voor uw doel, budget en risicoprofiel.',
    knoppen: [
      { label: 'Vraag investeringsanalyse aan', href: '/contact/?doel=investeringsanalyse', primary: true },
      { label: 'Bespreek mijn plan', href: '/contact/' },
    ],
  },
  beheer: {
    titel: 'Wilt u grip houden op uw woning in Marokko?',
    tekst: 'Wij helpen eigenaren met toezicht, verhuur, rapportage en verkoopbegeleiding. Zo blijft u betrokken, zonder alles zelf op afstand te hoeven regelen.',
    knoppen: [
      { label: 'Bespreek beheer van mijn woning', href: '/contact/?doel=beheer', primary: true },
      { label: 'Vraag verkoopadvies aan', href: '/contact/?doel=verkoop' },
    ],
  },
  stad: {
    titel: 'Object gevonden in deze stad?',
    tekst: 'Stuur ons de link of documenten. Wij beoordelen of locatie, prijs, papieren en verhuurpotentie passen bij uw doel.',
    knoppen: [
      { label: 'Stuur woninglink', href: '/contact/?doel=aankoopcontrole', primary: true },
      { label: 'Bespreek deze stad', href: '/contact/' },
    ],
  },
};

const juridisch = [
  '/risicos-huis-kopen-marokko/', '/juridische-documenten-vastgoed-marokko/',
  '/titre-foncier-marokko/', '/notaris-marokko-vastgoed/',
  '/koopcontract-marokko-vastgoed/', '/volmacht-huis-kopen-marokko/',
];
const investering = [
  '/investeren-vastgoed-marokko/', '/beste-stad-investeren-vastgoed-marokko/',
  '/airbnb-marokko-investering/',
];
const beheer = [
  '/vastgoedbeheer-marokko/', '/airbnb-beheer-marokko/',
  '/huis-verhuren-marokko-vanuit-nederland/', '/huis-verkopen-marokko-vanuit-nederland/',
  '/waarde-woning-marokko-bepalen/', '/woning-marokko-beheren-vanuit-nederland/',
];

// Categoriseer een pad → CTA-variant. Onbekend/koopgidsen → 'koop'.
export function ctaVariantForPath(path?: string): CtaVariant {
  if (!path) return 'koop';
  if (path.startsWith('/vastgoed-') && path !== '/vastgoed-marokko/') return 'stad';
  if (juridisch.includes(path)) return 'juridisch';
  if (investering.includes(path)) return 'investering';
  if (beheer.includes(path)) return 'beheer';
  return 'koop';
}
