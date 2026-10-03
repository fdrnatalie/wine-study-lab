# Manutenção: atualizar, fazer backup, estender

## Atualizar o código

1. Edite os arquivos em `src/` e rode os testes:
   ```bash
   node tests/run.js
   ```
2. Envie:
   ```bash
   clasp push
   ```
3. Se você mudou o `SCHEMA` (nova aba ou coluna), rode **`migrate`** no editor. Ele só acrescenta.
4. Para a URL publicada passar a usar o código novo: **Implantar → Gerenciar implantações → ✏️ →
   Versão: Nova versão → Implantar**. A URL continua a mesma.
   Para testar antes, use **Implantar → Testar implantações** (URL `/dev`, sempre com o código mais recente).

## Testar localmente, sem Google

```bash
node tools/build-preview.js
```
```bash
python3 -m http.server 8765 --directory build
```
Abra <http://localhost:8765/preview.html>. O servidor real roda no navegador sobre uma planilha
simulada (`tools/fixture.js`); os dados somem ao recarregar.

## Backup

- **Planilha inteira + código**: Arquivo → Fazer uma cópia (a cópia leva o script vinculado).
- **Só os dados**: Arquivo → Fazer download → Microsoft Excel (.xlsx).
- **Desfazer um erro**: Arquivo → Histórico de versões.
- **Código**: mantenha esta pasta num repositório git.

Sugestão: uma cópia mensal numa pasta "Backups Wine Study Lab" no Drive.

## Onde mexer para…

| Quero… | Onde |
|---|---|
| Mudar pesos, crédito de "próximo", limites de álcool | Tela **Configurações** |
| Mudar níveis/sinônimos de uma escala | Aba `db_scales` |
| Acrescentar aromas ao vocabulário | Aba `db_aromas` (nome, `name_key` em minúsculas sem acento, categoria, subcategoria) |
| Nova coluna numa entidade | `SCHEMA` em `00_Config.js` → `clasp push` → `migrate` |
| Nova entidade | Nova entrada em `SCHEMA` + serviço `NN_Nome.js` + métodos em `API_METHODS` |
| Nova tela | Novo `Pages.nome` num `client/pages_*.html`, rota em `Router.routes` (`core.html`), item em `Nav.groups` |
| Nova regra de correção | Novo `case` em `Scoring.compare_` (`51_Scoring.js`) + teste em `tests/run.js` + linha em `db_scoring_rules` |
| Trocar o Google Sheets por outro banco | Reimplementar `10_Repository.js` (mesmas funções: `all`, `get`, `where`, `insert`, `update`, `remove`, `withLock`) |

## Limites do Apps Script a ter em mente

- Cada chamada tem até 6 minutos; leituras são feitas em lote e cacheadas, então o uso normal fica em
  frações de segundo a poucos segundos.
- O `CacheService` guarda até ~100 KB por chave; tabelas maiores são divididas em partes, e tabelas
  gigantes são lidas direto da planilha.
- Quando o histórico passar de dezenas de milhares de linhas de resultados, vale arquivar anos antigos
  numa planilha separada — `Repository` é o único lugar a ajustar.
