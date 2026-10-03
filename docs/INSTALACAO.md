# Instalação e publicação

O script fica **vinculado à sua planilha** (Extensões → Apps Script). Assim o menu
"🍷 Wine Study Lab" aparece na planilha e o backup da planilha leva o código junto.

## Opção A — com clasp (recomendada)

O clasp envia os arquivos de `src/` para o Apps Script de uma vez.

1. Ative a API do Apps Script na sua conta: <https://script.google.com/home/usersettings> → **ativado**.
2. Instale e faça login **com a conta dona da planilha**:
   ```bash
   npm install -g @google/clasp
   ```
   ```bash
   clasp login
   ```
3. Na pasta do projeto, crie o projeto vinculado à planilha:
   ```bash
   clasp create --title "Wine Study Lab" --parentId <ID_DA_PLANILHA> --rootDir src
   ```
   Isso cria `.clasp.json`. Se já existir um projeto vinculado à planilha, use
   `clasp clone <scriptId> --rootDir src` antes (o scriptId está em Apps Script → Configurações do projeto)
   e **não** sobrescreva código que você queira manter.
4. Envie o código (confirme a substituição do `appsscript.json`):
   ```bash
   clasp push
   ```
5. Abra o editor, escolha a função **`setup`** e clique em **Executar**. Autorize o acesso
   (planilha + e-mail). O log mostra as abas criadas e o resultado da primeira sincronização.
6. Publique: **Implantar → Nova implantação → App da Web**
   - Executar como: **Eu**
   - Quem pode acessar: **Somente eu**
   Copie a URL `/exec` e salve nos favoritos (no celular, "Adicionar à tela inicial").

## Opção B — manual (sem terminal)

1. Na planilha: **Extensões → Apps Script**.
2. Em Configurações do projeto, marque **"Mostrar arquivo de manifesto appsscript.json"** e cole o conteúdo de `src/appsscript.json`.
3. Para cada arquivo de `src/server/`, crie um **Script** com o mesmo nome sem extensão, com a pasta
   no nome: `server/00_Config`, `server/01_Util`, … e cole o conteúdo.
4. Para cada arquivo de `src/client/`, crie um **HTML** com o nome `client/index`, `client/styles`,
   `client/core`, `client/components`, `client/pages_main`, `client/pages_study`,
   `client/pages_cellar`, `client/pages_tasting`.
5. Siga os passos 5 e 6 da opção A.

## O que o `setup` faz

1. Registra sua conta como dona (Propriedades do script → `OWNER_EMAIL`).
2. Cria as abas `db_*` (cor bordô). As abas `VINHOS`, `UVAS`, `NOTAS` **não são alteradas**.
3. Semeia escalas, pesos da pontuação, vocabulário de aromas e nomes de países.
4. Faz a primeira sincronização e grava o relatório em `db_import_log`.

Rodar `setup` de novo é seguro: nada é duplicado nem apagado.

## Segurança

- "Somente eu" faz o Google exigir login com a sua conta para abrir a URL.
- Toda chamada ao servidor confere o e-mail com `OWNER_EMAIL`.
- Entradas são validadas (tipos, tamanhos, valores de escala, ids existentes).
- Quem tiver **acesso de edição à planilha** pode alterar as abas diretamente — compartilhe
  a planilha só como leitura, se compartilhar.

## Ativar a pesquisa com IA (Fase 2)

1. Crie uma chave em <https://console.anthropic.com> → API Keys (a cobrança é por uso).
2. No app: **Configurações → Inteligência artificial → Salvar chave**. A chave fica nas
   Propriedades do script (`ANTHROPIC_API_KEY`), nunca na planilha, e não volta para o navegador.
3. A primeira vez depois de atualizar o código, abra o editor do Apps Script e rode qualquer função
   (ex.: `migrate`) para autorizar a nova permissão de acesso externo (`script.external_request`).
