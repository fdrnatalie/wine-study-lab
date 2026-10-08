/**
 * CARTÕES DE ESTUDO — França 2: Borgonha (aulas 17 e 18), Beaujolais e Champagne (aula 19).
 * Tópicos curtos; o material pode ter erros: "corrigido" = conferi em fonte aberta e o slide estava errado;
 * "conferir" = não confirmado (fica fora do quiz). Itens: [chave, texto, marca?]. Para 'denominacoes': [nome, descrição, classificação].
 */
var STUDY_PACKS = STUDY_PACKS || [];

STUDY_PACKS.push((function () {
  var cards = [];
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? ['França', region, sub] : ['França', region], title: title, kind: kind, items: mk(items) });
  }
  var prodSort = 690;   // cartões de produção entram no fim do grupo "Espumantes" da seção Produção (pacote PRO)
  function C(topic, group, title, kind, items) {
    var c = { topic: topic, group: group, title: title, kind: kind, items: mk(items) };
    if (topic === 'producao') c.sort = prodSort++;
    cards.push(c);
  }

  // =====================  BORGONHA (aulas 17 e 18)  =====================
  R('Borgonha', '', 'Borgonha: números da região', 'numeros', [
    ['50 mil ha', 'Vinhedos, segundo o slide (provavelmente com Beaujolais; sem ele são cerca de 29 mil ha)', 'conferir'],
    ['110', 'AOPs, segundo o slide; fontes citam 84 AOCs (sem Beaujolais) ou cerca de 100', 'conferir'],
    ['260 mi L', 'Produção anual, segundo o slide; sem Beaujolais é cerca de 150 mi L', 'conferir'],
    ['60%', 'Tintos no volume, segundo o slide; sem Beaujolais, os brancos passam de 60%', 'conferir'],
    ['35%', 'Brancos no volume, segundo o slide', 'conferir'],
    ['5%', 'Crémant no volume, segundo o slide', 'conferir'],
    ['30 mil', 'Garrafas por propriedade em média, segundo o slide', 'conferir'],
    ['6 mil', 'Produtores, pouco mais, segundo o slide', 'conferir'],
    ['33', 'AOCs Grand Cru (Côte d\'Or e Chablis); o slide fala em 40 vinhedos Grand Cru', 'corrigido']
  ]);
  R('Borgonha', '', 'Marcos da Borgonha', 'linha', [
    ['Séc. II', 'Primeira evidência de produção de vinho na região'],
    ['587', 'Início da tradição dos mosteiros, com doação de vinhedos à Igreja (slide: Mosteiro de St. Bénigne, Dijon)'],
    ['1098', 'Ordem de Cister, fundada nesse ano: primeiro movimento religioso a estudar os vinhedos'],
    ['1395', 'O Duque da Borgonha decreta o banimento da Gamay'],
    ['1443', 'Nicolas Rolin funda o Hospices de Beaune, obra social que depois pesaria muito para os vinhos']
  ]);
  R('Borgonha', '', 'Hospices de Beaune', 'fatos', [
    ['Fundação', '1443, por Nicolas Rolin'],
    ['Hospital', 'Funcionou como hospital até 1971'],
    ['Leilão', 'Desde 1859, produtores locais doam vinhos que são leiloados todo ano'],
    ['Data', 'No 3º domingo de novembro'],
    ['Renda', 'Cerca de 8 milhões de euros por ano, em média, para obras sociais, segundo o slide', 'conferir']
  ]);
  R('Borgonha', '', 'Chardonnay na Borgonha', 'fatos', [
    ['Origem', 'Cruzamento de Gouais Blanc com Pinot (o slide diz Pinot Blanc); nasceu na Borgonha', 'corrigido'],
    ['Fama', 'Tida como a uva branca mais cultivada do mundo, segundo o slide', 'conferir'],
    ['Perfil', 'Resistente e adaptável; boa estrutura, acidez elevada, grande potencial de guarda']
  ]);
  R('Borgonha', '', 'Pinot Noir na Borgonha', 'fatos', [
    ['Origem', 'Natural da Borgonha; família das Pinots francesas (Gris, Blanc, Meunier e Noir)'],
    ['Tempo', 'Produz vinhos na Borgonha há mais de 1.600 anos, segundo o slide', 'conferir'],
    ['Perfil', 'Delicada, sensível a pragas e clima extremo; no lugar certo dá vinhos elegantes, aromáticos e de guarda']
  ]);
  R('Borgonha', '', 'Outras castas da Borgonha', 'fatos', [
    ['Aligoté', 'Alta acidez; Bouzeron (60 ha) é a única AOC de vila só dela, e a casta é cerca de 6% da área (o slide a limita a Bouzeron)', 'corrigido'],
    ['Sauvignon Blanc', 'Restrita a Saint-Bris, perto de Chablis; não brilha como em Bordeaux, mas dá bons vinhos'],
    ['Gamay', 'Banida de outras áreas no séc. XIV; é a grande uva do Beaujolais'],
    ['César', 'Pouco conhecida; em corte tradicional com Pinot Noir em Irancy, ao sul de Chablis']
  ]);

  // ---------- Chablis ----------
  R('Borgonha', 'Chablis', 'Chablis em resumo', 'fatos', [
    ['Localização', 'Uns 16 km a leste de Auxerre, a meio caminho entre a Côte d\'Or e Paris (o slide diz 40 km ao sul de Paris)', 'corrigido'],
    ['Área', 'Cerca de 4.800 ha de vinhedos'],
    ['Uva', 'Chardonnay é a única casta permitida'],
    ['AOPs', 'Quatro: Petit Chablis, Chablis, Chablis Premier Cru e Chablis Grand Cru'],
    ['Grand Cru', 'Sete vinhedos oficiais'],
    ['Premier Cru', 'Cerca de 40 vinhedos; destaques Vaillons, Fourchaume e Côte de Léchet']
  ]);
  R('Borgonha', 'Chablis', 'Os 7 Grand Crus de Chablis', 'lista', [
    ['', 'Les Clos'], ['', 'Blanchot'], ['', 'Bougros'], ['', 'Les Preuses'], ['', 'Vaudésir'], ['', 'Valmur'], ['', 'Grenouilles'],
    ['', 'La Moutonne: citada no slide como oitavo, mas não é Grand Cru oficial da INAO']
  ]);
  R('Borgonha', 'Chablis', 'Tamanho dos Grand Crus de Chablis', 'fatos', [
    ['Les Clos', 'O maior: cerca de 26 ha'],
    ['Vaudésir', 'Cerca de 14,7 ha (o slide diz 8,5)', 'corrigido'],
    ['Valmur', 'Cerca de 13,2 ha (o slide diz 4,4)', 'corrigido'],
    ['Blanchot', 'Cerca de 13 ha'],
    ['Bougros', 'Cerca de 12,6 ha (o slide diz 15)', 'corrigido'],
    ['Les Preuses', 'Cerca de 11,4 ha (o slide diz 10,8)', 'corrigido'],
    ['Grenouilles', 'Cerca de 9 ha'],
    ['La Moutonne', 'Cerca de 2,5 ha, segundo o slide']
  ]);
  R('Borgonha', 'Chablis', 'Produtores de Chablis (rótulos do slide)', 'produtores', [
    ['Domaine William Fèvre', ''], ['Domaine Long-Depaquit', ''], ['Louis Michel & Fils', '']
  ]);

  // ---------- Côte de Nuits ----------
  R('Borgonha', 'Côte de Nuits', 'Côte de Nuits em resumo', 'fatos', [
    ['Fama', 'Terra natal da Pinot Noir e principal sub-região de tintos; dá alguns dos vinhos mais conhecidos do mundo'],
    ['Grand Cru', 'São 24 AOCs Grand Cru, de 33 na Borgonha (o slide diz 25 dos 40)', 'corrigido'],
    ['Nomes', 'Clos de Vougeot, Romanée-Conti e La Tâche estão entre os grandes']
  ]);
  R('Borgonha', 'Côte de Nuits', 'Comunas da Côte de Nuits', 'lista', [
    ['', 'Marsannay'], ['', 'Fixin'], ['', 'Gevrey-Chambertin'], ['', 'Morey-Saint-Denis'], ['', 'Chambolle-Musigny'],
    ['', 'Vougeot'], ['', 'Vosne-Romanée'], ['', 'Flagey-Echézeaux'], ['', 'Nuits-Saint-Georges']
  ]);
  R('Borgonha', 'Côte de Nuits', 'Produtores da Côte de Nuits (rótulos do slide)', 'produtores', [
    ['Domaine de la Romanée-Conti', ''], ['Joseph Drouhin', ''], ['Domaine Dujac', '']
  ]);

  // ---------- Côte de Beaune ----------
  R('Borgonha', 'Côte de Beaune', 'Côte de Beaune em resumo', 'fatos', [
    ['Nome', 'Vem de Beaune, cidade principal e centro da produção e do comércio de vinho'],
    ['Fama', 'Alguns dos brancos mais caros do mundo, a maioria com o nome Montrachet'],
    ['Extensão', 'Cerca de 25 km, de Ladoix-Serrigny às colinas de Maranges (o slide diz 20 km)', 'corrigido'],
    ['Vinhedos', 'Voltados para o sol da manhã'],
    ['Uvas', 'Brancos de Chardonnay e tintos de Pinot Noir'],
    ['História', 'Um dos territórios mais antigos da França; vinificação desde a Alta Idade Média'],
    ['AOC', 'Classificada como AOC em 1936, segundo o slide', 'conferir']
  ]);
  R('Borgonha', 'Côte de Beaune', 'AOCs da Côte de Beaune', 'lista', [
    ['', 'Corton'], ['', 'Corton-Charlemagne'], ['', 'Beaune'], ['', 'Pommard'], ['', 'Volnay'],
    ['', 'Meursault'], ['', 'Puligny-Montrachet'], ['', 'Chassagne-Montrachet']
  ]);
  R('Borgonha', 'Côte de Beaune', 'Colina de Corton', 'fatos', [
    ['Grand Cru', 'Corton é o maior Grand Cru da Borgonha'],
    ['Comunas', 'Dividido entre Aloxe-Corton, Ladoix-Serrigny e Pernand-Vergelesses'],
    ['Tintos', 'Quase todo o vinhedo dá só tintos de Pinot Noir'],
    ['Brancos', 'Parte da colina é famosa pelos brancos da AOC Corton-Charlemagne Grand Cru']
  ]);
  R('Borgonha', 'Côte de Beaune', 'Brancos da Côte de Beaune', 'fatos', [
    ['Puligny e Chassagne', 'Entre os crus mais famosos: brancos poderosos, com maçã e nozes tostadas'],
    ['Meursault', 'Brancos mais redondos, amanteigados e cremosos']
  ]);
  R('Borgonha', 'Côte de Beaune', 'Produtores da Côte de Beaune (rótulos do slide)', 'produtores', [
    ['Domaine Leflaive', ''], ['Louis Latour', ''], ['Henri Boillot', ''], ['Louis Jadot', '']
  ]);

  // ---------- Côte Chalonnaise ----------
  R('Borgonha', 'Côte Chalonnaise', 'Côte Chalonnaise em resumo', 'fatos', [
    ['Tamanho', 'Pouco mais de 4 mil ha e 44 aldeias produtoras, segundo o slide', 'conferir'],
    ['AOPs', 'Cinco próprias: Bouzeron, Rully, Mercurey, Givry e Montagny'],
    ['Estilo', 'Importante produtora de brancos, segundo o slide', 'conferir'],
    ['Aligoté', 'Casta nativa da região e muito expressiva'],
    ['Melhor comuna', 'Givry, segundo o slide', 'conferir']
  ]);
  R('Borgonha', 'Côte Chalonnaise', 'Comunas da Côte Chalonnaise', 'denominacoes', [
    ['Bouzeron', 'Cerca de 60 ha; AOC desde 1997; só brancos, só Aligoté', 'AOC'],
    ['Rully', '340 ha: Chardonnay 217 e Pinot Noir 123; tem Premier Cru; vinhos mais ácidos e bons crémants', 'AOC'],
    ['Mercurey', '650 ha, a maior das cinco: Pinot Noir 570 e Chardonnay 80; mais de 30 Premier Cru', 'AOC'],
    ['Givry', '265 ha: Pinot Noir 220 e Chardonnay 45; poucos Premier Cru', 'AOC'],
    ['Montagny', '300 ha; só brancos, e a única casta permitida é a Chardonnay', 'AOC']
  ]);
  R('Borgonha', 'Côte Chalonnaise', 'Produtores da Côte Chalonnaise (rótulo do slide)', 'produtores', [
    ['Domaine Joblot', '']
  ]);

  // ---------- Mâconnais ----------
  R('Borgonha', 'Mâconnais', 'Mâconnais em resumo', 'fatos', [
    ['Área', 'Cerca de 6 mil ha plantados'],
    ['Vocação', 'Brancos de Chardonnay'],
    ['Gamay', 'Vizinho do Beaujolais, cultiva também Gamay'],
    ['Pass-Tout-Grains', 'Gamay com Pinot Noir: vinho raro e simples']
  ]);
  R('Borgonha', 'Mâconnais', 'Comunas do Mâconnais', 'lista', [
    ['', 'Viré-Clessé'], ['', 'Pouilly-Vinzelles'], ['', 'Pouilly-Loché'], ['', 'Pouilly-Fuissé'], ['', 'Saint-Véran']
  ]);
  R('Borgonha', 'Mâconnais', 'Pouilly-Fuissé', 'fatos', [
    ['Fama', 'AOC mais importante e renomada do Mâconnais; alguns vinhos rivalizam com os grandes da Côte de Beaune'],
    ['Uva', 'Só Chardonnay, de vinhas mais velhas'],
    ['Origem', 'Quatro aldeias do sul do Mâconnais: Fuissé, Solutré-Pouilly, Vergisson e Chaintré (o slide diz duas)', 'corrigido'],
    ['Área', 'Cerca de 760 ha (o slide diz 850)', 'corrigido'],
    ['Terroir', 'Solo calcário como o da Côte d\'Or, em colinas voltadas ao sul e protegidas, em forma de anfiteatro'],
    ['Estilos', 'Alguns lembram os brancos de barrica de Meursault; outros têm frutas frescas e mineralidade']
  ]);
  R('Borgonha', 'Mâconnais', 'Produtores do Mâconnais (rótulos do slide)', 'produtores', [
    ['Bouchard Père & Fils', ''], ['Domaines Leflaive', '']
  ]);

  // =====================  BEAUJOLAIS (aula 18)  =====================
  R('Beaujolais', '', 'Beaujolais em resumo', 'fatos', [
    ['Localização', 'Centro da França, ao sul da Borgonha e ao norte de Lyon'],
    ['Origem', 'Vinho desde os romanos, no séc. I, pela rota comercial do rio Saône'],
    ['Uvas', 'Gamay nos tintos; Chardonnay e Aligoté nos brancos'],
    ['Tintos', '97% da produção são tintos'],
    ['Solos', 'Argilo-calcário e granítico'],
    ['Altitude', 'Vinhedos só até uns 450 a 550 m (o slide diz 700 a 1.000 m)', 'corrigido'],
    ['Crise', 'Mercado encolhe na virada do milênio; o excedente de 2002, segundo o slide, vai para destilarias', 'conferir']
  ]);
  R('Beaujolais', '', 'Beaujolais em números', 'numeros', [
    ['12 mil ha', 'Vinhedos em 2024 (o slide diz 20 mil ha)', 'corrigido'],
    ['12', 'AOCs: Beaujolais, Beaujolais-Villages e 10 crus (o slide diz 3 AOPs)', 'corrigido'],
    ['80 mi', 'Garrafas da AOC genérica, segundo o slide', 'conferir'],
    ['45 mi', 'Garrafas da AOC Villages, segundo o slide', 'conferir'],
    ['48 mi', 'Garrafas dos crus, segundo o slide', 'conferir']
  ]);
  R('Beaujolais', '', 'AOCs do Beaujolais', 'fatos', [
    ['Beaujolais', 'AOC genérica'],
    ['Beaujolais-Supérieur', 'Citada no slide'],
    ['Beaujolais-Villages', 'Cerca de 39 comunas'],
    ['Crus', 'Dez, que podem concorrer com bons vinhos da Borgonha e são mais longevos']
  ]);
  R('Beaujolais', '', 'Gamay', 'fatos', [
    ['Origem', 'Natural do Beaujolais; história cheia de altos e baixos'],
    ['Parentesco', 'Parente próxima da Pinot Noir'],
    ['Perfil', 'Boa intensidade aromática, pouco tanino; acidez alta (o slide diz baixa)', 'corrigido'],
    ['Resultado', 'Bem trabalhada, dá ótimos vinhos']
  ]);
  R('Beaujolais', '', 'Decreto de banimento da Gamay', 'fatos', [
    ['Ano', '1395'],
    ['Autor', 'Philippe le Hardi (o Ousado), Duque da Borgonha'],
    ['Argumento', 'Chamou a planta de péssima e pérfida: vinho abundante, mas pernicioso e amargo']
  ]);
  R('Beaujolais', '', 'Beaujolais Nouveau', 'fatos', [
    ['Estilo', 'Simples, leve e despretensioso'],
    ['Método', 'Maceração carbônica'],
    ['Origem', 'Tradição do séc. XIX; popularizou-se nos anos 1960 (o slide diz que a produção começou nos anos 1960)', 'corrigido'],
    ['Fama', 'Rendeu as maiores ações de marketing e logística da época']
  ]);
  R('Beaujolais', '', 'Maceração carbônica', 'fatos', [
    ['Técnica', 'Fermentação com bagos inteiros, em ambiente sem oxigênio e saturado de gás carbônico'],
    ['Efeito', 'Menos acidez e taninos e frutas maduras em destaque']
  ]);
  R('Beaujolais', '', 'Os 10 crus do Beaujolais', 'lista', [
    ['', 'Saint-Amour'], ['', 'Juliénas'], ['', 'Chénas'], ['', 'Moulin-à-Vent'], ['', 'Fleurie'],
    ['', 'Chiroubles'], ['', 'Morgon'], ['', 'Régnié'], ['', 'Brouilly'], ['', 'Côte de Brouilly']
  ]);
  R('Beaujolais', '', 'Tamanho dos crus do Beaujolais', 'numeros', [
    ['1.325 ha', 'Brouilly'],
    ['1.126 ha', 'Morgon'],
    ['800 ha', 'Fleurie'],
    ['640 ha', 'Moulin-à-Vent'],
    ['560 ha', 'Juliénas'],
    ['390 ha', 'Régnié (o slide diz 640 ha)', 'corrigido'],
    ['320 ha', 'Côte de Brouilly'],
    ['310 ha', 'Saint-Amour'],
    ['300 ha', 'Chiroubles'],
    ['250 ha', 'Chénas']
  ]);
  R('Beaujolais', '', 'Estilos dos crus: Chénas, Chiroubles e Juliénas', 'fatos', [
    ['Chénas', 'Encostas íngremes; vinhos de corpo médio, com toques de madeira'],
    ['Chiroubles', 'Na área mais alta; o mais fragrante dos crus, leve e refrescante'],
    ['Juliénas', 'Os melhores, maduros, são vivos e com aromas frutados potentes']
  ]);
  R('Beaujolais', '', 'Estilos dos crus: Régnié e Saint-Amour', 'fatos', [
    ['Régnié', 'Virou cru em 1988; tem dois perfis, um mais leve e fragrante e outro encorpado'],
    ['Saint-Amour', 'Na transição entre o granito do Beaujolais e o calcário do Mâconnais; entre os tintos mais leves e suaves']
  ]);
  R('Beaujolais', 'Moulin-à-Vent', 'Moulin-à-Vent', 'fatos', [
    ['Área', 'Cerca de 640 ha'],
    ['Fama', 'Chamado de "Rei do Beaujolais"'],
    ['Estilo', 'Cor intensa, aroma potente de flores e frutas maduras; ganha longevidade'],
    ['Manganês', 'O slide atribui ao manganês do solo os sabores ricos e a longevidade']
  ]);
  R('Beaujolais', 'Fleurie', 'Fleurie', 'fatos', [
    ['Área', 'Cerca de 800 ha'],
    ['Estilo', 'Floral, leve, com sabores de frutas vermelhas'],
    ['Preço', 'Um dos crus mais caros']
  ]);
  R('Beaujolais', 'Morgon', 'Morgon', 'fatos', [
    ['Área', 'Cerca de 1.126 ha'],
    ['Solo', 'Rocha rica em manganês, óxido de ferro e pirita'],
    ['Estilo', 'Vinhos de estrutura, que envelhecem muito bem']
  ]);
  R('Beaujolais', 'Brouilly e Côte de Brouilly', 'Brouilly e Côte de Brouilly', 'fatos', [
    ['Brouilly', 'Cerca de 1.325 ha: o maior cru'],
    ['Côte de Brouilly', 'Cerca de 320 ha; encostas de granito e xisto'],
    ['Estilo', 'Os da Côte de Brouilly são mais encorpados e interessantes']
  ]);
  R('Beaujolais', '', 'Produtores do Beaujolais (rótulos do slide)', 'produtores', [
    ['Philippe Pacalet', ''], ['Mommessin', ''], ['Pierre Cotton', '']
  ]);

  // =====================  CHAMPAGNE (aula 19)  =====================
  R('Champagne', '', 'Champagne: números da região', 'numeros', [
    ['34 mil ha', 'Vinhedos, pouco mais'],
    ['300 mi', 'Garrafas por ano, mais de 300 milhões'],
    ['1%', 'Dos vinhos do mundo, segundo o slide', 'conferir'],
    ['1,3 mi', 'Habitantes da região, segundo o slide', 'conferir']
  ]);
  R('Champagne', '', 'Champagne: economia e cultura', 'fatos', [
    ['Local', 'Nordeste da França, a mais importante produtora de espumantes do mundo'],
    ['Economia', 'Muito ligada à viticultura; casas como Moët & Chandon e Veuve Clicquot pesam na economia local'],
    ['Reims', 'Abriga a Catedral de Notre-Dame, onde muitos reis foram coroados']
  ]);
  R('Champagne', '', 'Marcos de Champagne', 'linha', [
    ['1638 a 1715', 'Dom Pérignon, monge beneditino que aprimorou o champagne no séc. XVII; não o inventou, ao contrário do que diz o slide', 'corrigido'],
    ['Séc. XVIII', 'Nasce o Método Clássico, com a 2ª fermentação em garrafa'],
    ['1816', 'Madame Clicquot cria o remuage, segundo o slide', 'conferir'],
    ['1876', 'Pommery cria o Brut para os ingleses (safra de 1874); o slide liga o Brut a Madame Clicquot e a 1816', 'corrigido'],
    ['1911', 'Oficializada a échelle des crus, hierarquia dos vinhedos (o slide diz 1927)', 'corrigido'],
    ['1927', 'Lei delimita a zona de produção do champagne', 'corrigido'],
    ['1936', 'Declarada a AOC e reconhecidas as regras de elaboração']
  ]);
  R('Champagne', '', 'Clima de Champagne', 'fatos', [
    ['Tipo', 'Temperado continental: invernos muito frios e verões moderados'],
    ['Verão', 'Fresco, com maturação lenta que preserva ácidos e aromas delicados'],
    ['Geadas', 'As de primavera tardia são um desafio'],
    ['Noites', 'Verões moderadamente quentes com noites frescas dão maturação gradual e equilibrada'],
    ['Colheita', 'Entre agosto e setembro; a secura é fundamental']
  ]);
  R('Champagne', '', 'Solo de Champagne', 'fatos', [
    ['Composição', 'Giz, argila, calcário e marga'],
    ['Giz', 'Proeminente; boa drenagem e calor retido; dá mineralidade ("terroir crayeux")'],
    ['Argila e calcário', 'Proporcionam estrutura']
  ]);
  R('Champagne', '', 'As três uvas principais de Champagne', 'fatos', [
    ['Pinot Noir', 'Tinta; estrutura, corpo e sabores frutados'],
    ['Meunier', 'Tinta, frutada e floral; costuma suavizar e arredondar o champanhe'],
    ['Chardonnay', 'Branca, vinda da Borgonha; acidez vibrante e elegância; é a base do Blanc de Blancs']
  ]);
  R('Champagne', '', 'Chardonnay em Champagne', 'fatos', [
    ['Aromas', 'Cítricos, maçã verde, pêssego, abacaxi e, às vezes, avelã e brioche'],
    ['Estrutura', 'Acidez vibrante e estrutura elegante; contribui para a longevidade'],
    ['Estilo', 'Os Blanc de Blancs são feitos só com ela']
  ]);
  R('Champagne', '', 'Uvas raras de Champagne', 'fatos', [
    ['Pinot Blanc', 'Branca, com notas de frutas brancas e florais; pouco comum nos cortes'],
    ['Pinot Gris', 'Casca rosada e aromas mais intensos; raramente usada, mas dá complexidade'],
    ['Petit Meslier', 'Branca, de acidez pronunciada; rara, alguns produtores a mantêm'],
    ['Arbane', 'Branca que traz acidez e frescor; pouco usada, em pequenas quantidades']
  ]);
  R('Champagne', 'Montagne de Reims', 'Montagne de Reims', 'fatos', [
    ['Local', 'Ao sul de Reims'],
    ['Uva', 'Pinot Noir, que ocupa cerca de 38% das plantações da Champagne'],
    ['Solo e clima', 'Solos calcários e clima fresco'],
    ['Estilo', 'Estrutura e potência, com notas frutadas e toques de especiarias']
  ]);
  R('Champagne', 'Vallée de la Marne', 'Vallée de la Marne', 'fatos', [
    ['Local', 'Ao longo do rio Marne'],
    ['Uva', 'Meunier, cerca de 31% da área plantada da Champagne'],
    ['Solo', 'Misto de calcário e argila'],
    ['Estilo', 'Redondeza e caráter frutado']
  ]);
  R('Champagne', 'Côte des Blancs', 'Côte des Blancs', 'fatos', [
    ['Uva', 'Chardonnay, em cerca de 95% da sub-região (o slide diz que ela tem 95% do Chardonnay da Champagne)', 'corrigido'],
    ['Solo e sol', 'Solos calcários e boa exposição solar'],
    ['Estilo', 'Acidez vibrante e aromas cítricos; os Blanc de Blancs são emblemáticos daqui']
  ]);
  R('Champagne', 'Côte de Sézanne', 'Côte de Sézanne', 'fatos', [
    ['Local', 'Ao sul de Épernay; reconhecida mais recentemente'],
    ['Clima e solo', 'Clima intermediário e solos calcários; o giz traz muita mineralidade'],
    ['Estilo', 'Mistura a elegância da Côte des Blancs com a estrutura da Montagne de Reims']
  ]);
  R('Champagne', 'Aube (Côte des Bar)', 'Côte des Bar (Aube)', 'fatos', [
    ['Local', 'Ao sul da região principal; clima ligeiramente mais quente'],
    ['Uva', 'Pinot Noir em cerca de 87% dos vinhedos, segundo o slide', 'conferir'],
    ['Solo', 'Argilosos e calcários, que dão complexidade'],
    ['Estilo', 'Champanhes mais encorpados e frutados']
  ]);
  R('Champagne', '', 'Grandes produtores de Champagne', 'produtores', [
    ['Veuve Clicquot', ''], ['Moët & Chandon', ''], ['Ruinart', ''], ['Pommery', ''],
    ['Krug', ''], ['Bollinger', ''], ['Perrier-Jouët', ''], ['Louis Roederer', '']
  ]);

  // ---------- Produção (Champagne) ----------
  C('producao', 'Espumantes', 'Champagne: do vinhedo ao vinho-base', 'lista', [
    ['', 'As uvas são selecionadas e limpas'],
    ['', 'São prensadas e dão origem ao mosto'],
    ['', 'O mosto é fermentado e vira vinho-base'],
    ['', 'Prepara-se o assemblage, que segue para a 2ª fermentação']
  ]);
  C('producao', 'Espumantes', 'Champagne: segunda fermentação e acabamento', 'lista', [
    ['', 'O vinho recebe o licor de tiragem e fermenta na garrafa'],
    ['', 'As garrafas descansam em pupitres, com as leveduras'],
    ['', 'Depois de um período, faz-se o dégorgement'],
    ['', 'O licor de expedição é adicionado e define o estilo do champagne'],
    ['', 'O champagne está pronto']
  ]);

  // ---------- Harmonização (cozinha de Champagne) ----------
  C('harmonizacao', 'Champagne', 'Cozinha de Champagne', 'fatos', [
    ['Ingredientes', 'Queijos, presunto de Reims, cogumelos selvagens, maçãs e trufas negras'],
    ['Boudin blanc de Rethel', 'Salsicha branca de Rethel, de porco e leite (o slide cita trufas, mas a receita protegida não leva); delicada, grelhada ou com molhos', 'corrigido'],
    ['Cassolette d\'escargots', 'Caracóis com manteiga de alho e ervas locais, muitas vezes regados com champanhe'],
    ['Fricassée de lapin', 'Coelho com ervas locais, cozido em molho de champanhe'],
    ['Truite à la meunière', 'Truta cozida na manteiga, com batatas ou legumes da estação']
  ]);

  // Nível no quiz, por notoriedade (avaliação editorial; ajustável): medio = conhecido no mundo todo.
  var LEVELS = {
    'Borgonha: números da região': 'avancado',
    'Marcos da Borgonha': 'avancado',
    'Hospices de Beaune': 'avancado',
    'Chardonnay na Borgonha': 'medio',
    'Pinot Noir na Borgonha': 'medio',
    'Outras castas da Borgonha': 'avancado',
    'Chablis em resumo': 'medio',
    'Os 7 Grand Crus de Chablis': 'avancado',
    'Tamanho dos Grand Crus de Chablis': 'expert',
    'Produtores de Chablis (rótulos do slide)': 'expert',
    'Côte de Nuits em resumo': 'medio',
    'Comunas da Côte de Nuits': 'avancado',
    'Produtores da Côte de Nuits (rótulos do slide)': 'avancado',
    'Côte de Beaune em resumo': 'medio',
    'AOCs da Côte de Beaune': 'avancado',
    'Colina de Corton': 'avancado',
    'Brancos da Côte de Beaune': 'avancado',
    'Produtores da Côte de Beaune (rótulos do slide)': 'avancado',
    'Côte Chalonnaise em resumo': 'avancado',
    'Comunas da Côte Chalonnaise': 'expert',
    'Produtores da Côte Chalonnaise (rótulo do slide)': 'expert',
    'Mâconnais em resumo': 'avancado',
    'Comunas do Mâconnais': 'avancado',
    'Pouilly-Fuissé': 'avancado',
    'Produtores do Mâconnais (rótulos do slide)': 'avancado',
    'Beaujolais em resumo': 'medio',
    'Beaujolais em números': 'avancado',
    'AOCs do Beaujolais': 'avancado',
    'Gamay': 'medio',
    'Decreto de banimento da Gamay': 'avancado',
    'Beaujolais Nouveau': 'medio',
    'Maceração carbônica': 'avancado',
    'Os 10 crus do Beaujolais': 'avancado',
    'Tamanho dos crus do Beaujolais': 'expert',
    'Estilos dos crus: Chénas, Chiroubles e Juliénas': 'expert',
    'Estilos dos crus: Régnié e Saint-Amour': 'expert',
    'Moulin-à-Vent': 'avancado',
    'Fleurie': 'avancado',
    'Morgon': 'avancado',
    'Brouilly e Côte de Brouilly': 'avancado',
    'Produtores do Beaujolais (rótulos do slide)': 'expert',
    'Champagne: números da região': 'medio',
    'Champagne: economia e cultura': 'medio',
    'Marcos de Champagne': 'avancado',
    'Clima de Champagne': 'avancado',
    'Solo de Champagne': 'avancado',
    'As três uvas principais de Champagne': 'medio',
    'Chardonnay em Champagne': 'medio',
    'Uvas raras de Champagne': 'expert',
    'Montagne de Reims': 'avancado',
    'Vallée de la Marne': 'avancado',
    'Côte des Blancs': 'avancado',
    'Côte de Sézanne': 'expert',
    'Côte des Bar (Aube)': 'avancado',
    'Grandes produtores de Champagne': 'medio',
    'Champagne: do vinhedo ao vinho-base': 'medio',
    'Champagne: segunda fermentação e acabamento': 'medio',
    'Cozinha de Champagne': 'avancado'
  };
  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });

  return { code: 'FR2', version: 1, cards: cards };
})());
