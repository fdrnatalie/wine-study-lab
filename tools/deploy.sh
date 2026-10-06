#!/bin/sh
# Publica tudo: dados empacotados → testes → Apps Script (API) → site (GitHub Pages).
# Uso: sh tools/deploy.sh "descrição da versão" [caminho do checkout do branch gh-pages]
set -e
cd "$(dirname "$0")/.."
DESC="${1:-atualização}"
PAGES="$2"
node tools/build-seeds.js
node tests/run.js | tail -1
node tests/multiuser.js | tail -1
clasp push --force | tail -1
DEP=$(clasp list-deployments | grep -o 'AKfycb[A-Za-z0-9_-]*' | grep -v "$(clasp list-deployments | grep '@HEAD' | grep -o 'AKfycb[A-Za-z0-9_-]*')" | head -1)
clasp update-deployment "$DEP" -d "$DESC" | tail -1
node tools/build-preview.js
node tools/build-site.js
if [ -n "$PAGES" ]; then
  cp -R build/site/. "$PAGES"/
  (cd "$PAGES" && git add -A && git commit -qm "Site: $DESC" && git push -q origin gh-pages) || true
fi
