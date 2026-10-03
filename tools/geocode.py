"""
Gera src/server/19_GeoPlaces.js: coordenadas (lat, lon) de cada sub-região da enciclopédia.
Fonte: OpenStreetMap Nominatim (dados © colaboradores do OpenStreetMap, ODbL).
Uso: python3 tools/geocode.py   (respeita 1 consulta/segundo; reaproveita resultados anteriores)
"""
import json, subprocess, time, urllib.parse, urllib.request, os, re
places = json.loads(subprocess.check_output(["node", "-e", """
const fs=require('fs'),vm=require('vm');const c=vm.createContext({});
for (const f of fs.readdirSync('src/server').filter(f=>/^17_SeedRegions/.test(f))) vm.runInContext(fs.readFileSync('src/server/'+f,'utf8'),c);
const P=vm.runInContext('REGION_PACKS',c);
console.log(JSON.stringify([...new Set(P.flatMap(E=>E.regions.flatMap(r=>r.subregions.map(s=>s.place))))]));"""]))
out = {}
path = "src/server/19_GeoPlaces.js"
if os.path.exists(path):
    m = re.search(r"var GEO_PLACES = (\{.*\});", open(path).read(), re.S)
    if m: out = json.loads(m.group(1))
for p in places:
    if p in out: continue
    url = "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" + urllib.parse.quote(p)
    req = urllib.request.Request(url, headers={"User-Agent": "WineStudyLab/1.0 (personal study app)"})
    r = json.load(urllib.request.urlopen(req))
    time.sleep(1.2)
    if r:
        out[p] = [round(float(r[0]["lat"]), 4), round(float(r[0]["lon"]), 4)]
    else:
        print("NÃO ENCONTRADO:", p)
out = {p: out[p] for p in places if p in out}  # descarta lugares que saíram dos packs
open(path, "w").write("/**\n * Coordenadas das sub-regiões (lat, lon) para o mapa.\n * Fonte: OpenStreetMap Nominatim — dados © colaboradores do OpenStreetMap (ODbL).\n"
  " * Gerado por tools/geocode.py. Não editar à mão.\n */\nvar GEO_PLACES = " + json.dumps(out, ensure_ascii=False, indent=0) + ";\n")
print(len(out), "de", len(places), "lugares")
