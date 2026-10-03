/**
 * ENCICLOPÉDIA DE REGIÕES — pack MOLDÁVIA (origem "pesquisado"). v1: as 3 regiões históricas de indicação geográfica.
 * Pesquisa de 28/09/2026 na Wikipedia (inglês): "Moldovan wine", "Cricova (winery)", "Mileștii Mici".
 * Contornos APROXIMADOS pelos distritos (18_GeoEurope.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var MW = EN + 'Moldovan_wine';
  function sub(name, classification, place, description, grapes, producers, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src || MW };
  }
  function prod(name, labels, src) { return { name: name, labels: labels || '', src: src || '' }; }

  var regions = [
    { name: 'Codru (Centro)', geo: 'MD:Codru', sources: [MW],
      description: 'Região histórica do centro, em torno de Chișinău, com indicação geográfica protegida. Abriga as famosas adegas subterrâneas em antigas minas de calcário.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [
        sub('Cricova', 'Adega', 'Cricova, Moldova', '15 km ao norte de Chișinău: 120 km de túneis a até 100 m de profundidade, em antigas minas de calcário do século XV transformadas em adega nos anos 1950; 1,25 milhão de garrafas raras (a mais antiga de 1902) a ~12 °C.', [],
          [prod('Cricova', 'segunda maior adega da Moldávia', EN + 'Cricova_(winery)')], '', EN + 'Cricova_(winery)'),
        sub('Mileștii Mici', 'Adega', 'Mileștii Mici, Moldova', 'A maior coleção de vinhos do mundo segundo o Guinness: 1,5 milhão de garrafas em galerias de 200 km, com 85–95% de umidade e 12–14 °C.', [],
          [prod('Mileștii Mici', 'maior coleção de vinhos do mundo (Guinness)', MW)], '', MW)
      ] },

    { name: 'Ștefan Vodă (Sudeste)', geo: 'MD:Ștefan Vodă', sources: [MW],
      description: 'Região histórica do sudeste, com indicação geográfica protegida; inclui a área de Purcari.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: ['Rară Neagră', 'Cabernet Sauvignon'], grapes_other: [], notable_wines: 'Negru de Purcari', producers: [],
      subregions: [
        sub('Purcari', 'Área', 'Purcari, Moldova', 'A Rară Neagră (170 ha, sobretudo aqui) fez a fama dos vinhos de Purcari no século XVIII, antes da chegada da Cabernet Sauvignon; é usada em cortes como o famoso Negru de Purcari, produzido desde a segunda metade do século XIX.', ['Rară Neagră'],
          [prod('Vinaria Purcari', 'membro da Moldova Wine Guild', MW)], 'Negru de Purcari', MW)
      ] },

    { name: 'Valul lui Traian (Sudoeste)', geo: 'MD:Valul lui Traian', sources: [MW],
      description: 'Região histórica do sudoeste, com indicação geográfica protegida. O sul é a área mais importante, boa para tintos doces e meio-doces; os brancos têm álcool alto. Microrregiões como Taraclia, Ciumai, Comrat, Ceadîr-Lunga e Cimișlia.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Sul (Comrat e Taraclia)', 'Microrregiões', 'Comrat, Moldova', 'Microrregiões do sul, a zona mais importante do país para tintos doces e meio-doces.', [], [], '', MW)] }
  ];

  var countries = [
    { name: 'Moldávia', sources: [MW],
      description: '~2 milhões de hl (2018), 11º produtor europeu; 148.500 ha de vinha (107.800 comerciais, o resto em quintais para vinho caseiro). Em 2022 exportava para 75 países, 60% para a UE. Cultivo há 4.000–5.000 anos entre os rios Nistru e Prut; floresceu sob Estêvão, o Grande (século XV). Em 1914 a Bessarábia tinha a maior área de vinha do Império Russo. Embargos russos em 2006 e 2013 forçaram novos mercados. Uvas locais: Fetească Albă, Fetească Regală, Fetească Neagră, Rară Neagră, Plavaie, Busuioacă Albă; muitas internacionais (Cabernet, Merlot, Chardonnay, Saperavi, Rkatsiteli…). Brandy nacional: Divin.' }
  ];

  return { code: 'MD', version: 1, countries: countries, regions: regions, country_of: 'Moldávia' };
})());
