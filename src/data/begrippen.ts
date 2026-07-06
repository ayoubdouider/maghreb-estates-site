// Citeerbare definities — gebruikt door <Definitie /> en de begrippenlijst.
// Kort, feitelijk, makkelijk te citeren door AI-systemen. Ook als DefinedTerm-schema.
export interface Begrip { term: string; definitie: string; }

export const begrippen: Record<string, Begrip> = {
  'titre-foncier': {
    term: 'Titre foncier',
    definitie: 'De titre foncier is de officiële, bij het Marokkaanse kadaster (ANCFCC) geregistreerde eigendomstitel van een stuk grond of vastgoed. Het is het sterkste bewijs van eigendom en vermeldt de eigenaar, de kadastrale gegevens en eventuele lasten zoals hypotheken.',
  },
  kadaster: {
    term: 'Kadaster (conservation foncière / ANCFCC)',
    definitie: 'Het Marokkaanse kadaster (la conservation foncière, beheerd door het ANCFCC) is het officiële register van geregistreerd onroerend goed. Hier wordt de titre foncier bijgehouden en wordt een eigendomsoverdracht op naam van de nieuwe eigenaar ingeschreven.',
  },
  notaris: {
    term: 'Notaris (notaire)',
    definitie: 'De notaris is de bevoegde jurist die bij een vastgoedaankoop in Marokko de definitieve koopakte opstelt, de eigendomstitel controleert, de registratierechten int en de overdracht inschrijft bij het kadaster. De notaris is de spil van een veilige, officiële transactie.',
  },
  volmacht: {
    term: 'Volmacht (procuration)',
    definitie: 'Een volmacht (procuration) is een notariële machtiging waarmee u iemand toestemming geeft om specifieke, duidelijk afgebakende handelingen namens u te verrichten, zoals het tekenen van de koopakte. Zo kunt u op afstand kopen zonder zelf aanwezig te zijn.',
  },
  'compromis-de-vente': {
    term: 'Compromis de vente (voorlopig koopcontract)',
    definitie: 'Het compromis de vente is het voorlopige koopcontract tussen koper en verkoper waarin de prijs en voorwaarden worden vastgelegd, meestal met een aanbetaling. Het is een bindende stap vóór de definitieve akte bij de notaris.',
  },
  aankoopbegeleiding: {
    term: 'Aankoopbegeleiding',
    definitie: 'Aankoopbegeleiding is onafhankelijke ondersteuning van de koper gedurende het volledige aankooptraject: selectie en beoordeling van objecten, onderhandeling, controle van de papieren (due diligence) en begeleiding bij notaris en overdracht.',
  },
  'due-diligence': {
    term: 'Due diligence (dossiercontrole)',
    definitie: 'Due diligence is het grondig controleren van een vastgoedobject vóór aankoop: verificatie van de titre foncier bij het kadaster, controle op hypotheken of beslagen, toetsing van het koopcontract en, bij nieuwbouw, van de projectontwikkelaar en vergunningen.',
  },
  vastgoedbeheer: {
    term: 'Vastgoedbeheer',
    definitie: 'Vastgoedbeheer is het volledige beheer van een woning op afstand: huurders vinden en screenen, huur innen, onderhoud en reparaties regelen, toezicht houden en rapporteren aan de eigenaar. Het combineert de verhuurkant en de fysieke kant van een woning.',
  },
  verhuurbeheer: {
    term: 'Verhuurbeheer',
    definitie: 'Verhuurbeheer richt zich specifiek op de verhuurkant van een woning: geschikte huurders vinden en screenen, huurcontracten opstellen, de huur innen en de administratie bijhouden.',
  },
  'off-plan': {
    term: 'Off-plan vastgoed',
    definitie: 'Off-plan (of "op plan") vastgoed is vastgoed dat wordt gekocht vóór of tijdens de bouw, op basis van tekeningen en specificaties. De koper betaalt vaak in termijnen naarmate de bouw vordert; de instapprijs ligt doorgaans lager, maar het risico is groter omdat het pand nog niet bestaat.',
  },
};

// Koppeling begrip -> bijbehorende contentpagina (voor interne links vanuit de begrippenlijst).
export const begripLink: Record<string, string> = {
  'titre-foncier': '/titre-foncier-marokko/',
  kadaster: '/titre-foncier-marokko/',
  notaris: '/notaris-marokko-vastgoed/',
  volmacht: '/volmacht-huis-kopen-marokko/',
  'compromis-de-vente': '/koopcontract-marokko-vastgoed/',
  aankoopbegeleiding: '/aankoopbegeleiding-vastgoed-marokko/',
  'due-diligence': '/aankoopbegeleiding-vastgoed-marokko/',
  vastgoedbeheer: '/vastgoedbeheer-marokko/',
  verhuurbeheer: '/vastgoedbeheer-marokko/',
  'off-plan': '/nieuwbouw-vastgoed-marokko/',
};
