# Wine Study Lab 🍷

Laboratório pessoal de estudo de vinhos: enciclopédia de uvas, adega de garrafinhas numeradas
e degustações às cegas corrigidas automaticamente, sobre Google Apps Script + Google Sheets.

- **Arquitetura, diagnóstico da planilha e modelo de dados:** [docs/ARQUITETURA.md](docs/ARQUITETURA.md)
- **Instalar e publicar:** [docs/INSTALACAO.md](docs/INSTALACAO.md)
- **Atualizar, backup, estender:** [docs/MANUTENCAO.md](docs/MANUTENCAO.md)

**Demonstração online:** https://fdrnatalie.github.io/wine-study-lab/ — a interface real rodando no navegador
sobre uma planilha simulada (dados fictícios; nada é salvo). O app de verdade roda no Apps Script, ligado à
planilha da dona. Para instalar o seu, copie `src/server/00_Local.example.js` para `00_Local.js` e
`.clasp.example.json` para `.clasp.json` (veja docs/INSTALACAO.md).

**Jogo "Degustação às Cegas" (FDR Wine Lab):** integrado em `src/game/` (origem: github.com/fdrnatalie/fdr-wine-lab).
Abre em outra aba pelo menu (`?page=jogo`), com o visual próprio, mas usando países, regiões, sub-regiões, uvas e
perfis da planilha; o gabarito pode ser preenchido com um vinho do cadastro. Dados da planilha servidos por
`src/server/36_GameData.js` (campos "IA · não verificado" ficam de fora). Demo: https://fdrnatalie.github.io/wine-study-lab/jogo.html

Regra de ouro do projeto: **nenhum dado é inventado.** Todo valor tem origem registrada
(você, rótulo, pesquisa com fonte, planilha, IA revisada ou não verificada), e só fontes
confiáveis viram gabarito de degustação.

```bash
node tests/run.js
```
