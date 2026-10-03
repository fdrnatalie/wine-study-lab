/**
 * Configuração central do Wine Study Lab.
 *
 * SCHEMA descreve todas as abas `db_*` que o sistema mantém na planilha.
 * - Cada coluna é "nome:tipo" (tipos: string, number, bool, json, date).
 * - Colunas comuns (id, source, source_ref, field_sources, created_at, updated_at)
 *   são adicionadas automaticamente por Schema.columns().
 * - Novas colunas podem ser acrescentadas aqui a qualquer momento: Schema.ensure()
 *   as cria no fim da aba sem mexer nos dados existentes. O Repository lê pelo nome
 *   do cabeçalho, então a ordem física das colunas não importa.
 */
var CONFIG = {
  APP_NAME: 'Wine Study Lab',
  SCHEMA_VERSION: 4,
  // ID da planilha: vem de src/server/00_Local.js (fora do Git; veja 00_Local.example.js). Sem ele, o script usa
  // a planilha à qual está vinculado (getActiveSpreadsheet).
  SPREADSHEET_ID: '',

  // Abas originais: somente leitura. O sistema nunca escreve nelas.
  SOURCE_SHEETS: { wines: 'VINHOS', grapes: 'UVAS', notes: 'NOTAS' },

  CACHE_TTL_SECONDS: 6 * 60 * 60,
  CACHE_PREFIX: 'wsl:v1:',

  // Valores de `source` aceitos (ver docs/ARQUITETURA.md §2).
  SOURCES: ['usuario', 'rotulo', 'pesquisado', 'planilha', 'ia', 'ia_revisada', 'ia_nao_verificada', 'sistema'],
  // Fontes que podem servir de gabarito numa degustação.
  TRUSTED_SOURCES: ['usuario', 'rotulo', 'pesquisado', 'planilha', 'ia_revisada'],

  BOTTLE_STATUSES: ['disponivel', 'reservada', 'utilizada', 'descartada'],
  TASTING_STATUSES: ['em_andamento', 'aguardando_revelacao', 'revelada', 'cancelada'],
  NOTE_KINDS: ['impressao', 'comparacao', 'frase', 'associacao', 'descoberta', 'duvida', 'aula', 'degustacao'],
  AROMA_CATEGORIES: ['Frutas', 'Flores', 'Vegetais', 'Herbáceos', 'Especiarias', 'Terrosos', 'Minerais', 'Animais', 'Madeira', 'Evolução', 'Outros'],
  WINE_COLORS: ['tinto', 'branco', 'rose', 'laranja'],
  WINE_TYPES: ['tranquilo', 'espumante', 'fortificado', 'sobremesa']
};

// field_refs: link/referência da fonte de cada campo ({campo: url}), usado por dados pesquisados.
var COMMON_COLUMNS = ['id:string', 'source:string', 'source_ref:string', 'field_sources:json', 'field_refs:json', 'created_at:date', 'updated_at:date'];

var SCHEMA = {
  // ---------- Conhecimento ----------
  countries: { sheet: 'db_countries', prefix: 'CTY', cols: [
    'name', 'name_key', 'climate', 'history', 'notes', 'description'] },

  regions: { sheet: 'db_regions', prefix: 'REG', cols: [
    // parent_id vazio = região de 1º nível; preenchido = sub-região.
    'name', 'name_key', 'country_id', 'parent_id', 'level', 'lat:number', 'lng:number',
    'climate', 'altitude', 'soils', 'styles', 'history', 'notes',
    // v3: descrição, classificação (DOCG, DOC, AOC, zona…), vinhos de destaque e chave do contorno no mapa.
    'description', 'classification', 'notable_wines', 'geo_key'] },

  appellations: { sheet: 'db_appellations', prefix: 'APL', cols: [
    'name', 'name_key', 'region_id', 'classification', 'rules', 'notes'] },

  producers: { sheet: 'db_producers', prefix: 'PRD', cols: [
    'name', 'name_key', 'region_id', 'website', 'notes', 'notable_labels'] },

  grapes: { sheet: 'db_grapes', prefix: 'GRP', cols: [
    'name', 'name_key', 'color', 'origin', 'synonyms:json', 'main_countries', 'main_regions',
    'general_profile', 'ripening', 'skin_thickness', 'bunch_size', 'berry_size', 'vigor',
    'disease_sensitivity', 'climate', 'soils', 'how_to_recognize', 'confusions_text', 'description', 'notes'] },

  // Perfil sensorial (escalas 1–5). entity_type = grape (perfil típico) | wine (gabarito).
  // Para uvas, valores podem ser faixa "3-4".
  profiles: { sheet: 'db_profiles', prefix: 'PRF', cols: [
    'entity_type', 'entity_id', 'acidity', 'tannin', 'body', 'alcohol', 'sweetness',
    'intensity', 'finish', 'color_hue', 'color_intensity', 'oak', 'texture', 'visual_text', 'nose_text', 'palate_text'] },

  grape_relationships: { sheet: 'db_grape_relationships', prefix: 'GRL', cols: [
    // kind: parent_of (grape_a é pai/mãe de grape_b) | confused_with | synonym_of
    'grape_a_id', 'grape_b_id', 'kind', 'how_to_differentiate', 'notes'] },

  aromas: { sheet: 'db_aromas', prefix: 'ARO', cols: [
    'name', 'name_key', 'category', 'subcategory', 'order:number'] },

  entity_aromas: { sheet: 'db_entity_aromas', prefix: 'EAR', cols: [
    'entity_type', 'entity_id', 'aroma_id', 'kind', 'intensity:number'] },   // kind: nariz | boca

  wines: { sheet: 'db_wines', prefix: 'WIN', cols: [
    'name', 'import_key', 'producer_id', 'country_id', 'region_id', 'subregion_id', 'appellation_id',
    'vintage:number', 'type', 'color', 'abv:number', 'residual_sugar', 'acidity_gl', 'production_method',
    'aging', 'oak', 'aging_time', 'classification', 'price:number', 'price_currency',
    'serving_temp', 'pairing', 'curiosities', 'technical_notes', 'my_notes'] },

  // Castas de uma região/sub-região. role: principal | secundaria
  region_grapes: { sheet: 'db_region_grapes', prefix: 'RGG', cols: [
    'region_id', 'grape_id', 'role'] },

  // v4: produtor citado em uma região/sub-região, com o rótulo ou destaque naquele lugar
  // (um mesmo produtor pode aparecer em várias: ex. Guigal em Côte-Rôtie, Condrieu e Saint-Joseph).
  region_producers: { sheet: 'db_region_producers', prefix: 'RGP', cols: [
    'region_id', 'producer_id', 'labels'] },

  wine_grapes: { sheet: 'db_wine_grapes', prefix: 'WGR', cols: [
    'wine_id', 'grape_id', 'percent:number'] },

  // ---------- Adega ----------
  bottling_batches: { sheet: 'db_bottling_batches', prefix: 'BAT', cols: [
    'wine_id', 'date:date', 'original_volume_ml:number', 'bottle_volume_ml:number',
    'bottle_count:number', 'numbering', 'opened_at:date', 'notes'] },

  bottles: { sheet: 'db_bottles', prefix: 'BTL', cols: [
    'number:number', 'wine_id', 'batch_id', 'volume_ml:number', 'status', 'status_changed_at:date', 'notes'] },

  // ---------- Degustação ----------
  tastings: { sheet: 'db_tastings', prefix: 'TST', cols: [
    'title', 'date:date', 'status', 'difficulty', 'theme', 'filters:json',
    'scoring_snapshot:json', 'score:number', 'revealed_at:date', 'notes'] },

  tasting_samples: { sheet: 'db_tasting_samples', prefix: 'TSS', cols: [
    'tasting_id', 'bottle_id', 'position:number', 'score:number', 'completed:bool'] },

  // Uma linha por critério respondido. value = texto; value_json para listas (aromas, uvas).
  tasting_answers: { sheet: 'db_tasting_answers', prefix: 'TSA', cols: [
    'tasting_id', 'sample_id', 'criterion', 'value', 'value_json:json'] },

  // Uma linha por critério corrigido. Guarda dimensões desnormalizadas (uva, país…)
  // para que "Minha Evolução" seja calculada sem reprocessar degustações.
  tasting_results: { sheet: 'db_tasting_results', prefix: 'TSR', cols: [
    'tasting_id', 'sample_id', 'wine_id', 'criterion', 'given', 'expected', 'state',
    'points:number', 'max_points:number', 'grape_ids:json', 'country_id', 'region_id', 'date:date'] },

  // ---------- Estudo ----------
  notes: { sheet: 'db_notes', prefix: 'NOT', cols: [
    'title', 'body', 'kind', 'import_key', 'date:date', 'pinned:bool'] },

  note_links: { sheet: 'db_note_links', prefix: 'NTL', cols: [
    'note_id', 'entity_type', 'entity_id'] },

  // ---------- Sistema ----------
  settings: { sheet: 'db_settings', prefix: 'SET', cols: [
    'key', 'value', 'description'] },

  scales: { sheet: 'db_scales', prefix: 'SCL', cols: [
    // Uma linha por nível. synonyms = variações aceitas na importação (separadas por |).
    'scale', 'position:number', 'key', 'label', 'synonyms'] },

  scoring_rules: { sheet: 'db_scoring_rules', prefix: 'SCR', cols: [
    // compare: exact | ordinal | set_overlap | numeric | hierarchical
    'criterion', 'label', 'group', 'weight:number', 'compare', 'scale', 'params:json', 'active:bool', 'order:number'] },

  // Propostas da IA aguardando revisão (docs/ARQUITETURA.md D9).
  // kind: field | profile | aromas | parent | confused_with | new_grape
  // status: pendente | aprovada | descartada
  enrichment_queue: { sheet: 'db_enrichment_queue', prefix: 'ENQ', cols: [
    'entity_type', 'entity_id', 'field', 'current_value', 'proposed_value', 'justification',
    'provider', 'status', 'reviewed_at:date', 'run_id', 'kind', 'entity_name',
    'source_url', 'source_title', 'url_verified:bool'] },

  // Registro de cada chamada à IA (custo, tokens, erros).
  ai_calls: { sheet: 'db_ai_calls', prefix: 'AIC', cols: [
    'run_at:date', 'task', 'entity_id', 'model', 'input_tokens:number', 'output_tokens:number',
    'web_searches:number', 'cost_usd:number', 'proposals:number', 'status', 'error'] },

  import_log: { sheet: 'db_import_log', prefix: 'IMP', cols: [
    'run_at:date', 'level', 'message', 'details:json'] }
};
