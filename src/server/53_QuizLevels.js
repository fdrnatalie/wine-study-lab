/**
 * Nível de dificuldade das uvas e regiões no quiz (avaliação editorial por notoriedade mundial; ajustável):
 *   medio    = conhecido no mundo todo · avancado = menos conhecido · expert = todo o resto (quase ninguém sabe).
 * Casa por nome (ou sinônimo). O que não está nas listas é "expert". Cartões de estudo têm nível próprio nos arquivos de dados.
 */
var QuizLevels = (function () {
  var GRAPES_MEDIO = ['Cabernet Sauvignon', 'Merlot', 'Cabernet Franc', 'Pinot Noir', 'Syrah', 'Shiraz', 'Grenache', 'Garnacha', 'Malbec', 'Tempranillo',
    'Sangiovese', 'Nebbiolo', 'Primitivo', 'Zinfandel', 'Carménère', 'Mourvèdre', 'Gamay', 'Pinotage', 'Tannat', 'Touriga Nacional', 'Barbera',
    'Chardonnay', 'Sauvignon Blanc', 'Riesling', 'Chenin Blanc', 'Pinot Gris', 'Pinot Grigio', 'Gewürztraminer', 'Viognier', 'Sémillon', 'Albariño',
    'Grüner Veltliner', 'Muscat Blanc à Petits Grains', 'Moscato', 'Glera', 'Torrontés', 'Verdejo', 'Montepulciano', 'Pinot Meunier', 'Trebbiano Toscano'];
  var GRAPES_AVANCADO = ['Dolcetto', 'Aglianico', 'Nero d\'Avola', 'Corvina', 'Petit Verdot', 'Carignan', 'Vermentino', 'Garganega', 'Fiano', 'Greco', 'Falanghina',
    'Negroamaro', 'Lambrusco', 'Friulano', 'Verdicchio', 'Nerello Mascalese', 'Sagrantino', 'Lagrein', 'Teroldego', 'Arneis', 'Cortese', 'Grillo', 'Pecorino',
    'Schiava', 'Grignolino', 'Ribolla Gialla', 'Pinot Blanc', 'Savagnin', 'Cinsaut', 'Petite Sirah', 'Aligoté', 'Melon de Bourgogne', 'Müller-Thurgau',
    'Muscat of Alexandria', 'Trousseau', 'Marselan', 'Rondinella', 'Corvinone', 'Blaufränkisch', 'Chasselas', 'Sylvaner', 'Macabeo', 'Arinto', 'Alicante Bouschet',
    'Malvasia', 'Zweigelt', 'Fernão Pires', 'Castelão', 'Roussanne', 'Trincadeira', 'Furmint', 'Verdelho', 'Marsanne', 'Godello', 'Mencía', 'Bonarda',
    'Blauer Portugieser', 'Dornfelder', 'Hárslevelű', 'Rkatsiteli', 'Palomino', 'Roditis', 'Pedro Ximénez', 'Saperavi', 'Canaiolo', 'Kerner', 'Loureiro',
    'Petit Manseng', 'Gros Manseng', 'Sercial', 'Treixadura', 'Xarel·lo', 'Parellada', 'Poulsard', 'Jacquère', 'Xinomavro', 'Rossese', 'Nero di Troia',
    'Catarratto', 'Graciano', 'Mavrodaphne', 'Kadarka', 'Gamza', 'Mavrud', 'Bobal', 'Agiorgitiko', 'Moschofilero', 'Assyrtiko', 'Savatiano', 'Picolit', 'Albana',
    'Vernaccia', 'Cesanese', 'Piedirosso', 'Koshu', 'Baga', 'Fetească Neagră', 'Fetească Albă', 'Kalecik Karası', 'Öküzgözü', 'Boğazkere', 'Narince',
    'St. Laurent', 'Scheurebe', 'Bacchus', 'Touriga Franca', 'Colombard', 'Folle Blanche', 'Mauzac', 'Négrette', 'Erbaluce', 'Timorasso', 'Ruché', 'Ciliegiolo',
    'Gaglioppo', 'Inzolia', 'Vidal', 'Concord', 'Isabella', 'Brachetto', 'Tinta Barroca', 'Tinto Cão', 'Vinhão', 'Encruzado', 'Alfrocheiro', 'Bical',
    'Aleatico', 'Moscato Giallo', 'Malagousia', 'Vidiano', 'Gouveio', 'Mtsvane', 'Tinta Negra', 'Listán Prieto', 'Mondeuse Noire', 'Albillo Mayor',
    'Trebbiano di Soave', 'Garnacha Blanca', 'Clairette', 'Seyval Blanc', 'Regent'];
  var REGIONS_MEDIO = ['Bordeaux', 'Borgonha', 'Champagne', 'Vale do Rhône', 'Vale do Loire', 'Alsácia', 'Provença', 'Beaujolais', 'Toscana', 'Piemonte', 'Vêneto', 'Sicília',
    'Rioja', 'Castela e Leão', 'Catalunha', 'Andaluzia', 'Douro e Porto', 'Alentejo', 'Mosel', 'Rheingau', 'Mendoza', 'Vale Central (Valle Central)', 'Califórnia',
    'Austrália do Sul', 'Marlborough', 'Cabo Ocidental (Western Cape)'];
  var REGIONS_AVANCADO = ['Languedoc-Roussillon', 'Sudoeste', 'Jura', 'Savoia', 'Córsega', 'Navarra', 'Galícia', 'País Basco', 'Aragão', 'Castela-La Mancha', 'Rheinhessen',
    'Pfalz (Palatinado)', 'Nahe', 'Franken (Francônia)', 'Baden', 'Württemberg', 'Baixa Áustria (Niederösterreich)', 'Burgenland', 'Viena (Wien)', 'Estíria (Steiermark)',
    'Vinho Verde (Minho)', 'Dão', 'Bairrada', 'Lisboa', 'Madeira', 'Tejo', 'Península de Setúbal', 'Trás-os-Montes', 'Puglia', 'Campânia', 'Lombardia', 'Friuli-Venezia Giulia',
    'Trentino-Alto Adige', 'Úmbria', 'Marche', 'Abruzzo', 'Emília-Romanha', 'Basilicata', 'Sardenha', 'Lácio', 'Valle d\'Aosta', 'Ligúria', 'San Juan e La Rioja', 'Patagônia',
    'Aconcágua', 'Rio Grande do Sul', 'Nova Gales do Sul', 'Vitória', 'Austrália Ocidental', 'Tasmânia', 'Oregon', 'Washington', 'Nova York', 'Central Otago', 'Hawke\'s Bay',
    'Tokaj', 'Ilhas do Egeu', 'Peloponeso', 'Kakheti', 'Vale do Bekaa', 'Ontário', 'Colúmbia Britânica', 'Zona Sul', 'Valais', 'Yamanashi', 'Ilhas Canárias', 'Comunidade Valenciana',
    'Cabo Setentrional (Northern Cape)', 'Macedônia', 'Creta', 'Baixa Áustria', 'Eger (Felső-Magyarország)', 'Santa Catarina'];

  var maps_ = null;
  function maps() {
    if (maps_) return maps_;
    function m(medio, avanc) {
      var o = {};
      avanc.forEach(function (n) { o[Util.normKey(n)] = 'avancado'; });
      medio.forEach(function (n) { o[Util.normKey(n)] = 'medio'; });
      return o;
    }
    maps_ = { grapes: m(GRAPES_MEDIO, GRAPES_AVANCADO), regions: m(REGIONS_MEDIO, REGIONS_AVANCADO) };
    return maps_;
  }

  function lookup_(map, names) {
    var best = '';
    names.forEach(function (n) {
      var lv = map[Util.normKey(String(n || '').replace(/\(.*\)/, ''))] || map[Util.normKey(n || '')];
      if (lv === 'medio') best = 'medio';
      else if (lv && !best) best = lv;
    });
    return best || 'expert';
  }
  function grape(g) { return lookup_(maps().grapes, [g.name].concat(g.synonyms || [])); }
  function region(r) { return lookup_(maps().regions, [r.name]); }

  return { grape: grape, region: region };
})();
