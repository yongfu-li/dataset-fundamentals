/* Cleaning workbench — main UI (classic script, file:// safe).
 * Load a messy dataset, inspect detected issues, apply cleaning operations,
 * watch before/after stats, and export the cleaned CSV plus a change log.
 * Book anchors: §5.2 Common Data Issues, §5.3 Techniques for Data Cleaning. */
(function () {
  "use strict";
  const Lib = window.CleaningLib;
  if (!Lib) {
    console.error("CleaningLib not found. Check that lib/*.js loaded before cleaning.js.");
    return;
  }

  /* ---------- state ---------- */
  let original = null; // { rows, columns, source, idColumn }
  let steps = []; // [{ rows, columns, log }] — history after each applied op
  let message = { text: "", kind: "" };
  let rowFilter = "all"; // all | any | missing | duplicate | inconsistent | outlier
  let chartColumn = ""; // selected column for distribution charts

  function currentRows() {
    return steps.length ? steps[steps.length - 1].rows : original ? original.rows : [];
  }
  function currentColumns() {
    return steps.length ? steps[steps.length - 1].columns : original ? original.columns : [];
  }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
  }

  function applyOp(fn) {
    if (!original) {
      showMessage("Load a dataset first.", "warn");
      renderAll();
      return;
    }
    try {
      const result = fn(currentRows());
      const cols = result.newColumn
        ? currentColumns().concat([result.newColumn])
        : currentColumns();
      steps.push({ rows: result.rows, columns: cols, log: result.log });
      showMessage(result.log, "ok");
    } catch (err) {
      showMessage(err.message || String(err), "error");
    }
    renderAll();
  }

  /* ---------- data loading ---------- */
  function loadPreset(id) {
    try {
      const data = Lib.loadPreset(id);
      original = data;
      steps = [];
      rowFilter = "all";
      chartColumn = pickDefaultChartColumn(data.rows, data.columns);
      showMessage(
        "Loaded preset '" + data.source + "' (" + data.rows.length + " rows, " +
          data.columns.length + " columns). Inspect the issues panel, then pick fixes.",
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
        data.idColumn = null;
        original = data;
        steps = [];
        rowFilter = "all";
        chartColumn = pickDefaultChartColumn(data.rows, data.columns);
        showMessage(
          "Loaded '" + file.name + "' (" + data.rows.length + " rows, " +
            data.columns.length + " columns).",
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

  function undoStep() {
    if (!steps.length) {
      showMessage("Nothing to undo.", "warn");
    } else {
      const undone = steps.pop();
      showMessage("Undid: " + undone.log, "ok");
    }
    renderAll();
  }

  function resetAll() {
    if (!original) return;
    steps = [];
    showMessage("Reset to the original dataset (" + original.rows.length + " rows).", "ok");
    renderAll();
  }

  /* ---------- exports ---------- */
  function exportCsv() {
    if (!original) {
      showMessage("Load a dataset first.", "warn");
      renderAll();
      return;
    }
    Lib.downloadCsv(currentRows(), currentColumns(), "cleaned-" + (original.source || "data") + ".csv");
  }

  function exportLog() {
    if (!original) {
      showMessage("Load a dataset first.", "warn");
      renderAll();
      return;
    }
    Lib.downloadChangeLog(
      steps.map(function (s, i) {
        return { step: i + 1, action: s.log, rows_after: s.rows.length };
      }),
      { source: original.source, rowsBefore: original.rows.length, rowsAfter: currentRows().length }
    );
  }

  function pickDefaultChartColumn(rows, columns) {
    const numeric = columns.filter(function (c) {
      return Lib.isNumericColumn(rows, c);
    });
    if (numeric.length) return numeric[0];
    const text = columns.filter(function (c) {
      return !Lib.isNumericColumn(rows, c);
    });
    return text[0] || columns[0] || "";
  }

  function tryHandoffFromUpstream() {
    const Handoff = window.DatasetToolsHandoff;
    if (!Handoff) return false;
    const from = Handoff.queryFrom();
    const sourceMap = {
      eda: "eda-dashboard",
      pii: "pii-scrubber",
      deid: "deid-risk",
    };
    if (!from || !sourceMap[from]) return false;
    const payload = Handoff.consume(sourceMap[from]);
    if (!payload || !payload.table || !payload.table.rows || !payload.table.columns) {
      return false;
    }
    const table = payload.table;
    const hints = payload.hints || {};
    const labelMap = {
      eda: "EDA dashboard",
      pii: "PII scrubber",
      deid: "de-id risk checker",
    };
    original = {
      rows: table.rows.map(function (r) {
        return Object.assign({}, r);
      }),
      columns: table.columns.slice(),
      source: table.name || from + "-handoff",
      idColumn: null,
    };
    steps = [];
    rowFilter = hints.rowFilter || "any";
    chartColumn = pickDefaultChartColumn(original.rows, original.columns);
    const focus = hints.focusColumns || {};
    if (focus.outlier && focus.outlier.length) chartColumn = focus.outlier[0];
    else if (focus.missing && focus.missing.length) chartColumn = focus.missing[0];
    Handoff.stripQuery();
    showMessage(
      "Loaded from " + (labelMap[from] || from) + " (" + original.rows.length + " rows, " +
        original.columns.length + " columns). Inspect issues, then apply fixes.",
      "ok"
    );
    return true;
  }

  function cellClass(issue) {
    if (!issue) return "";
    return ' class="cl-cell-' + issue.type + '"';
  }

  function cellContent(v, issue) {
    if (Lib.isMissing(v)) return "∅";
    return esc(v);
  }
  const root = document.getElementById("cleaning-root");
  if (!root) return;

  function renderAll() {
    const rows = currentRows();
    const columns = currentColumns();
    if (chartColumn && columns.indexOf(chartColumn) === -1) {
      chartColumn = pickDefaultChartColumn(rows, columns);
    }
    const profile = original ? Lib.profileDataset(rows, columns, original.idColumn) : null;

    root.innerHTML =
      renderIntro() +
      renderLoader() +
      renderMessage() +
      (original
        ? '<div class="cl-columns">' +
          '<div class="cl-col">' + renderIssues(profile) + renderChangeLog() + "</div>" +
          '<div class="cl-col">' + renderOps(rows, columns, profile) + renderStats(rows, columns) + "</div>" +
          "</div>" +
          renderCharts(rows, columns) +
          renderPreview(rows, columns) +
          renderExport()
        : "");
    bindEvents();
    drawCharts();
  }

  function renderIntro() {
    return (
      '<section class="cl-intro">' +
      "<h1>Cleaning workbench</h1>" +
      "<p>Real datasets arrive with missing values, duplicates, inconsistent categories, and outliers " +
      "(book §5.2). Load a messy dataset below, read the detected issues, and fix them step by step " +
      "with the techniques from §5.3. Every fix is logged so you can export a cleaned CSV " +
      "<em>and</em> the audit trail of what you changed.</p>" +
      "</section>"
    );
  }

  function renderLoader() {
    const presets = window.CleaningPresets || {};
    let cards = "";
    Object.keys(presets).forEach(function (id) {
      const p = presets[id];
      const active = original && original.source === id ? " cl-preset-active" : "";
      cards +=
        '<button type="button" class="cl-preset' + active + '" data-preset="' + esc(id) + '">' +
        "<strong>" + esc(id) + "</strong>" +
        "<span>" + esc(p.description || "") + "</span>" +
        "</button>";
    });
    return (
      '<section class="cl-panel">' +
      "<h2>1 · Load data</h2>" +
      '<div class="cl-presets">' + cards + "</div>" +
      '<div class="cl-upload-row">' +
      '<label class="cl-upload-label">Or upload your own (CSV / JSON array, ≤ 2 MB, ≤ 5000 rows): ' +
      '<input type="file" id="cl-upload" accept=".csv,.json"></label>' +
      "</div>" +
      "</section>"
    );
  }

  function renderMessage() {
    if (!message.text) return "";
    return '<div class="cl-message cl-' + message.kind + '">' + esc(message.text) + "</div>";
  }

  function renderIssues(profile) {
    if (!profile) return "";
    let html = '<section class="cl-panel"><h2>2 · Detected issues</h2>';
    const chips = [];
    const missingTotal = profile.missing.reduce(function (s, m) {
      return s + m.missing;
    }, 0);
    chips.push(chip(missingTotal, "missing cells"));
    chips.push(chip(profile.duplicates, "exact duplicate rows"));
    if (original.idColumn) chips.push(chip(profile.idDuplicates, "repeated " + original.idColumn));
    chips.push(chip(profile.inconsistencies.length, "inconsistent columns"));
    chips.push(
      chip(
        profile.outliers.reduce(function (s, o) {
          return s + o.count;
        }, 0),
        "outlier values"
      )
    );
    html += '<div class="cl-chips">' + chips.join("") + "</div>";

    if (profile.missing.length) {
      html += "<h3>Missing values (§5.2.1)</h3><ul class='cl-issue-list'>";
      profile.missing.forEach(function (m) {
        html +=
          "<li><code>" + esc(m.column) + "</code>: " + m.missing + " missing (" +
          m.pct.toFixed(1) + "%)</li>";
      });
      html += "</ul>";
    }
    if (profile.duplicates || profile.idDuplicates) {
      html += "<h3>Duplicates (§5.2.3)</h3><ul class='cl-issue-list'>";
      if (profile.duplicates) html += "<li>" + profile.duplicates + " exact duplicate rows</li>";
      if (profile.idDuplicates && original.idColumn) {
        html += "<li>" + profile.idDuplicates + " rows repeat an existing <code>" + esc(original.idColumn) + "</code> (near-duplicates)</li>";
      }
      html += "</ul>";
    }
    if (profile.inconsistencies.length) {
      html += "<h3>Inconsistent categories (§5.2.4)</h3><ul class='cl-issue-list'>";
      profile.inconsistencies.forEach(function (inc) {
        const sample = inc.groups[0];
        html +=
          "<li><code>" + esc(inc.column) + "</code>: " + inc.groups.length +
          " value group(s) with spelling/case variants, e.g. " +
          sample.variants
            .slice(0, 3)
            .map(function (v) {
              return "<code>" + esc(JSON.stringify(v)) + "</code>";
            })
            .join(" vs ") +
          "</li>";
      });
      html += "</ul>";
    }
    if (profile.outliers.length) {
      html += "<h3>Outliers (§5.2.5, 1.5×IQR)</h3><ul class='cl-issue-list'>";
      profile.outliers.forEach(function (o) {
        html +=
          "<li><code>" + esc(o.column) + "</code>: " + o.count + " outside [" + o.lo + ", " + o.hi +
          "], e.g. " + o.examples.join(", ") + "</li>";
      });
      html += "</ul>";
    }
    const clean =
      !profile.missing.length &&
      !profile.duplicates &&
      !profile.idDuplicates &&
      !profile.inconsistencies.length &&
      !profile.outliers.length;
    if (clean) {
      html += '<p class="cl-clean">No remaining issues detected — nice work. Export your cleaned CSV below.</p>';
    }
    return html + "</section>";
  }

  function chip(n, label) {
    const cls = n > 0 ? "cl-chip cl-chip-bad" : "cl-chip cl-chip-good";
    return '<span class="' + cls + '"><strong>' + n + "</strong> " + esc(label) + "</span>";
  }

  function renderOps(rows, columns, profile) {
    const numericCols = columns.filter(function (c) {
      return Lib.isNumericColumn(rows, c);
    });
    const textCols = columns.filter(function (c) {
      return numericCols.indexOf(c) === -1;
    });
    const missingCols = profile.missing.map(function (m) {
      return m.column;
    });

    function options(cols) {
      return cols
        .map(function (c) {
          return '<option value="' + esc(c) + '">' + esc(c) + "</option>";
        })
        .join("");
    }

    let html = '<section class="cl-panel"><h2>3 · Apply fixes</h2>';

    html +=
      '<div class="cl-op"><h3>Missing values</h3>' +
      '<div class="cl-op-row">' +
      '<select id="cl-missing-col">' + options(missingCols.length ? missingCols : columns) + "</select>" +
      '<select id="cl-missing-strategy">' +
      '<option value="drop">drop rows</option>' +
      '<option value="mean">impute mean (numeric)</option>' +
      '<option value="median">impute median (numeric)</option>' +
      '<option value="mode">impute mode (categorical)</option>' +
      '<option value="flag">add missing flag column</option>' +
      "</select>" +
      '<button type="button" id="cl-missing-apply">Apply</button>' +
      "</div></div>";

    html +=
      '<div class="cl-op"><h3>Duplicates</h3>' +
      '<div class="cl-op-row">' +
      '<button type="button" id="cl-dupes-exact">Remove exact duplicates</button>' +
      '<span class="cl-or">or by key</span>' +
      '<select id="cl-dupes-key">' + options(columns) + "</select>" +
      '<button type="button" id="cl-dupes-bykey">Dedupe by key</button>' +
      "</div></div>";

    html +=
      '<div class="cl-op"><h3>Inconsistent categories</h3>' +
      '<div class="cl-op-row">' +
      '<select id="cl-norm-col">' + options(textCols.length ? textCols : columns) + "</select>" +
      '<select id="cl-norm-mode">' +
      '<option value="lower">trim + lowercase</option>' +
      '<option value="title">trim + Title Case</option>' +
      '<option value="trim">trim only</option>' +
      "</select>" +
      '<button type="button" id="cl-norm-apply">Normalize</button>' +
      "</div>" +
      '<div class="cl-op-row">' +
      '<select id="cl-replace-col">' + options(textCols.length ? textCols : columns) + "</select>" +
      '<input type="text" id="cl-replace-from" placeholder="replace value…">' +
      '<input type="text" id="cl-replace-to" placeholder="with…">' +
      '<button type="button" id="cl-replace-apply">Replace</button>' +
      "</div></div>";

    html +=
      '<div class="cl-op"><h3>Outliers (1.5×IQR)</h3>' +
      '<div class="cl-op-row">' +
      '<select id="cl-outlier-col">' + options(numericCols) + "</select>" +
      '<button type="button" id="cl-outlier-remove">Remove rows</button>' +
      '<button type="button" id="cl-outlier-cap">Cap (winsorize)</button>' +
      "</div>" +
      '<p class="cl-hint">Removing loses data; capping keeps rows but distorts tails — the trade-off from §5.3.4.</p>' +
      "</div>";

    return html + "</section>";
  }

  function renderStats(rows, columns) {
    if (!original) return "";
    const numericCols = columns.filter(function (c) {
      return Lib.isNumericColumn(rows, c);
    });
    if (!numericCols.length) return "";
    let body = "";
    numericCols.forEach(function (col) {
      const before = Lib.columnStats(original.rows, col);
      const after = Lib.columnStats(rows, col);
      if (!before && !after) return;
      body +=
        "<tr><td><code>" + esc(col) + "</code></td>" +
        statCells(before) + statCells(after) + "</tr>";
    });
    return (
      '<section class="cl-panel"><h2>Before / after (numeric)</h2>' +
      '<div class="cl-table-wrap"><table class="cl-stats">' +
      "<thead><tr><th rowspan='2'>Column</th><th colspan='3'>Original</th><th colspan='3'>Current</th></tr>" +
      "<tr><th>n</th><th>mean</th><th>min–max</th><th>n</th><th>mean</th><th>min–max</th></tr></thead>" +
      "<tbody>" + body + "</tbody></table></div>" +
      '<p class="cl-hint">Row counts: original ' + original.rows.length + " → current " + rows.length + ".</p>" +
      "</section>"
    );
  }

  function statCells(s) {
    if (!s) return "<td>–</td><td>–</td><td>–</td>";
    return "<td>" + s.count + "</td><td>" + s.mean + "</td><td>" + s.min + " – " + s.max + "</td>";
  }

  function renderChangeLog() {
    if (!original) return "";
    let items = "";
    steps.forEach(function (s, i) {
      items += "<li><span class='cl-step-num'>" + (i + 1) + "</span> " + esc(s.log) + "</li>";
    });
    return (
      '<section class="cl-panel"><h2>Change log</h2>' +
      (steps.length
        ? "<ol class='cl-log'>" + items + "</ol>"
        : '<p class="cl-hint">No operations applied yet. Each fix you apply is recorded here.</p>') +
      '<div class="cl-op-row">' +
      '<button type="button" id="cl-undo"' + (steps.length ? "" : " disabled") + ">Undo last step</button>" +
      '<button type="button" id="cl-reset"' + (steps.length ? "" : " disabled") + ">Reset to original</button>" +
      "</div></section>"
    );
  }

  function renderCharts(rows, columns) {
    if (!original || !chartColumn) return "";
    const isNumeric = Lib.isNumericColumn(rows, chartColumn);
    const kind = isNumeric ? "numeric histogram" : "category frequencies";
    let opts = "";
    columns.forEach(function (c) {
      const sel = c === chartColumn ? " selected" : "";
      const tag = Lib.isNumericColumn(rows, c) ? " (#)" : "";
      opts += '<option value="' + esc(c) + '"' + sel + ">" + esc(c + tag) + "</option>";
    });
    return (
      '<section class="cl-panel"><h2>Distribution compare</h2>' +
      '<div class="cl-op-row">' +
      '<label>Column <select id="cl-chart-col">' + opts + "</select></label>" +
      '<span class="cl-hint cl-chart-kind">' + esc(kind) + " · gray = original, teal = current</span>" +
      "</div>" +
      '<div class="cl-chart-wrap">' +
      '<canvas id="cl-dist-canvas" width="720" height="340" role="img" aria-label="Before and after distribution chart with labeled axes"></canvas>' +
      "</div>" +
      '<p class="cl-hint">Watch how imputation, normalization, and outlier fixes reshape the distribution — not just the row count.</p>' +
      "</section>"
    );
  }

  function drawCharts() {
    const Charts = window.CleaningCharts;
    const canvas = document.getElementById("cl-dist-canvas");
    if (!Charts || !canvas || !original || !chartColumn) return;

    const beforeRows = original.rows;
    const afterRows = currentRows();
    const isNumeric = Lib.isNumericColumn(afterRows, chartColumn);
    canvas.setAttribute(
      "aria-label",
      (isNumeric ? "Histogram" : "Category frequency chart") +
        " comparing original and current values for " +
        chartColumn,
    );

    if (isNumeric) {
      // Always use shared bin edges so bar positions mean the same before and after.
      const merged = mergeHistogramBins(beforeRows, afterRows, chartColumn, 12);
      Charts.drawHistogramCompare(canvas, merged.before, merged.after, chartColumn);
      return;
    }

    const before = Lib.categoryCounts(beforeRows, chartColumn, 12);
    const after = Lib.categoryCounts(afterRows, chartColumn, 12);
    Charts.drawCategoryCompare(canvas, before, after, chartColumn);
  }

  /** Align histogram bins on shared min/max so before/after are comparable. */
  function mergeHistogramBins(beforeRows, afterRows, col, binCount) {
    const nums = [];
    beforeRows.forEach(function (r) {
      const n = Lib.toNumber(r[col]);
      if (n !== null) nums.push(n);
    });
    afterRows.forEach(function (r) {
      const n = Lib.toNumber(r[col]);
      if (n !== null) nums.push(n);
    });
    if (!nums.length) return { before: null, after: null };
    const min = Math.min.apply(null, nums);
    const max = Math.max.apply(null, nums);
    const bins = binCount || 12;
    if (min === max) {
      return {
        before: { min: min, max: max, bins: [{ lo: min, hi: max, count: beforeRows.length }] },
        after: { min: min, max: max, bins: [{ lo: min, hi: max, count: afterRows.length }] },
      };
    }
    const width = (max - min) / bins;
    function countRows(rows) {
      const counts = new Array(bins).fill(0);
      rows.forEach(function (r) {
        const n = Lib.toNumber(r[col]);
        if (n === null) return;
        let idx = Math.floor((n - min) / width);
        if (idx >= bins) idx = bins - 1;
        counts[idx] += 1;
      });
      return counts.map(function (count, i) {
        return { lo: min + i * width, hi: min + (i + 1) * width, count: count };
      });
    }
    return {
      before: { min: min, max: max, bins: countRows(beforeRows) },
      after: { min: min, max: max, bins: countRows(afterRows) },
    };
  }

  function renderPreview(rows, columns) {
    const issueMap = Lib.buildIssueMap(rows, columns, original.idColumn);
    const indexed = rows.map(function (r, i) {
      return { row: r, index: i };
    });
    const filtered = indexed.filter(function (item) {
      return Lib.rowMatchesFilter(issueMap.rowFlags[item.index], rowFilter);
    });
    const limit = rowFilter === "all" ? 12 : 50;
    const shown = filtered.slice(0, limit);

    const filters = [
      ["all", "All rows"],
      ["any", "Any issue"],
      ["missing", "Missing"],
      ["duplicate", "Duplicates"],
      ["inconsistent", "Inconsistent"],
      ["outlier", "Outliers"],
    ];
    let filterBtns = "";
    filters.forEach(function (pair) {
      const active = rowFilter === pair[0] ? " cl-filter-active" : "";
      filterBtns +=
        '<button type="button" class="cl-filter' + active + '" data-filter="' + pair[0] + '">' +
        esc(pair[1]) + "</button>";
    });

    let head = "<th>#</th><th>Flags</th>";
    columns.forEach(function (c) {
      head += "<th>" + esc(c) + "</th>";
    });

    let body = "";
    if (!shown.length) {
      body =
        '<tr><td colspan="' + (columns.length + 2) + '" class="cl-empty">No rows match this filter.</td></tr>';
    } else {
      shown.forEach(function (item) {
        const flags = issueMap.rowFlags[item.index];
        const rowCls = flags.length ? ' class="cl-row-flagged"' : "";
        let flagHtml = flags.length
          ? flags
              .map(function (f) {
                return '<span class="cl-flag cl-flag-' + f + '">' + esc(f) + "</span>";
              })
              .join(" ")
          : '<span class="cl-flag-none">—</span>';
        body += "<tr" + rowCls + ">";
        body += "<td>" + (item.index + 1) + "</td>";
        body += "<td>" + flagHtml + "</td>";
        columns.forEach(function (c) {
          const v = item.row[c];
          const issue = issueMap.cellIssues[item.index + ":" + c];
          const title = issue ? ' title="' + esc(issue.reason) + '"' : "";
          body +=
            "<td" + title + cellClass(issue) + ">" + cellContent(v, issue) + "</td>";
        });
        body += "</tr>";
      });
    }

    const legend =
      '<span class="cl-legend"><span class="cl-legend-swatch cl-cell-missing"></span>missing</span>' +
      '<span class="cl-legend"><span class="cl-legend-swatch cl-cell-duplicate"></span>duplicate</span>' +
      '<span class="cl-legend"><span class="cl-legend-swatch cl-cell-inconsistent"></span>inconsistent</span>' +
      '<span class="cl-legend"><span class="cl-legend-swatch cl-cell-outlier"></span>outlier</span>';

    return (
      '<section class="cl-panel"><h2>Row preview &amp; highlighting</h2>' +
      '<div class="cl-filter-row">' + filterBtns + "</div>" +
      '<p class="cl-hint">Showing ' + shown.length + " of " + filtered.length +
      " matching rows (total " + rows.length + "). Hover a highlighted cell for why it was flagged. " +
      legend +
      "</p>" +
      '<div class="cl-table-wrap"><table class="cl-preview"><thead><tr>' + head + "</tr></thead>" +
      "<tbody>" + body + "</tbody></table></div>" +
      "</section>"
    );
  }

  function renderExport() {
    return (
      '<section class="cl-panel"><h2>4 · Export</h2>' +
      '<div class="cl-op-row">' +
      '<button type="button" id="cl-export-csv" class="cl-primary">Download cleaned CSV</button>' +
      '<button type="button" id="cl-export-log">Download change log (JSON)</button>' +
      '<button type="button" id="cl-send-scale" class="cl-primary">Send to scaling / encoding</button>' +
      "</div>" +
      '<p class="cl-hint">The change log is your audit trail — good practice from §5.6 (document every transformation). ' +
      "Next in the workflow: scale and encode features before splitting.</p>" +
      "</section>"
    );
  }

  /* ---------- events ---------- */
  function on(id, event, handler) {
    const el = document.getElementById(id);
    if (el) el.addEventListener(event, handler);
  }

  function val(id) {
    const el = document.getElementById(id);
    return el ? el.value : "";
  }

  function bindEvents() {
    root.querySelectorAll("[data-preset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadPreset(btn.getAttribute("data-preset"));
      });
    });
    on("cl-upload", "change", onFileUpload);
    on("cl-undo", "click", undoStep);
    on("cl-reset", "click", resetAll);
    on("cl-export-csv", "click", exportCsv);
    on("cl-export-log", "click", exportLog);
    on("cl-send-scale", "click", function () {
      if (!original || !window.DatasetToolsHandoff) {
        showMessage("Handoff helper missing.", "error");
        renderAll();
        return;
      }
      const rows = currentRows();
      const columns = currentColumns();
      try {
        window.DatasetToolsHandoff.writeTable(
          "cleaning",
          {
            name: original.source || "cleaned",
            columns: columns,
            rows: rows,
          },
          { from: "cleaning" }
        );
        window.location.href = "../scaling-encoding/index.html?from=cleaning";
      } catch (err) {
        showMessage(err.message || String(err), "error");
        renderAll();
      }
    });

    root.querySelectorAll("[data-filter]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        rowFilter = btn.getAttribute("data-filter") || "all";
        renderAll();
      });
    });
    on("cl-chart-col", "change", function () {
      chartColumn = val("cl-chart-col");
      renderAll();
    });

    on("cl-missing-apply", "click", function () {
      const col = val("cl-missing-col");
      const strategy = val("cl-missing-strategy");
      applyOp(function (rows) {
        if (strategy === "drop") return Lib.ops.dropMissingRows(rows, col);
        if (strategy === "mean") return Lib.ops.imputeNumeric(rows, col, "mean");
        if (strategy === "median") return Lib.ops.imputeNumeric(rows, col, "median");
        if (strategy === "mode") return Lib.ops.imputeMode(rows, col);
        return Lib.ops.flagMissing(rows, col);
      });
    });

    on("cl-dupes-exact", "click", function () {
      applyOp(function (rows) {
        return Lib.ops.dropExactDuplicates(rows);
      });
    });
    on("cl-dupes-bykey", "click", function () {
      const col = val("cl-dupes-key");
      applyOp(function (rows) {
        return Lib.ops.dropDuplicatesByKey(rows, col);
      });
    });

    on("cl-norm-apply", "click", function () {
      const col = val("cl-norm-col");
      const mode = val("cl-norm-mode");
      applyOp(function (rows) {
        return Lib.ops.normalizeText(rows, col, mode);
      });
    });
    on("cl-replace-apply", "click", function () {
      const col = val("cl-replace-col");
      const from = val("cl-replace-from");
      const to = val("cl-replace-to");
      if (!from) {
        showMessage("Enter the value to replace.", "warn");
        renderAll();
        return;
      }
      applyOp(function (rows) {
        return Lib.ops.replaceValue(rows, col, from, to);
      });
    });

    on("cl-outlier-remove", "click", function () {
      const col = val("cl-outlier-col");
      applyOp(function (rows) {
        return Lib.ops.removeOutliers(rows, col);
      });
    });
    on("cl-outlier-cap", "click", function () {
      const col = val("cl-outlier-col");
      applyOp(function (rows) {
        return Lib.ops.capOutliers(rows, col);
      });
    });
  }

  tryHandoffFromUpstream();
  if (window.DatasetToolsReport) {
    window.DatasetToolsReport.registerRedraw(function () {
      if (original) drawCharts();
    });
  }
  renderAll();
})();
