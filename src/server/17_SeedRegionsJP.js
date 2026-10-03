/**
 * ENCICLOPÉDIA DE REGIÕES — pack JAPÃO (origem "pesquisado"). v1: 4 prefeituras principais.
 * Pesquisa de 03/10/2026 na Wikipedia (inglês): "Japanese wine".
 * Contornos EXATOS das prefeituras (18_GeoWorld.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var JW = 'https://en.wikipedia.org/wiki/Japanese_wine';
  function sub(name, place, description, grapes, producers, wines) {
    return { name: name, classification: 'Área', place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: JW };
  }
  function prod(name, labels) { return { name: name, labels: labels || '', src: JW }; }

  var regions = [
    { name: 'Yamanashi', geo: 'JP:Yamanashi', sources: [JW],
      description: 'A principal região do Japão: ~um terço da produção (31% do vinho de uvas nacionais). O vale de Koshu, em torno da cidade de Koshu, tem 70 das ~80 vinícolas da prefeitura. Terra da Koshu, branca que evoluiu localmente por séculos, vinda provavelmente do Cáucaso pela Rota da Seda há ~1.000 anos; casca grossa contra a umidade do verão; vinhos palha-claros, macios, com cítricos e pêssego, bons com a cozinha japonesa. "Koshu" é o antigo nome de Yamanashi.',
      climate: 'Verão úmido.', soils: '', altitude: '', history: '',
      grapes: ['Koshu'], grapes_other: [], notable_wines: 'Koshu', producers: [],
      subregions: [sub('Koshu Valley (Katsunuma)', 'Koshu, Yamanashi, Japan', 'Centro vinícola de Yamanashi.', ['Koshu'], [prod('Katsunuma Wine', 'Rubaiyat (100% uvas nacionais)')], 'Koshu')] },

    { name: 'Nagano', geo: 'JP:Nagano', sources: [JW], description: 'Segunda região em vinho de uvas nacionais (23%).', climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Shiojiri', 'Shiojiri, Nagano, Japan', 'Centro vinícola de Nagano.', [], [prod('Shinshū Wine')], '')] },

    { name: 'Hokkaidō', geo: 'JP:Hokkaido', sources: [JW],
      description: 'Terceira região (17%). A cidade de Ikeda saiu da falência com um plano regional de uva e vinho a partir de 1960, sucesso que inspirou o movimento "Uma Vila, Uma Especialidade".', climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Ikeda (Tokachi)', 'Ikeda, Hokkaido, Japan', 'Cidade que se reergueu com o vinho.', [], [prod('Tokachi Wine')], ''), sub('Furano', 'Furano, Hokkaido, Japan', 'Área vinícola de Hokkaidō.', [], [prod('Furano Wine')], '')] },

    { name: 'Yamagata', geo: 'JP:Yamagata', sources: [JW],
      description: 'Na Segunda Guerra fez muito vinho para obter cremor tártaro para o exército; o solo bom para frutas abriga hoje vários produtores conhecidos.', climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Tendō', 'Tendo, Yamagata, Japan', 'Área vinícola de Yamagata.', [], [prod('Tendō Wine')], '')] }
  ];

  var countries = [
    { name: 'Japão', sources: [JW],
      description: 'A uva de mesa tem longa história, mas o vinho com uvas locais só começou com a ocidentalização da era Meiji (fim do século XIX). Em 2017, só ~4% do vinho consumido era "vinho japonês" (feito no país com uvas do país). Produção de Hokkaidō a Miyazaki; principais regiões: Yamanashi (31%), Nagano (23%) e Hokkaidō (17%). Não há uvas nativas, mas a Koshu é considerada local; uvas americanas (Delaware, Niagara) declinaram desde 1985.' }
  ];

  return { code: 'JP', version: 1, countries: countries, regions: regions, country_of: 'Japão' };
})());
