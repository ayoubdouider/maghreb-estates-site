// CTA-blokken per paginatype (conversie). Professioneel, geen agressieve sales.
import { waLink } from './site';

export type CtaVariant = 'koop' | 'juridisch' | 'investering' | 'beheer' | 'stad';

interface CtaKnop { label: string; href: string; primary?: boolean; }
interface CtaBlok { titel: string; tekst: string; knoppen: CtaKnop[]; }

const waVraag = waLink('Hallo Maghreb Estates, ik heb een vraag over vastgoed in Marokko. Kunnen jullie meekijken?');

export const ctaContent: Record<CtaVariant, CtaBlok> = {
  koop: {
    titel: 'Een object of project laten analyseren?',
    tekst: 'Stuur ons de link, de projectinformatie of de documenten. Wij beoordelen prijs, locatie, dossier en verhuurpotentie en komen terug met een duidelijke vervolgstap.',
    knoppen: [
      { label: 'Laat een object analyseren', href: '/contact/?doel=objectanalyse', primary: true },
      { label: 'Plan adviesgesprek', href: '/adviesgesprek/' },
    ],
  },
  juridisch: {
    titel: 'Laat het dossier beoordelen vóór u zich verbindt',
    tekst: 'Documenten, eigendomsinformatie, contractvoorwaarden en betalingsroute: wij brengen ze overzichtelijk in kaart, zodat u weet waar u aan toe bent.',
    knoppen: [
      { label: 'Laat mijn dossier beoordelen', href: '/contact/?doel=objectanalyse', primary: true },
      { label: 'Stel een vraag via WhatsApp', href: waVraag },
    ],
  },
  investering: {
    titel: 'Rendement en risicoprofiel naast elkaar',
    tekst: 'Bruto huurpotentie zegt weinig zonder kosten, leegstand, beheer en verkoopbaarheid. Wij beoordelen of een investering past bij uw doel, budget en risicoprofiel.',
    knoppen: [
      { label: 'Vraag investeringsanalyse aan', href: '/contact/?doel=investeringsanalyse', primary: true },
      { label: 'Plan adviesgesprek', href: '/adviesgesprek/' },
    ],
  },
  beheer: {
    titel: 'Vragen over beheer of verhuur van uw woning?',
    tekst: 'Wij denken op aanvraag mee over lokale opvolging, verhuurstructuur en verkoopmomenten. Beschikbaarheid verschilt per stad en objecttype.',
    knoppen: [
      { label: 'Plan adviesgesprek', href: '/adviesgesprek/', primary: true },
      { label: 'Stel uw vraag', href: '/contact/?doel=beheer' },
    ],
  },
  stad: {
    titel: 'Object gevonden in deze stad?',
    tekst: 'Stuur ons de link of de documenten. Wij beoordelen of locatie, prijs, dossier en verhuurpotentie passen bij uw doel.',
    knoppen: [
      { label: 'Laat een object analyseren', href: '/contact/?doel=objectanalyse', primary: true },
      { label: 'Plan adviesgesprek', href: '/adviesgesprek/' },
    ],
  },
};

const juridisch = [
  '/risicos-huis-kopen-marokko/', '/juridische-documenten-vastgoed-marokko/',
  '/titre-foncier-marokko/', '/notaris-marokko-vastgoed/',
  '/koopcontract-marokko-vastgoed/',
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
