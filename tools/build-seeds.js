/**
 * Empacota os dados grandes que só são usados de vez em quando, para o Apps Script não ter que
 * carregar ~1,4 MB de código a cada chamada (isso deixava o app lento):
 *
 *   src/server/15_SeedGrapes.js, 17_SeedRegions*.js, 19_GeoPlaces.js  →  src/seed/grapes.html, src/seed/regions.html
 *       (texto JS lido e executado só quando há importação: SeedData.load)
 *   src/server/18_Geo*.js  →  build/geo.js (contornos dos mapas, servidos como arquivo estático pelo site)
 *   versões e listas pequenas  →  src/server/14_SeedManifest.js (sempre carregado)
 *
 * Os arquivos-fonte continuam em src/server (editáveis, usados pelos testes e pela prévia), mas ficam
 * fora do envio ao Apps Script (.claspignore). Uso: node tools/build-seeds.js (tools/deploy.sh já chama).
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.join(__dirname, '..');
const server = path.join(root, 'src', 'server');
const files = fs.readdirSync(server).sort();
const pick = (re) => files.filter((f) => re.test(f));
const read = (f) => fs.readFileSync(path.join(server, f), 'utf8');

const grapeFiles = pick(/^15_SeedGrapes\.js$/);
const packFiles = pick(/^17_SeedRegions.*\.js$/).concat(pick(/^19_GeoPlaces\.js$/));
const geoFiles = pick(/^18_Geo.*\.js$/);

const join = (list) => list.map((f) => '// ---- ' + f + '\n' + read(f)).join('\n;\n');
const grapesJs = join(grapeFiles), regionsJs = join(packFiles), geoJs = join(geoFiles);

// Manifesto: avalia os dados para extrair versões (assim não fica nada para atualizar à mão).
const ctx = vm.createContext({});
vm.runInContext(grapesJs + '\n' + regionsJs + '\n' + geoJs, ctx);
const E = vm.runInContext('GRAPE_ENCYCLOPEDIA', ctx);
const P = vm.runInContext('REGION_PACKS', ctx);
const G = vm.runInContext('GEO_REGIONS', ctx);
const manifest = {
  grapes: { version: E.version, count: E.grapes.length },
  packs: P.map((p) => ({ code: p.code, version: p.version, country: p.country_of, regions: p.regions.length })),
  geo_keys: Object.keys(G).sort()
};

fs.mkdirSync(path.join(root, 'src', 'seed'), { recursive: true });
fs.writeFileSync(path.join(root, 'src', 'seed', 'grapes.html'), grapesJs);
fs.writeFileSync(path.join(root, 'src', 'seed', 'regions.html'), regionsJs);
fs.mkdirSync(path.join(root, 'build'), { recursive: true });
fs.writeFileSync(path.join(root, 'build', 'geo.js'), geoJs);
fs.writeFileSync(path.join(server, '14_SeedManifest.js'),
  '/** Gerado por tools/build-seeds.js — não editar. Versões dos dados empacotados em src/seed/. */\n' +
  'var SEED_MANIFEST = ' + JSON.stringify(manifest) + ';\n');
const kb = (s) => Math.round(Buffer.byteLength(s) / 1024) + ' KB';
console.log('seed/grapes.html ' + kb(grapesJs) + ' · seed/regions.html ' + kb(regionsJs) + ' · build/geo.js ' + kb(geoJs) +
  ' · manifesto: uvas v' + E.version + ', ' + P.length + ' packs, ' + manifest.geo_keys.length + ' contornos');
