/**
 * ENCICLOPÉDIA DE REGIÕES — pack ROMÊNIA (origem "pesquisado"). v1: as 8 grandes regiões e seus vinhedos (podgorii).
 * Pesquisa de 28/09/2026 na Wikipedia (inglês): "Romanian wine", "Cotnari".
 * Contornos APROXIMADOS pelos distritos (județe) (18_GeoEurope.js, Natural Earth); as "areias do sul" ficam só com pontos.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var RW = EN + 'Romanian_wine';
  function sub(name, place, description, grapes, wines, src) {
    return { name: name, classification: 'Vinhedo (podgorie)', place: place, description: description || 'Vinhedo da região.',
      grapes: grapes || [], producers: [], notable_wines: wines || '', source: src || RW };
  }

  var regions = [
    { name: 'Colinas da Moldávia (Dealurile Moldovei)', geo: 'RO:Moldávia', sources: [RW, EN + 'Cotnari'],
      description: 'Leste da Romênia; cada vinhedo tem suas uvas tradicionais.', climate: '', soils: '', altitude: '', history: '',
      grapes: ['Grasă de Cotnari', 'Fetească Neagră', 'Băbească Neagră', 'Fetească Albă'], grapes_other: ['Frâncușă', 'Zghihară de Huși', 'Busuioacă de Bohotin', 'Galbenă de Odobești', 'Tămâioasă Românească'],
      notable_wines: 'Grasă de Cotnari', producers: [],
      subregions: [
        sub('Cotnari', 'Cotnari, Iași, Romania', 'Vila a noroeste de Iași, famosa pela Grasă de Cotnari; tradicional também a Frâncușă. A tradição local atribui a fundação dos vinhedos ao príncipe Estêvão, o Grande, sob quem a vila virou residência alternativa e ganhou estradas para o comércio de vinho.', ['Grasă de Cotnari', 'Frâncușă'], 'Grasă de Cotnari', EN + 'Cotnari'),
        sub('Iași', 'Iași, Romania', 'A Fetească Neagră, tinta romena mais conhecida, é originária de Uricani, na região de Iași.', ['Fetească Neagră']),
        sub('Huși', 'Huși, Romania', 'Uvas tradicionais: Zghihară de Huși e a aromática Busuioacă de Bohotin.', ['Zghihară de Huși', 'Busuioacă de Bohotin']),
        sub('Odobești', 'Odobești, Romania', 'Casa da branca Galbenă de Odobești.', ['Galbenă de Odobești']),
        sub('Panciu', 'Panciu, Romania'), sub('Cotești', 'Cotești, Vrancea, Romania'),
        sub('Nicorești', 'Nicorești, Galați, Romania', 'Uva tradicional: Băbească Neagră.', ['Băbească Neagră']),
        sub('Dealul Bujorului', 'Târgu Bujor, Romania')
      ] },

    { name: 'Colinas da Muntênia e Oltênia', geo: 'RO:Muntênia', sources: [RW],
      description: 'Sul dos Cárpatos: Dealu Mare, Drăgășani, Ștefănești, Sâmburești, colinas de Buzău e de Craiova.', climate: '', soils: '', altitude: '',
      history: 'A filoxera entrou na Romênia em 1872, em Chitorani, na região de Dealu Mare.',
      grapes: ['Crâmpoșie'], grapes_other: [], notable_wines: '', producers: [],
      subregions: [
        sub('Dealu Mare', 'Urlați, Romania', 'Onde a filoxera chegou à Romênia (1872, Chitorani).', []),
        sub('Drăgășani', 'Drăgășani, Romania', 'Terra da branca Crâmpoșie, de vinhos frescos e frutados, com acidez marcada.', ['Crâmpoșie']),
        sub('Ștefănești', 'Ștefănești, Argeș, Romania'), sub('Sâmburești', 'Sâmburești, Romania'),
        sub('Dealurile Buzăului', 'Pietroasele, Romania'), sub('Dealurile Craiovei', 'Craiova, Romania')
      ] },

    { name: 'Planalto da Transilvânia', geo: 'RO:Transilvânia', sources: [RW],
      description: 'Centro do país, no arco dos Cárpatos: Târnave, Alba, Aiud, Sebeș-Apold e Lechința.', climate: '', soils: '', altitude: '', history: '',
      grapes: ['Iordană', 'Ardeleancă'], grapes_other: [], notable_wines: '', producers: [],
      subregions: [
        sub('Târnave', 'Blaj, Romania', 'Uvas tradicionais: Iordană e Ardeleancă.', ['Iordană', 'Ardeleancă']),
        sub('Alba', 'Alba Iulia, Romania'), sub('Aiud', 'Aiud, Romania'), sub('Sebeș-Apold', 'Sebeș, Romania'), sub('Lechința', 'Lechința, Romania')
      ] },

    { name: 'Colinas do Banat', geo: 'RO:Banat', sources: [RW],
      description: 'Oeste da Romênia: Recaș, Moldova Nouă, Silagiu, Teremia e Tirol.', climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Recaș', 'Recaș, Romania'), sub('Moldova Nouă', 'Moldova Nouă, Romania'), sub('Teremia', 'Teremia Mare, Romania')] },

    { name: 'Colinas de Crișana e Maramureș', geo: 'RO:Crișana', sources: [RW],
      description: 'Noroeste: Miniș-Măderat, Diosig, Șimleu Silvaniei e Valea lui Mihai.', climate: '', soils: '', altitude: '', history: '',
      grapes: ['Mustoasă de Măderat'], grapes_other: [], notable_wines: '', producers: [],
      subregions: [
        sub('Miniș-Măderat', 'Ghioroc, Romania', 'Casa da Mustoasă de Măderat.', ['Mustoasă de Măderat']),
        sub('Diosig', 'Diosig, Romania'), sub('Șimleu Silvaniei', 'Șimleu Silvaniei, Romania'), sub('Valea lui Mihai', 'Valea lui Mihai, Romania')
      ] },

    { name: 'Colinas da Dobruja', geo: 'RO:Dobruja', sources: [RW],
      description: 'Entre o Danúbio e o Mar Negro: Murfatlar, Sarica-Niculițel e Istria-Babadag.', climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: 'Murfatlar', producers: [],
      subregions: [sub('Murfatlar', 'Murfatlar, Romania'), sub('Sarica-Niculițel', 'Niculițel, Romania'), sub('Istria-Babadag', 'Babadag, Romania')] },

    { name: 'Terraços do Danúbio', geo: 'RO:Danúbio', sources: [RW],
      description: 'Terraços do Danúbio no sul: Greaca e Ostrov.', climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Greaca', 'Greaca, Romania'), sub('Ostrov', 'Ostrov, Constanța, Romania')] },

    { name: 'Areias e terras favoráveis do sul', geo: 'RO:Areias', sources: [RW],
      description: 'Solos arenosos e outras terras favoráveis do centro-sul: Sadova-Corabia, Calafat e Podgoria Dacilor (Mehedinți).', climate: '', soils: 'Arenosos.', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Sadova-Corabia', 'Sadova, Dolj, Romania'), sub('Calafat', 'Calafat, Romania')] }
  ];

  var countries = [
    { name: 'Romênia', sources: [RW],
      description: 'Sexta produtora da Europa (depois de Itália, França, Espanha, Alemanha e Portugal) e 13ª do mundo: ~187.000 ha e ~4,5 milhões de hl (2021). Tradição de mais de 6.000 anos; cada região tinha suas uvas até a filoxera (a partir de 1872), quando se replantou sobretudo com uvas francesas. Uvas nativas mais conhecidas: Fetească Albă, Fetească Regală e Crâmpoșie (brancas), Fetească Neagră (tinta), Tămâioasă Românească e Busuioacă de Bohotin (aromáticas). Vinhos em geral rotulados pela uva.' }
  ];

  return { code: 'RO', version: 1, countries: countries, regions: regions, country_of: 'Romênia' };
})());
