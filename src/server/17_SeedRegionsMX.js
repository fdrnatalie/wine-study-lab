/**
 * ENCICLOPÉDIA DE REGIÕES — pack MÉXICO (origem "pesquisado"). v1: 5 regiões.
 * Pesquisa de 03/10/2026 na Wikipedia (inglês): "Mexican wine", "Valle de Guadalupe".
 * Contornos pelos estados (18_GeoWorld.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var MW = EN + 'Mexican_wine';
  function sub(name, classification, place, description, grapes, producers, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src || MW };
  }
  function prod(name, labels) { return { name: name, labels: labels || '', src: MW }; }

  var regions = [
    { name: 'Baja California', geo: 'MX:Baja California', sources: [MW, EN + 'Valle_de_Guadalupe'],
      description: 'A zona Norte faz ~90% do vinho mexicano, quase todo de três áreas perto do porto de Ensenada: San Antonio de las Minas (com o Valle de Guadalupe), Valle de San Vicente e Valle de Santo Tomás. Solos profundos de granito, dias quentes e noites frescas pela brisa do Pacífico; invernos úmidos e verões secos permitem as mesmas uvas da Califórnia. Produtores "boutique" (Casa de Piedra, primeira safra em 1997) puxam a inovação.',
      climate: 'Mediterrâneo, com brisa do Pacífico.', soils: 'Granito profundo.', altitude: '',
      history: 'O jesuíta Juan Ugarte plantou as primeiras vinhas da Baja California na missão de Loreto (1701). A missão de Santo Tomás (1791) retomou a produção maior; em 1888 suas terras viraram a Bodegas Santo Tomás, a mais antiga vinícola comercial em operação contínua. Imigrantes russos molokanos plantaram vinhas a partir de 1904.',
      grapes: ['Cabernet Sauvignon', 'Primitivo', 'Grenache', 'Chenin Blanc'], grapes_other: ['Ruby Cabernet', 'Mission', 'Palomino', 'Sauvignon Blanc', 'Sémillon', 'Riesling'],
      notable_wines: 'Tintos do Valle de Guadalupe', producers: [prod('Vinos L.A. Cetto', 'Valle de Calafia; Double Gold em San Francisco (2009)')],
      subregions: [
        sub('Valle de Guadalupe', 'Vale', 'Valle de Guadalupe, Baja California, Mexico', 'Onde os dominicanos plantaram uvas na missão de Nuestra Señora de Guadalupe del Norte (1843); um dos poucos vales do mundo, como Napa e o Rhône, aptos a uvas premium. Chamado por entusiastas de "próximo Napa Valley".', ['Cabernet Sauvignon', 'Primitivo', 'Grenache'], [prod('Casa de Piedra', 'Piedra del Sol (branco); primeira safra 1997')], ''),
        sub('Valle de Santo Tomás', 'Vale', 'Santo Tomás, Baja California, Mexico', 'Sede da Bodegas Santo Tomás (1888) e da Pedro Domecq.', [], [prod('Bodegas de Santo Tomás', 'a mais antiga vinícola comercial em operação contínua do México'), prod('Vinos Pedro Domecq')], ''),
        sub('Valle de San Vicente', 'Vale', 'San Vicente, Baja California, Mexico', 'Uma das três áreas perto de Ensenada que fazem quase todo o vinho do Norte.', [], [], '')
      ] },

    { name: 'Coahuila (La Laguna)', geo: 'MX:Coahuila', sources: [MW],
      description: 'A região vinícola mais antiga do México, entre Coahuila e Durango, centrada no Valle de Parras: microclima no deserto a 1.500 m, dias quentes, noites frescas (12 °C de amplitude) e baixa umidade, que inibe pragas e fungos; água de fontes de montanha. Sobretudo tintos bordaleses, Syrah e Tempranillo. Mais de 400 famílias vêm à vindima de agosto e setembro.',
      climate: 'Desértico de altitude.', soils: '', altitude: '~1.500 m',
      history: 'A Casa Madero foi fundada em 1597 por Lorenzo García em Santa María de las Parras, como Hacienda San Lorenzo: a vinícola mais antiga das Américas. Videiras de Parras foram depois levadas ao Napa e à América do Sul.',
      grapes: ['Cabernet Sauvignon', 'Syrah', 'Merlot', 'Tempranillo'], grapes_other: ['Chardonnay', 'Chenin Blanc'], notable_wines: 'Casa Madero',
      producers: [],
      subregions: [sub('Valle de Parras', 'Vale', 'Parras de la Fuente, Coahuila, Mexico', 'Coração da região de La Laguna.', ['Cabernet Sauvignon', 'Syrah'],
        [prod('Casa Madero', 'a vinícola mais antiga das Américas (1597); Chardonnay, Chenin Blanc e Syrah premiados; brandies'), prod('Bodegas Ferrino', 'perto de Cuatro Ciénegas')], 'Casa Madero')] },

    { name: 'Centro (Querétaro, Zacatecas, Aguascalientes)', geo: 'MX:Centro', sources: [MW],
      description: 'Vinhas sobretudo a ~2.000 m; produção principalmente de espumantes, além de Sauvignon Blanc, Cabernet e Pinot Noir. Em março de 2025, Querétaro recebeu a primeira Indicação Geográfica Protegida de vinhos do México.',
      climate: '', soils: '', altitude: '~2.000 m', history: '',
      grapes: ['Sauvignon Blanc', 'Cabernet Sauvignon', 'Pinot Noir'], grapes_other: ['Merlot', 'Primitivo'], notable_wines: 'Espumantes de Querétaro', producers: [],
      subregions: [
        sub('Querétaro', 'IGP (2025)', 'Ezequiel Montes, Querétaro, Mexico', 'Primeira região mexicana com Indicação Geográfica Protegida para vinhos (2025). Espumantes de método tradicional.', [],
          [prod('Freixenet México', 'espumantes'), prod('Compañía Vinícola Los Eucaliptos', 'Ezequiel Montes')], 'Espumantes'),
        sub('Zacatecas', 'Área', 'Ojocaliente, Zacatecas, Mexico', 'Vinhas em Ojocaliente e Valle de la Macarena: invernos muito frios e verões frescos, solos argilosos; Cabernet, Merlot e uvas americanas.', ['Cabernet Sauvignon', 'Merlot'], [prod('Casa Cachola')], '')
      ] },

    { name: 'Sonora', geo: 'MX:Sonora', sources: [MW],
      description: 'Vinhedos em áreas montanhosas para fugir do calor.', climate: 'Desértico; vinhas em altitude.', soils: '', altitude: '~1.500 m', history: '',
      grapes: ['Cabernet Sauvignon', 'Touriga Nacional', 'Carménère', 'Grenache'], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Cuatro Sierras', 'Área', 'Cananea, Sonora, Mexico', 'A ~1.500 m, entre quatro serras, perto da fronteira com o Arizona.', ['Cabernet Sauvignon', 'Touriga Nacional', 'Carménère', 'Grenache', 'Chardonnay', 'Verdejo'], [prod('Viñedo Cuatro Sierras')], '')] },

    { name: 'Chihuahua', geo: 'MX:Chihuahua', sources: [MW],
      description: 'Vinícola em Cerocahui, na borda do Cânion do Cobre, em terra tarahumara.', climate: '', soils: '', altitude: '',
      history: 'Missão fundada em 1680; os jesuítas trouxeram mudas francesas e espanholas. Após a expulsão dos jesuítas, a família José María Sánchez guardou algumas mudas, depois salvas por um jardineiro e replantadas: hoje são mais de 4.000 videiras.',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Cerocahui', 'Área', 'Cerocahui, Chihuahua, Mexico', 'Pequeno vale no Cânion do Cobre, com vinícola no hotel da missão.', [], [], '')] }
  ];

  var countries = [
    { name: 'México', sources: [MW],
      description: 'A mais antiga região vinícola das Américas: Cortés mandou plantar videiras em toda a Nova Espanha após 1521. Em 1699 Carlos II proibiu o vinho nas colônias (salvo para a Igreja), até a independência. Retomada a partir dos anos 1980, sobretudo na Baja California (90% do vinho). ~2.500 ha; brancos de Chenin, Chardonnay, Sauvignon e Viognier; tintos bordaleses, Grenache, Tempranillo, Syrah, Petite Sirah. Três áreas: Norte (Baja California, Sonora), La Laguna (Coahuila e Durango) e Centro. Consumo baixo e imposto de 40%.' }
  ];

  return { code: 'MX', version: 1, countries: countries, regions: regions, country_of: 'México' };
})());
