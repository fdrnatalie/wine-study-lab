"""
Gera src/server/18_GeoFrance.js: contorno APROXIMADO de cada região vinícola francesa,
formado pelos departamentos onde ela fica (as regiões vinícolas não seguem limites administrativos).
Fonte: gregoiredavid/france-geojson (departements-version-simplifiee), dados IGN/Etalab (Licence Ouverte).
Uso: python3 tools/make-geo-fr.py <departements-version-simplifiee.geojson>
"""
import json, sys, importlib.util
spec = importlib.util.spec_from_file_location("mg", "tools/make-geo.py")
src = open("tools/make-geo.py").read().split("sys.setrecursionlimit")[0]
ns = {}; exec(src, ns)
ring = ns["ring"]
REGIONS = {
    "FR:Bordeaux": ["33"], "FR:Borgonha": ["89", "21", "71"], "FR:Beaujolais": ["69"],
    "FR:Champagne": ["51", "10", "02"], "FR:Alsácia": ["67", "68"],
    "FR:Vale do Loire": ["44", "49", "37", "41", "18", "58", "36"],
    "FR:Vale do Rhône": ["42", "07", "26", "84", "30"], "FR:Languedoc-Roussillon": ["30", "34", "11", "66"],
    "FR:Provença": ["83", "13", "06"], "FR:Sudoeste": ["24", "46", "47", "81", "82", "32", "64", "65", "31", "12"],
    "FR:Jura": ["39"], "FR:Savoia": ["73", "74"], "FR:Córsega": ["2A", "2B"],
}
sys.setrecursionlimit(100000)
d = json.load(open(sys.argv[1]))
deps = {f["properties"]["code"]: f["geometry"] for f in d["features"]}
out = {}
for name, codes in REGIONS.items():
    ps = []
    for c in codes:
        g = deps[c]
        polys = [g["coordinates"]] if g["type"] == "Polygon" else g["coordinates"]
        for poly in polys:
            r = ring(poly[0])
            if r and len(r) >= 4: ps.append([r])
    xs = [p[0] for poly in ps for p in poly[0]]; ys = [p[1] for poly in ps for p in poly[0]]
    out[name] = {"bbox": [min(xs), min(ys), max(xs), max(ys)], "polygons": ps, "approx": True, "departements": codes}
js = ("/**\n * Contornos APROXIMADOS das regiões vinícolas francesas: união dos departamentos onde cada região fica.\n"
      " * Fonte: gregoiredavid/france-geojson (IGN/Etalab, Licence Ouverte). Gerado por tools/make-geo-fr.py.\n */\n"
      "var GEO_REGIONS = GEO_REGIONS || {};\nObject.assign(GEO_REGIONS, " + json.dumps(out, ensure_ascii=False, separators=(",", ":")) + ");\n")
open("src/server/18_GeoFrance.js", "w").write(js)
print(len(js) // 1024, "KB")
