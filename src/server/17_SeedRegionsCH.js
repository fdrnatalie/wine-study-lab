/**
 * ENCICLOPÉDIA DE REGIÕES — pack SUÍÇA (origem "pesquisado"). v1: as 6 regiões da Swiss Wine Promotion.
 * Pesquisa de 28/09/2026 na Wikipedia: "Swiss wine", "Lavaux" (inglês), "Weinbau in der Schweiz" (alemão),
 * "Vignoble du Valais" (francês).
 * Contornos dos cantões (18_GeoEurope.js, Natural Earth): exatos para Valais, Vaud, Genebra e Ticino;
 * aproximados para Três Lagos e Suíça alemã. Pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var WS = 'https://de.wikipedia.org/wiki/Weinbau_in_der_Schweiz';
  function sub(name, classification, place, description, grapes, producers, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src };
  }

  var regions = [
    { name: 'Valais', geo: 'CH:Valais', sources: [WS, 'https://fr.wikipedia.org/wiki/Vignoble_du_Valais'],
      description: 'O maior cantão vinícola: ~4.600–5.260 ha em ~75.000 parcelas, cerca de um terço a 40% do vinho suíço. Vinhas no vale do Ródano, de Visp a Martigny, sobretudo na margem direita, de 450 a 850 m, com encostas de até 70% e muitos terraços; o vinhedo de Visperterminen, acima de 1.000 m, é o mais alto ao norte dos Alpes. Muitas uvas nativas, aparentadas às do Vale de Aosta: Petite Arvine, Amigne, Humagne Blanche, Cornalin; a Syrah também brilha. Vinhos conhecidos: Fendant (Chasselas), Dôle (nome do Pinot Noir no Valais) e o rosé Œil de Perdrix du Valais.',
      climate: '~2.090 h de sol e 600–800 mm de chuva por ano, comparável a Bordeaux.', soils: '', altitude: '450–850 m (Visperterminen acima de 1.000 m)',
      history: 'Videira cultivada já entre 800 e 600 a.C.; a primeira menção escrita a vinhas na Suíça é de 516, da abadia de Saint-Maurice. Em 1990 o Valais foi o primeiro a criar uma hierarquia de qualidade. Especialidade: o "vin des glaciers", em solera, de Rèze.',
      grapes: ['Chasselas', 'Pinot Noir', 'Gamay', 'Petite Arvine', 'Syrah'], grapes_other: ['Amigne', 'Humagne Blanche', 'Cornalin', 'Humagne Rouge', 'Silvaner', 'Savagnin', 'Marsanne', 'Pinot Gris', 'Rèze'],
      notable_wines: 'Fendant; Dôle; Œil de Perdrix du Valais; Petite Arvine; Vin des glaciers', producers: [],
      subregions: [
        sub('Sion', 'AOC (comuna)', 'Sion, Switzerland', 'Uma das comunas com AOC no centro do Valais (com Savièse, Conthey, Grimisuat, Ayent).', [], [], '', WS),
        sub('Vétroz', 'AOC (comuna, Grand Cru)', 'Vétroz, Switzerland', 'Comuna com AOC e vinhedos Grand Cru (como St-Léonard e Fully).', [], [], '', WS),
        sub('Fully', 'AOC (comuna, Grand Cru)', 'Fully, Switzerland', 'Comuna com AOC e vinhedos Grand Cru; a tinta local Durize é chamada Rouge de Fully.', [], [], '', WS),
        sub('Chamoson', 'AOC (comuna)', 'Chamoson, Switzerland', 'Comuna com AOC no Valais central.', [], [], '', WS),
        sub('Salgesch (Salquenen)', 'AOC (comuna)', 'Salgesch, Switzerland', 'Comuna com AOC no Alto Valais (Salquenen em francês).', [], [], '', WS),
        sub('Visperterminen', 'Vinhedo de altitude', 'Visperterminen, Switzerland', 'O vinhedo Riebe, acima de 1.000 m, é o mais alto ao norte da cordilheira principal dos Alpes.', [], [], '', WS)
      ] },

    { name: 'Vaud', geo: 'CH:Vaud', sources: [WS, EN + 'Lavaux'],
      description: 'Segundo cantão vinícola (3.814 ha). A Chasselas ocupa 68% das vinhas. 28 denominações em quatro áreas: La Côte, Lavaux, Chablais e Nord Vaudois.',
      climate: '', soils: '', altitude: '',
      history: 'Vinha cultivada no Vaud desde o século VI; os cistercienses levaram a vinha a Dézaley.',
      grapes: ['Chasselas', 'Gamay', 'Pinot Noir'], grapes_other: ['Gamaret', 'Garanoir'], notable_wines: 'Dézaley e Calamin (Grand Cru); Yvorne; Féchy', producers: [],
      subregions: [
        sub('Lavaux', 'Região (UNESCO)', 'Cully, Switzerland', '830 ha de vinhedos em terraços por ~30 km na margem norte do lago Léman, entre Lausanne e Montreux; Patrimônio da UNESCO desde 2007 ("Lavaux, Vineyard Terraces"). Terraços do século XI, de mosteiros beneditinos e cistercienses. Sobretudo Chasselas. Protegido por lei cantonal desde 1979; sem pesticidas sintéticos desde 2016. Denominações: Lutry, Villette, Epesses, Dézaley (Grand Cru), Calamin (Grand Cru), Saint-Saphorin, Chardonne, Vevey, Montreux.',
          ['Chasselas'], [], 'Dézaley; Calamin; Saint-Saphorin', EN + 'Lavaux'),
        sub('La Côte', 'Região', 'Féchy, Switzerland', 'Margem do Léman entre Morges e Nyon; denominações Morges, Aubonne, Féchy, Perroy, Mont-sur-Rolle, Tartegnin, Vinzel, Luins, Begnins, Nyon…', ['Chasselas'], [], 'Féchy; Mont-sur-Rolle', WS),
        sub('Chablais', 'Região', 'Yvorne, Switzerland', 'Vale do Ródano entre o Léman e Bex, continuação do Valais: Villeneuve, Yvorne, Aigle, Ollon, Bex.', ['Chasselas'], [], 'Yvorne; Aigle', WS),
        sub('Nord Vaudois', 'Região', 'Bonvillars, Switzerland', 'Perto dos lagos de Neuchâtel e Morat, junto a Yverdon-les-Bains: Bonvillars, Côtes de l\'Orbe, Mont Vully.', [], [], '', WS)
      ] },

    { name: 'Genebra', geo: 'CH:Genève', sources: [WS],
      description: '1.340 ha em 35 das 45 comunas do cantão; terreno plano, diferente do resto do país. Genebra foi o primeiro cantão a adotar AOC (fim dos anos 1980). Gamay é a tinta mais plantada, seguida do Pinot Noir; entre as brancas, Chasselas.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: ['Gamay', 'Chasselas', 'Pinot Noir'], grapes_other: ['Gamaret', 'Pinot Blanc', 'Müller-Thurgau'], notable_wines: '', producers: [],
      subregions: [
        sub('Mandement (Satigny)', 'Região', 'Satigny, Switzerland', '879 ha em monocultura por 7 km até a fronteira francesa; Satigny é a maior comuna vinícola da Suíça. Denominações: Satigny, Peissy, Choully, Russin, Dardagny…', ['Gamay', 'Chasselas'], [], '', WS)
      ] },

    { name: 'Três Lagos (Trois-Lacs)', geo: 'CH:Três Lagos', sources: [WS],
      description: 'Em torno dos lagos de Biel, Neuchâtel e Morat (cantões de Berna, Friburgo, Neuchâtel e Vaud); 945 ha. Dominam Chasselas e Pinot Noir. O rosé Œil de Perdrix é invenção de Neuchâtel, o primeiro cantão a limitar rendimentos.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: ['Chasselas', 'Pinot Noir'], grapes_other: ['Chardonnay', 'Pinot Gris'], notable_wines: 'Œil de Perdrix de Neuchâtel', producers: [],
      subregions: [
        sub('Neuchâtel', 'AOC', 'Auvernier, Switzerland', 'Vinhas no lago de Neuchâtel (Cortaillod, Auvernier, Boudry, Cressier, Le Landeron…).', ['Chasselas', 'Pinot Noir'], [], 'Œil de Perdrix', WS),
        sub('Lago de Biel (Bielersee)', 'AOC', 'Twann, Switzerland', 'Encostas íngremes da margem norte do lago de Biel, até a água, entre Biel/Bienne e La Neuveville (Twann, Ligerz, Schafis…).', ['Chasselas', 'Pinot Noir'], [], '', WS),
        sub('Mont Vully', 'AOC', 'Mont Vully, Switzerland', 'Vinhas do lago de Morat, só nas encostas do Mont Vully.', [], [], '', WS)
      ] },

    { name: 'Ticino', geo: 'CH:Ticino', sources: [WS],
      description: 'O cantão mais ao sul, de língua italiana: 1.028 ha divididos por ~3.800 viticultores (só ~30 profissionais). Quase 83% é Merlot, introduzida no início do século XX; abaixo de 450 m ela amadurece bem, acima recorre-se ao Pinot Noir. Clima mais ensolarado, de influência mediterrânea. Selo de qualidade VITI.',
      climate: 'Mais ensolarado e mediterrâneo que o norte dos Alpes.', soils: '', altitude: '', history: '',
      grapes: ['Merlot'], grapes_other: ['Pinot Noir', 'Cabernet Sauvignon', 'Cabernet Franc', 'Bondola', 'Chardonnay'], notable_wines: 'Ticino DOC Merlot', producers: [],
      subregions: [
        sub('Ticino DOC (Merlot)', 'DOC', 'Giubiasco, Switzerland', 'Vilas vinícolas: Giornico, Malvaglia, Biasca, Verscio, Gordola, Tenero, Gudo, Giubiasco, Rivera, Morcote, Stabio, Chiasso, Castel San Pietro…', ['Merlot'], [], 'Merlot del Ticino', WS)
      ] },

    { name: 'Suíça alemã (Deutschschweiz)', geo: 'CH:Deutschschweiz', sources: [WS],
      description: 'Vinhas espalhadas por Zurique, Schaffhausen, Argóvia, Turgóvia, São Galo e Basileia, sobretudo Pinot Noir (aqui "Blauburgunder") e Müller-Thurgau ("Riesling x Sylvaner"), uva criada pelo professor Hermann Müller, natural da Turgóvia.',
      climate: 'O föhn, "cozinheiro de uvas", ajuda no Vale do Reno.', soils: '', altitude: '', history: '',
      grapes: ['Pinot Noir', 'Müller-Thurgau'], grapes_other: ['Räuschling', 'Pinot Gris', 'Gewürztraminer', 'Kerner'], notable_wines: 'Blauburgunder', producers: [],
      subregions: [
        sub('Zurique', 'Cantão', 'Stäfa, Switzerland', 'A maior área da Suíça alemã (644 ha): margens do lago de Zurique, Limmattal, Unterland e Weinland; Blauburgunder e Müller-Thurgau, além de Räuschling.', ['Pinot Noir', 'Müller-Thurgau', 'Räuschling'], [], '', WS),
        sub('Schaffhausen (Klettgau)', 'Cantão', 'Hallau, Switzerland', 'Segunda da Suíça alemã. Hallau (~150 ha) é a maior comuna vinícola do leste suíço; em Wilchingen o Pinot Gris é chamado "Tokayer".', ['Pinot Noir', 'Müller-Thurgau'], [], '', WS),
        sub('Turgóvia', 'Cantão', 'Uesslingen-Buch, Switzerland', '~250 ha, 65% tintos; clima ameno graças ao lago de Constança.', ['Pinot Noir', 'Müller-Thurgau'], [], '', WS),
        sub('São Galo (Vale do Reno)', 'Cantão', 'Berneck, Switzerland', '217 ha em encostas íngremes do Vale do Reno; ~60 uvas; em Quinten, no Walensee, vinhas só acessíveis de barco.', ['Pinot Noir', 'Müller-Thurgau'], [], '', WS),
        sub('Argóvia', 'Cantão', 'Wettingen, Switzerland', 'Quase 400 ha em encostas voltadas ao sul; Blauburgunder e Riesling x Silvaner.', ['Pinot Noir', 'Müller-Thurgau'], [], '', WS)
      ] }
  ];

  var countries = [
    { name: 'Suíça', sources: [EN + 'Swiss_wine', WS],
      description: '~15.000 ha (14.704 em 2019), 57% tintas e 43% brancas; ~1 milhão de hl, quase todo bebido no país (1–2% exportado). As uvas mais plantadas são Pinot Noir (~30%) e Chasselas (~27%); mais de 200 variedades, muitas nativas. Três categorias: AOC (com Grand Cru em algumas comunas), vinho de país e vinho de mesa; as AOC são reguladas pelos cantões. Seis regiões (Swiss Wine Promotion): Valais, Vaud, Genebra, Três Lagos, Ticino e Suíça alemã.' }
  ];

  return { code: 'CH', version: 1, countries: countries, regions: regions, country_of: 'Suíça' };
})());
