// Labels voor de AiBlocks (Direct Answer + Samenvatting), per paginatype.
// Doel: menselijker koppen die passen bij de zoekintentie, zonder de functie/AEO te verliezen.
// De dt "Wanneer wij helpen" blijft ongewijzigd (bewust behouden).
export type AiVariant = 'koop' | 'investering' | 'stad' | 'kennis' | 'beheer';

export interface AiLabelSet {
  kort: string;         // label boven het directe antwoord
  samenvatting: string; // titel van het samenvattingsblok
  voorWie: string;      // dt
  watLeerJe: string;    // dt
  aandachtspunt: string;// dt (letOp)
}

export const labelSets: Record<AiVariant, AiLabelSet> = {
  koop: {
    kort: 'Kort antwoord',
    samenvatting: 'Samengevat',
    voorWie: 'Voor wie',
    watLeerJe: 'Wat u hier vindt',
    aandachtspunt: 'Aandachtspunt',
  },
  investering: {
    kort: 'Kort antwoord',
    samenvatting: 'Samengevat',
    voorWie: 'Voor welk type investeerder',
    watLeerJe: 'Wat u beoordeelt',
    aandachtspunt: 'Aandachtspunt',
  },
  stad: {
    kort: 'Kort antwoord',
    samenvatting: 'Samengevat over deze stad',
    voorWie: 'Voor wie deze stad interessant is',
    watLeerJe: 'Wat u hier beoordeelt',
    aandachtspunt: 'Aandachtspunt',
  },
  kennis: {
    kort: 'Kort antwoord',
    samenvatting: 'Samengevat',
    voorWie: 'Voor wie',
    watLeerJe: 'Wat u hier vindt',
    aandachtspunt: 'Aandachtspunt',
  },
  beheer: {
    kort: 'Kort antwoord',
    samenvatting: 'Samengevat',
    voorWie: 'Voor welke eigenaren',
    watLeerJe: 'Wat u mag verwachten',
    aandachtspunt: 'Aandachtspunt',
  },
};

const investering = [
  '/investeren-vastgoed-marokko/', '/beste-stad-investeren-vastgoed-marokko/',
  '/airbnb-marokko-investering/',
];
const kennis = [
  '/kosten-huis-kopen-marokko/', '/risicos-huis-kopen-marokko/',
  '/juridische-documenten-vastgoed-marokko/', '/kennisbank/',
  '/notaris-marokko-vastgoed/', '/titre-foncier-marokko/',
  '/koopcontract-marokko-vastgoed/',
];
const beheer = [
  '/vastgoedbeheer-marokko/', '/airbnb-beheer-marokko/',
  '/huis-verhuren-marokko-vanuit-nederland/', '/huis-verkopen-marokko-vanuit-nederland/',
  '/waarde-woning-marokko-bepalen/', '/woning-marokko-beheren-vanuit-nederland/',
];

// Categoriseer een pad naar een variant. Onbekend/koopgidsen → 'koop'.
export function variantForPath(path?: string): AiVariant {
  if (!path) return 'koop';
  if (path.startsWith('/vastgoed-') && path !== '/vastgoed-marokko/') return 'stad';
  if (investering.includes(path)) return 'investering';
  if (kennis.includes(path)) return 'kennis';
  if (beheer.includes(path)) return 'beheer';
  return 'koop';
}
