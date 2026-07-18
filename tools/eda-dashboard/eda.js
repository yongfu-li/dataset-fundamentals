/* EDA dashboard — unified Ch.1 + Ch.6 exploration (classic script, file:// safe). */
(function () {
  "use strict";
  const Lib = window.EdaLib;
  const Charts = window.EdaCharts;
  const Handoff = window.DatasetToolsHandoff;
  if (!Lib || !Charts) {
    console.error("EdaLib/EdaCharts missing. Check lib/*.js load order.");
    return;
  }

  let session = null;
  let viewRows = [];
  let message = { text: "", kind: "" };
  let uniCol = null;
  let uniChart = "hist"; // hist | box
  let scatterX = null;
  let scatterY = null;
  let groupCol = null;
  let groupVal = null;
  let groupAgg = "mean";
  let filterRules = []; // [{ id, column, op, value }]
  let nextFilterId = 1;
  let findings = "";
  let controlZ = null;
  let controlOn = false;

  const TOC = [
    { id: "eda-sec-load", label: "Load" },
    { id: "eda-sec-filter", label: "Filter" },
    { id: "eda-sec-schema", label: "Schema" },
    { id: "eda-sec-summary", label: "Summaries" },
    { id: "eda-sec-uni", label: "Univariate" },
    { id: "eda-sec-group", label: "Group-by" },
    { id: "eda-sec-scatter", label: "Scatter" },
    { id: "eda-sec-corr", label: "Correlation" },
    { id: "eda-sec-control", label: "Control-for" },
    { id: "eda-sec-preview", label: "Preview" },
    { id: "eda-sec-issues", label: "Issues" },
    { id: "eda-sec-findings", label: "Findings" },
    { id: "eda-sec-export", label: "Export" },
  ];

  const FINDING_STEMS = [
    {
      id: "skew",
      label: "Skew",
      text: "Distribution of ___ looks right-skewed (mean > median).",
    },
    {
      id: "missing",
      label: "Missing",
      text: "Missingness is concentrated in ___.",
    },
    {
      id: "corr",
      label: "Correlation",
      text: "r(___, ___) ≈ ___ — treat as a hypothesis, not causation.",
    },
    {
      id: "confound",
      label: "Confounder",
      text: "After controlling for ___, the association between ___ and ___ shrinks — possible confounding.",
    },
    {
      id: "outlier",
      label: "Outliers",
      text: "IQR outliers appear in ___ (check before modeling).",
    },
  ];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
  }

  function applyFilters() {
    if (!session) {
      viewRows = [];
      return;
    }
    const filters = filterRules
      .filter(function (f) {
        return f.column && f.value !== "" && f.value != null;
      })
      .map(function (f) {
        return { column: f.column, op: f.op || "eq", value: f.value };
      });
    viewRows = Lib.filterRows(session.rows, filters);
  }

  function isIdName(col) {
    const name = String(col).toLowerCase().replace(/\s+/g, "_");
    return (
      name === "id" ||
      name.endsWith("_id") ||
      name === "index" ||
      name === "pk" ||
      name === "rowid" ||
      name === "row_id" ||
      name === "day"
    );
  }

  function isAllUnique(col, rows) {
    const seen = new Set();
    rows.forEach(function (r) {
      if (!Lib.isMissing(r[col])) seen.add(String(r[col]));
    });
    return seen.size === rows.length && rows.length > 1;
  }

  function preferNamed(cands, names) {
    for (let i = 0; i < names.length; i += 1) {
      const want = names[i];
      for (let j = 0; j < cands.length; j += 1) {
        if (String(cands[j]).toLowerCase() === want) return cands[j];
      }
    }
    return null;
  }

  function pickDefaults() {
    if (!session) return;
    const cols = session.columns;
    const numeric = cols.filter(function (c) {
      return Lib.isNumericColumn(session.rows, c);
    });
    const withoutIdName = numeric.filter(function (c) {
      return !isIdName(c);
    });
    const withVariation = withoutIdName.filter(function (c) {
      return !isAllUnique(c, session.rows);
    });
    // Univariate: prefer non-unique columns; scatter/control: use all non-ID numerics
    // so pedagogically named columns (e.g. ice_cream_sales) are not dropped when unique.
    const plotNumeric = withVariation.length
      ? withVariation
      : withoutIdName.length
        ? withoutIdName
        : numeric;
    const pairNumeric = withoutIdName.length ? withoutIdName : numeric;
    const cats = cols.filter(function (c) {
      return !Lib.isNumericColumn(session.rows, c);
    });
    uniCol = uniCol && cols.indexOf(uniCol) !== -1 ? uniCol : plotNumeric[0] || cats[0] || cols[0];
    const prefX = preferNamed(pairNumeric, ["income", "ice_cream_sales", "x"]);
    const prefY = preferNamed(
      pairNumeric.filter(function (c) {
        return c !== (prefX || scatterX);
      }),
      ["spend", "drownings", "y"]
    );
    scatterX =
      scatterX && pairNumeric.indexOf(scatterX) !== -1
        ? scatterX
        : prefX || pairNumeric[0] || null;
    scatterY =
      scatterY && pairNumeric.indexOf(scatterY) !== -1 && scatterY !== scatterX
        ? scatterY
        : prefY ||
          pairNumeric.find(function (c) {
            return c !== scatterX;
          }) ||
          pairNumeric[0] ||
          null;
    groupCol = groupCol && cats.indexOf(groupCol) !== -1 ? groupCol : cats[0] || null;
    groupVal =
      groupVal && pairNumeric.indexOf(groupVal) !== -1 ? groupVal : plotNumeric[0] || pairNumeric[0] || null;
    const prefZ = preferNamed(
      pairNumeric.filter(function (c) {
        return c !== scatterX && c !== scatterY;
      }),
      ["temperature_c", "temp", "age"]
    );
    controlZ =
      controlZ && pairNumeric.indexOf(controlZ) !== -1
        ? controlZ
        : prefZ ||
          pairNumeric.find(function (c) {
            return c !== scatterX && c !== scatterY;
          }) ||
          null;
    if (!filterRules.length && cats.length) {
      filterRules = [{ id: nextFilterId++, column: cats[0], op: "eq", value: "" }];
    }
  }

  function resetViewState() {
    filterRules = [];
    findings = "";
    uniChart = "hist";
    controlOn = false;
    uniCol = scatterX = scatterY = groupCol = groupVal = controlZ = null;
  }

  function loadPreset(id) {
    try {
      session = Lib.loadPreset(id);
      resetViewState();
      pickDefaults();
      applyFilters();
      if (session.id === "confounder-icecream") {
        controlOn = true;
        scatterX = "ice_cream_sales";
        scatterY = "drownings";
        controlZ = "temperature_c";
        uniCol = "ice_cream_sales";
      }
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
          bookAnchors: ["§1.4", "§6.1"],
          teachingFocus: "user-upload",
          rows: data.rows,
          columns: data.columns,
          source: data.source,
        };
        resetViewState();
        pickDefaults();
        applyFilters();
        showMessage("Loaded '" + file.name + "' (" + data.rows.length + " rows).", "ok");
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

  const root = document.getElementById("eda-root");
  if (!root) return;

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderGuide() +
      (session ? renderToc() : "") +
      renderLoader() +
      renderMessage() +
      (session ? renderWorkspace() : "");
    bindEvents();
    if (session) drawCharts();
  }

  function renderIntro() {
    return (
      '<section class="eda-intro">' +
      "<h1>EDA dashboard</h1>" +
      '<p class="lead">One continuous exploration workspace spanning book Chapters 1 and 6: ' +
      "schema, missingness, and summaries; then filter, group-by, scatter, and Pearson correlations. " +
      "Generate hypotheses from plots; do not treat charts as confirmation.</p>" +
      '<p class="eda-cross">Found defects? Send the table to the ' +
      '<a href="../cleaning/index.html">cleaning workbench</a>, then re-explore.</p>' +
      "</section>"
    );
  }

  function renderGuide() {
    return (
      '<details class="eda-panel eda-guide">' +
      "<summary>Learn → apply with your data</summary>" +
      "<ol>" +
      "<li><strong>Learn</strong> — household (skew) → healthcare (missing) → retail (multi-column) → ice cream (confounder).</li>" +
      "<li><strong>Explore</strong> — use the jump list; filter → profile → plots → control-for → issues → findings.</li>" +
      "<li><strong>Apply</strong> — upload CSV/JSON (≤ 5,000 rows, 2 MB); export or send to cleaning.</li>" +
      "</ol>" +
      '<p class="eda-hint">Strong correlation ≠ causation. Use findings stems for hypotheses only.</p>' +
      "</details>"
    );
  }

  function renderToc() {
    let links = "";
    TOC.forEach(function (t) {
      links += '<a href="#' + t.id + '">' + esc(t.label) + "</a>";
    });
    return '<nav class="eda-toc" aria-label="Jump to section">' + links + "</nav>";
  }

  function renderLoader() {
    const presets = Lib.listPresets();
    let cards = "";
    presets.forEach(function (p) {
      const active = session && session.name === p.name ? " eda-preset-active" : "";
      cards +=
        '<button type="button" class="eda-preset' +
        active +
        '" data-preset="' +
        esc(p.id) +
        '"><strong>' +
        esc(p.title || p.name) +
        "</strong><span>" +
        esc(p.description) +
        "</span></button>";
    });
    return (
      '<section class="eda-panel" id="eda-sec-load">' +
      "<h2>1 · Load data</h2>" +
      '<div class="eda-presets">' +
      cards +
      "</div>" +
      '<label class="eda-upload">Upload CSV/JSON (≤ 2 MB, 5,000 rows)' +
      '<input type="file" id="eda-upload" accept=".csv,.json,text/csv,application/json"></label>' +
      "</section>"
    );
  }

  function renderMessage() {
    if (!message.text) return "";
    return (
      '<div class="eda-message eda-' +
      esc(message.kind) +
      '" role="status">' +
      esc(message.text) +
      "</div>"
    );
  }

  function renderWorkspace() {
    return (
      '<section class="eda-panel eda-status">' +
      "<h2>2 · Loaded table</h2>" +
      "<p><strong>" +
      esc(session.title || session.name) +
      "</strong> · " +
      viewRows.length +
      " / " +
      session.rows.length +
      " rows shown · " +
      session.columns.length +
      " columns</p>" +
      (session.teachingFocus
        ? '<p class="eda-hint">' + esc(session.teachingFocus) + "</p>"
        : "") +
      "</section>" +
      renderFilter() +
      renderProfile() +
      renderUnivariate() +
      renderGroupBy() +
      renderScatter() +
      renderCorrelation() +
      renderControlFor() +
      renderPreview() +
      renderIssues() +
      renderFindings() +
      renderExport()
    );
  }

  function colOptions(selected, pred) {
    let html = "";
    session.columns.forEach(function (c) {
      if (pred && !pred(c)) return;
      html +=
        '<option value="' +
        esc(c) +
        '"' +
        (selected === c ? " selected" : "") +
        ">" +
        esc(c) +
        "</option>";
    });
    return html;
  }

  function defaultOpFor(col) {
    return Lib.isNumericColumn(session.rows, col) ? "gte" : "eq";
  }

  function renderFilter() {
    let rowsHtml = "";
    filterRules.forEach(function (f, idx) {
      const numeric = f.column && Lib.isNumericColumn(session.rows, f.column);
      const op = f.op || defaultOpFor(f.column);
      let valueControl = "";
      if (numeric) {
        valueControl =
          '<label>Value<input type="number" step="any" data-filter-value="' +
          f.id +
          '" value="' +
          esc(f.value) +
          '" placeholder="e.g. 40"></label>';
      } else {
        const choices = f.column ? Lib.categoryCounts(session.rows, f.column, 40) : [];
        let opts = '<option value="">— any —</option>';
        choices.forEach(function (it) {
          opts +=
            '<option value="' +
            esc(it.label) +
            '"' +
            (String(f.value) === String(it.label) ? " selected" : "") +
            ">" +
            esc(it.label) +
            " (" +
            it.count +
            ")</option>";
        });
        valueControl =
          '<label>Value<select data-filter-value="' + f.id + '">' + opts + "</select></label>";
      }
      rowsHtml +=
        '<div class="eda-filter-row" data-filter-id="' +
        f.id +
        '">' +
        "<span class=\"eda-filter-idx\">" +
        (idx + 1) +
        "</span>" +
        '<label>Column<select data-filter-col="' +
        f.id +
        '">' +
        colOptions(f.column) +
        "</select></label>" +
        '<label>Op<select data-filter-op="' +
        f.id +
        '">' +
        '<option value="eq"' +
        (op === "eq" ? " selected" : "") +
        ">=</option>" +
        '<option value="contains"' +
        (op === "contains" ? " selected" : "") +
        ">contains</option>" +
        '<option value="gte"' +
        (op === "gte" ? " selected" : "") +
        ">&ge;</option>" +
        '<option value="lte"' +
        (op === "lte" ? " selected" : "") +
        ">&le;</option>" +
        "</select></label>" +
        valueControl +
        '<button type="button" class="btn btn-secondary" data-filter-remove="' +
        f.id +
        '">Remove</button>' +
        "</div>";
    });
    if (!rowsHtml) {
      rowsHtml = '<p class="eda-hint">No filters yet — add one to subset rows.</p>';
    }
    return (
      '<section class="eda-panel" id="eda-sec-filter">' +
      "<h2>3 · Filter rows</h2>" +
      '<div class="eda-filter-list">' +
      rowsHtml +
      "</div>" +
      '<p class="eda-actions">' +
      '<button type="button" class="btn btn-secondary" id="eda-filter-add">Add filter</button> ' +
      '<button type="button" class="btn btn-secondary" id="eda-filter-clear">Clear all</button>' +
      "</p>" +
      '<p class="eda-hint">Showing ' +
      viewRows.length +
      " of " +
      session.rows.length +
      " rows (AND across rules; applies below).</p>" +
      "</section>"
    );
  }

  function renderProfile() {
    const schema = Lib.schemaTable(viewRows, session.columns);
    let schemaRows = "";
    schema.forEach(function (s) {
      schemaRows +=
        "<tr><td><code>" +
        esc(s.column) +
        "</code></td><td>" +
        esc(s.inferredType) +
        "</td><td>" +
        s.nonNull +
        "</td><td>" +
        s.missing +
        " (" +
        s.missingPct +
        "%)</td></tr>";
    });
    const missing = Lib.missingProfile(viewRows, session.columns);
    let missHtml = missing.length
      ? "<ul>" +
        missing
          .map(function (m) {
            return (
              "<li><code>" +
              esc(m.column) +
              "</code>: " +
              m.missing +
              " (" +
              m.missingPct +
              "%)</li>"
            );
          })
          .join("") +
        "</ul>"
      : "<p>No missing values in the current view.</p>";

    let statsHtml = "";
    session.columns.forEach(function (c) {
      if (!Lib.isNumericColumn(viewRows, c)) return;
      const st = Lib.columnStats(viewRows, c);
      if (!st) return;
      statsHtml +=
        "<tr><td><code>" +
        esc(c) +
        "</code></td><td>" +
        st.count +
        "</td><td>" +
        st.mean +
        "</td><td>" +
        st.median +
        "</td><td>" +
        st.q1 +
        "–" +
        st.q3 +
        "</td><td>" +
        st.sd +
        "</td><td>" +
        st.min +
        "–" +
        st.max +
        "</td><td>" +
        esc(st.skewHint) +
        "</td></tr>";
    });
    if (!statsHtml) statsHtml = '<tr><td colspan="8">No numeric columns.</td></tr>';

    return (
      '<section class="eda-panel" id="eda-sec-schema">' +
      "<h2>4 · Schema &amp; completeness</h2>" +
      '<div class="eda-table-wrap"><table class="eda-table"><thead><tr><th>Column</th><th>Type</th><th>Non-null</th><th>Missing</th></tr></thead><tbody>' +
      schemaRows +
      "</tbody></table></div>" +
      "<h3>Missingness</h3>" +
      missHtml +
      "</section>" +
      '<section class="eda-panel" id="eda-sec-summary">' +
      "<h2>5 · Numeric summaries</h2>" +
      '<div class="eda-table-wrap"><table class="eda-table"><thead><tr><th>Column</th><th>n</th><th>Mean</th><th>Median</th><th>IQR (Q1–Q3)</th><th>SD</th><th>Min–Max</th><th>Shape hint</th></tr></thead><tbody>' +
      statsHtml +
      "</tbody></table></div>" +
      "</section>"
    );
  }

  function renderUnivariate() {
    const numeric = uniCol && Lib.isNumericColumn(viewRows, uniCol);
    return (
      '<section class="eda-panel" id="eda-sec-uni">' +
      "<h2>6 · Univariate plot</h2>" +
      '<div class="eda-controls">' +
      '<label>Column<select id="eda-uni-col">' +
      colOptions(uniCol) +
      "</select></label>" +
      (numeric
        ? '<label>Chart<select id="eda-uni-chart">' +
          '<option value="hist"' +
          (uniChart === "hist" ? " selected" : "") +
          ">Histogram</option>" +
          '<option value="box"' +
          (uniChart === "box" ? " selected" : "") +
          ">Box plot (IQR)</option>" +
          "</select></label>"
        : "") +
      "</div>" +
      '<canvas id="eda-uni-canvas" width="560" height="240" role="img" aria-label="Univariate chart"></canvas>' +
      "</section>"
    );
  }

  function renderGroupBy() {
    const cats = session.columns.filter(function (c) {
      return !Lib.isNumericColumn(session.rows, c);
    });
    const nums = session.columns.filter(function (c) {
      return Lib.isNumericColumn(session.rows, c) && !isIdName(c);
    });
    if (!cats.length || !nums.length) {
      return (
        '<section class="eda-panel" id="eda-sec-group">' +
        "<h2>7 · Group-by</h2>" +
        '<p class="eda-hint">Need at least one categorical and one numeric column.</p>' +
        "</section>"
      );
    }
    return (
      '<section class="eda-panel" id="eda-sec-group">' +
      "<h2>7 · Group-by</h2>" +
      '<div class="eda-controls">' +
      '<label>Group<select id="eda-group-col">' +
      colOptions(groupCol, function (c) {
        return !Lib.isNumericColumn(session.rows, c);
      }) +
      "</select></label>" +
      '<label>Value<select id="eda-group-val">' +
      colOptions(groupVal, function (c) {
        return Lib.isNumericColumn(session.rows, c);
      }) +
      "</select></label>" +
      '<label>Agg<select id="eda-group-agg">' +
      ["mean", "sum", "min", "max", "count"]
        .map(function (a) {
          return (
            '<option value="' +
            a +
            '"' +
            (groupAgg === a ? " selected" : "") +
            ">" +
            a +
            "</option>"
          );
        })
        .join("") +
      "</select></label>" +
      "</div>" +
      '<canvas id="eda-group-canvas" width="560" height="260" role="img" aria-label="Group-by chart"></canvas>' +
      "</section>"
    );
  }

  function renderScatter() {
    const plotNums = session.columns.filter(function (c) {
      return Lib.isNumericColumn(session.rows, c) && !isIdName(c);
    });
    if (plotNums.length < 2) {
      return (
        '<section class="eda-panel" id="eda-sec-scatter">' +
        "<h2>8 · Scatter (bivariate)</h2>" +
        '<p class="eda-hint">Need at least two non-ID numeric columns (try retail or ice cream).</p>' +
        "</section>"
      );
    }
    return (
      '<section class="eda-panel" id="eda-sec-scatter">' +
      "<h2>8 · Scatter (bivariate)</h2>" +
      '<div class="eda-controls">' +
      '<label>X<select id="eda-scatter-x">' +
      colOptions(scatterX, function (c) {
        return Lib.isNumericColumn(session.rows, c) && !isIdName(c);
      }) +
      "</select></label>" +
      '<label>Y<select id="eda-scatter-y">' +
      colOptions(scatterY, function (c) {
        return Lib.isNumericColumn(session.rows, c) && !isIdName(c);
      }) +
      "</select></label>" +
      "</div>" +
      '<canvas id="eda-scatter-canvas" width="560" height="280" role="img" aria-label="Scatter plot"></canvas>' +
      "</section>"
    );
  }

  function renderCorrelation() {
    return (
      '<section class="eda-panel" id="eda-sec-corr">' +
      "<h2>9 · Correlation heatmap</h2>" +
      '<p class="eda-hint">Pearson r on up to 8 numeric columns. Correlation is not causation.</p>' +
      '<canvas id="eda-corr-canvas" width="480" height="400" role="img" aria-label="Correlation heatmap"></canvas>' +
      "</section>"
    );
  }

  function renderControlFor() {
    const plotNums = session.columns.filter(function (c) {
      return Lib.isNumericColumn(session.rows, c) && !isIdName(c);
    });
    if (plotNums.length < 3 || !scatterX || !scatterY) {
      return (
        '<section class="eda-panel" id="eda-sec-control">' +
        "<h2>10 · Control-for (confounder check)</h2>" +
        '<p class="eda-hint">Need three numeric columns — load <code>confounder-icecream</code> or retail.</p>' +
        "</section>"
      );
    }
    const rawPairs = Lib.scatterPairs(viewRows, scatterX, scatterY);
    const rawR = Lib.pearson(
      rawPairs.map(function (p) {
        return p.x;
      }),
      rawPairs.map(function (p) {
        return p.y;
      })
    );
    const partial =
      controlOn && controlZ ? Lib.partialPearson(viewRows, scatterX, scatterY, controlZ) : null;
    return (
      '<section class="eda-panel" id="eda-sec-control">' +
      "<h2>10 · Control-for (confounder check)</h2>" +
      '<p class="eda-hint">Compare raw Pearson r(' +
      esc(scatterX) +
      ", " +
      esc(scatterY) +
      ") with the partial correlation after residualizing on a third variable.</p>" +
      '<div class="eda-controls">' +
      '<label>Control for (Z)<select id="eda-control-z">' +
      colOptions(controlZ, function (c) {
        return Lib.isNumericColumn(session.rows, c) && !isIdName(c) && c !== scatterX && c !== scatterY;
      }) +
      "</select></label>" +
      '<label class="eda-check"><input type="checkbox" id="eda-control-on"' +
      (controlOn ? " checked" : "") +
      "> Show partial r (control for Z)</label>" +
      "</div>" +
      '<div class="eda-corr-compare">' +
      "<p><strong>Raw r</strong> = " +
      (rawR == null ? "n/a" : rawR) +
      "</p>" +
      "<p><strong>Partial r</strong> (control for " +
      esc(controlZ || "—") +
      ") = " +
      (controlOn ? (partial == null ? "n/a" : partial) : "— (toggle on)") +
      "</p>" +
      "</div>" +
      (controlOn && rawR != null && partial != null && Math.abs(rawR) - Math.abs(partial) > 0.15
        ? '<p class="eda-warn-inline">Partial |r| is much smaller — the raw association may be spurious.</p>'
        : "") +
      "</section>"
    );
  }

  function renderPreview() {
    let preview = "<tr>";
    session.columns.forEach(function (c) {
      preview += "<th>" + esc(c) + "</th>";
    });
    preview += "</tr>";
    viewRows.slice(0, 8).forEach(function (r) {
      preview += "<tr>";
      session.columns.forEach(function (c) {
        preview += "<td>" + esc(r[c]) + "</td>";
      });
      preview += "</tr>";
    });
    return (
      '<section class="eda-panel" id="eda-sec-preview">' +
      "<h2>11 · Row preview</h2>" +
      '<div class="eda-table-wrap"><table class="eda-table eda-preview">' +
      preview +
      "</table></div>" +
      "</section>"
    );
  }

  function renderIssues() {
    const iss = Lib.issueSummary(viewRows, session.columns);
    let miss = iss.missing.length
      ? iss.missing
          .map(function (m) {
            return "<li><code>" + esc(m.column) + "</code>: " + m.missing + "</li>";
          })
          .join("")
      : "<li>None</li>";
    let out = iss.outliers.length
      ? iss.outliers
          .map(function (o) {
            return (
              "<li><code>" +
              esc(o.column) +
              "</code>: " +
              o.count +
              " outside [" +
              o.lo +
              ", " +
              o.hi +
              "]</li>"
            );
          })
          .join("")
      : "<li>None (or too few points for IQR)</li>";
    let inc = iss.inconsistencies.length
      ? iss.inconsistencies
          .map(function (g) {
            return (
              "<li><code>" +
              esc(g.column) +
              "</code>: " +
              g.groups.length +
              " variant group(s)</li>"
            );
          })
          .join("")
      : "<li>None</li>";
    return (
      '<section class="eda-panel" id="eda-sec-issues">' +
      "<h2>12 · Quality checklist</h2>" +
      "<p>Detection only — send the table to cleaning to repair, then reload.</p>" +
      "<h3>Missing values</h3><ul>" +
      miss +
      "</ul>" +
      "<h3>Duplicate rows (extra copies)</h3><p>" +
      iss.duplicates +
      "</p>" +
      "<h3>Category inconsistencies</h3><ul>" +
      inc +
      "</ul>" +
      "<h3>IQR outliers</h3><ul>" +
      out +
      "</ul>" +
      "</section>"
    );
  }

  function renderFindings() {
    let stems = "";
    FINDING_STEMS.forEach(function (s) {
      stems +=
        '<button type="button" class="eda-stem" data-stem="' +
        esc(s.id) +
        '">' +
        esc(s.label) +
        "</button>";
    });
    return (
      '<section class="eda-panel" id="eda-sec-findings">' +
      "<h2>13 · Findings notes</h2>" +
      '<p class="eda-hint">Click a stem to append a hypothesis template, then fill in the blanks.</p>' +
      '<div class="eda-stems">' +
      stems +
      "</div>" +
      '<textarea id="eda-findings" rows="5" placeholder="What looks surprising? Hypotheses only — not conclusions.">' +
      esc(findings) +
      "</textarea>" +
      "</section>"
    );
  }

  function renderExport() {
    return (
      '<section class="eda-panel" id="eda-sec-export">' +
      "<h2>14 · Export &amp; handoff</h2>" +
      "<p>Download a summary / findings, or send the current view to the cleaning workbench.</p>" +
      '<p class="eda-actions">' +
      '<button type="button" class="btn" id="eda-export-json">Download eda-summary.json</button> ' +
      '<button type="button" class="btn btn-secondary" id="eda-export-md">Download eda-findings.md</button> ' +
      '<button type="button" class="btn" id="eda-send-cleaning">Send to cleaning workbench</button>' +
      "</p>" +
      "</section>"
    );
  }

  function drawCharts() {
    const canvas = document.getElementById("eda-uni-canvas");
    if (canvas && uniCol) {
      if (Lib.isNumericColumn(viewRows, uniCol)) {
        if (uniChart === "box") {
          Charts.drawBoxPlot(canvas, Lib.boxPlotStats(viewRows, uniCol), uniCol + " (box / IQR)");
        } else {
          Charts.drawHistogram(canvas, Lib.histogramBins(viewRows, uniCol, 10), uniCol);
        }
      } else {
        Charts.drawBars(canvas, Lib.categoryCounts(viewRows, uniCol, 10), uniCol);
      }
    }
    const gCanvas = document.getElementById("eda-group-canvas");
    if (gCanvas && groupCol && groupVal) {
      const grouped = Lib.groupByAgg(viewRows, groupCol, groupVal, groupAgg).map(function (g) {
        return { label: g.group, count: g.value };
      });
      Charts.drawBars(gCanvas, grouped.slice(0, 12), groupAgg + "(" + groupVal + ") by " + groupCol);
    }
    const sCanvas = document.getElementById("eda-scatter-canvas");
    if (sCanvas && scatterX && scatterY) {
      Charts.drawScatter(
        sCanvas,
        Lib.scatterPairs(viewRows, scatterX, scatterY),
        scatterX,
        scatterY
      );
    }
    const cCanvas = document.getElementById("eda-corr-canvas");
    if (cCanvas) {
      Charts.drawHeatmap(cCanvas, Lib.correlationMatrix(viewRows, session.columns));
    }
  }

  function sessionPayload() {
    return {
      source: session.source || session.name,
      bookAnchors: session.bookAnchors,
      rows: session.rows,
      columns: session.columns,
      viewRows: viewRows,
      filters: filterRules.filter(function (f) {
        return f.column && f.value !== "" && f.value != null;
      }),
    };
  }

  function syncFindingsFromDom() {
    const ta = document.getElementById("eda-findings");
    if (ta) findings = ta.value;
  }

  function sendToCleaning() {
    if (!session) return;
    if (!Handoff) {
      showMessage("Handoff helper missing — check tools-handoff.js.", "error");
      renderAll();
      return;
    }
    syncFindingsFromDom();
    const iss = Lib.issueSummary(viewRows, session.columns);
    const focus = {
      missing: iss.missing.map(function (m) {
        return m.column;
      }),
      inconsistent: iss.inconsistencies.map(function (g) {
        return g.column;
      }),
      outlier: iss.outliers.map(function (o) {
        return o.column;
      }),
    };
    try {
      Handoff.writeTable(
        "eda-dashboard",
        {
          name: session.name || "eda-view",
          columns: session.columns.slice(),
          rows: viewRows.map(function (r) {
            return Object.assign({}, r);
          }),
        },
        {
          rowFilter: iss.missing.length || iss.duplicates || iss.inconsistencies.length || iss.outliers.length
            ? "any"
            : "all",
          focusColumns: focus,
          issues: iss,
          bookAnchors: session.bookAnchors || [],
          findings: findings,
        }
      );
      window.location.href = "../cleaning/index.html?from=eda";
    } catch (err) {
      showMessage(err.message || String(err), "error");
      renderAll();
    }
  }

  function bindEvents() {
    root.querySelectorAll("[data-preset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadPreset(btn.getAttribute("data-preset"));
      });
    });
    const up = document.getElementById("eda-upload");
    if (up) up.addEventListener("change", onFileUpload);

    const addF = document.getElementById("eda-filter-add");
    if (addF) {
      addF.addEventListener("click", function () {
        const cats = session.columns.filter(function (c) {
          return !Lib.isNumericColumn(session.rows, c);
        });
        const col = cats[0] || session.columns[0];
        filterRules.push({
          id: nextFilterId++,
          column: col,
          op: defaultOpFor(col),
          value: "",
        });
        applyFilters();
        renderAll();
      });
    }
    const clearF = document.getElementById("eda-filter-clear");
    if (clearF) {
      clearF.addEventListener("click", function () {
        filterRules = [];
        applyFilters();
        renderAll();
      });
    }
    root.querySelectorAll("[data-filter-remove]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = Number(btn.getAttribute("data-filter-remove"));
        filterRules = filterRules.filter(function (f) {
          return f.id !== id;
        });
        applyFilters();
        renderAll();
      });
    });
    root.querySelectorAll("[data-filter-col]").forEach(function (sel) {
      sel.addEventListener("change", function () {
        const id = Number(sel.getAttribute("data-filter-col"));
        filterRules.forEach(function (f) {
          if (f.id === id) {
            f.column = sel.value;
            f.op = defaultOpFor(f.column);
            f.value = "";
          }
        });
        applyFilters();
        renderAll();
      });
    });
    root.querySelectorAll("[data-filter-op]").forEach(function (sel) {
      sel.addEventListener("change", function () {
        const id = Number(sel.getAttribute("data-filter-op"));
        filterRules.forEach(function (f) {
          if (f.id === id) f.op = sel.value;
        });
        applyFilters();
        renderAll();
      });
    });
    root.querySelectorAll("[data-filter-value]").forEach(function (el) {
      el.addEventListener("change", function () {
        const id = Number(el.getAttribute("data-filter-value"));
        filterRules.forEach(function (f) {
          if (f.id === id) f.value = el.value;
        });
        applyFilters();
        renderAll();
      });
    });

    const uni = document.getElementById("eda-uni-col");
    if (uni) {
      uni.addEventListener("change", function () {
        uniCol = uni.value;
        if (!Lib.isNumericColumn(viewRows, uniCol)) uniChart = "hist";
        renderAll();
      });
    }
    const uch = document.getElementById("eda-uni-chart");
    if (uch) {
      uch.addEventListener("change", function () {
        uniChart = uch.value;
        drawCharts();
      });
    }
    const gc = document.getElementById("eda-group-col");
    if (gc) {
      gc.addEventListener("change", function () {
        groupCol = gc.value;
        drawCharts();
      });
    }
    const gv = document.getElementById("eda-group-val");
    if (gv) {
      gv.addEventListener("change", function () {
        groupVal = gv.value;
        drawCharts();
      });
    }
    const ga = document.getElementById("eda-group-agg");
    if (ga) {
      ga.addEventListener("change", function () {
        groupAgg = ga.value;
        drawCharts();
      });
    }
    const sx = document.getElementById("eda-scatter-x");
    if (sx) {
      sx.addEventListener("change", function () {
        scatterX = sx.value;
        renderAll();
      });
    }
    const sy = document.getElementById("eda-scatter-y");
    if (sy) {
      sy.addEventListener("change", function () {
        scatterY = sy.value;
        renderAll();
      });
    }
    const cz = document.getElementById("eda-control-z");
    if (cz) {
      cz.addEventListener("change", function () {
        controlZ = cz.value;
        renderAll();
      });
    }
    const con = document.getElementById("eda-control-on");
    if (con) {
      con.addEventListener("change", function () {
        controlOn = con.checked;
        renderAll();
      });
    }
    root.querySelectorAll("[data-stem]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("data-stem");
        const stem = FINDING_STEMS.find(function (s) {
          return s.id === id;
        });
        if (!stem) return;
        syncFindingsFromDom();
        findings = (findings ? findings.replace(/\s*$/, "") + "\n" : "") + stem.text;
        renderAll();
      });
    });
    const ta = document.getElementById("eda-findings");
    if (ta) {
      ta.addEventListener("change", function () {
        findings = ta.value;
      });
    }
    const ej = document.getElementById("eda-export-json");
    if (ej) {
      ej.addEventListener("click", function () {
        if (!session) return;
        syncFindingsFromDom();
        Lib.downloadSummary(sessionPayload());
        showMessage("Downloaded eda-summary.json.", "ok");
        renderAll();
      });
    }
    const em = document.getElementById("eda-export-md");
    if (em) {
      em.addEventListener("click", function () {
        if (!session) return;
        syncFindingsFromDom();
        Lib.downloadFindings(sessionPayload(), findings);
        showMessage("Downloaded eda-findings.md.", "ok");
        renderAll();
      });
    }
    const sc = document.getElementById("eda-send-cleaning");
    if (sc) sc.addEventListener("click", sendToCleaning);
  }

  if (window.DatasetToolsReport) {
    window.DatasetToolsReport.registerRedraw(function () {
      if (session) drawCharts();
    });
  }
  if (window.EdaPresets && window.EdaPresets["household-incomes"]) {
    loadPreset("household-incomes");
  } else {
    renderAll();
  }
})();
