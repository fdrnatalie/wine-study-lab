"""
Gera src/server/18_GeoItaly.js: contornos simplificados das 20 regiões italianas.
Fonte: openpolis/geojson-italy (limites ISTAT), licença CC BY 4.0.
Uso: python3 tools/make-geo.py <limits_IT_regions.geojson>
"""
import json, sys, math

TOL = 0.012          # graus (~1 km): suficiente para o contorno no mapa
MIN_RING_PTS = 8     # descarta ilhotas minúsculas

NAME_FIX = {"Valle d'Aosta/Vallée d'Aoste": "Valle d'Aosta", "Trentino-Alto Adige/Südtirol": "Trentino-Alto Adige"}


def rdp(pts, eps):
    if len(pts) < 3:
        return pts
    (x1, y1), (x2, y2) = pts[0], pts[-1]
    dx, dy = x2 - x1, y2 - y1
    norm = math.hypot(dx, dy) or 1e-12
    dmax, idx = 0, 0
    for i in range(1, len(pts) - 1):
        x0, y0 = pts[i]
        d = abs(dy * x0 - dx * y0 + x2 * y1 - y2 * x1) / norm
        if d > dmax:
            dmax, idx = d, i
    if dmax > eps:
        return rdp(pts[: idx + 1], eps)[:-1] + rdp(pts[idx:], eps)
    return [pts[0], pts[-1]]


def ring(r):
    # Anel fechado: divide no ponto mais distante do início e simplifica cada metade.
    x0, y0 = r[0]
    far = max(range(len(r)), key=lambda i: (r[i][0] - x0) ** 2 + (r[i][1] - y0) ** 2)
    s = rdp(r[: far + 1], TOL)[:-1] + rdp(r[far:], TOL)
    if len(s) < 4:
        return None
    return [[round(x, 3), round(y, 3)] for x, y in s]


def polys(geom):
    if geom["type"] == "Polygon":
        return [geom["coordinates"]]
    return geom["coordinates"]


sys.setrecursionlimit(100000)
d = json.load(open(sys.argv[1]))
out = {}
for f in d["features"]:
    name = NAME_FIX.get(f["properties"]["reg_name"], f["properties"]["reg_name"])
    ps = []
    for poly in polys(f["geometry"]):
        outer = poly[0]
        if len(outer) < MIN_RING_PTS:
            continue
        r = ring(outer)
        if r and len(r) >= 4:
            ps.append([r])
    xs = [p[0] for poly in ps for p in poly[0]]
    ys = [p[1] for poly in ps for p in poly[0]]
    out[name] = {"bbox": [min(xs), min(ys), max(xs), max(ys)], "polygons": ps}

js = ("/**\n * Contornos simplificados das regiões italianas (lon/lat), para o mapa das regiões.\n"
      " * Fonte: openpolis/geojson-italy — limites ISTAT, licença CC BY 4.0.\n"
      " * Gerado por tools/make-geo.py (simplificação Douglas-Peucker, tolerância ~1 km). Não editar à mão.\n */\n"
      "var GEO_REGIONS = GEO_REGIONS || {};\nObject.assign(GEO_REGIONS, " + json.dumps(out, ensure_ascii=False, separators=(",", ":")) + ");\n")
open("src/server/18_GeoItaly.js", "w").write(js)
print(len(js) // 1024, "KB;", sum(len(p[0]) for v in out.values() for p in v["polygons"]), "pontos")
