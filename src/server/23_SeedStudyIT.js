/**
 * CARTÕES DE ESTUDO — Itália (material de aula; v1 panorama e Centro, v2 Norte e Sul/ilhas).
 * Tópicos curtos; o material pode ter erros: "conferir" = não confirmado em fonte aberta (fica fora do quiz).
 * Itens: [chave, texto, marca?]. Para 'denominacoes': [nome, descrição, classificação].
 */
var STUDY_PACKS = STUDY_PACKS || [];

STUDY_PACKS.push((function () {
  var cards = [];
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function P(title, kind, items) { cards.push({ topic: 'pais', ref: ['Itália'], title: title, kind: kind, items: mk(items) }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? ['Itália', region, sub] : ['Itália', region], title: title, kind: kind, items: mk(items) });
  }

  // ---------- País ----------
  P('A Itália em números (2022)', 'numeros', [
    ['718 mil ha', 'Área plantada: 3ª do mundo (Espanha 955 mil, França 812 mil)'],
    ['4,9 bi L', 'Produção: 1ª do mundo (França 4,5 bi, Espanha 3,5 bi)'],
    ['2,3 bi L', 'Consumo: 2º maior da União Europeia'],
    ['33,9 L', 'Consumo por habitante (Portugal lidera, com 67,5 L)']
  ]);
  P('Marcos do vinho italiano', 'linha', [
    ['Séc. I a.C.', 'Romanos introduzem a videira, segundo o slide', 'conferir'],
    ['Idade Média', 'Tradição vinícola floresce em mosteiros e abadias'],
    ['Renascença', 'Inovações técnicas e maior apreciação cultural do vinho'],
    ['1716', 'Área do Chianti é demarcada: nasce a ideia de proteger a origem'],
    ['1861', 'Unificação italiana: revitalização e modernização da viticultura'],
    ['1963', 'Sistema DOC: padrões de qualidade por região'],
    ['', 'Super Toscanos: produtores desafiam as regras DOC e criam vinhos de alta qualidade'],
    ['', 'DOCG: destaca vinhos de alta qualidade e autenticidade'],
    ['', 'IGT: flexibilidade para bons vinhos fora do DOC/DOCG'],
    ['2009', 'Prosecco tem a região demarcada; a uva é rebatizada Glera']
  ]);
  P('Estilos de destaque', 'fatos', [
    ['Espumantes', 'Franciacorta, Prosecco'],
    ['Brancos', 'Friuli, Sicília'],
    ['Tintos da Toscana', 'Brunello, Chianti'],
    ['Tintos do Piemonte', 'Barolo, Barbaresco'],
    ['Campânia e Puglia', 'Taurasi, Primitivo']
  ]);

  // ---------- Toscana ----------
  R('Toscana', '', 'Toscana em resumo', 'numeros', [
    ['63 mil ha', 'Vinhedos (5ª maior produtora da Itália)'],
    ['11', 'DOCGs: 3ª região em número de DOCGs'],
    ['2', 'Zonas: costa e colinas'],
    ['Sangiovese', 'Casta mais importante; Chianti e Brunello são os mais famosos']
  ]);
  R('Toscana', '', 'Sangiovese', 'fatos', [
    ['Origem', 'Natural da Toscana; 1º registro no séc. XV'],
    ['Nome', 'De "sanguis Jovis": sangue de Júpiter'],
    ['Perfil', 'Casca grossa, muitos taninos e antocianinas: vinhos encorpados e aromáticos'],
    ['Sinônimos', 'Brunello, Morellino, Prugnolo Gentile, Tignolo, Canina']
  ]);
  R('Toscana', 'Montalcino', 'Brunello di Montalcino', 'fatos', [
    ['Criador', 'Ferruccio Biondi-Santi, propriedade Il Greppo'],
    ['1ª safra', '1888; até 1950 só os Biondi-Santi o faziam'],
    ['Uva', 'Sangiovese Grosso: 65 ha até 1970, cerca de 1.600 ha hoje'],
    ['Estágio', 'Mínimo 24 meses em barril; Riserva, 30 meses'],
    ['Volume', 'Cerca de 7 milhões de litros por ano'],
    ['Curiosidade', 'Em 2012 um ex-funcionário da Case Basse (Soldera) abriu os tanques: 62 mil litros perdidos (safras 2007 a 2012)']
  ]);
  R('Toscana', 'Chianti (e subzonas)', 'Chianti', 'fatos', [
    ['Nome', 'Vem de uma cadeia de montanhas; área demarcada pelo Duque da Toscana em 1716'],
    ['Corte', 'Sangiovese em pelo menos 80%; também Canaiolo, Colorino, Cabernet e Merlot'],
    ['Brancas', 'Barão Ricasoli (1872) permitiu Malvasia e Trebbiano; proibidas desde 2006'],
    ['100% Sangiovese', 'Possível desde 1995'],
    ['Riserva', '21 meses em barril e 3 em garrafa; álcool mínimo 12%'],
    ['Satélites', 'Em 1932 foram incorporados Colli Aretini, Colli Senesi, Montalbano, Colli Pisane, Rufina e Montespertoli'],
    ['Nomes grandes', 'Antinori, Ricasoli, La Massa, Isole e Olena']
  ]);
  R('Toscana', 'Chianti (e subzonas)', 'Governo alla Toscana', 'lista', [
    ['', 'Técnica do Chianti: parte das uvas é desidratada por 6 semanas'],
    ['', 'Essas uvas entram no mosto já fermentado do resto da colheita'],
    ['', 'Objetivo: mais corpo e intensidade aromática']
  ]);
  R('Toscana', 'Montepulciano', 'Vino Nobile di Montepulciano', 'fatos', [
    ['Onde', 'Comuna de Montepulciano, sudeste da Toscana'],
    ['Uvas', 'Sangiovese (Prugnolo Gentile); também Canaiolo e Mammolo'],
    ['Estágio', '24 meses em barril; Riserva, 38 meses em carvalho'],
    ['Regra', 'A DOCG exige carvalho da Eslavônia (centro da Croácia)']
  ]);
  R('Toscana', 'San Gimignano', 'Vernaccia di San Gimignano', 'fatos', [
    ['Destaque', 'Única DOCG de vinho branco da Toscana, segundo o slide', 'conferir'],
    ['Cidade', 'Medieval, patrimônio da humanidade, no centro da Toscana; produção desde 1276'],
    ['Uva', 'Vernaccia: mineralidade como marca'],
    ['Riserva', '11 meses em barril e 3 em garrafa']
  ]);
  R('Toscana', '', 'Vin Santo', 'fatos', [
    ['O que é', 'Vinho doce de uvas desidratadas; feito também em Úmbria, Abruzzo, Vêneto…'],
    ['Uvas na Toscana', 'Malvasia e Trebbiano'],
    ['Occhio di Pernice', 'Com Sangiovese na mistura: cor acastanhada, "olho de perdiz"'],
    ['Calendário', 'Colheita em setembro, prensa em março'],
    ['Álcool', '15% a 16%'],
    ['Estágio', '2 a 6 anos em barris de carvalho']
  ]);
  R('Toscana', '', 'Outras denominações da Toscana', 'denominacoes', [
    ['Elba Aleatico Passito', 'Doce de Aleatico', 'DOCG'],
    ['Montecucco Sangiovese', 'Tinto de Sangiovese', 'DOCG'],
    ['Morellino di Scansano', 'Tinto de Sangiovese', 'DOCG'],
    ['Suvereto', 'Tinto de Cabernet, Merlot e Sangiovese', 'DOCG'],
    ['Val di Cornia Rosso', 'Tinto de Cabernet, Merlot e Sangiovese', 'DOCG']
  ]);

  // ---------- Úmbria ----------
  R('Úmbria', '', 'Úmbria em resumo', 'fatos', [
    ['Área', 'Pouco mais de 19.000 ha'],
    ['Local', 'Entre a Toscana e o Marche'],
    ['Fama', 'Brancos Orvieto'],
    ['Castas', 'Sangiovese, Sagrantino, Canaiolo, Trebbiano, Grechetto, Malvasia']
  ]);
  R('Úmbria', '', 'Denominações da Úmbria', 'denominacoes', [
    ['Orvieto', 'Brancos de Trebbiano (Procanico), Malvasia, Grechetto e Drupeggio', 'DOC'],
    ['Torgiano Bianco', 'Trebbiano e Grechetto', 'DOC'],
    ['Torgiano Rosso Riserva', 'Sangiovese e Canaiolo; 3 anos em barril', 'DOCG'],
    ['Sagrantino di Montefalco', 'Sagrantino, exclusiva da Úmbria (cerca de 600 ha); também versão doce "Passito"', 'DOCG']
  ]);
  R('Úmbria', '', 'Grandes produtores da Úmbria', 'produtores', [
    ['Arnaldo Caprai', ''], ['Cervaro della Sala', ''], ['Cecchi', ''], ['Giorgio Lungarotti', ''], ['Antinori', ''],
    ['Palazzone', ''], ['Castello delle Regine', ''], ['Frescobaldi', ''], ['Campo del Guardiano', '']
  ]);

  // ---------- Lácio ----------
  R('Lácio', '', 'Lácio em resumo', 'fatos', [
    ['Área', 'Pouco mais de 16.000 ha'],
    ['Fama', '"Terra dos vinhos brancos"; tintos são menos de 20%'],
    ['DOCGs', 'Apenas 3'],
    ['Castas', 'Cesanese, Sangiovese, Canaiolo, Malvasia, Trebbiano, Bombino']
  ]);
  R('Lácio', '', 'Denominações do Lácio', 'denominacoes', [
    ['Cannellino di Frascati', 'Branco das comunas de Frascati, Malvasia (70%) e Trebbiano', 'DOCG'],
    ['Frascati Superiore', 'Branco; Malvasia, Trebbiano, Bellone, Bombino Bianco e Greco (nenhuma passa de 30%); álcool mínimo 12%', 'DOCG'],
    ['Cesanese del Piglio', 'Tinto 100% Cesanese em três estilos: clássico, superiore e superiore riserva', 'DOCG']
  ]);
  R('Lácio', '', 'Grandes produtores do Lácio', 'produtores', [
    ['Castel de Paolis', ''], ['Fontana Candida', ''], ['Di Mauro', ''], ['Villa Simone', ''], ['Colle Picchioni', ''], ['Di Norante', '']
  ]);

  // ---------- Marche e Abruzzo ----------
  R('Marche', '', 'Marche e Abruzzo em resumo', 'fatos', [
    ['Área', 'Juntas, passam de 55.000 ha'],
    ['DOCGs', 'Marche tem 5; Abruzzo, apenas 1'],
    ['Estilos', 'De brancos secos a espumantes tintos'],
    ['Costa', 'As áreas costeiras têm os melhores custo-benefícios do Centro'],
    ['Montepulciano', 'Casta forte em Abruzzo e também presente no Marche']
  ]);
  R('Marche', '', 'Castas de Marche e Abruzzo', 'lista', [
    ['', 'Montepulciano (Abruzzo)'], ['', 'Vernaccia Nera (Marche)'], ['', 'Verdicchio'], ['', 'Trebbiano'], ['', 'Merlot'], ['', 'Albana']
  ]);
  R('Marche', '', 'Denominações do Marche', 'denominacoes', [
    ['Verdicchio dei Castelli di Jesi', 'Branco de Verdicchio', 'DOCG'],
    ['Verdicchio di Matelica', 'Branco de Verdicchio', 'DOCG'],
    ['Offida', 'Tintos de Montepulciano e brancos de Pecorino', 'DOCG'],
    ['Conero Rosso', 'Tinto de Montepulciano', 'DOCG'],
    ['Vernaccia di Serrapetrona', 'Espumante tinto de Vernaccia Nera', 'DOCG']
  ]);
  R('Abruzzo', '', 'Denominações de Abruzzo', 'denominacoes', [
    ['Montepulciano d\'Abruzzo', 'Tinto de Montepulciano', 'DOCG'],
    ['Controguerra', 'Tintos e brancos', 'DOC']
  ]);
  R('Marche', '', 'Grandes produtores do Marche', 'produtores', [
    ['Sartarelli', ''], ['Saladini Pilastri', ''], ['Bucci', '']
  ]);
  R('Abruzzo', '', 'Grandes produtores de Abruzzo', 'produtores', [
    ['Valentini', ''], ['Illuminati', ''], ['Masciarelli', '']
  ]);


  // =====================  NORTE (v2)  =====================
  P('Norte da Itália: vinhos de cada região', 'fatos', [
    ['Piemonte', 'Barolo e Barbaresco'],
    ['Vêneto', 'Amarone e Prosecco'],
    ['Friuli', 'Brancos Friulano e Pinot Grigio'],
    ['Lombardia', 'Espumante Franciacorta'],
    ['Trentino', 'Espumante Trento e tinto Teroldego'],
    ['Vale d\'Aosta', 'Branco único: Blanc de Morgex et de La Salle'],
    ['Ligúria', 'Cinque Terre e Sciacchetrà']
  ]);
  P('Cozinha do Norte', 'fatos', [
    ['Piemonte', 'Risotto al Barolo; vitello tonnato (vitelo frio com molho cremoso de atum); trufas, carne bovina e queijos envelhecidos'],
    ['Vêneto', 'Polenta; risotto al nero di seppia (arroz com tinta de lula); frutos do mar'],
    ['Lombardia', 'Ossobuco alla milanese (vitelo com vinho branco, tomate e açafrão); risoto milanês com açafrão'],
    ['Trentino', 'Canederli'],
    ['Vale d\'Aosta', 'Fonduta'],
    ['Ligúria', 'Pesto'],
    ['Friuli', 'Frico: queijo Montasio com batatas, crosta crocante']
  ]);
  P('Grandes produtores do Norte', 'produtores', [
    ['Giuseppe Mascarello', ''], ['Giacomo Conterno', ''], ['Angelo Gaja', ''], ['La Spinetta', ''], ['Zenato', ''],
    ['Giuseppe Quintarelli', ''], ['Allegrini', ''], ['Speri', ''], ['Tommaso Bussola', ''], ['Borgo del Tiglio', '']
  ]);

  // ---------- Piemonte ----------
  R('Piemonte', '', 'Piemonte em resumo', 'fatos', [
    ['Solo e clima', 'Argila e calcário; clima continental'],
    ['Área', 'Cerca de 80 mil ha, segundo o slide', 'conferir'],
    ['DOCGs', '19 (o slide diz 18)', 'corrigido'],
    ['Tintas', 'Nebbiolo, Barbera, Dolcetto'],
    ['Brancas', 'Moscato, Arneis, Cortese'],
    ['Colinas', 'Barolo e Barbaresco vêm das colinas das Langhe']
  ]);
  R('Piemonte', '', 'Nebbiolo', 'fatos', [
    ['Origem', 'Piemonte; raramente se adapta fora dele'],
    ['Sinônimos', 'Chiavenasca, Spanna'],
    ['Nome', 'De "nebbia": névoa que cobre os vinhedos de manhã'],
    ['Cultivo', 'Delicada e difícil; amadurecimento tardio e rendimento baixo (vinhos caros)'],
    ['Estilo', 'Casca grossa: muito tanino; acidez alta; cor clara (pouca antocianina)'],
    ['Aromas', 'Terrosos, florais e frutados']
  ]);
  R('Piemonte', '', 'Castas do Piemonte', 'lista', [
    ['', 'Brancas: Cortese, Moscato, Arneis'], ['', 'Tintas: Croatina (Bonarda), Dolcetto, Barbera, Nebbiolo']
  ]);
  R('Piemonte', 'Barolo', 'Barolo', 'fatos', [
    ['Apelido', '"Rei dos vinhos e vinho dos reis"'],
    ['Uva', 'Só Nebbiolo'],
    ['Denominação', 'DOC em 1966 e DOCG em 1980 (o slide diz DOCG em 1966)', 'corrigido'],
    ['Estágio', 'Mínimo 3 anos em barril; Riserva, 5 anos'],
    ['Álcool', 'Mínimo 13%'],
    ['Extrato seco', 'Mínimo 22 g/L'],
    ['Comunas', 'Barolo, Castiglione Falletto e Serralunga d\'Alba inteiras, mais parcelas de outras oito aldeias; La Morra é a mais importante']
  ]);
  R('Piemonte', 'Barolo', 'Três zonas do Barolo', 'fatos', [
    ['Vale de Serralunga', 'Vinhos encorpados e potentes, taninos marcados, longa guarda'],
    ['Vale do Barolo', 'Barolo e La Morra: mais delicados, elegantes e macios, com grande estrutura'],
    ['Castiglione Falletto', 'Entre os dois vales; solo parecido com o de Serralunga: elegância do Barolo com potência de Serralunga']
  ]);
  R('Piemonte', 'Barbaresco', 'Barbaresco', 'fatos', [
    ['Apelido', '"Irmão mais novo" do Barolo; produção iniciada nos primeiros anos depois da 2ª guerra'],
    ['Uva', 'Só Nebbiolo; menos longevo que o Barolo'],
    ['Denominação', 'DOCG em 1968, segundo o slide', 'conferir'],
    ['Área', 'Pouco mais de 680 ha'],
    ['Estágio', 'Mínimo 3 anos em barril; Riserva, 5 anos'],
    ['Álcool', 'Mínimo 12,5%'],
    ['Extrato seco', 'Mínimo 20 g/L'],
    ['Comunas', 'Barbaresco, Neive e Treiso; destaques: Santo Stefano e Bricco di Neive']
  ]);
  R('Piemonte', 'Langhe', 'Langhe', 'fatos', [
    ['Onde', 'Província de Cuneo, margem direita do Tanaro; a região piemontesa de maior prestígio'],
    ['Solo', 'Calcário branco, arenoso, de baixa acidez'],
    ['Tintas', 'Nebbiolo, Barbera, Dolcetto, Freisa, Grignolino'],
    ['Brancas', 'Arneis, Favorita, Moscato, Chardonnay'],
    ['Inclui', 'Barolo, Barbaresco e a cidade de Alba']
  ]);
  R('Piemonte', '', 'Outros vinhos do Piemonte', 'denominacoes', [
    ['Moscato d\'Asti', 'Doce, de método próprio de fermentação; álcool entre 5% e 7%; "2º vinho mais produzido da Itália (80 milhões de L)", segundo o slide', 'DOCG'],
    ['Roero', 'Tinto de Nebbiolo e versão branca (a mais famosa) de Arneis', 'DOCG'],
    ['Cortese di Gavi', 'Também Gavi di Gavi; prestigiado branco de Cortese', 'DOCG']
  ]);

  // ---------- Vêneto ----------
  R('Vêneto', '', 'Vêneto em resumo', 'numeros', [
    ['97 mil ha', 'Vinhedos'],
    ['28', 'DOCs'],
    ['14', 'DOCGs'],
    ['2', 'Estrelas: Prosecco (espumante) e Amarone (tinto de uvas secas)']
  ]);
  R('Vêneto', '', 'Castas do Vêneto', 'lista', [
    ['', 'Brancas: Trebbiano, Glera (Prosecco), Garganega, Pinot Grigio'], ['', 'Tintas: Molinara, Corvina, Rondinella']
  ]);
  R('Vêneto', 'Valpolicella', 'Valpolicella', 'fatos', [
    ['Uvas', 'Corvina, Corvinone e Rondinella'],
    ['Subzonas', 'Negrar, Marano, Sant\'Ambrogio e Fumane'],
    ['Classico', 'Feito na região tradicional do Valpolicella'],
    ['Estilos', 'Do Valpolicella leve ao robusto Amarone']
  ]);
  R('Vêneto', 'Valpolicella', 'Amarone e Recioto', 'fatos', [
    ['Amarone', 'Mesmas uvas; as uvas são parcialmente desidratadas: intensidade, riqueza e profundidade'],
    ['Recioto della Valpolicella', 'Doce (passito) de uvas secas; a fermentação é interrompida para manter o açúcar residual', 'DOCG']
  ]);
  R('Vêneto', 'Conegliano Valdobbiadene', 'Prosecco', 'fatos', [
    ['Uva', 'Glera, em Valdobbiadene e Conegliano'],
    ['Método', 'Charmat: segunda fermentação em tanques de aço inox (frescor e frutado)'],
    ['Cartizze', 'Vinhedo de Valdobbiadene, considerado o "Grand Cru" do Prosecco'],
    ['Estilos', 'De Brut a Dry (até 32 g/L de açúcar)'],
    ['Perfil', 'Leveza e efervescência; notas frutadas, florais e cítricas']
  ]);
  R('Vêneto', 'Soave', 'Soave', 'denominacoes', [
    ['Soave Superiore', 'Branco seco e mineral de Garganega (mín. 70%); "Superiore": mais álcool e envelhecimento', 'DOCG'],
    ['Recioto di Soave', 'Branco doce (passito) de Garganega (mín. 70%)', 'DOCG']
  ]);

  // ---------- Lombardia ----------
  R('Lombardia', '', 'Lombardia em resumo', 'fatos', [
    ['Área', 'Cerca de 23 mil ha'],
    ['Tintas', 'Nebbiolo, Barbera, Pinot Nero, Bonarda (Croatina)'],
    ['Brancas', 'Chardonnay, Pinot Bianco, Trebbiano'],
    ['Destaque', 'Franciacorta: espumante de método tradicional']
  ]);
  R('Lombardia', 'Franciacorta', 'Franciacorta', 'fatos', [
    ['DOCG', 'Desde 1995'],
    ['Uvas', 'Chardonnay, Pinot Nero, Pinot Bianco e L\'Erbamat'],
    ['Método', 'Tradicional: segunda fermentação na própria garrafa'],
    ['Estilos', 'Cinco: Franciacorta, Rosé, Saten, Millesimato e Riserva']
  ]);
  R('Lombardia', 'Valtellina', 'Valtellina', 'fatos', [
    ['Uva', 'Nebbiolo, localmente Chiavennasca'],
    ['Vinhedos', 'Encostas íngremes e ensolaradas'],
    ['Vinificação', 'Maceração prolongada e maturação em carvalho'],
    ['Subzonas', 'Sassella; o slide cita também Sforzato (um estilo, não uma subzona)', 'conferir'],
    ['Perfil', 'Elegante: frutado, floral e terroso']
  ]);
  R('Lombardia', '', 'Outras denominações da Lombardia', 'denominacoes', [
    ['Garda', 'Tintos, brancos e rosés ao redor do lago; Groppello, Marzemino, Sangiovese, Barbera, Chiaretto (rosé)', 'conferir'],
    ['Lugana Superiore', 'Branco de Trebbiano di Lugana (Verdicchio), margem sul do lago de Garda, com envelhecimento extra', 'conferir'],
    ['Oltrepò Pavese Metodo Classico', 'Espumante de Pinot Nero e Chardonnay', 'DOCG']
  ]);

  // ---------- Outras regiões do Norte ----------
  R('Trentino-Alto Adige', '', 'Trentino-Alto Adige', 'fatos', [
    ['Onde', 'Norte, na fronteira com Áustria e Suíça'],
    ['Brancas', 'Chardonnay, Pinot Grigio, Gewürztraminer'],
    ['Tintas', 'Lagrein, Teroldego, Pinot Nero'],
    ['Denominações', 'Trentino DOC, Alto Adige DOC, Trento DOC (espumantes); Teroldego Rotaliano DOC e Lagrein DOC (tintos)']
  ]);
  R('Friuli-Venezia Giulia', '', 'Friuli-Venezia Giulia', 'fatos', [
    ['Onde', 'Nordeste, na fronteira com Eslovênia e Áustria'],
    ['Brancas', 'Friulano, Pinot Grigio, Sauvignon Blanc'],
    ['Tintas', 'Merlot, Refosco, Cabernet Sauvignon'],
    ['Brancos DOC', 'Collio, Colli Orientali del Friuli, Friuli Isonzo'],
    ['Tintos DOC', 'Colli Orientali del Friuli Rosso, Friuli Isonzo Rosso']
  ]);
  R('Valle d\'Aosta', '', 'Vale d\'Aosta', 'fatos', [
    ['Onde', 'Noroeste, nos Alpes'],
    ['Uvas', 'Petit Rouge, Fumin, Prié Blanc'],
    ['Denominações', 'Valle d\'Aosta DOC, Valle d\'Aosta Pinot Noir DOC, Donnas DOC (tintos)'],
    ['Branco único', 'Blanc de Morgex et de La Salle']
  ]);
  R('Ligúria', '', 'Ligúria', 'fatos', [
    ['Onde', 'Noroeste, ao longo da costa'],
    ['Brancas', 'Vermentino, Pigato'],
    ['Tinta', 'Rossese'],
    ['Brancos DOC', 'Cinque Terre (e o doce Sciacchetrà), Colli di Luni'],
    ['Tintos DOC', 'Rossese di Dolceacqua, Golfo del Tigullio']
  ]);

  // =====================  SUL E ILHAS (v2)  =====================
  // ---------- Basilicata ----------
  R('Basilicata', '', 'Basilicata em resumo', 'fatos', [
    ['Área', 'Pouco mais de 9.000 ha'],
    ['Fama', 'A região vinícola mais "simples" da Itália; pouco mais de 10% dos vinhos são DOC ou DOCG'],
    ['Barris', 'Usa barris de segundo ou terceiro uso de outras regiões'],
    ['Monte Vulture', 'Vulcão adormecido que dá nome ao melhor vinho']
  ]);
  R('Basilicata', '', 'Aglianico', 'fatos', [
    ['Papel', 'Principal uva tinta da região'],
    ['Nome', 'Alusão a Helena de Troia, segundo o slide', 'conferir'],
    ['Perfil', 'Estrutura encorpada e fortes notas defumadas e tostadas, vindas das cascas']
  ]);
  R('Basilicata', '', 'Denominação da Basilicata', 'denominacoes', [
    ['Aglianico del Vulture', 'Única DOCG da Basilicata: só tintos de Aglianico', 'DOCG']
  ]);
  R('Basilicata', '', 'Grandes produtores da Basilicata', 'produtores', [
    ['Cantina di Venosa', ''], ['Paternoster', ''], ['D\'Angelo', ''], ['Damaschito', '']
  ]);

  // ---------- Campânia ----------
  R('Campânia', '', 'Campânia em resumo', 'fatos', [
    ['Área', 'Pouco mais de 21 mil ha'],
    ['Fama', 'A mais nobre do Sul da Itália'],
    ['Solos', 'Vulcânicos: vinhos extremamente encorpados'],
    ['Produtores', 'Mais de 260'],
    ['Estrela', 'Taurasi, o vinho mais importante']
  ]);
  R('Campânia', '', 'Castas da Campânia', 'lista', [
    ['', 'Tintas: Aglianico, Merlot, Cabernet Sauvignon'], ['', 'Brancas: Fiano, Greco, Falanghina']
  ]);
  R('Campânia', '', 'Denominações da Campânia', 'denominacoes', [
    ['Taurasi', 'Tinto de Aglianico; 3 anos em barris, segundo o slide', 'DOCG'],
    ['Aglianico del Taburno', 'Tintos e rosés de Aglianico', 'DOCG'],
    ['Fiano di Avellino', 'Branco de Fiano', 'DOCG'],
    ['Greco di Tufo', 'Branco de Greco', 'DOCG']
  ]);
  R('Campânia', '', 'Grandes produtores da Campânia', 'produtores', [
    ['Caggiano', ''], ['Fattoria Villa Matilde', ''], ['D\'Ambra', ''], ['Feudi di San Gregorio', ''], ['Molettieri', ''], ['Terredora', '']
  ]);

  // ---------- Puglia ----------
  R('Puglia', '', 'Puglia em resumo', 'fatos', [
    ['Tamanho', 'Gigante: cerca de 14% do vinho de toda a Itália'],
    ['Estilo', 'Os tintos são os grandes destaques'],
    ['DOCGs', 'Muito jovens; a região está evoluindo'],
    ['Províncias', 'Bari, Taranto, Salento e Lecce; Manduria é comuna de Taranto']
  ]);
  R('Puglia', '', 'Castas da Puglia', 'lista', [
    ['', 'Tintas: Primitivo, Bombino Nero, Nero di Troia, Aglianico'], ['', 'Brancas: Verdeca, Bianco d\'Alessano']
  ]);
  R('Puglia', '', 'Denominações da Puglia', 'denominacoes', [
    ['Castel del Monte Bombino Nero', 'Tinto de Bombino Nero', 'DOCG'],
    ['Castel del Monte Nero di Troia', 'Tinto de Nero di Troia', 'DOCG'],
    ['Castel del Monte Riserva', 'Tinto de várias castas', 'DOCG'],
    ['Primitivo di Manduria Dolce Naturale', 'Tinto doce de Primitivo', 'DOCG'],
    ['Primitivo di Manduria', 'Tinto de Primitivo (o slide diz que ainda não é DOCG)', 'DOC']
  ]);
  R('Puglia', '', 'Grandes produtores da Puglia', 'produtores', [
    ['Tormaresca', ''], ['Felline', ''], ['San Marzano', ''], ['Taurino', ''], ['Leone de Castris', ''], ['Rivera', '']
  ]);

  // ---------- Sicília ----------
  R('Sicília', '', 'Sicília em resumo', 'fatos', [
    ['Área', 'Pouco mais de 150 mil ha, segundo o slide', 'conferir'],
    ['Produção', 'Mais de 800 milhões de L por ano, segundo o slide', 'conferir'],
    ['Estilos', 'Brancos, tintos, rosés e doces'],
    ['Novidade', 'Mudanças positivas com a chegada de estrangeiros'],
    ['Perfil', 'Vinhos tendem a ser bem alcoólicos']
  ]);
  R('Sicília', '', 'Castas da Sicília', 'lista', [
    ['', 'Tintas: Nero d\'Avola, Frappato, Nerello Mascalese, Nerello Cappuccio'], ['', 'Brancas: Catarratto, Carricante']
  ]);
  R('Sicília', '', 'Denominações da Sicília', 'denominacoes', [
    ['Cerasuolo di Vittoria', 'Tinto de Nero d\'Avola e Frappato', 'DOCG'],
    ['Etna Rosso', 'Tintos e brancos com castas locais', 'DOC'],
    ['Moscato di Pantelleria', 'Branco doce de Zibibbo (Moscato), na ilha', 'DOC'],
    ['Passito di Pantelleria', 'Branco doce de Zibibbo (Moscato), na ilha', 'DOC']
  ]);
  R('Sicília', '', 'Grandes produtores da Sicília', 'produtores', [
    ['Benanti', ''], ['Colosi', ''], ['Donnafugata', ''], ['Calatrasi', ''], ['Firriato', ''], ['Gulfi', '']
  ]);

  // ---------- Sardenha ----------
  R('Sardenha', '', 'Sardenha em resumo', 'fatos', [
    ['Área', 'Pouco mais de 25.000 ha'],
    ['História', 'Pertenceu à Espanha até 1708'],
    ['Produção', 'Pouco mais de 80 milhões de L por ano'],
    ['Destaque', 'Os brancos']
  ]);
  R('Sardenha', '', 'Castas da Sardenha', 'lista', [
    ['', 'Cannonau (Garnacha)'], ['', 'Carignano'], ['', 'Monica'], ['', 'Vermentino']
  ]);
  R('Sardenha', '', 'Denominações da Sardenha', 'denominacoes', [
    ['Vermentino di Gallura', 'Branco de Vermentino', 'DOCG'],
    ['Carignano del Sulcis', 'Tinto de Carignano', 'DOC']
  ]);
  R('Sardenha', '', 'Grandes produtores da Sardenha', 'produtores', [
    ['Cantina Gallura', ''], ['Contini', ''], ['Capichera', ''], ['Planeta', '']
  ]);

  // Nível no quiz, por notoriedade (avaliação editorial; ajustável): medio = conhecido no mundo todo.
  var LEVELS = { 'A Itália em números (2022)': 'avancado',
    'Marcos do vinho italiano': 'avancado',
    'Estilos de destaque': 'medio',
    'Norte da Itália: vinhos de cada região': 'medio',
    'Cozinha do Norte': 'avancado',
    'Grandes produtores do Norte': 'avancado',
    'Toscana em resumo': 'medio',
    'Sangiovese': 'medio',
    'Brunello di Montalcino': 'medio',
    'Chianti': 'medio',
    'Governo alla Toscana': 'expert',
    'Vino Nobile di Montepulciano': 'avancado',
    'Vernaccia di San Gimignano': 'avancado',
    'Vin Santo': 'avancado',
    'Outras denominações da Toscana': 'expert',
    'Úmbria em resumo': 'avancado',
    'Denominações da Úmbria': 'avancado',
    'Grandes produtores da Úmbria': 'expert',
    'Lácio em resumo': 'avancado',
    'Denominações do Lácio': 'expert',
    'Grandes produtores do Lácio': 'expert',
    'Marche e Abruzzo em resumo': 'avancado',
    'Castas de Marche e Abruzzo': 'avancado',
    'Denominações do Marche': 'expert',
    'Denominações de Abruzzo': 'avancado',
    'Grandes produtores do Marche': 'expert',
    'Grandes produtores de Abruzzo': 'expert',
    'Piemonte em resumo': 'medio',
    'Nebbiolo': 'medio',
    'Castas do Piemonte': 'avancado',
    'Barolo': 'medio',
    'Três zonas do Barolo': 'expert',
    'Barbaresco': 'medio',
    'Langhe': 'avancado',
    'Outros vinhos do Piemonte': 'avancado',
    'Vêneto em resumo': 'medio',
    'Castas do Vêneto': 'avancado',
    'Valpolicella': 'medio',
    'Amarone e Recioto': 'medio',
    'Prosecco': 'medio',
    'Soave': 'avancado',
    'Lombardia em resumo': 'avancado',
    'Franciacorta': 'medio',
    'Valtellina': 'avancado',
    'Outras denominações da Lombardia': 'expert',
    'Trentino-Alto Adige': 'avancado',
    'Friuli-Venezia Giulia': 'avancado',
    'Vale d\'Aosta': 'expert',
    'Ligúria': 'avancado',
    'Basilicata em resumo': 'expert',
    'Aglianico': 'avancado',
    'Denominação da Basilicata': 'expert',
    'Grandes produtores da Basilicata': 'expert',
    'Campânia em resumo': 'avancado',
    'Castas da Campânia': 'avancado',
    'Denominações da Campânia': 'avancado',
    'Grandes produtores da Campânia': 'expert',
    'Puglia em resumo': 'avancado',
    'Castas da Puglia': 'avancado',
    'Denominações da Puglia': 'expert',
    'Grandes produtores da Puglia': 'expert',
    'Sicília em resumo': 'avancado',
    'Castas da Sicília': 'avancado',
    'Denominações da Sicília': 'avancado',
    'Grandes produtores da Sicília': 'expert',
    'Sardenha em resumo': 'expert',
    'Castas da Sardenha': 'avancado',
    'Denominações da Sardenha': 'expert',
    'Grandes produtores da Sardenha': 'expert' };
  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });

  return { code: 'IT', version: 3, cards: cards };
})());
