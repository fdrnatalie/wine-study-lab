/**
 * ENCICLOPÉDIA DE REGIÕES — pack ALEMANHA (origem "pesquisado"). v1: as 13 Anbaugebiete.
 *
 * Pesquisa de 28/09/2026 na Wikipedia: "German wine" e os artigos de cada região (inglês), "Verband Deutscher
 * Prädikatsweingüter", "Schloss Johannisberg", "Schloss Vollrads" e produtores (inglês e alemão: Joh. Jos. Prüm,
 * Robert Weil, Dönnhoff, Emrich-Schönleber, Bürklin-Wolf, Bassermann-Jordan, von Buhl, Dr. Heger, Bernhard Huber…).
 * Contornos APROXIMADOS pelos distritos (Kreise) onde cada região fica (18_GeoGermany.js); pontos: Nominatim.
 * Produtores e rótulos só quando algum artigo os cita.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var DE = 'https://de.wikipedia.org/wiki/';
  var GW = EN + 'German_wine';

  function sub(name, classification, place, description, grapes, producers, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src };
  }
  function prod(name, labels, src) { return { name: name, labels: labels || '', src: src || '' }; }

  var regions = [
    { name: 'Mosel', geo: 'DE:Mosel', sources: [EN + 'Mosel_(wine_region)'],
      description: 'Vales do Mosel e dos afluentes Saar e Ruwer, de Koblenz até perto de Trier (antes "Mosel-Saar-Ruwer", até 2007). Terceira em produção e, para muitos, a primeira em prestígio internacional. Vinhedos íngremes sobre o rio — o Bremmer Calmont, com 65°, é o mais inclinado do mundo registrado. Riesling (~60%) leve, de álcool baixo (6–9% nos do Saar e Ruwer), acidez alta e caráter mineral de ardósia; a única região em que o estilo "padrão" ainda tem açúcar residual, embora os secos cresçam. 9.034 ha (2008), 91% brancas.',
      climate: 'Continental do norte, fresco (julho ~18 °C); o rio reflete o sol para as encostas voltadas ao sul.', soils: 'Ardósia porosa (azul devoniana, vermelha), muitas vezes sem camada de terra; também quartzito.', altitude: '',
      history: 'Os romanos plantaram vinhas perto de Trier (fundada em 16 a.C.); por volta de 370 d.C. o poeta Ausônio descreveu as encostas no poema Mosella. Em 1695 a abadia de St. Maximin (Trier) já tinha mais de 100.000 pés de Riesling; no século XVIII o príncipe-eleitor Clemente Venceslau mandou replantar tudo com Riesling. Prosperidade sob a Prússia a partir da safra de 1819.',
      grapes: ['Riesling'], grapes_other: ['Müller-Thurgau', 'Elbling', 'Kerner', 'Pinot Noir', 'Auxerrois'],
      notable_wines: 'Bernkasteler Doctor; Wehlener, Zeltinger e Brauneberger (Juffer-)Sonnenuhr; Scharzhofberger; Maximin Grünhaus; Eiswein',
      producers: [prod('Bischöfliche Weingüter Trier', '95 ha (2014)', GW)],
      subregions: [
        sub('Bernkastel (Mittelmosel)', 'Bereich', 'Bernkastel-Kues, Germany', 'Distrito central, de Zell até perto de Schweich: o coração do Mosel, com Bernkastel e Piesport. Vinhedos famosos: o Doctorberg (Bernkasteler Doctor) e as "Sonnenuhr" (relógios de sol erguidos no século XIX nos vinhedos) de Wehlen, Zeltingen e Brauneberg (Juffer-Sonnenuhr). A Wehlener Sonnenuhr tem mais de 200 donos. Os melhores Mittelmosel envelhecem 50–100 anos.',
          ['Riesling'],
          [prod('Weingut Joh. Jos. Prüm', 'Wehlen; fundado em 1911', DE + 'Weingut_Joh._Jos._Pr%C3%BCm'),
            prod('Weingut Dr. Loosen', 'Bernkastel; Riesling do ano de 1989 (Feinschmecker)', EN + 'Ernst_Loosen'),
            prod('Weingut Fritz Haag', 'Brauneberg; 19,5 ha de Riesling, parte na Brauneberger Juffer', EN + 'Weingut_Fritz_Haag')],
          'Bernkasteler Doctor; Wehlener Sonnenuhr', EN + 'Mosel_(wine_region)'),
        sub('Saar', 'Bereich', 'Wiltingen, Germany', 'Curso baixo do rio Saar: depende muito da safra (só ~4 em 10 anos são memoráveis); frescor de maçã e notas minerais de aço. O Scharzhofberg (Wiltingen, 28 ha de Riesling em ardósia, 30–60% de inclinação) é classificado pelo VDP como "Große Lage".',
          ['Riesling'], [prod('Weingut Egon Müller', 'Scharzhofberger (Scharzhof)', DE + 'Wiltinger_Scharzhofberg')], 'Scharzhofberger', EN + 'Mosel_(wine_region)'),
        sub('Ruwer (Ruwertal)', 'Bereich', 'Mertesdorf, Germany', 'Vale do Ruwer, a sudeste de Trier (Waldrach, Kasel), com muitos vinhedos monopólio. Safras frias dão vinhos muito ácidos; as quentes, alguns dos Rieslings mais delicados e perfumados da Alemanha. Em Mertesdorf, um aqueduto romano subterrâneo liga Grünhaus a Trier.',
          ['Riesling'], [prod('Weingut Maximin Grünhaus', 'Abtsberg, Herrenberg, Bruderberg; da abadia de St. Maximin até 1802', DE + 'Weingut_Maximin_Gr%C3%BCnhaus')], 'Maximin Grünhaus', EN + 'Mosel_(wine_region)'),
        sub('Burg Cochem (Terrassenmosel)', 'Bereich', 'Cochem, Germany', 'Baixo Mosel, até a foz em Koblenz: alguns dos vinhedos mais íngremes, em terraços de ardósia azul e vermelha e quartzito; mais vinhos secos que o resto da região. Vinhedo conhecido: Juffermauer (Treis-Karden).',
          ['Riesling'], [], '', EN + 'Mosel_(wine_region)'),
        sub('Obermosel', 'Bereich', 'Palzem, Germany', 'Faixa estreita na fronteira com Luxemburgo, de Igel a Palzem: Elbling, Müller-Thurgau e Auxerrois.', ['Elbling', 'Müller-Thurgau', 'Auxerrois'], [], '', EN + 'Mosel_(wine_region)'),
        sub('Moseltor', 'Bereich', 'Perl, Germany', 'O extremo sul, ~110 ha em Perl, no estado do Sarre (por isso é um distrito à parte). Elbling rústico e ácido; espumantes em alta.', ['Elbling'], [], '', EN + 'Mosel_(wine_region)')
      ] },

    { name: 'Rheingau', geo: 'DE:Rheingau', sources: [EN + 'Rheingau_(wine_region)'],
      description: 'Curva do Reno perto de Wiesbaden, onde o rio corre ~30 km para oeste: encostas voltadas ao sul sob a serra do Taunus. Só 3% da área alemã (3.125 ha em 2016), mas origem de muitas práticas do vinho alemão, como as designações Prädikat. A maior proporção de Riesling do país (77,7%), com Spätburgunder (12,2%). O Riesling do Rheingau fica entre o do Mosel e o do Pfalz.',
      climate: 'O Taunus protege do norte; o rio modera.', soils: '', altitude: '',
      history: 'Carlos Magno teria plantado as primeiras vinhas perto de Johannisberg. Os cistercienses de Clairvaux fundaram Kloster Eberbach (1135), que controlou a vinha regional. Riesling documentado desde 1435 perto do Rheingau. Em 1775, o atraso do mensageiro com a autorização da colheita em Schloss Johannisberg deu origem à Spätlese; a Auslese veio em 1787. Uma classificação de vinhedos de 1867 (ducado de Nassau) listou 13 Lagen de primeira classe.',
      grapes: ['Riesling', 'Pinot Noir'], grapes_other: ['Müller-Thurgau'],
      notable_wines: 'Riesling de Schloss Johannisberg, Steinberg, Marcobrunn, Kiedricher Gräfenberg, Rüdesheimer Berg Schlossberg; Spätburgunder de Assmannshausen (Höllenberg)',
      producers: [prod('Hessische Staatsweingüter Kloster Eberbach', 'o maior dono de vinhas da Alemanha (200 ha no total); adega junto ao Steinberg', GW)],
      subregions: [
        sub('Johannisberg', 'Gemeinde / vinhedo', 'Geisenheim, Germany', 'Schloss Johannisberg, produtor e nome de vinhedo (sem nome de vila no rótulo), se considera o vinhedo de Riesling mais antigo do mundo: em 1720–21 foram plantados quase só Riesling. 50 ha famosos por Spätlese e Eiswein. Da família Metternich por mais de 150 anos.',
          ['Riesling'], [prod('Schloss Johannisberg', 'berço da Spätlese (1775)', EN + 'Schloss_Johannisberg')], 'Schloss Johannisberg Riesling', EN + 'Rheingau_(wine_region)'),
        sub('Kiedrich', 'Gemeinde', 'Kiedrich, Germany', 'Vila do vinhedo Gräfenberg.', ['Riesling'],
          [prod('Weingut Robert Weil', 'Kiedricher Gräfenberg (VDP Große Lage), Klosterberg, Turmberg; só Riesling; da Suntory desde 1988', DE + 'Weingut_Robert_Weil')], 'Kiedricher Gräfenberg', EN + 'Rheingau_(wine_region)'),
        sub('Hattenheim e Erbach', 'Gemeinde', 'Eltville am Rhein, Germany', 'Vinhedos Mannberg e Wisselbrunnen; o Steinberg, junto a Kloster Eberbach, dispensa nome de vila; o Marcobrunn é dividido com Erbach.', ['Riesling'],
          [prod('Hessische Staatsweingüter Kloster Eberbach', 'Steinberg', EN + 'Rheingau_(wine_region)')], 'Steinberg; Marcobrunn', EN + 'Rheingau_(wine_region)'),
        sub('Winkel', 'Gemeinde', 'Oestrich-Winkel, Germany', 'Vinhedos Hasensprung e Jesuitengarten; Schloss Vollrads, produtor e vinhedo, faz vinho há mais de 800 anos.', ['Riesling'],
          [prod('Schloss Vollrads', 'mais de 800 anos de vinho', EN + 'Schloss_Vollrads')], '', EN + 'Rheingau_(wine_region)'),
        sub('Oestrich', 'Gemeinde', 'Oestrich, Oestrich-Winkel, Germany', 'Vinhedos Doosberg e Lenchen.', ['Riesling'],
          [prod('Weingut Josef Spreitzer'), prod('Weingut Peter Jakob Kühn')], '', EN + 'Rheingau_(wine_region)'),
        sub('Rüdesheim', 'Gemeinde', 'Rüdesheim am Rhein, Germany', 'Rüdesheimer Berg, sobretudo Berg Roseneck, Berg Rottland e Berg Schlossberg.', ['Riesling'],
          [prod('Weingut Georg Breuer'), prod('Weingut Josef Leitz'), prod('Weingut Carl Jung'), prod('Weingut Dr. Heinrich Nägler')], 'Rüdesheimer Berg Schlossberg', EN + 'Rheingau_(wine_region)'),
        sub('Assmannshausen', 'Gemeinde', 'Assmannshausen, Germany', 'Depois da curva, onde o Reno volta a correr para o norte: o vinhedo Höllenberg é famoso pelos tintos (Spätburgunder).', ['Pinot Noir'],
          [prod('Weingut August Kesseler')], 'Höllenberg Spätburgunder', EN + 'Rheingau_(wine_region)'),
        sub('Hochheim am Main', 'Gemeinde', 'Hochheim am Main, Germany', 'No rio Meno, antes da foz no Reno; vinhedos Domdechaney, Kirchenstück e Hochheimer Hölle.', ['Riesling'],
          [prod('Weingut Künstler'), prod('Weingut W. J. Schäfer')], '', EN + 'Rheingau_(wine_region)')
      ] },

    { name: 'Pfalz (Palatinado)', geo: 'DE:Pfalz', sources: [EN + 'Palatinate_(wine_region)'],
      description: 'Faixa de 80 km ao pé da Floresta do Palatinado (serra da Haardt, continuação dos Vosges), em torno de Bad Dürkheim, Neustadt e Landau. Segunda maior região (23.698 ha em 2022, ~6.800 viticultores). Uma das mais quentes, ensolaradas e secas, com clima parecido ao da Alsácia. 61% branco, 39% tinto. O norte (Mittelhaardt) é terra de Rieslings secos e potentes de casas históricas; o sul, de Pinot Gris, Pinot Blanc e tintos. Até 1993 chamava-se Rheinpfalz. A Deutsche Weinstraße atravessa a região; o vinho se bebe muito como Schorle, no copo "Dubbeglas".',
      climate: 'Quente, ensolarado e seco; só partes de Baden (Kaiserstuhl) são mais quentes.', soils: 'Arenito e solo vulcânico; ardósia no sul.', altitude: '',
      history: 'Os romanos trouxeram a vinha cultivada por volta do ano 1; há villae rusticae perto de Wachenheim e Ungstein. A reestruturação (Flurbereinigung) dos anos 1980 modernizou os vinhedos.',
      grapes: ['Riesling', 'Pinot Noir', 'Dornfelder', 'Pinot Gris', 'Pinot Blanc'], grapes_other: ['Müller-Thurgau', 'Kerner', 'Blauer Portugieser'],
      notable_wines: 'Rieslings secos de Forst, Deidesheim e Wachenheim; Sekt de Riesling',
      producers: [prod('Weingut Lergenmüller', 'Hainfeld; 110 ha', GW), prod('Weingut Heinz Pfaffmann', 'Walsheim; 150 ha', GW), prod('Weingut Anselmann', 'Edesheim; 115 ha', GW)],
      subregions: [
        sub('Mittelhaardt-Deutsche Weinstraße', 'Bereich', 'Deidesheim, Germany', 'Norte de Neustadt: Bad Dürkheim, Deidesheim, Forst, Wachenheim, Kallstadt, Ruppertsberg, Ungstein, Freinsheim… Terra das casas históricas de Riesling seco e potente.',
          ['Riesling'],
          [prod('Weingut Dr. Bürklin-Wolf', 'Wachenheim; sobretudo Riesling; o maior produtor privado da Alemanha', DE + 'Weingut_Dr._B%C3%BCrklin-Wolf'),
            prod('Weingut Geheimer Rat Dr. von Bassermann-Jordan', 'Deidesheim; ~50 ha de Riesling; VDP desde 1910', DE + 'Weingut_Geheimer_Rat_Dr._von_Bassermann-Jordan'),
            prod('Weingut Reichsrat von Buhl', 'Deidesheim; ~56 ha, sobretudo Riesling', DE + 'Weingut_Reichsrat_von_Buhl')],
          'Riesling seco', EN + 'Palatinate_(wine_region)'),
        sub('Südliche Weinstraße', 'Bereich', 'Siebeldingen, Germany', 'Sul de Neustadt (Birkweiler, Burrweiler, Frankweiler, Siebeldingen, Rhodt): muito Pinot Gris e Pinot Blanc, algum Riesling; solos de arenito a ardósia.',
          ['Pinot Gris', 'Pinot Blanc', 'Riesling'], [], '', EN + 'Palatinate_(wine_region)')
      ] },

    { name: 'Rheinhessen', geo: 'DE:Rheinhessen', sources: [EN + 'Rhenish_Hesse', GW],
      description: 'A maior região produtora da Alemanha, na margem esquerda do Reno, entre Mainz, Bingen e Worms (no estado da Renânia-Palatinado, apesar do nome). A "terra das mil colinas", de loess e marga. Fora do país era conhecida como terra do Liebfraumilch, mas vive uma revolução de qualidade desde os anos 1990; os melhores Rieslings são secos e potentes, como os do Pfalz. Brancos de Riesling, Silvaner, Müller-Thurgau, Kerner e Scheurebe; tintos em Ingelheim e Gundersheim.',
      climate: 'Favorável: o Hunsrück e o Taunus protegem dos ventos frios.', soils: 'Loess e marga (antiga bacia marinha de Mainz).', altitude: 'até 358 m',
      history: '', grapes: ['Riesling', 'Silvaner', 'Müller-Thurgau', 'Dornfelder'], grapes_other: ['Kerner', 'Scheurebe', 'Pinot Noir', 'Blauer Portugieser', 'Regent'],
      notable_wines: 'Riesling da Rheinterrasse (Nierstein, Oppenheim); Grosses Gewächs de Westhofen', producers: [],
      subregions: [
        sub('Rheinterrasse (Nierstein e Oppenheim)', 'Área', 'Nierstein, Germany', 'A área de brancos mais conhecida de Rheinhessen, no terraço do Reno perto de Oppenheim e Nierstein.', ['Riesling'], [], '', EN + 'Rhenish_Hesse'),
        sub('Wonnegau', 'Bereich', 'Westhofen, Germany', 'Distrito (Bereich) de Rheinhessen onde fica Westhofen.', ['Riesling'],
          [prod('Weingut Wittmann', 'Westhofen; Morstein, Aulerde, Kirchspiel (Grosses Gewächs); orgânico', EN + 'Weingut_Wittmann')], 'Morstein', EN + 'Weingut_Wittmann'),
        sub('Ingelheim', 'Área', 'Ingelheim am Rhein, Germany', 'Área de tintos (Pinot Noir, Portugieser, Dornfelder, Regent), com Gundersheim.', ['Pinot Noir', 'Blauer Portugieser', 'Dornfelder'], [], '', EN + 'Rhenish_Hesse')
      ] },

    { name: 'Nahe', geo: 'DE:Nahe', sources: [EN + 'Nahe_(wine_region)'],
      description: 'Ao longo do rio Nahe até o Reno em Bingen, 40 km a sudeste do Mosel; 4.155 ha (2008), 75% brancas, Riesling 27%. Origem vulcânica: solos muito variados (arenito, ardósia, melafiro, pórfiro num mesmo vinhedo). Só virou região em 1971 (antes vendia como "vinho do Reno"); hoje alguns produtores têm Rieslings à altura dos do Mosel e do Rheingau.',
      climate: 'Temperado; o Soonwald protege, e encostas ao sul têm microclima quase mediterrâneo.', soils: 'Muito variados, de origem vulcânica.', altitude: '100–300 m',
      history: 'Monzingen já era citada como vila vinícola em 778. No século XIX era tida entre as melhores regiões da Alemanha. A classificação prussiana de 1901 pôs a Hermannshöhle (Niederhausen) no topo.',
      grapes: ['Riesling', 'Müller-Thurgau', 'Silvaner'], grapes_other: ['Pinot Blanc', 'Pinot Gris', 'Pinot Noir', 'Dornfelder', 'Scheurebe'],
      notable_wines: 'Niederhäuser Hermannshöhle; Monzinger Halenberg e Frühlingsplätzchen', producers: [],
      subregions: [
        sub('Alto Nahe', 'Área', 'Monzingen, Germany', 'Os vinhedos mais antigos e ocidentais, de Martinstein e Monzingen até Bad Münster am Stein-Ebernburg: terraços íngremes quase só de Riesling, solos muito variados. Vinhedos: Monzinger Halenberg e Frühlingsplätzchen, Schlossböckelheimer Felsenberg e Kupfergrube, Oberhäuser Brücke, Niederhäuser Hermannshöhle, Traiser Bastei e Rotenfels.',
          ['Riesling'],
          [prod('Weingut Hermann Dönnhoff', 'Oberhausen; família no vinho desde 1750; 80% Riesling', EN + 'D%C3%B6nnhoff'),
            prod('Weingut Emrich-Schönleber', 'Monzingen; Halenberg e Frühlingsplätzchen; 85% Riesling', DE + 'Weingut_Emrich-Sch%C3%B6nleber')],
          'Hermannshöhle; Halenberg', EN + 'Nahe_(wine_region)'),
        sub('Bad Kreuznach', 'Área', 'Bad Kreuznach, Germany', 'Vinhedos ao norte da cidade, em argila e loess; tradicionalmente grandes propriedades familiares (Anheuser, Reichsgrafen von Plettenberg). Vinhedos de destaque: Kahlenberg e Krötenpfuhl.', [], [], '', EN + 'Nahe_(wine_region)'),
        sub('Baixo Nahe', 'Área', 'Dorsheim, Germany', 'De Bad Kreuznach à foz em Bingen: quartzito e ardósia; além de Riesling, Scheurebe, Silvaner e Pinot Blanc; vinhos mais próximos dos do Mittelrhein. Vilas: Dorsheim (Goldloch, Pittermännchen), Münster-Sarmsheim, Laubenheim.', ['Riesling', 'Scheurebe', 'Silvaner'], [], '', EN + 'Nahe_(wine_region)')
      ] },

    { name: 'Franken (Francônia)', geo: 'DE:Franken', sources: [EN + 'Franconia_(wine_region)'],
      description: 'Rio Meno em torno de Würzburg, a única região vinícola da Baviera; 6.128 ha (2024). Famosa pelos Silvaner secos e potentes em solo calcário — dizem que é o único lugar onde o Silvaner pode superar o Riesling — e pela garrafa achatada Bocksbeutel, protegida pela UE desde 1989. A maioria é seca ("Fränkisch trocken": até 5 g de açúcar). Müller-Thurgau ainda é a mais plantada; tintas são 17%.',
      climate: 'Continental com influência mediterrânea; invernos fortes e geadas de primavera: vinhas em encostas protegidas.', soils: 'Arenito vermelho, calcário conchífero (Muschelkalk) e gipsita.', altitude: '',
      history: 'Em 777 Carlos Magno doou uma vinícola em Hammelburg à abadia de Fulda. Na Idade Média chegou a 40.000 ha. O documento mais antigo sobre Silvaner é de Castell, 1659.',
      grapes: ['Silvaner', 'Müller-Thurgau'], grapes_other: ['Riesling', 'Bacchus', 'Pinot Noir', 'Domina', 'Dornfelder', 'Frühburgunder'],
      notable_wines: 'Würzburger Stein (Steinwein); Silvaner em Bocksbeutel', producers: [],
      subregions: [
        sub('Maindreieck', 'Bereich', 'Würzburg, Germany', '"Triângulo do Meno", o centro da região, em encostas íngremes de Muschelkalk: Silvaner e Müller-Thurgau. Vinhedo mais conhecido: o Würzburger Stein, cujos vinhos se chamam Steinwein. Vilas: Würzburg, Randersacker, Sommerhausen, Escherndorf, Nordheim, Volkach.',
          ['Silvaner', 'Müller-Thurgau', 'Riesling'],
          [prod('Juliusspital', 'Würzburg; fundação de 1576; 177 ha, um dos maiores da Alemanha', EN + 'Stiftung_Juliusspital_W%C3%BCrzburg'),
            prod('Bürgerspital zum Heiligen Geist', 'Würzburg; 110 ha', GW), prod('Staatlicher Hofkeller Würzburg', '120 ha', GW)],
          'Würzburger Stein', EN + 'Franconia_(wine_region)'),
        sub('Mainviereck', 'Bereich', 'Klingenberg am Main, Germany', '"Quadrado do Meno", o distrito ocidental, nas encostas do Spessart; um dos pontos mais quentes da Baviera. Arenito vermelho, bom para tintos: Pinot Noir e o raro Frühburgunder. Melhores vinhedos: Bürgstadter Centgrafenberg e Klingenberger Schlossberg.',
          ['Pinot Noir', 'Frühburgunder'], [], '', EN + 'Franconia_(wine_region)'),
        sub('Steigerwald', 'Bereich', 'Iphofen, Germany', 'Solo de gipsita, vinhos de forte mineralidade. Vilas: Iphofen, Rödelsee, Castell.', ['Silvaner'], [], '', EN + 'Franconia_(wine_region)')
      ] },

    { name: 'Baden', geo: 'DE:Baden', sources: [EN + 'Baden_(wine_region)'],
      description: 'A região mais ao sul, mais quente e ensolarada, de Franken ao lago de Constança (~400 km), na margem leste do Reno, diante da Alsácia. A única região alemã na zona vitícola B da UE. Terceira maior (15.906 ha em 2008). Família Pinot em ~55% das vinhas: Spätburgunder 36,8%, Grauburgunder e Weißburgunder; quase toda a Gutedel (Chasselas) da Alemanha. Cooperativas (~100) fazem 85% do vinho. Nove distritos.',
      climate: 'O mais quente do país, protegido pela Floresta Negra e pelos Vosges.', soils: '', altitude: '',
      history: 'Pinot Noir documentado em 1335 em Affenthal.',
      grapes: ['Pinot Noir', 'Pinot Gris', 'Pinot Blanc', 'Müller-Thurgau', 'Chasselas'], grapes_other: ['Riesling'],
      notable_wines: 'Spätburgunder do Kaiserstuhl; Gutedel do Markgräflerland',
      producers: [prod('Markgraf von Baden', 'Salem; 140 ha', GW)],
      subregions: [
        sub('Kaiserstuhl', 'Bereich', 'Ihringen, Germany', 'Morros de origem vulcânica a noroeste de Freiburg, com vinhedos em terraços; vinhos potentes; provavelmente o distrito mais conhecido de Baden.',
          ['Pinot Noir', 'Pinot Gris'],
          [prod('Weingut Dr. Heger', 'Ihringen; Winklerberg e Achkarrer Schlossberg (solos vulcânicos)', DE + 'Weingut_Dr._Heger'),
            prod('Weingut Friedrich Kiefer', 'Eichstetten; 110 ha', GW)], '', EN + 'Baden_(wine_region)'),
        sub('Breisgau', 'Bereich', 'Malterdingen, Germany', 'De Offenburg a Freiburg; segundo as estatísticas, a maior temperatura média e mais horas de sol da região.',
          ['Pinot Noir'], [prod('Weingut Bernhard Huber', 'Malterdingen; 26 ha, sobretudo Spätburgunder', DE + 'Weingut_Bernhard_Huber')], '', EN + 'Baden_(wine_region)'),
        sub('Ortenau', 'Bereich', 'Durbach, Germany', 'De Baden-Baden até o sul de Offenburg; um dos distritos mais conhecidos.', [], [], '', EN + 'Baden_(wine_region)'),
        sub('Markgräflerland', 'Bereich', 'Müllheim, Germany', 'De Freiburg à fronteira suíça em Basileia: Gutedel (Chasselas) fácil de beber.', ['Chasselas'], [], '', EN + 'Baden_(wine_region)'),
        sub('Tuniberg', 'Bereich', 'Merdingen, Germany', 'Terreno mais plano ao sul do Kaiserstuhl e a oeste de Freiburg; vinhos mais leves.', [], [], '', EN + 'Baden_(wine_region)'),
        sub('Bodensee', 'Bereich', 'Meersburg, Germany', 'Margem noroeste do lago de Constança.', [],
          [prod('Staatsweingut Meersburg', '63 ha; vinha documentada desde 1324', DE + 'Staatsweingut_Meersburg')], '', EN + 'Baden_(wine_region)'),
        sub('Badische Bergstraße', 'Bereich', 'Heidelberg, Germany', 'Em torno de Heidelberg, continuação da Hessische Bergstraße.', [], [], '', EN + 'Baden_(wine_region)'),
        sub('Kraichgau', 'Bereich', 'Bruchsal, Germany', 'Ao sul da Badische Bergstraße, a nordeste de Karlsruhe.', [], [], '', EN + 'Baden_(wine_region)'),
        sub('Tauberfranken', 'Bereich', 'Tauberbischofsheim, Germany', 'Nordeste da região, vizinho da Francônia: vinhos parecidos com os francônios, vendidos na Bocksbeutel.', [], [], '', EN + 'Baden_(wine_region)')
      ] },

    { name: 'Württemberg', geo: 'DE:Württemberg', sources: [EN + 'W%C3%BCrttemberg_(wine_region)'],
      description: 'Rio Neckar e afluentes (Rems, Enz, Kocher, Jagst), entre Stuttgart e Heilbronn, além de vinhas no lago de Constança. Quarta maior (11.511 ha em 2008) e região tradicional de tintos: 71% de uvas tintas. A uva-símbolo é a Trollinger (21%; 98% da Trollinger alemã), de tintos leves; também Schwarzriesling (Pinot Meunier), Lemberger (Blaufränkisch) e Spätburgunder. Cooperativas (~70) fazem quase 75% do vinho.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: ['Schiava', 'Pinot Meunier', 'Blaufränkisch', 'Pinot Noir', 'Riesling'], grapes_other: [],
      notable_wines: 'Trollinger; Lemberger', producers: [],
      subregions: [
        sub('Vale do Neckar (Heilbronn)', 'Área', 'Heilbronn, Germany', 'O núcleo da região, ao longo do Neckar, entre Stuttgart e Heilbronn, com encostas voltadas ao sul.', ['Schiava', 'Blaufränkisch'], [], '', EN + 'W%C3%BCrttemberg_(wine_region)'),
        sub('Stuttgart e Remstal', 'Área', 'Stuttgart, Germany', 'Vinhedos em torno de Stuttgart e no vale do Rems, afluente do Neckar.', ['Schiava'], [], '', EN + 'W%C3%BCrttemberg_(wine_region)')
      ] },

    { name: 'Ahr', geo: 'DE:Ahr', sources: [EN + 'Ahr_(wine_region)'],
      description: 'Vale do rio Ahr, afluente do Reno, entre 50° e 51° N: a região mais setentrional do mundo dominada por tintos (86% das vinhas, a maior proporção da Alemanha), sobretudo Spätburgunder. Pequena (558 ha em 2008), em terraços por 25 km de Altenahr ao Reno. Até os anos 1980 os tintos eram claros e adocicados; Werner Näkel (Meyer-Näkel) passou a macerar mais e usar carvalho, estilo seguido por muitos. Tintos top caros, vendidos como Grosses Gewächs. As enchentes de 2021 destruíram ~10% dos vinhedos.',
      climate: 'Microclima quente, "mediterrâneo", protegido pelo Eifel.', soils: 'Ardósia, basalto e grauvaca.', altitude: '',
      history: 'O Prümer Urbar (893) lista vinhedos em oito lugares do Ahr.',
      grapes: ['Pinot Noir'], grapes_other: [], notable_wines: 'Spätburgunder seco com carvalho', producers: [],
      subregions: [
        sub('Walporzheim-Ahrtal', 'Bereich', 'Dernau, Germany', 'Único distrito do Ahr, com uma Großlage (Klosterberg) e 43 vinhedos.', ['Pinot Noir'],
          [prod('Weingut Meyer-Näkel', 'Dernau; pioneiro dos tintos secos em barrica (prêmios desde 1989)', DE + 'Werner_N%C3%A4kel')], 'Spätburgunder', EN + 'Ahr_(wine_region)')
      ] },

    { name: 'Mittelrhein', geo: 'DE:Mittelrhein', sources: [EN + 'Mittelrhein_(wine_region)'],
      description: '120 km do Reno médio, da foz do Nahe a Koblenz (margem esquerda) e do fim do Rheingau até o Siebengebirge perto de Bonn (direita); parte do Vale do Reno, Patrimônio da UNESCO desde 2002. 448 ha (2013), 85% brancas, Riesling ~64–68%. Vinhedos íngremes e trabalhosos: a área caiu de ~2.200 ha (1900) e 36% entre 1989 e 2009; vinhos pouco vistos fora da região.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: ['Riesling'], grapes_other: ['Pinot Noir', 'Pinot Blanc', 'Müller-Thurgau'], notable_wines: 'Riesling de Bacharach e Boppard', producers: [],
      subregions: [
        sub('Loreley', 'Bereich', 'Bacharach, Germany', 'O grosso da região, na Renânia-Palatinado: Oberheimbach, Bacharach, Kaub, Oberwesel, St. Goarshausen, St. Goar, Boppard, Koblenz; também vinhas no rio Lahn.', ['Riesling'], [], '', EN + 'Mittelrhein_(wine_region)'),
        sub('Siebengebirge', 'Bereich', 'Königswinter, Germany', 'Quatro vilas no norte, já na Renânia do Norte-Vestfália (Petersberg, em Königswinter).', ['Riesling'], [], '', EN + 'Mittelrhein_(wine_region)')
      ] },

    { name: 'Hessische Bergstraße', geo: 'DE:Hessische Bergstraße', sources: [EN + 'Hessische_Bergstra%C3%9Fe'],
      description: 'Encostas norte e oeste do Odenwald, em Hesse: a menor região (467 ha). Riesling 40%, Pinot Gris e Spätburgunder; sobretudo secos e uma produção notável de Eiswein. A maior parte do vinho é de uma cooperativa em Heppenheim (~620 dos 850 viticultores). Região independente só desde 1971 (antes unida à Badische Bergstraße).',
      climate: '', soils: '', altitude: '',
      history: 'Viticultura citada no Códice de Lorsch (século VIII). Os condes de Katzenelnbogen, donos da área, registraram Riesling em 1435.',
      grapes: ['Riesling', 'Pinot Gris', 'Pinot Noir'], grapes_other: [], notable_wines: 'Eiswein',
      producers: [prod('Hessische Staatsweingüter', '38 ha na região, vinificados em Kloster Eberbach', EN + 'Hessische_Bergstra%C3%9Fe')],
      subregions: [
        sub('Starkenburg', 'Bereich', 'Heppenheim, Germany', 'Distrito da Hessische Bergstraße, com Heppenheim.', ['Riesling'], [], '', EN + 'Hessische_Bergstra%C3%9Fe'),
        sub('Umstadt', 'Bereich', 'Groß-Umstadt, Germany', 'Distrito da Hessische Bergstraße.', [], [], '', EN + 'Hessische_Bergstra%C3%9Fe')
      ] },

    { name: 'Saale-Unstrut', geo: 'DE:Saale-Unstrut', sources: [EN + 'Saale-Unstrut'],
      description: 'Encostas dos rios Saale e Unstrut, sobretudo na Saxônia-Anhalt (~20 ha na Turíngia): a região mais setentrional da Alemanha e uma das mais ao norte da Europa (685 ha em 2008). Spätlese e Auslese só em anos muito quentes; rendimentos baixos. Brancos secos (74%) de acidez refrescante: Müller-Thurgau, Pinot Blanc, Silvaner. Uma das duas regiões da antiga Alemanha Oriental.',
      climate: 'Frio.', soils: '', altitude: '',
      history: 'Vinhos da abadia de Memleben citados já em 998.',
      grapes: ['Müller-Thurgau', 'Pinot Blanc', 'Silvaner'], grapes_other: [], notable_wines: '', producers: [],
      subregions: [
        sub('Unstrut (Burgenlandkreis)', 'Área', 'Freyburg (Unstrut), Germany', 'O distrito de Burgenlandkreis concentra a região e tem uma rota do vinho desde 1993.', [], [], '', EN + 'Saale-Unstrut')
      ] },

    { name: 'Sachsen (Saxônia)', geo: 'DE:Sachsen', sources: [EN + 'Saxony_(wine_region)'],
      description: 'Vale do Elba, de Pillnitz (Dresden) a Diesbar-Seußlitz, ao norte de Meissen: 462 ha, terceira menor região. Com Saale-Unstrut, uma das mais setentrionais da Europa. Após a reunificação a área foi de 200 para 450 ha. ~90% seco: Müller-Thurgau, Riesling e Pinot Blanc.',
      climate: 'Continental, moderado pelo Elba.', soils: 'Granito e gnaisse, parecidos com os da Wachau.', altitude: '',
      history: 'Viticultura documentada em Meissen desde 1161.',
      grapes: ['Müller-Thurgau', 'Riesling', 'Pinot Blanc'], grapes_other: [], notable_wines: '', producers: [],
      subregions: [
        sub('Meissen', 'Área', 'Meißen, Germany', 'Em Proschwitz, os vinhedos pertenceram aos bispos de Meissen do século XII até a Reforma.', [],
          [prod('Schloss Proschwitz', 'a mais antiga vinícola privada ainda ativa da Saxônia', DE + 'Schloss_Proschwitz')], '', EN + 'Saxony_(wine_region)'),
        sub('Dresden-Pillnitz', 'Área', 'Pillnitz, Dresden, Germany', 'Início da região no leste, em Dresden.', [], [], '', EN + 'Saxony_(wine_region)')
      ] }
  ];

  var countries = [
    { name: 'Alemanha', sources: [GW],
      description: 'Oeste do país, ao longo do Reno e seus afluentes; ~104.000 ha e ~10 milhões de hl por ano (nona produtora). 60% vem da Renânia-Palatinado. Dois terços é branco; o Riesling é a uva mais plantada desde meados dos anos 1990 e a base da fama alemã, do seco ao muito doce; entre os tintos (~35%) lidera o Spätburgunder (Pinot Noir). Acidez alta é a marca. Classificação por maturação da uva (não pelo dulçor do vinho): Qualitätswein e Prädikatswein (Kabinett, Spätlese, Auslese, Beerenauslese, Trockenbeerenauslese, Eiswein); trocken/halbtrocken/feinherb indicam o açúcar. 13 regiões (Anbaugebiete), 39 distritos (Bereiche), 167 Großlagen e 2.658 vinhedos. O VDP (1910) tem classificação própria de vinhedos (Große Lage, Erste Lage, Grosses Gewächs).' }
  ];

  return { code: 'DE', version: 1, countries: countries, regions: regions, country_of: 'Alemanha' };
})());
