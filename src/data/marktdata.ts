// ============================================================================
// MARKTDATA per stad — gescheiden van de redactionele stadsteksten (steden.ts)
// zodat cijfers los bijgewerkt kunnen worden zodra er nieuwe data is.
//
// BELANGRIJK — getrouwe weergave:
// - Bedragen met een vaste FISCALE referentiekoers 1 EUR = 10,55 MAD (peildatum
//   6-1-2026), niet de dagkoers. EUR-bedragen zijn dus indicatief.
// - "benchmark" = realistische referentie (o.a. Agenz/Yakeey); "vraagprijs" =
//   advertentieniveau (Properstar/Mubawab). Deze lopen sterk uiteen.
// - Rekencases zijn rekenvoorbeelden op m²-benchmark, GEEN officiële medianen.
// - Ontbrekende cijfers worden eerlijk als datagat gemarkeerd (opmerking).
// ============================================================================

export const wisselkoers = '1 EUR ≈ 10,55 MAD (fiscale referentiekoers, 6-1-2026)';
export const marktPeildatum = 'begin 2026';

export interface Marktdata {
  appartement?: string;
  villa?: string;
  rekencase?: string;
  huurYield?: string;
  airbnb?: string;
  opmerking?: string; // datagat of nuance
}

export const marktdata: Record<string, Marktdata> = {
  tanger: {
    appartement: 'Realistische benchmark ± 8.000 MAD/m² (± €760); portal-vraagprijzen liggen fors hoger, tot ± 16.900 MAD/m² (± €1.600). Grote spread tussen advertentie- en realiseerbaar niveau.',
    villa: 'Benchmark villa ± 11.760 MAD/m² (± €1.115).',
    rekencase: 'Rekenvoorbeeld (benchmark): studio 40 m² ± 321.000 MAD (€30.400) · 2-kamer 70 m² ± 562.000 MAD (€53.300) · 3-kamer 100 m² ± 803.000 MAD (€76.100) · villa 250 m² ± 2,94 mln MAD (€278.700).',
    huurYield: 'Langetermijn bruto indicatief 6,5–8,5%. Voorbeeldhuren: studio ± 1.400–3.000 MAD/mnd, 2–3-kamer ± 7.500–16.500 MAD/mnd.',
    airbnb: 'Toeristische verhuur sterk: ± 43% bezetting, ± $84 gemiddelde nachtprijs (Tanger-Assilah, lopende 12 maanden 2026).',
  },
  casablanca: {
    appartement: 'Benchmark appartement ± 12.500 MAD/m² (± €1.185).',
    villa: 'Benchmark villa ± 16.460 MAD/m² (± €1.560).',
    rekencase: 'Rekenvoorbeeld (benchmark): studio 40 m² ± 500.000 MAD (€47.400) · 2-kamer 70 m² ± 875.000 MAD (€82.900) · 3-kamer 100 m² ± 1,25 mln MAD (€118.500) · villa 250 m² ± 4,11 mln MAD (€389.700).',
    huurYield: 'Bruto rendement ± 5–6,5% standaard, tot 7–9% in opkomende wijken en ± 4–5% in prestigezones. Voorbeeld studiohuur: Anfa ± 11.000 MAD/mnd, Roches Noires ± 3.800 MAD/mnd.',
  },
  rabat: {
    appartement: 'Benchmark appartement ± 12.400–12.900 MAD/m² (± €1.175–€1.225). Topwijken hoger: Souissi ± 22.500 MAD/m², Haut Agdal ± 21.200 MAD/m²; betaalbaarder (Yacoub El Mansour, Hassan) ± 14.400–14.900 MAD/m².',
    villa: 'Indicatie villa ± 9.280 MAD/m² (± €880) — let op: dit is een gemiddelde, top-villawijken (Souissi/Hay Riad) liggen hoger.',
    rekencase: 'Rekenvoorbeeld (benchmark): studio 40 m² ± 500.000 MAD (€47.000) · 2-kamer 70 m² ± 885.000 MAD (€84.000) · 3-kamer 100 m² ± 1,26 mln MAD (€120.000).',
    huurYield: 'Door het hogere prijsniveau doorgaans een middellage bruto yield; Rabat is een stabiele woonmarkt eerder dan een topyield-markt.',
  },
  marrakech: {
    appartement: 'Benchmark appartement ± 8.885 MAD/m² (± €842).',
    rekencase: 'Rekenvoorbeeld (benchmark): studio 40 m² ± 355.000 MAD (€33.700) · 2-kamer 70 m² ± 622.000 MAD (€59.000) · 3-kamer 100 m² ± 889.000 MAD (€84.200).',
    huurYield: 'Bovengemiddelde yielddynamiek (lagere aankoopprijs bij niet-navenant lagere huren dan Casablanca).',
    airbnb: 'Zeer sterke vakantieverhuur: ± 44% bezetting, ± $289 gemiddelde nachtprijs (Marrakech-prefectuur, 2026). Gewilde wijken o.a. Guéliz en Majorelle.',
  },
  agadir: {
    appartement: 'Geen betrouwbaar stadsbreed gemiddelde in de bron; wijkreferentie Hay Dakhla ± 9.190 MAD/m² (± €871) appartement, ± 9.210 MAD/m² villa. Niet als stadsmediaan gebruiken.',
    airbnb: 'Sterke vakantieverhuur: ± 47% bezetting, ± $77 gemiddelde nachtprijs (Agadir Ida-Outanane, 2026).',
    opmerking: 'Voor Agadir ontbreekt nog een betrouwbare stadsbrede prijs- en huurmediaan; op aanvraag maken wij een actuele analyse per wijk en object.',
  },
  nador: {
    appartement: 'Benchmark appartement ± 6.100 MAD/m² (± €578); wijkband ± 5.565–7.560 MAD/m² (± €528–€717).',
    rekencase: 'Rekenvoorbeeld (benchmark): studio 40 m² ± 244.000 MAD (€23.100) · 2-kamer 70 m² ± 427.000 MAD (€40.500) · 3-kamer 100 m² ± 610.000 MAD (€57.800).',
    opmerking: 'Betrouwbare publieke huurmedianen ontbreken; verhuurpotentie beoordelen wij per wijk en object.',
  },
  'al-hoceima': {
    appartement: 'Wijkband appartement ± 5.377–13.613 MAD/m² (± €510–€1.290); plage Quemado is toplocatie, Bades/Pointe de Los Frailes lager.',
    villa: 'Wijkband villa ± 8.670–16.590 MAD/m² (± €822–€1.573).',
    rekencase: 'Rekenvoorbeeld (wijkband): studio 40 m² ± 215.000–545.000 MAD (€20.400–€51.600) · 2-kamer 70 m² ± 376.000–953.000 MAD · 3-kamer 100 m² ± 538.000 MAD–1,36 mln MAD.',
    opmerking: 'Sterk seizoensgebonden kustmarkt; geen robuuste huurmediaan beschikbaar.',
  },
  tetouan: {
    airbnb: 'Toeristische verhuur: ± 42% bezetting, ± $64 gemiddelde nachtprijs (Tetouan, 2026).',
    opmerking: 'Geen zuivere stadsbrede prijs- of huurmediaan in de bron; Tétouan is doorgaans goedkoper dan Tanger. Op aanvraag een analyse per wijk.',
  },
  martil: {
    appartement: 'Indicatie ± 5.830–6.250 MAD/m² (± €553–€593); wijkband ± 5.390–12.500 MAD/m² met Cabo Negro/Miramar/Dunes de Martil als topsegment.',
    villa: 'Indicatie villa ± 12.890 MAD/m² (± €1.222).',
    rekencase: 'Rekenvoorbeeld (indicatie): studio 40 m² ± 233.000 MAD (€22.100) · 2-kamer 70 m² ± 408.000 MAD (€38.700) · 3-kamer 100 m² ± 583.000 MAD (€55.300).',
    opmerking: 'Uitgesproken seizoensmarkt; geen robuuste langetermijn-huurmediaan beschikbaar.',
  },
  mdiq: {
    appartement: 'Gemeentebenchmark ± 6.460 MAD/m² (± €612). Zeezichtproducten in advertenties liggen fors hoger.',
    rekencase: 'Rekenvoorbeeld (benchmark): studio 40 m² ± 258.000 MAD (€24.400) · 2-kamer 70 m² ± 452.000 MAD (€42.900) · 3-kamer 100 m² ± 646.000 MAD (€61.200).',
    opmerking: 'Kust-/leisuremarkt met grote spread tussen gewone stock en zichtlocaties; geen harde huurmediaan.',
  },
  saidia: {
    appartement: 'Wijkband appartement ± 6.030–8.360 MAD/m² (± €572–€792); Cité Balnéaire/Saïdia Ouest duurst.',
    rekencase: 'Rekenvoorbeeld (wijkband): studio 40 m² ± 241.000–334.000 MAD (€22.800–€31.700) · 2-kamer 70 m² ± 422.000–585.000 MAD · 3-kamer 100 m² ± 603.000–836.000 MAD.',
    opmerking: 'Resort-/vakantiemarkt; let op servicekosten en leegstand buiten het seizoen.',
  },
  oujda: {
    appartement: 'Wijkband appartement ± 4.200–6.205 MAD/m² (± €398–€588); Centre Ville ± 6.010 MAD/m².',
    villa: 'Wijkband villa ± 7.970–17.720 MAD/m² (± €755–€1.680).',
    rekencase: 'Rekenvoorbeeld (wijkband): studio 40 m² ± 168.000–248.000 MAD (€15.900–€23.500) · 2-kamer 70 m² ± 294.000–434.000 MAD · 3-kamer 100 m² ± 420.000–621.000 MAD.',
    opmerking: 'Open huurdata onvoldoende robuust; betaalbaar instapniveau, gematigde yield.',
  },
  fes: {
    opmerking: 'Voor Fès zijn nog onvoldoende betrouwbare publieke prijs- en huurcijfers beschikbaar om te publiceren. Op aanvraag maken wij een actuele analyse — met extra aandacht voor medina-panden (vergunningen, restauratie, titelstatus).',
  },
  essaouira: {
    appartement: 'Vraagprijs ± 16.280 MAD/m² (± €1.543); wijkband ± 6.820–16.290 MAD/m², top in Kasbah/Des Dunes.',
    villa: 'Wijkband villa ± 4.560–13.160 MAD/m² (± €432–€1.247).',
    rekencase: 'Rekenvoorbeeld (vraagprijs): studio 40 m² ± 651.000 MAD (€61.700) · 2-kamer 70 m² ± 1,14 mln MAD (€108.000) · 3-kamer 100 m² ± 1,63 mln MAD (€154.300).',
    airbnb: 'Sterke vakantieverhuur: ± 46% bezetting, ± $112 gemiddelde nachtprijs (Essaouira, 2026).',
    opmerking: 'Toeristisch karakter maakt klassieke jaarverhuur minder representatief; let op renovatie en vergunningen bij oud patrimonium.',
  },
  kenitra: {
    opmerking: 'Voor Kénitra zijn nog onvoldoende leesbare publieke prijs- en huurcijfers beschikbaar om te publiceren. Kénitra is doorgaans goedkoper dan Rabat/Casablanca; op aanvraag maken wij een actuele analyse.',
  },
  temara: {
    opmerking: 'Voor Témara afzonderlijk ontbreken voldoende harde publieke cijfers (data is vooral beschikbaar voor buurgemeente Skhirat). Op aanvraag maken wij een actuele analyse per wijk.',
  },
  skhirat: {
    appartement: 'Indicatie appartement ± 5.600 MAD/m² (± €531).',
    villa: 'Indicatie villa ± 4.435 MAD/m² (± €420).',
    rekencase: 'Rekenvoorbeeld (indicatie): studio 40 m² ± 224.000 MAD (€21.200) · 2-kamer 70 m² ± 392.000 MAD (€37.100) · 3-kamer 100 m² ± 560.000 MAD (€53.100) · villa 250 m² ± 1,11 mln MAD (€105.100).',
    opmerking: 'Verspreide kust-/projectmarkt; grondige project- en titelcontrole nodig.',
  },
  dakhla: {
    airbnb: 'Toeristische verhuur (niche, volatiel): ± 38% bezetting, ± $49 gemiddelde nachtprijs (bronnen lopen uiteen; een andere bron noemt ± 23% bezetting).',
    opmerking: 'Geen betrouwbare stadsbrede prijs- of huurmediaan: aanbod is heterogeen (terreinen, villa’s, luxeprojecten). Meer een niche watersport-/toerismemarkt dan een brede woonbeleggingsmarkt.',
  },
};
