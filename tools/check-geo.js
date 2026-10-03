// Confere se cada sub-região (GEO_PLACES) cai perto do contorno da região (bbox ± 0,3°). Uso: node tools/check-geo.js [CÓDIGO]
const fs = require('fs'), vm = require('vm'); const c = vm.createContext({});
for (const f of fs.readdirSync('src/server').filter(f => /^1[789]_/.test(f))) vm.runInContext(fs.readFileSync('src/server/' + f, 'utf8'), c);
const P = vm.runInContext('REGION_PACKS', c), G = vm.runInContext('GEO_REGIONS', c), L = vm.runInContext('GEO_PLACES', c);
const only = process.argv[2];
P.filter(E => !only || E.code === only).forEach(E => E.regions.forEach(r => {
  const g = G[r.geo];
  r.subregions.forEach(s => {
    const p = L[s.place];
    if (!p) return console.log(E.code, r.name, '|', s.name, 'SEM PONTO');
    if (!g) return console.log(E.code, r.name, '|', s.name, '(região sem polígono)', p.join(','));
    const [x0, y0, x1, y1] = g.bbox;
    if (!(p[1] >= x0 - 0.3 && p[1] <= x1 + 0.3 && p[0] >= y0 - 0.3 && p[0] <= y1 + 0.3)) console.log(E.code, r.name, '|', s.name, s.place, p.join(','), 'FORA');
  });
}));
