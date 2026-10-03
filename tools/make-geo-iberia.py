"""
Gera src/server/18_GeoSpain.js e src/server/18_GeoPortugal.js.
Espanha: contornos EXATOS (simplificados) das comunidades autônomas — as regiões do pack ES são comunidades.
Portugal: contornos APROXIMADOS das regiões vitivinícolas, pela união dos distritos onde ficam
(Madeira, Açores e Távora-Varosa ficam só com pontos).
Fonte: codeforgermany/click_that_hood (spain-communities.geojson, portugal.geojson).
Uso: python3 tools/make-geo-iberia.py <spain-communities.geojson> <portugal.geojson>
"""
import json, sys
src = open("tools/make-geo.py").read().split("sys.setrecursionlimit")[0]
ns = {}; exec(src, ns)
ring = ns["ring"]
sys.setrecursionlimit(100000)

ES = {n: [n] for n in ["Andalucia", "Aragon", "Baleares", "Canarias", "Castilla-La Mancha", "Castilla-Leon", "Cataluña",
                       "Extremadura", "Galicia", "La Rioja", "Madrid", "Murcia", "Navarra", "Pais Vasco", "Valencia"]}
PT = {
    "Minho": ["Viana do Castelo", "Braga", "Porto"], "Trás-os-Montes": ["Bragança"], "Douro": ["Vila Real"],
    "Dão": ["Viseu"], "Bairrada": ["Aveiro", "Coimbra"], "Beira Interior": ["Guarda", "Castelo Branco"],
    "Lisboa": ["Lisboa", "Leiria"], "Tejo": ["Santarém"], "Setúbal": ["Setúbal"],
    "Alentejo": ["Portalegre", "Évora", "Beja"], "Algarve": ["Faro"],
}


def build(path, mapping, prefix, approx):
    d = json.load(open(path))
    geoms = {f["properties"]["name"]: f["geometry"] for f in d["features"]}
    out = {}
    for key, names in mapping.items():
        ps = []
        for n in names:
            g = geoms[n]
            for poly in ([g["coordinates"]] if g["type"] == "Polygon" else g["coordinates"]):
                if len(poly[0]) < 8: continue
                r = ring(poly[0])
                if r and len(r) >= 4: ps.append([r])
        xs = [p[0] for poly in ps for p in poly[0]]; ys = [p[1] for poly in ps for p in poly[0]]
        v = {"bbox": [min(xs), min(ys), max(xs), max(ys)], "polygons": ps}
        if approx: v.update({"approx": True, "distritos": names})
        out[prefix + key] = v
    return out


def write(path, header, out):
    js = header + "var GEO_REGIONS = GEO_REGIONS || {};\nObject.assign(GEO_REGIONS, " + json.dumps(out, ensure_ascii=False, separators=(",", ":")) + ");\n"
    open(path, "w").write(js)
    print(path, len(js) // 1024, "KB")


write("src/server/18_GeoSpain.js", "/**\n * Contornos simplificados das comunidades autônomas espanholas (lon/lat).\n"
      " * Fonte: codeforgermany/click_that_hood (spain-communities.geojson). Gerado por tools/make-geo-iberia.py.\n */\n",
      build(sys.argv[1], ES, "ES:", False))
write("src/server/18_GeoPortugal.js", "/**\n * Contornos APROXIMADOS das regiões vitivinícolas portuguesas: união dos distritos onde cada região fica.\n"
      " * Fonte: codeforgermany/click_that_hood (portugal.geojson). Gerado por tools/make-geo-iberia.py.\n */\n",
      build(sys.argv[2], PT, "PT:", True))
