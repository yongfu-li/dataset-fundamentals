/* Datasheet / data-card builder — main UI (classic script, file:// safe).
 * Load sample data, fill documentation prompts, preview Markdown, export MD + JSON metadata.
 * Book anchors: §8.2 Key Components; §8.3 Creating Effective Documentation. */
(function () {
  "use strict";
  const Lib = window.DatasheetLib;
  if (!Lib) {
    console.error("DatasheetLib not found. Check that lib/*.js loaded before datasheet.js.");
    return;
  }

  let sample = null;
  let profile = null;
  let templateId = "datasheet";
  let fields = Lib.defaultFields(templateId);
  let columnDescriptions = {};
  let presetDefaults = null;
  let message = { text: "", kind: "" };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
  }

  function applyPresetDefaults(data) {
    if (!data.defaults) return;
    presetDefaults = data.defaults;
    const tplDefaults = data.defaults[templateId] || data.defaults.datasheet;
    if (!tplDefaults) return;
    Object.keys(tplDefaults).forEach(function (key) {
      if (tplDefaults[key] != null && String(tplDefaults[key]).trim() !== "") {
        fields[key] = tplDefaults[key];
      }
    });
    if (data.columnDescriptions) {
      columnDescriptions = Object.assign({}, data.columnDescriptions);
    }
    // Ensure license_key matches the license short label from presets
    if (!fields.license_key || fields.license_key === "other") {
      fields.license_key = Lib.normalizeLicenseKey(fields.license);
      if (fields.license_key === "other") {
        fields.license_other = fields.license;
      }
    }
    Lib.syncLicenseField(fields);
  }

  function applySampleData(data, fromPreset) {
    sample = data;
    profile = Lib.profileDataset(data.rows, data.columns);
    if (fromPreset && data.defaults) {
      columnDescriptions = {};
      profile.columns.forEach(function (col) {
        columnDescriptions[col.name] =
          (data.columnDescriptions && data.columnDescriptions[col.name]) || "";
      });
      applyPresetDefaults(data);
    } else {
      columnDescriptions = {};
      profile.columns.forEach(function (col) {
        columnDescriptions[col.name] = "";
      });
      if (!fields.dataset_name && data.suggestedName) fields.dataset_name = data.suggestedName;
      if (!fields.composition.trim()) {
        fields.composition = Lib.suggestCompositionText(profile);
      }
      if (templateId === "datacard" && !fields.purpose.trim() && data.suggestedDomain) {
        fields.purpose = "Teaching dataset for " + data.suggestedDomain + ".";
      }
      if (!fields.motivation.trim() && data.suggestedDomain && templateId === "datasheet") {
        fields.motivation = "Support coursework on " + data.suggestedDomain + ".";
      }
    }
    if (!fromPreset && !fields.composition.trim()) {
      fields.composition = Lib.suggestCompositionText(profile);
    }
  }

  function loadPreset(id) {
    try {
      const data = Lib.loadPreset(id);
      applySampleData(data, true);
      showMessage(
        "Loaded preset '" + data.source + "' (" + data.rows.length + " rows, " + data.columns.length + " columns). Default prompts and data dictionary filled.",
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
        presetDefaults = null;
        applySampleData(data, false);
        if (!fields.dataset_name) {
          fields.dataset_name = file.name.replace(/\.(csv|json)$/i, "");
        }
        showMessage(
          "Loaded '" + file.name + "' (" + data.rows.length + " rows, " + data.columns.length + " columns).",
          "ok"
        );
      } catch (err) {
        showMessage(err.message || String(err), "error");
      }
      renderAll();
    };
    reader.readAsText(file);
  }

  function onTemplateChange(ev) {
    const next = ev.target.value;
    const old = fields;
    fields = Lib.defaultFields(next);
    fields.dataset_name = old.dataset_name;
    fields.version = old.version;
    fields.creators = old.creators;
    fields.created_date = old.created_date;
    fields.license = old.license;
    fields.license_key = old.license_key;
    fields.license_other = old.license_other;
    fields.contact = old.contact;
    if (old.composition) fields.composition = old.composition;
    if (old.collection) fields.collection = old.collection;
    if (old.uses) fields.uses = old.uses;
    if (old.limitations) fields.limitations = old.limitations;
    templateId = next;
    if (presetDefaults && sample && sample.defaults) {
      applyPresetDefaults(sample);
    }
    renderAll();
  }

  function onFieldInput(ev) {
    const key = ev.target.getAttribute("data-field");
    if (!key) return;
    fields[key] = ev.target.value;
    if (key === "license_other") {
      fields.license_key = "other";
      Lib.syncLicenseField(fields);
    }
    updatePreview();
  }

  function onLicenseSelect(ev) {
    const key = ev.target.value;
    fields.license_key = key;
    if (key === "other") {
      if (!fields.license_other) fields.license_other = "";
    } else {
      fields.license_other = "";
    }
    Lib.syncLicenseField(fields);
    // Re-render so the "Other" text box appears/disappears
    renderAll();
  }

  function onColumnDescInput(ev) {
    const col = ev.target.getAttribute("data-col");
    if (!col) return;
    columnDescriptions[col] = ev.target.value;
    updatePreview();
  }

  function updatePreview() {
    const preview = document.getElementById("ds-preview");
    if (preview) {
      preview.textContent = Lib.renderMarkdown(templateId, fields, profile, columnDescriptions);
    }
    const exportHint = document.getElementById("ds-export-hint");
    if (exportHint) {
      const lic = Lib.buildLicenseFile(fields);
      const fullNote = lic.has_full_text
        ? "Full legal text + creator/contact notice."
        : "Custom license stub — paste full legal text before releasing.";
      exportHint.textContent =
        "Release bundle: datasheet.md + datasheet-metadata.json + " +
        lic.filename +
        " (" +
        lic.license_label +
        ", SPDX " +
        lic.spdx +
        "). " +
        fullNote;
    }
    const licenseBtn = document.getElementById("ds-export-license");
    if (licenseBtn) {
      licenseBtn.textContent = "Download " + Lib.buildLicenseFile(fields).filename;
    }
  }

  function exportState() {
    return { templateId: templateId, fields: fields, profile: profile, sample: sample, columnDescriptions: columnDescriptions };
  }

  const root = document.getElementById("datasheet-root");
  if (!root) return;

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderLoader() +
      renderMessage() +
      renderIdentity() +
      renderDocumentation() +
      (profile ? renderDictionary() : "") +
      renderPreview() +
      renderExport();
    bindEvents();
    updatePreview();
  }

  function renderIntro() {
    return (
      '<section class="ds-intro">' +
      "<h1>Datasheet / data-card builder</h1>" +
      "<p>Documentation is a deliverable, not an afterthought (book §8.2–8.3). " +
      "Load <em>sample data</em> to auto-fill composition stats and a data dictionary, " +
      "complete the guided prompts, then export <code>datasheet.md</code> and <code>datasheet-metadata.json</code>.</p>" +
      "</section>"
    );
  }

  function renderLoader() {
    const presets = window.DatasheetPresets || {};
    let cards = "";
    Object.keys(presets).forEach(function (id) {
      const p = presets[id];
      const active = sample && sample.source === (p.name || id) ? " ds-preset-active" : "";
      cards +=
        '<button type="button" class="ds-preset' + active + '" data-preset="' + esc(id) + '">' +
        "<strong>" + esc(p.name || id) + "</strong>" +
        "<span>" + esc(p.description || "") + "</span></button>";
    });
    return (
      '<section class="ds-panel">' +
      "<h2>1 · Load sample data</h2>" +
      '<p class="ds-hint">Optional but recommended: upload CSV/JSON (≤ 2 MB, ≤ 5000 rows) to infer row counts, types, missingness, and a data dictionary.</p>' +
      '<div class="ds-presets">' + cards + "</div>" +
      '<label class="ds-upload-label">Or upload CSV / JSON: <input type="file" id="ds-file" accept=".csv,.json,text/csv,application/json"></label>' +
      (profile
        ? '<p class="ds-stats">Sample: <strong>' +
          esc(sample.source) +
          "</strong> · " +
          profile.row_count +
          " rows · " +
          profile.column_count +
          " columns · " +
          profile.missing_pct +
          "% missing cells</p>"
        : "") +
      "</section>"
    );
  }

  function renderMessage() {
    if (!message.text) return "";
    return '<p class="ds-message ds-' + esc(message.kind) + '">' + esc(message.text) + "</p>";
  }

  function renderIdentity() {
    const licenseKey = fields.license_key || Lib.normalizeLicenseKey(fields.license);
    let licenseOpts = "";
    Lib.LICENSE_OPTIONS.forEach(function (opt) {
      licenseOpts +=
        '<option value="' +
        esc(opt.key) +
        '"' +
        (licenseKey === opt.key ? " selected" : "") +
        ">" +
        esc(opt.value) +
        "</option>";
    });
    const otherRow =
      licenseKey === "other"
        ? "<label>Custom license name" +
          '<input type="text" data-field="license_other" value="' +
          esc(fields.license_other || "") +
          '" placeholder="e.g. Institutional data-use agreement"></label>'
        : "";

    return (
      '<section class="ds-panel">' +
      "<h2>2 · Dataset identity</h2>" +
      '<div class="ds-template-row">' +
      "<label>Template " +
      '<select id="ds-template">' +
      '<option value="datasheet"' + (templateId === "datasheet" ? " selected" : "") + ">Datasheet for Datasets</option>" +
      '<option value="datacard"' + (templateId === "datacard" ? " selected" : "") + ">Data Card</option>" +
      "</select></label></div>" +
      '<div class="ds-form-grid">' +
      fieldInput("dataset_name", "Dataset name", fields.dataset_name, "e.g. Hiring screen applicants") +
      fieldInput("version", "Version", fields.version, "1.0.0") +
      fieldInput("creators", "Creator(s)", fields.creators, "Names or organization") +
      fieldInput("created_date", "Created date", fields.created_date, "YYYY-MM-DD") +
      "<label>License" +
      '<select id="ds-license-key">' +
      licenseOpts +
      "</select>" +
      '<span class="ds-hint ds-inline-hint">Listed licenses download full legal text with creator &amp; contact.</span></label>' +
      otherRow +
      fieldInput("contact", "Contact", fields.contact, "email or project URL") +
      "</div></section>"
    );
  }

  function fieldInput(key, label, value, placeholder) {
    return (
      "<label>" + esc(label) +
      '<input type="text" data-field="' + esc(key) + '" value="' + esc(value) +
      '" placeholder="' + esc(placeholder) + '"></label>'
    );
  }

  function renderDocumentation() {
    const tpl = Lib.TEMPLATES[templateId];
    let html = '<section class="ds-panel"><h2>3 · Documentation prompts</h2>';
    tpl.sections.forEach(function (sec) {
      const val = fields[sec.id] || "";
      html +=
        '<div class="ds-prompt">' +
        "<h3>" + esc(sec.title) + "</h3>" +
        '<p class="ds-hint">' + esc(sec.hint) + "</p>" +
        '<textarea data-field="' + esc(sec.id) + '" rows="3" placeholder="' + esc(sec.placeholder) + '">' +
        esc(val) +
        "</textarea></div>";
    });
    return html + "</section>";
  }

  function renderDictionary() {
    let rows = "";
    profile.columns.forEach(function (col) {
      const desc = columnDescriptions[col.name] || "";
      rows +=
        "<tr><td><code>" + esc(col.name) + "</code></td>" +
        "<td>" + esc(col.inferred_type) + "</td>" +
        "<td>" + col.missing_pct + "%</td>" +
        "<td>" + col.unique_count + "</td>" +
        "<td><small>" + esc(col.sample_values.join(", ")) + "</small></td>" +
        '<td><input type="text" class="ds-col-desc" data-col="' + esc(col.name) +
        '" value="' + esc(desc) + '" placeholder="Meaning, units, allowed values"></td></tr>';
    });
    return (
      '<section class="ds-panel">' +
      "<h2>4 · Data dictionary</h2>" +
      '<p class="ds-hint">Inferred from sample data (§8.2). Add human-readable descriptions for each column.</p>' +
      '<div class="ds-table-wrap"><table class="ds-table">' +
      "<thead><tr><th>Column</th><th>Type</th><th>Missing</th><th>Unique</th><th>Samples</th><th>Description</th></tr></thead>" +
      "<tbody>" + rows + "</tbody></table></div></section>"
    );
  }

  function renderPreview() {
    return (
      '<section class="ds-panel">' +
      "<h2>" + (profile ? "5" : "4") + " · Preview</h2>" +
      '<pre id="ds-preview" class="ds-preview" aria-label="Markdown preview"></pre>' +
      "</section>"
    );
  }

  function renderExport() {
    const n = profile ? "6" : "5";
    const licenseHint = Lib.buildLicenseFile(fields);
    const fullNote = licenseHint.has_full_text
      ? "Full legal text + creator/contact notice."
      : "Custom license stub — paste full legal text before releasing.";
    return (
      '<section class="ds-panel">' +
      "<h2>" + n + " · Export</h2>" +
      '<div class="ds-op-row">' +
      '<button type="button" id="ds-export-md" class="ds-primary">Download datasheet.md</button>' +
      '<button type="button" id="ds-export-json" class="ds-secondary">Download datasheet-metadata.json</button>' +
      '<button type="button" id="ds-export-license" class="ds-secondary">Download ' + esc(licenseHint.filename) + "</button>" +
      "</div>" +
      '<p class="ds-hint" id="ds-export-hint">Release bundle: <code>datasheet.md</code> + <code>datasheet-metadata.json</code> + <code>' +
      esc(licenseHint.filename) +
      "</code> (" +
      esc(licenseHint.license_label) +
      ", SPDX " +
      esc(licenseHint.spdx) +
      "). " +
      fullNote +
      "</p>" +
      "</section>"
    );
  }

  function on(id, event, handler) {
    const el = document.getElementById(id);
    if (el) el.addEventListener(event, handler);
  }

  function bindEvents() {
    document.querySelectorAll("[data-preset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadPreset(btn.getAttribute("data-preset"));
      });
    });
    on("ds-file", "change", onFileUpload);
    on("ds-template", "change", onTemplateChange);
    on("ds-license-key", "change", onLicenseSelect);
    document.querySelectorAll("[data-field]").forEach(function (el) {
      el.addEventListener("input", onFieldInput);
    });
    document.querySelectorAll("[data-col]").forEach(function (el) {
      el.addEventListener("input", onColumnDescInput);
    });
    on("ds-export-md", "click", function () {
      Lib.downloadMarkdown(Lib.renderMarkdown(templateId, fields, profile, columnDescriptions));
    });
    on("ds-export-json", "click", function () {
      Lib.downloadMetadata(exportState());
    });
    on("ds-export-license", "click", function () {
      Lib.downloadLicense(exportState());
    });
  }

  renderAll();
})();
