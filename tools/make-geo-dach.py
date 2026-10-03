"""
Gera src/server/18_GeoGermany.js e src/server/18_GeoAustria.js.
Alemanha: contornos APROXIMADOS das 13 regiões vinícolas pela união dos distritos (Kreise) onde ficam.
  Fonte: isellsoap/deutschlandGeoJSON (4_kreise, dados GADM; divisão anterior às reformas de 2007–2011).
Áustria: contornos EXATOS dos estados (as regiões vinícolas austríacas são os estados).
  Fonte: codeforgermany/click_that_hood (austria-states.geojson).
Uso: python3 tools/make-geo-dach.py <de-kreise.geojson> <austria-states.geojson>
"""
import json, sys
src = open("tools/make-geo.py").read().split("sys.setrecursionlimit")[0]
ns = {}; exec(src, ns)
ring = ns["ring"]
sys.setrecursionlimit(100000)
RP, BW, BY, HE = "Rheinland-Pfalz", "Baden-Württemberg", "Bayern", "Hessen"
DE = {
    "Ahr": [("Ahrweiler", RP)],
    "Mosel": [("Cochem-Zell", RP), ("Bernkastel-Wittlich", RP), ("Trier-Saarburg", RP), ("Trier Städte", RP)],
    "Mittelrhein": [("Rhein-Hunsrück", RP), ("Rhein-Lahn", RP), ("Koblenz Coblenz Städte", RP)],
    "Nahe": [("Bad Kreuznach", RP)],
    "Rheinhessen": [("Mainz-Bingen", RP), ("Alzey-Worms", RP), ("Mainz Städte", RP), ("Worms Städte", RP)],
    "Pfalz": [("Bad Dürkheim", RP), ("Neustadt Städte", RP), ("Südliche Weinstraße", RP), ("Landau Städte", RP)],
    "Rheingau": [("Rheingau-Taunus-Kreis", HE)],
    "Hessische Bergstraße": [("Bergstraße", HE), ("Darmstadt-Dieburg", HE)],
    "Franken": [("Miltenberg", BY), ("Main-Spessart", BY), ("Würzburg", BY), ("Würzburg Städte", BY), ("Kitzingen", BY), ("Neustadt-Bad Windsheim", BY)],
    "Baden": [("Main-Tauber", BW), ("Rhein-Neckar-Kreis", BW), ("Heidelberg Städte", BW), ("Karlsruhe", BW), ("Rastatt", BW), ("Baden-Baden Städte", BW),
              ("Ortenaukreis", BW), ("Emmendingen", BW), ("Freiburg", BW), ("Breisgau-Hochschwarzwald", BW), ("Lörrach", BW), ("Konstanz", BW), ("Bodensee", BW)],
    "Württemberg": [("Heilbronn", BW), ("Heilbronn city Städte", BW), ("Ludwigsburg", BW), ("Rems-Murr-Kreis", BW), ("Stuttgart Städte", BW), ("Esslingen", BW)],
    "Saale-Unstrut": [("Burgenlandkreis", "Sachsen-Anhalt")],
    "Sachsen": [("Meißen", "Sachsen"), ("Dresden Städte", "Sachsen")],
}
AT = {n: [n] for n in ["Niederösterreich", "Burgenland", "Wien", "Steiermark"]}


def polys_of(geoms, keys):
    ps = []
    for key in keys:
        g = geoms[key]
        for poly in ([g["coordinates"]] if g["type"] == "Polygon" else g["coordinates"]):
            if len(poly[0]) < 8: continue
            r = ring(poly[0])
            if r and len(r) >= 4: ps.append([r])
    return ps


def entry(ps, extra):
    xs = [p[0] for poly in ps for p in poly[0]]; ys = [p[1] for poly in ps for p in poly[0]]
    v = {"bbox": [min(xs), min(ys), max(xs), max(ys)], "polygons": ps}; v.update(extra); return v


def write(path, header, out):
    js = header + "var GEO_REGIONS = GEO_REGIONS || {};\nObject.assign(GEO_REGIONS, " + json.dumps(out, ensure_ascii=False, separators=(",", ":")) + ");\n"
    open(path, "w").write(js); print(path, len(js) // 1024, "KB")


d = json.load(open(sys.argv[1]))
geoms = {(f["properties"]["NAME_3"], f["properties"]["NAME_1"]): f["geometry"] for f in d["features"]}
write("src/server/18_GeoGermany.js", "/**\n * Contornos APROXIMADOS das regiões vinícolas alemãs: união dos distritos (Kreise) onde cada região fica.\n"
      " * Fonte: isellsoap/deutschlandGeoJSON (GADM). Gerado por tools/make-geo-dach.py.\n */\n",
      {"DE:" + k: entry(polys_of(geoms, v), {"approx": True, "distritos": [n for n, _ in v]}) for k, v in DE.items()})
a = json.load(open(sys.argv[2]))
ag = {f["properties"]["name"]: f["geometry"] for f in a["features"]}
write("src/server/18_GeoAustria.js", "/**\n * Contornos simplificados dos estados austríacos vinícolas (lon/lat).\n"
      " * Fonte: codeforgermany/click_that_hood (austria-states.geojson). Gerado por tools/make-geo-dach.py.\n */\n",
      {"AT:" + k: entry(polys_of(ag, v), {}) for k, v in AT.items()})
