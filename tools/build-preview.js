/**
 * Gera build/preview.html: a interface real + o servidor real rodando no navegador
 * sobre uma planilha simulada (tools/fixture.js). Uso: node tools/build-preview.js
 */
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const src = path.join(root, 'src');

function include(name) { return fs.readFileSync(path.join(src, name + '.html'), 'utf8'); }

let html = include('client/index').replace(/<\?!=\s*include\('([^']+)'\);?\s*\?>/g, (_, n) => include(n));

const serverFiles = fs.readdirSync(path.join(src, 'server')).filter((f) => f.endsWith('.js') && !/^00_Local/.test(f)).sort();
const server = serverFiles.map((f) => `// ---- ${f}\n` + fs.readFileSync(path.join(src, 'server', f), 'utf8')).join('\n');
const boot = `
<script>${fs.readFileSync(path.join(__dirname, 'gas-mock.js'), 'utf8')}</script>
<script>${fs.readFileSync(path.join(__dirname, 'fixture.js'), 'utf8')}</script>
<script>${server}
__loadSourceSheets(__FIXTURE);
console.log(setup());
</script>`;
html = html.replace('<body>', '<body>' + boot).replace('<head>', '<head><meta name="viewport" content="width=device-width, initial-scale=1">');
fs.mkdirSync(path.join(root, 'build'), { recursive: true });
fs.writeFileSync(path.join(root, 'build', 'preview.html'), html);
console.log('build/preview.html (' + Math.round(html.length / 1024) + ' KB)');
