/* License chooser UI — questionnaire → recommendation → export. */
(function () {
  "use strict";
  const Lib = window.LicenseChooserLib;
  const Lic = window.ToolsLicenses;
  if (!Lib || !Lic) {
    console.error("LicenseChooserLib / ToolsLicenses missing. Check script load order.");
    return;
  }

  const root = document.getElementById("license-chooser-root");
  if (!root) return;

  let answers = {
    sensitive: "",
    artifact: "",
    data_family: "",
    commercial: "",
    attribution: "",
    sharealike: "",
    copyleft: "",
    patents: "",
    dataset_name: "",
    creators: "",
    contact: "",
    version: "",
  };
  let message = { text: "", kind: "" };
  let result = null;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
  }

  function identityFields() {
    return {
      dataset_name: answers.dataset_name || "Dataset",
      creators: answers.creators || "Dataset authors",
      contact: answers.contact || "",
      version: answers.version || "",
      created_date: String(new Date().getFullYear()),
      license_source: "license chooser",
    };
  }

  function recompute() {
    if (Lib.isComplete(answers)) {
      result = Lib.recommend(answers);
    } else {
      result = null;
    }
  }

  function loadScenario(id) {
    const sc = Lib.SCENARIOS.find(function (s) {
      return s.id === id;
    });
    if (!sc) return;
    answers = Object.assign(
      {
        sensitive: "",
        artifact: "",
        data_family: "",
        commercial: "",
        attribution: "",
        sharealike: "",
        copyleft: "",
        patents: "",
        dataset_name: "",
        creators: "",
        contact: "",
        version: "",
      },
      sc.answers
    );
    recompute();
    showMessage("Loaded scenario “" + sc.name + "”.", "ok");
    renderAll();
  }

  function resetAll() {
    answers = {
      sensitive: "",
      artifact: "",
      data_family: "",
      commercial: "",
      attribution: "",
      sharealike: "",
      copyleft: "",
      patents: "",
      dataset_name: "",
      creators: "",
      contact: "",
      version: "",
    };
    result = null;
    message = { text: "", kind: "" };
    renderAll();
  }

  function renderIntro() {
    return (
      '<section class="lc-intro">' +
      "<h1>License chooser</h1>" +
      '<p class="lead">Answer a short use-case questionnaire to pick a license family for a dataset or companion code ' +
      "(Ch.13 §13.6). Export a recommendation note and, when available, a <code>LICENSE</code> file shared with the datasheet builder.</p>" +
      '<p class="lc-cross">Not legal advice. Sensitive data should stay behind access procedures—not an unrestricted open license.</p>' +
      "</section>"
    );
  }

  function renderGuide() {
    return (
      '<details class="lc-panel lc-guide">' +
      "<summary>Learn → apply</summary>" +
      "<ol>" +
      "<li><strong>Learn</strong> — try a scenario (open tabular, clinical, education-only, or companion code).</li>" +
      "<li><strong>Apply</strong> — answer the questions for your own release plan.</li>" +
      "<li><strong>Export</strong> — recommendation Markdown/JSON; download <code>LICENSE</code> when full text is bundled.</li>" +
      "<li><strong>Document</strong> — paste the SPDX id into the " +
      '<a href="../datasheet/index.html">datasheet builder</a>.</li>' +
      "</ol>" +
      "</details>"
    );
  }

  function shortGroup(group) {
    return String(group || "")
      .replace(/^Open data ·\s*/i, "")
      .replace(/^Companion code ·\s*/i, "")
      .replace(/^Restricted$/i, "Restricted");
  }

  function renderScenarios() {
    let cards = "";
    Lib.SCENARIOS.forEach(function (sc) {
      cards +=
        '<button type="button" class="lc-preset" data-scenario="' +
        esc(sc.id) +
        '" title="' +
        esc(sc.blurb) +
        '">' +
        '<span class="lc-path">' +
        esc(shortGroup(sc.group)) +
        "</span>" +
        "<strong>" +
        esc(sc.name) +
        "</strong>" +
        '<span class="lc-mod">' +
        esc(sc.modality || "") +
        "</span>" +
        '<span class="lc-blurb">' +
        esc(sc.blurb) +
        "</span></button>";
    });
    return (
      '<section class="lc-panel lc-scenarios">' +
      '<div class="lc-scenarios-head">' +
      "<h2>Scenarios</h2>" +
      '<button type="button" class="lc-secondary lc-reset-inline" id="lc-reset">Reset</button>' +
      "</div>" +
      '<p class="lc-hint">Load a modality preset, then tweak the questionnaire.</p>' +
      '<div class="lc-presets">' +
      cards +
      "</div>" +
      "</section>"
    );
  }

  function renderIdentity() {
    return (
      '<section class="lc-panel">' +
      "<h2>Release identity (optional)</h2>" +
      '<p class="lc-hint">Used in the LICENSE notice header when you download full text.</p>' +
      '<div class="lc-fields">' +
      "<label>Dataset / project name" +
      '<input type="text" data-field="dataset_name" value="' +
      esc(answers.dataset_name) +
      '"></label>' +
      "<label>Creators" +
      '<input type="text" data-field="creators" value="' +
      esc(answers.creators) +
      '"></label>' +
      "<label>Contact" +
      '<input type="text" data-field="contact" value="' +
      esc(answers.contact) +
      '"></label>' +
      "<label>Version" +
      '<input type="text" data-field="version" value="' +
      esc(answers.version) +
      '"></label>' +
      "</div>" +
      "</section>"
    );
  }

  function renderQuestions() {
    const vis = Lib.visibleQuestions(answers);
    let html =
      '<section class="lc-panel">' +
      "<h2>Questionnaire</h2>" +
      '<p class="lc-hint">Questions adapt as you answer (sensitive data short-circuits to restricted access).</p>';
    vis.forEach(function (q, idx) {
      html += '<fieldset class="lc-q" data-qid="' + esc(q.id) + '">';
      html += "<legend>" + (idx + 1) + ". " + esc(q.prompt) + "</legend>";
      if (q.help) html += '<p class="lc-help">' + esc(q.help) + "</p>";
      html += '<div class="lc-options" role="radiogroup" aria-label="' + esc(q.prompt) + '">';
      q.options.forEach(function (opt) {
        const checked = answers[q.id] === opt.value ? " checked" : "";
        html +=
          "<label class=\"lc-option\">" +
          '<input type="radio" name="q-' +
          esc(q.id) +
          '" value="' +
          esc(opt.value) +
          '"' +
          checked +
          "> " +
          esc(opt.label) +
          "</label>";
      });
      html += "</div></fieldset>";
    });
    html += "</section>";
    return html;
  }

  function renderMessage() {
    if (!message.text) return "";
    return '<p class="lc-msg lc-msg-' + esc(message.kind) + '" role="status">' + esc(message.text) + "</p>";
  }

  function renderResult() {
    if (!result) {
      return (
        '<section class="lc-panel lc-result lc-result-empty">' +
        "<h2>Recommendation</h2>" +
        "<p>Answer the questionnaire (or load a scenario) to see a license suggestion.</p>" +
        "</section>"
      );
    }
    let why = "<ul>";
    result.why.forEach(function (line) {
      why += "<li>" + esc(line) + "</li>";
    });
    why += "</ul>";
    let perms = "<ul>";
    result.permissions.forEach(function (line) {
      perms += "<li>" + esc(line) + "</li>";
    });
    perms += "</ul>";
    let limits = "<ul>";
    result.limitations.forEach(function (line) {
      limits += "<li>" + esc(line) + "</li>";
    });
    limits += "</ul>";
    const alt = result.alternate_note
      ? '<p class="lc-alt"><strong>Alternate:</strong> ' +
        esc(result.alternate_note) +
        (result.alternate_url
          ? ' <a href="' + esc(result.alternate_url) + '" target="_blank" rel="noopener">' +
            esc(result.alternate_label || "details") +
            "</a>"
          : "") +
        "</p>"
      : "";
    const licBtnLabel = result.has_full_text
      ? "Download " + result.license_filename
      : result.license_key === "closed"
        ? "Download access-policy stub"
        : "Download LICENSE stub (link to full text)";

    return (
      '<section class="lc-panel lc-result">' +
      "<h2>Recommendation</h2>" +
      '<p class="lc-badge">' +
      esc(result.short_label) +
      " · <code>" +
      esc(result.spdx) +
      "</code></p>" +
      "<p>" +
      esc(result.summary) +
      "</p>" +
      (result.url
        ? '<p><a href="' + esc(result.url) + '" target="_blank" rel="noopener">Canonical license page</a></p>'
        : "") +
      "<h3>Why this fits</h3>" +
      why +
      "<h3>Permissions</h3>" +
      perms +
      "<h3>Limitations</h3>" +
      limits +
      alt +
      '<div class="lc-actions">' +
      '<button type="button" class="lc-primary" id="lc-export-md">Download recommendation.md</button>' +
      '<button type="button" class="lc-secondary" id="lc-export-json">Download recommendation.json</button>' +
      '<button type="button" class="lc-secondary" id="lc-export-license">' +
      esc(licBtnLabel) +
      "</button>" +
      "</div>" +
      '<p class="lc-hint">Next: record this SPDX id in the <a href="../datasheet/index.html">datasheet builder</a>.</p>' +
      "</section>"
    );
  }

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderGuide() +
      renderScenarios() +
      renderIdentity() +
      renderQuestions() +
      renderMessage() +
      renderResult();
    bindEvents();
  }

  function bindEvents() {
    root.querySelectorAll("[data-scenario]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadScenario(btn.getAttribute("data-scenario"));
      });
    });
    const reset = document.getElementById("lc-reset");
    if (reset) reset.addEventListener("click", resetAll);

    root.querySelectorAll("[data-field]").forEach(function (el) {
      el.addEventListener("input", function () {
        answers[el.getAttribute("data-field")] = el.value;
        recompute();
        // Only refresh result panel identity-dependent bits lightly: full re-render on blur for fields is heavy;
        // keep answers in sync; re-render result when complete.
        if (result) {
          result = Lib.recommend(answers);
          const panel = root.querySelector(".lc-result");
          if (panel) {
            const tmp = document.createElement("div");
            tmp.innerHTML = renderResult();
            panel.replaceWith(tmp.firstChild);
            bindExportOnly();
          }
        }
      });
    });

    root.querySelectorAll(".lc-q input[type=radio]").forEach(function (radio) {
      radio.addEventListener("change", function () {
        const qid = radio.closest(".lc-q").getAttribute("data-qid");
        answers[qid] = radio.value;
        // Clearing downstream when sensitive flips
        if (qid === "sensitive" && radio.value === "yes") {
          answers.artifact = "";
          answers.commercial = "";
          answers.attribution = "";
          answers.sharealike = "";
          answers.patents = "";
          answers.copyleft = "";
          answers.data_family = "";
        }
        if (qid === "artifact" && radio.value === "data") {
          answers.patents = "na";
          answers.copyleft = "na";
        }
        if (qid === "artifact" && radio.value === "code") {
          answers.data_family = "";
        }
        if (qid === "copyleft" && radio.value === "yes") {
          answers.patents = "na";
        }
        recompute();
        showMessage("", "");
        renderAll();
      });
    });

    bindExportOnly();
  }

  function bindExportOnly() {
    const md = document.getElementById("lc-export-md");
    if (md) {
      md.addEventListener("click", function () {
        if (!result) return;
        const text = Lib.recommendationMarkdown(result, identityFields());
        Lic.downloadText("license-recommendation.md", text, "text/markdown;charset=utf-8");
        showMessage("Downloaded license-recommendation.md", "ok");
        const msgEl = root.querySelector(".lc-msg");
        if (msgEl) msgEl.textContent = message.text;
        else renderAll();
      });
    }
    const js = document.getElementById("lc-export-json");
    if (js) {
      js.addEventListener("click", function () {
        if (!result) return;
        const payload = Lib.recommendationJson(result, identityFields());
        Lic.downloadText(
          "license-recommendation.json",
          JSON.stringify(payload, null, 2),
          "application/json"
        );
        showMessage("Downloaded license-recommendation.json", "ok");
        renderAll();
      });
    }
    const licBtn = document.getElementById("lc-export-license");
    if (licBtn) {
      licBtn.addEventListener("click", function () {
        if (!result) return;
        const fields = Object.assign(identityFields(), { license_key: result.license_key });
        const file = Lic.downloadLicenseFile(fields);
        showMessage(
          file.has_full_text
            ? "Downloaded " + file.filename + " with full legal text."
            : "Downloaded " + file.filename + " stub — follow the URL for full text.",
          "ok"
        );
        renderAll();
      });
    }
  }

  renderAll();
})();
