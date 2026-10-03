/**
 * ENCICLOPÉDIA DE REGIÕES — pack CHINA (origem "pesquisado"). v1: 4 províncias/regiões.
 * Pesquisa de 03/10/2026 na Wikipedia (inglês): "Wine in China".
 * Contornos EXATOS das províncias (18_GeoWorld.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var CW = 'https://en.wikipedia.org/wiki/Wine_in_China';
  function sub(name, place, description, grapes, producers, wines) {
    return { name: name, classification: 'Área', place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: CW };
  }
  function prod(name, labels) { return { name: name, labels: labels || '', src: CW }; }

  var regions = [
    { name: 'Shandong', geo: 'CN:Shandong', sources: [CW],
      description: 'Yantai-Penglai é a maior região produtora da China: mais de 140 vinícolas e 40% do vinho do país.', climate: '', soils: '', altitude: '',
      history: 'A Changyu, "primeira vinícola moderna" da China, foi fundada em 1892 perto do porto de Chefoo (hoje Yantai) por Zhang Bishi.',
      grapes: ['Cabernet Sauvignon'], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Yantai-Penglai', 'Yantai, Shandong, China', 'A maior região produtora (40% do vinho chinês, mais de 140 vinícolas).', [], [prod('Changyu Pioneer Wine', 'fundada em 1892; uma das maiores empresas do país')], '')] },

    { name: 'Ningxia', geo: 'CN:Ningxia', sources: [CW],
      description: 'Região que ganhou reconhecimento internacional. Em 2011, o Jiabeilan 2009 da Helan Qingxue venceu um troféu internacional do Decanter World Wine Awards (corte de Cabernet); no mesmo ano, na disputa "Bordeaux contra Ningxia" em Pequim, quatro dos cinco melhores vinhos às cegas eram de Ningxia.', climate: '', soils: '', altitude: '', history: '',
      grapes: ['Cabernet Sauvignon'], grapes_other: [], notable_wines: 'Jiabeilan (Helan Qingxue)', producers: [],
      subregions: [sub('Ningxia', 'Yinchuan, Ningxia, China', 'Região das vinícolas premiadas.', ['Cabernet Sauvignon'],
        [prod('Helan Qingxue', 'Jiabeilan 2009, troféu no Decanter World Wine Awards 2011'), prod('Silver Heights Vineyard', 'Emma Gao, uma das principais enólogas da região')], 'Jiabeilan')] },

    { name: 'Xinjiang', geo: 'CN:Xinjiang', sources: [CW],
      description: 'Região autônoma de viticultura antiquíssima; Turpan é conhecida pela produção de uvas, e Marco Polo citou os bons vinhos de "Carachoco" (Turpan). A indústria moderna segue métodos franceses, com foco em Cabernet; em torno de Kashgar sobrevive o vinho caseiro uigur "museles", fervido com açúcar.', climate: '', soils: '', altitude: '', history: '',
      grapes: ['Cabernet Sauvignon'], grapes_other: [], notable_wines: 'Museles (tradição uigur)', producers: [],
      subregions: [sub('Turpan', 'Turpan, Xinjiang, China', 'Área historicamente famosa por uvas e vinho.', [], [], ''), sub('Kashgar', 'Kashgar, Xinjiang, China', 'Onde a técnica uigur do museles sobrevive.', [], [], 'Museles')] },

    { name: 'Hebei', geo: 'CN:Hebei', sources: [CW],
      description: 'Zhangjiakou, em Hebei, está entre as regiões produtoras notáveis.', climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: '', producers: [],
      subregions: [sub('Zhangjiakou', 'Zhangjiakou, Hebei, China', 'Região produtora notável.', [], [], '')] }
  ];

  var countries = [
    { name: 'China', sources: [CW],
      description: 'Vinho de uva com longa história, mas por muito tempo à sombra do huangjiu e do baijiu; evidências de bebidas fermentadas de ~7000 a.C. O consumo cresceu muito desde a abertura dos anos 1980 (a Dynasty, joint venture com a Rémy Martin em Tianjin, foi a primeira em 1980); hoje está entre os dez maiores mercados. Laços fortes com produtores franceses. Grandes empresas: Changyu, Great Wall e Dynasty. Regiões notáveis: Pequim, Yantai, Zhangjiakou (Hebei), Yibin (Sichuan), Tonghua (Jilin), Taiyuan (Shanxi) e Ningxia.' }
  ];

  return { code: 'CN', version: 1, countries: countries, regions: regions, country_of: 'China' };
})());
