/* Sampling tool — browser UI for Chapter 2 sampling designs.
 * Classic scripts (no ES modules) so file:// and GitHub Pages both work.
 * Depends on window.SamplingLib + window.SamplingPresets.
 */
(function () {
  "use strict";

  const Lib = window.SamplingLib;
  if (!Lib) {
    const rootEl = document.getElementById("sampling-root");
    if (rootEl) {
      rootEl.innerHTML =
        '<p class="sp-msg err">Sampling libraries failed to load. Ensure lib/*.js scripts are included before sampling.js.</p>';
    }
    return;
  }

  const createRng = Lib.createRng;
  const parseUpload = Lib.parseUpload;
  const loadPreset = Lib.loadPreset;
  const ROLES = Lib.ROLES;
  const suggestMapping = Lib.suggestMapping;
  const validateMapping = Lib.validateMapping;
  const validateMethodColumns = Lib.validateMethodColumns;
  const mappingSummary = Lib.mappingSummary;
  const runSample = Lib.runSample;
  const compareDistributions = Lib.compareDistributions;
  const biasCallouts = Lib.biasCallouts;
  const sampleSummary = Lib.sampleSummary;
  const downloadBundle = Lib.downloadBundle;

  const PRESETS = [
    { id: "employee-roster", book: "eg:2.10, eg:2.11" },
    { id: "clinic-patients", book: "eg:2.12" },
    { id: "ordered-survey", book: "Section 2.6.1" },
    { id: "campus-arrivals", book: "eg:2.14" },
    { id: "gig-worker-network", book: "eg:2.15" },
    { id: "spatial-population", book: "visual bias" },
  ];

const METHODS = [
  { id: "srs", label: "Simple random (SRS)" },
  { id: "stratified", label: "Stratified" },
  { id: "cluster", label: "Cluster" },
  { id: "systematic", label: "Systematic" },
  { id: "convenience", label: "Convenience" },
  { id: "snowball", label: "Snowball" },
];

/** @type {import('./lib/parse.js').ParsedDataset | null} */
let dataset = null;
/** @type {import('./lib/schema.js').ColumnMapping} */
let mapping = {};
let method = "srs";
let seed = 42;
let sampleN = 50;
let allocation = "proportional";
let kClusters = 5;
let withinRate = 1;
let seedCount = 5;
let maxWaves = 3;
let referralsPerWave = 2;
/** @type {import('./lib/sample.js').SampleResult | null} */
let lastResult = null;

const root = document.getElementById("sampling-root");

function esc(text) {
  const el = document.createElement("div");
  el.textContent = String(text ?? "");
  return el.innerHTML;
}

function escAttr(text) {
  return esc(text).replace(/"/g, "&quot;");
}

function render() {
  if (!root) return;
  root.innerHTML = [
    '<section class="sp-hero">',
    "<h1>Sampling tool</h1>",
    '<p class="lead">Compare probability and non-probability sampling on preset or uploaded data. ',
    "Map columns, draw a sample, and inspect population vs sample distributions.</p>",
    '<p class="sp-book-ref">Chapter 2 · Sections 2.5–2.6 · ',
    '<a href="../../chapter2/parts/part-06-probability-sampling/index.html">Probability sampling</a> · ',
    '<a href="../../chapter2/parts/part-07-additional-sampling/index.html">Additional techniques</a>',
    "</p></section>",
    '<div class="sp-layout">',
    '<aside class="sp-panel" id="data-panel"><h2>1. Load data</h2>',
    '<div class="sp-presets" id="preset-list"></div>',
    '<label class="sp-upload"><span class="btn btn-secondary">Upload CSV or JSON</span>',
    '<input type="file" id="file-input" accept=".csv,.json" hidden></label>',
    '<p class="sp-hint">Max 5,000 rows · 2 MB · JSON must be an array of objects</p>',
    '<div id="dataset-summary" class="sp-summary"></div></aside>',
    '<section class="sp-panel" id="wizard-panel"><h2>2. Map columns</h2>',
    '<div id="mapping-form"></div>',
    '<p id="mapping-summary" class="sp-summary"></p>',
    '<button type="button" class="btn" id="apply-mapping">Apply mapping</button>',
    '<div id="validation-messages" class="sp-messages"></div></section>',
    '<section class="sp-panel" id="controls-panel"><h2>3. Sample</h2>',
    '<div class="sp-controls-grid" id="method-controls"></div>',
    '<div class="sp-actions">',
    '<button type="button" class="btn" id="run-sample">Draw sample</button>',
    '<button type="button" class="btn btn-secondary" id="resample">Resample</button>',
    "</div>",
    '<div id="sample-meta" class="sp-summary"></div></section></div>',
    '<section class="sp-panel sp-viz-panel" id="viz-panel"><h2>4. Compare population vs sample</h2>',
    '<div id="bias-callouts" class="sp-callouts"></div>',
    '<div class="sp-viz-grid">',
    '<div class="sp-chart-wrap" id="scatter-wrap"><h3>Spatial view</h3>',
    '<canvas id="scatter-canvas" width="560" height="360" role="img" aria-label="Population and sample scatter plot with labeled axes"></canvas>',
    '<p class="sp-hint" id="scatter-hint">Map X and Y columns to enable scatter plot.</p></div>',
    '<div class="sp-chart-wrap" id="bar-wrap"><h3>Distribution compare</h3>',
    '<canvas id="bar-canvas" width="560" height="360" role="img" aria-label="Population and sample distribution chart with labeled axes"></canvas>',
    '<p class="sp-hint" id="bar-hint"></p></div></div>',
    '<div id="results-table-wrap"></div>',
    '<div class="sp-actions"><button type="button" class="btn btn-secondary" id="export-btn" disabled>',
    "Export sample + metadata</button></div></section>",
  ].join("");

  bindEvents();
  renderPresets();
  renderMappingForm();
  renderMethodControls();
  updateDatasetSummary();
}

function bindEvents() {
  document.getElementById("file-input")?.addEventListener("change", onFileUpload);
  document.getElementById("apply-mapping")?.addEventListener("click", onApplyMapping);
  document.getElementById("run-sample")?.addEventListener("click", onRunSample);
  document.getElementById("resample")?.addEventListener("click", () => {
    seed += 1;
    const seedInput = document.getElementById("seed-input");
    if (seedInput) seedInput.value = String(seed);
    onRunSample();
  });
  document.getElementById("export-btn")?.addEventListener("click", onExport);
}

function renderPresets() {
  const el = document.getElementById("preset-list");
  if (!el) return;
  el.innerHTML = PRESETS.map(
    (p) =>
      `<button type="button" class="sp-preset-card" data-preset="${escAttr(p.id)}">` +
      `<strong>${esc(p.id.replace(/-/g, " "))}</strong>` +
      `<span class="sp-hint">${esc(p.book)}</span></button>`,
  ).join("");
  el.querySelectorAll("[data-preset]").forEach((btn) => {
    btn.addEventListener("click", () => loadPresetById(btn.getAttribute("data-preset")));
  });
}

async function loadPresetById(id) {
  const preset = PRESETS.find((p) => p.id === id);
  if (!preset) return;
  try {
    const data = await loadPreset(preset.id);
    dataset = data;
    mapping = suggestMapping(data.columns, data.defaultMapping ?? {}, data.rows);
    sampleN = Math.min(50, Math.max(10, Math.floor(data.rows.length * 0.1)));
    lastResult = null;
    renderMappingForm();
    renderMethodControls();
    updateDatasetSummary();
    clearMessages();
    clearVisuals();
    showMessage(`Loaded preset: ${data.source}`, "ok");
    document.querySelectorAll(".sp-preset-card").forEach((card) => {
      card.classList.toggle("is-active", card.getAttribute("data-preset") === id);
    });
    autoSampleAfterLoad();
  } catch (err) {
    showMessage(err instanceof Error ? err.message : String(err), "err");
  }
}

async function onFileUpload(ev) {
  const input = /** @type {HTMLInputElement} */ (ev.target);
  const file = input.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    dataset = parseUpload(text, file.name);
    mapping = suggestMapping(dataset.columns, {}, dataset.rows);
    sampleN = Math.min(50, Math.max(10, Math.floor(dataset.rows.length * 0.1)));
    lastResult = null;
    renderMappingForm();
    renderMethodControls();
    updateDatasetSummary();
    clearMessages();
    clearVisuals();
    document.querySelectorAll(".sp-preset-card").forEach((c) => c.classList.remove("is-active"));
    showMessage(`Loaded ${dataset.rows.length} rows from ${file.name}`, "ok");
    autoSampleAfterLoad();
  } catch (err) {
    showMessage(err instanceof Error ? err.message : String(err), "err");
  }
  input.value = "";
}

/** Draw an initial sample so charts refresh immediately after load. */
function autoSampleAfterLoad() {
  if (!dataset || !mapping.id) return;
  const methodVal = validateMethodColumns(method, mapping);
  if (!methodVal.ok) {
    // Switch to SRS when the current method needs columns this dataset lacks.
    method = "srs";
    const methodSelect = /** @type {HTMLSelectElement | null} */ (document.getElementById("method-select"));
    if (methodSelect) methodSelect.value = "srs";
    toggleMethodOptions();
  }
  onRunSample();
}

function renderMappingForm() {
  const el = document.getElementById("mapping-form");
  if (!el) return;
  if (!dataset) {
    el.innerHTML = "<p class='sp-hint'>Load a preset or upload a file first.</p>";
    return;
  }
  el.innerHTML = ROLES.map(({ key, label, required }) => {
    const options = dataset.columns
      .map(
        (c) =>
          `<option value="${escAttr(c)}"${mapping[key] === c ? " selected" : ""}>${esc(c)}</option>`,
      )
      .join("");
    return (
      `<label class="sp-field"><span>${esc(label)}${required ? " *" : ""}</span>` +
      `<select data-role="${escAttr(key)}"><option value="">— none —</option>${options}</select></label>`
    );
  }).join("");

  el.querySelectorAll("select[data-role]").forEach((sel) => {
    sel.addEventListener("change", () => {
      const role = sel.getAttribute("data-role");
      if (role) mapping[role] = sel.value || null;
      const summary = document.getElementById("mapping-summary");
      if (summary && dataset) summary.textContent = mappingSummary(dataset.rows, mapping);
    });
  });

  const summary = document.getElementById("mapping-summary");
  if (summary) summary.textContent = mappingSummary(dataset.rows, mapping);
}

function renderMethodControls() {
  const el = document.getElementById("method-controls");
  if (!el) return;
  el.innerHTML = [
    `<label class="sp-field"><span>Method</span><select id="method-select">`,
    METHODS.map((m) => `<option value="${m.id}"${method === m.id ? " selected" : ""}>${esc(m.label)}</option>`).join(""),
    `</select></label>`,
    `<label class="sp-field"><span>Sample size (n)</span><input type="number" id="sample-n" min="1" max="5000" value="${sampleN}"></label>`,
    `<label class="sp-field"><span>Random seed</span><input type="number" id="seed-input" value="${seed}"></label>`,
    `<label class="sp-field sp-opt sp-opt-stratified"><span>Stratified allocation</span>`,
    `<select id="allocation-select"><option value="proportional"${allocation === "proportional" ? " selected" : ""}>Proportional</option>`,
    `<option value="equal"${allocation === "equal" ? " selected" : ""}>Equal per stratum</option></select></label>`,
    `<label class="sp-field sp-opt sp-opt-cluster"><span>Number of clusters</span><input type="number" id="k-clusters" min="1" value="${kClusters}"></label>`,
    `<label class="sp-field sp-opt sp-opt-cluster"><span>Within-cluster rate (0–1)</span><input type="number" id="within-rate" min="0.1" max="1" step="0.1" value="${withinRate}"></label>`,
    `<label class="sp-field sp-opt sp-opt-snowball"><span>Seed count</span><input type="number" id="seed-count" min="1" value="${seedCount}"></label>`,
    `<label class="sp-field sp-opt sp-opt-snowball"><span>Max waves</span><input type="number" id="max-waves" min="1" value="${maxWaves}"></label>`,
    `<label class="sp-field sp-opt sp-opt-snowball"><span>Referrals per wave</span><input type="number" id="referrals" min="1" value="${referralsPerWave}"></label>`,
  ].join("");

  document.getElementById("method-select")?.addEventListener("change", (e) => {
    method = /** @type {HTMLSelectElement} */ (e.target).value;
    toggleMethodOptions();
    if (!dataset) return;
    readMappingFromForm();
    const methodVal = validateMethodColumns(method, mapping);
    if (methodVal.ok) onRunSample();
  });
  document.getElementById("sample-n")?.addEventListener("change", (e) => {
    sampleN = Math.max(1, Number(/** @type {HTMLInputElement} */ (e.target).value) || 50);
  });
  document.getElementById("seed-input")?.addEventListener("change", (e) => {
    seed = Number(/** @type {HTMLInputElement} */ (e.target).value) || 42;
  });
  document.getElementById("allocation-select")?.addEventListener("change", (e) => {
    allocation = /** @type {HTMLSelectElement} */ (e.target).value;
  });
  document.getElementById("k-clusters")?.addEventListener("change", (e) => {
    kClusters = Math.max(1, Number(/** @type {HTMLInputElement} */ (e.target).value) || 5);
  });
  document.getElementById("within-rate")?.addEventListener("change", (e) => {
    withinRate = Math.min(1, Math.max(0.1, Number(/** @type {HTMLInputElement} */ (e.target).value) || 1));
  });
  document.getElementById("seed-count")?.addEventListener("change", (e) => {
    seedCount = Math.max(1, Number(/** @type {HTMLInputElement} */ (e.target).value) || 5);
  });
  document.getElementById("max-waves")?.addEventListener("change", (e) => {
    maxWaves = Math.max(1, Number(/** @type {HTMLInputElement} */ (e.target).value) || 3);
  });
  document.getElementById("referrals")?.addEventListener("change", (e) => {
    referralsPerWave = Math.max(1, Number(/** @type {HTMLInputElement} */ (e.target).value) || 2);
  });
  toggleMethodOptions();
}

function toggleMethodOptions() {
  document.querySelectorAll(".sp-opt").forEach((el) => el.classList.add("hidden"));
  if (method === "stratified") document.querySelectorAll(".sp-opt-stratified").forEach((el) => el.classList.remove("hidden"));
  if (method === "cluster") document.querySelectorAll(".sp-opt-cluster").forEach((el) => el.classList.remove("hidden"));
  if (method === "snowball") document.querySelectorAll(".sp-opt-snowball").forEach((el) => el.classList.remove("hidden"));
}

function onApplyMapping() {
  if (!dataset) return;
  readMappingFromForm();
  const v = validateMapping(dataset.rows, mapping);
  const el = document.getElementById("validation-messages");
  if (!el) return;
  const items = [...v.errors.map((m) => ({ m, kind: "err" })), ...v.warnings.map((m) => ({ m, kind: "warn" }))];
  el.innerHTML = items.map(({ m, kind }) => `<p class="sp-msg ${kind}">${esc(m)}</p>`).join("");
  const summary = document.getElementById("mapping-summary");
  if (summary) summary.textContent = mappingSummary(dataset.rows, mapping);
  if (v.ok) {
    if (!v.warnings.length) showMessage("Mapping applied successfully.", "ok");
    if (lastResult) updateVisuals();
    else onRunSample();
  }
}

function readMappingFromForm() {
  document.querySelectorAll("#mapping-form select[data-role]").forEach((sel) => {
    const role = sel.getAttribute("data-role");
    if (role) mapping[role] = sel.value || null;
  });
}

function onRunSample() {
  if (!dataset) {
    showMessage("Load a dataset first.", "err");
    return;
  }
  readMappingFromForm();
  const mapVal = validateMapping(dataset.rows, mapping);
  const methodVal = validateMethodColumns(method, mapping);
  if (!mapVal.ok || !methodVal.ok) {
    const el = document.getElementById("validation-messages");
    if (el) {
      el.innerHTML = [...mapVal.errors, ...methodVal.errors]
        .map((m) => `<p class="sp-msg err">${esc(m)}</p>`)
        .join("");
    }
    return;
  }

  const seedInput = document.getElementById("seed-input");
  if (seedInput) seed = Number(/** @type {HTMLInputElement} */ (seedInput).value) || seed;
  const nInput = document.getElementById("sample-n");
  if (nInput) sampleN = Math.max(1, Number(/** @type {HTMLInputElement} */ (nInput).value) || sampleN);

  const rng = createRng(seed);
  try {
    lastResult = runSample(method, dataset.rows, {
      idKey: mapping.id,
      n: sampleN,
      strataKey: mapping.strata,
      clusterKey: mapping.cluster,
      orderKey: mapping.order,
      referrerKey: mapping.referrer,
      allocation,
      kClusters,
      withinRate,
      seedCount,
      maxWaves,
      referralsPerWave,
    }, rng);
    lastResult.metadata.seed = seed;
    updateVisuals();
    document.getElementById("export-btn")?.removeAttribute("disabled");
  } catch (err) {
    showMessage(err instanceof Error ? err.message : String(err), "err");
  }
}

function updateDatasetSummary() {
  const el = document.getElementById("dataset-summary");
  if (!el) return;
  if (!dataset) {
    el.textContent = "No dataset loaded.";
    return;
  }
  el.innerHTML = `<strong>${esc(dataset.source)}</strong> · ${dataset.rows.length} rows · ${dataset.columns.length} columns`;
}

function updateVisuals() {
  if (!dataset || !lastResult) return;
  const compareCol = mapping.strata || mapping.cluster || pickCompareColumn() || null;
  const dist = compareDistributions(dataset.rows, lastResult.selectedRows, compareCol);
  const summary = sampleSummary(dataset.rows, lastResult.selectedRows);
  const warnings = biasCallouts(method, { maxGap: dist.maxGap }, /** @type {string[]} */ (lastResult.metadata.warnings ?? []));

  const meta = document.getElementById("sample-meta");
  if (meta) {
    let html = `Method: <strong>${esc(method)}</strong> · Sample: ${summary.sampleN} / ${summary.populationN} (${summary.fraction}) · Seed: ${seed}`;
    const params = /** @type {Record<string, unknown>} */ (lastResult.metadata.params ?? {});
    if (params.interval != null) html += ` · Systematic k=${params.interval}, start=${params.start}`;
    meta.innerHTML = html;
  }

  const callouts = document.getElementById("bias-callouts");
  if (callouts) callouts.innerHTML = warnings.map((w) => `<p class="sp-callout">${esc(w)}</p>`).join("");

  drawScatter();
  drawBars(dist, compareCol);
  renderResultsTable();

  const barHint = document.getElementById("bar-hint");
  if (barHint) {
    barHint.textContent = compareCol
      ? `Comparing shares of “${compareCol}” (population vs sample).`
      : "Map a strata or cluster column for distribution compare.";
  }
  const scatterHint = document.getElementById("scatter-hint");
  if (scatterHint) {
    scatterHint.textContent =
      mapping.x && mapping.y
        ? `X-axis: ${mapping.x}. Y-axis: ${mapping.y}. Gray points are the population; teal points are the selected sample.`
        : "Map X and Y columns to enable scatter plot.";
  }
}

/** Prefer a low-cardinality categorical column for the bar chart. */
function pickCompareColumn() {
  if (!dataset) return null;
  const skip = new Set([mapping.id, mapping.x, mapping.y, mapping.order, mapping.referrer, "_index"].filter(Boolean));
  let best = null;
  let bestScore = Infinity;
  dataset.columns.forEach((col) => {
    if (skip.has(col)) return;
    const distinct = new Set(dataset.rows.map((r) => String(r[col] ?? ""))).size;
    if (distinct < 2 || distinct > 20) return;
    if (distinct < bestScore) {
      bestScore = distinct;
      best = col;
    }
  });
  return best ?? dataset.columns.find((c) => !skip.has(c)) ?? null;
}

function clearVisuals() {
  const scatter = /** @type {HTMLCanvasElement | null} */ (document.getElementById("scatter-canvas"));
  const bars = /** @type {HTMLCanvasElement | null} */ (document.getElementById("bar-canvas"));
  [scatter, bars].forEach((canvas) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
  document.getElementById("scatter-wrap")?.classList.add("sp-disabled");
  const callouts = document.getElementById("bias-callouts");
  if (callouts) callouts.innerHTML = "";
  const meta = document.getElementById("sample-meta");
  if (meta) meta.textContent = "";
  const table = document.getElementById("results-table-wrap");
  if (table) table.innerHTML = "";
  const barHint = document.getElementById("bar-hint");
  if (barHint) barHint.textContent = "";
  const scatterHint = document.getElementById("scatter-hint");
  if (scatterHint) scatterHint.textContent = "Map X and Y columns to enable scatter plot.";
  document.getElementById("export-btn")?.setAttribute("disabled", "disabled");
}

function formatChartNumber(value) {
  const abs = Math.abs(value);
  if (abs >= 1000) return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
  if (abs >= 10) return value.toFixed(0);
  return value.toFixed(1).replace(/\.0$/, "");
}

function niceChartMax(value) {
  if (value <= 0) return 1;
  const magnitude = 10 ** Math.floor(Math.log10(value));
  const normalized = value / magnitude;
  return (normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10) * magnitude;
}

function drawChartLegend(ctx, x, y, firstColor, firstLabel, secondColor, secondLabel) {
  ctx.font = "11px Source Sans 3, Arial, sans-serif";
  ctx.fillStyle = firstColor;
  ctx.fillRect(x, y - 8, 14, 9);
  ctx.fillStyle = "#1c2421";
  ctx.fillText(firstLabel, x + 20, y);
  const offset = Math.max(100, ctx.measureText(firstLabel).width + 36);
  ctx.fillStyle = secondColor;
  ctx.fillRect(x + offset, y - 8, 14, 9);
  ctx.fillStyle = "#1c2421";
  ctx.fillText(secondLabel, x + offset + 20, y);
}

function drawScatter() {
  const canvas = /** @type {HTMLCanvasElement | null} */ (document.getElementById("scatter-canvas"));
  const wrap = document.getElementById("scatter-wrap");
  if (!canvas || !dataset || !wrap || !mapping.id) return;

  if (!mapping.x || !mapping.y) {
    wrap.classList.add("sp-disabled");
    return;
  }
  wrap.classList.remove("sp-disabled");

  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const plottableRows = dataset.rows.filter(
    (row) => Number.isFinite(Number(row[mapping.x])) && Number.isFinite(Number(row[mapping.y])),
  );
  const xs = plottableRows.map((r) => Number(r[mapping.x]));
  const ys = plottableRows.map((r) => Number(r[mapping.y]));
  if (!xs.length || !ys.length) {
    wrap.classList.add("sp-disabled");
    return;
  }
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const plot = { left: 66, right: w - 18, top: 48, bottom: h - 58 };
  const plotW = plot.right - plot.left;
  const plotH = plot.bottom - plot.top;
  const scaleX = (v) => plot.left + ((v - minX) / (maxX - minX || 1)) * plotW;
  const scaleY = (v) => plot.bottom - ((v - minY) / (maxY - minY || 1)) * plotH;
  const sampleSet = new Set(lastResult?.selectedIds ?? []);

  ctx.font = "10px Source Sans 3, Arial, sans-serif";
  for (let tick = 0; tick <= 4; tick += 1) {
    const xValue = minX + ((maxX - minX) * tick) / 4;
    const x = plot.left + (plotW * tick) / 4;
    ctx.strokeStyle = "rgba(28, 36, 33, 0.18)";
    ctx.beginPath();
    ctx.moveTo(x, plot.top);
    ctx.lineTo(x, plot.bottom);
    ctx.stroke();
    ctx.fillStyle = "#1c2421";
    ctx.textAlign = "center";
    ctx.fillText(formatChartNumber(xValue), x, plot.bottom + 17);

    const yValue = minY + ((maxY - minY) * tick) / 4;
    const y = plot.bottom - (plotH * tick) / 4;
    ctx.strokeStyle = "rgba(28, 36, 33, 0.18)";
    ctx.beginPath();
    ctx.moveTo(plot.left, y);
    ctx.lineTo(plot.right, y);
    ctx.stroke();
    ctx.textAlign = "right";
    ctx.fillText(formatChartNumber(yValue), plot.left - 8, y + 3);
  }

  plottableRows.forEach((row) => {
    const id = String(row[mapping.id] ?? "");
    const x = scaleX(Number(row[mapping.x]));
    const y = scaleY(Number(row[mapping.y]));
    const selected = sampleSet.has(id);
    ctx.beginPath();
    ctx.arc(x, y, selected ? 5 : 3, 0, Math.PI * 2);
    ctx.fillStyle = selected ? "#0f6b5c" : "rgba(92, 103, 95, 0.35)";
    ctx.fill();
    if (selected) {
      ctx.strokeStyle = "#1c2421";
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  });

  ctx.strokeStyle = "#1c2421";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(plot.left, plot.top);
  ctx.lineTo(plot.left, plot.bottom);
  ctx.lineTo(plot.right, plot.bottom);
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.fillStyle = "#1c2421";
  ctx.font = "600 12px Source Sans 3, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(mapping.x, plot.left + plotW / 2, h - 10);
  ctx.save();
  ctx.translate(15, plot.top + plotH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(mapping.y, 0, 0);
  ctx.restore();
  ctx.textAlign = "left";
  drawChartLegend(ctx, plot.left, 23, "#aeb4b0", "Population", "#0f6b5c", "Selected sample");
}

function drawBars(dist, column) {
  const canvas = /** @type {HTMLCanvasElement | null} */ (document.getElementById("bar-canvas"));
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  if (!column) return;

  const { labels, populationPct, samplePct } = dist;
  if (!labels.length) return;

  const shown = labels
    .map((label, i) => ({ label, population: populationPct[i], sample: samplePct[i] }))
    .sort((a, b) => Math.max(b.population, b.sample) - Math.max(a.population, a.sample))
    .slice(0, 8);
  const plot = { left: 135, right: w - 45, top: 48, bottom: h - 43 };
  const plotW = plot.right - plot.left;
  const plotH = plot.bottom - plot.top;
  const maxPct = niceChartMax(
    Math.max(1, ...shown.map((item) => Math.max(item.population, item.sample))),
  );
  const rowH = plotH / Math.max(shown.length, 1);
  const barH = Math.min(12, rowH * 0.32);

  ctx.font = "10px Source Sans 3, Arial, sans-serif";
  ctx.textBaseline = "middle";
  for (let tick = 0; tick <= 4; tick += 1) {
    const value = (maxPct * tick) / 4;
    const x = plot.left + (plotW * tick) / 4;
    ctx.strokeStyle = "rgba(28, 36, 33, 0.18)";
    ctx.beginPath();
    ctx.moveTo(x, plot.top);
    ctx.lineTo(x, plot.bottom);
    ctx.stroke();
    ctx.fillStyle = "#1c2421";
    ctx.textAlign = "center";
    ctx.fillText(formatChartNumber(value) + "%", x, plot.bottom + 14);
  }

  shown.forEach((item, i) => {
    const y = plot.top + i * rowH + rowH / 2;
    const popW = (item.population / maxPct) * plotW;
    const sampleW = (item.sample / maxPct) * plotW;
    ctx.fillStyle = "#aeb4b0";
    ctx.fillRect(plot.left, y - barH - 1, popW, barH);
    ctx.fillStyle = "#0f6b5c";
    ctx.fillRect(plot.left, y + 1, sampleW, barH);
    ctx.fillStyle = "#1c2421";
    ctx.textAlign = "right";
    const label = String(item.label);
    ctx.fillText(label.length > 18 ? label.slice(0, 17) + "…" : label, plot.left - 8, y);
    ctx.fillStyle = "#1c2421";
    ctx.textAlign = "left";
    if (item.population > 0) ctx.fillText(item.population.toFixed(1) + "%", plot.left + popW + 4, y - 7);
    if (item.sample > 0) ctx.fillText(item.sample.toFixed(1) + "%", plot.left + sampleW + 4, y + 8);
  });

  ctx.fillStyle = "#1c2421";
  ctx.font = "600 12px Source Sans 3, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("Share of records (%)", plot.left + plotW / 2, h - 7);
  ctx.save();
  ctx.translate(15, plot.top + plotH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(column + " categories", 0, 0);
  ctx.restore();
  ctx.textAlign = "left";
  drawChartLegend(ctx, plot.left, 23, "#aeb4b0", "Population", "#0f6b5c", "Selected sample");
}

function renderResultsTable() {
  const wrap = document.getElementById("results-table-wrap");
  if (!wrap || !lastResult || !dataset) return;
  const preview = lastResult.selectedRows.slice(0, 50);
  const cols = dataset.columns.slice(0, 6);
  wrap.innerHTML =
    `<h3>Sample preview (first ${preview.length} rows)</h3>` +
    '<div class="md-table-wrap"><table class="md-table"><thead><tr>' +
    cols.map((c) => `<th>${esc(c)}</th>`).join("") +
    "</tr></thead><tbody>" +
    preview.map((row) => `<tr>${cols.map((c) => `<td>${esc(row[c])}</td>`).join("")}</tr>`).join("") +
    "</tbody></table></div>";
}

function onExport() {
  if (!lastResult) return;
  downloadBundle(lastResult.selectedRows, {
    ...lastResult.metadata,
    mapping,
    exportedAt: new Date().toISOString(),
  });
}

function clearMessages() {
  const el = document.getElementById("validation-messages");
  if (el) el.innerHTML = "";
}

function showMessage(msg, kind) {
  const el = document.getElementById("validation-messages");
  if (!el) return;
  el.innerHTML = `<p class="sp-msg ${kind}">${esc(msg)}</p>`;
}

render();
loadPresetById("employee-roster");
})();
