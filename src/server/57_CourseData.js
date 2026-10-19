/**
 * Curso (estilo trilha): conteúdo das unidades. Cada pergunta sai de um cartão de estudo (material de aula) — itens marcados
 * "conferir" não entram. Tipos: mc (múltipla escolha), match (ligar pares), order (ordenar).
 * Unidade-piloto: Bordeaux (França). Para criar outra unidade basta acrescentar um objeto em COURSE_UNITS.
 */
var COURSE_UNITS = (function () {
  function mc(q, right, wrong, why) { return { t: 'mc', q: q, options: [right].concat(wrong), a: 0, why: why }; }
  function match(q, pairs, why) { return { t: 'match', q: q, pairs: pairs, why: why }; }
  function order(q, items, why) { return { t: 'order', q: q, items: items, why: why }; }

  var bordeaux = {
    id: 'bordeaux', title: 'Bordeaux', country: 'França', region: 'Bordeaux',
    lessons: [
      { id: 'bdx-1', title: 'Duas margens, três rios', level: 'medio',
        tip: 'Bordeaux fica no sudoeste da França, junto ao Atlântico. A margem esquerda do rio Gironde (Médoc e Graves) é terra de Cabernet Sauvignon; a margem direita (Saint-Émilion e Pomerol) é de Merlot.',
        questions: [
          mc('Qual uva predomina na margem esquerda de Bordeaux?', 'Cabernet Sauvignon', ['Merlot', 'Pinot Noir', 'Syrah'], 'A margem esquerda (Médoc e Graves) é dominada pela Cabernet Sauvignon: vinhos encorpados e de longa guarda.'),
          mc('Qual uva predomina na margem direita?', 'Merlot', ['Cabernet Sauvignon', 'Pinot Noir', 'Syrah'], 'Na margem direita (Saint-Émilion, Pomerol) manda a Merlot: vinhos mais suaves, frutados e de estrutura equilibrada.'),
          mc('Qual destas denominações fica na margem direita?', 'Pomerol', ['Pauillac', 'Margaux', 'Saint-Julien'], 'Pomerol e Saint-Émilion são as estrelas da margem direita.'),
          mc('Qual destas denominações fica na margem esquerda?', 'Pauillac', ['Pomerol', 'Saint-Émilion', 'Fronsac'], 'Pauillac, Margaux, Saint-Julien e Saint-Estèphe ficam no Médoc, na margem esquerda.'),
          mc('Como são, em geral, os vinhos da margem esquerda?', 'Encorpados e de longa guarda', ['Leves, para beber jovens', 'Doces e licorosos', 'Espumantes'], 'Cabernet Sauvignon com casca espessa: taninos robustos e muita longevidade.'),
          mc('Onde fica a região de Bordeaux?', 'Sudoeste da França, junto ao Atlântico', ['Sul da França, no Mediterrâneo', 'Nordeste, perto da Alemanha', 'Centro, no vale do Loire'], 'Rios e afluentes escoavam o vinho; o porto de Bordeaux está entre os mais movimentados da França.')
        ] },
      { id: 'bdx-2', title: 'As uvas de Bordeaux', level: 'medio',
        tip: 'Tintas: Cabernet Sauvignon, Merlot, Cabernet Franc e Petit Verdot. Brancas: Sauvignon Blanc, Sémillon e Muscadelle.',
        questions: [
          match('Ligue a uva ao seu papel', [['Merlot', 'Taninos suaves; rainha da margem direita'], ['Cabernet Sauvignon', 'Casca espessa; encorpada e longeva'], ['Sauvignon Blanc', 'Acidez vibrante e aromas cítricos'], ['Sémillon', 'Corpo, textura aveludada e podridão nobre']], 'Cada uva tem uma função no corte e no estilo do vinho.'),
          mc('Qual destas é uma uva branca de Bordeaux?', 'Sémillon', ['Merlot', 'Petit Verdot', 'Cabernet Franc'], 'As brancas de Bordeaux são Sauvignon Blanc, Sémillon e Muscadelle.'),
          mc('Qual uva tem aromas de cassis, amora e especiarias?', 'Cabernet Sauvignon', ['Merlot', 'Sauvignon Blanc', 'Sémillon'], 'A Merlot lembra cereja, ameixa e chocolate; a Cabernet Sauvignon, cassis e amora.'),
          mc('A Cabernet Sauvignon nasceu do cruzamento de quais uvas?', 'Cabernet Franc com Sauvignon Blanc', ['Merlot com Pinot Noir', 'Malbec com Syrah', 'Cabernet Franc com Merlot'], 'Foi um cruzamento natural, entre o fim do século XVII e o início do XVIII, em Bordeaux.'),
          mc('Qual uva dá taninos suaves e aromas de cereja, ameixa e chocolate?', 'Merlot', ['Cabernet Sauvignon', 'Petit Verdot', 'Sauvignon Blanc'], 'Merlot: acessível e versátil, escolha popular entre iniciantes e apreciadores.'),
          mc('Qual uva branca aparece em pouca quantidade e equilibra Sauvignon Blanc e Sémillon?', 'Muscadelle', ['Chardonnay', 'Riesling', 'Viognier'], 'A Muscadelle traz aromas florais e frutados.')
        ] },
      { id: 'bdx-3', title: 'Margem esquerda: Médoc e Graves', level: 'avancado',
        tip: 'Médoc vem do latim "medio aquae": entre as águas. O solo é de cascalho, com drenagem excelente. As quatro comunas famosas: Pauillac, Margaux, Saint-Julien e Saint-Estèphe. Graves leva o nome do seu solo de cascalho.',
        questions: [
          mc('O nome Médoc vem do latim "medio aquae". O que significa?', 'Entre as águas', ['Terra de ouro', 'Colina do sol', 'Vale dos reis'], 'A região fica entre o Atlântico, o estuário do Gironde e os rios.'),
          mc('Que solo predomina no Médoc?', 'Cascalho', ['Argila pesada', 'Areia de praia', 'Calcário branco'], 'O cascalho drena muito bem: as vinhas passam por um estresse hídrico que concentra as uvas.'),
          match('Ligue cada comuna do Médoc ao seu perfil', [['Pauillac', 'Força e estrutura'], ['Margaux', 'Elegância e taninos sedosos'], ['Saint-Estèphe', 'Robusto e encorpado'], ['Saint-Julien', 'Equilibrado, com cedro e especiarias']], 'Quatro comunas, quatro caráteres dentro do mesmo território.'),
          mc('Quais são os dois ícones de Pauillac?', 'Château Lafite Rothschild e Château Latour', ['Château Margaux e Château Palmer', 'Château Pétrus e Château Cheval Blanc', 'Château d\'Yquem e Château Haut-Brion'], 'Lafite e Latour estão entre os vinhos mais prestigiosos do mundo.'),
          mc('Em qual comuna fica o Château Cos d\'Estournel?', 'Saint-Estèphe', ['Pauillac', 'Margaux', 'Saint-Julien'], 'Cos d\'Estournel é segundo cru de 1855, famoso pela arquitetura oriental.'),
          mc('Qual destes é um Premier Cru fora do Médoc?', 'Château Haut-Brion (Pessac-Léognan)', ['Château Lafite Rothschild', 'Château Latour', 'Château Margaux'], 'Haut-Brion fica em Graves, na comuna de Pessac-Léognan.'),
          mc('Por que Graves se chama assim?', 'Pelo solo de cascalho, pedras e seixos', ['Pelo tamanho dos cachos', 'Pelo clima muito frio', 'Por um rei chamado Graves'], 'Solo bem drenado: uvas concentradas e complexas.')
        ] },
      { id: 'bdx-4', title: 'Margem direita: Saint-Émilion e Pomerol', level: 'avancado',
        tip: 'Saint-Émilion só faz tinto, com Merlot, e tem classificação própria, criada em 1955 e revista de tempos em tempos. Pomerol é pequena, de argila, e não tem classificação oficial; Pétrus, Le Pin e Lafleur estão entre os vinhos mais cobiçados do mundo.',
        questions: [
          mc('Qual a uva dominante em Saint-Émilion e Pomerol?', 'Merlot', ['Cabernet Sauvignon', 'Syrah', 'Pinot Noir'], 'O solo de argila e o clima da margem direita favorecem a Merlot.'),
          mc('Pomerol tem classificação oficial?', 'Não: nenhuma classificação de Bordeaux inclui Pomerol', ['Sim, a de 1855', 'Sim, a de 1955', 'Sim, a Cru Bourgeois'], 'Mesmo sem classificação, Pomerol tem alguns dos vinhos mais cobiçados.'),
          mc('Qual destes é um dos vinhos mais cobiçados de Pomerol?', 'Château Pétrus', ['Château Latour', 'Château Margaux', 'Château d\'Yquem'], 'Pétrus, Le Pin e Lafleur: cada château com estilo próprio.'),
          match('Ligue o vinho à sua denominação', [['Château Pétrus', 'Pomerol'], ['Château Cheval Blanc', 'Saint-Émilion'], ['Château Lafite Rothschild', 'Pauillac'], ['Château Haut-Brion', 'Pessac-Léognan']], 'Margem direita: Pomerol e Saint-Émilion. Margem esquerda: Pauillac e Graves (Pessac-Léognan).'),
          mc('Em que ano foi criada a classificação de Saint-Émilion?', '1955', ['1855', '1932', '1973'], 'Revista periodicamente, uma das atualizações foi em 2012.'),
          mc('Quais níveis tem a classificação de Saint-Émilion?', 'Premier Grand Cru Classé A, Premier Grand Cru Classé B e Grand Cru Classé', ['Premier, Deuxième e Troisième Cru', 'Grand Cru e Cru Bourgeois', 'Só dois: Premier e Segundo'], 'Atenção: "Saint-Émilion Grand Cru" é uma AOC, não um nível da classificação.')
        ] },
      { id: 'bdx-5', title: 'A classificação de 1855', level: 'medio',
        tip: 'Feita para a Exposição Universal de Paris, a pedido de Napoleão III. Classifica 61 châteaux em cinco níveis, quase todos do Médoc. A única mudança foi em 1973, com a promoção do Mouton-Rothschild a Premier Cru.',
        questions: [
          mc('Para qual evento foi feita a classificação de 1855?', 'Exposição Universal de Paris', ['Jogos Olímpicos de Atenas', 'Feira do Vinho de Londres', 'Coroação de um rei'], 'Os melhores vinhos do Médoc foram listados para a exposição.'),
          mc('A pedido de quem foi feita a classificação?', 'Napoleão III', ['Luís XIV', 'Napoleão Bonaparte', 'Carlos Magno'], 'Era o imperador da França em 1855.'),
          order('Ordene os níveis de 1855, do topo à base', ['Premier Cru', 'Deuxième Cru', 'Troisième Cru', 'Quatrième Cru', 'Cinquième Cru'], 'Cinco categorias, de Premiers a Cinquièmes Crus: 5, 14, 14, 10 e 18 châteaux.'),
          mc('Qual château foi promovido a Premier Cru em 1973?', 'Mouton-Rothschild', ['Château Margaux', 'Château Latour', 'Château Palmer'], 'Foi a única mudança nos níveis desde 1855.'),
          mc('Quantos châteaux a classificação de 1855 reúne?', '61', ['25', '40', '100'], 'Quase todos da margem esquerda do Gironde (Médoc, mais Haut-Brion).'),
          mc('Quantos Premiers Crus existem hoje?', '5', ['3', '4', '10'], 'Lafite Rothschild, Latour, Margaux, Haut-Brion e, desde 1973, Mouton-Rothschild.')
        ] },
      { id: 'bdx-6', title: 'Sauternes e os doces', level: 'medio',
        tip: 'Sauternes é o branco doce de Bordeaux: Sémillon, Sauvignon Blanc e Muscadelle atacadas pela podridão nobre (Botrytis cinerea), com aromas de mel, damasco e pêssego. Château d\'Yquem é a referência máxima.',
        questions: [
          mc('Que fungo dá ao Sauternes os aromas de mel e damasco?', 'Botrytis cinerea (podridão nobre)', ['Míldio', 'Oídio', 'Filoxera'], 'A podridão nobre concentra açúcares e aromas, mantendo a acidez equilibrada.'),
          mc('Qual destas uvas entra no Sauternes?', 'Sémillon', ['Merlot', 'Cabernet Sauvignon', 'Cabernet Franc'], 'Sémillon, Sauvignon Blanc e Muscadelle.'),
          mc('Qual château é a referência máxima de Sauternes?', 'Château d\'Yquem', ['Château Pétrus', 'Château Latour', 'Château Palmer'], 'Premier Cru Supérieur, de grande longevidade.'),
          mc('Qual categoria de 1855 o Château d\'Yquem tem?', 'Premier Cru Supérieur', ['Quinto Cru', 'Cru Bourgeois', 'Grand Cru Classé de Saint-Émilion'], 'A classificação de 1855 também incluiu os doces de Sauternes.'),
          mc('Que aromas aparecem nos Sauternes?', 'Mel, damasco, pêssego e flores', ['Cassis, grafite e tabaco', 'Cereja, chocolate e especiarias', 'Limão, grapefruit e erva'], 'Cassis e grafite são de Pauillac; limão e grapefruit, da Sauvignon Blanc seca.'),
          mc('Qual denominação vizinha também produz vinhos doces?', 'Barsac', ['Pauillac', 'Pomerol', 'Margaux'], 'Barsac e Sauternes são vizinhas e produzem os doces de Bordeaux.')
        ] }
    ]
  };
  var units = [bordeaux];
  units.forEach(function (u) { u.lessons.forEach(function (l) { l.unit = u.id; l.questions.forEach(function (q, i) { q.id = l.id + '-' + (i + 1); }); }); });
  return units;
})();
