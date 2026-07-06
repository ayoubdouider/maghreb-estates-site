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
    kort: 'Wat u direct moet weten',
    samenvatting: 'In het kort',
    voorWie: 'Voor wie is deze gids bedoeld?',
    watLeerJe: 'Wat u op deze pagina vindt',
    aandachtspunt: 'Belangrijk voordat u tekent',
  },
  investering: {
    kort: 'De realiteit achter het rendement',
    samenvatting: 'Waar u rekening mee moet houden',
    voorWie: 'Voor welk type investeerder?',
    watLeerJe: 'Wat u moet beoordelen',
    aandachtspunt: 'Rendement is pas interessant na risico’s en kosten',
  },
  stad: {
    kort: 'Past deze stad bij uw doel?',
    samenvatting: 'In het kort over deze stad',
    voorWie: 'Voor wie is deze stad interessant?',
    watLeerJe: 'Wat u moet beoordelen in deze stad',
    aandachtspunt: 'Let vooral op locatie, papieren en beheerbaarheid',
  },
  kennis: {
    kort: 'Belangrijk voordat u verdergaat',
    samenvatting: 'De kern',
    voorWie: 'Voor wie is deze informatie belangrijk?',
    watLeerJe: 'Wat u moet controleren',
    aandachtspunt: 'Controleer dit vóórdat u tekent of betaalt',
  },
  beheer: {
    kort: 'Wat u uit handen geeft',
    samenvatting: 'Wat wij voor u bewaken',
    voorWie: 'Voor welke eigenaren is dit bedoeld?',
    watLeerJe: 'Wat u mag verwachten',
    aandachtspunt: 'Beheer vraagt om duidelijke afspraken en rapportage',
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
  '/volmacht-huis-kopen-marokko/', '/koopcontract-marokko-vastgoed/',
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
