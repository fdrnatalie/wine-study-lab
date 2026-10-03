/**
 * ENCICLOPÉDIA DE REGIÕES — pack AUSTRÁLIA (origem "pesquisado"). v1: 5 estados, regiões (GIs) como sub-regiões.
 * Pesquisa de 03/10/2026 na Wikipedia (inglês): "Australian wine", "South Australian wine", artigos das regiões
 * (Barossa, McLaren Vale, Eden Valley, Adelaide Hills, Hunter Valley, Yarra Valley, Margaret River, Tasmania, Rutherglen)
 * e produtores (Penfolds, Henschke). Contornos EXATOS dos estados (18_GeoWorld.js, Natural Earth).
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var SA = EN + 'South_Australian_wine';
  function sub(name, place, description, grapes, producers, wines, src) {
    return { name: name, classification: 'GI (região)', place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src };
  }
  function prod(name, labels, src) { return { name: name, labels: labels || '', src: src || '' }; }

  var regions = [
    { name: 'Austrália do Sul', geo: 'AU:South Australia', sources: [SA],
      description: 'Mais da metade do vinho australiano: do Riesling fresco do Clare Valley ao Shiraz encorpado do Barossa, além de muito vinho em caixa (Riverland). Aqui nascem Penfolds Grange, Jacob\'s Creek, Yalumba e Henschke Hill of Grace. A "super zona" Adelaide reúne as zonas Barossa, Fleurieu e Mount Lofty Ranges.',
      climate: 'Muito variado: o interior (Riverland) é muito quente; o litoral (Adelaide Hills) mais fresco. Chuva baixa, irrigação essencial.', soils: 'Terra rossa em Coonawarra; calcário e marga em Adelaide e Riverland; areia e argila no Barossa.', altitude: 'até 600 m (Pewsey Vale, Eden Valley)',
      history: 'Primeiras vinhas em 1836 (John Barton Hack, North Adelaide); em 1843 Hack mandou à rainha Vitória o primeiro vinho australiano a chegar a ela. O médico Christopher Penfold plantou mudas do sul da França em "The Grange", Magill, em 1844.',
      grapes: ['Syrah', 'Cabernet Sauvignon', 'Riesling', 'Chardonnay', 'Grenache'], grapes_other: ['Mourvèdre', 'Sémillon', 'Sauvignon Blanc', 'Petit Verdot'],
      notable_wines: 'Penfolds Grange; Henschke Hill of Grace; Shiraz do Barossa; Riesling do Clare e do Eden Valley',
      producers: [prod('Penfolds', 'Grange; fundada em 1844 em Adelaide (Treasury Wine Estates)', EN + 'Penfolds'), prod('Jacob\'s Creek', '', SA), prod('Yalumba', '', SA)],
      subregions: [
        sub('Barossa Valley', 'Tanunda, South Australia, Australia', 'Uma das regiões mais antigas e prestigiosas, ~56 km a nordeste de Adelaide, fundada por colonos alemães da Silésia. Clima quente e seco; famosa pelo Shiraz de vinhas velhas, encorpado, com notas de chocolate e especiarias, que ganhou fama internacional nos anos 1980. Algumas vinhas têm 100–150 anos; a Turkey Flat, em Tanunda, tem as videiras comerciais mais antigas (1847). Também Grenache, Mourvèdre, Cabernet, Riesling, Chardonnay, Sémillon. Patrimônio protegido por lei desde 2012.', ['Syrah', 'Grenache', 'Mourvèdre'],
          [prod('Penfolds', '', EN + 'Barossa_Valley_wine_region'), prod('Peter Lehmann'), prod('Orlando Wines'), prod('Seppeltsfield'), prod('Wolf Blass'), prod('Yalumba'), prod('Turkey Flat', 'videiras de 1847')], 'Shiraz do Barossa', EN + 'Barossa_Valley_wine_region'),
        sub('Eden Valley', 'Eden Valley, South Australia, Australia', 'Nos montes Mount Lofty, a leste do Barossa; solos mais rochosos e ácidos; sub-região High Eden. Shiraz (31%) e Riesling (24%), com Rieslings de nota calcária conhecidos no mundo. Abriga o vinhedo Hill of Grace, de Shiraz com mais de 140 anos.', ['Syrah', 'Riesling'],
          [prod('Henschke', 'Keyneton; Hill of Grace (Shiraz, desde 1958)', EN + 'Henschke')], 'Hill of Grace', EN + 'Eden_Valley_wine_region'),
        sub('Clare Valley', 'Clare, South Australia, Australia', 'O distrito vinícola importante mais ao norte da Austrália do Sul; Riesling de clima fresco.', ['Riesling'], [], 'Riesling do Clare', SA),
        sub('McLaren Vale', 'McLaren Vale, South Australia, Australia', '38 km ao sul de Adelaide, 30 km de costa no golfo de St Vincent até os montes Mount Lofty; clima mediterrâneo. Uvas desde 1838 (John Reynell, Thomas Hardy); há vinhas com mais de 100 anos. Uma das "Great Wine Capitals".', [],
          [prod('Hardy\'s'), prod('Seaview')], '', EN + 'McLaren_Vale'),
        sub('Coonawarra', 'Penola, South Australia, Australia', 'Faixa ao longo da Riddoch Highway, ao norte de Penola, famosa pela terra rossa; por anos houve disputa sobre quais vinhedos eram realmente "Coonawarra".', [], [], '', SA),
        sub('Adelaide Hills', 'Hahndorf, South Australia, Australia', 'Montes Mount Lofty a leste de Adelaide, a 14 km do mar, uma das áreas mais frescas do estado. Sauvignon Blanc (36,5%), Chardonnay, Pinot Noir e Pinot Gris.', ['Sauvignon Blanc', 'Chardonnay', 'Pinot Noir'], [], '', EN + 'Adelaide_Hills_wine_region'),
        sub('Riverland', 'Renmark, South Australia, Australia', 'Terras muito irrigadas e quentes onde se faz grande parte do vinho a granel e em caixa; uma das maiores plantações de Petit Verdot do mundo (100 ha da Kingston Estate).', ['Petit Verdot'], [prod('Kingston Estate', '100 ha de Petit Verdot')], '', SA)
      ] },

    { name: 'Nova Gales do Sul', geo: 'AU:New South Wales', sources: [EN + 'Hunter_Valley_wine_region'],
      description: 'Estado de Sydney; inclui o Hunter Valley, uma das primeiras regiões vinícolas da Austrália, e a Riverina, irrigada e de vinho a granel.', climate: '', soils: '', altitude: '', history: 'Vinhas plantadas em Sydney logo após 1788.',
      grapes: ['Sémillon', 'Syrah', 'Chardonnay'], grapes_other: ['Cabernet Sauvignon', 'Verdelho'], notable_wines: 'Hunter Valley Sémillon', producers: [],
      subregions: [
        sub('Hunter Valley', 'Pokolbin, New South Wales, Australia', 'Cultivado desde o início do século XIX; a proximidade de Sydney moldou seu crescimento e o enoturismo. Famoso pelo Hunter Valley Sémillon, também Shiraz, Chardonnay, Cabernet e Verdelho. Sub-regiões: Upper Hunter, Broke Fordwich e Pokolbin (núcleo do "Lower Hunter", ao pé da Brokenback Range).', ['Sémillon', 'Syrah', 'Chardonnay'], [], 'Hunter Valley Sémillon', EN + 'Hunter_Valley_wine_region')
      ] },

    { name: 'Vitória', geo: 'AU:Victoria', sources: [EN + 'Yarra_Valley_wine_region', EN + 'Rutherglen_wine_region'],
      description: 'Estado de Melbourne, do frio Yarra Valley ao quente Rutherglen, dos fortificados doces.', climate: '', soils: '', altitude: '',
      history: 'O Yarra Valley foi a primeira região plantada de Vitória (Yering Station, 1838).',
      grapes: ['Pinot Noir', 'Chardonnay'], grapes_other: ['Durif', 'Muscat Blanc à Petits Grains', 'Muscadelle'], notable_wines: 'Muscat e "Tokay" de Rutherglen; espumantes do Yarra', producers: [],
      subregions: [
        sub('Yarra Valley', 'Healesville, Victoria, Australia', 'Leste de Melbourne; clima fresco, melhor conhecido por Chardonnay, espumante e Pinot Noir. Sub-regiões Valley Floor (50–80 m, mais quente) e Upper Yarra (até ~400 m, solos vermelhos férteis). Mais de 3,1 milhões de visitantes em 2011.', ['Chardonnay', 'Pinot Noir'],
          [prod('Yering Station', 'primeiro vinhedo de Vitória (1838)')], '', EN + 'Yarra_Valley_wine_region'),
        sub('Rutherglen', 'Rutherglen, Victoria, Australia', 'Nordeste de Vitória, clima mediterrâneo quente e seco; famoso pelos fortificados doces. Durif, Muscat, Tokay (Muscadelle), Shiraz…', ['Durif', 'Muscadelle'],
          [prod('All Saints Estate'), prod('Campbells Wines'), prod('Chambers Rosewood'), prod('Morris Wines'), prod('Stanton & Killeen')], 'Rutherglen Muscat', EN + 'Rutherglen_wine_region')
      ] },

    { name: 'Austrália Ocidental', geo: 'AU:Western Australia', sources: [EN + 'Margaret_River_(wine_region)'],
      description: 'Sudoeste do estado: Margaret River, Great Southern (Albany, Denmark, Frankland River, Mount Barker, Porongurup) e Greater Perth.', climate: '', soils: '', altitude: '', history: '',
      grapes: ['Cabernet Sauvignon', 'Chardonnay'], grapes_other: [], notable_wines: '', producers: [],
      subregions: [
        sub('Margaret River', 'Margaret River, Western Australia, Australia', 'A principal região do estado (5.840 ha e 215 vinícolas em 2012), sobretudo de pequenos produtores. O clima mais marítimo entre as grandes regiões australianas (amplitude anual de só 7,6 °C), comparado a Bordeaux em safra seca. Só 2% da uva do país, mas mais de 20% do mercado premium. Cabernet, Chardonnay, Sauvignon Blanc, Sémillon, Shiraz.', ['Cabernet Sauvignon', 'Chardonnay', 'Sauvignon Blanc', 'Sémillon'],
          [prod('Cape Mentelle Vineyards', 'de David Hohnen, depois fundador da Cloudy Bay', EN + 'Cloudy_Bay_Vineyards')], '', EN + 'Margaret_River_(wine_region)')
      ] },

    { name: 'Tasmânia', geo: 'AU:Tasmania', sources: [EN + 'Tasmanian_wine'],
      description: 'Mais ao sul que o resto do país, de clima mais frio: Pinot Noir, Chardonnay e Sauvignon Blanc, base de espumantes de alta qualidade. Vinhedos sobretudo perto de Launceston (norte) e Hobart (sul).',
      climate: 'Temperado, ventos fortes (exigem telas); colheita tardia, por volta de abril.', soils: '', altitude: '',
      history: 'Uma das primeiras áreas plantadas da Austrália e fonte das mudas dos primeiros vinhedos de Vitória e da Austrália do Sul.',
      grapes: ['Pinot Noir', 'Chardonnay', 'Sauvignon Blanc'], grapes_other: ['Riesling', 'Pinot Gris'], notable_wines: 'Espumantes', producers: [],
      subregions: [
        sub('Tamar Valley', 'Launceston, Tasmania, Australia', 'Ao norte de Launceston; reputação por Chardonnay e Pinot Noir.', ['Chardonnay', 'Pinot Noir'], [], '', EN + 'Australian_wine'),
        sub('Coal River Valley', 'Richmond, Tasmania, Australia', 'Entre Cambridge e Colebrook; mais quente, começa a se destacar em tintos.', [], [], '', EN + 'Tasmanian_wine')
      ] }
  ];

  var countries = [
    { name: 'Austrália', sources: [EN + 'Australian_wine'],
      description: 'Um dos maiores exportadores do mundo: ~800 milhões dos 1,2–1,3 bilhão de litros anuais vão para fora. Mais de 60 regiões e ~160.000 ha, sobretudo no sul mais fresco. Sem uvas nativas: a vinifera chegou da Europa e da África do Sul no fim do século XVIII. A Shiraz é a mais plantada; também Cabernet, Chardonnay, Merlot, Sémillon, Pinot Noir, Riesling, Sauvignon Blanc. Rótulos varietais com 85% da uva; Indicações Geográficas em zonas, regiões e sub-regiões. O maior volume vem das zonas quentes da bacia Murray-Darling.' }
  ];

  return { code: 'AU', version: 1, countries: countries, regions: regions, country_of: 'Austrália' };
})());
