/**
 * ENCICLOPÉDIA DE REGIÕES — pack LÍBANO (origem "pesquisado"). v1: Vale do Bekaa e outras regiões de altitude.
 * Pesquisa de 03/10/2026 na Wikipedia (inglês): "Lebanese wine".
 * Contornos pelas províncias (18_GeoWorld.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var LW = 'https://en.wikipedia.org/wiki/Lebanese_wine';
  function sub(name, place, description, producers, wines) {
    return { name: name, classification: 'Área', place: place, description: description,
      grapes: [], producers: producers || [], notable_wines: wines || '', source: LW };
  }
  function prod(name, labels) { return { name: name, labels: labels || '', src: LW }; }

  var regions = [
    { name: 'Vale do Bekaa', geo: 'LB:Bekaa', sources: [LW],
      description: 'Planalto entre duas cordilheiras, responsável pela maior parte do vinho libanês, sobretudo no sul e no oeste do vale. Valorizado desde os tempos bíblicos (abastecia fenícios, persas e o exército romano): solos ricos, encostas protegidas, sol quase o ano todo, altitude, nenhuma chuva no verão e pouca doença.',
      climate: 'Continental, de altitude; sem chuva no verão.', soils: 'Ricos.', altitude: '900–2.400 m no país',
      history: 'Durante a guerra civil, a Château Musar exportou para o Reino Unido (1976); em 1982, 80 ha de seus vinhedos no Bekaa viraram linha de frente entre tanques sírios e israelenses.',
      grapes: ['Cabernet Sauvignon', 'Merlot', 'Syrah', 'Obeideh', 'Merwah'], grapes_other: ['Chardonnay', 'Sauvignon Blanc', 'Cinsaut'], notable_wines: 'Château Musar; Château Ksara',
      producers: [prod('Château Ksara', 'fundada em 1857 por jesuítas; a mais antiga vinícola comercial e a maior produtora (70% da produção por décadas)'),
        prod('Château Musar', 'de Gaston Hochar (1930); Serge Hochar'), prod('Château Kefraya', 'fundada durante a guerra civil'), prod('Domaine des Tourelles', 'liderou o renascimento das uvas nativas')],
      subregions: [sub('Bekaa (sul e oeste)', 'Zahlé, Lebanon', 'A maior parte do vinho libanês vem do sul e do oeste do vale do Bekaa.', [], '')] },

    { name: 'Monte Líbano e norte', geo: 'LB:Montanha', sources: [LW],
      description: 'Regiões de altitude fora do Bekaa: distrito de Batroun, Líbano do Norte e Monte Líbano. Os vinhedos libaneses estão entre os mais altos do Hemisfério Norte.',
      climate: 'Alpino nas montanhas; subtropical mediterrâneo no litoral.', soils: '', altitude: '', history: 'Por séculos o vinho ficou restrito a mosteiros (Monastère St. Jean, Couvent St. Sauveur), sob a proibição otomana.',
      grapes: ['Obeideh', 'Merwah'], grapes_other: [], notable_wines: 'Adyar (primeiro vinho orgânico certificado, de monges maronitas)', producers: [],
      subregions: [sub('Batroun', 'Batroun, Lebanon', 'Distrito de altitude do norte.', [], ''), sub('Monte Líbano', 'Ghazir, Lebanon', 'Região montanhosa central.', [], '')] },

    { name: 'Sul do Líbano (Jezzine)', geo: 'LB:Sul', sources: [LW],
      description: 'Área de altitude no sul, sobretudo Jezzine.', climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Jezzine', 'Jezzine, Lebanon', 'Região vinícola de altitude do sul.', [], '')] }
  ];

  var countries = [
    { name: 'Líbano', sources: [LW],
      description: '5.000 anos de vinho, uma das regiões produtoras mais antigas do mundo. Vinhas de 900 a 2.400 m, entre as mais altas do Hemisfério Norte; três climas (mediterrâneo no litoral, alpino nas montanhas, continental no Bekaa), comparados ao do Rhône. Uvas internacionais (Cabernet, Merlot, Syrah, Chardonnay, Sauvignon) e nativas brancas (Obeideh, Merwah; também Tfeifihi, Zeini, Meksassi…). De 5 produtores até 1995 a cerca de 50 hoje.' }
  ];

  return { code: 'LB', version: 1, countries: countries, regions: regions, country_of: 'Líbano' };
})());
