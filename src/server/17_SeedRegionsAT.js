/**
 * ENCICLOPÉDIA DE REGIÕES — pack ÁUSTRIA (origem "pesquisado"). v1: 4 estados vinícolas, 17 Weinbaugebiete + Ruster Ausbruch.
 *
 * Pesquisa de 28/09/2026 na Wikipedia: "Austrian wine" (inglês), "Weinbau in Österreich" (alemão, com área, solo e clima
 * de cada Weinbaugebiet), "Wachau wine", "Vinea Wachau Nobilis Districtus", "Ausbruch", "Heiligenstein (Kamptal)" e
 * produtores (Domäne Wachau, Emmerich Knoll).
 * Contornos EXATOS dos estados (18_GeoAustria.js): as regiões vinícolas austríacas são os próprios estados.
 * Pontos: OpenStreetMap Nominatim. Produtores e rótulos só quando algum artigo os cita.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var DE = 'https://de.wikipedia.org/wiki/';
  var WB = DE + 'Weinbau_in_%C3%96sterreich';

  function sub(name, classification, place, description, grapes, producers, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src };
  }
  function prod(name, labels, src) { return { name: name, labels: labels || '', src: src || '' }; }

  var regions = [
    { name: 'Baixa Áustria (Niederösterreich)', geo: 'AT:Niederösterreich', sources: [WB, EN + 'Austrian_wine'],
      description: 'O maior estado vinícola: 26.732 ha, oito das 17 áreas vinícolas, ao longo do Danúbio e no nordeste. Terra da Grüner Veltliner e dos grandes Rieslings secos em terraços (Wachau, Kremstal, Kamptal). O Weinviertel, sozinho, é a maior área vinícola do país. Com Burgenland e Viena forma a macrorregião "Weinland".',
      climate: 'Encontro do clima panônico (quente, do leste) com o atlântico (oeste) e o ar frio do norte, que desce pelos vales laterais.',
      soils: 'Rocha primária nas encostas íngremes; loess nas partes baixas e no Weinviertel.', altitude: 'até ~450 m na Wachau',
      history: 'As sementes de uva mais antigas do país (3000 a.C., videira silvestre) foram achadas em Krems. No século V, a Vida de São Severino cita vinhas em Mautern. Os mosteiros (Göttweig, Klosterneuburg, Melk…) organizaram a vinha entre os séculos XI e XIII. A escola de viticultura de Klosterneuburg (1860), uma das primeiras do mundo, criou a Zweigelt no início do século XX.',
      grapes: ['Grüner Veltliner', 'Riesling', 'Zweigelt'], grapes_other: ['Welschriesling', 'Pinot Blanc', 'Roter Veltliner', 'Zierfandler', 'Rotgipfler', 'St. Laurent', 'Blauer Portugieser', 'Pinot Noir'],
      notable_wines: 'Grüner Veltliner e Riesling da Wachau (Steinfeder, Federspiel, Smaragd), do Kremstal e do Kamptal; Weinviertel DAC; Spätrot-Rotgipfler da Thermenregion',
      producers: [],
      subregions: [
        sub('Wachau', 'DAC (2020)', 'Weißenkirchen in der Wachau, Austria', 'Encostas ensolaradas do Danúbio a oeste de Krems (15 km dos 33 entre Melk e Krems) e vales laterais ("Wachauer Gräben"); vinhas até ~450 m em terraços de pedra seca. Rocha primária erodida nas encostas, loess embaixo. 1.285 ha, ~3% do vinho austríaco. Classificação própria da associação Vinea Wachau (1983), só para brancos secos 100% da Wachau: Steinfeder (até 11,5%), Federspiel (11,5–12,5%) e Smaragd (mín. 12,5%). Rieden famosas: Kellerberg (Dürnstein), Loibenberg e Schütt (Loiben), Singerriedel e Tausendeimerberg (Spitz), Achleiten e Klaus (Weißenkirchen). Paisagem Patrimônio da UNESCO.',
          ['Grüner Veltliner', 'Riesling'],
          [prod('Domäne Wachau', 'cooperativa de ~200 viticultores em Dürnstein; Rieden Kellerberg, Achleiten, Loibenberg, Singerriedel…', DE + 'Dom%C3%A4ne_Wachau'),
            prod('Weingut Emmerich Knoll', 'Unterloiben; Loibenberg, Schütt, Kellerberg, Pfaffenberg, Kreutles', DE + 'Weingut_Emmerich_Knoll'),
            prod('Weingut Josef Jamek', '', DE + 'Vinea_Wachau_Nobilis_Districtus')],
          'Smaragd; Federspiel; Steinfeder', WB),
        sub('Kremstal', 'DAC (2007)', 'Krems an der Donau, Austria', 'Vale do rio Krems, logo abaixo da Wachau, em torno da cidade de Krems; 2.242 ha. Rocha primária a oeste, loess e argila a leste e ao sul. Ar frio do planalto do Waldviertel dá grande amplitude térmica. Parecido com a Wachau, um pouco mais quente e com mais tintos. As vinhas nomeadas mais antigas do país: Kremser Sandgrube (1208) e Steiner Pfaffenberg (1230).',
          ['Grüner Veltliner', 'Riesling'], [], '', WB),
        sub('Kamptal', 'DAC (2008)', 'Langenlois, Austria', 'Vale do rio Kamp, ao norte de Krems, em torno de Langenlois (também Schönberg, Stiefern, Zöbing); 3.567 ha. Loess e argila, com rocha primária. O Riesling brilha nas encostas íngremes; o Heiligenstein (Zöbing) é o vinhedo mais importante da área e um dos melhores de Riesling da Europa.',
          ['Riesling', 'Grüner Veltliner'],
          [prod('Weingut Bründlmayer', 'vinhas no Heiligenstein', DE + 'Heiligenstein_(Kamptal)'), prod('Schloss Gobelsburg', 'vinhas no Heiligenstein', DE + 'Heiligenstein_(Kamptal)')],
          'Riesling do Heiligenstein', WB),
        sub('Traisental', 'DAC (2006)', 'Herzogenburg, Austria', 'Ao longo do rio Traisen, de St. Pölten ao Danúbio, em torno de Herzogenburg; área vinícola só desde 1995; 861 ha. Loess arenoso e conglomerados. Sobretudo Grüner Veltliner fresco, para beber jovem; a DAC vale para Grüner Veltliner e Riesling.',
          ['Grüner Veltliner', 'Riesling'], [], '', WB),
        sub('Wagram', 'DAC (2021)', 'Kirchberg am Wagram, Austria', 'A leste de Krems, até Klosterneuburg; 2.411 ha em loess e cascalho fluvial. No planalto do Wagram, Grüner Veltliner mais encorpado e a especialidade local Roter Veltliner. A abadia de Klosterneuburg, a maior propriedade vinícola privada do país, moldou o vinho austríaco por 900 anos.',
          ['Grüner Veltliner', 'Roter Veltliner', 'Zweigelt'], [prod('Stift Klosterneuburg', 'a maior propriedade vinícola privada da Áustria', EN + 'Austrian_wine')], '', WB),
        sub('Weinviertel', 'DAC (2002)', 'Poysdorf, Austria', '"Quarteirão do vinho": nordeste da Baixa Áustria, entre o Danúbio e as fronteiras tcheca e eslovaca. A maior área vinícola do país (13.730 ha) e metade da Grüner Veltliner austríaca; tema da primeira DAC (safra 2002). Loess arenoso; clima quente e seco. Espumantes de Riesling e Veltliner perto de Poysdorf.',
          ['Grüner Veltliner', 'Welschriesling', 'Zweigelt', 'Blauer Portugieser'], [], 'Weinviertel DAC', WB),
        sub('Carnuntum', 'DAC (2019)', 'Göttlesbrunn, Austria', 'A sudeste de Viena, coincide com o distrito de Bruck an der Leitha; 812 ha. Solos de argila, areia e cascalho; clima ameno pela influência do lago Neusiedl e do Danúbio. Tintos equilibrados de Zweigelt e Blaufränkisch. O nome vem do acampamento romano de Carnuntum.',
          ['Zweigelt', 'Blaufränkisch'], [], '', WB),
        sub('Thermenregion', 'DAC (2023)', 'Gumpoldskirchen, Austria', 'Região termal ao sul de Viena, de Gumpoldskirchen a Weikersdorf; fusão de Gumpoldskirchen e Bad Vöslau (1985); 1.821 ha em solos calcários pedregosos cortados por uma falha vulcânica. Clima comparado ao da Borgonha. Destaques: as brancas locais Zierfandler (Spätrot) e Rotgipfler, antes cortadas juntas como Spätrot-Rotgipfler, e a tinta St. Laurent.',
          ['Zierfandler', 'Rotgipfler', 'St. Laurent'], [], 'Spätrot-Rotgipfler', WB)
      ] },

    { name: 'Burgenland', geo: 'AT:Burgenland', sources: [WB, EN + 'Austrian_wine'],
      description: 'Leste do país, na fronteira com a Hungria: 11.538 ha. Em torno do lago Neusiedl (raso), um dos poucos lugares do mundo onde a podridão nobre ataca todo ano: doces botritizados e o Ruster Ausbruch. Mais ao sul, o reino da Blaufränkisch (Mittelburgenland, Eisenberg).',
      climate: 'Panônico.', soils: 'Areia e cascalho a leste do lago; calcário conchífero e xisto no Leithagebirge; argila pesada no centro; argila rica em ferro em Eisenberg.', altitude: '',
      history: 'Sementes de uva de ~700 a.C. foram achadas num túmulo em Zagersdorf. O escândalo do vinho com glicol (1985) levou à lei do vinho mais rígida da Europa.',
      grapes: ['Blaufränkisch', 'Zweigelt', 'Welschriesling'], grapes_other: ['Chardonnay', 'Pinot Blanc', 'Muscat Ottonel', 'Bouvier', 'Traminer', 'Furmint', 'St. Laurent'],
      notable_wines: 'Ruster Ausbruch; Beerenauslese e Trockenbeerenauslese do Neusiedlersee; Blaufränkisch do Mittelburgenland e de Eisenberg; Uhudler',
      producers: [],
      subregions: [
        sub('Neusiedlersee', 'DAC (2011)', 'Podersdorf am See, Austria', 'Norte e leste do lago Neusiedl; 5.959 ha em areia e cascalho. Zweigelt fresco e frutado e doces raros; a podridão nobre anual torna os botritizados mais fáceis (e baratos) que em outros lugares. DAC Klassik, Reserve e, desde 2020, doce.',
          ['Zweigelt', 'Welschriesling'], [], 'Beerenauslese e Trockenbeerenauslese', WB),
        sub('Leithaberg', 'DAC (2008/2009)', 'Purbach am Neusiedler See, Austria', 'Ao longo do Leithagebirge, a oeste do lago; 2.955 ha em calcário conchífero, xisto, loess e areia. Variedade de terrenos, uvas e estilos. Inclui a cidade de Rust.',
          ['Blaufränkisch', 'Pinot Blanc', 'Chardonnay'], [], '', WB),
        sub('Ruster Ausbruch', 'DAC (2020)', 'Rust, Burgenland, Austria', 'Doce de uvas com podridão nobre da cidade livre de Rust, na margem oeste do lago; Trockenbeerenauslese com mínimo de 30 °KMW. A categoria Ausbruch (entre Beerenauslese e TBA) só existe na Áustria e na Hungria, semelhante ao Aszú de Tokaj. Historicamente com Furmint; hoje sobretudo Chardonnay, Pinot Blanc, Traminer e Welschriesling.',
          ['Welschriesling', 'Chardonnay', 'Pinot Blanc', 'Traminer', 'Furmint'], [], 'Ruster Ausbruch', EN + 'Ausbruch'),
        sub('Rosalia', 'DAC (2017)', 'Mattersburg, Austria', 'Distrito político de Mattersburg; 228 ha em terra parda e loess.', [], [], '', WB),
        sub('Mittelburgenland', 'DAC (2005)', 'Neckenmarkt, Austria', '"Blaufränkischland": colinas em torno de Oberpullendorf; 2.026 ha de argila pesada, com xisto e calcário em Neckenmarkt e calcário em Ritzing. A DAC tinta é de Blaufränkisch; as uvas bordalesas também vão bem.',
          ['Blaufränkisch'], [], 'Blaufränkisch', WB),
        sub('Eisenberg', 'DAC (2009)', 'Deutsch Schützen-Eisenberg, Austria', 'Sul do Burgenland, de Pinkafeld a Jennersdorf; 525 ha. O solo vermelho, rico em ferro, dá um toque especiado à Blaufränkisch. Especialidade: o Uhudler, de híbridos com espécies americanas (Isabella, Concord, Delaware, Noah…), proibido por um tempo após 1985.',
          ['Blaufränkisch'], [], 'Blaufränkisch; Uhudler', WB)
      ] },

    { name: 'Viena (Wien)', geo: 'AT:Wien', sources: [WB, EN + 'Austrian_wine'],
      description: 'Vinhas dentro dos limites da cidade (588 ha), sobretudo no norte e no oeste: a única capital do mundo com produção de vinho relevante; a própria cidade mantém uma vinícola. Especialidade: o Wiener Gemischter Satz, várias uvas plantadas juntas no mesmo vinhedo e vinificadas juntas. A maior parte se bebe jovem nos Heurigen, as tavernas de vinho novo.',
      climate: 'Panônico.', soils: 'Xisto, cascalho e loess; calcário rumo a Klosterneuburg.', altitude: '',
      history: 'Em 1155 o Babenberg Henrique II Jasomirgott fez de Viena sua residência e a vinha cresceu; um mapa de 1547 ainda mostra vinhas perto da Minoritenkirche. O decreto de José II (1784) confirmou o direito dos Heurigen de vender o vinho próprio.',
      grapes: ['Riesling', 'Chardonnay', 'Pinot Blanc'], grapes_other: [],
      notable_wines: 'Wiener Gemischter Satz DAC', producers: [],
      subregions: [
        sub('Wiener Gemischter Satz', 'DAC (2013)', 'Nußdorf, Wien, Austria', 'DAC de toda a área de Viena: brancos de várias uvas que crescem juntas no vinhedo e são processadas juntas logo após a colheita (não um corte de vinhos prontos). Vinhas históricas no Nussberg e no Bisamberg.',
          [], [], 'Wiener Gemischter Satz', WB)
      ] },

    { name: 'Estíria (Steiermark)', geo: 'AT:Steiermark', sources: [WB, EN + 'Austrian_wine'],
      description: '"Steirerland": ~5.110 ha (12% do país), em encostas íngremes até 700 m. Terra de brancos (~4.200 ha): Sauvignon Blanc, Welschriesling e Pinot Blanc; entre os tintos, Blauer Wildbacher (do rosé Schilcher) e Zweigelt. O Steirischer Junker é um vinho novo seco protegido, lançado no ano da colheita.',
      climate: 'Levemente continental, verões quentes e invernos moderados; ~1.000 mm de chuva por ano.', soils: '"Opok" (xisto, areia, marga, calcário) no sul e oeste; solos vulcânicos no leste.', altitude: 'até 700 m',
      history: 'Uma emenda de 2002 à lei do vinho adotou "Steirerland" como nome vinícola da Estíria.',
      grapes: ['Sauvignon Blanc', 'Welschriesling', 'Pinot Blanc', 'Blauer Wildbacher'], grapes_other: ['Chardonnay', 'Pinot Gris', 'Muscat Blanc à Petits Grains', 'Traminer', 'Riesling', 'Zweigelt'],
      notable_wines: 'Sauvignon Blanc da Südsteiermark; Schilcher (Weststeiermark); Steirischer Junker', producers: [],
      subregions: [
        sub('Südsteiermark', 'DAC (2018)', 'Leibnitz, Austria', 'Fronteira com a Eslovênia (Sausal, Leibnitz); 2.798 ha, sobretudo Sauvignon Blanc, além de Welschriesling, Chardonnay (localmente Morillon), Muskateller e Traminer. Solos de "opok"; dias quentes e noites frescas dão brancos vivos e aromáticos. Clima quente e úmido e encostas íngremes tornam o trabalho dos mais duros do país.',
          ['Sauvignon Blanc', 'Welschriesling', 'Chardonnay', 'Muscat Blanc à Petits Grains'], [], 'Sauvignon Blanc', WB),
        sub('Vulkanland Steiermark', 'DAC (2018)', 'Klöch, Austria', 'Antiga Süd-Oststeiermark (até 2015): colinas do leste da Estíria, entre Hartberg, Fürstenfeld, St. Anna am Aigen e Klöch; 1.657 ha nas encostas de vulcões extintos, até 650 m. Solos vulcânicos dão um toque especiado; noites frescas alongam a maturação. Clima de transição entre o panônico seco e o mediterrâneo úmido.',
          ['Welschriesling', 'Chardonnay', 'Pinot Blanc', 'Pinot Gris', 'Traminer', 'Sauvignon Blanc'], [], '', WB),
        sub('Weststeiermark', 'DAC (2018)', 'Deutschlandsberg, Austria', 'Colinas entre Deutschlandsberg e Ligist, a sudoeste de Graz; 655 ha em gnaisse, xisto e "opok"; clima ilírico. Casa do Schilcher, rosé protegido por lei e feito só de Blauer Wildbacher, uva provavelmente nativa.',
          ['Blauer Wildbacher'], [], 'Schilcher', WB)
      ] }
  ];

  var countries = [
    { name: 'Áustria', sources: [WB, EN + 'Austrian_wine'],
      description: '44.210 ha de vinhas (70% brancas, 30% tintas), quase todas no leste; ~2,5 milhões de hl por ano, a maior parte bebida no país. A Grüner Veltliner domina os brancos, em geral secos; tintos de Blaufränkisch, Zweigelt e Blauburger (criadas em Klosterneuburg, quase metade dos tintos) e St. Laurent. Após o escândalo do glicol (1985) o país adotou a lei do vinho mais rígida da Europa e passou do sistema germânico (maturação em °KMW: Kabinett, Spätlese… Ausbruch, TBA) para denominações regionais, as DAC (18, desde o Weinviertel DAC de 2002). Três macrorregiões: Weinland (Baixa Áustria, Burgenland, Viena), Steirerland e Bergland.' }
  ];

  return { code: 'AT', version: 1, countries: countries, regions: regions, country_of: 'Áustria' };
})());
