/* Consent & PII scrubber UI (classic script, file:// safe). */
(function () {
  "use strict";
  const Lib = window.PiiLib;
  if (!Lib) {
    console.error("PiiLib missing. Check lib/*.js load order.");
    return;
  }

  let session = null;
  let message = { text: "", kind: "" };
  let purpose = "share-with-vendor";
  let consentOk = false;
  let retentionDays = 90;
  let columnRoles = {};
  let dropColumns = [];
  let policy = "mask";
  let findings = [];
  let summary = { total: 0, byType: {} };
  let scrubbed = null;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
  }

  function rescan() {
    if (!session) {
      findings = [];
      summary = { total: 0, byType: {} };
      scrubbed = null;
      return;
    }
    findings = Lib.scanRows(session.rows, session.columns, columnRoles);
    summary = Lib.summarizeFindings(findings);
    scrubbed = Lib.applyScrub(session.rows, session.columns, findings, {
      policy: policy,
      dropColumns: dropColumns,
      columnRoles: columnRoles,
    });
  }

  function loadPreset(id) {
    try {
      session = Lib.loadPreset(id);
      columnRoles = Lib.inferColumnRoles(session.columns);
      dropColumns = (session.suggestedDrop || []).slice();
      if (session.purposeDefault) purpose = session.purposeDefault;
      consentOk = false;
      message = { text: "", kind: "" };
      rescan();
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
          bookAnchors: ["§3.4", "§3.5"],
          mode: data.mode,
          rows: data.rows,
          columns: data.columns,
          source: data.source,
        };
        columnRoles = Lib.inferColumnRoles(session.columns);
        dropColumns = [];
        consentOk = false;
        rescan();
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

  const root = document.getElementById("pii-root");
  if (!root) return;

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderGuide() +
      renderGate() +
      renderLoader() +
      renderMessage() +
      (session ? renderWorkspace() : "");
    bindEvents();
  }

  function renderIntro() {
    return (
      '<section class="pii-intro">' +
      "<h1>Consent &amp; PII scrubber</h1>" +
      '<p class="lead">Before you share a dataset, ask whether you <em>may</em> share it, drop what you do not need, ' +
      "then find and redact identifiers (Ch.3 §3.4–§3.5). This lab uses column roles, dictionaries, and regex—not a cloud LLM.</p>" +
      '<p class="pii-cross">Next: quasi-identifiers can still re-identify people after names are gone — ' +
      '<a href="../deid-risk/index.html">De-identification risk checker</a>.</p>' +
      "</section>"
    );
  }

  function renderGuide() {
    return (
      '<details class="pii-panel pii-guide">' +
      "<summary>Learn → apply with your data</summary>" +
      "<ol>" +
      "<li><strong>Gate</strong> — purpose, consent checkbox, retention window (minimize before scanning).</li>" +
      "<li><strong>Learn</strong> — <code>support-tickets</code> → <code>customer-table</code> → <code>mixed-export</code>.</li>" +
      "<li><strong>Roles</strong> — confirm sensitive columns; drop unused fields.</li>" +
      "<li><strong>Scrub</strong> — mask, tokenize, or suppress hits; export redacted CSV + audit log.</li>" +
      "</ol>" +
      '<p class="pii-hint">Regex catches emails/phones/IDs well; free-text names are harder—treat scrubbing as necessary but not sufficient for anonymization.</p>' +
      "</details>"
    );
  }

  function renderGate() {
    return (
      '<section class="pii-panel">' +
      "<h2>1 · Before you share (purpose &amp; consent)</h2>" +
      '<div class="pii-controls">' +
      "<label>Purpose of this export" +
      '<select id="pii-purpose">' +
      opt("analytics-internal", "Internal analytics only", purpose) +
      opt("share-with-vendor", "Share with a vendor / partner", purpose) +
      opt("public-release", "Public or open release", purpose) +
      opt("model-training", "Model training (secondary use)", purpose) +
      "</select></label>" +
      "<label>Retention window" +
      '<select id="pii-retention">' +
      opt("30", "30 days", String(retentionDays)) +
      opt("90", "90 days", String(retentionDays)) +
      opt("365", "1 year", String(retentionDays)) +
      opt("0", "Delete after this share", String(retentionDays)) +
      "</select></label>" +
      "</div>" +
      '<label class="pii-check"><input type="checkbox" id="pii-consent"' +
      (consentOk ? " checked" : "") +
      "> I confirm this purpose is allowed under our consent / policy for these records.</label>" +
      '<p class="pii-hint">Teaching stand-in for a real legal review—not advice. Minimization and scrubbing come next.</p>' +
      "</section>"
    );
  }

  function opt(value, label, selected) {
    return (
      '<option value="' +
      value +
      '"' +
      (String(value) === String(selected) ? " selected" : "") +
      ">" +
      label +
      "</option>"
    );
  }

  function renderLoader() {
    const presets = Lib.listPresets();
    let cards = "";
    presets.forEach(function (p) {
      const active = session && session.name === p.name ? " pii-preset-active" : "";
      cards +=
        '<button type="button" class="pii-preset' +
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
      '<section class="pii-panel">' +
      "<h2>2 · Load data</h2>" +
      '<div class="pii-presets">' +
      cards +
      "</div>" +
      '<label class="pii-upload">Upload CSV, JSON, or .txt' +
      '<input type="file" id="pii-upload" accept=".csv,.json,.txt,text/csv,application/json,text/plain">' +
      "</label>" +
      "</section>"
    );
  }

  function renderMessage() {
    if (!message.text) return "";
    return (
      '<div class="pii-message pii-' +
      esc(message.kind || "ok") +
      '" role="status">' +
      esc(message.text) +
      "</div>"
    );
  }

  function renderWorkspace() {
    return (
      renderRoles() +
      renderFindings() +
      renderPolicy() +
      renderPreview() +
      renderExport()
    );
  }

  function renderRoles() {
    let rows = "";
    session.columns.forEach(function (col) {
      const role = columnRoles[col] || "other";
      const dropped = dropColumns.indexOf(col) !== -1;
      rows +=
        "<tr>" +
        "<td><code>" +
        esc(col) +
        "</code></td>" +
        '<td><select data-role-col="' +
        esc(col) +
        '">' +
        roleOpts(role) +
        "</select></td>" +
        '<td><label class="pii-check"><input type="checkbox" data-drop-col="' +
        esc(col) +
        '"' +
        (dropped ? " checked" : "") +
        "> Drop (minimize)</label></td>" +
        "</tr>";
    });
    return (
      '<section class="pii-panel">' +
      "<h2>3 · Column roles &amp; minimization</h2>" +
      '<p class="pii-hint">Headers like <code>email</code> / <code>phone</code> are tagged automatically. Drop columns you do not need before scrubbing free text.</p>' +
      '<div class="pii-table-wrap"><table class="pii-table"><thead><tr><th>Column</th><th>Role</th><th>Minimize</th></tr></thead><tbody>' +
      rows +
      "</tbody></table></div>" +
      "</section>"
    );
  }

  function roleOpts(selected) {
    const roles = [
      "other",
      "email",
      "phone",
      "name",
      "id",
      "financial",
      "ip",
      "address",
      "dob",
    ];
    return roles
      .map(function (r) {
        return (
          '<option value="' +
          r +
          '"' +
          (r === selected ? " selected" : "") +
          ">" +
          r +
          "</option>"
        );
      })
      .join("");
  }

  function renderFindings() {
    const parts = Object.keys(summary.byType || {})
      .map(function (t) {
        return "<li><strong>" + esc(t) + "</strong>: " + summary.byType[t] + "</li>";
      })
      .join("");
    const sample = findings.slice(0, 12)
      .map(function (f) {
        return (
          "<tr><td>" +
          esc(f.type) +
          "</td><td>" +
          esc(f.column || "—") +
          "</td><td><code>" +
          esc(f.value) +
          "</code></td><td>" +
          esc(f.source) +
          "</td></tr>"
        );
      })
      .join("");
    return (
      '<section class="pii-panel">' +
      "<h2>4 · Detected identifiers</h2>" +
      "<p><strong>" +
      summary.total +
      "</strong> hit(s) via column roles + regex/format checks.</p>" +
      (parts ? "<ul class='pii-sum'>" + parts + "</ul>" : "") +
      '<div class="pii-table-wrap"><table class="pii-table"><thead><tr><th>Type</th><th>Column</th><th>Value</th><th>How found</th></tr></thead><tbody>' +
      (sample || "<tr><td colspan='4'>No hits — try another preset or check column roles.</td></tr>") +
      "</tbody></table></div>" +
      '<p class="pii-hint">Showing up to 12 hits. Names in free text may be missed—that gap is intentional for discussion.</p>' +
      "</section>"
    );
  }

  function renderPolicy() {
    return (
      '<section class="pii-panel">' +
      "<h2>5 · Redaction policy</h2>" +
      '<div class="pii-controls">' +
      "<label>Policy" +
      '<select id="pii-policy">' +
      opt("mask", "Mask (j***@x.com, ***-***-1234)", policy) +
      opt("tokenize", "Tokenize ([EMAIL_001])", policy) +
      opt("suppress", "Suppress ([REDACTED])", policy) +
      "</select></label>" +
      "</div>" +
      '<p class="pii-teach" role="note">' +
      policyNote() +
      "</p>" +
      "</section>"
    );
  }

  function policyNote() {
    if (!consentOk) {
      return "Confirm the consent checkbox in step 1 before treating this export as shareable.";
    }
    if (purpose === "public-release" && summary.total > 0) {
      return "Public release with remaining identifiers is high risk—prefer dropping columns and aggregating, not only masking.";
    }
    if (policy === "mask") {
      return "Masking reduces casual exposure but can still leak patterns. Keep the audit log with every share.";
    }
    if (policy === "tokenize") {
      return "Tokens support joins inside a trusted vault; do not publish the mapping table.";
    }
    return "Suppression removes values entirely—safest for one-off vendor shares when the field is unused.";
  }

  function renderPreview() {
    if (!scrubbed) return "";
    const cols = scrubbed.columns.slice(0, 8);
    const rows = scrubbed.rows.slice(0, 8);
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
              return "<td>" + esc(r[c]) + "</td>";
            })
            .join("") +
          "</tr>"
        );
      })
      .join("");
    return (
      '<section class="pii-panel">' +
      "<h2>6 · Redacted preview</h2>" +
      '<div class="pii-table-wrap"><table class="pii-table"><thead><tr>' +
      head +
      "</tr></thead><tbody>" +
      body +
      "</tbody></table></div>" +
      '<p class="pii-hint">Dropped columns are gone. Compare with step 4 to see what changed.</p>' +
      "</section>"
    );
  }

  function renderExport() {
    const blocked = !consentOk;
    return (
      '<section class="pii-panel">' +
      "<h2>7 · Export</h2>" +
      '<div class="pii-op-row">' +
      '<button type="button" class="btn" id="pii-export-csv"' +
      (blocked ? " disabled title=\"Confirm consent first\"" : "") +
      ">Download redacted CSV</button>" +
      '<button type="button" class="btn btn-secondary" id="pii-export-log">Download scrub-log.json</button>' +
      "</div>" +
      (blocked
        ? '<p class="pii-gate-note">Export of redacted CSV is locked until the consent checkbox is checked (teaching gate).</p>'
        : '<p class="pii-hint">The scrub log records purpose, retention, policy, dropped columns, and each redaction—your §3.x audit trail.</p>') +
      "</section>"
    );
  }

  function bindEvents() {
    root.querySelectorAll("[data-preset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadPreset(btn.getAttribute("data-preset"));
      });
    });
    const upload = document.getElementById("pii-upload");
    if (upload) upload.addEventListener("change", onFileUpload);

    const purposeEl = document.getElementById("pii-purpose");
    if (purposeEl) {
      purposeEl.addEventListener("change", function () {
        purpose = purposeEl.value;
        renderAll();
      });
    }
    const retEl = document.getElementById("pii-retention");
    if (retEl) {
      retEl.addEventListener("change", function () {
        retentionDays = Number(retEl.value);
        renderAll();
      });
    }
    const consentEl = document.getElementById("pii-consent");
    if (consentEl) {
      consentEl.addEventListener("change", function () {
        consentOk = !!consentEl.checked;
        renderAll();
      });
    }

    root.querySelectorAll("[data-role-col]").forEach(function (sel) {
      sel.addEventListener("change", function () {
        columnRoles[sel.getAttribute("data-role-col")] = sel.value;
        rescan();
        renderAll();
      });
    });
    root.querySelectorAll("[data-drop-col]").forEach(function (cb) {
      cb.addEventListener("change", function () {
        const col = cb.getAttribute("data-drop-col");
        if (cb.checked) {
          if (dropColumns.indexOf(col) === -1) dropColumns.push(col);
        } else {
          dropColumns = dropColumns.filter(function (c) {
            return c !== col;
          });
        }
        rescan();
        renderAll();
      });
    });

    const pol = document.getElementById("pii-policy");
    if (pol) {
      pol.addEventListener("change", function () {
        policy = pol.value;
        rescan();
        renderAll();
      });
    }

    const exportCsv = document.getElementById("pii-export-csv");
    if (exportCsv) {
      exportCsv.addEventListener("click", function () {
        if (!consentOk || !scrubbed) {
          showMessage("Confirm consent before exporting redacted data.", "warn");
          renderAll();
          return;
        }
        Lib.download(
          "redacted.csv",
          Lib.rowsToCsv(scrubbed.rows, scrubbed.columns),
          "text/csv"
        );
        showMessage("Downloaded redacted.csv.", "ok");
        renderAll();
      });
    }
    const exportLog = document.getElementById("pii-export-log");
    if (exportLog) {
      exportLog.addEventListener("click", function () {
        if (!session || !scrubbed) return;
        const audit = Lib.buildAudit(
          session,
          {
            purpose: purpose,
            consentOk: consentOk,
            retentionDays: retentionDays,
          },
          scrubbed,
          summary
        );
        Lib.download("scrub-log.json", JSON.stringify(audit, null, 2), "application/json");
        showMessage("Downloaded scrub-log.json.", "ok");
        renderAll();
      });
    }
  }

  if (window.PiiPresets && window.PiiPresets["support-tickets"]) {
    loadPreset("support-tickets");
  } else {
    renderAll();
  }
})();
