/**
 * ENCICLOPÉDIA DE REGIÕES — pack ITÁLIA (origem "pesquisado"). v1: 20 regiões.
 * Cada país é um pack em REGION_PACKS, com versão própria (ver 33_Regions.js → SeedRegions).
 *
 * Pesquisa de 26/09/2026:
 *  - Wikipedia em inglês: artigos das regiões ("Piedmont wine", "Tuscan wine"…), de "Italian wine"
 *    (tabela de áreas) e das denominações (Barolo, Brunello di Montalcino, Soave, Etna DOC…).
 *  - Wikipedia em italiano: "Viticoltura in <Regione>" (zonas, listas de DOCG/DOC).
 *  - Contornos: openpolis/geojson-italy (ISTAT, CC BY 4.0) → 18_GeoItaly.js.
 *  - Pontos das sub-regiões: OpenStreetMap Nominatim (ODbL) → 19_GeoPlaces.js.
 *
 * Regras: só entra o que a fonte afirma. Produtores e rótulos aparecem apenas quando uma
 * fonte os cita — por isso muitas sub-regiões ainda não têm produtores cadastrados.
 * Uvas citadas que não estão na enciclopédia de uvas são criadas só com o nome.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';
  var IT = 'https://it.wikipedia.org/wiki/';

  function sub(name, classification, place, description, grapes, producers, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src };
  }
  function prod(name, labels, src) { return { name: name, labels: labels || '', src: src || '' }; }

  var regions = [
    { name: 'Piemonte', geo: 'Piemonte', sources: [EN + 'Piedmont_wine', IT + 'Viticoltura_in_Piemonte'],
      description: 'Noroeste da Itália, no sopé dos Alpes, fazendo fronteira com França e Suíça. Só cerca de 30% da região é apta à vinha. A neblina de outono ajuda a maturação do Nebbiolo (o nome vem de "nebbia", névoa). Cerca de 60% das uvas são tintas. Tem 19 DOCG — entre elas Barolo e Barbaresco — e mais de 40 DOC; não há IGT.',
      climate: 'Invernos continentais mais frios que os de Bordeaux e muito menos chuva, pela sombra dos Alpes; neblina frequente.',
      soils: 'Marga calcária, argila, arenito e areia.', altitude: 'Vinhas entre 150 e 400 m; encostas voltadas ao sul para Nebbiolo e Barbera, locais mais frescos para Dolcetto e Moscato.',
      history: 'Viticultura desde a Idade do Bronze (c. 1500 a.C.); no século XIX, Cavour e Garibaldi trouxeram técnicas francesas.',
      grapes: ['Nebbiolo', 'Barbera', 'Dolcetto', 'Moscato Bianco', 'Cortese', 'Arneis'],
      grapes_other: ['Grignolino', 'Freisa', 'Ruché', 'Erbaluce', 'Timorasso', 'Pelaverga', 'Brachetto', 'Vespolina', 'Chardonnay', 'Favorita'],
      notable_wines: 'Barolo, Barbaresco, Asti Spumante e Moscato d\'Asti, Barbera d\'Asti e d\'Alba, Gavi, Roero Arneis, Dogliani, Gattinara, Ghemme, Erbaluce di Caluso, Brachetto d\'Acqui, Ruché di Castagnole Monferrato, Alta Langa',
      subregions: [
        sub('Barolo', 'DOCG', 'Barolo, Cuneo, Italia',
          'Colinas a sudoeste de Alba (província de Cuneo): Barolo, Castiglione Falletto, Serralunga d\'Alba, La Morra, Monforte d\'Alba e partes de outras comunas. Dois solos separados pela estrada Alba–Barolo: arenitos helvécios (Serralunga, Monforte) e marga calcária tortoniana (Barolo, La Morra). 100% Nebbiolo; mínimo 36 meses (18 em madeira); Riserva 5 anos. Cor clara, "alcatrão e rosas", taninos marcantes. Em 2010 foram delimitadas 181 MGA.',
          ['Nebbiolo'],
          [prod('Marchesi di Barolo', 'primeiro a rotular o vinho como Barolo'), prod('Ceretto', 'estilo moderno'), prod('Paolo Cordero di Montezemolo', 'estilo moderno'),
            prod('Elio Altare', 'estilo moderno'), prod('Renato Ratti', 'estilo moderno'), prod('Fontanafredda', '', EN + 'Piedmont_wine')],
          'Crus: Cannubi, Brunate, Monprivato, Villero, Ginestra, Bussia, Vigna Rionda', EN + 'Barolo'),
        sub('Barbaresco', 'DOCG', 'Barbaresco, Cuneo, Italia',
          'Comunas de Barbaresco, Treiso e Neive (e parte de Alba). Solo de marga calcária tortoniana. 100% Nebbiolo; 2 anos (9 meses em madeira); Riserva 4 anos. Taninos mais macios que os do Barolo, fica pronto antes.',
          ['Nebbiolo'],
          [prod('Gaja'), prod('Bruno Giacosa'), prod('Produttori del Barbaresco', 'cooperativa que revitalizou a zona no fim dos anos 1950')],
          'Crus: Asili, Martinenga, Rabajà (Barbaresco); Santo Stefano, Albesani (Neive); Pajorè (Treiso)', EN + 'Barbaresco'),
        sub('Langhe', 'Zona', 'Langhe, Piemonte, Italia',
          'Colinas em torno de Alba: Barolo, Barbaresco, Dolcetto d\'Alba, Dogliani, Barbera d\'Alba, Verduno Pelaverga, Langhe Arneis.',
          ['Nebbiolo', 'Dolcetto', 'Barbera', 'Arneis', 'Pelaverga'], [], 'Dogliani DOCG, Dolcetto di Diano d\'Alba DOCG, Barbera d\'Alba, Langhe DOC', IT + 'Viticoltura_in_Piemonte'),
        sub('Roero', 'DOCG', 'Roero, Cuneo, Italia',
          'Nordeste da província de Cuneo, vizinho às Langhe. Roero (tinto de Nebbiolo) e Roero Arneis (branco), também espumante.',
          ['Arneis', 'Nebbiolo'], [], 'Roero, Roero Arneis', EN + 'Roero'),
        sub('Monferrato e Asti', 'Zona', 'Nizza Monferrato, Asti, Italia',
          'Províncias de Asti e Alessandria; clima continental seco, verões quentes e invernos frios. Tintos e espumantes: Barbera d\'Asti, Nizza, Grignolino, Ruché, e o Asti/Moscato d\'Asti (100% Moscato Bianco, método Charmat; Asti totalmente espumante com 7–9,5% de álcool; Moscato d\'Asti frisante e ainda menos alcoólico) — a maior DOCG da Itália em volume.',
          ['Barbera', 'Moscato Bianco', 'Grignolino', 'Ruché', 'Freisa', 'Dolcetto'], [], 'Asti, Moscato d\'Asti, Barbera d\'Asti, Nizza, Ruché di Castagnole Monferrato, Brachetto d\'Acqui', EN + 'Asti_(wine)'),
        sub('Gavi', 'DOCG', 'Gavi, Alessandria, Italia',
          'Área restrita da província de Alessandria, perto da Ligúria. Branco seco 100% Cortese; DOC em 1974, DOCG em 1998. Vinhas da própria comuna podem usar "Gavi di Gavi".',
          ['Cortese'], [], 'Gavi / Cortese di Gavi', EN + 'Cortese_di_Gavi'),
        sub('Colli Tortonesi', 'DOC', 'Tortona, Alessandria, Italia', 'Colinas entre o Monferrato e o Oltrepò Pavese, conhecidas sobretudo pelo Timorasso.', ['Timorasso'], [], '', IT + 'Viticoltura_in_Piemonte'),
        sub('Alto Piemonte', 'Zona', 'Gattinara, Vercelli, Italia',
          'Colinas do norte (Novara e Vercelli): tintos robustos de Nebbiolo (localmente Spanna). Gattinara DOCG: mínimo 90% Nebbiolo, até 10% Bonarda di Gattinara e 4% Vespolina.',
          ['Nebbiolo', 'Vespolina'], [], 'Gattinara, Ghemme, Fara, Boca, Sizzano', EN + 'Gattinara_DOCG'),
        sub('Canavese', 'Zona', 'Caluso, Torino, Italia', 'Entre Turim e o Vale de Aosta: Erbaluce di Caluso DOCG e as DOC Carema e Canavese.', ['Erbaluce', 'Nebbiolo'], [], 'Erbaluce di Caluso, Carema', IT + 'Viticoltura_in_Piemonte')
      ] },

    { name: "Valle d'Aosta", geo: "Valle d'Aosta", sources: [EN + 'Valle_d%27Aosta_DOC', IT + 'Viticoltura_in_Valle_d%27Aosta'],
      description: 'Vale alpino ao longo do rio Dora Baltea. A menor região vinícola da Itália em área e produção; uma única DOC (Valle d\'Aosta/Vallée d\'Aoste, 1971, com 28 tipologias). Vinhas pequenas e fragmentadas (média de 400 m²). Cerca de 75% de tintos.',
      climate: 'Continental, com verões quentes e secos; colheita no início de setembro.', soils: '',
      altitude: 'Tem as vinhas mais altas da Europa, a cerca de 1.200 m.',
      history: 'Sementes de Vitis vinifera do 3º milênio a.C. em Saint-Martin-de-Corléans; menções a vinho branco em Morgex (1291) e a Chambave (1269).',
      grapes: ['Petit Rouge', 'Fumin', 'Nebbiolo', 'Prié Blanc', 'Petite Arvine'],
      grapes_other: ['Pinot Noir', 'Gamay', 'Chardonnay', 'Pinot Gris', 'Müller-Thurgau', 'Moscato Bianco'],
      notable_wines: 'Blanc de Morgex et de La Salle, Enfer d\'Arvier, Torrette, Chambave, Donnas, Arnad-Montjovet, Nus',
      subregions: [
        sub('Blanc de Morgex et de La Salle', 'DOC (subzona)', 'Morgex, Valle d\'Aosta, Italia', 'Brancos de vinhas não enxertadas (pé-franco).', ['Prié Blanc'], [], '', EN + 'Valle_d%27Aosta_DOC'),
        sub('Enfer d\'Arvier', 'DOC (subzona)', 'Arvier, Valle d\'Aosta, Italia', 'Cortes tintos.', ['Petit Rouge'], [], '', EN + 'Valle_d%27Aosta_DOC'),
        sub('Torrette', 'DOC (subzona)', 'Saint-Pierre, Valle d\'Aosta, Italia', 'Tintos à base de Petit Rouge.', ['Petit Rouge'], [], '', EN + 'Valle_d%27Aosta_DOC'),
        sub('Chambave', 'DOC (subzona)', 'Chambave, Valle d\'Aosta, Italia', 'Tintos e brancos de Moscato Bianco.', ['Moscato Bianco'], [], '', EN + 'Valle_d%27Aosta_DOC'),
        sub('Nus', 'DOC (subzona)', 'Nus, Valle d\'Aosta, Italia', 'Vien de Nus e Pinot Gris.', ['Pinot Gris'], [], '', EN + 'Valle_d%27Aosta_DOC'),
        sub('Arnad-Montjovet', 'DOC (subzona)', 'Arnad, Valle d\'Aosta, Italia', 'Tintos de Nebbiolo.', ['Nebbiolo'], [], '', EN + 'Valle_d%27Aosta_DOC'),
        sub('Donnas', 'DOC (subzona)', 'Donnas, Valle d\'Aosta, Italia', 'Tintos à base de Nebbiolo.', ['Nebbiolo'], [], '', EN + 'Valle_d%27Aosta_DOC')
      ] },

    { name: 'Lombardia', geo: 'Lombardia', sources: [EN + 'Lombardy_wine', IT + 'Viticoltura_in_Lombardia'],
      description: 'Centro-norte da Itália, entre os Alpes e o rio Pó. Cerca de 1,3 milhão de hl por ano; 55% tintos. Produz alguns dos espumantes mais prestigiados da Itália (Franciacorta) e é a única grande região fora do Piemonte focada no Nebbiolo (Valtellina). DOCG: Franciacorta, Oltrepò Pavese Metodo Classico, Valtellina Superiore, Sforzato di Valtellina e Moscato di Scanzo (a menor DOCG da Itália).',
      climate: 'Continental "fresco", protegido pelos Alpes e moderado pelos lagos.', soils: 'Calcários, argila e morena glacial.', altitude: '',
      history: 'Vinhas desde o Neolítico; Estrabão elogiou os vinhos do Oltrepò Pavese.',
      grapes: ['Nebbiolo', 'Chardonnay', 'Pinot Noir', 'Barbera', 'Bonarda'],
      grapes_other: ['Pinot Blanc', 'Merlot', 'Cabernet Sauvignon', 'Trebbiano Toscano', 'Riesling Italico', 'Groppello', 'Lambrusco'],
      notable_wines: 'Franciacorta, Valtellina Superiore, Sforzato di Valtellina, Oltrepò Pavese Metodo Classico, Lugana, Moscato di Scanzo, Bonarda dell\'Oltrepò Pavese',
      subregions: [
        sub('Franciacorta', 'DOCG', 'Erbusco, Brescia, Italia',
          'Colinas entre o sul do Lago de Iseo e Brescia; DOCG desde 1995. Cerca de 2.200 ha de solos calcários e de cascalho, ricos em minerais. 85% Chardonnay, 10% Pinot Noir, 5% Pinot Blanc. Método tradicional: não safrado 25 meses (18 sobre leveduras); safrado 37 meses (30). Estilos Satèn e Rosé; seis níveis de dosagem. Não precisa declarar a DOCG no rótulo, como o Champagne.',
          ['Chardonnay', 'Pinot Noir', 'Pinot Blanc'],
          [prod('Guido Berlucchi', 'iniciou a produção comercial em 1961'), prod('Ca\' del Bosco'), prod('Bellavista')], 'Franciacorta Satèn, Franciacorta Rosé', EN + 'Franciacorta_(wine)'),
        sub('Valtellina', 'DOCG', 'Sondrio, Italia',
          'Vale alpino junto à Suíça. Tintos de Chiavennasca (Nebbiolo). Subzonas da Valtellina Superiore: Sassella, Grumello, Inferno, Valgella e Maroggia. O Sforzato (Sfursat) é feito de uvas secas, no estilo do Amarone.',
          ['Nebbiolo'], [], 'Valtellina Superiore (Sassella, Grumello, Inferno, Valgella, Maroggia), Sforzato di Valtellina', EN + 'Valtellina'),
        sub('Oltrepò Pavese', 'DOCG / DOC', 'Casteggio, Pavia, Italia',
          'Colinas ao sul do rio Pó (província de Pavia). Tintos e brancos variados e espumantes de método clássico com Pinot Noir; o Pinot encontrou aqui seu habitat na Itália.',
          ['Pinot Noir', 'Bonarda', 'Barbera', 'Riesling Italico'], [], 'Oltrepò Pavese Metodo Classico, Bonarda dell\'Oltrepò Pavese, Buttafuoco', IT + 'Viticoltura_in_Lombardia'),
        sub('Lugana', 'DOC', 'Sirmione, Brescia, Italia', 'Brancos de Trebbiano às margens do sul do Lago de Garda (DOC entre Lombardia e Vêneto).', [], [], '', EN + 'Lombardy_wine'),
        sub('Garda Bresciano e Valtènesi', 'DOC', 'Moniga del Garda, Brescia, Italia', 'Tintos de Groppello e rosés Chiaretto na margem oeste do Garda.', ['Groppello'], [], 'Valtènesi Chiaretto', IT + 'Viticoltura_in_Lombardia'),
        sub('Moscato di Scanzo', 'DOCG', 'Scanzorosciate, Bergamo, Italia', 'Passito da comuna de Scanzorosciate; a menor DOCG da Itália (39 produtores, 31 ha).', ['Moscato di Scanzo'], [], '', IT + 'Viticoltura_in_Lombardia')
      ] },

    { name: 'Trentino-Alto Adige', geo: 'Trentino-Alto Adige', sources: [EN + 'Trentino-Alto_Adige/S%C3%BCdtirol_wine', IT + 'Viticoltura_in_Trentino-Alto_Adige'],
      description: 'Nordeste da Itália, entre as zonas climáticas alpina e mediterrânea. Cerca de 60% de brancos. No Alto Adige, cerca de 5.000 viticultores entregam uvas a 160 vinícolas, 70% em cooperativas. DOC principais: Alto Adige (71 tipologias), Trentino, Trento (espumante), Teroldego Rotaliano, Lago di Caldaro, Casteller.',
      climate: 'Influência mediterrânea no vale do Ádige; condições alpinas mais duras no Vinschgau e no Eisacktal, favoráveis aos brancos.',
      soils: 'Vulcânicos, aluviais, argila e calcário.', altitude: 'Vinhas chegam a cerca de 1.200 m.',
      history: 'Vinho desde os etruscos; cooperativas surgiram sob os Habsburgo; critérios rigorosos de qualidade só em 1980.',
      grapes: ['Schiava', 'Lagrein', 'Teroldego', 'Gewürztraminer', 'Pinot Gris', 'Pinot Blanc', 'Chardonnay'],
      grapes_other: ['Pinot Noir', 'Sauvignon Blanc', 'Müller-Thurgau', 'Sylvaner', 'Kerner', 'Riesling', 'Merlot', 'Cabernet Sauvignon'],
      notable_wines: 'Trento DOC (espumante), Santa Maddalena, Lago di Caldaro/Kalterersee, Alto Adige Sauvignon, Teroldego Rotaliano, Lagrein',
      subregions: [
        sub('Trento DOC', 'DOC', 'Trento, Italia',
          'Espumantes brancos e rosés de método tradicional na província de Trento — a segunda denominação desse tipo no mundo, depois do Champagne. Chardonnay, Pinot Noir, Pinot Meunier e Pinot Blanc. Giulio Ferrari trouxe a Chardonnay da França por volta de 1900.',
          ['Chardonnay', 'Pinot Noir', 'Pinot Blanc'],
          [prod('Ferrari', 'fundada por Giulio Ferrari; hoje dirigida pela família Lunelli'), prod('Cavit', 'maior cooperativa da província, cerca de 65% da produção')], '', EN + 'Trento_DOC'),
        sub('Teroldego Rotaliano', 'DOC', 'Mezzolombardo, Trento, Italia', 'Planície aluvial do Campo Rotaliano; DOC desde 1971; cerca de 400 ha e mais de 300 produtores.', ['Teroldego'], [], '', EN + 'Teroldego'),
        sub('Valle Isarco (Eisacktal)', 'DOC (subzona)', 'Bressanone, Alto Adige, Italia', 'Zona de brancos: Sylvaner, Müller-Thurgau, Gewürztraminer, Kerner e Riesling. A Abadia de Novacella produz vinho desde 1142.', ['Sylvaner', 'Müller-Thurgau', 'Gewürztraminer', 'Kerner', 'Riesling'],
          [prod('Abbazia di Novacella', 'vinho desde 1142')], '', IT + 'Viticoltura_in_Trentino-Alto_Adige'),
        sub('Santa Maddalena (St. Magdalener)', 'DOC (subzona)', 'Bolzano, Italia', 'Subzona do Alto Adige nas colinas de Bolzano, tinto de Schiava.', ['Schiava', 'Lagrein'], [], 'Santa Maddalena', EN + 'Trentino-Alto_Adige/S%C3%BCdtirol_wine'),
        sub('Lago di Caldaro (Kalterersee)', 'DOC', 'Caldaro sulla Strada del Vino, Italia', 'Tintos leves de Schiava em torno do lago de Caldaro, na Estrada do Vinho do Alto Adige.', ['Schiava'], [], '', EN + 'Trentino-Alto_Adige/S%C3%BCdtirol_wine'),
        sub('Oltradige, Merano, Val Venosta', 'DOC (subzonas)', 'Appiano sulla Strada del Vino, Italia', 'Outras subzonas da DOC Alto Adige: Oltradige (Überetsch), Merano (Meraner), Val Venosta (Vinschgau), Colli di Bolzano.', [], [], '', EN + 'Trentino-Alto_Adige/S%C3%BCdtirol_wine')
      ] },

    { name: 'Vêneto', geo: 'Veneto', sources: [EN + 'Veneto_wine', IT + 'Viticoltura_in_Veneto'],
      description: 'Nordeste da Itália, parte das "Tre Venezie". A maior produtora de vinhos DOC da Itália (cerca de 8,5 milhões de hl); 55% da produção DOC é de brancos. Sete DOCG, entre elas Amarone della Valpolicella, Prosecco Superiore e Soave Superiore.',
      climate: 'Protegido pelos Alpes; o sopé mais fresco do norte favorece brancos; planícies do Adriático, vales e a zona do Garda, mais quentes, favorecem tintos.',
      soils: 'Aluviais, argila, calcário e, em algumas áreas, vulcânicos.', altitude: '',
      history: 'A fama dos vinhos de Treviso, Vicenza e Valpolicella começa por volta de 1550; a verdadeira retomada da enologia vem depois de 1950.',
      grapes: ['Glera', 'Garganega', 'Corvina', 'Rondinella', 'Corvinone'],
      grapes_other: ['Molinara', 'Pinot Gris', 'Trebbiano Toscano', 'Chardonnay', 'Merlot', 'Cabernet Sauvignon'],
      notable_wines: 'Prosecco, Amarone della Valpolicella, Valpolicella Ripasso, Recioto della Valpolicella, Soave, Recioto di Soave, Bardolino, Torcolato (Breganze)',
      subregions: [
        sub('Valpolicella', 'DOC / DOCG', 'Negrar, Verona, Italia',
          'Colinas a leste do Lago de Garda (província de Verona); segunda maior produção DOC da Itália depois do Chianti. Zona Clássica: Pescantina, San Pietro in Cariano, Negrar, Marano, Fumane, Sant\'Ambrogio e Sant\'Anna d\'Alfaedo. Amarone: uvas secas por cerca de 120 dias (appassimento), mínimo 2 anos em madeira e 14% de álcool; Recioto é a versão doce; Ripasso passa o Valpolicella sobre o bagaço do Amarone.',
          ['Corvina', 'Corvinone', 'Rondinella', 'Molinara'], [], 'Amarone della Valpolicella, Recioto della Valpolicella, Valpolicella Ripasso, Valpolicella Classico/Superiore', EN + 'Valpolicella'),
        sub('Soave', 'DOC / DOCG', 'Soave, Verona, Italia',
          'Branco seco em torno de Verona; DOC e, desde 2001, a DOCG Soave Superiore; zona Classico no coração da região. Garganega é a uva principal (com Trebbiano di Soave e Chardonnay). O Recioto di Soave (passito) tem DOCG própria desde 1998. A Cantina di Soave (2.200 sócios) faz cerca de metade do Soave.',
          ['Garganega', 'Trebbiano di Soave', 'Chardonnay'],
          [prod('Gini', 'produtor independente de destaque'), prod('Pieropan', 'produtor independente de destaque'), prod('Tessari', 'produtor independente de destaque'), prod('Cantina di Soave', 'cooperativa, cerca de 48% do Soave DOC (2009)')],
          'Soave Classico, Soave Superiore, Recioto di Soave', EN + 'Soave_(wine)'),
        sub('Conegliano Valdobbiadene', 'DOCG', 'Valdobbiadene, Treviso, Italia',
          'Colinas da DOCG do Prosecco Superiore (6.860 ha); dentro dela, Cartizze (107 ha) é a subzona mais prestigiada. Glera com até 15% de outras uvas; método Charmat-Martinotti; Brut, Extra Dry e Dry; maçã amarela, pera, pêssego branco e damasco.',
          ['Glera'], [], 'Prosecco Superiore, Superiore di Cartizze', EN + 'Prosecco'),
        sub('Asolo', 'DOCG', 'Asolo, Treviso, Italia', 'Segunda DOCG do Prosecco (1.783 ha).', ['Glera'], [], 'Asolo Prosecco', EN + 'Prosecco'),
        sub('Bardolino', 'DOC / DOCG', 'Bardolino, Verona, Italia', 'Colinas de morena glacial, com cascalho e areia, na margem direita do Lago de Garda; mesmas uvas do Valpolicella.', ['Corvina', 'Rondinella'], [], 'Bardolino, Bardolino Superiore, Chiaretto', EN + 'Veneto_wine'),
        sub('Colli Euganei', 'DOC / DOCG', 'Arquà Petrarca, Padova, Italia', 'Microclima mediterrâneo perto de Pádua; espumante doce Moscato Fior d\'Arancio.', [], [], 'Colli Euganei Fior d\'Arancio', EN + 'Veneto_wine'),
        sub('Breganze', 'DOC', 'Breganze, Vicenza, Italia', 'Conhecida pelo Torcolato, vinho de uvas passificadas.', [], [], 'Torcolato', EN + 'Veneto_wine')
      ] },

    { name: 'Friuli-Venezia Giulia', geo: 'Friuli-Venezia Giulia', sources: [EN + 'Friuli-Venezia_Giulia_wine', IT + 'Viticoltura_in_Friuli-Venezia_Giulia'],
      description: 'Nordeste da Itália, entre os Alpes, a Eslovênia e o Adriático; norte montanhoso e planícies rumo ao mar. Cerca de 60% de brancos. A filosofia local é mostrar a fruta pura e a acidez da uva, sem mascarar com carvalho; na Venezia Giulia são conhecidos os brancos macerados. Vinhedos em terraços são chamados "ronco".',
      climate: 'Dias quentes e brisas noturnas frescas vindas do Adriático; média de verão ~23 °C; cerca de 1.500 mm de chuva; colheita em setembro.',
      soils: 'Marga rica em cálcio e arenito flysch (ponca) nas colinas; argila, areia e cascalho nos vales.', altitude: '',
      history: 'Cultivada por romanos, bizantinos, venezianos e austríacos; a filoxera chegou no século XIX.',
      grapes: ['Friulano', 'Ribolla Gialla', 'Pinot Gris', 'Refosco dal Peduncolo Rosso', 'Picolit', 'Verduzzo'],
      grapes_other: ['Sauvignon Blanc', 'Chardonnay', 'Malvasia Istriana', 'Schioppettino', 'Pignolo', 'Merlot', 'Cabernet Franc', 'Cabernet Sauvignon'],
      notable_wines: 'Brancos do Collio e dos Colli Orientali; Picolit e Ramandolo (DOCG doces); Rosazzo DOCG; brancos laranja do Collio e do Carso',
      subregions: [
        sub('Collio Goriziano (Collio)', 'DOC', 'Cormons, Gorizia, Italia',
          'Parte italiana das colinas de Gorizia, junto à Eslovênia. Sobretudo brancos: Friulano, Ribolla Gialla, Malvasia Istriana, Chardonnay, Pinot Blanc, Pinot Gris, Sauvignon Blanc; o Collio Rosso é corte de Merlot e Cabernets. 4ª maior DOC do Friuli.',
          ['Friulano', 'Ribolla Gialla', 'Malvasia Istriana', 'Pinot Gris', 'Sauvignon Blanc'], [], '', EN + 'Collio_Goriziano'),
        sub('Friuli Colli Orientali', 'DOC / DOCG', 'Cividale del Friuli, Udine, Italia', 'Colinas orientais da província de Udine; vinhos de sobremesa Picolit (DOCG, com a subzona Cialla) e tintos de uvas locais; Ramandolo e Rosazzo são DOCG.', ['Picolit', 'Verduzzo', 'Refosco dal Peduncolo Rosso', 'Schioppettino', 'Pignolo', 'Friulano'], [], 'Picolit, Ramandolo, Rosazzo', EN + 'Friuli-Venezia_Giulia_wine'),
        sub('Friuli Grave', 'DOC', 'Codroipo, Udine, Italia', 'Planície aluvial (Pordenone e Udine), a maior produção da região; vinhos mais leves.', ['Merlot', 'Pinot Gris', 'Friulano'], [], '', EN + 'Friuli-Venezia_Giulia_wine'),
        sub('Friuli Isonzo', 'DOC', 'Gradisca d\'Isonzo, Gorizia, Italia', 'Zona de influência marítima perto do rio Isonzo.', [], [], '', EN + 'Friuli-Venezia_Giulia_wine'),
        sub('Carso', 'DOC', 'Sgonico, Trieste, Italia', 'Zona de clima marítimo perto de Trieste.', [], [], '', EN + 'Friuli-Venezia_Giulia_wine')
      ] },

    { name: 'Ligúria', geo: 'Liguria', sources: [EN + 'Liguria_wine', IT + 'Viticoltura_in_Liguria'],
      description: 'Riviera italiana, entre Piemonte, Provença, os Apeninos e o Mar da Ligúria. Cerca de 65% de brancos. Vinhas pequenas e produções limitadas; não há DOCG. Sete DOC, entre elas Cinque Terre e Rossese di Dolceacqua.',
      climate: '', soils: 'Sobretudo rochosos, arenosos, argila e marga; vinhas em terraços à beira-mar.', altitude: '',
      history: 'Vinha desde os etruscos e romanos (citada por Plínio); no início do século XIX havia quase 300 variedades.',
      grapes: ['Vermentino', 'Bosco', 'Albarola', 'Rossese', 'Bianchetta Genovese'],
      grapes_other: ['Ormeasco', 'Ciliegiolo', 'Granaccia'],
      notable_wines: 'Cinque Terre, Sciacchetrà (passito das Cinque Terre), Rossese di Dolceacqua, Riviera Ligure di Ponente Pigato e Vermentino, Colli di Luni Vermentino, Ormeasco di Pornassio',
      subregions: [
        sub('Cinque Terre', 'DOC', 'Vernazza, La Spezia, Italia', 'DOC de 1973, restrita à costa das Cinque Terre (Riomaggiore, Manarola, Vernazza, Corniglia, Monterosso). Brancos secos com pelo menos 40% de Bosco, mais Albarola e Vermentino; o raro Sciacchetrà é passito.', ['Bosco', 'Albarola', 'Vermentino'], [], 'Cinque Terre, Sciacchetrà', EN + 'Cinque_Terre_DOC'),
        sub('Colli di Luni', 'DOC', 'Castelnuovo Magra, La Spezia, Italia', 'Brancos de Vermentino (com Trebbiano) e tintos de Sangiovese, Canaiolo, Ciliegiolo e Pollera; DOC entre Ligúria e Toscana.', ['Vermentino', 'Sangiovese'], [], '', IT + 'Viticoltura_in_Liguria'),
        sub('Riviera Ligure di Ponente', 'DOC', 'Albenga, Savona, Italia', 'Tintos de Rossese, Ormeasco (Dolcetto) e Ciliegiolo; brancos de Vermentino e Pigato.', ['Vermentino', 'Rossese', 'Dolcetto'], [], 'Pigato, Vermentino, Ormeasco di Pornassio', IT + 'Viticoltura_in_Liguria'),
        sub('Rossese di Dolceacqua', 'DOC', 'Dolceacqua, Imperia, Italia', 'Tinto da uva autóctone Rossese, no extremo oeste — frutado e pouco agressivo.', ['Rossese'], [], '', EN + 'Liguria_wine'),
        sub('Val Polcevera e Golfo del Tigullio', 'DOC', 'Genova, Italia', 'Vinhos de Bianchetta Genovese na província de Gênova.', ['Bianchetta Genovese'], [], '', IT + 'Viticoltura_in_Liguria')
      ] },

    { name: 'Emília-Romanha', geo: 'Emilia-Romagna', sources: [IT + 'Viticoltura_in_Emilia-Romagna', EN + 'Lambrusco'],
      description: 'Duas metades: a Emília (oeste), terra do Lambrusco frisante, e a Romanha (leste), de Sangiovese e Albana. Nas últimas décadas seguiu dois caminhos: valorizar as uvas autóctones e plantar variedades internacionais. DOCG: Romagna Albana e Colli Bolognesi Classico Pignoletto.',
      climate: '', soils: '', altitude: '',
      history: 'Viticultura pré-romana (século VII a.C.); o Lambrusco deve às cooperativas do início do século XX sua grande expansão.',
      grapes: ['Lambrusco', 'Sangiovese', 'Albana', 'Trebbiano Toscano', 'Pignoletto'],
      grapes_other: ['Malvasia', 'Ortrugo', 'Chardonnay', 'Sauvignon Blanc', 'Cabernet Sauvignon', 'Merlot'],
      notable_wines: 'Lambrusco di Sorbara, Lambrusco Grasparossa di Castelvetro, Lambrusco Salamino di Santa Croce, Romagna Albana, Romagna Sangiovese, Gutturnio, Colli Bolognesi Pignoletto',
      subregions: [
        sub('Lambrusco di Modena (Sorbara, Grasparossa, Salamino)', 'DOC', 'Castelvetro di Modena, Italia', 'Três DOC da província de Módena; os Lambrusco mais bem avaliados são os tintos frisantes, para beber jovens.', ['Lambrusco'], [], 'Lambrusco di Sorbara, Lambrusco Grasparossa di Castelvetro, Lambrusco Salamino di Santa Croce', EN + 'Lambrusco'),
        sub('Reggiano e Colli di Scandiano e Canossa', 'DOC', 'Scandiano, Reggio Emilia, Italia', 'DOCs de Lambrusco e outros vinhos na província de Reggio Emilia.', ['Lambrusco'], [], '', IT + 'Viticoltura_in_Emilia-Romagna'),
        sub('Colli Piacentini', 'DOC', 'Ziano Piacentino, Piacenza, Italia', 'Colinas de Piacenza: Gutturnio, Ortrugo dei Colli Piacentini.', ['Ortrugo'], [], 'Gutturnio, Ortrugo dei Colli Piacentini', IT + 'Viticoltura_in_Emilia-Romagna'),
        sub('Colli Bolognesi', 'DOC / DOCG', 'Monteveglio, Bologna, Italia', 'Colinas de Bolonha; a DOCG Colli Bolognesi Classico Pignoletto.', ['Pignoletto'], [], 'Colli Bolognesi Classico Pignoletto', IT + 'Viticoltura_in_Emilia-Romagna'),
        sub('Romagna', 'DOC / DOCG', 'Bertinoro, Forlì-Cesena, Italia', 'Sangiovese e Albana nas províncias de Bolonha, Ravena, Forlì-Cesena e Rimini. Romagna Albana: DOC em 1967, DOCG em 1987.', ['Sangiovese', 'Albana', 'Trebbiano Toscano'], [], 'Romagna Albana, Romagna Sangiovese', EN + 'Romagna_Albana')
      ] },

    { name: 'Toscana', geo: 'Toscana', sources: [EN + 'Tuscan_wine', IT + 'Viticoltura_in_Toscana', EN + 'Super_Tuscan'],
      description: 'Centro da Itália, na costa do Tirreno. Cerca de 58.000 ha de vinhas e 23.000 empresas. 11 DOCG, 41 DOC e IGT. Terra do Chianti, do Brunello e dos "Super Toscanos", vinhos de alta qualidade feitos fora das regras das DOC nos anos 1970 (depois acolhidos pela IGT Toscana em 1992 e pela DOC Bolgheri em 1994).',
      climate: 'Mediterrâneo quente, moderado pela altitude das colinas.', soils: 'Argila, calcário, xisto, areia e marga; galestro e alberese; solos pobres favorecem qualidade.',
      altitude: 'A maioria das vinhas entre 150 e 490 m; a altitude aumenta a amplitude térmica.',
      history: 'Vinho dos etruscos; no século XIX, o barão Bettino Ricasoli, em Brolio, definiu a receita moderna do Chianti.',
      grapes: ['Sangiovese', 'Canaiolo', 'Trebbiano Toscano', 'Vernaccia', 'Cabernet Sauvignon', 'Merlot'],
      grapes_other: ['Colorino', 'Mammolo', 'Cabernet Franc', 'Malvasia', 'Vermentino', 'Chardonnay'],
      notable_wines: 'Chianti Classico, Brunello di Montalcino, Vino Nobile di Montepulciano, Sassicaia, Tignanello (Marchesi Antinori, 1978), Ornellaia, Vernaccia di San Gimignano, Morellino di Scansano, Carmignano, Vin Santo',
      subregions: [
        sub('Chianti Classico', 'DOCG', 'Greve in Chianti, Firenze, Italia',
          'Coração original entre Florença e Siena (~260 km²): Greve, Radda, Gaiole e Castellina, além de partes de outras comunas; selo do galo negro. Desde 1996, 75–100% Sangiovese; uvas brancas proibidas desde 2006; categoria Gran Selezione desde 2014.',
          ['Sangiovese', 'Canaiolo', 'Colorino'],
          [prod('Barone Ricasoli', 'Bettino Ricasoli definiu a fórmula à base de Sangiovese (Castello di Brolio)'), prod('Marchesi Antinori')], 'Chianti Classico, Riserva, Gran Selezione', EN + 'Chianti'),
        sub('Chianti (e subzonas)', 'DOCG', 'Pontassieve, Firenze, Italia',
          'Área ampliada pelo centro da Toscana, com oito subzonas: Rufina (fresca e elevada, vinhos elegantes), Colli Senesi, Colli Fiorentini, Montespertoli, Montalbano, Colli Aretini e Colline Pisane; também Chianti Superiore.',
          ['Sangiovese', 'Canaiolo'], [prod('Frescobaldi', 'Chianti Rufina')], 'Chianti Rufina, Chianti Colli Senesi', EN + 'Chianti'),
        sub('Montalcino', 'DOCG', 'Montalcino, Siena, Italia',
          'Cerca de 80 km ao sul de Florença; zona mais quente, de vinhos mais profundos. Brunello: 100% Sangiovese (localmente Brunello), 2 anos em carvalho, lançado 50 meses após a colheita; Riserva um ano depois. Rosso di Montalcino é o irmão mais jovem. Amora, cereja negra, chocolate, couro, violeta. Escândalo "Brunellopoli" em 2008.',
          ['Sangiovese'],
          [prod('Biondi-Santi', 'Franco Biondi Santi criou o estilo moderno em 1888'), prod('Castello Banfi'), prod('Gaja'), prod('Soldera Case Basse'), prod('Castiglion del Bosco')],
          'Brunello di Montalcino, Rosso di Montalcino, Moscadello di Montalcino', EN + 'Brunello_di_Montalcino'),
        sub('Montepulciano', 'DOCG', 'Montepulciano, Siena, Italia',
          'Sudeste da Toscana. Vino Nobile: mínimo 70% Sangiovese (Prugnolo Gentile) com Canaiolo e Mammolo; 2 anos (1 em carvalho), Riserva 3. Rosso di Montepulciano é a versão mais leve. Não confundir com o Montepulciano d\'Abruzzo.',
          ['Sangiovese', 'Canaiolo', 'Mammolo'], [prod('Cantine Fanetti', 'pioneira da produção comercial nos anos 1920–30')], 'Vino Nobile di Montepulciano, Rosso di Montepulciano', EN + 'Vino_Nobile_di_Montepulciano'),
        sub('Bolgheri', 'DOC', 'Castagneto Carducci, Livorno, Italia',
          'Costa da Maremma (Livorno), berço dos Super Toscanos: Sassicaia, plantado em 1944 na Tenuta San Guido e lançado comercialmente em 1971, tem até DOC própria (Bolgheri Sassicaia). Os Super Toscanos usam Sangiovese e variedades bordalesas, sobretudo Cabernet Sauvignon e Merlot.',
          ['Cabernet Sauvignon', 'Merlot', 'Cabernet Franc'],
          [prod('Tenuta San Guido', 'Sassicaia'), prod('Tenuta dell\'Ornellaia', 'Ornellaia'), prod('Ca\' Marcanda (Gaja)'), prod('Guado al Tasso (Antinori)'), prod('I Greppi', 'Greppicaia')],
          'Sassicaia, Ornellaia', EN + 'Bolgheri'),
        sub('San Gimignano', 'DOCG', 'San Gimignano, Siena, Italia', 'Vernaccia di San Gimignano: primeira DOC da Itália (1966), DOCG em 1993; primeira menção em 1276.', ['Vernaccia'], [], 'Vernaccia di San Gimignano', EN + 'Vernaccia_di_San_Gimignano'),
        sub('Morellino di Scansano', 'DOCG', 'Scansano, Grosseto, Italia', 'Colinas da Maremma costeira; mínimo 85% Sangiovese (localmente Morellino); DOC em 1978, DOCG desde a safra 2007.', ['Sangiovese'], [], '', EN + 'Morellino_di_Scansano'),
        sub('Carmignano', 'DOCG', 'Carmignano, Prato, Italia', 'Colinas de Carmignano e Poggio a Caiano; protegido por lei desde 1716 e pioneiro no uso de Cabernet no corte.', ['Sangiovese', 'Cabernet Sauvignon'], [], 'Carmignano, Barco Reale', IT + 'Viticoltura_in_Toscana')
      ] },

    { name: 'Úmbria', geo: 'Umbria', sources: [IT + 'Viticoltura_in_Umbria', EN + 'Montefalco_Sagrantino', EN + 'Orvieto_DOC'],
      description: 'Centro da Itália, sem saída para o mar, 70% de colinas. Primeira DOC em 1968 (Torgiano) e primeira DOCG em 1990 (Torgiano Rosso Riserva); Montefalco Sagrantino é DOCG desde 1992.',
      climate: '', soils: '', altitude: '', history: 'Vinhos elogiados por Plínio, o Velho, e por Marcial; relançamento a partir de 1960.',
      grapes: ['Sagrantino', 'Sangiovese', 'Grechetto', 'Trebbiano Toscano'],
      grapes_other: ['Merlot', 'Cabernet Sauvignon', 'Chardonnay'],
      notable_wines: 'Montefalco Sagrantino (seco e passito), Montefalco Rosso, Orvieto, Torgiano Rosso Riserva',
      subregions: [
        sub('Montefalco', 'DOCG', 'Montefalco, Perugia, Italia', 'Montefalco Sagrantino: 100% Sagrantino; DOC em 1979, DOCG em 1992. Dois estilos: Secco (seco, com carvalho) e Passito (doce, o tradicional). Montefalco Rosso é à base de Sangiovese.', ['Sagrantino', 'Sangiovese'], [prod('Arnaldo Caprai', 'impulsionou a DOCG')], 'Montefalco Sagrantino Secco e Passito, Montefalco Rosso', EN + 'Montefalco_Sagrantino'),
        sub('Orvieto', 'DOC', 'Orvieto, Terni, Italia', 'Brancos de Grechetto e Trebbiano (Orvieto e Orvieto Classico), entre a Úmbria e o Lácio; antigamente um vinho doce e dourado, hoje seco, com versões Abboccato e dolce.', ['Grechetto', 'Trebbiano Toscano'], [], 'Orvieto Classico', EN + 'Orvieto_DOC'),
        sub('Torgiano', 'DOC / DOCG', 'Torgiano, Perugia, Italia', 'Primeira DOC da Úmbria (1968) e primeira DOCG (Torgiano Rosso Riserva, 1990).', ['Sangiovese'], [], 'Torgiano Rosso Riserva', IT + 'Viticoltura_in_Umbria')
      ] },

    { name: 'Marche', geo: 'Marche', sources: [IT + 'Viticoltura_nelle_Marche', EN + 'Verdicchio'],
      description: 'Costa adriática do centro da Itália, terra do Verdicchio. DOCG: Conero, Offida, Verdicchio dei Castelli di Jesi Riserva, Verdicchio di Matelica Riserva e Vernaccia di Serrapetrona. Em 1953, a Fazi Battaglia criou a garrafa em forma de ânfora do Verdicchio.',
      climate: '', soils: '', altitude: '', history: 'Viticultura desde cerca do século X a.C.; mosteiros mantiveram as técnicas na Idade Média.',
      grapes: ['Verdicchio', 'Montepulciano', 'Sangiovese', 'Pecorino'],
      grapes_other: ['Lacrima', 'Bianchello'],
      notable_wines: 'Verdicchio dei Castelli di Jesi, Verdicchio di Matelica, Conero (Rosso Conero Riserva), Rosso Piceno, Offida, Lacrima di Morro d\'Alba, Vernaccia di Serrapetrona',
      subregions: [
        sub('Castelli di Jesi', 'DOC / DOCG', 'Cupramontana, Ancona, Italia', 'Verdicchio dei Castelli di Jesi (Classico, Superiore, Riserva DOCG, espumante e passito) nas províncias de Ancona e Macerata.', ['Verdicchio'], [prod('Fazi Battaglia', 'garrafa-ânfora do Verdicchio, 1953', IT + 'Viticoltura_nelle_Marche')], 'Verdicchio dei Castelli di Jesi', IT + 'Viticoltura_nelle_Marche'),
        sub('Matelica', 'DOC / DOCG', 'Matelica, Macerata, Italia', 'Verdicchio de Matelica, com Riserva DOCG, passito e espumante.', ['Verdicchio'], [], 'Verdicchio di Matelica', IT + 'Viticoltura_nelle_Marche'),
        sub('Conero', 'DOCG', 'Sirolo, Ancona, Italia', 'Conero DOCG (antigo Rosso Conero Riserva) e Rosso Conero DOC, na província de Ancona.', ['Montepulciano'], [], 'Conero, Rosso Conero', IT + 'Viticoltura_nelle_Marche'),
        sub('Piceno e Offida', 'DOC / DOCG', 'Offida, Ascoli Piceno, Italia', 'Offida DOCG (branco e tinto) e Rosso Piceno, no sul da região.', ['Pecorino', 'Montepulciano', 'Sangiovese'], [], 'Offida Pecorino, Rosso Piceno', IT + 'Viticoltura_nelle_Marche'),
        sub('Serrapetrona', 'DOCG', 'Serrapetrona, Macerata, Italia', 'Vernaccia di Serrapetrona, também em versão espumante.', [], [], '', IT + 'Viticoltura_nelle_Marche'),
        sub('Morro d\'Alba', 'DOC', 'Morro d\'Alba, Ancona, Italia', 'Lacrima di Morro d\'Alba, na província de Ancona.', ['Lacrima'], [], '', IT + 'Viticoltura_nelle_Marche')
      ] },

    { name: 'Lácio', geo: 'Lazio', sources: [IT + 'Viticoltura_in_Lazio', EN + 'Frascati_DOC'],
      description: 'Região de Roma, com vinhas em média colina sobre terras vulcânicas ou vermelhas. DOCG: Cesanese del Piglio, Cannellino di Frascati e Frascati Superiore; muitas DOC, como Est! Est!! Est!!! di Montefiascone e Castelli Romani.',
      climate: '', soils: 'Vulcânicos e terras vermelhas.', altitude: '',
      history: 'No fim do século XIX havia 200 variedades; depois da filoxera, foco na qualidade e redução de rendimentos.',
      grapes: ['Malvasia', 'Trebbiano Toscano', 'Grechetto', 'Cesanese'],
      grapes_other: ['Bombino Bianco', 'Aleatico', 'Merlot'],
      notable_wines: 'Frascati, Cannellino di Frascati, Cesanese del Piglio, Est! Est!! Est!!! di Montefiascone, Aleatico di Gradoli',
      subregions: [
        sub('Frascati e Castelli Romani', 'DOC / DOCG', 'Frascati, Roma, Italia', 'A 25 km de Roma; branco de Malvasia di Candia, Malvasia del Lazio, Grechetto, Bombino e Trebbiano. DOC em 1966, DOCG em 2011. Preferido dos papas da Renascença e da geração da "Dolce Vita".', ['Malvasia', 'Grechetto', 'Trebbiano Toscano', 'Bombino Bianco'], [], 'Frascati Superiore, Cannellino di Frascati', EN + 'Frascati_DOC'),
        sub('Cesanese del Piglio', 'DOCG', 'Piglio, Frosinone, Italia', 'Tintos de Cesanese na província de Frosinone.', ['Cesanese'], [], '', IT + 'Viticoltura_in_Lazio'),
        sub('Montefiascone', 'DOC', 'Montefiascone, Viterbo, Italia', 'Est! Est!! Est!!! di Montefiascone, na província de Viterbo.', [], [], '', IT + 'Viticoltura_in_Lazio')
      ] },

    { name: 'Abruzzo', geo: 'Abruzzo', sources: [EN + 'Abruzzo_wine_region', IT + 'Viticoltura_in_Abruzzo', EN + 'Montepulciano_d%27Abruzzo'],
      description: 'Região montanhosa (65%) do centro da Itália, no Adriático; 5ª maior produtora da Itália em volume. Cerca de 70% de tintos. DOCG: Montepulciano d\'Abruzzo Colline Teramane, Terre Tollesi (Tullum) e Terre di Casauria (2025).',
      climate: 'Os Apeninos bloqueiam as tempestades do oeste; sistemas do leste trazem chuva; o Adriático modera as vinhas costeiras, em vales de argila calcária orientados oeste–leste.',
      soils: 'Argila, calcário e marga.', altitude: '',
      history: 'Presença romana; Michele Torcia descreveu pela primeira vez a uva Montepulciano no Abruzzo em 1792.',
      grapes: ['Montepulciano', 'Trebbiano Toscano', 'Pecorino'],
      grapes_other: ['Passerina', 'Sangiovese', 'Chardonnay'],
      notable_wines: 'Montepulciano d\'Abruzzo (um dos DOC italianos mais exportados), Trebbiano d\'Abruzzo, Cerasuolo d\'Abruzzo (rosé)',
      subregions: [
        sub('Colline Teramane', 'DOCG', 'Teramo, Italia', 'Subzona criada em 1995 e DOCG separada desde 2003 (Colline Teramane Montepulciano d\'Abruzzo). O Montepulciano d\'Abruzzo é tipicamente seco, de taninos macios, muitas vezes bebido jovem; até 15% de Sangiovese permitido.', ['Montepulciano'], [], '', EN + 'Montepulciano_d%27Abruzzo'),
        sub('Chieti e Tollo', 'DOC / DOCG', 'Tollo, Chieti, Italia', 'Chieti é a 5ª província produtora da Itália, com planícies mais quentes e férteis; em Tollo fica a DOCG Terre Tollesi.', ['Montepulciano', 'Trebbiano Toscano'], [prod('Cantina Tollo'), prod('Citra')], 'Terre Tollesi (Tullum)', EN + 'Abruzzo_wine_region'),
        sub('Pescara e Casauria', 'DOCG', 'Torre de\' Passeri, Pescara, Italia', 'Encostas do norte, de vinhos bem avaliados; Terre di Casauria virou DOCG em 2025.', ['Montepulciano'], [prod('Edoardo Valentini'), prod('Emidio Pepe', 'popularizou o Montepulciano d\'Abruzzo')], 'Terre di Casauria', EN + 'Abruzzo_wine_region'),
        sub('L\'Aquila', 'DOC', 'Ofena, L\'Aquila, Italia', 'Província montanhosa; produz o rosé Cerasuolo.', ['Montepulciano'], [], 'Cerasuolo d\'Abruzzo', EN + 'Abruzzo_wine_region')
      ] },

    { name: 'Molise', geo: 'Molise', sources: [IT + 'Viticoltura_in_Molise', EN + 'Tintilia'],
      description: 'Pequena região do sul, entre Abruzzo, Puglia, Lácio e Campânia; seus vinhos misturam traços do Abruzzo e da Puglia. A Tintilia simboliza o renascimento da viticultura local. Sem DOCG; DOC: Biferno, Molise, Pentro di Isernia e Tintilia del Molise (2011).',
      climate: '', soils: '', altitude: '', history: 'Viticultura dos tempos de romanos e samnitas; a Tintilia é citada desde o século XIX.',
      grapes: ['Tintilia', 'Montepulciano', 'Aglianico'], grapes_other: ['Sangiovese', 'Trebbiano Toscano'],
      notable_wines: 'Tintilia del Molise, Biferno',
      subregions: [
        sub('Tintilia del Molise', 'DOC', 'Campobasso, Italia', 'DOC de 2011 nas províncias de Campobasso e Isernia; o nome deve vir de "tinta".', ['Tintilia'], [], '', EN + 'Tintilia'),
        sub('Biferno', 'DOC', 'Larino, Campobasso, Italia', 'DOC da província de Campobasso.', ['Montepulciano'], [], '', IT + 'Viticoltura_in_Molise'),
        sub('Pentro di Isernia', 'DOC', 'Isernia, Italia', 'DOC da província de Isernia.', [], [], '', IT + 'Viticoltura_in_Molise')
      ] },

    { name: 'Campânia', geo: 'Campania', sources: [IT + 'Viticoltura_in_Campania', EN + 'Taurasi_(wine)', EN + 'Fiano_(grape)', EN + 'Greco_(grape)'],
      description: 'Sul da Itália; uvas trazidas pelos gregos — Aglianico, Greco, Fiano, Falanghina, Biancolella e Piedirosso ("Aglianico" viria de "Ellenico"). Qualidade crescente desde 1980. DOCG: Taurasi, Fiano di Avellino, Greco di Tufo e Aglianico del Taburno.',
      climate: '', soils: 'Vulcânicos em várias zonas (Vesúvio, tufo de Irpinia, Campi Flegrei).', altitude: '',
      history: 'O antigo Falernum era da região; o Asprinio era o vinho mais produzido no século XIV.',
      grapes: ['Aglianico', 'Fiano', 'Greco', 'Falanghina', 'Piedirosso'],
      grapes_other: ['Coda di Volpe', 'Biancolella', 'Asprinio', 'Sciascinoso'],
      notable_wines: 'Taurasi ("Barolo do Sul"), Fiano di Avellino, Greco di Tufo, Falanghina del Sannio, Lacryma Christi del Vesuvio, Falerno del Massico, Aglianico del Taburno',
      subregions: [
        sub('Taurasi', 'DOCG', 'Taurasi, Avellino, Italia', 'Tinto encorpado de Aglianico (com Piedirosso e Barbera permitidos), 3 anos de envelhecimento, um deles em castanheiro ou carvalho; ideal com carnes vermelhas assadas.', ['Aglianico'], [], '', EN + 'Taurasi_(wine)'),
        sub('Fiano di Avellino', 'DOCG', 'Lapio, Avellino, Italia', 'Branco de Fiano na província de Avellino (Irpinia): mel, especiarias e flores, com potencial de guarda.', ['Fiano'], [], '', EN + 'Fiano_(grape)'),
        sub('Greco di Tufo', 'DOCG', 'Tufo, Avellino, Italia', 'Branco de Greco em solos de tufo vulcânico; pêssego e notas herbáceas com a idade.', ['Greco'], [prod('Mastroberardino', 'Piero Mastroberardino liderou o projeto da Villa dos Mistérios, em Pompeia')], '', EN + 'Greco_(grape)'),
        sub('Sannio e Taburno', 'DOC / DOCG', 'Guardia Sanframondi, Benevento, Italia', 'Falanghina del Sannio (subzonas Guardia Sanframondi, Sant\'Agata dei Goti, Solopaca, Taburno) e Aglianico del Taburno DOCG.', ['Falanghina', 'Aglianico'], [], 'Falanghina del Sannio, Aglianico del Taburno', IT + 'Viticoltura_in_Campania'),
        sub('Vesuvio', 'DOC', 'Boscotrecase, Napoli, Italia', 'Lacryma Christi nas encostas do Vesúvio: branco de Verdeca e Coda di Volpe (com Falanghina, Caprettone, Greco); tinto de Piedirosso e Sciascinoso.', ['Coda di Volpe', 'Piedirosso', 'Falanghina'], [], 'Lacryma Christi del Vesuvio', EN + 'Lacryma_Christi'),
        sub('Falerno del Massico', 'DOC', 'Sessa Aurunca, Caserta, Italia', 'Tinto DOC de 1989 na província de Caserta, na mesma área do lendário Falernum romano.', [], [], '', EN + 'Falerno_del_Massico'),
        sub('Campi Flegrei, Ischia e Costa d\'Amalfi', 'DOC', 'Pozzuoli, Napoli, Italia', 'DOCs costeiras e insulares: Campi Flegrei, Ischia, Capri e Costa d\'Amalfi (Furore, Ravello, Tramonti).', [], [], '', IT + 'Viticoltura_in_Campania')
      ] },

    { name: 'Puglia', geo: 'Puglia', sources: [IT + 'Viticoltura_in_Puglia', EN + 'Salice_Salentino_(wine)', EN + 'Negroamaro'],
      description: 'O "salto da bota"; em 2020 foi a 2ª região italiana em volume de vinho. Primitivo teria sido trazido pelos ilírios; Uva di Troia e Negroamaro, pelos gregos, que também introduziram a condução em alberello. Por muito tempo exportou vinho de corte; a notoriedade de qualidade veio nos anos 1990. DOCG: Primitivo di Manduria Dolce Naturale e três de Castel del Monte.',
      climate: 'Verões quentes (o Negroamaro resiste bem à seca).', soils: 'Calcários (Salento).', altitude: '',
      history: 'Plínio citou a Malvasia Nera de Brindisi, o Negroamaro e a Uva di Troia; Frederico II plantou vinhas junto a Castel del Monte.',
      grapes: ['Primitivo', 'Negroamaro', 'Nero di Troia'], grapes_other: ['Malvasia Nera', 'Bombino Nero', 'Ottavianello', 'Fiano'],
      notable_wines: 'Primitivo di Manduria, Salice Salentino, Castel del Monte, Gioia del Colle Primitivo, Brindisi, Copertino, Locorotondo',
      subregions: [
        sub('Salento', 'Zona', 'Salice Salentino, Lecce, Italia', 'Península do Salento: Negroamaro e Primitivo. Salice Salentino (DOC 1976) é sobretudo tinto de Negroamaro, com versões branca e rosé; outras DOC: Brindisi, Copertino, Leverano, Squinzano, Nardò, Alezio.', ['Negroamaro', 'Malvasia Nera'], [], 'Salice Salentino, Brindisi, Copertino', EN + 'Salice_Salentino_(wine)'),
        sub('Manduria', 'DOC / DOCG', 'Manduria, Taranto, Italia', 'Primitivo di Manduria DOC (Brindisi e Taranto) e a DOCG Primitivo di Manduria Dolce Naturale. Plínio chamou Manduria de "viticulosa", rica em vinhas.', ['Primitivo'], [], 'Primitivo di Manduria, Primitivo di Manduria Dolce Naturale', IT + 'Viticoltura_in_Puglia'),
        sub('Castel del Monte', 'DOC / DOCG', 'Andria, Barletta-Andria-Trani, Italia', 'Em torno do castelo de Frederico II; DOCGs Castel del Monte Nero di Troia Riserva, Rosso Riserva e Bombino Nero.', ['Nero di Troia', 'Bombino Nero'], [], '', IT + 'Viticoltura_in_Puglia'),
        sub('Gioia del Colle', 'DOC', 'Gioia del Colle, Bari, Italia', 'DOC da província de Bari, conhecida pelo Primitivo.', ['Primitivo'], [], '', IT + 'Viticoltura_in_Puglia'),
        sub('Monti Dauni e Tavoliere', 'Zona', 'Lucera, Foggia, Italia', 'Norte da Puglia (Foggia): Tavoliere delle Puglie, Cacc\'e mmitte di Lucera, San Severo.', ['Nero di Troia'], [], '', IT + 'Viticoltura_in_Puglia')
      ] },

    { name: 'Basilicata', geo: 'Basilicata', sources: [IT + 'Viticoltura_in_Basilicata', EN + 'Aglianico_del_Vulture'],
      description: 'A antiga Lucânia; o Aglianico é a uva principal e a zona de maior destaque é o Vulture, ao norte de Potenza, com vinhas antiquíssimas. Única DOCG: Aglianico del Vulture Superiore (2011); DOC: Aglianico del Vulture, Matera, Terre dell\'Alta Val d\'Agri, Grottino di Roccanova.',
      climate: '', soils: 'Vulcânicos no Vulture.', altitude: '', history: 'Tradição desde a Grécia antiga; Horácio, nascido em Venosa, elogiava os vinhos da zona.',
      grapes: ['Aglianico', 'Malvasia di Basilicata'], grapes_other: ['Cabernet Sauvignon', 'Merlot'],
      notable_wines: 'Aglianico del Vulture, Aglianico del Vulture Superiore',
      subregions: [
        sub('Vulture', 'DOC / DOCG', 'Rionero in Vulture, Potenza, Italia', 'Solos vulcânicos do monte Vulture; DOC desde 1971 e DOCG para o Superiore (13,5% mínimo, 3 anos; Riserva 5, dois em madeira). Considerado um dos melhores tintos da Itália.', ['Aglianico'], [], 'Aglianico del Vulture Superiore', EN + 'Aglianico_del_Vulture'),
        sub('Matera', 'DOC', 'Matera, Italia', 'DOC com sete tipologias.', [], [], '', IT + 'Viticoltura_in_Basilicata')
      ] },

    { name: 'Calábria', geo: 'Calabria', sources: [EN + 'Calabrian_wine', IT + 'Viticoltura_in_Calabria'],
      description: 'Ponta da bota; mais de 90% de tintos, muitos de Gaglioppo. Só cerca de 4% da produção é DOC; boa parte vira vinho de corte para o norte. Os tintos de Cirò são os de maior projeção; a DOCG Cirò Classico foi reconhecida em 16/11/2023.',
      climate: '', soils: '', altitude: '', history: 'Os gregos chamavam a região de "Enotria" (terra do vinho); o atleta Milão de Crotona, dizem, bebia 10 litros de Cirò por dia.',
      grapes: ['Gaglioppo', 'Magliocco', 'Greco Nero'], grapes_other: ['Nerello Mascalese', 'Aglianico', 'Greco', 'Muscat of Alexandria'],
      notable_wines: 'Cirò, Greco di Bianco (doce), Savuto, Melissa',
      subregions: [
        sub('Cirò', 'DOC / DOCG', 'Cirò Marina, Crotone, Italia', 'Encostas orientais da Sila até a costa jônica; o coração clássico fica em Cirò e Cirò Marina (Crotone). Os tintos são os vinhos calabreses de maior projeção; rosés e brancos (mínimo 90% Greco Bianco) em pequena quantidade. DOCG Cirò Classico desde 2023.', ['Greco'], [], 'Cirò Classico', EN + 'Calabrian_wine'),
        sub('Greco di Bianco', 'DOC', 'Bianco, Reggio Calabria, Italia', 'Vinho doce de sobremesa, em estilo passito parcial, de um clone de Greco Bianco; cor âmbar profunda, cítricos e ervas (província de Reggio Calabria).', ['Greco'], [], '', IT + 'Viticoltura_in_Calabria'),
        sub('Savuto e Terre di Cosenza', 'DOC', 'Rogliano, Cosenza, Italia', 'DOCs das províncias de Cosenza e Catanzaro.', [], [], '', IT + 'Viticoltura_in_Calabria')
      ] },

    { name: 'Sicília', geo: 'Sicilia', sources: [IT + 'Viticoltura_in_Sicilia', EN + 'Etna_DOC', EN + 'Marsala_wine', EN + 'Cerasuolo_di_Vittoria'],
      description: 'Produção de vinho entre as mais antigas do mundo (resíduos de 6.000 anos). Cerca de 110.000 ha; só a província de Trapani produz 10% do vinho italiano. Por décadas forneceu vinho de corte; desde os anos 1970 multiplicaram-se as DOC. Única DOCG: Cerasuolo di Vittoria; DOC Sicilia (2011) para toda a ilha.',
      climate: 'Quente e seco; o Etna tem vinhas de altitude em solo vulcânico.', soils: 'Vulcânicos no Etna.', altitude: 'No Etna, vinhas a cerca de 950–1.050 m.',
      history: 'O Marsala foi o primeiro vinho DOC da história italiana; cooperativas criadas nos anos 1950 (Settesoli em Menfi, Cantina Sociale di Trapani).',
      grapes: ["Nero d'Avola", 'Nerello Mascalese', 'Carricante', 'Grillo', 'Catarratto', 'Frappato'],
      grapes_other: ['Inzolia', 'Muscat of Alexandria', 'Nerello Cappuccio', 'Malvasia di Lipari', 'Syrah', 'Chardonnay'],
      notable_wines: 'Etna Rosso e Bianco, Marsala, Cerasuolo di Vittoria, Pantelleria, Malvasia delle Lipari, Faro',
      subregions: [
        sub('Etna', 'DOC', 'Castiglione di Sicilia, Catania, Italia', 'Ligada ao maior vulcão ativo da Europa; DOC desde 1968. Tintos de Nerello Mascalese (com Nerello Cappuccio) e brancos de Carricante.', ['Nerello Mascalese', 'Nerello Cappuccio', 'Carricante'], [], 'Etna Rosso, Etna Bianco', EN + 'Etna_DOC'),
        sub('Marsala', 'DOC', 'Marsala, Trapani, Italia', 'Vinho fortificado, seco ou doce; DOC desde 1969. Popularizado em 1773 pelo comerciante inglês John Woodhouse; envelhecido pelo processo "in perpetuum".', ['Grillo', 'Catarratto', 'Inzolia'],
          [prod('Ingham-Whitaker', 'fundada por Benjamin Ingham'), prod('Florio', 'Vincenzo Florio, 1833')], 'Marsala Vergine, Superiore, Fine', EN + 'Marsala_wine'),
        sub('Vittoria', 'DOCG', 'Vittoria, Ragusa, Italia', 'Cerasuolo di Vittoria: tinto seco de Nero d\'Avola (50–70%) e Frappato; mínimo 13% de álcool; DOC em 1973 e primeira DOCG da Sicília (2005). "Cerasuolo" = vermelho-cereja.', ["Nero d'Avola", 'Frappato'], [], 'Cerasuolo di Vittoria', EN + 'Cerasuolo_di_Vittoria'),
        sub('Pantelleria', 'DOC', 'Pantelleria, Trapani, Italia', 'Ilha ao sul da Sicília; vinhos de Zibibbo (Muscat of Alexandria).', ['Muscat of Alexandria'], [], 'Passito di Pantelleria', IT + 'Viticoltura_in_Sicilia'),
        sub('Menfi e Sicília ocidental', 'DOC', 'Menfi, Agrigento, Italia', 'Oeste da ilha: Menfi, Alcamo, Erice, Monreale, Contea di Sclafani, Sambuca.', ['Grillo', 'Catarratto', "Nero d'Avola"], [prod('Cantine Settesoli', 'cooperativa de Menfi'), prod('Cantina Sociale di Trapani')], '', IT + 'Viticoltura_in_Sicilia'),
        sub('Noto', 'DOC', 'Noto, Siracusa, Italia', 'Sudeste da ilha (Val di Noto): Noto e Siracusa.', ["Nero d'Avola"], [], '', IT + 'Viticoltura_in_Sicilia'),
        sub('Faro e Eólias', 'DOC', 'Messina, Italia', 'Faro (Messina) e a Malvasia delle Lipari nas Ilhas Eólias.', ['Nerello Mascalese', 'Malvasia di Lipari'], [], 'Faro, Malvasia delle Lipari', IT + 'Viticoltura_in_Sicilia')
      ] },

    { name: 'Sardenha', geo: 'Sardegna', sources: [IT + 'Viticoltura_in_Sardegna', EN + 'Sardinian_wine'],
      description: 'Ilha com tradição milenar; a vinha é a principal cultura arbórea. Estudos indicam vinho já na época nurágica — o Cannonau seria um dos vinhos mais antigos do Mediterrâneo. Única DOCG: Vermentino di Gallura. A empresa Sella & Mosca foi decisiva para levar os vinhos sardos para fora da ilha.',
      climate: '', soils: 'Na Ogliastra, solos de origem granítica, ventilados pelo mar.', altitude: '',
      history: 'Eleonora d\'Arborea, na Carta de Logu, proibiu manter vinhas malcuidadas.',
      grapes: ['Cannonau', 'Vermentino', 'Carignan', 'Monica', 'Vernaccia di Oristano'],
      grapes_other: ['Bovale', 'Nuragus', 'Nasco', 'Girò', 'Malvasia', 'Moscato Bianco'],
      notable_wines: 'Cannonau di Sardegna, Vermentino di Gallura, Vermentino di Sardegna, Carignano del Sulcis, Vernaccia di Oristano, Monica di Sardegna, Malvasia di Bosa',
      subregions: [
        sub('Gallura', 'DOCG', 'Tempio Pausania, Sassari, Italia', 'Vermentino di Gallura, única DOCG da ilha, no nordeste.', ['Vermentino'], [], 'Vermentino di Gallura', IT + 'Viticoltura_in_Sardegna'),
        sub('Cannonau di Sardegna', 'DOC', 'Jerzu, Sardegna, Italia', 'DOC de toda a ilha para o Cannonau (Grenache); a Ogliastra, com solos graníticos, é zona de excelência.', ['Grenache'], [], '', IT + 'Viticoltura_in_Sardegna'),
        sub('Sulcis', 'DOC', 'Santadi, Sardegna, Italia', 'Carignano del Sulcis, no sudoeste.', ['Carignan'], [], '', IT + 'Viticoltura_in_Sardegna'),
        sub('Oristano', 'DOC', 'Oristano, Italia', 'Vernaccia di Oristano, Malvasia di Bosa, Arborea e Terralba (Bovale).', ['Vernaccia di Oristano', 'Bovale', 'Malvasia'], [], 'Vernaccia di Oristano, Malvasia di Bosa', EN + 'Italian_wine'),
        sub('Alghero', 'DOC', 'Alghero, Sassari, Italia', 'DOC da área de Alghero, no noroeste.', [], [prod('Sella & Mosca', 'levou os vinhos sardos para fora da ilha')], '', IT + 'Viticoltura_in_Sardegna')
      ] }
  ];

  var countries = [
    { name: 'Itália', sources: [EN + 'Italian_wine'],
      description: 'Um dos maiores produtores de vinho do mundo, com 20 regiões vinícolas e um sistema de denominações em pirâmide: DOCG, DOC e IGT. Fora das denominações, os "Super Toscanos" mostraram, desde os anos 1970, que qualidade não depende só das regras.' }
  ];

  return { code: 'IT', version: 2, countries: countries, regions: regions, country_of: 'Itália' };
})());
