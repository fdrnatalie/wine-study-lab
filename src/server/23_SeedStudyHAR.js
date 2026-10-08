/**
 * CARTÕES DE ESTUDO — Harmonização geral (material de aula: brancos, tintos, espumantes, fortificados e doces; v1).
 * Condensado em tópicos curtos. Onde conferi com fonte aberta o dado foi corrigido e marcado "corrigido".
 * Cozinha regional por país/região fica nos cartões de cada país. Itens: [chave, texto, marca?].
 */
var STUDY_PACKS = STUDY_PACKS || [];

STUDY_PACKS.push((function () {
  var cards = [];
  var sortN = 0;
  function C(group, title, kind, items) {
    cards.push({ topic: 'harmonizacao', group: group, title: title, kind: kind, sort: ++sortN, items: items.map(function (i) {
      var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }) });
  }

  // ---- Princípios ----
  C('Princípios', 'Princípios gerais da harmonização', 'lista', [
    ['Gosto pessoal', 'Harmonizar também é preferência pessoal; as sugestões variam com a cozinha regional e os vinhos disponíveis'],
    ['Regras ajudam', 'Seguir orientações clássicas deixa a experiência sensorial ainda mais especial']
  ]);
  C('Princípios', 'Princípios: vinhos doces e sobremesas', 'lista', [
    ['Doçura', 'O vinho doce deve ser mais doce do que a sobremesa'],
    ['Sabores', 'Os sabores do vinho e do prato devem se complementar'],
    ['Texturas', 'O contraste de texturas pode melhorar a experiência'],
    ['Acidez e frescor', 'A acidez do vinho equilibra a riqueza da sobremesa'],
    ['Aromas', 'Os aromas do vinho devem se alinhar com os da sobremesa'],
    ['Intensidade', 'Vinho e prato devem ter intensidade de sabor semelhante'],
    ['Finalização leve', 'Em geral, a harmonização com doces ocorre no final da refeição']
  ]);
  C('Princípios', 'Princípios: espumantes', 'lista', [
    ['Acidez', 'A acidez do espumante equilibra pratos ricos e gordurosos'],
    ['Corpo', 'Espumante leve para prato leve; encorpado para prato substancial'],
    ['Complexidade', 'Espumantes mais complexos combinam com pratos sofisticados'],
    ['Regionalidade', 'Considere a origem do espumante em relação à culinária regional'],
    ['Doçura', 'A doçura do espumante deve combinar com a do prato ou da sobremesa'],
    ['Sabores', 'Procure sabores que se complementem'],
    ['Textura e temperatura', 'A textura do prato influencia a escolha da efervescência; sirva na temperatura adequada']
  ]);

  // ---- Brancos ----
  C('Brancos', 'Brancos: peixes, frutos do mar e pratos leves', 'fatos', [
    ['Sushi (Japão)', 'Branco seco e frutado (Sauvignon Blanc ou Riesling seco): respeita a delicadeza do peixe'],
    ['Ceviche (Peru)', 'Branco leve e cítrico (Vinho Verde ou Sauvignon Blanc): acompanha o frescor e a acidez'],
    ['Paella (Espanha)', 'Branco espanhol, como Albariño ou Verdejo'],
    ['Camarões grelhados (Caribe)', 'Branco frutado e leve (Chenin Blanc ou Viognier): refrescante com o toque de pimenta'],
    ['Carpaccio (Itália)', 'Branco seco e mineral (Pinot Grigio italiano): realça a carne crua e o molho delicado'],
    ['Bacalhau à Gomes de Sá (Portugal)', 'Branco português, como Alvarinho de Monção ou Encruzado: escolha clássica']
  ]);
  C('Brancos', 'Brancos: pratos ricos e cremosos', 'fatos', [
    ['Lagosta à Thermidor (França)', 'Branco encorpado (Chardonnay com carvalho): acompanha a riqueza do molho cremoso'],
    ['Pasta Alfredo (Itália)', 'Branco de corpo médio e boa acidez (Pinot Grigio ou Chardonnay pouco amadeirado)'],
    ['Frango à Califórnia (EUA)', 'Frango grelhado com frutas tropicais: Chardonnay californiano com toque amadeirado']
  ]);
  C('Brancos', 'Brancos: pratos condimentados', 'fatos', [
    ['Frango ao curry (Índia)', 'Branco com boa acidez e toque de especiarias (Gewürztraminer): equilibra o tempero intenso']
  ]);

  // ---- Tintos ----
  C('Tintos', 'Tintos: massas, molhos e queijo', 'fatos', [
    ['Bife à parmegiana', 'Tinto italiano de corpo médio (Chianti ou Barbera): vai bem com o molho de tomate e o queijo derretido; o slide diz "Itália", mas o prato nasceu na diáspora italiana nos EUA', 'corrigido'],
    ['Lasanha (Itália)', 'Tinto encorpado (Sangiovese ou Barolo): acompanha camadas de molho de carne e queijo']
  ]);
  C('Tintos', 'Tintos: pratos tradicionais e rústicos', 'fatos', [
    ['Coq au vin (França)', 'Pinot Noir ou Borgonha: realça frango cozido lentamente com vinho tinto, cogumelos e ervas'],
    ['Feijoada (Brasil)', 'Tinto brasileiro, como o Tannat: encara a riqueza do feijão preto com carne de porco'],
    ['Ratatouille (França)', 'Tinto suave e frutado (Grenache): destaca os legumes assados e o molho de tomate']
  ]);
  C('Tintos', 'Tintos: carnes, churrasco e picantes', 'fatos', [
    ['Hambúrguer clássico (EUA)', 'Tinto jovem e frutado (Merlot): combina com a suculência e os condimentos'],
    ['Curry de cordeiro (Índia)', 'Syrah/Shiraz com especiarias e corpo médio: realça os sabores intensos'],
    ['Chili com carne (México/EUA)', 'Zinfandel ou Malbec: equilibra o calor e os sabores robustos'],
    ['Costelas com barbecue (EUA)', 'Tinto com carvalho (Cabernet Sauvignon americano): acompanha o defumado e adocicado do molho']
  ]);

  // ---- Espumantes ----
  C('Espumantes', 'Espumantes encorpados (Champagne)', 'fatos', [
    ['Frutos do mar', 'Champanhes encorpados acentuam pratos como lagosta e camarão'],
    ['Queijos de casca florida', 'Brie e camembert se equilibram com champanhe encorpado; o slide os chama de "queijos envelhecidos", mas são queijos de maturação curta (não confirmado em fonte aberta)', 'conferir'],
    ['Comida asiática', 'Sushi ou pato à Pequim se beneficiam da acidez e da complexidade do champanhe'],
    ['Comida picante', 'Champanhes complexos suavizam pratos picantes, como a cozinha tailandesa ou indiana'],
    ['Cogumelos salteados', 'Pratos como risoto de cogumelos destacam a complexidade do champanhe'],
    ['Frutos secos e castanhas', 'Amêndoas torradas com champanhe: harmonização clássica']
  ]);
  C('Espumantes', 'Espumantes leves (Prosecco)', 'fatos', [
    ['Aperitivos leves', 'Prosecco com canapés, bruschettas e crostini'],
    ['Frutos do mar', 'Camarões grelhados, ostras e ceviche são realçados pela frescura do Prosecco'],
    ['Comida italiana', 'Massas leves e antipastos'],
    ['Saladas', 'Frescas, de preferência cítricas (rúcula com grapefruit): combinam com a acidez de um espumante jovem e leve'],
    ['Sushi e sashimi', 'Um espumante leve é escolha surpreendente: realça a delicadeza do peixe'],
    ['Frutas frescas', 'Sobremesas leves, como salada de frutas ou à base de cítricos']
  ]);

  // ---- Fortificados e doces ----
  C('Fortificados e doces', 'Vinhos doces: botritizado e colheita tardia', 'fatos', [
    ['Botritizado (ex.: Sauternes)', 'Queijos azuis, foie gras, sobremesas de frutas e patês; sabores complexos de mel e frutas secas'],
    ['Colheita tardia', 'Frutas frescas, sobremesas de frutas e queijos de cabra; ex.: Riesling de colheita tardia equilibra acidez e doçura']
  ]);
  C('Fortificados e doces', 'Ice Wine, Vin Santo e Porto', 'fatos', [
    ['Ice Wine', 'Sobremesas de frutas, queijos suaves e frutas frescas; uvas congeladas dão doçura intensa e sabor frutado'],
    ['Vin Santo', 'Biscotti, sobremesas com nozes e queijos curados; caráter amendoado e notas de caramelo'],
    ['Vinho do Porto', 'Queijos duros, chocolate, frutas secas e carnes defumadas; versátil: antes, durante ou depois da refeição']
  ]);

  var LEVELS = {
    'Princípios gerais da harmonização': 'medio', 'Princípios: vinhos doces e sobremesas': 'avancado', 'Princípios: espumantes': 'avancado',
    'Brancos: peixes, frutos do mar e pratos leves': 'medio', 'Brancos: pratos ricos e cremosos': 'medio', 'Brancos: pratos condimentados': 'avancado',
    'Tintos: massas, molhos e queijo': 'medio', 'Tintos: pratos tradicionais e rústicos': 'avancado', 'Tintos: carnes, churrasco e picantes': 'medio',
    'Espumantes encorpados (Champagne)': 'avancado', 'Espumantes leves (Prosecco)': 'medio',
    'Vinhos doces: botritizado e colheita tardia': 'avancado', 'Ice Wine, Vin Santo e Porto': 'avancado'
  };
  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });

  return { code: 'HAR', version: 1, cards: cards };
})());
