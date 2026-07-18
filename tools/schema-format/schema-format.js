/* Schema / format translator UI (classic script, file:// safe). */
(function () {
  "use strict";
  const Lib = window.SchemaLib;
  if (!Lib) {
    console.error("SchemaLib missing. Check lib/*.js load order.");
    return;
  }

  let session = null;
  let message = { text: "", kind: "" };
  let view = "table"; // table | json | schema
  let flatMode = false;
  let schema = null;
  let displayRows = null;
  let displayCols = null;
  let flattenWarnings = [];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
  }

  function refreshDerived() {
    if (!session) {
      schema = null;
      displayRows = null;
      displayCols = null;
      flattenWarnings = [];
      return;
    }
    schema = Lib.inferSchema(session.rows);
    if (flatMode && schema.hasNested) {
      const flat = Lib.flattenRows(session.rows, "dot");
      displayRows = flat.rows;
      displayCols = flat.columns;
      flattenWarnings = flat.warnings;
    } else {
      displayRows = session.rows;
      displayCols = session.columns;
      flattenWarnings = [];
      if (flatMode && !schema.hasNested) {
        flattenWarnings = ["Data is already flat — nothing to flatten."];
      }
    }
  }

  function loadPreset(id) {
    try {
      session = Lib.loadPreset(id);
      flatMode = false;
      view = "table";
      message = { text: "", kind: "" };
      refreshDerived();
      showMessage(
        "Loaded '" + session.name + "' (" + session.rows.length + " rows).",
        "ok"
      );
    } catch (err) {
      showMessage(err.message || String(err), "error");
    }
    renderAll();
  }

  function onFileUpload(ev) {
    const file = ev.target.files && ev.target.files[0];
    if (!file) return;
    if (file.size > Lib.MAX_BYTES) {
      showMessage("File exceeds 2 MB limit.", "error");
      renderAll();
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      try {
        const data = Lib.parseUpload(String(reader.result), file.name);
        session = {
          id: "upload",
          name: file.name,
          title: "Uploaded data",
          description: "",
          bookAnchors: ["§1.2"],
          teachingFocus: "user-upload",
          structureHint: data.kind === "csv" ? "structured" : "",
          rows: data.rows,
          columns: data.columns,
          source: data.source,
        };
        flatMode = false;
        refreshDerived();
        showMessage(
          "Loaded '" + file.name + "' (" + data.rows.length + " rows as " + data.kind + ").",
          "ok"
        );
      } catch (err) {
        showMessage(err.message || String(err), "error");
      }
      renderAll();
    };
    reader.onerror = function () {
      showMessage("Could not read file.", "error");
      renderAll();
    };
    reader.readAsText(file);
    ev.target.value = "";
  }

  function onPasteApply() {
    const el = document.getElementById("sf-paste");
    if (!el) return;
    const text = el.value;
    if (!text.trim()) {
      showMessage("Paste CSV or JSON first.", "warn");
      renderAll();
      return;
    }
    try {
      const data = Lib.parseUpload(text, text.trim().charAt(0) === "[" || text.trim().charAt(0) === "{" ? "paste.json" : "paste.csv");
      session = {
        id: "paste",
        name: "pasted-data",
        title: "Pasted data",
        description: "",
        bookAnchors: ["§1.2"],
        teachingFocus: "paste",
        rows: data.rows,
        columns: data.columns,
        source: "paste",
      };
      flatMode = false;
      refreshDerived();
      showMessage("Parsed paste (" + data.rows.length + " rows).", "ok");
    } catch (err) {
      showMessage(err.message || String(err), "error");
    }
    renderAll();
  }

  const root = document.getElementById("schema-root");
  if (!root) return;

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderGuide() +
      renderLoader() +
      renderMessage() +
      (session ? renderWorkspace() : "");
    bindEvents();
  }

  function renderIntro() {
    return (
      '<section class="sf-intro">' +
      "<h1>Schema / format translator</h1>" +
      '<p class="lead">The same records can look like a flat CSV table, a nested JSON document, or an inferred schema. ' +
      "Switch views to see what structured vs semi-structured means in practice (Ch.1 §1.2 / §1.2.5).</p>" +
      '<p class="sf-cross">Pairs with the <a href="../eda-dashboard/index.html">EDA dashboard</a> once you know the shape of the file.</p>' +
      "</section>"
    );
  }

  function renderGuide() {
    return (
      '<details class="sf-panel sf-guide">' +
      "<summary>Learn → apply with your data</summary>" +
      "<ol>" +
      "<li><strong>Learn</strong> — <code>flat-customers</code> (structured) → <code>housing-nested</code> (nested address) → " +
      "<code>orders-nested</code> (arrays of line items).</li>" +
      "<li><strong>Compare</strong> — toggle Table / JSON / Schema views of the same records.</li>" +
      "<li><strong>Flatten</strong> — for nested presets, try flatten-for-CSV and read the lossiness warning.</li>" +
      "<li><strong>Apply</strong> — paste or upload CSV/JSON (≤ 5,000 rows, 2 MB); export CSV, JSON, or schema.</li>" +
      "</ol>" +
      '<p class="sf-hint">CSV prefers a fixed schema. Nested JSON is semi-structured: flexible keys and arrays that do not map 1:1 to columns.</p>' +
      "</details>"
    );
  }

  function renderLoader() {
    const presets = Lib.listPresets();
    let cards = "";
    presets.forEach(function (p) {
      const active = session && session.name === p.name ? " sf-preset-active" : "";
      cards +=
        '<button type="button" class="sf-preset' +
        active +
        '" data-preset="' +
        esc(p.id) +
        '"><strong>' +
        esc(p.title) +
        "</strong><span>" +
        esc(p.description) +
        "</span></button>";
    });
    return (
      '<section class="sf-panel">' +
      "<h2>1 · Load data</h2>" +
      '<div class="sf-presets">' +
      cards +
      "</div>" +
      '<div class="sf-load-row">' +
      '<label class="sf-upload">Upload CSV or JSON<input type="file" id="sf-upload" accept=".csv,.json,text/csv,application/json"></label>' +
      "</div>" +
      '<label class="sf-paste-label">Or paste CSV / JSON<textarea id="sf-paste" rows="4" placeholder=\'[{"id":1,"name":"Ada"}] or id,name\\n1,Ada\'></textarea></label>' +
      '<button type="button" class="btn btn-secondary" id="sf-paste-apply">Parse paste</button>' +
      "</section>"
    );
  }

  function renderMessage() {
    if (!message.text) return "";
    return (
      '<div class="sf-message sf-' +
      esc(message.kind || "ok") +
      '" role="status">' +
      esc(message.text) +
      "</div>"
    );
  }

  function structureBadge() {
    if (!schema) return "";
    const label = schema.structure === "semi-structured" ? "Semi-structured" : "Structured";
    const cls = schema.structure === "semi-structured" ? "sf-badge-semi" : "sf-badge-struct";
    return '<span class="sf-badge ' + cls + '">' + label + "</span>";
  }

  function teachingNote() {
    if (!schema) return "";
    let text = "";
    if (session.teachingFocus === "structured" || (!schema.hasNested && schema.structure === "structured")) {
      text =
        "Fixed columns with consistent types — this is structured data. CSV and JSON are interchangeable here.";
    } else if (session.teachingFocus === "semi-structured" || schema.hasNested) {
      text =
        "Nested objects or arrays make this semi-structured. JSON keeps hierarchy; CSV needs flattening (and may lose type fidelity).";
    } else if (session.teachingFocus === "flatten-tradeoff") {
      text =
        "One order with many items is natural in JSON. Flattening either duplicates order fields per item or packs items into a string cell.";
    }
    if (flatMode && flattenWarnings.length) {
      text = flattenWarnings.join(" ");
    }
    if (!text) return "";
    return '<p class="sf-teach" role="note">' + esc(text) + "</p>";
  }

  function renderWorkspace() {
    return (
      '<section class="sf-panel">' +
      "<h2>2 · Choose representation " +
      structureBadge() +
      "</h2>" +
      '<div class="sf-tabs" role="tablist">' +
      tabBtn("table", "Table (CSV-like)") +
      tabBtn("json", "JSON") +
      tabBtn("schema", "Schema") +
      "</div>" +
      '<div class="sf-controls">' +
      '<label class="sf-check"><input type="checkbox" id="sf-flat"' +
      (flatMode ? " checked" : "") +
      "> Flatten nested fields for CSV</label>" +
      "</div>" +
      teachingNote() +
      "</section>" +
      '<section class="sf-panel">' +
      "<h2>3 · Preview</h2>" +
      renderView() +
      "</section>" +
      renderExport()
    );
  }

  function tabBtn(id, label) {
    return (
      '<button type="button" class="sf-tab' +
      (view === id ? " sf-tab-active" : "") +
      '" data-view="' +
      id +
      '" role="tab" aria-selected="' +
      (view === id ? "true" : "false") +
      '">' +
      label +
      "</button>"
    );
  }

  function renderView() {
    if (view === "json") return renderJsonView();
    if (view === "schema") return renderSchemaView();
    return renderTableView();
  }

  function cellShow(v) {
    if (v == null) return "∅";
    if (typeof v === "object") return JSON.stringify(v);
    return String(v);
  }

  function renderTableView() {
    const cols = (displayCols || []).slice(0, 12);
    const rows = (displayRows || []).slice(0, 12);
    let head = cols
      .map(function (c) {
        return "<th>" + esc(c) + "</th>";
      })
      .join("");
    let body = rows
      .map(function (r) {
        return (
          "<tr>" +
          cols
            .map(function (c) {
              return "<td>" + esc(cellShow(r[c])) + "</td>";
            })
            .join("") +
          "</tr>"
        );
      })
      .join("");
    return (
      '<div class="sf-table-wrap"><table class="sf-table"><thead><tr>' +
      head +
      "</tr></thead><tbody>" +
      body +
      "</tbody></table></div>" +
      '<p class="sf-hint">Showing up to 12 × 12 cells (' +
      (displayRows || []).length +
      " rows × " +
      (displayCols || []).length +
      " columns" +
      (flatMode ? ", flattened" : "") +
      ").</p>"
    );
  }

  function renderJsonView() {
    const sample = (flatMode ? displayRows : session.rows).slice(0, 8);
    return (
      '<pre class="sf-code" tabindex="0">' +
      esc(Lib.rowsToJson(sample, true)) +
      "</pre>" +
      '<p class="sf-hint">Pretty-printed JSON (first ' +
      sample.length +
      " records" +
      (flatMode ? ", after flatten" : "") +
      ").</p>"
    );
  }

  function renderSchemaView() {
    if (!schema) return "<p>No schema.</p>";
    const rows = schema.fields
      .map(function (f) {
        return (
          "<tr>" +
          "<td><code>" +
          esc(f.path) +
          "</code></td>" +
          "<td>" +
          esc(Lib.primaryType(f.types)) +
          "</td>" +
          "<td>" +
          esc(Object.keys(f.types).join(", ")) +
          "</td>" +
          "<td>" +
          (f.nullable ? "yes" : "no") +
          "</td>" +
          "<td>" +
          f.depth +
          "</td>" +
          "<td>" +
          esc(f.examples.map(cellShow).join(", ")) +
          "</td>" +
          "</tr>"
        );
      })
      .join("");
    return (
      '<p class="sf-hint">Inferred from ' +
      schema.rowCount +
      " rows · max depth " +
      schema.maxDepth +
      " · classified as <strong>" +
      esc(schema.structure) +
      "</strong>.</p>" +
      '<div class="sf-table-wrap"><table class="sf-table"><thead><tr>' +
      "<th>Path</th><th>Primary type</th><th>Seen types</th><th>Nullable</th><th>Depth</th><th>Examples</th>" +
      "</tr></thead><tbody>" +
      rows +
      "</tbody></table></div>"
    );
  }

  function renderExport() {
    return (
      '<section class="sf-panel">' +
      "<h2>4 · Export</h2>" +
      '<div class="sf-op-row">' +
      '<button type="button" class="btn" id="sf-export-csv">Download CSV</button>' +
      '<button type="button" class="btn btn-secondary" id="sf-export-json">Download JSON</button>' +
      '<button type="button" class="btn btn-secondary" id="sf-export-schema">Download schema.json</button>' +
      "</div>" +
      '<p class="sf-hint">CSV export uses the flattened table when “Flatten” is on. Schema export is an inferred field map for documentation.</p>' +
      "</section>"
    );
  }

  function bindEvents() {
    root.querySelectorAll("[data-preset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadPreset(btn.getAttribute("data-preset"));
      });
    });
    const upload = document.getElementById("sf-upload");
    if (upload) upload.addEventListener("change", onFileUpload);
    const pasteBtn = document.getElementById("sf-paste-apply");
    if (pasteBtn) pasteBtn.addEventListener("click", onPasteApply);

    root.querySelectorAll("[data-view]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        view = btn.getAttribute("data-view") || "table";
        renderAll();
      });
    });
    const flat = document.getElementById("sf-flat");
    if (flat) {
      flat.addEventListener("change", function () {
        flatMode = !!flat.checked;
        refreshDerived();
        renderAll();
      });
    }

    function exportRows() {
      return flatMode && displayRows ? displayRows : session.rows;
    }
    function exportCols() {
      return flatMode && displayCols ? displayCols : session.columns;
    }

    const ec = document.getElementById("sf-export-csv");
    if (ec) {
      ec.addEventListener("click", function () {
        if (!session) return;
        const rows = exportRows();
        const cols = exportCols();
        // If nested and not flattened, flatten for CSV export automatically
        let outRows = rows;
        let outCols = cols;
        const sch = Lib.inferSchema(session.rows);
        if (!flatMode && sch.hasNested) {
          const flat = Lib.flattenRows(session.rows, "dot");
          outRows = flat.rows;
          outCols = flat.columns;
          showMessage("Exported CSV after auto-flatten (nested fields detected).", "warn");
        }
        Lib.download("records.csv", Lib.rowsToCsv(outRows, outCols), "text/csv");
        renderAll();
      });
    }
    const ej = document.getElementById("sf-export-json");
    if (ej) {
      ej.addEventListener("click", function () {
        if (!session) return;
        Lib.download(
          "records.json",
          Lib.rowsToJson(exportRows(), true),
          "application/json"
        );
        showMessage("Downloaded records.json.", "ok");
        renderAll();
      });
    }
    const es = document.getElementById("sf-export-schema");
    if (es) {
      es.addEventListener("click", function () {
        if (!session || !schema) return;
        const payload = Lib.schemaToJson(schema);
        payload.source = session.source || session.name;
        payload.bookAnchors = session.bookAnchors || ["§1.2"];
        payload.exportedAt = new Date().toISOString();
        Lib.download("schema.json", JSON.stringify(payload, null, 2), "application/json");
        showMessage("Downloaded schema.json.", "ok");
        renderAll();
      });
    }
  }

  if (window.SchemaPresets && window.SchemaPresets["flat-customers"]) {
    loadPreset("flat-customers");
  } else {
    renderAll();
  }
})();
