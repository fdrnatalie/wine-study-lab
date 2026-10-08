/**
 * CARTÕES DE ESTUDO — Alemanha, Áustria, Grécia, Líbano e Eslovênia (aulas 30 e 31; v1).
 * Tópicos curtos; o material pode ter erros: "corrigido" = conferido em fonte aberta e diferente do slide;
 * "conferir" = não confirmado em fonte aberta (fica fora do quiz).
 * Itens: [chave, texto, marca?]. Para 'denominacoes': [nome, descrição, classificação].
 */
var STUDY_PACKS = STUDY_PACKS || [];

// ======================  ALEMANHA  ======================
STUDY_PACKS.push((function () {
  var cards = [];
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function P(title, kind, items) { cards.push({ topic: 'pais', ref: ['Alemanha'], title: title, kind: kind, items: mk(items) }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? ['Alemanha', region, sub] : ['Alemanha', region], title: title, kind: kind, items: mk(items) });
  }
  function H(group, title, items) { cards.push({ topic: 'harmonizacao', group: group, title: title, kind: 'fatos', items: mk(items) }); }

  P('A Alemanha em números', 'numeros', [
    ['103 mil ha', 'Área plantada (a Wikipedia indica cerca de 104 mil ha)'],
    ['Cerca de 1 bi L', 'Produção anual: a Wikipedia cita cerca de 10 milhões de hl; o slide diz 610 milhões de L', 'corrigido'],
    ['65%', 'Vinhos brancos no volume total; tintos, rosés e outros somam 35%'],
    ['20 L', 'Consumo de vinho por habitante por ano (cerveja: pouco mais de 90 L)']
  ]);
  P('Marcos do vinho alemão', 'linha', [
    ['Cerca de 100 d.C.', 'Romanos introduzem a videira na atual Alemanha'],
    ['Idade Média', 'Monges desenvolvem a viticultura nos mosteiros, com vinhos de qualidade'],
    ['1618-1648', 'Guerra dos Trinta Anos e guerras seguintes devastam vinhedos e derrubam a produção'],
    ['Fim do séc. XIX', 'Filoxera devasta as vinhas e exige reestruturação geral'],
    ['1909', 'Lei da Pureza do Vinho: padrões de qualidade e origem'],
    ['Entreguerras e 2ª Guerra', 'Produção interrompida de forma significativa'],
    ['Pós-guerra', 'Renascimento gradual, com foco em vinhos de qualidade'],
    ['1971', 'Lei do Vinho: regras rígidas de classificação e qualidade'],
    ['Séc. XXI', 'Ênfase em vinhos secos de alta qualidade, em contraste com os doces tradicionais; sustentabilidade']
  ]);
  P('Liebfraumilch, o vinho da garrafa azul', 'fatos', [
    ['Nome', 'Vem da igreja Liebfrauenstift-Kirche, em Worms (Rheinhessen)'],
    ['Origem', 'Müller-Thurgau, Silvaner, Kerner e outras, em vinhedos ao redor de Worms'],
    ['Fama', 'Popular no séc. XIX e início do XX; virou sinônimo de vinho genérico e de massa'],
    ['Regras', 'Entre 18 e 40 g/L de açúcar residual; 70% de Riesling, Silvaner, Kerner ou Müller-Thurgau'],
    ['Onde', 'Rheinhessen, Nahe, Rheingau e Pfalz']
  ]);
  P('Riesling', 'fatos', [
    ['Origem', 'Alemã, com registros desde pelo menos o séc. XV'],
    ['Onde', 'Mosel, Rheingau, Pfalz e Rheinhessen; também França, EUA, Austrália e Nova Zelândia'],
    ['Estilos', 'De seco a doce; reflete bem o terroir'],
    ['Aromas', 'Cítricos, frutas de caroço, flores brancas, minerais e petrolato']
  ]);
  P('Outras brancas da Alemanha', 'fatos', [
    ['Müller-Thurgau', 'Cruzamento de Riesling e Madeleine Royale; leve, aromática e menos ácida que a Riesling'],
    ['Silvaner', 'Maturação precoce; aromas sutis e frescos, notas herbáceas; de seco a ligeiramente doce'],
    ['Grauburgunder', 'Pinot Gris; corpo médio, boa acidez, frutas maduras, às vezes especiarias e frutas secas']
  ]);
  P('Tintas da Alemanha', 'fatos', [
    ['Spätburgunder', 'Pinot Noir, a tinta mais importante; elegante e complexa, frutas vermelhas e notas terrosas'],
    ['Dornfelder', 'Cruzamento de Helfensteiner e Heroldrebe; tintos profundos, frutas escuras e especiarias'],
    ['Blauer Portugieser', 'Maturação precoce; tintos leves e frutados, pouco tanino; entra em blends e rosés']
  ]);
  P('Eiswein', 'fatos', [
    ['O que é', 'Vinho de uvas superamadurecidas congeladas naturalmente na vinha'],
    ['Como', 'Prensadas ainda congeladas, a água fica no gelo e o açúcar sai mais fácil'],
    ['Resultado', 'Extremamente doce, raro e sofisticado'],
    ['Destaques', 'Mosel, Pfalz e Franken']
  ]);
  P('Outras regiões alemãs', 'lista', [
    ['', 'Franken (Francônia)'], ['', 'Ahr'], ['', 'Nahe'], ['', 'Mittelrhein'],
    ['', 'Hessische Bergstrasse'], ['', 'Württemberg'], ['', 'Baden']
  ]);
  P('Grandes produtores da Alemanha', 'produtores', [
    ['Meyer-Näkel', ''], ['Dr. Loosen', ''], ['Hermann Dönnhoff', ''], ['Eugen Müller', ''], ['August Eser', ''], ['Hupfeld', '']
  ]);

  R('Mosel', '', 'Mosel em resumo', 'fatos', [
    ['Onde', 'Sudoeste, na fronteira com Luxemburgo'],
    ['Nome', 'Vem de três rios (Mosel, Saar e Ruwer), sendo o Mosel o maior'],
    ['Área', 'Cerca de 9.000 ha'],
    ['Brancos', '90% do vinho é branco; Riesling dominante'],
    ['Bereiche', 'Cinco sub-regiões, segundo o slide', 'conferir'],
    ['Espumantes', 'Bons Sekt com a casta Elbling'],
    ['Clima e solo', 'Continental moderado, influência do rio; solo rico em ardósia']
  ]);
  R('Pfalz (Palatinado)', '', 'Pfalz em resumo', 'fatos', [
    ['Área', '23.000 ha, segunda maior região alemã em área plantada'],
    ['Passado', 'Era vista como extensão do Rheinhessen até os anos 1990, segundo o slide (a Wikipedia só diz que se chamou Rheinpfalz até 1995)', 'conferir'],
    ['Brancos', '60% do volume; grande produtora de espumantes e doces'],
    ['Brancas', 'Riesling, Pinot Blanc e Scheurebe'],
    ['Tintas', 'Pinot Noir, Portugieser e Dornfelder'],
    ['Solo', 'Loess, argila, calcário, arenito e ardósia']
  ]);
  R('Rheinhessen', '', 'Rheinhessen em resumo', 'fatos', [
    ['Área', 'Cerca de 26.000 ha: a maior região (Anbaugebiet) da Alemanha'],
    ['Liebfraumilch', 'Terra natal do Liebfraumilch; ainda hoje produz 30% do total, segundo o slide', 'conferir'],
    ['Brancas', 'Riesling, Müller-Thurgau e Scheurebe'],
    ['Tintas', 'Pinot Noir, Dornfelder e Portugieser']
  ]);
  R('Rheingau', '', 'Rheingau em resumo', 'fatos', [
    ['Onde', 'Margem norte do rio Reno'],
    ['Área', 'Pouco mais de 3.100 ha'],
    ['Brancos', 'Cerca de 84% da produção, segundo o slide', 'conferir'],
    ['Castas', 'Riesling soberana nas brancas; Spätburgunder domina as tintas'],
    ['Produtores', 'Muitas vinícolas pertencem a famílias aristocratas que dominam a região desde o séc. XIII']
  ]);

  var LEVELS = { 'A Alemanha em números': 'avancado',
    'Marcos do vinho alemão': 'avancado',
    'Liebfraumilch, o vinho da garrafa azul': 'avancado',
    'Riesling': 'medio',
    'Outras brancas da Alemanha': 'avancado',
    'Tintas da Alemanha': 'avancado',
    'Eiswein': 'medio',
    'Outras regiões alemãs': 'avancado',
    'Grandes produtores da Alemanha': 'expert',
    'Mosel em resumo': 'medio',
    'Pfalz em resumo': 'avancado',
    'Rheinhessen em resumo': 'avancado',
    'Rheingau em resumo': 'avancado',
    'Cozinha da Alemanha': 'avancado' };

  H('Alemanha', 'Cozinha da Alemanha', [
    ['Cozinha em geral', 'Mistura de tradições regionais e influências de França, Áustria e Suíça'],
    ['Pão', 'Elemento importante da cozinha regional'],
    ['Embutidos', 'Elemento importante da cozinha regional'],
    ['Batatas', 'Elemento importante da cozinha regional'],
    ['Massas', 'Elemento importante da cozinha regional'],
    ['Porco', 'Elemento importante da cozinha regional'],
    ['Hortaliças', 'Elemento importante da cozinha regional'],
    ['Bebidas', 'Vinhos e cervejas']
  ]);

  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });
  return { code: 'DE', version: 1, cards: cards };
})());

// ======================  ÁUSTRIA  ======================
STUDY_PACKS.push((function () {
  var cards = [];
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function P(title, kind, items) { cards.push({ topic: 'pais', ref: ['Áustria'], title: title, kind: kind, items: mk(items) }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? ['Áustria', region, sub] : ['Áustria', region], title: title, kind: kind, items: mk(items) });
  }
  function H(group, title, items) { cards.push({ topic: 'harmonizacao', group: group, title: title, kind: 'fatos', items: mk(items) }); }

  P('A Áustria em números', 'numeros', [
    ['46 mil ha', 'Área plantada'],
    ['200 mi L', 'Produção média anual, segundo o slide', 'conferir'],
    ['63%', 'Vinhos brancos no volume total; tintos, rosés e outros somam 37%'],
    ['27 L', 'Consumo de vinho por habitante por ano'],
    ['30%', 'Dos vinhedos são de Grüner Veltliner']
  ]);
  P('DAC: denominação austríaca', 'fatos', [
    ['Sigla', 'DAC: Districtus Austriae Controllatus'],
    ['Início', 'Sistema próprio desde 2003, segundo o slide (o primeiro DAC foi o Weinviertel, safra 2002)', 'conferir'],
    ['Quantidade', '18 DACs (o slide diz 15)', 'corrigido'],
    ['Mais importante', 'Wachau, segundo o slide (DAC desde a safra 2020)', 'conferir']
  ]);
  P('Área plantada por estado', 'numeros', [
    ['28.145 ha', 'Niederösterreich (Baixa Áustria), o maior'],
    ['13.100 ha', 'Burgenland'],
    ['4.633 ha', 'Steiermark (Estíria)'],
    ['637 ha', 'Wien (Viena)'],
    ['170 ha', 'Kärnten'],
    ['45 ha', 'Oberösterreich'],
    ['10 ha', 'Vorarlberg'],
    ['7 ha', 'Salzburg'],
    ['5 ha', 'Tirol']
  ]);
  P('Grüner Veltliner', 'fatos', [
    ['Origem', 'Austríaca; presente em todas as regiões, sobretudo Wachau, Kamptal, Kremstal e Weinviertel'],
    ['Perfil', 'Alta acidez (estrutura e frescor); rendimento moderado a baixo; boa expressão do terroir'],
    ['Aromas', 'Cítricos, florais e pimenta-branca'],
    ['Estilos', 'Versátil na vinificação, com vários estilos']
  ]);
  P('Outras brancas da Áustria', 'fatos', [
    ['Riesling', 'Uma das brancas mais nobres do mundo; de frutas cítricas a notas minerais complexas'],
    ['Sauvignon Blanc', 'Adaptada ao clima mais fresco; frutas tropicais, ervas e grama cortada'],
    ['Weissburgunder', 'Pinot Blanc; fresca e frutada, notas de maçã, pera e toque de amêndoa']
  ]);
  P('Tintas da Áustria', 'fatos', [
    ['Blaufränkisch', 'Uma das tintas mais importantes; corpo médio a encorpado, frutas escuras, especiarias, taninos suaves'],
    ['Zweigelt', 'Cruzamento de Blaufränkisch e St. Laurent; a tinta mais plantada; frutada (cereja, amora)'],
    ['St. Laurent', 'Elegante e aromática, frutas vermelhas e escuras, floral; o slide a chama de autóctone', 'conferir']
  ]);
  P('Cozinha da Áustria', 'lista', [
    ['', 'Culinária diversa: influências da Alemanha, Hungria, República Tcheca e Itália'],
    ['', 'Schnitzel (vitela fina empanada)'], ['', 'Embutidos e salsichas'], ['', 'Queijos de cabra'], ['', 'Massas'], ['', 'Porco'], ['', 'Vinhos e cervejas']
  ]);
  P('Grandes produtores da Áustria', 'produtores', [
    ['Weingut Alzinger', ''], ['Weingut Hiedler', '']
  ]);

  R('Baixa Áustria (Niederösterreich)', '', 'Baixa Áustria em resumo', 'fatos', [
    ['Onde', 'Nordeste; a maior e mais diversificada região vinícola do país'],
    ['Sub-regiões', 'Wachau, Kamptal, Kremstal, Traisental e Weinviertel'],
    ['Brancos', 'Alta qualidade, sobretudo de Grüner Veltliner'],
    ['Tintos', 'Zweigelt e Pinot Noir'],
    ['Solos', 'Ardósia, calcário e loess']
  ]);
  R('Viena (Wien)', '', 'Viena', 'fatos', [
    ['Curiosidade', 'Capital com vinhedos dentro dos limites urbanos (o slide diz ser a única capital europeia)', 'conferir'],
    ['Castas', 'Grüner Veltliner, Riesling, Zweigelt e Blaufränkisch'],
    ['Vinhedos', 'Nas colinas ao redor da cidade, com encostas íngremes e boa exposição ao sol']
  ]);
  R('Burgenland', '', 'Burgenland em resumo', 'fatos', [
    ['Onde', 'Leste, na fronteira com a Hungria'],
    ['Clima', 'Quente e seco: tintos encorpados e vinhos doces de sobremesa'],
    ['Tintas', 'Blaufränkisch, Zweigelt e St. Laurent'],
    ['Brancas', 'Grüner Veltliner, Welschriesling e Chardonnay'],
    ['Neusiedlersee', 'Famosa pelos doces de uvas com podridão nobre']
  ]);
  R('Estíria (Steiermark)', '', 'Estíria em resumo', 'fatos', [
    ['Onde', 'Sudeste; paisagem montanhosa com vinhas em encostas'],
    ['Brancos', 'Frescos e aromáticos, sobretudo de Sauvignon Blanc e Welschriesling'],
    ['Laranja', 'Também vinhos laranja, de brancas com maceração prolongada'],
    ['Tintos', 'Blauer Wildbacher e Zweigelt']
  ]);

  var LEVELS = { 'A Áustria em números': 'avancado',
    'DAC: denominação austríaca': 'avancado',
    'Área plantada por estado': 'expert',
    'Grüner Veltliner': 'medio',
    'Outras brancas da Áustria': 'avancado',
    'Tintas da Áustria': 'avancado',
    'Cozinha da Áustria': 'avancado',
    'Grandes produtores da Áustria': 'expert',
    'Baixa Áustria em resumo': 'avancado',
    'Viena': 'avancado',
    'Burgenland em resumo': 'avancado',
    'Estíria em resumo': 'avancado' };

  H('Áustria', 'Cozinha da Áustria', [
    ['Schnitzel', 'Vitela fina empanada; prato típico da culinária austríaca'],
    ['Embutidos e salsichas', 'Elementos típicos da cozinha'],
    ['Queijos de cabra', 'Elemento típico da cozinha'],
    ['Massas', 'Elemento típico da cozinha'],
    ['Porco', 'Elemento típico da cozinha'],
    ['Bebidas', 'Vinhos e cervejas']
  ]);

  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });
  return { code: 'AT', version: 1, cards: cards };
})());

// ======================  GRÉCIA  ======================
STUDY_PACKS.push((function () {
  var cards = [];
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function P(title, kind, items) { cards.push({ topic: 'pais', ref: ['Grécia'], title: title, kind: kind, items: mk(items) }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? ['Grécia', region, sub] : ['Grécia', region], title: title, kind: kind, items: mk(items) });
  }
  function H(group, title, items) { cards.push({ topic: 'harmonizacao', group: group, title: title, kind: 'fatos', items: mk(items) }); }

  P('A Grécia em números', 'numeros', [
    ['96 mil ha', 'Vinhedos'],
    ['Mais de 300', 'Castas nativas, segundo o slide (a Wikipedia cita cerca de 200 variedades)', 'conferir'],
    ['208 mi L', 'Produção anual'],
    ['20%', 'Do vinho é exportado (o Chile exporta cerca de 60%)'],
    ['60%', 'Brancos; tintos 32%, rosés e outros 8%'],
    ['11', 'Regiões produtoras oficiais'],
    ['180 mil', 'Viticultores, e 1.300 vinícolas']
  ]);
  P('Marcos do vinho grego', 'linha', [
    ['2000 a.C.', 'Vinho já consumido, transmitido pela cultura creto-micênica; bebida espiritual e cultural (simpósios, Dionísio)'],
    ['', 'Moderação como regra: krasi, 1 parte de vinho para 2 de água'],
    ['600 a.C.', 'Fundação de Massalia (Marselha); viticultura levada às áreas colonizadas (França, Espanha, Itália)'],
    ['', 'Ânforas pontiagudas para longas distâncias; resina de pinheiro como aromatizante e conservante'],
    ['146 a.C.', 'Domínio romano: início do fim da era de poder grega'],
    ['330 d.C.', 'Império Bizantino: viticultura exercida por monges, com melhora da qualidade'],
    ['1453', 'Turcos otomanos tomam o poder e cobram altos impostos, inibindo a atividade'],
    ['1821', 'Turcos perdem e destroem vinhedos; segue vinho de baixa qualidade'],
    ['1898-1920', 'Filoxera, seguida de investimento em cooperativas e quantidade'],
    ['Pós-guerras', 'Cinco grupos dominam: Achaia, Cambas, Kourtakis, Boutaris e Tsantalis'],
    ['A partir de 1980', 'Regulamentação e melhora da qualidade, com padrões europeus'],
    ['1990-2000', 'Mercado amadurece; crescem vinícolas independentes de pequena produção'],
    ['Hoje', 'Único setor agrícola do país totalmente autofinanciado']
  ]);
  P('Geografia da Grécia', 'fatos', [
    ['Ilhas', 'Cerca de 3.000 ilhas, 63 habitadas, segundo o slide; a Wikipedia cita até 227 habitadas', 'corrigido'],
    ['Latitude', '34º a 42º N'],
    ['Mares', 'Egeu a leste, Jônico a oeste'],
    ['Relevo', 'Muito montanhosa, com terras baixas só perto da costa; Pindos é a espinha dorsal'],
    ['Monte Olimpo', '2.917 m, o pico mais alto, perto do Egeu'],
    ['Planícies', 'Três importantes: Tessália, Macedônia e Trácia'],
    ['Ilhas do Egeu', 'Cordilheiras submersas emergem nos pontos mais altos e formam as ilhas do sul do Egeu']
  ]);
  P('Solo e clima da Grécia', 'fatos', [
    ['Solos', 'Maioria de calcário e arenito, rasos e pobres; nas planícies, mais profundos e argilosos'],
    ['Ilhas', 'Algumas, como Santorini, vulcânicas e muito pobres em nutrientes; também xisto e giz'],
    ['Clima', 'Mediterrâneo: muito sol, verões longos e secos, invernos curtos e amenos'],
    ['Exceções', 'Topografia e altitude geram muitos desvios do clima mediterrâneo suave']
  ]);
  P('Denominações e zonas da Grécia', 'fatos', [
    ['DOP', '35 denominações, segundo o slide', 'conferir'],
    ['Principais', 'Santorini (Assyrtiko), Nemea (Agiorgitiko), Mantinia (Moschofilero), Naoussa e Amyntaio (Xinomavro)'],
    ['PGI', '127, incluindo os vinhos regionais, segundo o slide', 'conferir'],
    ['TSG', 'Duas Especialidades Tradicionais Garantidas'],
    ['Cinco zonas', 'Norte (Trácia, Macedônia, Tessália, Épiro); Grécia Central e Ática; Peloponeso e Ilhas Jônicas; Creta; Ilhas do Egeu']
  ]);
  P('Tintas da Grécia', 'fatos', [
    ['Xinomavro', 'Sobretudo da Macedônia; tintos encorpados, taninos firmes, bons para envelhecer'],
    ['Agiorgitiko', 'Sobretudo do Peloponeso; versátil, de tintos leves a encorpados'],
    ['Mavrodaphne', 'Sobretudo do Peloponeso; tintos doces, aromáticos e encorpados, também fortificados']
  ]);
  P('Brancas da Grécia', 'fatos', [
    ['Assyrtiko', 'Sobretudo de Santorini; seca, fresca e mineral; reconhecida no mundo'],
    ['Moschofilero', 'Sobretudo do Peloponeso; aromática, floral e fresca; vinho de verão'],
    ['Malagousia', 'Redescoberta na Macedônia; aromas frutados e sedosa; destaque recente']
  ]);
  P('Cozinha da Grécia', 'lista', [
    ['', 'Ingredientes frescos e sabores autênticos'],
    ['', 'Pães e massas (pita, orzo)'], ['', 'Azeite'], ['', 'Frutos do mar'],
    ['', 'Queijos: feta, kefalotyri, graviera'], ['', 'Ervas e especiarias: tomilho, alecrim, canela'], ['', 'Legumes e vinho']
  ]);
  P('Grandes produtores da Grécia', 'produtores', [
    ['Domaine Gerovassiliou', ''], ['Gaia Wines', ''], ['Porto Carras', ''], ['Domaine Skouras', ''], ['Alpha Estates', ''], ['Domaine Sigalas', '']
  ]);

  R('Macedônia', '', 'Macedônia em resumo', 'fatos', [
    ['Onde', 'Norte da Grécia; clima continental e solos variados'],
    ['Castas', 'Xinomavro (tintos encorpados) e Malagousia (brancos aromáticos)'],
    ['Reconhecimento', 'Cresce no exterior, com investimento em vinificação moderna']
  ]);
  R('Macedônia', 'Naoussa', 'Naoussa', 'fatos', [
    ['Clima', 'Mediterrâneo e continental'],
    ['Vinhedos', 'Colinas suaves'],
    ['Casta', 'Xinomavro']
  ]);
  R('Macedônia', 'Amyntaio', 'Amyntaio', 'fatos', [
    ['Clima', 'Continental, com grande influência dos ventos do norte'],
    ['Vinhedos', 'Altos, de 570 a 750 m de altitude'],
    ['Solo', 'Muito arenoso'],
    ['Casta', 'Xinomavro']
  ]);
  R('Tessália', '', 'Tessália', 'fatos', [
    ['Produção', 'Grande produção de vinho de mesa branco']
  ]);
  R('Tessália', 'Rapsani', 'Rapsani', 'fatos', [
    ['Onde', 'Aos pés do Monte Olimpo'],
    ['Corte', 'Xinomavro, Stavroto e Krasato'],
    ['Perfil', 'Ótimo equilíbrio e boa concentração']
  ]);
  R('Epiro', '', 'Epiro', 'fatos', [
    ['Zitsa', 'Vinho espumante'],
    ['Metsovo', 'Tinto de Cabernet Sauvignon, segundo o slide', 'conferir']
  ]);
  R('Grécia Central e Ática', '', 'Grécia Central e Ática', 'fatos', [
    ['Relevo', 'Topografia complexa e montanhosa'],
    ['Atenas', 'Maior cidade do país'],
    ['Retsina', 'Local de nascimento do Retsina'],
    ['Castas', 'Savatiano, Roditis e variedades internacionais'],
    ['Denominações', 'Mais de 20 zonas PGI; DOP Ática (área de Atenas) e Atalanti']
  ]);
  R('Peloponeso', '', 'Peloponeso em resumo', 'fatos', [
    ['Clima', 'Mediterrâneo, com solos variados'],
    ['Castas', 'Agiorgitiko (tintos versáteis) e Moschofilero (brancos aromáticos)'],
    ['Mantinia', 'DOP de brancos no centro da região'],
    ['Nemea', 'Famosa DOP de tintos a nordeste de Corinto, lar da Agiorgitiko; com barrica, encorpados e complexos']
  ]);
  R('Peloponeso', 'Patras', 'Patras', 'fatos', [
    ['Vinhos', 'Licorosos de Mavrodaphne']
  ]);
  R('Ilhas do Egeu', '', 'Ilhas do Egeu', 'fatos', [
    ['Solos', 'Ricos: praias de areia branca e negra e blocos de mármore; vinhos de terroir'],
    ['Samos e Lemnos', 'Maior produção de vinhos moscatéis']
  ]);
  R('Ilhas do Egeu', 'Santorini', 'Santorini', 'fatos', [
    ['Clima', 'Ventos fortes'],
    ['Solo', 'Vulcânico e poroso, de lava, xisto e pedra-pomes'],
    ['Casta', 'Assyrtiko']
  ]);
  R('Creta', '', 'Creta', 'fatos', [
    ['Peso', '15% da produção de vinhos gregos, segundo o slide', 'conferir'],
    ['Clima', 'Mediterrâneo, com solos variados'],
    ['Castas', 'Vilana e Vidiano, brancas']
  ]);

  var LEVELS = { 'A Grécia em números': 'avancado',
    'Marcos do vinho grego': 'avancado',
    'Geografia da Grécia': 'expert',
    'Solo e clima da Grécia': 'avancado',
    'Denominações e zonas da Grécia': 'expert',
    'Tintas da Grécia': 'avancado',
    'Brancas da Grécia': 'avancado',
    'Cozinha da Grécia': 'avancado',
    'Grandes produtores da Grécia': 'expert',
    'Macedônia em resumo': 'avancado',
    'Naoussa': 'avancado',
    'Amyntaio': 'expert',
    'Tessália': 'expert',
    'Rapsani': 'expert',
    'Epiro': 'expert',
    'Grécia Central e Ática': 'avancado',
    'Peloponeso em resumo': 'avancado',
    'Patras': 'expert',
    'Ilhas do Egeu': 'avancado',
    'Santorini': 'medio',
    'Creta': 'avancado',
    'Cozinha da Grécia (moussaka)': 'avancado' };

  H('Grécia', 'Cozinha da Grécia (moussaka)', [
    ['Moussaka', 'Prato mais emblemático do país; espécie de lasanha de berinjela grelhada, carne moída temperada, tomate e bechamel, assada até dourar'],
    ['Tempero', 'Carne com canela e noz-moscada']
  ]);

  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });
  return { code: 'GR', version: 1, cards: cards };
})());

// ======================  LÍBANO  ======================
STUDY_PACKS.push((function () {
  var cards = [];
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function P(title, kind, items) { cards.push({ topic: 'pais', ref: ['Líbano'], title: title, kind: kind, items: mk(items) }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? ['Líbano', region, sub] : ['Líbano', region], title: title, kind: kind, items: mk(items) });
  }

  P('O Líbano em resumo', 'fatos', [
    ['História', 'Mais de 5.000 anos de vinho, ligados aos fenícios (Byblos, Sidon e Tyre), que o espalharam pelo Mediterrâneo'],
    ['Otomanos', 'A tradição foi preservada por comunidades cristãs, sobretudo no Vale do Bekaa'],
    ['Área', 'Cerca de 2.000 ha de vinhedos'],
    ['Produção', '8 a 10 milhões de garrafas por ano'],
    ['Estilo', 'Forte vocação para tintos estruturados, de estilo mediterrâneo']
  ]);
  P('Três zonas do Líbano', 'lista', [
    ['', 'Vale do Bekaa: principal e histórica'], ['', 'Monte Líbano: encostas montanhosas'], ['', 'Sul do Líbano: produção emergente']
  ]);
  P('Uvas do Líbano', 'fatos', [
    ['Tintas', 'Cabernet Sauvignon, Cinsault, Carignan, Syrah, Grenache e Mourvèdre'],
    ['Brancas', 'Chardonnay, Sauvignon Blanc, Viognier e Muscat'],
    ['Cinsault', 'Por décadas, a espinha dorsal dos vinhos libaneses, antes das bordalesas'],
    ['Autóctones', 'Obaideh e Merwah (renascimento recente)'],
    ['Parentesco', 'Obaideh e Merwah seriam parentes antigas de Chardonnay e Sémillon', 'conferir']
  ]);
  P('Estilo dos vinhos libaneses', 'fatos', [
    ['Tintos', 'Potentes, estruturados, grande guarda; lembram o sul do Ródano e um Bordeaux quente'],
    ['Brancos', 'Aromáticos e frescos, graças à altitude'],
    ['Rosés', 'Gastronômicos e secos, de Cinsault e Grenache']
  ]);
  P('Château Musar', 'fatos', [
    ['Papel', 'O maior ícone do país'],
    ['Método', 'Fermentações espontâneas e longos envelhecimentos; perfil oxidativo controlado'],
    ['Longevidade', 'Mais de 30 anos'],
    ['Corte', 'Cabernet Sauvignon, Cinsault e Carignan'],
    ['Comparação', 'Um Bordeaux "selvagem" e mediterrâneo']
  ]);
  P('Classificação e particularidades', 'fatos', [
    ['Sistema', 'Sem DOP/IGP europeus; usa-se Vin du Liban, Bekaa Valley e Table Wine'],
    ['Colheita', 'Manual, obrigatória pelo relevo'],
    ['Irrigação', 'Raramente necessária (vinhas profundas)'],
    ['Cinsault', 'Vinhas antigas, com mais de 60 anos'],
    ['Resiliência', 'Produção mantida mesmo na guerra civil']
  ]);

  R('Vale do Bekaa', '', 'Vale do Bekaa', 'fatos', [
    ['Peso', 'Mais de 80% da produção nacional, segundo o slide', 'conferir'],
    ['Altitude', 'Média de 900 a 1.200 m'],
    ['Clima', 'Mediterrâneo continentalizado: verões quentes e secos, invernos frios com neve, grande amplitude térmica'],
    ['Solos', 'Calcário, cascalho, argila e pedra'],
    ['Resultado', 'Maturação fenólica completa, com acidez e frescor preservados'],
    ['Estilo clássico', 'Cortes bordaleses adaptados ao clima']
  ]);
  R('Vale do Bekaa', '', 'Produtores históricos do Bekaa', 'produtores', [
    ['Château Ksara', ''], ['Château Musar', ''], ['Château St Thomas', ''], ['Domaine Wardy', '']
  ]);
  R('Monte Líbano e norte', '', 'Monte Líbano', 'fatos', [
    ['Onde', 'Paralelo ao Bekaa, com vinhedos em encostas íngremes'],
    ['Solos', 'Calcários, em altitudes elevadas'],
    ['Estilo', 'Produção menor e em alta de qualidade; vinhos mais frescos e elegantes, sobretudo brancos']
  ]);
  R('Sul do Líbano (Jezzine)', '', 'Sul do Líbano', 'fatos', [
    ['Clima', 'Zona mais quente, perto de Israel'],
    ['Vitivinicultura', 'Recente'],
    ['Estilo', 'Vinhos potentes, concentrados e de perfil maduro']
  ]);

  var LEVELS = { 'O Líbano em resumo': 'avancado',
    'Três zonas do Líbano': 'avancado',
    'Uvas do Líbano': 'avancado',
    'Estilo dos vinhos libaneses': 'avancado',
    'Château Musar': 'avancado',
    'Classificação e particularidades': 'expert',
    'Vale do Bekaa': 'avancado',
    'Produtores históricos do Bekaa': 'avancado',
    'Monte Líbano': 'expert',
    'Sul do Líbano': 'expert' };

  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });
  return { code: 'LB', version: 1, cards: cards };
})());

// ======================  ESLOVÊNIA  ======================
STUDY_PACKS.push((function () {
  var cards = [];
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function P(title, kind, items) { cards.push({ topic: 'pais', ref: ['Eslovênia'], title: title, kind: kind, items: mk(items) }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? ['Eslovênia', region, sub] : ['Eslovênia', region], title: title, kind: kind, items: mk(items) });
  }

  P('A Eslovênia em números', 'numeros', [
    ['14.900 ha', 'Vinhedos, segundo o slide (a Wikipedia cita 22.300 ha)', 'conferir'],
    ['55 mi L', 'Produção média anual, segundo o slide (a Wikipedia cita 80 a 90 mi L)', 'conferir'],
    ['2.500', 'Vinícolas, segundo o slide (a Wikipedia cita mais de 28.000)', 'conferir'],
    ['Cerca de 60', 'Castas cultivadas'],
    ['37 L', 'Consumo por habitante por ano'],
    ['72%', 'Do volume é de vinho branco'],
    ['70%', 'Do vinho é Kakovostno ZGP (qualidade) ou Vrhunsko ZGP (qualidade premium)']
  ]);
  P('Marcos do vinho esloveno', 'linha', [
    ['Há 2.500 anos', 'Vinho produzido por tribos celtas e ilírias'],
    ['600 d.C. a 1918', 'Da queda do Império Romano ao fim do Império Austro-Húngaro, vinhedos cultivados por monges'],
    ['1918', 'Torna-se parte da antiga Iugoslávia'],
    ['1963', 'Iugoslávia renomeada República Federal Socialista, sob Josip Broz Tito'],
    ['', 'Produção massificada; o slide fala em integração ao Bloco Soviético (a Iugoslávia era não alinhada)', 'corrigido'],
    ['25 jun 1991', 'Independência'],
    ['Jan 1992', 'Exército iugoslavo sai; a União Europeia reconhece a Eslovênia como Estado soberano']
  ]);
  P('Três regiões da Eslovênia', 'fatos', [
    ['Primorska', 'Oeste: clima mediterrâneo e solos calcários; brancos frescos e tintos encorpados'],
    ['Podravje', 'Nordeste: clima continental; brancos aromáticos e tintos elegantes'],
    ['Posavje', 'Sudeste: clima temperado e solos variados; ampla gama de brancos e tintos'],
    ['Sustentabilidade', 'Muitos produtores adotam práticas orgânicas e biodinâmicas']
  ]);
  P('Brancas da Eslovênia', 'fatos', [
    ['Rebula', 'Autóctone de Brda; brancos frescos e complexos, notas cítricas e minerais'],
    ['Sivi Pinot', 'Pinot Gris; internacional, cultivada em várias regiões'],
    ['Chardonnay', 'Brancos elegantes, frutas tropicais e acidez refrescante']
  ]);
  P('Tintas da Eslovênia', 'fatos', [
    ['Refošk', 'Autóctone do litoral; tintos encorpados, taninos firmes, frutas escuras e especiarias'],
    ['Modra frankinja', 'Blaufränkisch; sobretudo no nordeste; corpo médio, frutas vermelhas e acidez vibrante'],
    ['Zweigelt', 'Tintos macios e frutados, cereja e especiarias; o slide a chama de híbrida (é um cruzamento de Blaufränkisch e St. Laurent)', 'corrigido']
  ]);
  P('Grandes produtores da Eslovênia', 'produtores', [
    ['Marjan Simčič', ''], ['Movia', ''], ['Sutor', ''], ['Santomas', '']
  ]);

  R('Primorska (Litoral)', '', 'Primorska', 'fatos', [
    ['Local', 'Oeste; influência do Adriático e dos Alpes Julianos'],
    ['Clima e solo', 'Mediterrâneo e calcário'],
    ['Castas', 'Rebula, Malvazija Istarska e Refošk']
  ]);
  R('Podravje (Drava)', '', 'Podravje', 'fatos', [
    ['Clima', 'Continental: invernos frios e verões quentes'],
    ['Solos', 'Variados e férteis'],
    ['Castas', 'Sauvignon Blanc, Chardonnay, Riesling, Pinot Gris, Pinot Noir e Blaufränkisch']
  ]);
  R('Posavje (Baixo Sava)', '', 'Posavje', 'fatos', [
    ['Clima', 'Mais temperado'],
    ['Paisagem', 'Vales férteis, colinas suaves e planícies fluviais'],
    ['Castas', 'Riesling, Sauvignon Blanc, Chardonnay, Blaufränkisch e Zweigelt']
  ]);

  var LEVELS = { 'A Eslovênia em números': 'expert',
    'Marcos do vinho esloveno': 'expert',
    'Três regiões da Eslovênia': 'avancado',
    'Brancas da Eslovênia': 'avancado',
    'Tintas da Eslovênia': 'expert',
    'Grandes produtores da Eslovênia': 'expert',
    'Primorska': 'expert',
    'Podravje': 'expert',
    'Posavje': 'expert' };

  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });
  return { code: 'SI', version: 1, cards: cards };
})());
