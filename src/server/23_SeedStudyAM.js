/**
 * CARTÕES DE ESTUDO — Chile (Vale Central e outras regiões) e Argentina (Mendoza e outras regiões).
 * Material de aula (aulas 34 a 37). O material pode ter erros: "corrigido" = conferido em fonte aberta e o slide estava errado;
 * "conferir" = não confirmado (fica fora do quiz).
 * Itens: [chave, texto, marca?]. Para 'denominacoes': [nome, descrição, classificação].
 */
var STUDY_PACKS = STUDY_PACKS || [];

// ======================= CHILE =======================
STUDY_PACKS.push((function () {
  var cards = [];
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function P(title, kind, items) { cards.push({ topic: 'pais', ref: ['Chile'], title: title, kind: kind, items: mk(items) }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? ['Chile', region, sub] : ['Chile', region], title: title, kind: kind, items: mk(items) });
  }
  function H(title, items) { cards.push({ topic: 'harmonizacao', group: 'Chile', title: title, kind: 'fatos', items: mk(items) }); }
  var VC = 'Vale Central (Valle Central)';

  // ---------- País ----------
  P('Marcos do vinho chileno', 'linha', [
    ['1548', 'Francisco de Carabantes planta as primeiras videiras em solo chileno, segundo o slide', 'conferir'],
    ['1845', 'Claude Gay importa 40 mil mudas da Europa para tentar vinhos de qualidade, segundo o slide', 'conferir'],
    ['1851', 'Silvestre Ochagavía importa mudas de Bordeaux (inclusive Carménère); o slide diz 1859', 'corrigido'],
    ['1973', 'Governo militar reduz drasticamente a produção e dificulta o comércio do país'],
    ['1990', 'Redemocratização: a indústria vitivinícola retoma o crescimento']
  ]);
  P('O Chile em números', 'numeros', [
    ['117 mil ha', 'Vinhedos, segundo o slide (dados oficiais recentes do SAG trazem bem mais)', 'conferir'],
    ['800 mi L', 'Produção anual, segundo o slide (dados recentes são maiores)', 'conferir'],
    ['70%', 'Parcela dos tintos na produção'],
    ['55%', 'Parcela da produção que é exportada'],
    ['US$ 2 bi', 'Valor das exportações'],
    ['47%', 'Parcela do vinho importado pelo Brasil que vem do Chile'],
    ['11 L', 'Consumo por habitante (no Brasil, 2 a 2,8 L)']
  ]);
  P('Clima e solo do Chile', 'fatos', [
    ['Extensão', 'País de 4.300 km, mas a faixa de vinhos ocupa cerca de 900 km no centro'],
    ['Limites naturais', 'Atacama ao norte, Andes a leste, Patagônia ao sul, Pacífico a oeste'],
    ['Corrente de Humboldt', 'Vem do Pacífico entre os vales da Cordilheira da Costa e favorece terroirs específicos'],
    ['Solo', 'Rico em minerais']
  ]);
  P('Castas tintas do Chile', 'fatos', [
    ['Cabernet Sauvignon', 'Cerca de 37 mil ha; 29% do vinho fino; chegou em meados do séc. XIX'],
    ['Merlot', '2ª tinta em área, mais de 10 mil ha: vinhos elegantes e aromáticos'],
    ['Carménère', 'Redescoberta em meados dos anos 1990; quase 10 mil ha; robustez e notas vegetais'],
    ['Syrah', 'Pouco mais de 6 mil ha; equilíbrio e notas de especiarias']
  ]);
  P('Castas brancas do Chile', 'fatos', [
    ['Sauvignon Blanc', 'Pouco mais de 11 mil ha, segundo o slide; é a branca mais plantada (cerca de 14 mil ha em 2022)', 'corrigido'],
    ['Chardonnay', 'O slide a dá como a mais plantada (13 mil ha); em 2022 eram cerca de 10 mil ha', 'corrigido'],
    ['Moscatel de Alexandria', '3ª branca, 6 mil ha: vinhos simples em grande quantidade, não de destaque em qualidade']
  ]);
  P('Cozinha do Chile', 'fatos', [
    ['Origem', 'Fusão de imigrantes árabes, britânicos, italianos, indianos e espanhóis'],
    ['Pratos citados', 'Empanadas, ceviche, curanto, choripán e charquicán']
  ]);
  P('Grandes produtores do Chile', 'produtores', [
    ['De Martino', ''], ['Concha y Toro', ''], ['Anakena', ''], ['Ventisquero', ''], ['Casa Lapostolle', ''],
    ['Viu Manent', ''], ['San Pedro', ''], ['O. Fournier', ''], ['Errázuriz', ''], ['Seña', ''], ['Amayna', ''], ['Casa Marín', ''], ['Viña Leyda', '']
  ]);

  // ---------- Vale Central ----------
  R(VC, '', 'Vale Central em resumo', 'fatos', [
    ['Papel', 'Coração da vitivinicultura chilena'],
    ['Regiões', 'Maipo, Rapel (Cachapoal e Colchagua), Curicó e Maule']
  ]);
  R(VC, 'Maipo', 'Vale do Maipo', 'fatos', [
    ['Local', 'Arredores de Santiago; cortado pelos rios Maipo e Mapocho'],
    ['Fama', 'Considerada a mais importante do país; Cabernets de altíssima qualidade'],
    ['Zonas', 'Macul, Puente Alto, Pirque, Buin e Alto Jahuel']
  ]);
  R(VC, 'Maipo', 'Produtores do Maipo', 'produtores', [
    ['Concha y Toro', ''], ['Cousiño Macul', ''], ['Santa Rita', ''], ['De Martino', ''], ['Ventisquero', ''], ['Viña Carmen', '']
  ]);
  R(VC, 'Cachapoal', 'Vale do Rapel (Cachapoal)', 'fatos', [
    ['Rapel', 'Nome do grande lago formado pelos rios Cachapoal e Tinguiririca'],
    ['Tamanho', 'O slide a chama a maior área do Vale Central; o Maule tem mais vinhedos', 'corrigido'],
    ['Destaque', 'Terroir considerado o mais apropriado para a Carménère'],
    ['Divisão', 'Dividido entre Cachapoal e Colchagua']
  ]);
  R(VC, 'Cachapoal', 'Produtores do Rapel', 'produtores', [
    ['Morandé', ''], ['Anakena', ''], ['Altair', ''], ['Casa Lapostolle', ''], ['Viña Montes', ''], ['Casa Silva', ''], ['Viu Manent', '']
  ]);
  R(VC, 'Curicó', 'Vale do Curicó', 'fatos', [
    ['Posição', 'Importante, mas sem o prestígio das anteriores'],
    ['Vinhos', 'Bons Merlots e Cabernets'],
    ['Água', 'Falta de água: totalmente dependente de irrigação'],
    ['Rios', 'Lontué, Mataquito, Teno e Claro']
  ]);
  R(VC, 'Curicó', 'Produtores do Curicó', 'produtores', [
    ['Miguel Torres', ''], ['Viña San Pedro', ''], ['Valdivieso (Caballo Loco)', '']
  ]);
  R(VC, 'Maule', 'Vale do Maule', 'fatos', [
    ['Área', 'Mais de 32 mil ha: a maior área plantada do Chile'],
    ['Uva País', 'Grande parte dos vinhedos é de País, de origem espanhola'],
    ['Quem planta', 'Produtores familiares do sul do Vale Central, pela resistência e alto rendimento']
  ]);
  R(VC, 'Maule', 'Produtores do Maule', 'produtores', [
    ['TerraNoble', ''], ['Carta Vieja', ''], ['O. Fournier', ''], ['Gillmore', ''], ['Reserva de Caliboro', '']
  ]);

  // ---------- Outras regiões ----------
  R('Coquimbo', '', 'Coquimbo', 'fatos', [
    ['Local', 'Norte do Chile, porta de entrada do deserto do Atacama'],
    ['Clima', 'Chuva baixíssima; o Pacífico ameniza o calor; grande amplitude térmica; uvas amadurecem plenamente'],
    ['Zonas', 'Elqui, Limarí e Choapa'],
    ['Destaques', 'Chardonnay, Sauvignon Blanc, Pinot Noir e Syrah']
  ]);
  R('Coquimbo', '', 'Produtores de Coquimbo', 'produtores', [
    ['Maycas del Limarí', ''], ['Tabalí', ''], ['Cavas del Valle', ''], ['Falernia', ''], ['Alpa', '']
  ]);
  R('Aconcágua', '', 'Aconcágua', 'fatos', [
    ['Vales', 'Aconcágua, Casablanca e San Antonio: uma das regiões mais nobres do país'],
    ['Fatores', 'Diversidade de climas e solos, altos investimentos e forte cultura'],
    ['Castas', 'Chardonnay, Sauvignon Blanc, Syrah, Pinot Noir e Moscatel (para destilação)']
  ]);
  R('Aconcágua', '', 'Produtores do Aconcágua', 'produtores', [
    ['Errázuriz', ''], ['Seña', ''], ['Loma Larga', ''], ['Matetic', ''], ['Casas del Bosque', ''], ['Amayna', ''], ['Casa Marín', ''], ['Viña Leyda', '']
  ]);
  R('Sul do Chile', 'Itata', 'Vale do Itata', 'fatos', [
    ['Idade', 'Uma das regiões mais antigas; vinhos desde 1550; forma a Región Vitícola del Sur'],
    ['Perfil', 'O mais artesanal: muitos pequenos produtores com métodos ancestrais'],
    ['Clima', 'Média de 17 °C e sem necessidade de irrigação'],
    ['Castas', 'Chardonnay, Merlot e Pinot Noir'],
    ['Produção', 'Pouco mais de 6 milhões de litros por ano']
  ]);
  R('Sul do Chile', 'Itata', 'Produtores do Itata', 'produtores', [
    ['Viña Santa Berta', ''], ['Viña Männle', ''], ['Migaço', '']
  ]);
  R('Sul do Chile', 'Bío-Bío', 'Vale do Bío-Bío', 'fatos', [
    ['Local', 'Entre Itata e Malleco; uma das menores regiões produtoras'],
    ['Clima', 'Frio e ventos são grandes influências'],
    ['Castas presentes', 'País (tinta) e Moscatel (branca)'],
    ['Destaques', 'Pinot Noir, Riesling, Chardonnay e Gewürztraminer']
  ]);
  R('Sul do Chile', 'Bío-Bío', 'Produtores do Bío-Bío', 'produtores', [
    ['Pedro Parra', ''], ['Lomas de Llahuén', ''], ['Viñas Inéditas (Terroir Sonoro)', ''], ['Roberto Henríquez', '']
  ]);

  // ---------- Harmonização ----------
  H('Cozinha do Chile', [
    ['Empanadas', 'Pastéis de massa recheados com carne, azeitonas, cebola e temperos como páprica e cominho'],
    ['Ceviche', 'Peixe cru marinado em limão ou lima, com cebola roxa, pimentão, coentro e pimenta'],
    ['Curanto', 'Evento comunitário: frutos do mar, batatas, legumes e pães cozidos em buraco, com pedras vulcânicas e folhas de nalca'],
    ['Choripán', 'Chorizo no pão, muito popular também no Chile'],
    ['Charquicán', 'Ensopado de carne e legumes com coentro, orégano, cominho, batata, abóbora e cebola']
  ]);

  var LEVELS = {
    'Marcos do vinho chileno': 'avancado', 'O Chile em números': 'medio', 'Clima e solo do Chile': 'avancado',
    'Castas tintas do Chile': 'medio', 'Castas brancas do Chile': 'medio', 'Cozinha do Chile': 'avancado',
    'Grandes produtores do Chile': 'avancado', 'Vale Central em resumo': 'medio', 'Vale do Maipo': 'medio',
    'Produtores do Maipo': 'avancado', 'Vale do Rapel (Cachapoal)': 'avancado', 'Produtores do Rapel': 'expert',
    'Vale do Curicó': 'avancado', 'Produtores do Curicó': 'expert', 'Vale do Maule': 'avancado', 'Produtores do Maule': 'expert',
    'Coquimbo': 'avancado', 'Produtores de Coquimbo': 'expert', 'Aconcágua': 'avancado', 'Produtores do Aconcágua': 'avancado',
    'Vale do Itata': 'expert', 'Produtores do Itata': 'expert', 'Vale do Bío-Bío': 'expert', 'Produtores do Bío-Bío': 'expert' };
  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });

  return { code: 'CL', version: 1, cards: cards };
})());

// ======================= ARGENTINA =======================
STUDY_PACKS.push((function () {
  var cards = [];
  function mk(items) { return items.map(function (i) { var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }); }
  function P(title, kind, items) { cards.push({ topic: 'pais', ref: ['Argentina'], title: title, kind: kind, items: mk(items) }); }
  function R(region, sub, title, kind, items) {
    cards.push({ topic: 'regiao', ref: sub ? ['Argentina', region, sub] : ['Argentina', region], title: title, kind: kind, items: mk(items) });
  }
  function H(group, title, items) { cards.push({ topic: 'harmonizacao', group: group, title: title, kind: 'fatos', items: mk(items) }); }
  var MZ = 'Mendoza', NO = 'Noroeste (Salta, Catamarca, Jujuy)', SJ = 'San Juan e La Rioja', PT = 'Patagônia';

  // ---------- País ----------
  P('Marcos do vinho argentino', 'linha', [
    ['1551', 'Colonos espanhóis introduzem as primeiras videiras viníferas; fontes abertas citam 1556-1557', 'conferir'],
    ['1852', 'Michel Aimé Pouget planta as primeiras mudas de Malbec em Mendoza'],
    ['1853', 'Fundada a primeira escola de agricultura e enologia, sob responsabilidade de Pouget'],
    ['1885', 'Ferrovia Mendoza-Buenos Aires agita a indústria do vinho; o slide diz 1850', 'corrigido'],
    ['1959', 'Criado o Instituto Nacional de Viticultura; a qualidade começa a subir'],
    ['1970', 'Crise econômica derruba o consumo interno e leva a indústria a focar em qualidade e exportação'],
    ['1990', 'Liberalismo e inovações tecnológicas levam o vinho ao mundo'],
    ['1999', 'Lei Geral do Vinho, equiparada à europeia; surgem as primeiras denominações'],
    ['2021', '523 vinícolas exportadoras (eram apenas 10 no início dos anos 1990)', 'conferir']
  ]);
  P('A Argentina em números', 'numeros', [
    ['194 mil ha', 'Vinhedos, segundo o slide (dados do INV para 2021 trazem cerca de 211 mil); 7ª maior área do mundo', 'conferir'],
    ['5º', 'Maior produtor de vinho do mundo; mais de 1 bilhão de litros por ano'],
    ['795', 'Vinícolas em operação, segundo o INV'],
    ['30 L', 'Consumo por habitante, segundo o slide ("superior a 30 L")', 'conferir'],
    ['1.000 m', 'Altitude média dos melhores vinhedos (cada 150 m de subida, 1 °C a menos)'],
    ['17', 'Outras províncias que produzem vinho além de Mendoza'],
    ['400 mil', 'Pessoas empregadas pela indústria do vinho'],
    ['10º', 'Maior exportador do mundo'],
    ['16%', 'Parcela das exportações que o Brasil consome (2º mercado); EUA, 24%', 'conferir']
  ]);
  P('Clima e solo da Argentina', 'fatos', [
    ['Solo', 'Diversificado, de aluviais férteis a pedregosos e calcários; pobres em matéria orgânica'],
    ['Efeito do solo', 'Controla o vigor e concentra os frutos; o pedregoso drena bem'],
    ['Clima', 'Grande amplitude térmica: dias quentes e noites frescas, maturação lenta'],
    ['Andes', 'Criam microclimas (Mendoza, Salta) e protegem da umidade excessiva']
  ]);
  P('Malbec na Argentina', 'fatos', [
    ['Origem', 'Cahors, sudoeste da França; levada à Argentina em 1852'],
    ['Área', '45.657 ha: o maior produtor mundial; 23% dos vinhedos do país'],
    ['Entre as tintas', 'Representa 39% do total produzido, segundo o slide', 'conferir'],
    ['Estilo', 'Cor profunda, aromas frutados e taninos suaves']
  ]);
  P('Castas brancas da Argentina', 'fatos', [
    ['Torrontés Riojano', 'Mais de 9 mil ha; branca mais importante; cruzamento de Moscatel de Alexandria com Criolla'],
    ['Chardonnay', 'Pouco menos de 6 mil ha; robusto, amadeirado e aromático'],
    ['Sauvignon Blanc', '1.900 ha: fresca, leve, versátil; muito apreciada pelos brasileiros'],
    ['Chenin Blanc', '1.744 ha'],
    ['Semillón', '653 ha'],
    ['Viognier', '723 ha']
  ]);
  P('Castas tintas da Argentina', 'fatos', [
    ['Bonarda', 'Mais de 18 mil ha, 2ª mais plantada: vinhos frutados e de bom corpo'],
    ['Cabernet Sauvignon', 'Mais de 14 mil ha: encorpados, complexos e longevos'],
    ['Syrah', '11 mil ha: complexos, com especiarias e encorpados'],
    ['Merlot', '5.062 ha'],
    ['Cabernet Franc', '1.352 ha'],
    ['Pinot Noir', '1.992 ha']
  ]);
  P('Sistema de denominações argentino', 'fatos', [
    ['1999', 'Lei define a classificação dos vinhos pela origem (também exigência para exportar)'],
    ['IG', 'Indicação Geográfica: origem reconhecida e com estatuto legal no rótulo; cerca de 107 no slide', 'conferir'],
    ['DOC', 'IG com regulação de estilo de vinho; hoje apenas duas'],
    ['As duas DOCs', 'Luján de Cuyo e San Rafael, ambas em Mendoza']
  ]);
  P('Reserva e Gran Reserva', 'fatos', [
    ['Regra de 2011', 'O Instituto Nacional do Vinho fixou tempos de barril e uvas mínimas por hectolitro', 'conferir'],
    ['Reserva', 'Tintos 12 meses em carvalho; brancos e rosés 6 meses; 135 kg de uva por hl', 'conferir'],
    ['Gran Reserva', 'Tintos 24 meses em carvalho; brancos e rosés 12 meses; 140 kg de uva por hl', 'conferir']
  ]);
  P('Regiões vinícolas da Argentina', 'fatos', [
    ['Divisão', 'Norte, Cuyo, Patagônia e região Atlântica'],
    ['Cuyo', 'Mendoza, La Rioja e San Juan, segundo o slide'],
    ['De norte a sul', 'Salta, Catamarca, La Rioja, San Juan, Neuquén e Río Negro (fora Mendoza)']
  ]);
  P('Grandes produtores da Argentina', 'produtores', [
    ['Salentein', ''], ['Catena Zapata', ''], ['Bodega Caro', ''], ['O. Fournier', ''], ['Família Zuccardi', ''],
    ['Bodega Trapiche', ''], ['Luigi Bosca', ''], ['Terrazas de los Andes', ''],
    ['Finca Las Moras', ''], ['Michel Torino', ''], ['Bodega Callia', ''], ['Amalaya', ''], ['Augusto Pulenta', ''],
    ['Noemía', ''], ['Humberto Canale', ''], ['Bodega del Fin del Mundo', '']
  ]);

  // ---------- Mendoza ----------
  R(MZ, '', 'Mendoza em resumo', 'numeros', [
    ['146.815 ha', 'Vinhedos de Mendoza, de 194 mil no país: a maior e mais importante região'],
    ['76%', 'Parcela de todo o vinho argentino'],
    ['90%', 'Parcela do vinho exportado pela Argentina que sai de Mendoza', 'conferir'],
    ['300 mm', 'Chuva por ano: extremamente seca, irrigação vital'],
    ['70%', 'Parcela dos tintos no volume; predominam Malbec, Bonarda, Cabernet Sauvignon e Syrah']
  ]);
  R(MZ, '', 'Sub-regiões de Mendoza', 'lista', [
    ['', 'Cinco sub-regiões: Norte e Leste, Maipú, Luján de Cuyo, Vale de Uco e Sul'],
    ['', 'Mendoza é uma das três regiões de Cuyo, com La Rioja e San Juan']
  ]);
  R(MZ, '', 'Norte e Leste de Mendoza', 'fatos', [
    ['Áreas', 'Las Heras, Lavalle, San Martín, Junín, Rivadavia e Santa Rosa'],
    ['Perfil', 'Grande volume e vinhos mais simples'],
    ['Condução', 'Em muitas áreas ainda em "latada", com movimentos de modernização'],
    ['Terroir', 'Solos arenosos e clima quente, mas promissor: atrai investimentos'],
    ['Produtores', 'Família Zuccardi, Esmeralda, Llaver e Tittarelli']
  ]);
  R(MZ, 'Maipú', 'Maipú', 'fatos', [
    ['Nome', '"Zona do Alto Rio Mendoza"'],
    ['Distritos', 'Godoy Cruz, Coquimbito, Lunlunta, Cruz de Piedra e Las Barrancas'],
    ['Clima e solo', 'Clima ameno e solo pedregoso; praticamente todas as castas em alto nível'],
    ['Castas', 'Predominam Malbec, Cabernet e Syrah'],
    ['Produtores', 'Escorihuela Gascón, Bodega Caro, Trapiche, Trivento e Finca Flichman']
  ]);
  R(MZ, 'Luján de Cuyo', 'Luján de Cuyo', 'fatos', [
    ['Fama', 'Considerada a melhor sub-região de Mendoza e da Argentina'],
    ['Pioneirismo', 'Primeira DOC da Argentina (1989); o slide diz do continente americano', 'conferir'],
    ['Distritos', 'Perdriel, Vistalba, Agrelo, Las Compuertas, Carrodilla e Mayor Drummond'],
    ['Produtores', 'Nieto Senetiner, Kaiken, Weinert, Norton, Terrazas de los Andes, Achaval Ferrer, Viña Cobos, Mendel e Catena Zapata']
  ]);
  R(MZ, 'Valle de Uco (Tupungato)', 'Vale de Uco', 'fatos', [
    ['Localização', 'Aos pés dos Andes, no paralelo 34° e acima de 1.000 m de altitude', 'conferir'],
    ['Departamentos', 'Tupungato, Tunuyán e San Carlos'],
    ['Fama', 'Uma das melhores sub-regiões da Argentina'],
    ['Produtores', 'Salentein, Clos de los Siete, Riglos, Zorzal, O. Fournier, Andeluna, Luca, Tikal e Finca Sophenia']
  ]);
  R(MZ, 'San Rafael', 'Sul de Mendoza (San Rafael)', 'fatos', [
    ['Peso', 'Uma das áreas mais importantes do país e das poucas em que a Malbec não predomina'],
    ['Castas', 'Cabernet Sauvignon (tinta) e Chenin Blanc (branca)'],
    ['Departamentos', 'San Rafael (o mais importante) e General Alvear'],
    ['Produtores', 'Casa Bianchi, Alfredo Roca e Balbi']
  ]);

  // ---------- San Juan e La Rioja ----------
  R(SJ, '', 'San Juan', 'fatos', [
    ['Área', '30.856 ha: 2ª província do país, com 16% da área plantada'],
    ['Vales (IGs)', 'Pedernal, Calingasta, Zonda, Ullum, Iglesia e Jáchal'],
    ['Clima e solo', 'Quente e seco; solos aluviais de areia e argila'],
    ['Tintas', 'Syrah é a casta típica; também Malbec, Cabernet Sauvignon e Bonarda'],
    ['Brancas', 'Torrontés e castas criollas como Pedro Giménez e Moscatel de Alexandria']
  ]);
  R(SJ, 'La Rioja (Chilecito)', 'La Rioja', 'fatos', [
    ['Área', '6.337 ha'],
    ['Zona', 'Valles de Famatina IG, a oeste, entre as Sierras de Velasco e de Famatina'],
    ['Clima', 'Quente, noites temperadas, muito seco'],
    ['Torrontés Riojano', 'Nativa da zona, da família das criollas; brancos esverdeados, aromáticos, acidez moderada a baixa'],
    ['Tintas', 'Malbec, Cabernet Sauvignon, Bonarda e Syrah']
  ]);

  // ---------- Noroeste ----------
  R(NO, '', 'Salta', 'fatos', [
    ['Valles Calchaquíes', 'IG de vales intermontanos de 270 km, compartilhada com Catamarca e Tucumán'],
    ['Altitude', 'Cultivo de 1.530 m até 3.111 m em Payogasta (Cachi)'],
    ['Castas', 'Torrontés, Malbec, Cabernet Sauvignon, Merlot e Tannat']
  ]);
  R(NO, 'Cafayate (Valles Calchaquíes)', 'Cafayate', 'fatos', [
    ['Papel', 'Valle de Cafayate IG: centro de referência da vitivinicultura do Norte'],
    ['Peso', '75% dos vinhedos de Salta e 60% da área dos Valles Calchaquíes'],
    ['Clima', 'Quente com noites frias; grande amplitude térmica e verões longos']
  ]);
  R(NO, '', 'Catamarca', 'fatos', [
    ['Nome', 'Do quíchua, "fortaleza na encosta"'],
    ['Área', '2.497 ha em vales do oeste (Tinogasta-Fiambalá e Santa María)'],
    ['Clima e solo', 'Continental árido, cerca de 20 °C de média; solos arenosos, profundos, com seixos'],
    ['Castas', 'Torrontés Riojano é a mais plantada; tintas Cabernet Sauvignon, Malbec, Syrah e Cereza']
  ]);

  // ---------- Patagônia ----------
  R(PT, 'San Patricio del Chañar (Neuquén)', 'Neuquén', 'fatos', [
    ['Local', 'Sudeste do território, nas bacias dos rios Limay e Neuquén'],
    ['San Patricio del Chañar', 'Surge no fim dos anos 1990 como centro e diversifica os vinhos'],
    ['Área e altitude', '1.764 ha entre 270 e 415 m; a latitude compensa a baixa altitude'],
    ['Clima', 'Quente, noites muito frias, seco, ventos constantes: uvas muito sãs'],
    ['Castas', 'Malbec, Cabernet Sauvignon, Merlot, Pinot Noir e Chardonnay']
  ]);
  R(PT, 'Alto Valle del Río Negro', 'Río Negro', 'fatos', [
    ['Local', 'Vales das bacias dos rios Colorado e Negro; cerca de 1.455 ha'],
    ['Altitude', 'De 370 m nos vales altos a oeste até 4 m perto do Atlântico'],
    ['Oeste', 'Continental e seco; invernos frios, verões quentes e secos; ventos da cordilheira dão sanidade'],
    ['Leste', 'San Javier, no Vale Inferior: planície de 4 a 16 m, clima moderado pelo mar (viticultura atlântica)'],
    ['Castas', 'Chardonnay, Malbec, Merlot e Pinot Noir']
  ]);

  // ---------- Harmonização ----------
  H('Mendoza', 'Cozinha de Mendoza', [
    ['Contexto', 'Ingredientes frescos e sabores autênticos; o vinho é fundamental nas refeições'],
    ['Empanadas', 'Pastéis de forno com carne temperada, azeitona e ovo cozido; variações com queijos, tomate seco e frango'],
    ['Parrillada', 'Churrasco argentino com cortes tradicionais, com saladas temperadas, legumes assados, queijos e muito vinho']
  ]);
  H('Argentina', 'Cozinha da Argentina', [
    ['Carne', 'Paixão nacional: cortes nobres como bife de chorizo e asado de tira'],
    ['Peixes', 'Truta patagônica e salmão do Pacífico, em regiões como Bariloche e Ushuaia'],
    ['Truta', 'Peixe de água doce, abundante na Patagônia; carne delicada, sabor suave e textura firme'],
    ['Milanesa', 'De influência italiana, vinda do norte da Itália; versões à parmigiana ou em sanduíches']
  ]);

  var LEVELS = {
    'Marcos do vinho argentino': 'avancado', 'A Argentina em números': 'avancado', 'Clima e solo da Argentina': 'avancado',
    'Malbec na Argentina': 'medio', 'Castas brancas da Argentina': 'avancado', 'Castas tintas da Argentina': 'medio',
    'Sistema de denominações argentino': 'expert', 'Reserva e Gran Reserva': 'expert', 'Regiões vinícolas da Argentina': 'avancado',
    'Grandes produtores da Argentina': 'avancado', 'Mendoza em resumo': 'medio', 'Sub-regiões de Mendoza': 'avancado',
    'Norte e Leste de Mendoza': 'expert', 'Maipú': 'avancado', 'Luján de Cuyo': 'medio', 'Vale de Uco': 'medio',
    'Sul de Mendoza (San Rafael)': 'avancado', 'San Juan': 'avancado', 'La Rioja': 'expert', 'Salta': 'avancado',
    'Cafayate': 'avancado', 'Catamarca': 'expert', 'Neuquén': 'avancado', 'Río Negro': 'avancado' };
  cards.forEach(function (c) { c.level = LEVELS[c.title] || 'avancado'; });

  return { code: 'AR', version: 1, cards: cards };
})());
