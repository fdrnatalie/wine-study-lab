/**
 * ENCICLOPÉDIA DE REGIÕES — pack FRANÇA (origem "pesquisado"). v1: 13 regiões vinícolas.
 *
 * Pesquisa de 27/09/2026 na Wikipedia em inglês: artigos das regiões ("Bordeaux wine",
 * "Burgundy wine", "Champagne wine region", "Rhône wine"…) e das denominações (Pauillac AOC,
 * Côte de Nuits, Hermitage AOC, Savennières, Madiran…).
 * Contornos APROXIMADOS por departamentos (18_GeoFrance.js); pontos: OpenStreetMap Nominatim.
 * Produtores e rótulos só quando o artigo os cita.
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/';

  function sub(name, classification, place, description, grapes, producers, wines, src) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src };
  }
  function prod(name, labels, src) { return { name: name, labels: labels || '', src: src || '' }; }

  var regions = [
    { name: 'Bordeaux', geo: 'FR:Bordeaux', sources: [EN + 'Bordeaux_wine'],
      description: 'Sudoeste da França, em torno da cidade de Bordeaux, no rio Garonne; o Dordogne se junta a ele formando o estuário da Gironde. Margem Esquerda (Médoc e Graves), Margem Direita (Saint-Émilion, Pomerol, em torno de Libourne) e, entre os rios, o Entre-Deux-Mers. Cerca de 110.800 ha na Gironde e mais de 700 milhões de garrafas por safra média. Tinto predomina (6 para 1). Classificações: 1855 (tintos do Médoc e doces de Sauternes), Saint-Émilion (1955, revista a cada ~10 anos) e Graves (1959).',
      climate: 'Atlântico/oceânico; os rios irrigam e moderam as temperaturas.',
      soils: 'Base calcária; as melhores vinhas em cascalho bem drenado perto da Gironde; também areia e argila.', altitude: '',
      history: 'Os romanos trouxeram a vinha no século I; no século XII, o casamento de Henrique Plantageneta com Leonor da Aquitânia abriu o mercado inglês.',
      grapes: ['Merlot', 'Cabernet Sauvignon', 'Cabernet Franc', 'Sémillon', 'Sauvignon Blanc'],
      grapes_other: ['Petit Verdot', 'Malbec', 'Carménère', 'Muscadelle'],
      notable_wines: 'Primeiros grandes crus de 1855: Lafite Rothschild, Margaux, Latour, Haut-Brion, Mouton Rothschild; Château d\'Yquem (Sauternes); Ausone, Cheval Blanc, Angélus, Pavie (Saint-Émilion); Pétrus, Le Pin (Pomerol)',
      producers: [],
      subregions: [
        sub('Pauillac', 'AOC', 'Pauillac, Gironde, France', 'Comuna do Haut-Médoc; tem três dos cinco premiers crus. "Se fosse preciso escolher uma comuna de Bordeaux para encabeçar a lista, seria Pauillac" (Hugh Johnson). Seus vinhos são considerados a quintessência de Bordeaux.',
          [],
          [prod('Château Latour', '1º grand cru classé (1855)'), prod('Château Lafite Rothschild', '1º grand cru classé (1855)'), prod('Château Mouton Rothschild', '1º grand cru classé (1855)'),
            prod('Château Pichon-Longueville', '2º grand cru'), prod('Château Pichon-Longueville-Lalande', '2º grand cru'), prod('Château Pontet-Canet', '5º grand cru')], '', EN + 'Pauillac_AOC'),
        sub('Margaux', 'AOC', 'Margaux, Gironde, France', 'A mais meridional das comunas do Médoc (com Cantenac, Arsac, Soussans e Labarde); tem 21 crus classés, mais que qualquer outra comuna de Bordeaux.',
          [],
          [prod('Château Margaux', '1º grand cru classé'), prod('Château Rauzan-Ségla', '2º grand cru'), prod('Château Lascombes', '2º grand cru'), prod('Château Brane-Cantenac', '2º grand cru'), prod('Château Palmer', '3º grand cru'), prod('Château Giscours', '3º grand cru')], '', EN + 'Margaux_AOC'),
        sub('Saint-Julien', 'AOC', 'Saint-Julien-Beychevelle, Gironde, France', 'Comuna do Médoc entre Pauillac e Margaux: os vinhos do sul são mais suaves, próximos dos de Margaux; os do norte, mais robustos (como os Léoville, vizinhos de Latour), lembram Pauillac.', [], [], '', EN + 'Saint-Julien_AOC'),
        sub('Saint-Estèphe', 'AOC', 'Saint-Estèphe, Gironde, France', 'A mais setentrional das seis comunas do Médoc; AOC desde 1936; cinco crus classés de 1855; 136 produtores (80 em cooperativas).',
          ['Cabernet Sauvignon', 'Merlot'],
          [prod('Château Cos d\'Estournel', '2º grand cru'), prod('Château Montrose', '2º grand cru'), prod('Château Calon-Ségur', '3º grand cru'), prod('Château Lafon-Rochet', '4º grand cru'), prod('Château Cos Labory', '5º grand cru')], '', EN + 'Saint-Est%C3%A8phe_AOC'),
        sub('Médoc (Bas-Médoc)', 'AOC', 'Lesparre-Médoc, Gironde, France', 'Parte norte da faixa vitícola da península do Médoc, na margem esquerda do estuário da Gironde; quase só tintos.', [], [], '', EN + 'M%C3%A9doc_AOC'),
        sub('Pessac-Léognan', 'AOC', 'Léognan, Gironde, France', 'Norte das Graves, junto à cidade; AOC criada em 1987. Famosa por tintos e brancos secos. Tem o único tinto fora do Médoc na classificação de 1855 e todos os crus classés das Graves (1953/59). O Château Pape Clément (1306) é a propriedade nomeada mais antiga de Bordeaux; Samuel Pepys elogiou o Haut-Brion em 1663.',
          [],
          [prod('Château Haut-Brion', '1º grand cru classé (1855)'), prod('Château La Mission Haut-Brion', 'cru classé de Graves'), prod('Château Pape Clément', 'propriedade nomeada mais antiga de Bordeaux'), prod('Domaine de Chevalier', 'cru classé de Graves'), prod('Château Carbonnieux', 'cru classé de Graves')], '', EN + 'Pessac-L%C3%A9ognan'),
        sub('Graves', 'AOC', 'Podensac, Gironde, France', '"Terra de cascalho", na margem esquerda do Garonne, a sudeste de Bordeaux, por 50 km. A única sub-região famosa pelos três estilos de Bordeaux: tintos, brancos secos e doces.', [], [], '', EN + 'Graves_(wine_region)'),
        sub('Sauternes e Barsac', 'AOC', 'Sauternes, Gironde, France', 'Vinho doce de Sémillon, Sauvignon Blanc e Muscadelle afetados pela podridão nobre (Botrytis); uma das poucas regiões onde ela é frequente. Barsac é mais seco e leve. O Château d\'Yquem tem classificação própria, Premier Cru Supérieur.',
          ['Sémillon', 'Sauvignon Blanc', 'Muscadelle'],
          [prod('Château d\'Yquem', 'Premier Cru Supérieur'), prod('Château Guiraud'), prod('Château Filhot'), prod('Château Rayne-Vigneau'), prod('Château Climens'), prod('Château Coutet'), prod('Château La Tour Blanche')], '', EN + 'Sauternes_(wine)'),
        sub('Saint-Émilion', 'AOC', 'Saint-Émilion, Gironde, France', 'Margem direita do Dordogne (sub-região de Libourne); 5.400 ha; paisagem Patrimônio da UNESCO desde 1999. Pela classificação de 2022, Château Figeac e Château Pavie estão no nível mais alto.',
          [],
          [prod('Château Figeac', 'nível mais alto da classificação de 2022'), prod('Château Pavie', 'nível mais alto da classificação de 2022'), prod('Château Ausone', '', EN + 'Bordeaux_wine'), prod('Château Cheval Blanc', '', EN + 'Bordeaux_wine'), prod('Château Angélus', '', EN + 'Bordeaux_wine')], '', EN + 'Saint-%C3%89milion_AOC'),
        sub('Pomerol', 'AOC', 'Pomerol, Gironde, France', 'A menor área produtora de Bordeaux (800 ha); vinhas familiares e produtores pequenos; tintos com predomínio de Merlot, muitas vezes com Cabernet Franc. Sem classificação oficial, mas Pétrus e Le Pin têm preços de primeiros grand crus.',
          ['Merlot', 'Cabernet Franc'], [prod('Château Pétrus'), prod('Château Le Pin')], '', EN + 'Pomerol'),
        sub('Entre-Deux-Mers', 'AOC', 'Créon, Gironde, France', 'Entre os rios Garonne e Dordogne; a maior sub-região de Bordeaux, com cerca de 1.500 ha de vinhas (metade da área é floresta).', [], [], '', EN + 'Entre-Deux-Mers')
      ] },

    { name: 'Borgonha', geo: 'FR:Borgonha', sources: [EN + 'Burgundy_wine'],
      description: 'Centro-leste da França, vales e encostas a oeste do rio Saône, de Auxerre a Mâcon. Cerca de 29.500 ha e ~3.200 domaines; 59,5% brancos, 33,8% tintos, 6,7% espumantes. A classificação se baseia no lugar ("climats"), não no produtor: regional (Bourgogne), village, premier cru e grand cru. Leis de herança napoleônicas fragmentaram as vinhas, o que fortaleceu os négociants.',
      climate: 'Continental, invernos frios e verões quentes; chuva, granizo e geada tornam as safras muito variáveis.',
      soils: 'Argilo-calcários.', altitude: '',
      history: 'Vinha desde o século II; monges beneditinos e cistercienses delimitaram vinhas e o conceito de terroir.',
      grapes: ['Pinot Noir', 'Chardonnay'], grapes_other: ['Aligoté', 'Gamay', 'Sauvignon Blanc'],
      notable_wines: 'Grands crus: Romanée-Conti, Montrachet, Chambertin, Corton, Clos de Vougeot; Chablis; Pouilly-Fuissé; Crémant de Bourgogne',
      producers: [prod('Domaine de la Romanée-Conti', '', EN + 'Burgundy_wine'), prod('Domaine Leroy'), prod('Henri Jayer'), prod('Domaine Leflaive'), prod('Maison Louis Latour')],
      subregions: [
        sub('Chablis', 'AOC', 'Chablis, Yonne, France', 'A AOC mais setentrional da Borgonha; só Chardonnay. Clima frio: mais acidez e menos fruta; nota "de pedra de isqueiro" (gunflint), às vezes "metálica". O uso de carvalho varia muito entre produtores.', ['Chardonnay'], [], 'Chablis, Premier Cru, Grand Cru', EN + 'Chablis_(AOC)'),
        sub('Côte de Nuits', 'AOC (villages e grands crus)', 'Nuits-Saint-Georges, Côte-d\'Or, France', 'Parte norte da Côte d\'Or, de Dijon a pouco ao sul de Nuits-Saint-Georges; 14 comunas, seis com grands crus; famosa pelos tintos de Pinot Noir. Grands crus minúsculos (La Romanée tem menos de 1 ha); o Clos Vougeot tem 50 ha e mais de 75 proprietários. Romanée-Conti é monopólio do Domaine de la Romanée-Conti.',
          ['Pinot Noir'], [prod('Domaine de la Romanée-Conti', 'Romanée-Conti (monopólio), La Tâche, Montrachet', EN + 'Roman%C3%A9e-Conti')],
          'Romanée-Conti, La Romanée, Richebourg, Romanée-Saint-Vivant, La Tâche, Chambertin, Chambertin-Clos de Bèze, Clos de la Roche, Clos de Tart, Clos Vougeot, Échezeaux', EN + 'C%C3%B4te_de_Nuits'),
        sub('Côte de Beaune', 'AOC (villages e grands crus)', 'Beaune, Côte-d\'Or, France', 'Parte sul da Côte d\'Or, ~25 km até o rio Dheune. Tintos mais leves e perfumados (Pommard, Volnay) e, mais ao sul, os grandes brancos (Meursault, Chassagne-Montrachet). Em Aloxe domina o grand cru Corton.', ['Pinot Noir', 'Chardonnay'], [], 'Corton, Montrachet, Meursault, Pommard, Volnay', EN + 'C%C3%B4te_de_Beaune'),
        sub('Côte Chalonnaise', 'AOC (villages)', 'Mercurey, Saône-et-Loire, France', 'Ao sul da Côte d\'Or, mesma geologia, sem grands crus. Bouzeron (única AOC comunal de Aligoté), Rully (brancos e Crémant), Mercurey (30 premiers crus), Givry, Montagny.', ['Pinot Noir', 'Chardonnay', 'Aligoté'], [], 'Bouzeron, Rully, Mercurey, Givry, Montagny', EN + 'C%C3%B4te_Chalonnaise'),
        sub('Mâconnais', 'AOC', 'Fuissé, Saône-et-Loire, France', 'Sul da Borgonha, a oeste do Saône; brancos de Chardonnay de boa relação preço-qualidade (há até uma vila chamada Chardonnay); o Pouilly-Fuissé é o mais procurado.', ['Chardonnay'], [], 'Pouilly-Fuissé, Mâcon-Villages', EN + 'M%C3%A2connais')
      ] },

    { name: 'Beaujolais', geo: 'FR:Beaujolais', sources: [EN + 'Beaujolais'],
      description: 'Ao norte de Lyon; administrativamente ligado à Borgonha, mas de clima mais próximo do Rhône. Cerca de 10.500 ha em 96 vilas. Gamay (98%) vinificado em maceração semicarbônica: vinhos frutados e de pouco tanino, muitas vezes servidos levemente frescos. Três níveis: Beaujolais, Beaujolais-Villages (39 comunas) e 10 crus. O Beaujolais Nouveau sai na 3ª quinta-feira de novembro (cerca de 1/3 da produção).',
      climate: 'Semicontinental, com influências temperadas e mediterrâneas; mais quente que a Borgonha; geadas de primavera.',
      soils: 'Norte: xisto e granito com calcário; sul (Bas Beaujolais): arenito, argila e calcário.', altitude: '', history: '',
      grapes: ['Gamay'], grapes_other: ['Chardonnay'],
      notable_wines: 'Crus (norte → sul): Saint-Amour, Juliénas, Chénas, Moulin-à-Vent, Fleurie, Chiroubles, Morgon, Régnié, Brouilly, Côte de Brouilly; Beaujolais Nouveau',
      producers: [prod('Georges Duboeuf', 'négociant conhecido pelo marketing'), prod('Maison Louis Jadot'), prod('Bouchard Père et Fils')],
      subregions: [
        sub('Moulin-à-Vent', 'AOC (cru)', 'Romanèche-Thorins, Saône-et-Loire, France', 'Cru na divisa Rhône/Saône-et-Loire (partes de Chénas e Romanèche-Thorins); antes de 1936 era vendido como "Romanèche-Thorins".', ['Gamay'], [], '', EN + 'Moulin-%C3%A0-Vent_AOC'),
        sub('Fleurie', 'AOC (cru)', 'Fleurie, Rhône, France', 'Cru do Beaujolais no departamento do Rhône.', ['Gamay'], [], '', EN + 'Fleurie'),
        sub('Morgon', 'AOC (cru)', 'Villié-Morgon, Rhône, France', 'Um dos 10 crus do Beaujolais.', ['Gamay'], [], '', EN + 'Beaujolais'),
        sub('Brouilly e Côte de Brouilly', 'AOC (crus)', 'Saint-Lager, Rhône, France', 'Os dois crus mais ao sul.', ['Gamay'], [], '', EN + 'Beaujolais')
      ] },

    { name: 'Champagne', geo: 'FR:Champagne', sources: [EN + 'Champagne_wine_region'],
      description: 'Nordeste da França, ~160 km a leste de Paris, no paralelo 49 — um limite climático para a vinha. Em 2008, 33.500 ha em ~319 vilas, 5.000 produtores e 14.000 fornecedores de uva. Escala dos crus: grands crus (100%), premiers crus (90–99%). Além do espumante: Coteaux Champenois (tranquilo), Rosé des Riceys, Ratafia e Marc de Champagne.',
      climate: 'Frio: média anual de 10 °C, julho ~18 °C; a acidez alta resultante é ideal para espumantes.',
      soils: 'Giz de origem marinha (belemnita), que drena e acumula calor; no Aube predomina a argila.', altitude: '',
      history: 'Dom Pérignon, ao contrário da lenda, não inventou o espumante, mas melhorou os vinhos tranquilos e espumantes.',
      grapes: ['Chardonnay', 'Pinot Noir', 'Pinot Meunier'], grapes_other: [],
      notable_wines: 'Champagne (brut, blanc de blancs, rosé), Coteaux Champenois, Rosé des Riceys',
      producers: [prod('Gosset', 'fundada em 1584'), prod('Ruinart', '1729'), prod('Chanoine Frères', '1730'), prod('Taittinger', '1734'), prod('Moët & Chandon', '1743'), prod('Veuve Clicquot', '1772')],
      subregions: [
        sub('Montagne de Reims', 'Sub-região', 'Verzenay, Marne, France', 'Em torno da "montanha" de Reims, de Reims a Épernay; nove vilas grand cru. Solos de giz com camadas de argila, areia e marga. Pinot Noir é a uva principal; nas encostas norte, Pinots de acidez alta; nas do sul, potência.', ['Pinot Noir'], [], '', EN + 'Montagne_de_Reims'),
        sub('Vallée de la Marne', 'Sub-região', 'Aÿ, Marne, France', 'Margens do rio Marne; solos mais variados; só duas vilas grand cru (Aÿ e Tours-sur-Marne). Pinot Meunier ~59%, Pinot Noir ~23%, Chardonnay ~18%; vinhos mais maduros e aromáticos.', ['Pinot Meunier', 'Pinot Noir'], [], '', EN + 'Vall%C3%A9e_de_la_Marne'),
        sub('Côte des Blancs', 'Sub-região', 'Avize, Marne, France', 'Ao sul de Épernay, encosta voltada a leste; 95% Chardonnay (daí "blanc de blancs"); vilas Avize, Cramant, Le Mesnil-sur-Oger e Oger. Fonte de Chardonnay para cuvées de prestígio das grandes maisons.', ['Chardonnay'], [], 'Blanc de blancs', EN + 'C%C3%B4te_des_Blancs'),
        sub('Côte de Sézanne', 'Sub-região', 'Sézanne, Marne, France', 'Parecida com a Côte des Blancs, um pouco menos distinta.', ['Chardonnay'], [], '', EN + 'Champagne_wine_region'),
        sub('Aube (Côte des Bar)', 'Sub-região', 'Bar-sur-Seine, Aube, France', 'Sul da região, de solos argilosos; predomínio de Pinot Noir.', ['Pinot Noir'], [], '', EN + 'Champagne_wine_region')
      ] },

    { name: 'Alsácia', geo: 'FR:Alsácia', sources: [EN + 'Alsace_wine'],
      description: 'Faixa estreita nas encostas orientais dos Vosges, entre as montanhas e o Reno (Bas-Rhin e Haut-Rhin), de 175 a 420 m. Em 2006, 15.298 ha em 119 vilas; ~90% brancos. Alternou entre França e Alemanha; depois da guerra manteve o estilo seco. AOCs: Alsace, Alsace Grand Cru (vinhas classificadas, desde 1975) e Crémant d\'Alsace. Menções: Vendange Tardive, Sélection de Grains Nobles, Edelzwicker e Gentil. A garrafa alta "flûte" é obrigatória.',
      climate: 'Bastante seco e ensolarado, na sombra de chuva dos Vosges (Colmar ~600 mm/ano).',
      soils: 'Muito variados, pela falha do Reno entre Vosges e Floresta Negra.', altitude: '175–420 m.', history: '',
      grapes: ['Riesling', 'Gewürztraminer', 'Pinot Gris', 'Muscat Blanc à Petits Grains'],
      grapes_other: ['Pinot Blanc', 'Auxerrois Blanc', 'Sylvaner', 'Pinot Noir'],
      notable_wines: 'Alsace Grand Cru, Crémant d\'Alsace, Vendange Tardive, Sélection de Grains Nobles',
      producers: [prod('Maison Trimbach'), prod('Domaine Zind-Humbrecht'), prod('Hugel & Fils'), prod('Marcel Deiss', 'referência em cortes de alta qualidade'), prod('Domaine Weinbach')],
      subregions: [
        sub('Alsace Grand Cru', 'AOC', 'Riquewihr, Haut-Rhin, France', 'Parcelas selecionadas em 47 comunas (14 no Bas-Rhin, 33 no Haut-Rhin), de Marlenheim a Thann, entre 200 e 300 m; AOC de 1975, ampliada em 1983, 1992 e 2007; rendimento máximo de 55 hl/ha.', [], [], '', EN + 'Alsace_Grand_Cru_AOC'),
        sub('Crémant d\'Alsace', 'AOC', 'Colmar, Haut-Rhin, France', 'Espumante produzido desde 1900 pelo mesmo método do Champagne; AOC em 1976. Cortes de Pinot Blanc, Pinot Gris, Pinot Noir, Riesling, Auxerrois e Chardonnay; o rosé é de Pinot Noir.', ['Pinot Blanc', 'Auxerrois Blanc', 'Pinot Noir', 'Riesling', 'Chardonnay'], [], '', EN + 'Cr%C3%A9mant_d%27Alsace')
      ] },

    { name: 'Vale do Loire', geo: 'FR:Vale do Loire', sources: [EN + 'Loire_Valley_(wine)'],
      description: 'Ao longo do rio Loire, do Muscadet, perto de Nantes, até Sancerre e Pouilly-Fumé, a sudeste de Orléans; ~750 km² de vinhas. Segunda região de espumantes da França, depois de Champagne (Crémant de Loire, Saumur). Vinhos de fruta característica, frescos e crocantes, sobretudo jovens.',
      climate: 'Continental, muito influenciado pelo rio e pelo Atlântico; geadas de primavera; chuvas de outono podem prejudicar a maturação, mas ajudam a podridão nobre dos vinhos doces.',
      soils: 'Tuffeau (calcário usado nos castelos do Loire) na Touraine; sílex misturado ao calcário em Sancerre e Pouilly-Fumé.', altitude: '', history: '',
      grapes: ['Chenin Blanc', 'Sauvignon Blanc', 'Melon de Bourgogne', 'Cabernet Franc'], grapes_other: ['Pinot Noir', 'Gamay'],
      notable_wines: 'Muscadet, Savennières, Coteaux du Layon, Quarts de Chaume, Saumur-Champigny, Chinon, Bourgueil, Vouvray, Montlouis, Sancerre, Pouilly-Fumé, Crémant de Loire',
      producers: [],
      subregions: [
        sub('Pays Nantais (Muscadet)', 'AOC', 'Vallet, Loire-Atlantique, France', 'Extremo oeste, perto de Nantes: branco de Melon de Bourgogne. O nome Muscadet se refere a um suposto gosto "almiscarado". "Sur lie": vinho mantido sobre as borras.', ['Melon de Bourgogne'], [], 'Muscadet Sèvre et Maine sur lie', EN + 'Muscadet'),
        sub('Savennières', 'AOC', 'Savennières, Maine-et-Loire, France', 'Branco, geralmente seco, de Chenin Blanc na margem norte do Loire (Anjou), em três colinas de xisto; enclaves Roche-aux-Moines e Coulée-de-Serrant.', ['Chenin Blanc'], [prod('Nicolas Joly', 'Clos de la Coulée de Serrant — biodinâmico', EN + 'Savenni%C3%A8res_wine')], 'Clos de la Coulée de Serrant', EN + 'Savenni%C3%A8res_wine'),
        sub('Anjou (Coteaux du Layon, Quarts de Chaume)', 'AOC', 'Rochefort-sur-Loire, Maine-et-Loire, France', 'Perto de Angers; vinhos doces de Chenin Blanc (Coteaux du Layon, Quarts de Chaume) e o rosé Cabernet d\'Anjou.', ['Chenin Blanc'], [], 'Coteaux du Layon, Quarts de Chaume, Cabernet d\'Anjou', EN + 'Anjou_wine'),
        sub('Saumur e Saumur-Champigny', 'AOC', 'Saumur, Maine-et-Loire, France', 'Espumantes de método tradicional e tintos sobretudo de Cabernet Franc; brancos de Chenin Blanc.', ['Cabernet Franc', 'Chenin Blanc'], [], 'Saumur-Champigny, Saumur Brut', EN + 'Saumur_(wine)'),
        sub('Chinon e Bourgueil', 'AOC', 'Chinon, Indre-et-Loire, France', 'Touraine, nas margens do Vienne: sobretudo tintos de Cabernet Franc — geralmente leves, mas encorpados e longevos nos bons produtores e safras.', ['Cabernet Franc'], [], 'Chinon, Bourgueil, Saint-Nicolas-de-Bourgueil', EN + 'Chinon_AOC'),
        sub('Vouvray e Montlouis', 'AOC', 'Vouvray, Indre-et-Loire, France', 'A leste de Tours; quase só Chenin Blanc — mais de 2.000 ha, o maior produtor de Chenin da França. Anos frios: secos e espumantes; anos quentes: doces. Adegas escavadas no tuffeau.', ['Chenin Blanc'], [prod('Domaine Huet', 'o Vouvray 1947 ficou em 6º numa lista histórica de grandes vinhos', EN + 'Vouvray_(wine)')], 'Vouvray Sec, Demi-Sec, Moelleux, Pétillant', EN + 'Vouvray_(wine)'),
        sub('Sancerre', 'AOC', 'Sancerre, Cher, France', 'Leste do Loire, a sudeste de Orléans; branco de Sauvignon Blanc; tinto (~20%) e rosé de Pinot Noir. Vinhas renomadas como Clos de la Poussie, Chêne Marchand e Le Grand Chemarin.', ['Sauvignon Blanc', 'Pinot Noir'], [prod('Jean-Max Roger', 'Sancerre Cuvée GC (Le Grand Chemarin)', EN + 'Sancerre_(wine)')], '', EN + 'Sancerre_(wine)'),
        sub('Pouilly-Fumé', 'AOC', 'Pouilly-sur-Loire, Nièvre, France', 'Branco seco 100% Sauvignon Blanc em torno de Pouilly-sur-Loire; sílex dá notas de "pedra de isqueiro".', ['Sauvignon Blanc'], [prod('Didier Dagueneau', 'defensor da viticultura orgânica', EN + 'Loire_Valley_(wine)')], '', EN + 'Pouilly-Fum%C3%A9')
      ] },

    { name: 'Vale do Rhône', geo: 'FR:Vale do Rhône', sources: [EN + 'Rh%C3%B4ne_wine'],
      description: 'Vale do Rhône, dividido em Norte e Sul. Mais de 6.000 produtores (103 cooperativas), ~4 milhões de hl por ano; mais da metade é Côtes du Rhône; o Norte faz menos de 5% do volume. Norte: Syrah nos tintos (às vezes com até 20% de brancas), Viognier, Marsanne e Roussanne nos brancos. Sul: cortes de até 19 variedades; tintos encorpados com ameixa seca, sub-bosque, chocolate e fruta negra madura.',
      climate: 'Norte continental (invernos duros, verões quentes, mistral vindo do Maciço Central); Sul mediterrâneo, com seixos (galets) ao pé das vinhas que guardam o calor.',
      soils: '', altitude: '', history: '',
      grapes: ['Syrah', 'Grenache', 'Viognier', 'Marsanne', 'Roussanne', 'Mourvèdre'], grapes_other: ['Carignan', 'Cinsaut', 'Clairette', 'Trebbiano Toscano'],
      notable_wines: 'Côte-Rôtie, Condrieu, Château-Grillet, Hermitage, Crozes-Hermitage, Saint-Joseph, Cornas, Châteauneuf-du-Pape, Gigondas, Vacqueyras, Tavel, Lirac, Muscat de Beaumes-de-Venise',
      producers: [],
      subregions: [
        sub('Côte-Rôtie', 'AOC', 'Ampuis, Rhône, France', 'Norte: "encosta assada", ao sul de Vienne (Saint-Cyr, Ampuis, Tupin-et-Semons), em ladeiras íngremes com muros de pedra. Tinto de Syrah com até 20% de Viognier.', ['Syrah', 'Viognier'], [prod('E. Guigal', 'La Mouline, La Landonne — pioneiro dos vinhos de vinhedo único', EN + 'C%C3%B4te-R%C3%B4tie_AOC')], 'La Mouline, La Landonne', EN + 'C%C3%B4te-R%C3%B4tie_AOC'),
        sub('Condrieu e Château-Grillet', 'AOC', 'Condrieu, Rhône, France', 'Branco 100% Viognier em sete comunas de encostas íngremes; dentro dele fica a micro-AOC Château-Grillet (3,4 ha). Hoje quase só secos.', ['Viognier'], [prod('E. Guigal', 'ajudou a expandir o mercado do Condrieu', EN + 'Condrieu_AOC')], 'Château-Grillet', EN + 'Condrieu_AOC'),
        sub('Hermitage', 'AOC', 'Tain-l\'Hermitage, Drôme, France', 'A colina vista como lar espiritual da Syrah; sobretudo tintos, pequena quantidade de brancos de Marsanne e Roussanne.', ['Syrah', 'Marsanne', 'Roussanne'],
          [prod('Domaine Jean-Louis Chave', 'o produtor mais notável; origens em 1481'), prod('M. Chapoutier'), prod('Paul Jaboulet Aîné', 'dono da capela no alto da colina'), prod('Delas')], '', EN + 'Hermitage_AOC'),
        sub('Crozes-Hermitage', 'AOC', 'Tain-l\'Hermitage, Drôme, France', 'A maior AOC do Norte; tintos de Syrah (às vezes com um pouco de Marsanne ou Roussanne), menos prestigiados que Côte-Rôtie e Hermitage.', ['Syrah', 'Marsanne', 'Roussanne'], [prod('Paul Jaboulet Aîné', 'grande produtor da AOC', EN + 'Crozes-Hermitage_AOC')], '', EN + 'Crozes-Hermitage_AOC'),
        sub('Saint-Joseph', 'AOC', 'Tournon-sur-Rhône, Ardèche, France', 'Maior área do Norte, segunda em vinhas; tinto de Syrah (até 10% de Marsanne/Roussanne) e branco. O Clos de Tournon pertenceu a Luís XII e hoje é de Guigal.', ['Syrah', 'Marsanne', 'Roussanne'], [prod('E. Guigal', 'Clos de Tournon', EN + 'Saint-Joseph_AOC')], '', EN + 'Saint-Joseph_AOC'),
        sub('Cornas', 'AOC', 'Cornas, Ardèche, France', 'Uma das menores AOCs do vale; só tinto de Syrah. O nome é celta para "terra queimada"; menções desde 885.', ['Syrah'], [], '', EN + 'Cornas_AOC'),
        sub('Châteauneuf-du-Pape', 'AOC', 'Châteauneuf-du-Pape, Vaucluse, France', 'Sul, entre Avignon e Orange (com Bédarrides, Courthézon e Sorgues); ~3.200 ha. Cortes de várias variedades (o Sul permite até 19); ligado à história dos papas de Avignon ("Vin du Pape").', ['Grenache'], [], '', EN + 'Ch%C3%A2teauneuf-du-Pape_AOC'),
        sub('Gigondas e Vacqueyras', 'AOC', 'Gigondas, Vaucluse, France', 'Gigondas, o "irmão mais novo" de Châteauneuf: tinto de predomínio de Grenache (brancos permitidos desde 2022), de boa guarda.', ['Grenache'], [], 'Gigondas, Vacqueyras', EN + 'Gigondas_AOC'),
        sub('Tavel e Lirac', 'AOC', 'Tavel, Gard, France', 'Tavel: só rosés (mínimo 11%), do outro lado do rio de Châteauneuf; "vinho dos reis", preferido de Filipe, o Belo, e Luís XIV.', [], [], 'Tavel rosé', EN + 'Tavel_AOC'),
        sub('Côtes du Rhône e Villages', 'AOC', 'Orange, Vaucluse, France', 'AOC básica da região (~3,3 milhões de hl): tintos e rosés de predomínio de Grenache, brancos de Grenache Blanc. No topo, os vinhos levam o nome da vila, não de châteaux.', ['Grenache', 'Syrah', 'Mourvèdre'], [], 'Côtes du Rhône Villages, Rasteau, Cairanne, Vinsobres', EN + 'C%C3%B4tes_du_Rh%C3%B4ne_AOC')
      ] },

    { name: 'Languedoc-Roussillon', geo: 'FR:Languedoc-Roussillon', sources: [EN + 'Languedoc-Roussillon_wine'],
      description: 'Costa mediterrânea do sul da França, ~240 km da fronteira espanhola ao Rhône; ~2.800 km² de vinhas — mais de um terço da produção francesa. Fama de vinho a granel ("le gros rouge") depois da filoxera; hoje em retomada de qualidade. Vins doux naturels (fermentação interrompida com aguardente); IGP Pays d\'Oc para vinhos varietais.',
      climate: 'Mediterrâneo, muito seco de maio a agosto; o vento tramontane acentua a aridez; média anual ~14 °C.',
      soils: 'Giz, calcário e cascalho no interior; aluviais perto da costa; nas melhores vinhas, seixos de antigos leitos de rio.', altitude: '',
      history: 'Vinhas plantadas pelos gregos perto de Narbonne no século V a.C.; o Saint-Chinian era receitado em hospitais de Paris no século XIV.',
      grapes: ['Grenache', 'Syrah', 'Carignan', 'Mourvèdre', 'Cinsaut'], grapes_other: ['Merlot', 'Cabernet Sauvignon', 'Chardonnay', 'Chenin Blanc', 'Mauzac', 'Piquepoul'],
      notable_wines: 'Corbières, Minervois, Faugères, Saint-Chinian, Fitou, Picpoul de Pinet, Blanquette e Crémant de Limoux, Banyuls, Maury, Rivesaltes, Muscat de Frontignan',
      producers: [],
      subregions: [
        sub('Corbières', 'AOC', 'Lagrasse, Aude, France', 'A maior AOC da região (46% da produção AOC em 2005); ~95% tinto; Carignan é a uva mais comum; AOC de 1985, 13.500 ha.', ['Carignan', 'Grenache', 'Syrah'], [], '', EN + 'Corbi%C3%A8res_AOC'),
        sub('Minervois', 'AOC', 'Minerve, Hérault, France', 'Aude e Hérault; vinho sempre em corte (mínimo 2 variedades); tintos com Syrah, Mourvèdre, Grenache e Lladoner Pelut (mín. 60%).', ['Syrah', 'Mourvèdre', 'Grenache', 'Carignan'], [], '', EN + 'Minervois_AOC'),
        sub('Faugères', 'AOC', 'Faugères, Hérault, France', 'Ao pé do Maciço Central, 30 km ao norte de Béziers; tintos de encosta.', ['Syrah'], [prod('Domaine du Météore', 'Syrah plantada numa cratera de meteorito', EN + 'Faug%C3%A8res_AOC')], '', EN + 'Faug%C3%A8res_AOC'),
        sub('Picpoul de Pinet', 'AOC', 'Pinet, Hérault, France', 'Especialidade branca de Piquepoul Blanc.', ['Piquepoul'], [], '', EN + 'Piquepoul'),
        sub('Limoux', 'AOC', 'Limoux, Aude, France', 'Quatro AOCs: Blanquette de Limoux, Blanquette méthode ancestrale e Crémant de Limoux (espumantes) e Limoux (tranquilo). Uva principal: Mauzac (localmente Blanquette), depois Chardonnay e Chenin.', ['Mauzac', 'Chardonnay', 'Chenin Blanc'], [], 'Blanquette de Limoux, Crémant de Limoux', EN + 'Limoux_wine'),
        sub('Banyuls e Collioure', 'AOC', 'Banyuls-sur-Mer, Pyrénées-Orientales, France', 'Vin doux naturel de vinhas velhas em terraços nos Pireneus catalães; Grenache, 16–17% de álcool, 8–12% de açúcar residual; envelhecimento em solera ou ao sol (rancio).', ['Grenache'],
          [prod('Domaine de la Rectorie'), prod('Domaine Vial-Magnères'), prod('Domaine du Traginer'), prod('Domaine Madeloc'), prod('Domaine du Mas Blanc')], 'Banyuls, Banyuls Grand Cru', EN + 'Banyuls_AOC'),
        sub('Maury', 'AOC', 'Maury, Pyrénées-Orientales, France', 'Vin doux naturel tinto (mín. 75% Grenache Noir) em solos de xisto e ardósia, sob o castelo cátaro de Quéribus; envelhecido em recipientes variados, às vezes ao sol; usado como o porto.', ['Grenache'], [prod('Mas Amiel'), prod('Domaine de la Préceptorie')], '', EN + 'Maury_AOC')
      ] },

    { name: 'Provença', geo: 'FR:Provença', sources: [EN + 'Provence_wine'],
      description: 'Sudeste da França, sobretudo no Var, dos Alpes perto de Draguignan à costa de Saint-Tropez. Vinho há pelo menos 2.600 anos, desde os gregos que fundaram Marselha (~600 a.C.). O rosé é mais da metade da produção; tintos ~1/3.',
      climate: 'Invernos amenos, verões muito quentes e pouca chuva; o mistral refresca e seca.',
      soils: 'Calcário e xisto perto do mar; xisto e quartzo na costa; argila e arenito no interior.', altitude: '', history: '',
      grapes: ['Mourvèdre', 'Grenache', 'Cinsaut', 'Vermentino'], grapes_other: ['Syrah', 'Cabernet Sauvignon', 'Carignan', 'Tibouren', 'Clairette', 'Bourboulenc', 'Marsanne', 'Trebbiano Toscano'],
      notable_wines: 'Rosés de Côtes de Provence, Bandol, Cassis (branco), Palette',
      producers: [],
      subregions: [
        sub('Côtes de Provence', 'AOC', 'Les Arcs, Var, France', 'A maior AOC (75% da produção regional); rosés secos com "garrigue" (lavanda, alecrim, tomilho).', ['Grenache', 'Cinsaut', 'Mourvèdre', 'Tibouren'], [], '', EN + 'Provence_wine'),
        sub('Bandol', 'AOC', 'Bandol, Var, France', 'Costeira, de predomínio de Mourvèdre; reconhecida internacionalmente.', ['Mourvèdre'], [], '', EN + 'Provence_wine'),
        sub('Cassis', 'AOC', 'Cassis, Bouches-du-Rhône, France', 'Especializada em brancos (75% da produção).', [], [], '', EN + 'Provence_wine'),
        sub('Palette', 'AOC', 'Le Tholonet, Bouches-du-Rhône, France', 'A menor AOC da Provença, perto de Aix-en-Provence; AOC de 1948; solos calcários.', [], [prod('Château Simone', 'dono da maior parte das vinhas')], '', EN + 'Palette_AOC'),
        sub('Coteaux d\'Aix-en-Provence', 'AOC', 'Aix-en-Provence, Bouches-du-Rhône, France', 'Segunda maior AOC; ~60% tinto.', [], [], '', EN + 'Provence_wine'),
        sub('Les Baux-de-Provence', 'AOC', 'Les Baux-de-Provence, Bouches-du-Rhône, France', 'Vale muito quente; totalmente orgânico desde 2023.', [], [prod('Domaine de Trévallon', 'pioneiro de Les Baux', EN + 'Provence_wine')], '', EN + 'Provence_wine'),
        sub('Bellet', 'AOC', 'Nice, Alpes-Maritimes, France', 'Perto de Nice, com influência italiana.', [], [], '', EN + 'Provence_wine')
      ] },

    { name: 'Sudoeste', geo: 'FR:Sudoeste', sources: [EN + 'South_West_France_(wine_region)'],
      description: '"Ilhas" vinícolas descontínuas a leste e ao sul de Bordeaux, da Aquitânia à Gasconha, ao Béarn e ao País Basco; ~16.000 ha. Perto de Bordeaux, vinhos de estilo bordalês; mais ao sul, uvas locais e estilos próprios. Cada AOC se vende pelo próprio nome.',
      climate: 'Mais quente e favorável que Bordeaux no interior: colheitas mais precoces e álcool mais alto.', soils: '', altitude: '', history: '',
      grapes: ['Malbec', 'Tannat', 'Négrette', 'Fer', 'Gros Manseng', 'Petit Manseng'],
      grapes_other: ['Cabernet Franc', 'Cabernet Sauvignon', 'Merlot', 'Sauvignon Blanc', 'Sémillon', 'Muscadelle', 'Courbu', 'Mauzac'],
      notable_wines: 'Cahors, Madiran, Jurançon, Bergerac, Monbazillac, Gaillac, Fronton, Irouléguy',
      producers: [],
      subregions: [
        sub('Cahors', 'AOC', 'Cahors, Lot, France', 'Tinto do Lot; mínimo 70% Malbec (localmente Auxerrois ou Côt), com até 30% de Merlot e/ou Tannat.', ['Malbec', 'Merlot', 'Tannat'],
          [prod('Château du Cèdre'), prod('Clos de Gamot'), prod('Château de Haute-Serre'), prod('Château de Mercuès'), prod('Clos La Coutale'), prod('Château de Lagrézette')], '', EN + 'Cahors_wine'),
        sub('Madiran e Pacherenc du Vic-Bilh', 'AOC', 'Madiran, Hautes-Pyrénées, France', 'Gasconha; Madiran (tinto, AOC 1948) e Pacherenc du Vic-Bilh (brancos); ~1.300 ha. A microoxigenação foi desenvolvida aqui por Patrick Ducournau.', ['Tannat'],
          [prod('Alain Brumont', 'Château Bouscassé e Château Montus'), prod('Château Aydie', 'Patrick Ducournau, microoxigenação'), prod('Domaine Berthoumieu'), prod('Château Viella')], 'Château Montus, Château Bouscassé', EN + 'Madiran_wine'),
        sub('Jurançon', 'AOC', 'Jurançon, Pyrénées-Atlantiques, France', 'Contrafortes dos Pireneus; branco seco e o mais procurado doce, de Gros Manseng, Petit Manseng e Courbu, com abacaxi e manga; colheitas tardias em outubro e novembro.', ['Gros Manseng', 'Petit Manseng', 'Courbu'], [], '', EN + 'Juran%C3%A7on_AOC'),
        sub('Bergerac e Monbazillac', 'AOC', 'Monbazillac, Dordogne, France', 'Bergerac: 93 comunas, 12.000 ha e 13 AOCs de tintos, brancos e rosés. Monbazillac (AOC 1936, ~2.000 ha): só vinhos doces de uvas com podridão nobre (Sémillon, Sauvignon Blanc, Muscadelle).', ['Sémillon', 'Sauvignon Blanc', 'Muscadelle', 'Merlot'], [], 'Monbazillac, Pécharmant, Saussignac', EN + 'Bergerac_wine'),
        sub('Gaillac', 'AOC', 'Gaillac, Tarn, France', 'Tarn, ao norte de Toulouse; reivindica ser um dos mais antigos centros vitícolas da Gália (século I).', [], [prod('Domaine Croix des Marchands'), prod('Château Palvié'), prod('Domaine Barreau'), prod('Château de Saurs')], '', EN + 'Gaillac_AOC'),
        sub('Irouléguy', 'AOC', 'Irouléguy, Pyrénées-Atlantiques, France', 'AOC do País Basco francês.', [], [], '', EN + 'South_West_France_(wine_region)')
      ] },

    { name: 'Jura', geo: 'FR:Jura', sources: [EN + 'Jura_wine'],
      description: 'Entre a Borgonha e a Suíça, entre as planícies de Bresse e as montanhas do Jura, de 250 a 400 m. ~1.950 ha, ~230 vinícolas e ~11 milhões de garrafas. Célebre pelo vin jaune: Savagnin envelhecido sob um véu de leveduras ("voile") por 6 anos e 3 meses, engarrafado no clavelin de 62 cl, parecido com um fino de Jerez mas não fortificado. Também vin de paille (doce) e Macvin (fortificado).',
      climate: 'Continental, mais frio que a Borgonha; colheita muitas vezes no fim de outubro.',
      soils: 'Argila nas partes baixas, calcário no alto, com marga — onde estão as vinhas mais valorizadas.', altitude: '250–400 m.', history: 'Arbois foi a primeira AOC da França (1936).',
      grapes: ['Chardonnay', 'Savagnin', 'Poulsard', 'Trousseau', 'Pinot Noir'], grapes_other: [],
      notable_wines: 'Vin jaune, Château-Chalon, vin de paille, Crémant du Jura, Macvin du Jura',
      producers: [prod('Henri Maire'), prod('Frédéric Lornet'), prod('Domaine Berthet-Bondet'), prod('Gaspard Feuillet', '', EN + 'Arbois_AOC'), prod('Château Béthanie', '', EN + 'Arbois_AOC')],
      subregions: [
        sub('Arbois', 'AOC', 'Arbois, Jura, France', 'Primeira AOC controlada da França (1936); tintos, rosés e brancos.', ['Savagnin', 'Chardonnay', 'Poulsard', 'Trousseau'], [], 'Arbois vin jaune', EN + 'Jura_wine'),
        sub('Château-Chalon', 'AOC', 'Château-Chalon, Jura, France', 'Só vin jaune de Savagnin, em vinhas de marga; engarrafado no clavelin; os produtores deixam de produzir em safras ruins.', ['Savagnin'], [], '', EN + 'Ch%C3%A2teau-Chalon_AOC'),
        sub('Côtes du Jura', 'AOC', 'Arlay, Jura, France', 'Tintos, rosés e brancos (desde 1937); também pode produzir vin jaune.', ['Chardonnay', 'Savagnin', 'Pinot Noir'], [], '', EN + 'Jura_wine'),
        sub('L\'Étoile', 'AOC', 'L\'Étoile, Jura, France', 'Chardonnay, Savagnin e Poulsard; também vin jaune.', ['Chardonnay', 'Savagnin', 'Poulsard'], [], '', EN + 'Jura_wine')
      ] },

    { name: 'Savoia', geo: 'FR:Savoia', sources: [EN + 'Savoy_wine'],
      description: 'A única região vinícola alpina da França, em Haute-Savoie, Ain, Isère e Savoie; encostas íngremes voltadas ao sul, protegidas das geadas de baixada. Predominam brancos secos e leves; tintos de Mondeuse com tons azulados. Vin de Savoie tem 17 crus de vila; Roussette de Savoie tem 4 crus.',
      climate: 'Alpino, fresco.', soils: '', altitude: 'Picos em volta passam de 1.220 m.', history: '',
      grapes: ['Jacquère', 'Altesse', 'Roussanne', 'Mondeuse Noire'], grapes_other: ['Gringet', 'Pinot Gris', 'Pinot Noir'],
      notable_wines: 'Vin de Savoie (Apremont, Chignin, Arbin, Chautagne), Chignin-Bergeron, Roussette de Savoie (Frangy, Monthoux, Marestel, Monterminod), Crépy',
      producers: [],
      subregions: [
        sub('Chignin e Chignin-Bergeron', 'AOC (cru)', 'Chignin, Savoie, France', 'Cru do Vin de Savoie; o Chignin-Bergeron é o cru de prestígio de Roussanne (localmente Bergeron).', ['Roussanne', 'Jacquère'], [], '', EN + 'Savoy_wine'),
        sub('Apremont', 'AOC (cru)', 'Apremont, Savoie, France', 'Cru do Vin de Savoie.', ['Jacquère'], [], '', EN + 'Savoy_wine'),
        sub('Crépy', 'AOC', 'Douvaine, Haute-Savoie, France', 'Perto do Lago de Genebra.', [], [], '', EN + 'Savoy_wine'),
        sub('Roussette de Savoie', 'AOC', 'Frangy, Haute-Savoie, France', 'Brancos de Altesse (Roussette); crus Frangy, Monthoux, Marestel e Monterminod.', ['Altesse'], [], '', EN + 'Savoy_wine')
      ] },

    { name: 'Córsega', geo: 'FR:Córsega', sources: [EN + 'Corsican_wine'],
      description: 'Ilha mediterrânea francesa de tradição vinícola italiana. Comerciantes fócios chegaram por volta de 570 a.C.; o domínio genovês (desde o século XIII) regulou a colheita. A área de vinhas quadruplicou entre 1960 e 1976; desde os anos 1980, subsídios da UE priorizaram a qualidade.',
      climate: 'Mais quente e seco que o continente: julho ~23 °C, 740 mm de chuva, ~2.750 horas de sol; o mar suaviza as variações.',
      soils: 'Xisto no Cap Corse; calcário, giz e argila em Patrimonio; granito na costa oeste; areia margosa na costa leste.', altitude: '', history: 'A família de Napoleão era de Ajaccio.',
      grapes: ['Nielluccio', 'Sciaccarello', 'Vermentino'], grapes_other: [],
      notable_wines: 'Patrimonio, Ajaccio, Vin de Corse, Muscat du Cap Corse',
      producers: [],
      subregions: [
        sub('Patrimonio', 'AOC', 'Patrimonio, Haute-Corse, France', 'Costa norte, primeira AOC da ilha (1968); solos de giz e argila.', ['Nielluccio', 'Vermentino'], [], '', EN + 'Corsican_wine'),
        sub('Ajaccio', 'AOC', 'Ajaccio, Corse-du-Sud, France', 'Costa sudoeste, antes Coteaux d\'Ajaccio; tintos de corpo médio de Sciaccarello, "a joia da coroa" das uvas corsas.', ['Sciaccarello'], [], '', EN + 'Ajaccio_AOC'),
        sub('Muscat du Cap Corse', 'AOC', 'Rogliano, Haute-Corse, France', 'Península do norte: vins doux naturels de Muscat.', ['Muscat Blanc à Petits Grains'], [], '', EN + 'Corsican_wine')
      ] }
  ];

  var countries = [
    { name: 'França', sources: [EN + 'French_wine'],
      description: 'Um dos maiores produtores do mundo: 50 a 60 milhões de hl por ano (7–8 bilhões de garrafas); história vinícola desde o século VI a.C. Dois conceitos centrais: o terroir e o sistema de denominações (AOC, chamado AOP desde 2012), que define uvas e práticas permitidas. As regiões vinícolas não seguem os limites administrativos.' }
  ];

  return { code: 'FR', version: 1, countries: countries, regions: regions, country_of: 'França' };
})());
