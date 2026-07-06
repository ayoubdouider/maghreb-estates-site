// Extra redactionele data voor de 7 prominente steden (rijke pagina's):
// "voor wie minder geschikt" en "wat wij specifiek controleren".
// De overige steden krijgen een lean standaardpagina en gebruiken dit niet.
export interface StadExtra {
  voorWieNiet: string[];
  checkFocus: string[];
}

export const stedenExtra: Record<string, StadExtra> = {
  tanger: {
    voorWieNiet: [
      'Wie vooral rust en lage instapprijzen zoekt.',
      'Wie zonder beheer op afstand wil verhuren.',
      'Wie gevoelig is voor de hogere prijzen in populaire wijken.',
    ],
    checkFocus: [
      'Titelstatus in snelgroeiende nieuwbouwzones.',
      'Betrouwbaarheid van de ontwikkelaar bij off-plan aan de baai.',
      'Servicekosten en beheer in kustresidenties.',
      'Reële prijs per wijk — de spread is groot.',
    ],
  },
  casablanca: {
    voorWieNiet: [
      'Wie een rustige, kleinschalige omgeving zoekt.',
      'Wie op een toplocatie een laag instapbudget heeft.',
      'Wie drukte en verkeer wil vermijden.',
    ],
    checkFocus: [
      'Syndicreserves en eventuele VvE-achterstanden.',
      'Parkeer- en liftrechten.',
      'Titelstatus in oudere centrale wijken.',
      'Reële wijkprijs — de spreiding is enorm.',
    ],
  },
  rabat: {
    voorWieNiet: [
      'Wie een hoog huurrendement als hoofddoel heeft.',
      'Wie een lage instapprijs zoekt.',
      'Wie vooral op toeristische verhuur mikt.',
    ],
    checkFocus: [
      'Titelstatus en eventuele indivision in oudere wijken.',
      'Realistische huurvraag per wijk.',
      'Prijsniveau ten opzichte van topwijken als Souissi en Agdal.',
    ],
  },
  marrakech: {
    voorWieNiet: [
      'Wie stabiele langetermijnverhuur zonder seizoensdrukte zoekt.',
      'Wie geen tijd of beheer heeft voor vakantieverhuur.',
      'Wie de renovatie van een riad wil vermijden.',
    ],
    checkFocus: [
      'Vergunningen en regels voor toeristische verhuur.',
      'Staat en renovatiekosten van riads.',
      'Beheerlast en exploitatiekwaliteit.',
      'Echte eigendomstitel in de medina.',
    ],
  },
  agadir: {
    voorWieNiet: [
      'Wie jaarrond een constante verhuur zoekt; de markt is seizoensgebonden.',
      'Wie geen beheer op afstand wil regelen.',
      'Wie de authentieke medina-sfeer zoekt.',
    ],
    checkFocus: [
      'Oplevering en kwaliteit van nieuwbouw.',
      'Servicekosten van resortcomplexen.',
      'Ligging ten opzichte van strand en voorzieningen.',
      'Realistische seizoensbezetting.',
    ],
  },
  nador: {
    voorWieNiet: [
      'Wie een sterk gereguleerde, volledig transparante markt verwacht.',
      'Wie snel wil kunnen verkopen; de liquiditeit is beperkter.',
      'Wie zonder lokale controle wil kopen.',
    ],
    checkFocus: [
      'Titelzuiverheid en indivision bij familievastgoed.',
      'Duidelijkheid van eigendom bij informele afspraken.',
      'Reële prijs.',
      'Status van gebiedsontwikkeling rond Marchica.',
    ],
  },
  'al-hoceima': {
    voorWieNiet: [
      'Wie jaarrond verhuur zoekt.',
      'Wie een groot en liquide aanbod wil.',
      'Wie zonder beheer op afstand wil verhuren.',
    ],
    checkFocus: [
      'Titelstatus bij kust- en randpercelen.',
      'Kwaliteit van kustresidenties.',
      'Servicekosten.',
      'Realistische seizoensbezetting.',
    ],
  },
};
