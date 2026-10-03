"""
Gera arquivos 18_Geo*.js a partir do Natural Earth (ne_10m_admin_1_states_provinces, domínio público):
cada região vinícola = união das unidades de 1º nível (províncias, condados, cantões…) onde fica.
exact=True quando a região coincide com as unidades (ex.: cantões suíços, províncias armênias); senão o contorno é
marcado como aproximado. Uso: python3 tools/make-geo-ne.py <ne_10m_admin_1_states_provinces.geojson> <GRUPO>
Grupos e mapeamentos em tools/geo_ne_maps.py.
"""
import json, sys
src = open("tools/make-geo.py").read().split("sys.setrecursionlimit")[0]
ns = {}; exec(src, ns)
ring = ns["ring"]
sys.setrecursionlimit(100000)
maps = {}; exec(open("tools/geo_ne_maps.py").read(), maps)
group = sys.argv[2]
G = maps["GROUPS"][group]

d = json.load(open(sys.argv[1]))
feats = [f for f in d["features"] if f["properties"]["iso_a2"] in G["countries"]]


def match(f, iso, sel):
    p = f["properties"]
    if p["iso_a2"] != iso: return False
    if "names" in sel: return p["name"] in sel["names"]
    if "field" in sel: return p.get(sel["field"]) in sel["values"]
    return False


out = {}
for key, (iso, sel, exact) in G["regions"].items():
    ps, used = [], []
    for f in feats:
        if not match(f, iso, sel): continue
        used.append(f["properties"]["name"])
        g = f["geometry"]
        for poly in ([g["coordinates"]] if g["type"] == "Polygon" else g["coordinates"]):
            if len(poly[0]) < 8: continue
            r = ring(poly[0])
            if r and len(r) >= 4: ps.append([r])
    want = sel.get("names")
    if want:
        missing = sorted(set(want) - set(used))
        if missing: print("FALTAM em", key, missing)
    if not ps: print("SEM POLÍGONO:", key); continue
    xs = [p[0] for poly in ps for p in poly[0]]; ys = [p[1] for poly in ps for p in poly[0]]
    v = {"bbox": [min(xs), min(ys), max(xs), max(ys)], "polygons": ps}
    if not exact: v.update({"approx": True})
    elif len(set(used)) > 1: v.update({"multi": True})  # exata, mas feita de várias unidades: desenhar sem divisas internas
    out[key] = v
js = ("/**\n * Contornos das regiões vinícolas (" + G["label"] + "), pela união das unidades administrativas de 1º nível.\n"
      " * Fonte: Natural Earth (domínio público). Gerado por tools/make-geo-ne.py " + group + ". Não editar à mão.\n */\n"
      "var GEO_REGIONS = GEO_REGIONS || {};\nObject.assign(GEO_REGIONS, " + json.dumps(out, ensure_ascii=False, separators=(",", ":")) + ");\n")
open(G["file"], "w").write(js)
print(G["file"], len(js) // 1024, "KB,", len(out), "regiões")
