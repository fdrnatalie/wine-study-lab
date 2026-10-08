/**
 * CARTÕES DE ESTUDO — História do vinho (material de aula, v1).
 * Condensado em tópicos curtos. O material pode ter erros: onde conferi com fonte aberta (Wikipedia, "History of wine")
 * o dado foi corrigido e marcado "corrigido"; o que não consegui confirmar fica marcado "conferir" (fora do quiz).
 * Itens: [chave, texto, marca?].
 */
var STUDY_PACKS = STUDY_PACKS || [];

STUDY_PACKS.push((function () {
  var cards = [];
  function C(group, title, kind, items) {
    cards.push({ topic: 'historia', group: group, title: title, kind: kind, items: items.map(function (i) {
      var o = { k: i[0], v: i[1] }; if (i[2]) o.tag = i[2]; return o; }) });
  }

  C('Antiguidade', 'Os primeiros vinhos', 'linha', [
    ['6000 a.C.', 'Geórgia: primeiras evidências arqueológicas de produção de vinho (achado de 2017)'],
    ['4100 a.C.', 'Armênia: vinificação (vinícola mais antiga conhecida, Areni-1); o slide traz 5000 a.C.', 'corrigido'],
    ['4000 a.C.', 'Mesopotâmia (entre os rios Tigre e Eufrates): uvas e vinho em maior escala'],
    ['3100 a.C.', 'Egito: o vinho vira bebida divina, ligada a rituais religiosos e à vida após a morte'],
    ['2500 a.C.', 'Suméria: registros escritos citam o vinho e sua importância cultural']
  ]);
  C('Antiguidade', 'Do Indo à Grécia', 'linha', [
    ['2000 a.C.', 'Vale do Indo (hoje Paquistão e Índia) adota a produção de vinho', 'conferir'],
    ['1700 a.C.', 'Babilônia e outras civilizações mesopotâmicas: vinho cerimonial e medicinal'],
    ['1500 a.C.', 'China (dinastia Shang): vinho de uvas e outras frutas se torna comum', 'conferir'],
    ['1300 a.C.', 'Fenícia: navegantes espalham a viticultura pelas rotas do Mediterrâneo'],
    ['1100 a.C.', 'Grécia: o vinho floresce e é central nos simpósios (encontros sociais)']
  ]);
  C('Expansão romana', 'Roma leva a vinha à Europa', 'linha', [
    ['800 a.C.', 'Roma se expande e absorve as práticas vinícolas gregas'],
    ['300 a.C.', 'Gália (França): mudas e técnicas romanas', 'conferir'],
    ['100 a.C.', 'Lusitânia (Portugal): colonização romana e início da viticultura'],
    ['100 d.C.', 'Britânia (Inglaterra): vinhas e vinho no sul da ilha'],
    ['100 d.C.', 'Germânia (Alemanha): vinhas nas partes mais quentes']
  ]);
  C('França', 'Marcos da França', 'linha', [
    ['1100', 'Vinhas se expandem além do sul, puxadas pelo comércio'],
    ['1309', 'Châteauneuf-du-Pape, perto de Avignon, nasce com o papado e vira região importante'],
    ['1443', 'Hospices de Beaune (Borgonha) é fundado por Nicolas Rolin e esposa como hospital'],
    ['1855', 'Classificação dos vinhos de Bordeaux para a Exposição Universal de Paris'],
    ['1932', 'Bordeaux responde com a classificação Cru Bourgeois, revista a cada década']
  ]);
  C('Novo Mundo', 'Américas', 'linha', [
    ['1492', 'Colombo chega ao Novo Mundo; videiras nas ilhas do Caribe (o slide cita Colombo plantando)', 'conferir'],
    ['1513', 'Panamá: Vasco Núñez de Balboa introduz a viticultura na América Central'],
    ['1524', 'México: videiras atribuídas ao conquistador Hernán Cortés'],
    ['1554', 'Peru: frei Francisco de Carabantes; a uva se adapta bem ao clima andino'],
    ['Séc. XVI', 'Chile: missionários espanhóis; o slide cita Pedro de Valdivia em 1560', 'corrigido'],
    ['Séc. XVI', 'Argentina: colonizadores espanhóis; produção comercial só bem mais tarde (o slide diz 1600)', 'corrigido'],
    ['1619', 'EUA: colonos ingleses plantam as primeiras vinhas na Virgínia'],
    ['1769', 'Califórnia: franciscanos fundam a Missão San Diego de Alcalá e trazem a viticultura']
  ]);
  C('Novo Mundo', 'Oceania e Canadá', 'linha', [
    ['1788', 'Austrália: Arthur Phillip introduz as primeiras videiras; o slide traz 1840 (Hunter Valley, vinho comercial)', 'corrigido'],
    ['1830', 'Canadá: vinhas em Ontário e Quebec', 'conferir']
  ]);
  C('Brasil', 'Vinho no Brasil', 'linha', [
    ['1532', 'Martim Afonso de Souza planta as primeiras videiras (Vila de São Vicente), sem sucesso'],
    ['1870', 'Imigrantes italianos e alemães trazem conhecimento de viticultura e vinificação'],
    ['1970', 'Renovação: novas vinícolas e técnicas avançadas, com interesse em vinhos de qualidade'],
    ['1990', 'Vinhos brasileiros ganham reconhecimento em concursos internacionais'],
    ['2022', 'Várias regiões vinícolas e qualidade crescendo; vinhos premiados']
  ]);

  return { code: 'HIS', version: 1, cards: cards };
})());
