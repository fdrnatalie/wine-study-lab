# Mapeamento região vinícola -> unidades administrativas do Natural Earth. (iso, seletor, exato?)
def N(*names): return {"names": list(names)}
def F(field, *values): return {"field": field, "values": list(values)}

EUROPE = {
    # Hungria (condados + cidades de direito de condado)
    "HU:Tokaj": ("HU", N("Borsod-Abaúj-Zemplén", "Miskolc"), False),
    "HU:Eger": ("HU", N("Heves", "Eger", "Nógrád", "Salgótarján"), False),
    "HU:Balaton": ("HU", N("Veszprém", "Zala", "Zalaegerszeg", "Nagykanizsa", "Somogy", "Kaposvár"), False),
    "HU:Pannon": ("HU", N("Baranya", "Pécs", "Tolna", "Szekszárd"), False),
    "HU:Észak-Dunántúl": ("HU", N("Gyor-Moson-Sopron", "Gyôr", "Sopron", "Komárom-Esztergom", "Tatabánya", "Fejér", "Székesfehérvár", "Dunaújváros"), False),
    "HU:Duna": ("HU", N("Bács-Kiskun", "Kecskemét", "Csongrád", "Szeged", "Hódmezôvásárhely", "Jász-Nagykun-Szolnok", "Szolnok"), False),
    # Grécia (regiões administrativas)
    "GR:Macedônia": ("GR", N("Kentriki Makedonia", "Dytiki Makedonia"), False),
    "GR:Peloponeso": ("GR", N("Peloponnisos", "Dytiki Ellada"), False),
    "GR:Egeu": ("GR", N("Notio Aigaio", "Voreio Aigaio"), False),
    "GR:Creta": ("GR", N("Kriti"), True),
    "GR:Tessália": ("GR", N("Thessalia"), True),
    "GR:Epiro": ("GR", N("Ipeiros"), True),
    "GR:Jônicas": ("GR", N("Ionioi Nisoi"), True),
    "GR:Central": ("GR", N("Attiki", "Stereá Elláda"), False),
    # Suíça (cantões)
    "CH:Valais": ("CH", N("Valais"), True), "CH:Vaud": ("CH", N("Vaud"), True),
    "CH:Genève": ("CH", N("Genève"), True), "CH:Ticino": ("CH", N("Ticino"), True),
    "CH:Três Lagos": ("CH", N("Neuchâtel"), False),
    "CH:Deutschschweiz": ("CH", N("Zürich", "Schaffhausen", "Aargau", "Thurgau", "Sankt Gallen", "Basel-Landschaft"), False),
    # Reino Unido
    "GB:England": ("GB", F("geonunit", "England"), True), "GB:Wales": ("GB", F("geonunit", "Wales"), True),
    # Eslovênia (regiões estatísticas)
    "SI:Primorska": ("SI", F("region", "Obalno-kraška", "Goriška"), False),
    "SI:Posavje": ("SI", F("region", "Spodnjeposavska", "Jugovzhodna Slovenija"), False),
    "SI:Podravje": ("SI", F("region", "Podravska", "Pomurska"), False),
    # Croácia (condados)
    "HR:Eslavônia": ("HR", N("Osjecko-Baranjska", "Vukovarsko-Srijemska", "Brodsko-Posavska", "Viroviticko-Podravska"), False),
    "HR:Ocidental": ("HR", N("Zagrebacka", "Grad Zagreb", "Krapinsko-Zagorska", "Varaždinska", "Medimurska", "Koprivničko-Križevačka", "Bjelovarsko-bilogorska", "Sisacko-Moslavacka", "Karlovacka"), False),
    "HR:Ístria": ("HR", N("Istarska", "Primorsko-Goranska"), False),
    "HR:Dalmácia": ("HR", N("Zadarska", "Šibensko-Kninska", "Splitsko-Dalmatinska", "Dubrovacko-Neretvanska"), False),
    # Romênia (distritos)
    "RO:Moldávia": ("RO", N("Iasi", "Vaslui", "Galati", "Vrancea", "Bacau"), False),
    "RO:Muntênia": ("RO", N("Buzau", "Prahova", "Arges", "Vâlcea", "Olt", "Dolj", "Mehedinti"), False),
    "RO:Transilvânia": ("RO", N("Alba", "Mures", "Sibiu", "Bistrita-Nasaud", "Cluj"), False),
    "RO:Banat": ("RO", N("Timis", "Caras-Severin"), False),
    "RO:Crișana": ("RO", N("Arad", "Bihor", "Salaj", "Satu Mare", "Maramures"), False),
    "RO:Dobruja": ("RO", N("Constanta", "Tulcea"), False),
    "RO:Danúbio": ("RO", N("Calarasi", "Giurgiu"), False),
    # Bulgária (províncias)
    "BG:Danúbio": ("BG", N("Vidin", "Montana", "Vratsa", "Pleven", "Lovech", "Veliko Tarnovo", "Ruse"), False),
    "BG:Mar Negro": ("BG", N("Varna", "Dobrich", "Burgas", "Shumen", "Targovishte", "Razgrad", "Silistra"), False),
    "BG:Trácia": ("BG", N("Plovdiv", "Stara Zagora", "Haskovo", "Pazardzhik", "Yambol", "Sliven"), False),
    "BG:Struma": ("BG", N("Blagoevgrad", "Kyustendil"), False),
    # Moldávia (distritos)
    "MD:Codru": ("MD", N("Chişinău", "Ialoveni", "Străşeni", "Orhei", "Criuleni", "Hîncesti", "Nisporeni", "Călărași"), False),
    "MD:Ștefan Vodă": ("MD", N("Ștefan Vodă", "Causeni"), False),
    "MD:Valul lui Traian": ("MD", N("Cahul", "Cantemir", "Leova", "Cimişlia", "Comrat", "Taraclia", "Basarabeasca"), False),
    # Geórgia (regiões)
    "GE:Kakheti": ("GE", N("Kakheti"), True),
    "GE:Kartli": ("GE", N("Shida Kartli", "Kvemo Kartli", "Mtskheta-Mtianeti"), True),
    "GE:Imereti": ("GE", N("Imereti"), True),
    "GE:Racha": ("GE", N("Racha-Lechkhumi-Kvemo Svaneti"), True),
    "GE:Samegrelo": ("GE", N("Samegrelo-Zemo Svaneti"), True),
    # Armênia (províncias)
    "AM:Vayots Dzor": ("AM", N("Vayots Dzor"), True), "AM:Ararat": ("AM", N("Ararat"), True),
    "AM:Armavir": ("AM", N("Armavir"), True), "AM:Aragatsotn": ("AM", N("Aragatsotn"), True),
    "AM:Tavush": ("AM", N("Tavush"), True), "AM:Kotayk": ("AM", N("Kotayk"), True),
    # Turquia (províncias)
    "TR:Trácia": ("TR", N("Kirklareli", "Tekirdag", "Edirne", "Çanakkale"), False),
    "TR:Egeu": ("TR", N("Izmir", "Manisa", "Denizli"), False),
    "TR:Anatólia Central": ("TR", N("Nevsehir", "Ankara", "Kirsehir"), False),
    "TR:Leste": ("TR", N("Elazig", "Malatya", "Diyarbakir", "Mardin"), False),
    "TR:Outras": ("TR", N("Antalya", "Tokat"), False),
}

WORLD = {
    "US:California": ("US", N("California"), True), "US:Oregon": ("US", N("Oregon"), True),
    "US:Washington": ("US", N("Washington"), True), "US:New York": ("US", N("New York"), True),
    "AR:Mendoza": ("AR", N("Mendoza"), True), "AR:San Juan": ("AR", N("San Juan", "La Rioja"), True),
    "AR:Noroeste": ("AR", N("Salta", "Catamarca", "Jujuy"), True), "AR:Patagônia": ("AR", N("Río Negro", "Neuquén"), True),
    "CL:Central": ("CL", N("Región Metropolitana de Santiago", "Libertador General Bernardo O'Higgins", "Maule"), True),
    "CL:Aconcágua": ("CL", N("Valparaíso"), True), "CL:Coquimbo": ("CL", N("Coquimbo"), True),
    "CL:Sul": ("CL", N("Ñuble", "Bío-Bío", "La Araucanía"), True),
    "BR:Rio Grande do Sul": ("BR", N("Rio Grande do Sul"), True), "BR:Santa Catarina": ("BR", N("Santa Catarina"), True),
    "BR:São Francisco": ("BR", N("Pernambuco"), False),
    "UY:Sul": ("UY", N("Canelones", "Montevideo", "San José"), True), "UY:Sudoeste": ("UY", N("Colonia", "Soriano"), False),
    "UY:Norte": ("UY", N("Artigas", "Salto", "Rivera"), True), "UY:Sudeste": ("UY", N("Maldonado"), False),
    "CA:Ontario": ("CA", N("Ontario"), True), "CA:British Columbia": ("CA", N("British Columbia"), True),
    "CA:Quebec": ("CA", N("Québec"), True), "CA:Nova Scotia": ("CA", N("Nova Scotia"), True),
    "MX:Baja California": ("MX", N("Baja California"), True), "MX:Coahuila": ("MX", N("Coahuila", "Durango"), True),
    "MX:Centro": ("MX", N("Querétaro", "Zacatecas", "Aguascalientes"), True), "MX:Sonora": ("MX", N("Sonora"), True),
    "MX:Chihuahua": ("MX", N("Chihuahua"), True),
    "AU:South Australia": ("AU", N("South Australia"), True), "AU:New South Wales": ("AU", N("New South Wales"), True),
    "AU:Victoria": ("AU", N("Victoria"), True), "AU:Western Australia": ("AU", N("Western Australia"), True), "AU:Tasmania": ("AU", N("Tasmania"), True),
    "NZ:Marlborough": ("NZ", N("Marlborough District"), True), "NZ:Otago": ("NZ", N("Otago"), False), "NZ:Hawke's Bay": ("NZ", N("Hawke's Bay"), True),
    "NZ:Wairarapa": ("NZ", N("Wellington"), False), "NZ:Nelson": ("NZ", N("Nelson City", "Tasman District"), True),
    "NZ:Canterbury": ("NZ", N("Canterbury"), True), "NZ:Gisborne": ("NZ", N("Gisborne District"), True), "NZ:Auckland": ("NZ", N("Auckland"), True),
    "ZA:Western Cape": ("ZA", N("Western Cape"), True), "ZA:Northern Cape": ("ZA", N("Northern Cape"), True),
    "CN:Shandong": ("CN", N("Shandong"), True), "CN:Ningxia": ("CN", N("Ningxia"), True), "CN:Xinjiang": ("CN", N("Xinjiang"), True), "CN:Hebei": ("CN", N("Hebei"), True),
    "JP:Yamanashi": ("JP", N("Yamanashi"), True), "JP:Nagano": ("JP", N("Nagano"), True), "JP:Hokkaido": ("JP", N("Hokkaidō"), True), "JP:Yamagata": ("JP", N("Yamagata"), True),
    "IL:Galileia": ("IL", N("HaZafon"), False), "IL:Sharon": ("IL", N("Haifa"), False), "IL:Judeia": ("IL", N("Jerusalem"), False),
    "IL:Samson": ("IL", N("HaMerkaz"), False), "IL:Negev": ("IL", N("HaDarom"), False),
    "LB:Bekaa": ("LB", N("Beqaa"), True), "LB:Montanha": ("LB", N("Mount Lebanon", "North Lebanon"), True), "LB:Sul": ("LB", N("South Lebanon"), False),
}

GROUPS = {
    "mundo": {"label": "Américas, Oceania, África do Sul e Ásia", "file": "src/server/18_GeoWorld.js",
              "countries": ["US", "AR", "CL", "BR", "UY", "CA", "MX", "AU", "NZ", "ZA", "CN", "JP", "IL", "LB"], "regions": WORLD},
    "europa": {"label": "Europa: HU, GR, CH, GB, SI, HR, RO, BG, MD, GE, AM, TR", "file": "src/server/18_GeoEurope.js",
               "countries": ["HU", "GR", "CH", "GB", "SI", "HR", "RO", "BG", "MD", "GE", "AM", "TR"], "regions": EUROPE},
}
