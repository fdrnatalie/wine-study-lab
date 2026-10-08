/**
 * CARTÕES DE ESTUDO — Itália (material de aula, v1: panorama e Centro).
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

  return { code: 'IT', version: 1, cards: cards };
})());
