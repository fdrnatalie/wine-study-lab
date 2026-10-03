/**
 * ENCICLOPÉDIA DE REGIÕES — pack ESLOVÊNIA (origem "pesquisado"). v1: as 3 regiões vinícolas e seus distritos.
 * Pesquisa de 28/09/2026 na Wikipedia (inglês): "Slovenian wine".
 * Contornos APROXIMADOS pelas regiões estatísticas (18_GeoEurope.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var SW = 'https://en.wikipedia.org/wiki/Slovenian_wine';
  function sub(name, place, description, grapes, wines) {
    return { name: name, classification: 'Distrito', place: place, description: description,
      grapes: grapes || [], producers: [], notable_wines: wines || '', source: SW };
  }

  var regions = [
    { name: 'Primorska (Litoral)', geo: 'SI:Primorska', sources: [SW],
      description: 'A região eslovena mais conhecida no exterior; sobretudo brancos, mas responde pela maior parte dos tintos do país. Quatro distritos: Goriška Brda, Vipava, Kras e Slovenska Istra (Koper). Influência mediterrânea no extremo oeste.',
      climate: 'Continental com influência mediterrânea a oeste.', soils: 'Terra vermelha rica em ferro no Kras.', altitude: '', history: '',
      grapes: ['Ribolla Gialla', 'Merlot', 'Refosco dal Peduncolo Rosso', 'Malvasia Istriana'], grapes_other: ['Cabernet Sauvignon', 'Chardonnay', 'Sauvignon Blanc', 'Pinot Gris', 'Pinot Noir', 'Friulano', 'Pinela', 'Zelen', 'Vitovska', 'Barbera'],
      notable_wines: 'Rebula de Brda; cortes Merlot-Cabernet; Teran do Kras', producers: [],
      subregions: [
        sub('Goriška Brda', 'Dobrovo, Slovenia', 'Faz fronteira com o Collio italiano (Friuli-Venezia Giulia); uma das primeiras áreas a buscar reputação internacional. Uvas internacionais e nativas: Rebula (Ribolla Gialla), Refošk (Refosco), Friulano. Mais conhecida pelo branco de Rebula e pelos cortes Merlot-Cabernet.', ['Ribolla Gialla', 'Merlot', 'Cabernet Sauvignon', 'Friulano'], 'Rebula; Merlot-Cabernet'),
        sub('Vipava', 'Vipava, Slovenia', 'Brancos leves e frescos das uvas locais Pinela e Zelen.', ['Pinela', 'Zelen'], ''),
        sub('Kras (Carso)', 'Sežana, Slovenia', 'Planalto perto de Trieste, conhecido pelo Teran: tinto muito escuro e ácido de Refosco plantado na terra vermelha rica em ferro.', ['Refosco dal Peduncolo Rosso'], 'Teran'),
        sub('Slovenska Istra (Koper)', 'Koper, Slovenia', 'Na península da Ístria, junto ao Adriático: a região vinícola mais quente da Eslovênia. Refošk e Malvazija são as mais plantadas.', ['Refosco dal Peduncolo Rosso', 'Malvasia Istriana'], '')
      ] },

    { name: 'Posavje (Baixo Sava)', geo: 'SI:Posavje', sources: [SW],
      description: 'A única região eslovena que produz mais tinto que branco (por pouco). Três distritos; hoje mais vinho a granel que premium.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: ['Blaufränkisch', 'Žametovka', 'Kraljevina'], grapes_other: ['Pinot Blanc', 'Cabernet Sauvignon', 'Chardonnay', 'Gamay', 'Pinot Noir', 'Zweigelt'],
      notable_wines: 'Cviček', producers: [],
      subregions: [
        sub('Bizeljsko-Brežice', 'Brežice, Slovenia', 'Espumantes e brancos ácidos de Rumeni Plavec.', ['Rumeni Plavec'], ''),
        sub('Dolenjska (Baixa Carníola)', 'Novo Mesto, Slovenia', 'Terra do Cviček, corte de uvas brancas e tintas, sobretudo Kraljevina e Žametovka.', ['Kraljevina', 'Žametovka'], 'Cviček'),
        sub('Bela Krajina (Carníola Branca)', 'Metlika, Slovenia', 'Tintos de Blaufränkisch e vinhos de Muscat.', ['Blaufränkisch'], '')
      ] },

    { name: 'Podravje (Drava)', geo: 'SI:Podravje', sources: [SW],
      description: 'A maior região do país, com sete distritos; quase 97% do vinho é branco. Algumas vinícolas privadas pequenas sobreviveram aqui mesmo sob as cooperativas iugoslavas.',
      climate: 'Continental, influenciado pelo rio Drava.', soils: '', altitude: '', history: '',
      grapes: ['Traminer', 'Ranina'], grapes_other: ['Chasselas', 'Gamay', 'Kerner', 'Kraljevina', 'Muscat Ottonel', 'Blauer Portugieser', 'Zweigelt', 'Silvaner'],
      notable_wines: 'Brancos de Jeruzalem; penina (espumante)', producers: [],
      subregions: [
        sub('Ljutomer-Ormož', 'Jeruzalem, Slovenia', 'Inclui a vila de Jeruzalem, conhecida pelos brancos de Dišeči Traminec (Traminer aromático) e Ranina; entre os melhores vinhos da Drava.', ['Traminer', 'Ranina'], ''),
        sub('Radgona-Kapela', 'Gornja Radgona, Slovenia', 'Primeiro lugar da Eslovênia a fazer espumante (penina) pelo método champenoise, em 1852.', [], 'Penina'),
        sub('Maribor', 'Maribor, Slovenia', 'Um dos distritos que dão alguns dos melhores vinhos da Drava.', [], ''),
        sub('Haloze', 'Podlehnik, Slovenia', 'Distrito em melhora de qualidade, de produção pequena e consumo local.', [], '')
      ] }
  ];

  var countries = [
    { name: 'Eslovênia', sources: [SW],
      description: 'Mais de 28.000 vinícolas e 22.300 ha, 80–90 milhões de litros por ano; ~75% branco, quase tudo bebido no país. Viticultura desde celtas e ilírios (séculos V–IV a.C.), antes dos romanos. Um estudo de 2016 indicou que Blaufränkisch e Blauer Portugieser provavelmente se originaram na Estíria eslovena. A indústria mais avançada da antiga Iugoslávia. Três regiões: Primorska, Posavje e Podravje.' }
  ];

  return { code: 'SI', version: 1, countries: countries, regions: regions, country_of: 'Eslovênia' };
})());
