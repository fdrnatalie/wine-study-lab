# Wine Study Lab — Diagnóstico da planilha e arquitetura

> Documento vivo. Versão 0.2 — 2026-09-25 (decisões D1, D3 e D9 confirmadas).

---

## 1. Diagnóstico da planilha de origem

Planilha: `<ID_DA_PLANILHA>` ("Planilha sem título").
Leitura feita somente em modo leitura: **nada foi alterado**.

### 1.1 Aba `VINHOS` (135 linhas × 18 colunas úteis)

| Col | Cabeçalho           | Conteúdo real                                   |
|-----|---------------------|-------------------------------------------------|
| A   | *(vazio)*           | **Número da garrafinha** (1 a 135)              |
| B   | ROTULO              | Nome do vinho                                   |
| C   | PRODUTOR            | Produtor                                        |
| D   | PAIS                | País                                            |
| E   | REGIÃO              | Região                                          |
| F   | BLEND               | Uva(s)                                          |
| G   | *(vazio)*           | **Safra** (inferido pelos valores)              |
| H   | *(vazio)*           | **Teor alcoólico** (inferido pelos valores)     |
| I   | PREÇO               | Preço em USD                                    |
| J–R | ANALISE VISUAL … AMARGOR | Descrições sensoriais                      |

**Descoberta principal: cada linha é uma garrafinha, não um rótulo.**
A aba já é, na prática, o inventário de garrafinhas:

| Garrafinhas | Qtd | Vinho                     | Produtor          | Região   | Uva          | Safra | Álc.  |
|-------------|-----|---------------------------|-------------------|----------|--------------|-------|-------|
| 1           | 1   | "DÓURO" (incompleto)      | —                 | —        | —            | —     | —     |
| 2           | 1   | *(vazia)*                 |                   |          |              |       |       |
| 3–18        | 16  | Barbera d'Asti            | Conti Buneis      | Piemonte | Barbera      | 2024  | 13,5  |
| 19–38       | 20  | Dolcetto d'Alba           | Livio Pavese      | Piemonte | Dolcetto     | 2025  | 13    |
| 39–58       | 20  | Barolo                    | Morello           | Piemonte | Nebbiolo     | 2022  | 14    |
| 59–78       | 20  | Montepulciano d'Abruzzo   | Duca di Saragnano | Abruzzo  | Montepulciano| 2024  | 13,5  |
| 79–98       | 20  | Primitivo di Manduria     | Rocca             | Puglia   | Primitivo    | 2024  | 14,5  |
| 99–135      | 37  | *(sem vinho)*             |                   |          |              |       |       |

→ **5 vinhos, 96 garrafinhas válidas.**

### 1.2 Problemas de qualidade encontrados em `VINHOS`

1. **As colunas sensoriais (J–R) parecem ter sido geradas por IA, linha a linha.**
   Evidências:
   - garrafinhas do *mesmo* vinho têm descrições diferentes: no Dolcetto, a acidez
     aparece como "Alta", "Média" **e** "Baixa"; a análise visual tem 8 versões;
   - as linhas 99–135 não têm vinho, mas têm descrições sensoriais completas
     (inventadas), misturadas com mensagens como *"I do not have enough information…"*;
   - a coluna PREÇO do Dolcetto tem 5 preços diferentes e mensagens de erro da IA.
2. Colunas G e H estão sem cabeçalho.
3. Linha 1 ("DÓURO") está incompleta.

**Consequência:** esses dados **não podem ser usados como gabarito** das degustações.
Se a acidez "correta" de uma garrafinha foi sorteada por uma IA, seu placar
estaria medindo a IA, não você.

### 1.3 Aba `UVAS` (10 linhas × 6 colunas)

Cabeçalhos: `UVAS`, `POSSUI OUTRO NOME?`, `REGIÕES ENCONTRADA`, `DESCRIÇÃO`,
`COM QUAL UVA SE PARECE?`, `COMO PODE SER RECONHECIDA?`

- Só **3 uvas com nome**: Dolceto (sic), Barbera, Nebbiolo.
- As colunas B–F também parecem geradas por IA (texto longo, padrão de resposta de IA).
- As linhas 5–11 **não têm nome de uva**, mas têm conteúdo gerado (ex.: "parece com
  Merlot", "parece com Pinot Noir") ou mensagens de erro da IA → dados sem valor.
- Faltam Montepulciano e Primitivo, que estão nos vinhos.

### 1.4 Aba `NOTAS` (5 linhas × 1 coluna)

Uma única nota: *"1. Descobrindo o Corpo pelo Teor Alcoólico"*, com a regra
leve ≤ 12,5% / médio 12,5–13,5% / encorpado > 13,5%. Texto livre, sem data nem vínculo.

### 1.5 Resumo do que pode ser aproveitado

| Dado                                    | Aproveitar? | Como                                                   |
|-----------------------------------------|-------------|--------------------------------------------------------|
| Rótulo, produtor, país, região, uva, safra, álcool | ✅ Sim | Fatos do rótulo → `source = planilha`                 |
| Número da garrafinha                    | ✅ Sim      | Vira `Bottles.number`                                  |
| Preço                                   | ⚠️ Parcial  | Só valores numéricos; conflitantes marcados para revisão |
| Colunas sensoriais (J–R)                | ⚠️ Não como gabarito | Importadas como `source = ia_nao_verificada`, apenas como referência de estudo |
| Linhas 99–135                           | ❌ Não      | Ignoradas (não apagadas)                               |
| UVAS: 3 uvas nomeadas                   | ⚠️ Parcial  | Nome + sinônimos/regiões como `ia_nao_verificada`      |
| UVAS: linhas sem nome                   | ❌ Não      | Ignoradas                                              |
| NOTAS                                   | ✅ Sim      | Vira 1 nota no Caderno                                 |

---

## 2. Proveniência dos dados (regra central)

Todo valor de conhecimento carrega uma origem. Campo `source` em cada registro
(ou `<campo>_source` quando for preciso por campo):

| `source`             | Significado                                               | Pode ser gabarito? |
|----------------------|-----------------------------------------------------------|--------------------|
| `usuario`            | Informado por você no sistema                             | ✅                  |
| `rotulo`             | Lido do rótulo/ficha técnica do produtor                  | ✅                  |
| `pesquisado`         | Fonte externa citada (campo `source_ref` obrigatório)     | ✅                  |
| `planilha`           | Importado da planilha (fatos do rótulo)                   | ✅                  |
| `ia`                 | Gerado por IA dentro do sistema, aguardando sua revisão (`source_ref` = modelo + data) | ❌ |
| `ia_revisada`        | Gerado por IA e aprovado por você                         | ✅                  |
| `ia_nao_verificada`  | Gerado por IA fora do sistema (colunas antigas da planilha) | ❌ até você validar |
| `sistema`            | Vocabulário padrão (lista de aromas, escalas)             | —                  |

Na interface: um selo discreto ao lado de cada dado, e "Informação não cadastrada"
quando vazio.

---

## 3. Decisões de arquitetura

### D1. Onde ficam os dados do sistema — ✅ decidido
Na **mesma planilha**, em abas com prefixo `db_` (ex.: `db_wines`). As abas originais
(`VINHOS`, `UVAS`, `NOTAS`) **nunca são escritas** pelo sistema: são lidas pela
sincronização. Todo acesso ao Sheets passa por `Repository`, então mover as abas `db_`
para outra planilha (ou outro banco) no futuro é uma mudança em um único arquivo.

### D2. Garrafinha ≠ vinho
`WINES` = o rótulo (1 registro por vinho). `BOTTLES` = cada garrafinha (N por vinho),
ligadas por `wine_id`. `BOTTLING_BATCHES` registra o fracionamento
(data, volume original, qtd).

### D3. Numeração das garrafinhas — ✅ decidido
As 96 garrafinhas atuais mantêm a numeração sequencial. Nos **próximos fracionamentos**
o sistema sorteia os números a partir dos números livres e mostra a lista para
etiquetar. O inventário tem um "modo discreto" (padrão ligado) que esconde o conteúdo
das garrafinhas.

### D4. Gabarito das degustações = "perfil de referência" verificado
Cada vinho tem um **perfil de referência** (acidez, tanino, corpo, aromas…) com
`source`. Na correção:
- **Identidade** (uva, país, região, safra, álcool, produtor): sempre corrigível —
  vem do rótulo.
- **Estrutura e aromas**: corrigidos **somente** se o perfil de referência do vinho
  tiver `source` ≠ `ia_nao_verificada`. Caso contrário, o item aparece como
  "sem gabarito" e **não entra na nota** (peso redistribuído).

Como o perfil de referência é preenchido: ficha técnica do produtor, fonte citada,
ou sua avaliação consolidada depois da revelação (ex.: a média das suas
degustações abertas).

### D5. Escalas ordinais configuráveis
Todas as escalas (acidez, tanino, corpo…) ficam em `SCALES`: rótulo + posição
numérica. Ex.: acidez = baixa(1), média-(2), média(3), média+(4), alta(5).
Regra de "PRÓXIMO" configurável em `SETTINGS`: distância ≤ 1 = próximo.
Os valores antigos ("Média-baixa", "Média-alta") são mapeados por uma tabela de sinônimos.

### D6. Pesos da pontuação em `SCORING_RULES`
Cada critério: peso, tipo de comparação (`exact`, `ordinal`, `set_overlap`,
`numeric_tolerance`, `hierarchical`) e parâmetros. Ex.: safra com tolerância ±1 ano =
próximo; região errada mas país certo = próximo (`hierarchical`).
Cada degustação guarda **uma cópia dos pesos usados**, para que mudar a configuração
não reescreva o histórico.

### D7. Segurança
Web App publicado com **Executar como: eu** e **Acesso: somente eu**. Só a sua conta
Google abre o app. Mesmo assim, todo endpoint do servidor valida
`Session.getActiveUser().getEmail()` contra o e-mail do dono em `Script Properties`
e valida/limpa as entradas.

### D8. Performance
- Leitura: `getValues()` de uma aba inteira por vez → objetos em memória.
- Cache: `CacheService` (chunks de 90 KB) para tabelas de conhecimento, invalidado a
  cada escrita.
- Front-end: um único `bootstrap()` no carregamento traz o necessário para o
  dashboard; o resto é carregado sob demanda por página.
- Escrita: `LockService` + `setValues()` em lote.
- O gabarito de uma degustação em andamento **nunca é enviado ao navegador** antes da
  revelação (evita "espiar" pelo DevTools).

### D9. IA como fonte de dados — ✅ decidido (provedor a definir)
A IA será usada para: pesquisar dados de rótulos, montar a enciclopédia de uvas e
propor combinações de garrafinhas para estudo. Regras:

- Camada isolada `90_Enrichment` com interface de provedor (`AiProvider.complete(prompt, schema)`);
  trocar de provedor não afeta o resto do sistema. A chave da API fica em
  *Script Properties*, nunca no código nem na planilha.
- **Nada gerado por IA vai direto para as tabelas.** As respostas entram em
  `db_enrichment_queue` como *propostas*, com o campo, o valor proposto, o valor atual e
  a justificativa/fonte citada pela IA. Você aprova, edita ou descarta cada uma;
  aprovado vira `source = ia_revisada`.
- A IA recebe instrução para devolver vazio quando não souber, e respostas no formato
  "não tenho informação" são descartadas automaticamente (o problema visto na planilha).
- Para montar degustações, a IA recebe o inventário com o conteúdo das garrafinhas,
  mas a interface continua mostrando apenas os números.
- Os campos por registro `field_sources` (JSON) permitem saber a origem de cada campo
  individualmente.

### D10. Foto do rótulo no cadastro de vinho — ✅ implementado
Fluxo em duas camadas, a primeira grátis:

1. **Leitura grátis (OCR do Google Drive)** — `35_Label.js`. O navegador reduz a foto
   (lado maior 1600 px, JPEG) e envia ao servidor; a foto vira um Google Doc temporário com OCR
   (serviço avançado Drive v3), o texto é exportado e o arquivo é **apagado na hora**. A foto não
   fica guardada em lugar nenhum. Escopo novo: `drive.file` — o app só enxerga arquivos que ele
   mesmo cria, nunca o resto do seu Drive. (Exige reautorizar o app uma vez.)
2. **Cruzamento com a enciclopédia** — `34_LabelParse.js` (função pura, testada em `tests/run.js`).
   Casamento EXATO (palavras inteiras, sem acento) de produtores, regiões/sub-regiões, países
   (inclusive "Italia", "France"…) e uvas/sinônimos; safra (ignora "desde 1890"; se houver vários
   anos sem "safra/vintage/annata…", pede para escolher), teor alcoólico, classificação (DOCG, DOCa,
   Gran Reserva, Grand Cru…), cor/tipo só por palavras do rótulo ("vino rosso", "brut"), e dados de
   contrarrótulo (açúcar residual, acidez, estágio, temperatura de serviço) copiados literalmente.
   Cada sugestão mostra o trecho que a justifica. O nome do vinho não é adivinhado: você toca na
   linha lida que é o nome.
3. **IA opcional** — `Enrichment.label()`: Claude recebe a foto + o texto do OCR, lê o rótulo e busca
   a ficha técnica na web. Nada é gravado direto: as sugestões aparecem para revisão e, aplicadas,
   ficam com origem `ia_nao_verificada` (e o link da fonte em `field_refs`). Custo registrado em `db_ai_calls`.

Origem por campo ao salvar (`wines.save` → `origins`): `rotulo` (lido), `pesquisado` (deduzido da
enciclopédia, ex.: região de uma sub-região), `ia_nao_verificada`. Se você editar o campo depois,
ele vira `usuario`. Campos e uvas `ia_nao_verificada` **não entram no gabarito** das degustações
(`Tastings.truthFor_`) até serem revisados.

### D11. Vários usuários + site no GitHub ligado ao Apps Script — ✅ implementado (v5)
**Por quê:** com contas Gmail pessoais, um Web App que executa como a dona não recebe o e-mail de quem
acessa; executar como cada usuário exigiria compartilhar a planilha inteira. Solução: o site (GitHub Pages)
é só a interface; o Apps Script vira uma API JSON (`doPost`), e o login é feito com o Google no navegador.

```
GitHub Pages (index.html, jogo.html)  ──POST text/plain {method,args,token}──▶  Apps Script doPost (executa como a dona)
   botão "Fazer login com o Google"                                              │ Auth: confere o ID token no Google (tokeninfo,
   → auth.login(credential) → token de sessão (localStorage)                     │ aud = nosso cliente OAuth), cria sessão (hash SHA-256)
                                                                                 ▼
                                                                         Planilha (privada)
```
- **Cadastro aberto** (qualquer conta Google com e-mail verificado entra como `membro`); a dona é `admin`.
  Proteções: limite de 120 chamadas/min por usuário, 30 leituras de rótulo/hora, teto de linhas por conta,
  teto global de logins/min, e bloqueio de usuário (derruba as sessões). Tela **Usuários** (admin).
- **Escopo por tabela** (`SCOPES` em 00_Config.js, aplicado no Repository via `Policy`, 03_Context.js):
  `personal` (garrafinhas, degustações, notas, caderno, `wine_notes`) — cada um só vê/altera o que é seu, mesmo com id forjado;
  `catalog` (vinhos e o que pertence a eles) — todos leem e criam; só o autor (`created_by`) ou a admin editam;
  `admin` (enciclopédia, configurações, IA) — todos leem, só a admin altera; `system` (usuários, sessões).
  Membros escolhem país/região/uva da enciclopédia (não criam novos).
- **IA** só para a admin (a chave é dela). OCR do rótulo (grátis) para todos.
- **Migração v5** (`04_Migrations.js`): dados pessoais existentes → usuária admin; `my_notes` → `wine_notes`.
- **Testes:** `node tests/multiuser.js` (isolamento, permissões, bloqueio, logout) sobre o servidor real com a planilha simulada.
- **Crescimento:** planilha + cotas do Apps Script (todas contam na conta da dona) servem bem para dezenas de usuários.
  Para centenas, trocar o Repository por um banco (Firestore/Supabase); a interface fala só com `API.call`.
- **Publicação:** `node tools/build-preview.js && node tools/build-site.js` → `build/site/` (app na raiz, demonstração em `/demo`).
  `site.config.json` guarda `apiUrl` (URL /exec) e `clientId` (públicos). No Apps Script: `configurarLogin(clientId, siteUrl)`;
  manifesto com acesso `ANYONE_ANONYMOUS` (a API exige sessão em toda chamada que não seja login).
  **Até a virada para o site**, o manifesto fica em `MYSELF`: o app do Apps Script funciona só para a dona (admin), com os dados já migrados para a v5.

---

### D12. Cartões de estudo (material de aula) — ✅ implementado (v7)

- **O quê:** tópicos curtos (nunca parágrafos) que complementam as páginas de país e região e formam as seções
  Estudar → História do vinho, Produção de vinho e Harmonizações. Servem também para consultar na hora de gravar vídeos.
- **Tabela `db_study_cards`** (`00_Config.js`: `study_cards`): `topic` (pais | regiao | historia | producao | harmonizacao),
  `country_id`/`region_id` (ligação com o que já existe, sub-região incluída), `group`, `title`, `kind`
  (fatos | lista | linha | numeros | denominacoes | produtores), `items` (JSON `[{k, v, tag}]`), `sort`, `status`.
  Itens estruturados (e não texto corrido) permitem filtrar, comparar e gerar quiz.
- **Dados:** `src/server/23_SeedStudy*.js` (`STUDY_PACKS`, um pacote por assunto/país, com versão), empacotados em
  `src/seed/study.html` e importados por `SeedStudy.ensure` (idempotente: casa por pacote+chave, não mexe no que foi editado
  — origem diferente de "aula" —, remove o que saiu do arquivo). O conteúdo é público (decisão da dona): vai no repositório.
- **Origem:** `source = 'aula'` ("material de aula"), considerada confiável; não se guarda qual aula/slide.
- **Erros do material:** o slide pode errar. O que foi conferido em fonte aberta é corrigido e marcado `corrigido`; o que não
  deu para confirmar fica `conferir`. Itens `conferir`/`corrigido` e cartões `status = revisar` ficam fora do quiz.
- **Quiz:** `Quiz.generate({cards})` monta perguntas dos cartões (fato, denominação, época, número); no modo aleatório ~35%
  vêm dos cartões; páginas de seção e de país têm o botão "Quiz".
- **API:** `study.topic`, `study.counts`; `regions.country` e `regions.get` já trazem `cards`. Leitura para todos os usuários;
  escrita só pela administradora (política `admin`).

## 4. Modelo de dados (abas `db_*`)

Definido em `src/server/00_Config.js` (objeto `SCHEMA`). Toda aba tem as colunas comuns
`id`, `source`, `source_ref`, `field_sources` (JSON: origem por campo), `created_at`, `updated_at`.
IDs têm prefixo + carimbo de tempo + aleatório (ex.: `WIN_1K3DKS9A…`). **Nenhum nome é chave.**
Listas N:N ficam em abas de ligação, nunca em células separadas por vírgula.

### Conhecimento
| Aba | Função |
|---|---|
| `db_countries` | Países (a lista base de nomes vem do sistema; clima/história só com fonte) |
| `db_regions` | Regiões e sub-regiões na mesma aba (`parent_id` vazio = região; preenchido = sub-região) |
| `db_appellations` | Denominações (DOC, DOCG, AOC…) |
| `db_producers` | Produtores |
| `db_grapes` | Uvas: identidade, características, textos de estudo |
| `db_profiles` | Perfil sensorial em escalas. `entity_type = grape` → perfil típico (aceita faixa `media..alta`); `wine` → **gabarito** |
| `db_grape_relationships` | `parent_of`, `confused_with`, `synonym_of` + "como diferenciar" + fonte (base da genealogia, Fase 2) |
| `db_aromas` | Vocabulário controlado: aroma → categoria → subcategoria |
| `db_entity_aromas` | Aromas ligados a uva/vinho, com origem |
| `db_wines` | O rótulo |
| `db_wine_grapes` | Uvas do vinho + % |

### Adega
| Aba | Função |
|---|---|
| `db_bottling_batches` | Um fracionamento: vinho, data, volume original, volume por garrafinha, quantidade, tipo de numeração |
| `db_bottles` | Cada garrafinha: número, vinho, fracionamento, status (`disponivel`, `reservada`, `utilizada`, `descartada`) |

### Degustação
| Aba | Função |
|---|---|
| `db_tastings` | Sessão: título, dificuldade, filtros, status, nota, **cópia dos pesos usados** |
| `db_tasting_samples` | Garrafinha na sessão, posição, nota da garrafinha |
| `db_tasting_answers` | Uma linha por critério respondido |
| `db_tasting_results` | Uma linha por critério corrigido (estado, pontos) com uva/país/região desnormalizados — base de "Minha Evolução" |

### Estudo e sistema
| Aba | Função |
|---|---|
| `db_notes`, `db_note_links` | Caderno e vínculos com vinho/uva/região/país/degustação |
| `db_settings` | Chave/valor (crédito de "próximo", limites de álcool, última sincronização) |
| `db_scales` | Níveis de cada escala + sinônimos aceitos na importação |
| `db_scoring_rules` | Critérios, pesos, tipo de comparação, parâmetros |
| `db_enrichment_queue` | Propostas vindas de IA aguardando sua revisão (D9 — criada já, usada na próxima etapa) |
| `db_import_log` | Relatório de cada sincronização |

### Relacionamentos
```
db_countries 1─N db_regions (parent_id → sub-regiões)
db_wines N─1 producers / countries / regions / appellations · N─N grapes (db_wine_grapes)
db_wines 1─1 db_profiles (gabarito) · N─N aromas (db_entity_aromas)
db_grapes 1─1 db_profiles (perfil típico) · N─N grapes (db_grape_relationships)
db_wines 1─N db_bottling_batches 1─N db_bottles
db_tastings 1─N db_tasting_samples N─1 db_bottles
db_tasting_samples 1─N db_tasting_answers / db_tasting_results
db_notes N─N qualquer entidade (db_note_links)
```

---

## 5. Importação / sincronização (`20_ImportParse.js`, `21_Import.js`)

1. Lê cada aba original com **uma** chamada (`getValues`).
2. Localiza colunas pelo cabeçalho (aliases, sem acento/maiúsculas). Colunas sem cabeçalho
   são identificadas pelo conteúdo: A = número da garrafinha, G = safra (anos), H = teor alcoólico.
3. Agrupa linhas em vinhos pela chave `rótulo + produtor + safra` (gravada em `import_key`).
4. Ignora (sem apagar) linhas sem rótulo, linhas sem produtor **e** sem uva (ex.: "DÓURO") e
   textos de erro de IA ("I do not have enough information…", "Não tenho informações suficientes…").
5. Preço: só grava se todas as garrafinhas concordam; senão registra o conflito para revisão.
6. Colunas sensoriais: grava a **moda** entre as garrafinhas em `db_profiles` com origem
   `ia_nao_verificada` (não vira gabarito) e registra divergências.
7. Uvas: casa por nome, sinônimo ou nome parecido ("Dolceto" ↔ "Dolcetto"), com aviso no log.
8. Atualiza apenas campos cuja origem ainda é `planilha`/`ia_nao_verificada`. O que você editou fica.
9. Garrafinha: um número só é "ocupado" enquanto a garrafinha está disponível/reservada.
10. Grava `last_sync_at` e o relatório em `db_import_log`.

---

## 6. Estrutura do código

```
src/
├─ appsscript.json          manifesto (Web App: executar como você, acesso só você)
├─ server/                  (vira server/*.gs no Apps Script)
│  ├─ 00_Config.js          CONFIG + SCHEMA de todas as abas
│  ├─ 01_Util.js            funções puras (ids, normalização, números, detecção de erro de IA)
│  ├─ 02_Auth.js            dono do sistema
│  ├─ 10_Repository.js      ÚNICA camada que toca o Sheets (leitura/escrita em lote)
│  ├─ 11_Cache.js           CacheService em partes de 90 KB
│  ├─ 12_Schema.js          cria/evolui abas sem apagar nada
│  ├─ 13_Seeds.js           escalas, pesos, vocabulário de aromas, nomes de países
│  ├─ 14_Settings.js        configurações + ScaleUtil (puro)
│  ├─ 20_ImportParse.js     interpretação das abas originais (puro, testado)
│  ├─ 21_Import.js          sincronização
│  ├─ 30_Catalog.js         validação, resolução de nomes, aromas, perfis
│  ├─ 31_Wines.js  32_Grapes.js  40_Bottles.js
│  ├─ 50_Tastings.js        criar, jogar, revelar, relatório
│  ├─ 51_Scoring.js         motor de correção (puro, testado)
│  ├─ 60_Stats.js  70_Notes.js  80_Search.js
│  └─ 99_Api.js             doGet, api() (lista fechada de métodos), setup(), migrate(), menu
└─ client/                  (vira client/*.html)
   ├─ index.html            casca + menu
   ├─ styles.html           sistema visual (claro/escuro + modo degustação)
   ├─ core.html             API, Store, Router, UI
   ├─ components.html       garrafa, escalas, selos de origem, seletor de aromas…
   └─ pages_*.html          main (dashboard, busca, config), study, cellar, tasting
tests/run.js                testes das partes puras (node tests/run.js)
tools/                      ambiente local: servidor real no navegador sobre planilha simulada
```

Regras que mantêm o sistema crescendo bem:
- `Scoring`, `ImportParse`, `Util`, `ScaleUtil` não acessam serviços do Google → testáveis em Node.
- O navegador só chama `api(método, args)`; cada método está listado em `API_METHODS`.
- O gabarito nunca sai do servidor antes da revelação (`Tastings.getPlay` só devolve números).

---

## 7. Fase 1 — o que foi entregue

- Instalação (`setup`), schema evolutivo (`migrate`), sincronização com relatório.
- Dashboard com números calculados, melhor/pior categoria, evolução, últimas degustações.
- Vinhos: lista com busca e filtros, ficha completa com origem de cada dado, cadastro/edição,
  perfil de referência (gabarito) com escalas e aromas.
- Uvas: enciclopédia com "Informação não cadastrada", campos de IA sinalizados e revisáveis,
  perfil típico com faixas, desempenho pessoal por uva.
- Adega: inventário visual, modo discreto, status em lote, fracionamento com numeração sorteada.
- Degustação às cegas: sorteio com filtros e dificuldade, modo jogo em 6 etapas com salvamento
  automático, confirmação antes de revelar, correção em 3 estados, relatório e comparação.
- Caderno com vínculos, busca global, configurações de pesos/regras.

## 8. Fase 2 — andamento

**Entregue**
- Enriquecimento por IA (`90_AiProvider.js`, `91_Enrichment.js`): Claude Opus 5 com busca na web;
  resultado estruturado via ferramenta `registrar_dados` (strict). Tarefas: pesquisar uva, pesquisar
  vinho (ficha técnica), catalogar uvas novas a partir de um pedido. Cada proposta leva URL e título
  da fonte e indica se a URL apareceu nas buscas daquela pesquisa ("✓ fonte consultada") ou não.
- Fila de revisão (tela **Revisão da IA**): aprovar, editar texto, descartar, em lote por entidade.
  Aprovado → origem `ia_revisada` + link em `field_refs`. Perfil aprovado de um vinho vira gabarito.
- Custo: cada chamada registrada em `db_ai_calls` (tokens, buscas, custo estimado).
- Comparar uvas (2–4) com diferenças calculadas dos perfis e "como diferenciar".
- "Pode ser confundida com" com tabela comparativa na ficha da uva.
- Genealogia interativa (avós → pais → uva → descendentes), só com relações cadastradas e suas fontes.
- Migração automática de schema na primeira chamada após um `clasp push`.

**Enciclopédia de uvas (seed pesquisado)** — `15_SeedGrapes.js` + `16_SeedImport.js`
- 40 uvas principais (25 tintas, 15 brancas), pesquisadas em 26/09/2026 na Wikipedia (origem, DNA,
  sinônimos, regiões, viticultura, descrição) e na Wine Folly (perfil de degustação padronizado).
- 43 relações de parentesco por DNA e 14 pares "pode ser confundida", cada um com o artigo-fonte.
- Origem `pesquisado`, link da fonte por campo (`field_refs`). Importação automática e idempotente
  por versão; nunca sobrescreve dados de origem `usuario` ou `ia_revisada`.
- A pesquisa por IA dentro do app ficou opcional (oculta enquanto não houver chave configurada).

**Enciclopédia v2 + Regiões (26/09/2026)**
- Uvas v2 (`15_SeedGrapes.js`): +24 italianas, uvas secundárias completadas; correções de genealogia
  (Melon de Bourgogne ← Pinot Blanc; pais da Sangiovese disputados → removidos). `removed_relations`
  apaga relações antigas de origem `pesquisado` que versões novas corrigem.
- Regiões (`17_SeedRegions.js` + `33_Regions.js`): Itália — 20 regiões, 106 sub-regiões/denominações,
  castas (`db_region_grapes`), produtores citados nas fontes (`db_producers.notable_labels`).
  Contornos ISTAT/openpolis simplificados (`18_GeoItaly.js`, gerado por `tools/make-geo.py`) e pontos
  OpenStreetMap Nominatim (`19_GeoPlaces.js`, `tools/geocode.py`). Mapas com Leaflet (cdnjs) + tiles OSM.
- Telas: Estudar → Regiões (países → país com mapa → região com mapa, sub-regiões, produtores, rótulos);
  ficha da uva mostra "Onde é cultivada".

**Regiões da França + packs por país (27/09/2026)**
- `REGION_PACKS`: cada país é um pack (`17_SeedRegionsIT.js`, `17_SeedRegionsFR.js`) com `code` e `version`
  próprios; `SeedRegions.ensure()` importa cada pack uma vez por versão (propriedade `REGION_PACK_<code>_VERSION`).
- França: 13 regiões vinícolas, 76 sub-regiões/AOCs, 93 produtores citados nas fontes.
- Contornos da França são APROXIMADOS pela união dos departamentos (`18_GeoFrance.js`, `tools/make-geo-fr.py`,
  fonte IGN/Etalab via gregoiredavid/france-geojson); o mapa avisa isso. Pontos das AOCs: Nominatim.
- Schema v4: `db_region_producers` liga produtor ↔ região com o rótulo daquele lugar
  (um produtor pode estar em várias sub-regiões). Pack IT v2 só recria esses vínculos.

**Espanha e Portugal (28/09/2026)**
- Espanha (`17_SeedRegionsES.js`): 15 comunidades autônomas como regiões, 51 DOs/subzonas, 52 produtores citados.
  Contornos EXATOS das comunidades (`18_GeoSpain.js`). A DOCa Rioja fica sob a comunidade La Rioja.
- Portugal (`17_SeedRegionsPT.js`): 14 regiões vitivinícolas, 57 DOCs/sub-regiões/IPRs, 31 produtores.
  Contornos APROXIMADOS por distritos (`18_GeoPortugal.js`); Madeira, Açores e Távora-Varosa sem polígono:
  no mapa do país aparecem como ponto (média das sub-regiões). Ambos gerados por `tools/make-geo-iberia.py`
  (fonte codeforgermany/click_that_hood).
- O mapa do país enquadra o "continente": ilhas distantes (Canárias, Madeira, Açores) ficam fora do zoom inicial.
- Vínculo de castas dos packs agora só por nome ou sinônimo EXATO; a busca aproximada (Levenshtein ≤ 1) juntava
  uvas diferentes (Sercial × Cercial, Tintilla × Tintilia). Nomes unificados nos packs: Macabeo (Viura),
  Loureiro (Loureira), Doña Blanca (Dona Branca), Tinta Negra (Negramoll), Sercial (Esgana Cão).

**Alemanha, Áustria e resto da Europa (28/09/2026)**
- Packs DE (13 Anbaugebiete, contornos aproximados por Kreise — GADM, `tools/make-geo-dach.py`), AT (4 estados, exatos),
  HU, GR, CH, GB (sob o país "Inglaterra" da planilha), SI, HR, RO, BG, MD, GE, AM e TR.
- Mapas desses 12 países: Natural Earth admin-1 (domínio público) via `tools/make-geo-ne.py <geojson> europa`, com o
  mapeamento região → unidades em `tools/geo_ne_maps.py` (servirá também para as Américas). `approx` quando a região
  não coincide com as unidades; `multi` quando coincide mas é união de várias (desenhada sem divisas internas).
- `tools/check-geo.js [CÓDIGO]` confere se os pontos caem no contorno da região.
- Aliases de uvas em `SeedRegions` (Welschriesling → Riesling Italico, Silvaner → Sylvaner, Sousón → Sousão).
- Importação com orçamento de tempo: `SeedRegions.ensure(maxMs)` (20 s por chamada do app; 4 min no setup) e
  `seed.regions` em etapas (`remaining`), para não estourar o limite de 6 min do Apps Script com muitos packs novos.

**Américas, Oceania, África do Sul e Ásia (03/10/2026)**
- Packs US, AR, CL, BR, UY, CA, MX, AU, NZ, ZA, CN, JP, IL, LB: todos os 32 países da planilha agora têm regiões.
- Mapas em `18_GeoWorld.js` (`tools/make-geo-ne.py <geojson> mundo`).

**Brasil v2 (06/10/2026)**
- 6 regiões (RS, SC, PR, SP, MG, Vale do São Francisco) e 23 sub-regiões, com as Indicações Geográficas e suas regras
  (uvas autorizadas, métodos, estágio mínimo). Fontes: catálogo MAPA/Embrapa "Vinhos brasileiros com Indicação Geográfica",
  Embrapa Uva e Vinho, Brasil de Vinhos, notícias das concessões do INPI e Wikipedia (pt).
- `renamed_from` numa sub-região do pack renomeia o registro antigo (se ainda for "pesquisado") em vez de duplicar.

**Próximo**: Minha Evolução (gráficos por uva/região/país/critério/mês, "o que mais erro"),
Treinar (quiz, adivinhe a uva/região, revisão), Wine World (mapa com Leaflet + OpenStreetMap).
