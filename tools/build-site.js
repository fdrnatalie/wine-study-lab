/**
 * Gera o site do GitHub Pages em build/site/:
 *   index.html       → o Wine Study Lab de verdade (login com Google; dados na planilha via Apps Script)
 *   jogo.html        → Degustação às Cegas, com os catálogos da planilha
 *   demo/index.html  → demonstração com dados fictícios (build/preview.html)
 *   demo/jogo.html   → jogo da demonstração
 * Configuração pública em site.config.json: apiUrl (URL /exec do Apps Script) e clientId (cliente OAuth).
 * Uso: node tools/build-preview.js && node tools/build-site.js
 */
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const src = path.join(root, 'src');
const out = path.join(root, 'build', 'site');
const cfg = JSON.parse(fs.readFileSync(path.join(root, 'site.config.json'), 'utf8'));

function include(name) { return fs.readFileSync(path.join(src, name + '.html'), 'utf8'); }
const expand = (html) => html.replace(/<\?!=\s*include\('([^']+)'\);?\s*\?>/g, (_, n) => include(n));
const config = '<script>window.WSL_CONFIG = ' + JSON.stringify({ apiUrl: cfg.apiUrl, clientId: cfg.clientId, gameUrl: 'jogo.html' }) + ';</script>';
const icon = '<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22%3E%3Cpath d=%22M9 3h14c0 7-2 12-7 13-5-1-7-6-7-13Z%22 fill=%22%236b1f2a%22/%3E%3Cpath d=%22M16 16v10M11 28h10%22 stroke=%22%236b1f2a%22 stroke-width=%222%22/%3E%3C/svg%3E">';

if (!cfg.apiUrl || !cfg.clientId) console.warn('Aviso: site.config.json sem apiUrl/clientId — o login não vai funcionar.');

// App
let app = expand(include('client/index'))
  .replace('<head>', '<head><meta name="viewport" content="width=device-width, initial-scale=1"><title>Wine Study Lab</title>' + icon + config);

// Jogo: carrega os catálogos da planilha com a sessão do app (mesmo site → mesmo localStorage).
const gameJs = include('game/app').replace(/^\s*<script>\s*/, '').replace(/<\/script>\s*$/, '');
let game = include('game/index')
  .replace(/<script>\s*window\.WSL_DATA[\s\S]*?<\/script>\s*<\?!=\s*include\('game\/app'\);?\s*\?>/, () =>
    `<script>window.WSL_ICON = ${JSON.stringify(include('game/index').match(/window\.WSL_ICON = '([^']+)'/)[1])};</script>
    <script type="text/plain" id="wsl-game-src">${gameJs}</script>
    <script>
    (function () {
      function start() { var s = document.createElement('script'); s.textContent = document.getElementById('wsl-game-src').textContent; document.body.appendChild(s); }
      var token = ''; try { token = localStorage.getItem('wsl-session') || ''; } catch (e) {}
      if (!token || !window.WSL_CONFIG.apiUrl) { start(); return; }   // sem login: listas originais do jogo
      fetch(window.WSL_CONFIG.apiUrl, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ method: 'game.data', args: {}, token: token }) })
        .then(function (r) { return r.json(); })
        .then(function (r) { if (r.ok) window.WSL_DATA = r.data; start(); })
        .catch(start);
    })();
    </script>`);
game = expand(game).replace('<head>', '<head><meta name="viewport" content="width=device-width, initial-scale=1"><title>Degustação às Cegas · FDR Wine Lab</title>' + config);

fs.mkdirSync(path.join(out, 'demo'), { recursive: true });
fs.writeFileSync(path.join(out, 'index.html'), app);
fs.writeFileSync(path.join(out, 'jogo.html'), game);
fs.copyFileSync(path.join(root, 'build', 'preview.html'), path.join(out, 'demo', 'index.html'));
fs.copyFileSync(path.join(root, 'build', 'jogo.html'), path.join(out, 'demo', 'jogo.html'));
fs.writeFileSync(path.join(out, '.nojekyll'), '');
console.log('build/site: index.html (' + Math.round(app.length / 1024) + ' KB), jogo.html, demo/');
