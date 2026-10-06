/**
 * ENCICLOPÉDIA DE REGIÕES — pack BRASIL (origem "pesquisado").
 * v1 (03/10/2026): 3 regiões (Wikipedia: "Brazilian wine", "Serra Gaúcha", "Vale dos Vinhedos").
 * v2 (06/10/2026): 6 regiões e as 12 Indicações Geográficas de vinho, com as regras de cada uma.
 *   Fontes: catálogo "Vinhos brasileiros com Indicação Geográfica" (MAPA/Embrapa/associações, 2022);
 *   Embrapa Uva e Vinho; Brasil de Vinhos (Ibravin); notícias da concessão de cada IG (INPI);
 *   Wikipedia em português ("Vinho brasileiro" e páginas dos municípios).
 * Contornos pelos estados (18_GeoWorld.js, Natural Earth): RS e SC exatos; os demais aproximados (o estado inteiro).
 */
var REGION_PACKS = REGION_PACKS || [];

REGION_PACKS.push((function () {
  var EN = 'https://en.wikipedia.org/wiki/', PT = 'https://pt.wikipedia.org/wiki/';
  var BW = EN + 'Brazilian_wine', VB = PT + 'Vinho_brasileiro', VV = PT + 'Vale_dos_Vinhedos';
  var CAT = 'https://www.gov.br/agricultura/pt-br/assuntos/sustentabilidade/indicacao-geografica/arquivos-publicacoes-ig/catalogo-vinhos-brasileiros-com-indicacao-geografica';
  var EMB = 'https://www.embrapa.br/en/web/uva-e-vinho/indicacoes-geograficas-de-vinhos-do-brasil';
  var BDV = 'https://brasildevinhos.com.br/origem-e-tradicao-conheca-as-indicacoes-geograficas-do-brasil-de-vinhos/';
  var APB = 'https://revistacultivar.com.br/noticias/pesquisa-ajuda-brasil-a-conquistar-denominacao-de-origem-de-espumantes';
  var VSF = 'https://revistacultivar.com.br/noticias/vale-do-sao-francisco-recebe-reconhecimento-de-indicacao-geografica-para-vinhos-da-regiao';
  var SCA = 'https://www.nsctotal.com.br/?p=2867747';
  var BIT = 'https://agenciasebrae.com.br/cultura-empreendedora/com-vinhos-de-bituruna-parana-conquista-a-sua-11a-indicacao-geografica/';
  var SDM = 'https://www.cnnbrasil.com.br/viagemegastronomia/gastronomia/sul-de-minas-ganha-indicacao-geografica-para-producao-de-vinhos-de-inverno/';

  function sub(name, classification, place, description, grapes, producers, wines, src, renamedFrom) {
    return { name: name, classification: classification, place: place, description: description,
      grapes: grapes || [], producers: producers || [], notable_wines: wines || '', source: src || CAT, renamed_from: renamedFrom || '' };
  }
  function prod(name, labels, src) { return { name: name, labels: labels || '', src: src }; }

  var regions = [
    { name: 'Rio Grande do Sul', geo: 'BR:Rio Grande do Sul', sources: [BW, VB, CAT],
      description: 'Cerca de 90% do vinho brasileiro sai deste estado, entre os paralelos 28 e 34 S, latitude parecida com regiões da Argentina, Chile, África do Sul e Austrália. Concentra a maioria das Indicações Geográficas de vinho do país: na Serra Gaúcha (Vale dos Vinhedos, Pinto Bandeira, Altos de Pinto Bandeira, Altos Montes, Monte Belo, Farroupilha) e na Campanha. Outras áreas: Serra do Sudeste e Campos de Cima da Serra.',
      climate: 'Temperado (subtropical).', soils: '', altitude: '',
      history: 'Jesuítas trouxeram videiras espanholas ao RS em 1626. Plantações de Isabella (labrusca) no litoral sul em 1840 são tidas como as primeiras bem-sucedidas do Brasil. A partir dos anos 1870, imigrantes italianos firmaram a vinha na Serra Gaúcha, sobretudo com uvas americanas; depois vieram uvas italianas e Tannat. Nos anos 1970 e 1980, multinacionais trouxeram técnica e equipamentos; nos anos 1990 floresceram as vinícolas familiares.',
      grapes: ['Merlot', 'Chardonnay', 'Pinot Noir', 'Riesling Italico'], grapes_other: ['Cabernet Sauvignon', 'Cabernet Franc', 'Tannat', 'Moscato Bianco', 'Isabella'],
      notable_wines: 'Espumantes da Serra Gaúcha; Merlot do Vale dos Vinhedos; moscatéis de Farroupilha', producers: [],
      subregions: [
        sub('Vale dos Vinhedos', 'DO (2012) · IP (2002)', 'Bento Gonçalves, Rio Grande do Sul, Brazil',
          'Primeira Indicação de Procedência (2002) e primeira Denominação de Origem (2012) de vinhos do Brasil, em Bento Gonçalves, Garibaldi e Monte Belo do Sul (~82 km²), no Planalto das Araucárias, a 500–700 m. Regras da DO: tintos com Merlot obrigatório (cortes com Cabernet Sauvignon, Cabernet Franc e Tannat); brancos com Chardonnay obrigatório (pode levar Riesling Itálico); espumantes só pelo método tradicional, Natural, Extra-brut ou Brut, com Chardonnay e/ou Pinot Noir. Estágio mínimo antes da venda: brancos 6 meses, tintos 12 meses (madeira só em barris de carvalho), espumantes 9 meses sobre as leveduras.',
          ['Merlot', 'Chardonnay', 'Pinot Noir', 'Riesling Italico', 'Cabernet Sauvignon', 'Cabernet Franc', 'Tannat'], [], 'Merlot e espumante do Vale dos Vinhedos', CAT),
        sub('Serra Gaúcha', 'Região', 'Garibaldi, Rio Grande do Sul, Brazil',
          'Região serrana do nordeste do RS, de colonização italiana e alemã, com a Rota da Uva e do Vinho: a principal e mais antiga região vinícola do Brasil. Boa parte da uva é híbrida ou americana (sucos e vinhos de mesa); entre as viníferas brancas, Chardonnay, Riesling Itálico e Moscato Branco fazem os espumantes. Cidades: Bento Gonçalves, Garibaldi, Caxias do Sul, Flores da Cunha, Farroupilha.',
          ['Chardonnay', 'Pinot Noir', 'Riesling Italico', 'Moscato Bianco'], [], 'Espumantes', VB),
        sub('Pinto Bandeira', 'IP (2010)', 'Pinto Bandeira, Rio Grande do Sul, Brazil',
          'Bento Gonçalves e Farroupilha (área de Pinto Bandeira): vinhas em encostas íngremes e onduladas, em vales fechados com mata nativa; tradição italiana desde 1880 e cooperativas desde os anos 1930. Autorizados tintos e brancos secos, espumantes brut e moscatel. Espumantes só pelo método tradicional, com Chardonnay, Pinot Noir, Riesling Itálico e Viognier; o moscatel com Moscato Branco, Moscatel Nazareno, Moscato de Alexandria, Malvasia de Cândia e Malvasia Bianca. Tintos principais: Cabernet Franc, Merlot, Tannat, Cabernet Sauvignon, Sangiovese e Pinot Noir; entre os brancos, destaca-se o Chardonnay.',
          ['Chardonnay', 'Pinot Noir', 'Riesling Italico', 'Viognier', 'Moscato Bianco', 'Muscat of Alexandria', 'Merlot', 'Cabernet Franc', 'Tannat', 'Cabernet Sauvignon', 'Sangiovese'], [], 'Espumantes de método tradicional', CAT),
        sub('Altos de Pinto Bandeira', 'DO (2022)', 'Pinto Bandeira, Rio Grande do Sul, Brazil',
          'Primeira Denominação de Origem do Brasil — e do Hemisfério Sul — só para espumante natural, concedida pelo INPI em novembro de 2022 (antes, IP). Em Pinto Bandeira, Farroupilha e Bento Gonçalves, de 520 a 770 m de altitude. Só método tradicional, com Chardonnay, Pinot Noir e Riesling Itálico.',
          ['Chardonnay', 'Pinot Noir', 'Riesling Italico'], [], 'Espumante natural de método tradicional', BDV),
        sub('Altos Montes', 'IP (2012)', 'Flores da Cunha, Rio Grande do Sul, Brazil',
          'Flores da Cunha e Nova Pádua, colonizadas por italianos no fim do século XIX. Temperaturas mais amenas alongam a maturação e a colheita é mais tardia que nas áreas vizinhas: uvas com ótima acidez, muita cor e açúcar médio. Espumantes brancos e rosados (Chardonnay, Pinot Noir, Riesling Itálico, Trebbiano); moscatel (Moscato Branco, Moscato Giallo, Moscato de Alexandria, Malvasia). Tintos secos de Cabernet Franc, Merlot, Ancellotta, Cabernet Sauvignon, Pinot Noir, Refosco, Marselan e Tannat; brancos de Riesling Itálico, Malvasia de Cândia, Chardonnay, Sauvignon Blanc, Gewürztraminer e Moscato Giallo; rosados de Pinot Noir e Merlot.',
          ['Chardonnay', 'Pinot Noir', 'Riesling Italico', 'Moscato Bianco', 'Moscato Giallo', 'Merlot', 'Cabernet Franc', 'Ancellotta', 'Marselan', 'Tannat', 'Sauvignon Blanc', 'Gewürztraminer'], [], '', CAT),
        sub('Monte Belo', 'IP (2013)', 'Monte Belo do Sul, Rio Grande do Sul, Brazil',
          'Monte Belo do Sul, Bento Gonçalves e Santa Tereza: de todas as IGs do RS, a de maior potencial térmico, o que adianta a maturação e concentra açúcar. Regras próprias: espumantes com pelo menos 40% de Riesling Itálico e 30% de Pinot Noir; moscatel com 70% ou mais de uvas moscatel; tintos varietais (85%) de Merlot, Cabernet Franc, Cabernet Sauvignon ou Tannat, e cortes com 40% de Merlot (até 40% Cabernet Sauvignon, 30% Cabernet Franc e 15% de Tannat, Egiodola ou Alicante Bouschet); brancos de Riesling Itálico ou Chardonnay (85%), ou cortes com 60% Riesling Itálico e 20% Chardonnay.',
          ['Riesling Italico', 'Pinot Noir', 'Merlot', 'Cabernet Franc', 'Cabernet Sauvignon', 'Tannat', 'Chardonnay', 'Egiodola', 'Alicante Bouschet'], [], '', CAT),
        sub('Farroupilha', 'IP (2015)', 'Farroupilha, Rio Grande do Sul, Brazil',
          'Primeira IG do Brasil exclusiva de moscatéis. Farroupilha recebeu em 1875 as primeiras famílias italianas (Lombardia, Piemonte, Vêneto) e é o maior produtor de uva moscatel do país, a "Capital Nacional do Moscatel". Clima quente e temperado (média de 16,8 °C, 1.837 mm de chuva por ano) e maturação tardia. Uvas autorizadas: Moscato Branco, Malvasia de Cândia, Moscato Giallo, Moscato de Alexandria, Malvasia Bianca, Moscato Rosado e Moscato de Hamburgo. Produtos: moscatel branco, espumante, frisante e licoroso, e aguardente de vinho moscatel.',
          ['Moscato Bianco', 'Moscato Giallo', 'Muscat of Alexandria', 'Malvasia di Candia'], [], 'Espumante moscatel', CAT),
        sub('Campanha Gaúcha', 'IP (2020)', 'Santana do Livramento, Rio Grande do Sul, Brazil',
          'A região vinícola mais quente e menos chuvosa do sul do Brasil, no bioma Pampa, na fronteira com Argentina e Uruguai: invernos frios (mínimas de 0 °C) e verões quentes (até 40 °C), de pouca chuva e grande diferença de temperatura. Produção forte desde os anos 1980, consolidada nos 2000 — a californiana Almadén começou em 1974 em Palomas (Santana do Livramento). 36 castas autorizadas; brancos, rosados, tintos e espumantes naturais; "Rota das Vinhas e Vinhos". 14 municípios, entre eles Bagé, Dom Pedrito, Santana do Livramento, Candiota e Uruguaiana.',
          [], [prod('Almadén', 'projeto iniciado em 1974 em Palomas, Santana do Livramento', PT + 'Santana_do_Livramento')], 'Tintos da Campanha', CAT),
        sub('Serra do Sudeste', 'Região', 'Encruzilhada do Sul, Rio Grande do Sul, Brazil', 'Uma das regiões vinícolas do RS, ao sul da Serra Gaúcha.', [], [], '', BW),
        sub('Campos de Cima da Serra', 'IG em estruturação', 'Vacaria, Rio Grande do Sul, Brazil', 'Região vinícola de altitude do nordeste do RS; a Embrapa acompanha a estruturação de uma Indicação Geográfica.', [], [], '', EMB)
      ] },

    { name: 'Santa Catarina', geo: 'BR:Santa Catarina', sources: [CAT, BDV, VB],
      description: 'Duas Indicações Geográficas: os Vinhos de Altitude (Planalto Serrano e Meio-Oeste, a 900–1.400 m, a região vinícola mais fria do Brasil) e os Vales da Uva Goethe, no sul do estado. A Serra Catarinense é conhecida pelos vinhos de altitude e brancos de guarda.',
      climate: 'Frio de altitude; temperado oceânico (Cfb) em São Joaquim.', soils: '', altitude: '900–1.400 m (vinhos de altitude)', history: '',
      grapes: ['Goethe'], grapes_other: [], notable_wines: 'Vinhos de altitude; Goethe de Urussanga', producers: [], subregions: [
        sub('Vinhos de Altitude de Santa Catarina', 'IP (2021)', 'São Joaquim, Santa Catarina, Brazil',
          'IP concedida pelo INPI em 29/06/2021 a 29 municípios de 900 a 1.400 m, a região vinícola mais fria do país: entre eles São Joaquim (sede a 1.354 m, a cidade mais alta de SC), Urubici, Urupema, Bom Jardim da Serra, Lages, Painel, Caçador, Videira, Fraiburgo, Água Doce e Treze Tílias. Produtos: vinhos finos e nobres brancos, rosados e tintos, vinho de sobremesa, espumantes natural e moscatel e brandy.',
          [], [], 'Vinhos de altitude', BDV, 'Santa Catarina'),
        sub('Vales da Uva Goethe', 'IP (2012)', 'Urussanga, Santa Catarina, Brazil',
          'Urussanga, Pedras Grandes, Cocal do Sul, Morro da Fumaça, Treze de Maio, Orleans, Nova Veneza e Içara. Tradição dos imigrantes italianos do fim do século XIX; a uva Goethe chegou no início do século XX e se adaptou por mais de 100 anos ("Goethe Clássico" e "Goethe Primo"). Subestação Enológica em Urussanga em 1942; nos anos 1950 Urussanga foi a "Capital do Vinho". Brancos e espumantes (método tradicional ou Charmat) de Goethe, influenciados pelo Atlântico e pelas serras.',
          ['Goethe'], [], 'Brancos e espumantes de Goethe', CAT),
        sub('Vale do Rio do Peixe', 'Área', 'Videira, Santa Catarina, Brazil',
          'Meio-Oeste catarinense: Videira, grande centro vitivinícola do estado, deve o nome às videiras; a primeira Festa da Uva foi em 1942.', [], [], '', PT + 'Videira_(Santa_Catarina)')
      ] },

    { name: 'Paraná', geo: 'BR:Paraná', sources: [BIT, VB],
      description: 'A região da Grande Curitiba vem crescendo e investindo em vinhos finos. No sul do estado, Bituruna, "Capital Paranaense do Vinho", tem Indicação de Procedência para vinhos de uvas americanas.',
      climate: '', soils: '', altitude: '', history: '',
      grapes: [], grapes_other: [], notable_wines: 'Vinho de Bituruna (Bordô, Casca Dura)', producers: [], subregions: [
        sub('Bituruna', 'IP (2023)', 'Bituruna, Paraná, Brazil',
          'Indicação de Procedência para os vinhos de Bituruna feitos com as uvas americanas (Vitis labrusca) Bordô e Martha, esta conhecida como "Casca Dura".', ['Bordô'], [], 'Vinho Bordô', BIT),
        sub('Grande Curitiba', 'Área', 'Curitiba, Paraná, Brazil', 'Região metropolitana de Curitiba, em crescimento, com investimento em vinhos finos.', [], [], '', VB)
      ] },

    { name: 'São Paulo', geo: 'BR:São Paulo', sources: [VB],
      description: 'Onde chegaram as primeiras videiras do Brasil, trazidas pelos portugueses em 1532. Hoje, São Roque e Jundiaí são os polos tradicionais.',
      climate: '', soils: '', altitude: '', history: 'Primeiras videiras do Brasil plantadas pelos portugueses em São Paulo em 1532.',
      grapes: [], grapes_other: [], notable_wines: '', producers: [], subregions: [
        sub('São Roque', 'Área', 'São Roque, São Paulo, Brazil', 'A "Terra do Vinho": muitas vinícolas e o Roteiro do Vinho, com degustações; a vindima é celebrada com festas e pisa da uva.', [], [], '', PT + 'São_Roque_(São_Paulo)'),
        sub('Jundiaí', 'Área', 'Jundiaí, São Paulo, Brazil', '"Terra da uva e do morango", com cerca de 30% da uva do estado e Rota do Vinho. A Niagara Rosada surgiu ali em 1933, por mutação natural, em área hoje de Louveira.', [], [], '', PT + 'Jundiaí')
      ] },

    { name: 'Minas Gerais', geo: 'BR:Minas Gerais', sources: [SDM, VB],
      description: 'Vinhos finos no Sul de Minas, em Diamantina e na Zona da Mata. Destaques: brancas Alvarinho, Muscat Petit Grain, Vermentino e Sauvignon Blanc; tintas Cabernet Franc, Cabernet Sauvignon, Marselan, Syrah, Tannat, Tinta Roriz e Touriga Nacional. Os "vinhos de inverno" usam a dupla poda: poda em agosto e em janeiro, invertendo o ciclo para colher no inverno seco.',
      climate: 'Tropical de altitude; colheita de inverno pela dupla poda.', soils: '', altitude: '', history: '',
      grapes: ['Syrah', 'Sauvignon Blanc'], grapes_other: ['Cabernet Franc', 'Cabernet Sauvignon', 'Marselan', 'Tannat', 'Touriga Nacional', 'Alvarinho', 'Vermentino'],
      notable_wines: 'Vinhos de inverno (dupla poda)', producers: [], subregions: [
        sub('Sul de Minas', 'IP (2025)', 'Três Corações, Minas Gerais, Brazil',
          'IP para vinhos de inverno concedida em 11/02/2025: 10 municípios (São João da Mata, Cordislândia, São Gonçalo do Sapucaí, Três Corações, Três Pontas, Campos Gerais, Boa Esperança, Bom Sucesso, Ibituruna e Ijaci), 4.239,6 km². Dupla poda (agosto e janeiro): colhe-se no inverno, fugindo das chuvas. Murillo de Albuquerque Regina é chamado de "pai da dupla poda no Brasil". Tintas autorizadas: Syrah, Merlot, Cabernet Franc, Cabernet Sauvignon, Marselan, Tempranillo, Petit Verdot, Pinot Noir, Grenache; brancas: Sauvignon Blanc, Viognier, Marsanne, Chardonnay.',
          ['Syrah', 'Merlot', 'Cabernet Franc', 'Cabernet Sauvignon', 'Marselan', 'Tempranillo', 'Petit Verdot', 'Pinot Noir', 'Grenache', 'Sauvignon Blanc', 'Viognier', 'Marsanne', 'Chardonnay'],
          [prod('Barbara Eliodora', '', SDM), prod('Casa Geraldo', '', SDM), prod('Sacramentos', '', SDM)], 'Vinhos de inverno (dupla poda)', SDM),
        sub('Andradas', 'Área', 'Andradas, Minas Gerais, Brazil', 'Maior produtora de vinho de Minas Gerais e "Capital Mineira do Vinho" (2025); vitivinicultura consolidada pelos imigrantes italianos.', [], [], '', PT + 'Andradas'),
        sub('Zona da Mata', 'Área', 'Viçosa, Minas Gerais, Brazil', 'Produção iniciada em 2001 na Universidade Federal de Viçosa, com a híbrida Chambourcin. Os primeiros vinhos finos, os "Vinhos da Mata", foram da Vinícola Alto do Gavião em 2022; hoje cerca de dez vinícolas.', [],
          [prod('Vinícola Alto do Gavião', 'primeiros Vinhos da Mata (2022)', VB), prod('Vinícola Campo de Estrelas', '', VB), prod('Vinícola Raízes da Mata', '', VB)], 'Vinhos da Mata', VB),
        sub('Diamantina', 'Área', 'Diamantina, Minas Gerais, Brazil', 'Uma das regiões de vinhos finos de Minas Gerais.', [], [], '', VB)
      ] },

    { name: 'Vale do São Francisco', geo: 'BR:São Francisco', sources: [VB, VSF, BDV],
      description: 'A segunda maior região produtora do país (~15% do mercado nacional; 8 milhões de litros em 2016) e a única do Brasil em clima tropical semiárido: com calor o ano todo e irrigação com água do rio São Francisco, colhe-se uva em qualquer mês — duas vindimas por ano. Em novembro de 2022 recebeu a primeira Indicação de Procedência de vinhos tropicais do mundo.',
      climate: 'Tropical semiárido; irrigação.', soils: '', altitude: '',
      history: 'A produção no sertão começou nos anos 1960 com projetos experimentais em Petrolina (PE) e Juazeiro (BA).',
      grapes: ['Tempranillo', 'Alicante Bouschet', 'Touriga Nacional', 'Syrah', 'Cabernet Sauvignon'], grapes_other: [],
      notable_wines: 'Vinhos tropicais e espumantes', producers: [],
      subregions: [
        sub('Vale do São Francisco (IP)', 'IP (2022)', 'Lagoa Grande, Pernambuco, Brazil',
          'IP de vinhos finos e nobres tranquilos (brancos, rosados, tintos), espumante natural e espumante moscatel, publicada pelo INPI em 01/11/2022: Casa Nova e Curaçá (BA), Petrolina, Lagoa Grande e Santa Maria da Boa Vista (PE).', [], [], 'Vinhos tropicais', VSF),
        sub('Petrolina', 'Área', 'Petrolina, Pernambuco, Brazil', 'Onde começaram, nos anos 1960, os projetos experimentais de vinho no sertão; vinhos tropicais com duas colheitas por ano.', [], [], '', VB)
      ] }
  ];

  var countries = [
    { name: 'Brasil', sources: [VB, BW, EMB],
      description: 'Terceiro produtor da América do Sul (depois de Argentina e Chile): 3,1 milhões de hl em 2018, 15º do mundo. Boa parte das vinhas é de uva de mesa; os vinhos finos vêm da vinifera (só ~5.000 dos 68.000 ha em 2003), o resto de uvas americanas e híbridas, mais fáceis no clima brasileiro. A produção se concentra no Rio Grande do Sul, em locais mais frios e altos; há também Santa Catarina (altitude), Paraná, São Paulo, Minas Gerais (vinhos de inverno, dupla poda) e o Vale do São Francisco (vinhos tropicais, duas safras por ano). Indicações Geográficas de vinho: Denominações de Origem Vale dos Vinhedos (2012) e Altos de Pinto Bandeira (2022); Indicações de Procedência Vale dos Vinhedos, Pinto Bandeira, Altos Montes, Monte Belo, Farroupilha e Campanha Gaúcha (RS), Vales da Uva Goethe e Vinhos de Altitude (SC), Bituruna (PR), Vale do São Francisco (PE/BA) e Sul de Minas (MG). Primeiras videiras: portugueses, 1532, em São Paulo.' }
  ];

  return { code: 'BR', version: 2, countries: countries, regions: regions, country_of: 'Brasil' };
})());
