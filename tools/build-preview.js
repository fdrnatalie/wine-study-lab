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
// Faixa fixa: deixa claro que o site público é uma demonstração (o app real é privado e lê a sua planilha).
const demoBar = '<div style="position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#2A1724;color:#f7efe6;font:500 12px/1.4 system-ui,sans-serif;text-align:center;padding:6px 12px">' +
  'Demonstração com dados fictícios — nada é salvo. O app de verdade é privado e usa a planilha da dona.</div><style>body{padding-bottom:34px}</style>';
html = html.replace('<body>', '<body>' + boot + demoBar).replace('<head>', '<head><meta name="viewport" content="width=device-width, initial-scale=1">');
fs.mkdirSync(path.join(root, 'build'), { recursive: true });
fs.writeFileSync(path.join(root, 'build', 'preview.html'), html);
console.log('build/preview.html (' + Math.round(html.length / 1024) + ' KB)');

// Jogo "Degustação às Cegas" (abre em outra aba): mesmo servidor simulado, catálogos da planilha de exemplo.
let game = include('game/index').replace(/<\?!=\s*include\('([^']+)'\);?\s*\?>/g, (_, n) => include(n))
  .replace('<?!= gameData ?>', 'GameData.build()');
game = game.replace('<body>', '<body>' + boot + demoBar).replace('<head>', '<head><meta name="viewport" content="width=device-width, initial-scale=1"><title>Degustação às Cegas · FDR Wine Lab</title>');
fs.writeFileSync(path.join(root, 'build', 'jogo.html'), game);
console.log('build/jogo.html (' + Math.round(game.length / 1024) + ' KB)');
