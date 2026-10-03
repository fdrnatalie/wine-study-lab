/**
 * ENCICLOPÉDIA DE REGIÕES — pack CHILE (origem "pesquisado"). v1: as regiões oficiais (decreto de 2018) e seus vales.
 * Pesquisa de 03/10/2026 na Wikipedia (inglês): "Chilean wine", "Maule Valley", "Concha y Toro", "Viña Errázuriz", "Seña".
 * Contornos pelas regiões administrativas (18_GeoWorld.js, Natural Earth); pontos: Nominatim.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var CW = EN + 'Chilean_wine';
  function sub(name, place, description, grapes, producers, wines, src) {
    return { name: name, classification: 'DO (vale)', place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src || CW };
  }
  function prod(name, labels, src) { return { name: name, labels: labels || '', src: src || '' }; }

  var regions = [
    { name: 'Vale Central (Valle Central)', geo: 'CL:Central', sources: [CW],
      description: 'A região mais produtiva e conhecida internacionalmente, perto de Santiago, do outro lado dos Andes em relação a Mendoza. Quatro sub-regiões: Maipo, Rapel (Cachapoal e Colchagua), Curicó e Maule. Vinhas nas planícies dos vales, ao longo de rios que descem dos Andes.',
      climate: 'Seco (~380 mm de chuva), pouca geada de primavera e grande amplitude térmica pela proximidade dos Andes.', soils: 'Aluviais; salinidade alta no Maipo e pouco potássio no Maipo e no Maule.', altitude: '',
      history: '', grapes: ['Cabernet Sauvignon', 'Carménère', 'Merlot', 'Sauvignon Blanc'], grapes_other: ['Syrah', 'Malbec', 'Carignan'],
      notable_wines: 'Cabernet do Alto Maipo; Carménère; Don Melchor; Casillero del Diablo',
      producers: [prod('Concha y Toro', 'Santiago; o maior produtor e exportador da América Latina; Casillero del Diablo, Don Melchor', EN + 'Concha_y_Toro')],
      subregions: [
        sub('Maipo', 'Pirque, Chile', 'O vale mais próximo de Santiago, dos Andes ao litoral. Três setores: Alto Maipo (pé dos Andes, noites frias e solo pobre e pedregoso: Cabernet ousado e elegante), Maipo Central (o mais quente e seco; Cabernet e Carménère) e Maipo Pacífico (influência do oceano; experimentos com Sauvignon Blanc).', ['Cabernet Sauvignon', 'Carménère'], [], 'Cabernet do Alto Maipo'),
        sub('Cachapoal', 'Rengo, Chile', 'Norte do Rapel (que faz ~um quarto do vinho chileno). Clima mediterrâneo temperado, protegido do Pacífico pela Cordilheira da Costa. Cabernet no pé dos Andes; Carménère perto da costa.', ['Cabernet Sauvignon', 'Carménère'],
          [prod('Altair'), prod('Vik'), prod('Viña La Rosa'), prod('Clos des Fous')], ''),
        sub('Colchagua', 'Santa Cruz, Chile', 'Sul do Rapel, um dos vales mais conhecidos do Chile; vinhedos importantes no pé da Cordilheira da Costa. Malbec, Cabernet, Carménère e Syrah encorpados. Clima mediterrâneo fresco (592 mm de chuva); argila, areia e granito decomposto.', ['Malbec', 'Cabernet Sauvignon', 'Carménère', 'Syrah'], [], ''),
        sub('Curicó', 'Molina, Chile', '200 km ao sul de Santiago (35° S); sub-regiões Teno e Lontué. O vale com mais variedades plantadas do país; Cabernet e Sauvignon Blanc confiáveis e de bom preço. A produção moderna começou no fim dos anos 1970 com o espanhol Miguel Torres, que trouxe tanques de inox.', ['Cabernet Sauvignon', 'Sauvignon Blanc'],
          [prod('Miguel Torres Chile', 'pioneiro da produção moderna em Curicó', CW)], ''),
        sub('Maule', 'Talca, Chile', '250 km ao sul de Santiago; um dos maiores e mais antigos vales do Chile. Cabernet potente e Carménère aromático e especiado; solos ricos e vulcânicos (ardósia em Empedrado). Fama crescente pelos Carignan de vinhas de ~70 anos e pelos vinhedos velhos, sem irrigação, de misturas de campo.', ['Cabernet Sauvignon', 'Carménère', 'Carignan'], [], 'Carignan de vinhas velhas', EN + 'Maule_Valley')
      ] },

    { name: 'Aconcágua', geo: 'CL:Aconcágua', sources: [CW],
      description: 'Região de Valparaíso, com os vales do Aconcágua e de Casablanca.', climate: '', soils: '', altitude: '', history: '',
      grapes: ['Cabernet Sauvignon', 'Sauvignon Blanc', 'Chardonnay', 'Pinot Noir'], grapes_other: [], notable_wines: 'Seña', producers: [],
      subregions: [
        sub('Vale do Aconcágua', 'Panquehue, Chile', 'Pequena área (1.098 ha) irrigada pelo degelo do Aconcágua, conhecida pelos tintos. Em degustação às cegas em Berlim (2004), o Seña ficou à frente de Lafite e Margaux. Brancos em novos vinhedos costeiros.', ['Cabernet Sauvignon'],
          [prod('Viña Errázuriz', 'fundada em 1870 por Maximiano Errázuriz; Eduardo Chadwick', EN + 'Viña_Errázuriz'), prod('Seña', 'corte icônico (desde 1995), criado com Robert Mondavi; biodinâmico', EN + 'Viña_Seña')], 'Seña'),
        sub('Casablanca', 'Casablanca, Chile', 'Vale de ~30 km plantado a partir de meados dos anos 1980: logo ficou conhecido pelos brancos (Sauvignon Blanc, Chardonnay) e pelo Pinot Noir, graças à neblina e às nuvens do Pacífico, apesar dos 33° S.', ['Sauvignon Blanc', 'Chardonnay', 'Pinot Noir'], [], '')
      ] },

    { name: 'Coquimbo', geo: 'CL:Coquimbo', sources: [CW],
      description: 'Norte do Chile, no fim do deserto do Atacama: vales do Elqui, Limarí e Choapa. Conhecido pelo pisco e pelas uvas de mesa, mas cada vez mais por vinhos de clima desértico.', climate: 'Desértico, menos de 70 mm de chuva; ventos frescos do Pacífico e dos Andes.', soils: '', altitude: 'até 2.000 m no Elqui', history: '',
      grapes: ['Syrah', 'Sauvignon Blanc', 'Chardonnay'], grapes_other: ['Pinot Noir'], notable_wines: 'Syrah do Elqui', producers: [],
      subregions: [
        sub('Elqui', 'Vicuña, Chile', '530 km ao norte de Santiago; a região vinícola mais viável do norte. Vinhas do Pacífico aos Andes, até 2.000 m; produção desde os anos 1990 (286 ha), com ótimos resultados em Syrah.', ['Syrah'], [], ''),
        sub('Limarí', 'Ovalle, Chile', '470 km ao norte de Santiago; vinhas desde o século XVI e renascimento recente. Sauvignon Blanc e Chardonnay (desde os anos 1990), também Syrah e Pinot Noir.', ['Sauvignon Blanc', 'Chardonnay', 'Syrah'], [], '')
      ] },

    { name: 'Sul do Chile', geo: 'CL:Sul', sources: [CW],
      description: 'Regiões de Ñuble e Biobío: vales do Itata, Bío-Bío e Malleco. Mais chuva, temperaturas menores e menos sol que no norte. Tradicionalmente vinho de caixa de País; a Concha y Toro experimentou Gewürztraminer aqui.', climate: 'Mais chuvoso e frio.', soils: '', altitude: '', history: '',
      grapes: ['País', 'Muscat of Alexandria', 'Carignan'], grapes_other: ['Gewürztraminer'], notable_wines: '', producers: [],
      subregions: [
        sub('Itata', 'Quillón, Chile', 'Na região de Ñuble, a 420 km de Santiago; vinhedos pouco densos em torno de Chillán, Quillón e Coelemu, na confluência dos rios Itata e Ñuble, refrescados pela corrente de Humboldt. País, Moscatel de Alexandria e Carignan.', ['País', 'Muscat of Alexandria', 'Carignan'], [], ''),
        sub('Bío-Bío', 'Mulchén, Chile', 'Vale ao sul do Itata, de clima mais frio e chuvoso.', [], [], '')
      ] }
  ];

  var countries = [
    { name: 'Chile', sources: [CW],
      description: 'Vinhas desde os conquistadores espanhóis (século XVI); uvas francesas (Cabernet, Merlot, Carménère, Cabernet Franc) a partir de meados do século XIX. Renascimento no início dos anos 1980 com inox e barricas. Quinto exportador e sétimo produtor do mundo. Livre de filoxera: as videiras não precisam de enxertia. Faixa de ~1.300 km entre os Andes e o Pacífico, do Atacama ao Bío-Bío; a corrente de Humboldt e a Cordilheira da Costa moldam o clima. O País foi a uva mais plantada até ser superado pela Cabernet. Cabernet chileno: taninos macios, menta, cassis, azeitona e fumaça. Regiões oficiais (decreto de 2018): Atacama, Coquimbo, Aconcágua, Vale Central e Sul.' }
  ];

  return { code: 'CL', version: 1, countries: countries, regions: regions, country_of: 'Chile' };
})());
