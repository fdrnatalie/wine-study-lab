/**
 * CARTÕES DE ESTUDO — Brasil (Rio Grande do Sul e outras regiões) e Uruguai (material de aula, v1).
 * Tópicos curtos; o material pode ter erros: "corrigido" = conferido em fonte aberta e o slide estava errado;
 * "conferir" = não confirmado (fica fora do quiz).
 * Itens: [chave, texto, marca?]. Para 'denominacoes': [nome, descrição, classificação].
 */
var STUDY_PACKS = STUDY_PACKS || [];

// =====================  BRASIL  =====================
STUDY_PACKS.push((function () {
  var cards = [];
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function P(title, kind, items) { cards.push({ topic: 'pais', ref: ['Brasil'], title: title, kind: kind, items: mk(items) }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? ['Brasil', region, sub] : ['Brasil', region], title: title, kind: kind, items: mk(items) });
  }
  function H(group, title, items) { cards.push({ topic: 'harmonizacao', group: group, title: title, kind: 'fatos', items: mk(items) }); }

  // ---------- País ----------
  P('O Brasil em resumo', 'fatos', [
    ['Mercado', 'Um dos principais mercados emergentes e dos mais diversificados do mundo'],
    ['Consumo', 'Consumo per capita ainda baixo, com interesse recente e enorme da população adulta: um dos players mais promissores'],
    ['Área plantada', 'Mais de 80 mil ha; a maior parte ainda é de uvas de origem americana, não apropriadas para vinhos de qualidade'],
    ['Ranking de mercados', '14º mercado de vinhos mais atraente do mundo em 2021, após subir 12 posições (Wine Intelligence)'],
    ['Vinícolas', '1.003 vinícolas, incluindo as de vinho de garrafão (Ideal Consulting); o RS concentra dois terços da produção']
  ]);
  P('Marcos do vinho no Brasil', 'linha', [
    ['1532', 'Martim Afonso de Sousa planta as primeiras mudas, no Sudeste'],
    ['1551', 'Brás Cubas consegue produzir o primeiro vinho do Brasil, segundo o slide', 'conferir'],
    ['1626', 'A chegada dos jesuítas impulsiona produção e consumo (o jesuíta Roque Gonzales plantou videiras no extremo sul)'],
    ['1640', 'Primeira degustação orientada do Brasil, registrada em ata na câmara de São Paulo, segundo o slide', 'conferir'],
    ['1789', 'A coroa portuguesa proíbe a produção de vinhos no Brasil'],
    ['1808', 'A chegada da família real põe fim à proibição'],
    ['1860', 'Plantio dos primeiros vinhedos da uva Isabel, segundo o slide (a Isabel chegou ao RS por volta de 1839 a 1842)', 'conferir'],
    ['1875', 'Imigrantes italianos mudam por completo a produção brasileira'],
    ['1929', 'Produtores do RS criam a primeira cooperativa vitivinícola, segundo o slide (as grandes, como Aurora e Garibaldi, são de 1931)', 'conferir'],
    ['1990', 'A indústria do vinho inicia seu processo de modernização']
  ]);
  P('Vinhedos e produção do Brasil (2022)', 'numeros', [
    ['80 mil ha', 'Área plantada (maioria em uvas americanas)'],
    ['85%', 'Vinhedos de uvas não viníferas (americanas e híbridas)'],
    ['15%', 'Vinhedos de Vitis vinifera, base dos vinhos finos'],
    ['70%', 'Da produção é de vinho tinto'],
    ['25%', 'Da produção é de vinho branco'],
    ['5%', 'Da produção é de rosé']
  ]);
  P('Espumante brasileiro', 'fatos', [
    ['Posição', 'Principal fornecedor de espumante da América do Sul, segundo o slide', 'conferir'],
    ['Exportação', 'Cerca de 70 países recebem o espumante brasileiro, segundo o slide', 'conferir']
  ]);
  P('Grandes produtores do Brasil', 'produtores', [
    ['Casa Perini', ''], ['Miolo Wine Group', ''], ['Dal Pizzol', ''], ['Casa Valduga', ''], ['Lidio Carraro', ''],
    ['Pizzato', ''], ['Luiz Argenta', ''], ['Família Geisse', ''], ['Don Giovanni', ''], ['Alma Única', '']
  ]);
  P('Grandes produtores de outras regiões do Brasil', 'produtores', [
    ['Villa Francioni', ''], ['UVVA', ''], ['Estrada Real', ''], ['Thera', ''], ['Rio Sol', ''],
    ['Leone di Venezia', ''], ['Villaggio Bassetti', ''], ['Família Eloy Góes', ''], ['Guaspari', '']
  ]);
  P('Rio de Janeiro: Areal', 'fatos', [
    ['Onde', 'Areal fica na região serrana e centro-sul do Rio de Janeiro'],
    ['Título', '"Capital da Uva" por lei municipal e estadual: maior produtor de uva do estado'],
    ['Área', 'Cerca de 30 ha, com mais de 8 variedades'],
    ['Expectativa', 'Produção média de 60 mil garrafas de vinho por ano']
  ]);

  // ---------- Rio Grande do Sul ----------
  R('Rio Grande do Sul', '', 'Rio Grande do Sul: panorama', 'fatos', [
    ['Peso', 'Maior polo de produção de Vitis vinifera do Brasil'],
    ['Clima', 'Subtropical úmido, verões quentes e invernos moderados'],
    ['Viníferas', 'Cerca de 15% das uvas cultivadas são Vitis vinifera: foco em vinhos finos'],
    ['Sub-regiões', 'Três importantes: Serra Gaúcha, Campanha Gaúcha e Serra do Sudeste']
  ]);
  R('Rio Grande do Sul', '', 'Castas do Rio Grande do Sul', 'fatos', [
    ['As 6 principais', 'Dezenas de variedades, mas a produção se concentra em 6 castas'],
    ['Brancas', 'Chardonnay, Riesling Itálico (Welschriesling) e Sauvignon Blanc'],
    ['Tintas', 'Merlot, Cabernet Sauvignon e Tannat'],
    ['Merlot', 'Muito cultivada na Serra Gaúcha: corpo médio a encorpado, frutas vermelhas, taninos redondos'],
    ['Cabernet Sauvignon', 'Adaptada à Serra Gaúcha: boa estrutura, longevidade e complexidade'],
    ['Tannat', 'Destaque na Campanha Gaúcha: intensa e robusta, tintos encorpados e complexos'],
    ['Riesling Itálico', 'Acidez refrescante e aromas florais; brancos vibrantes'],
    ['Sauvignon Blanc', 'Do seco e fresco ao mais encorpado e complexo']
  ]);
  R('Rio Grande do Sul', '', 'Outras castas do Rio Grande do Sul', 'lista', [
    ['', 'Brancas: Moscato Bianco, Gewürztraminer'],
    ['', 'Tintas francesas: Cabernet Franc, Syrah, Malbec, Pinot Noir'],
    ['', 'Touriga Nacional (portuguesa)'],
    ['', 'Tintas italianas: Nebbiolo, Teroldego, Rebo, Montepulciano, Lagrein']
  ]);
  R('Rio Grande do Sul', '', 'Clima e solo das sub-regiões do RS', 'fatos', [
    ['Serra Gaúcha', 'Clima influenciado pela altitude: verões quentes e úmidos, invernos frios'],
    ['Campanha Gaúcha', 'Temperado, invernos frios, verões quentes, pouca chuva e grande amplitude térmica'],
    ['Serra do Sudeste', 'Excesso de chuva perto da colheita; altitude de 400 a 700 m (segundo o slide) e solo areno-argiloso', 'conferir']
  ]);
  R('Rio Grande do Sul', 'Serra Gaúcha', 'Serra Gaúcha', 'fatos', [
    ['Fama', 'A mais famosa e tradicional região produtora do RS'],
    ['Paisagem', 'Colinas verdejantes, clima subtropical e solos de basalto e granito'],
    ['Especialidade', 'Vinhos finos, espumantes e vinhos de mesa'],
    ['Inclui', 'Pinto Bandeira, Bento Gonçalves e Vale dos Vinhedos']
  ]);
  R('Rio Grande do Sul', 'Serra Gaúcha', 'Grandes produtores da Serra Gaúcha', 'produtores', [
    ['Casa Valduga', ''], ['Miolo', ''], ['Don Giovanni', ''], ['Geisse', '']
  ]);
  R('Rio Grande do Sul', 'Serra Gaúcha', 'Bento Gonçalves', 'fatos', [
    ['Apelido', '"Capital brasileira do vinho": maior produtor de uva, vinhos e derivados do país'],
    ['Aurora', 'Maior cooperativa de vinhos do Brasil'],
    ['Miolo Wine Group', 'Recebe investimentos de grandes empresários do país'],
    ['Casa Valduga', 'A maior vinícola do Vale dos Vinhedos, segundo o slide', 'conferir'],
    ['Salton', 'Considerada o maior complexo vitivinícola da América Latina, segundo o slide', 'conferir'],
    ['Vinícolas', '68 instaladas no município, entre grandes e pequenas familiares, segundo o slide', 'conferir'],
    ['Pioneirismo', 'Primeira região do Brasil a obter indicação de procedência (o Vale dos Vinhedos)']
  ]);
  R('Rio Grande do Sul', 'Vale dos Vinhedos', 'Vale dos Vinhedos: a DO', 'fatos', [
    ['Marcos', 'IP em 2002 (INPI), primeira indicação geográfica do Brasil; DO em 2012, a primeira DO de vinhos do país'],
    ['Produtos', 'Finos tranquilos brancos e tintos e espumantes finos'],
    ['Área', '72,45 km² em Bento Gonçalves, Garibaldi e Monte Belo do Sul (alguns textos citam 82 km²)', 'conferir'],
    ['Origem', 'Uvas e vinhos exclusivamente da área delimitada; há regras de cultivo, produtividade e qualidade'],
    ['Conselho Regulador', 'Só vende o produto que recebe o atestado de conformidade do Conselho Regulador da DO']
  ]);
  R('Rio Grande do Sul', 'Vale dos Vinhedos', 'Vale dos Vinhedos: uvas e estilos da DO', 'fatos', [
    ['Espumantes', 'Só Método Tradicional (nature, extra-brut ou brut); Chardonnay e/ou Pinot Noir obrigatórias'],
    ['Brancos', 'Chardonnay obrigatória, podendo ter corte com Riesling Itálico'],
    ['Tintos', 'Merlot obrigatória; corte possível com Cabernet Sauvignon, Cabernet Franc e Tannat'],
    ['Madeira', 'Só barris de carvalho']
  ]);
  R('Rio Grande do Sul', 'Vale dos Vinhedos', 'Vale dos Vinhedos: prazos de envelhecimento', 'fatos', [
    ['Brancos', 'Mínimo de 6 meses antes de chegar ao mercado'],
    ['Tintos', 'Mínimo de 12 meses'],
    ['Espumantes', 'Mínimo de 9 meses em contato com as leveduras na tomada de espuma']
  ]);
  R('Rio Grande do Sul', 'Pinto Bandeira', 'Pinto Bandeira', 'fatos', [
    ['Onde', 'Vizinha de Bento Gonçalves (distrito dela até 31/12/2012); cerca de 140 km de Porto Alegre e 20 km de Bento'],
    ['IP', 'Indicação de Procedência de tranquilos e espumantes, reconhecida desde 2010'],
    ['Espumantes da IP', 'Só Método Tradicional, com Chardonnay, Pinot Noir, Riesling Itálico e Viognier'],
    ['Destaque', 'O varietal Chardonnay'],
    ['Tintos de destaque', 'Cabernet Franc, Merlot, Tannat, Cabernet Sauvignon, Sangiovese e Pinot Noir']
  ]);
  R('Rio Grande do Sul', 'Altos de Pinto Bandeira', 'DO Altos de Pinto Bandeira', 'fatos', [
    ['Marco', 'Em 2022, a primeira denominação de origem exclusiva de espumantes do Novo Mundo'],
    ['Uvas', 'Chardonnay, Pinot Noir e Riesling Itálico, todas da área da DO'],
    ['Condução', 'Em espaldeira'],
    ['Método', 'Método Tradicional, com mais de 12 meses de guarda']
  ]);
  R('Rio Grande do Sul', 'Campanha Gaúcha', 'Campanha Gaúcha', 'fatos', [
    ['Onde', 'Sul do estado, perto da fronteira com o Uruguai; uma das maiores regiões produtoras do Brasil'],
    ['Clima e solo', 'Temperado; solos de arenito e granito'],
    ['Fama', 'Tintos, sobretudo de Tannat, e brancos']
  ]);
  R('Rio Grande do Sul', 'Campanha Gaúcha', 'Grandes produtores da Campanha Gaúcha', 'produtores', [
    ['Campos de Cima', ''], ['Guatambu', ''], ['Peruzzo', ''], ['Almadén (grupo Miolo)', '']
  ]);
  R('Rio Grande do Sul', 'Serra do Sudeste', 'Serra do Sudeste', 'fatos', [
    ['Onde', 'Extremo sul do RS; região em crescimento'],
    ['Clima e solo', 'Temperado; solos de origem basáltica e granítica'],
    ['Estilo', 'Tintos e brancos finos'],
    ['Núcleos', 'Encruzilhada do Sul, Pinheiro Machado e Candiota'],
    ['Candiota', 'Embora perto de Bagé, é considerada Serra do Sudeste e não Campanha']
  ]);
  R('Rio Grande do Sul', 'Serra do Sudeste', 'Grandes produtores da Serra do Sudeste', 'produtores', [
    ['Bodega Czarnobay', ''], ['Terrasul', '']
  ]);

  // ---------- Outras regiões ----------
  R('Santa Catarina', '', 'Santa Catarina em resumo', 'fatos', [
    ['Fama', 'Brancos de qualidade em regiões de alta altitude e a histórica uva Goethe (com selo de IP)'],
    ['IP de 2021', 'Segunda indicação geográfica para vinhos do estado: Vinhos de Altitude de Santa Catarina'],
    ['Solo', 'Mistura de argila, areia e matéria orgânica; profundo, bem drenado e fértil nas melhores áreas'],
    ['Clima', 'Ameno, com oscilações térmicas que ajudam a qualidade'],
    ['Área', '2.300 ha: Vale do Rio do Peixe 2.100 ha e Planalto Serrano 200 ha']
  ]);
  R('Santa Catarina', 'Vale do Rio do Peixe', 'Vale do Rio do Peixe', 'fatos', [
    ['Cidades', 'Videira, Pinheiro Preto, Iomerê, Fraiburgo, Tangará e Caçador'],
    ['Condução', 'Predomínio da latada'],
    ['Uvas', 'Predomínio de variedades americanas'],
    ['Destaques', 'Brancos de Niágara e tintos de Bordô']
  ]);
  R('Santa Catarina', 'Vinhos de Altitude de Santa Catarina', 'Planalto Serrano (vinhos de altitude)', 'fatos', [
    ['Cidades', 'São Joaquim, Água Doce, Bom Retiro, Campos Novos e Urubici'],
    ['Uvas', 'Predomínio de viníferas, em espaldeira ou lira'],
    ['Aptidão', 'Nova região com grande aptidão para tintos']
  ]);
  R('Santa Catarina', '', 'Castas de Santa Catarina', 'lista', [
    ['', 'Americanas: Isabel, Niágara Branca, Concord, Bordô'],
    ['', 'Viníferas: Chardonnay, Sauvignon Blanc, Cabernet Sauvignon, Cabernet Franc, Merlot, Touriga Nacional'],
    ['', 'Um imenso campo experimental com uvas portuguesas e italianas']
  ]);
  R('Paraná', '', 'Paraná em resumo', 'fatos', [
    ['Área', '3.900 ha'],
    ['Região Metropolitana', 'Curitiba e Campo Largo: grandes engarrafadores de vinho de mesa, com vinho trazido de outras zonas do Brasil'],
    ['Norte do Paraná', 'Marialva e Maringá: latada, uvas para consumo in natura; a colônia japonesa motivou essa produção']
  ]);
  R('São Paulo', '', 'São Paulo em resumo', 'fatos', [
    ['Área', '8.900 ha'],
    ['Leste', 'Jundiaí, Vinhedos, Campinas, Valinhos, São Miguel Arcanjo e Sorocaba'],
    ['Norte', 'Jales'],
    ['Uvas', 'Destaque para uvas de mesa (in natura), em latada e lira'],
    ['Tecnologia', 'Cobertura plástica e irrigação permitem duas safras por ano'],
    ['Vinho de mesa', 'Grande volume engarrafado, na maior parte comprado a granel de outras regiões']
  ]);
  R('Minas Gerais', 'Sul de Minas', 'Sul de Minas: Andradas', 'fatos', [
    ['Distância', 'Andradas fica a 560 km de Belo Horizonte, segundo o slide', 'conferir'],
    ['Rios', 'O principal é o Jaguari-Mirim, que nasce em Ibitiúra de Minas'],
    ['Norte do município', 'Ribeirões do Tamanduá e das Antas']
  ]);
  R('Vale do São Francisco', '', 'Vale do São Francisco', 'fatos', [
    ['Local', 'Nordeste do Brasil (Pernambuco e Bahia), clima semiárido; Petrolina, Juazeiro'],
    ['Solo', 'Areia, argila e calcário, boa drenagem e baixa fertilidade natural'],
    ['Irrigação', 'Indispensável; compensa o solo e controla o estresse hídrico'],
    ['Área', '10.000 ha cultivados'],
    ['Condução', 'Principalmente latada; as uvas vão sobretudo ao consumo in natura'],
    ['Estilos', 'Destaque para tintos e espumantes moscatéis; vinhos frutados e frescos'],
    ['Paralelo 8', 'A Rio Sol, em Lagoa Grande (PE), faz vinhos e espumantes premiados no Brasil e no exterior']
  ]);
  R('Vale do São Francisco', '', 'Uvas do Vale do São Francisco', 'fatos', [
    ['In natura', 'Crimson Seedless, Thompson Seedless e Italia'],
    ['Suco', 'Italia e Benitaka'],
    ['Viníferas', 'Syrah, Cabernet Sauvignon, Merlot e Chardonnay para vinhos finos']
  ]);

  // ---------- Harmonização (cozinha regional) ----------
  H('Rio Grande do Sul', 'Cozinha gaúcha', [
    ['Chimarrão', 'Infusão de erva-mate com água quente; típica do sul da América do Sul (Brasil, Argentina, Uruguai, Paraguai e Chile)'],
    ['Churrasco', 'Origem desconhecida, atribuída aos países dos pampas; os gaúchos o tornaram típico'],
    ['Arroz de carreteiro', 'Arroz com carne bovina picada, carne-seca ou de sol, às vezes paio, bacon e linguiça, bem temperado'],
    ['Galeto ao primo canto', 'Frango de leite de cerca de 25 dias (500 a 700 g), assado no espeto; "primo canto" é o primeiro canto'],
    ['Costela fogo de chão', 'Surgiu nas fazendas, quando as costelas, cortes não nobres, ficavam para os peões'],
    ['Matambre recheado', 'De "mata el hambre"; corte de flanco típico do RS, Uruguai e Argentina, trazido pela colonização espanhola'],
    ['Sagu ao creme', 'Também citado entre os pratos de destaque da cozinha regional']
  ]);
  H('Santa Catarina', 'Cozinha catarinense', [
    ['Tainha', 'Peixe típico do inverno, pescado de forma artesanal de maio a julho; assada na brasa, no forno, na telha ou na folha de bananeira, ou frita; às vezes recheada com a ova ou farofa']
  ]);
  H('Paraná', 'Cozinha paranaense', [
    ['Barreado', 'Carne cozida até desmanchar na panela de barro; marca de Morretes; servido com arroz, banana e farinha de mandioca']
  ]);
  H('São Paulo', 'Cozinha paulista', [
    ['Cuscuz paulista', 'Vem do cuscuz berbere, com influências indígenas e de imigrantes portugueses, espanhóis e italianos; base de farinha de milho']
  ]);
  H('Minas Gerais', 'Cozinha mineira', [
    ['Frango com quiabo', 'Ensopado de frango caipira; o sabor original só sai com esse tipo de frango']
  ]);
  H('Pernambuco', 'Cozinha pernambucana', [
    ['Buchada de bode', 'Iguaria sertaneja de tripas, fígado e sangue coagulado, temperada com cebola, alho, hortelã e limão; Petrolina tem o "Bodódromo"']
  ]);
  H('Bahia', 'Cozinha baiana', [
    ['Acarajé', 'Bolinho de massa de feijão-fradinho, cebola e sal, frito em azeite de dendê; das culinárias africana e afro-brasileira']
  ]);
  H('Rio de Janeiro', 'Cozinha fluminense', [
    ['Truta', 'Destaque gastronômico da Serra Fluminense, destino dos cariocas atrás de temperaturas amenas']
  ]);

  var LEVELS = {
    'O Brasil em resumo': 'medio',
    'Marcos do vinho no Brasil': 'avancado',
    'Vinhedos e produção do Brasil (2022)': 'avancado',
    'Espumante brasileiro': 'medio',
    'Grandes produtores do Brasil': 'avancado',
    'Grandes produtores de outras regiões do Brasil': 'expert',
    'Rio de Janeiro: Areal': 'expert',
    'Rio Grande do Sul: panorama': 'medio',
    'Castas do Rio Grande do Sul': 'medio',
    'Outras castas do Rio Grande do Sul': 'avancado',
    'Clima e solo das sub-regiões do RS': 'avancado',
    'Serra Gaúcha': 'medio',
    'Grandes produtores da Serra Gaúcha': 'avancado',
    'Bento Gonçalves': 'avancado',
    'Vale dos Vinhedos: a DO': 'avancado',
    'Vale dos Vinhedos: uvas e estilos da DO': 'avancado',
    'Vale dos Vinhedos: prazos de envelhecimento': 'expert',
    'Pinto Bandeira': 'avancado',
    'DO Altos de Pinto Bandeira': 'avancado',
    'Campanha Gaúcha': 'avancado',
    'Grandes produtores da Campanha Gaúcha': 'expert',
    'Serra do Sudeste': 'avancado',
    'Grandes produtores da Serra do Sudeste': 'expert',
    'Santa Catarina em resumo': 'avancado',
    'Vale do Rio do Peixe': 'expert',
    'Planalto Serrano (vinhos de altitude)': 'avancado',
    'Castas de Santa Catarina': 'avancado',
    'Paraná em resumo': 'expert',
    'São Paulo em resumo': 'avancado',
    'Sul de Minas: Andradas': 'expert',
    'Vale do São Francisco': 'avancado',
    'Uvas do Vale do São Francisco': 'expert',
    'Cozinha gaúcha': 'medio',
    'Cozinha catarinense': 'avancado',
    'Cozinha paranaense': 'avancado',
    'Cozinha paulista': 'avancado',
    'Cozinha mineira': 'avancado',
    'Cozinha pernambucana': 'avancado',
    'Cozinha baiana': 'avancado',
    'Cozinha fluminense': 'expert' };
  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });

  return { code: 'BR', version: 1, cards: cards };
})());

// =====================  URUGUAI  =====================
STUDY_PACKS.push((function () {
  var cards = [];
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function P(title, kind, items) { cards.push({ topic: 'pais', ref: ['Uruguai'], title: title, kind: kind, items: mk(items) }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? ['Uruguai', region, sub] : ['Uruguai', region], title: title, kind: kind, items: mk(items) });
  }
  function H(group, title, items) { cards.push({ topic: 'harmonizacao', group: group, title: title, kind: 'fatos', items: mk(items) }); }

  // ---------- País ----------
  P('O Uruguai em números', 'numeros', [
    ['8 mil ha', 'Vinhedos, segundo o slide (o INAVI cita cerca de 6 mil ha)', 'conferir'],
    ['95 milhões de L', 'Produção anual, segundo o slide', 'conferir'],
    ['280', 'Vinícolas em operação, segundo o slide', 'conferir'],
    ['25 L', 'Consumo per capita por ano'],
    ['70%', 'Do volume total é de vinhos tintos'],
    ['7 ha', 'Tamanho médio das propriedades, segundo o slide', 'conferir'],
    ['20%', 'Da receita das vinícolas vem do enoturismo, segundo o slide', 'conferir']
  ]);
  P('Uruguai: contexto', 'fatos', [
    ['Comparação', 'O Brasil tem pouco mais de 80 mil ha de vinhedos; o Uruguai, bem menos'],
    ['Consumo', 'Até os anos 1990 o vinho era consumido internamente'],
    ['Exportação', 'O Brasil é o maior consumidor de vinhos uruguaios']
  ]);
  P('Marcos do vinho no Uruguai', 'linha', [
    ['1870', 'Pascual Harriague planta as primeiras videiras (Tannat) em sua fazenda na região de Salto'],
    ['1878', 'Francisco Vidiella se estabelece como primeiro produtor de vinhos de Canelones, segundo o slide', 'conferir'],
    ['1898', 'A filoxera ataca os vinhedos: produtores queimam e replantam as videiras, segundo o slide', 'conferir'],
    ['1987', 'Criação do INAVI para regulamentar a produção e zelar pela qualidade'],
    ['1993', 'O INAVI cria a categoria VCP (Vino de Calidad Preferente), que atesta, entre outras coisas, que o vinho é fino']
  ]);
  P('Tannat no Uruguai', 'fatos', [
    ['Área', 'Cerca de 1.600 ha; o slide diz 20% da área do país, mas a fatia é maior', 'conferir'],
    ['Origem', 'Região de Madiran, na França'],
    ['Chegada', 'Por volta de 1870, com imigrantes franceses; Pascual Harriague plantou as primeiras mudas'],
    ['Estilo', 'Mais frutado e menos rústico que o francês, pelo clima e solo locais'],
    ['Influências', 'Rios Uruguai e da Prata e Oceano Atlântico: clima temperado, vinhos estruturados e de taninos macios']
  ]);
  P('Castas brancas do Uruguai', 'fatos', [
    ['Chardonnay', 'Originária da Borgonha; macios, frescos e elegantes, frutos tropicais, acidez moderada'],
    ['Sauvignon Blanc', 'Expressiva e de aromas intensos; outro favorito entre os brancos'],
    ['Viognier', 'Nativa do Vale do Rhône; corpo e caráter macio; casta tardia']
  ]);
  P('Castas tintas do Uruguai', 'fatos', [
    ['Merlot', '2ª casta mais plantada; versátil e fácil de beber'],
    ['Cabernet Sauvignon', 'Originária de Bordeaux; cor rubi intensa e aromas suaves'],
    ['Cabernet Franc', 'Brotação e maturação precoces; aromas vegetais']
  ]);
  P('Clima e solo do Uruguai', 'fatos', [
    ['Altitude', 'Média de cerca de 200 m'],
    ['Solos', 'De rochosos a argilosos; em geral argilosos e calcários'],
    ['Maldonado', 'A mineralidade típica dos solos de Maldonado marca os vinhos locais']
  ]);
  P('Regiões vinícolas do Uruguai', 'fatos', [
    ['INAVI', 'Divide o país em seis grandes zonas; a Metropolitana e a Oceânica seriam as mais importantes, segundo o slide', 'conferir'],
    ['Regiões-chave', 'Canelones, San José e Maldonado']
  ]);
  P('Grandes produtores do Uruguai', 'produtores', [
    ['Bodegas Carrau', ''], ['Bodega Garzón', ''], ['Giménez Méndez', ''], ['Bodega Bouza', ''],
    ['Família Irúrtia', ''], ['Alto de la Ballena', ''], ['Ariano Hermanos', ''], ['Montes Toscanini', '']
  ]);

  // ---------- Regiões ----------
  R('Zona Sul', 'Canelones', 'Canelones', 'fatos', [
    ['Peso', 'Maior região vinícola do país: cerca de 60% da produção'],
    ['Paisagem', 'Plana e suavemente ondulada; agricultura intensiva (horticultura, fruticultura e viticultura) e pecuária'],
    ['Solos', 'Grande variedade, geralmente ricos e densos; alguns com granito rosa de mais de 600 milhões de anos, segundo o slide', 'conferir']
  ]);
  R('Zona Sul', 'Canelones', 'Grandes produtores de Canelones', 'produtores', [
    ['Bodega Lugano', ''], ['Pablo Falabrino', ''], ['Establecimiento Juanicó', ''], ['Pisano', '']
  ]);
  R('Zona Sul', 'San José', 'San José', 'fatos', [
    ['Posição', 'Quarta região do país em produção, com cerca de 300 ha de vinhas, segundo o slide', 'conferir'],
    ['Clima e solo', 'Muito semelhantes aos de Canelones'],
    ['Fama', 'Seu clássico Tannat']
  ]);
  R('Zona Sul', 'San José', 'Grandes produtores de San José', 'produtores', [
    ['Vinos Secchi', ''], ['Bodega Rovere', ''], ['Terrazul', ''], ['Vinos Don Roque', ''], ['Finca Piedra', ''], ['Bodega Tunin', '']
  ]);
  R('Zona Sudeste', 'Maldonado', 'Maldonado', 'fatos', [
    ['Influência', 'Zona de influência atlântica por excelência'],
    ['Terreno', 'Altitudes mais elevadas e maior diversidade geológica que as demais regiões'],
    ['Fama', 'Conhecido pela cidade balneária de Punta del Este'],
    ['Perfil', 'Inovador: região emergente na produção de vinhos do país']
  ]);

  // ---------- Harmonização ----------
  H('Uruguai', 'Cozinha do Uruguai', [
    ['Visão geral', 'Fusão de influências europeias e indígenas; destaque para a carne bovina; simplicidade e ingredientes de qualidade'],
    ['Milanesa à napolitana', 'Bife bovino empanado e frito, coberto com molho de tomate e queijo derretido'],
    ['Chivito', 'Sanduíche popular com carne, ovo frito, bacon, alface, tomate e condimentos'],
    ['Empanadas', 'Pastéis de massa com carnes, azeitonas, cebolas e temperos como páprica e cominho'],
    ['Tira de asado', 'Costela bovina assada na grelha, com sal grosso, lentamente sobre brasas'],
    ['Pamplona', 'Carne recheada e enrolada, em geral bovina, com presunto, queijo e pimentões']
  ]);

  var LEVELS = {
    'O Uruguai em números': 'avancado',
    'Uruguai: contexto': 'medio',
    'Marcos do vinho no Uruguai': 'avancado',
    'Tannat no Uruguai': 'medio',
    'Castas brancas do Uruguai': 'avancado',
    'Castas tintas do Uruguai': 'medio',
    'Clima e solo do Uruguai': 'avancado',
    'Regiões vinícolas do Uruguai': 'avancado',
    'Grandes produtores do Uruguai': 'avancado',
    'Canelones': 'avancado',
    'Grandes produtores de Canelones': 'expert',
    'San José': 'expert',
    'Grandes produtores de San José': 'expert',
    'Maldonado': 'avancado',
    'Cozinha do Uruguai': 'medio' };
  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });

  return { code: 'UY', version: 1, cards: cards };
})());
