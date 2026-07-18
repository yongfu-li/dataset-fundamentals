/* Ethical decision tree UI (classic script, file:// safe). */
(function () {
  "use strict";
  const Lib = window.EthicalLib;
  if (!Lib) {
    console.error("EthicalLib missing. Check lib/*.js load order.");
    return;
  }

  let scenario = null;
  let walk = null;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  const root = document.getElementById("eth-root");
  if (!root) return;

  function startScenario(id) {
    scenario = Lib.loadScenario(id);
    walk = Lib.startWalk(scenario);
    renderAll();
  }

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderGuide() +
      renderPicker() +
      (scenario ? renderWorkspace() : "");
    bindEvents();
  }

  function renderIntro() {
    return (
      '<section class="eth-intro">' +
      "<h1>Ethical decision tree</h1>" +
      '<p class="lead">Before you collect or share data, walk consent, purpose, harm, and fairness questions. ' +
      "Each path ends in <strong>proceed</strong>, <strong>revise</strong>, or <strong>stop</strong> " +
      "(Ch.3 §3.9).</p>" +
      '<p class="eth-cross">Pairs with the PII scrubber and de-identification risk checker when the issue is technical privacy; ' +
      "this lab is about judgment when principles conflict.</p>" +
      "</section>"
    );
  }

  function renderGuide() {
    return (
      '<details class="eth-panel eth-guide">' +
      "<summary>Learn → apply</summary>" +
      "<ol>" +
      "<li><strong>Pick a scenario</strong> — marketing partners, hiring screen, or health-app research.</li>" +
      "<li><strong>Answer</strong> — each choice branches the tree; use Back to reconsider.</li>" +
      "<li><strong>Read the outcome</strong> — verdict, rationale, ethical lenses, next steps.</li>" +
      "<li><strong>Export</strong> — keep the decision trail for your audit notes.</li>" +
      "</ol>" +
      '<p class="eth-hint">Lenses named in outcomes (utilitarian, rights-based, virtue, justice, …) match the chapter’s decision frameworks—not a single scoring formula.</p>' +
      "</details>"
    );
  }

  function renderPicker() {
    const list = Lib.listScenarios();
    const cards = list
      .map(function (s) {
        const active = scenario && scenario.id === s.id ? " is-active" : "";
        return (
          '<button type="button" class="eth-preset' +
          active +
          '" data-scenario="' +
          esc(s.id) +
          '">' +
          "<strong>" +
          esc(s.title) +
          "</strong>" +
          "<span>" +
          esc(s.summary) +
          "</span>" +
          "</button>"
        );
      })
      .join("");
    return (
      '<section class="eth-panel">' +
      "<h2>1 · Choose a scenario</h2>" +
      '<div class="eth-presets">' +
      cards +
      "</div>" +
      "</section>"
    );
  }

  function renderWorkspace() {
    return (
      renderContext() +
      renderTrail() +
      (walk.done ? renderOutcome() : renderQuestion()) +
      renderExport()
    );
  }

  function renderContext() {
    return (
      '<section class="eth-panel">' +
      "<h2>2 · Situation</h2>" +
      "<p>" +
      esc(scenario.context) +
      "</p>" +
      "</section>"
    );
  }

  function renderTrail() {
    if (!walk.path.length) {
      return (
        '<section class="eth-panel eth-trail">' +
        "<h2>Path so far</h2>" +
        '<p class="eth-hint">No choices yet.</p>' +
        "</section>"
      );
    }
    const items = walk.path
      .map(function (step, i) {
        return (
          "<li><span class='eth-step-n'>" +
          (i + 1) +
          ".</span> " +
          esc(step.prompt) +
          " → <em>" +
          esc(step.choiceLabel) +
          "</em></li>"
        );
      })
      .join("");
    return (
      '<section class="eth-panel eth-trail">' +
      "<h2>Path so far</h2>" +
      "<ol class='eth-path'>" +
      items +
      "</ol>" +
      "</section>"
    );
  }

  function renderQuestion() {
    const node = Lib.getNode(scenario, walk.nodeId);
    const choices = (node.choices || [])
      .map(function (c) {
        return (
          '<button type="button" class="btn eth-choice" data-choice="' +
          esc(c.id) +
          '">' +
          esc(c.label) +
          "</button>"
        );
      })
      .join("");
    return (
      '<section class="eth-panel">' +
      "<h2>3 · Decide</h2>" +
      '<p class="eth-prompt">' +
      esc(node.prompt) +
      "</p>" +
      (node.hint ? '<p class="eth-hint">' + esc(node.hint) + "</p>" : "") +
      '<div class="eth-choices">' +
      choices +
      "</div>" +
      '<div class="eth-nav">' +
      (walk.path.length
        ? '<button type="button" class="btn btn-secondary" id="eth-back">← Back</button>'
        : "") +
      '<button type="button" class="btn btn-ghost" id="eth-restart">Restart scenario</button>' +
      "</div>" +
      "</section>"
    );
  }

  function renderOutcome() {
    const o = walk.outcome;
    const verdictClass =
      o.verdict === "proceed" ? "ok" : o.verdict === "revise" ? "warn" : "stop";
    const lenses = (o.lenses || [])
      .map(function (l) {
        return '<span class="eth-lens">' + esc(l) + "</span>";
      })
      .join(" ");
    const steps = (o.nextSteps || [])
      .map(function (s) {
        return "<li>" + esc(s) + "</li>";
      })
      .join("");
    return (
      '<section class="eth-panel eth-outcome eth-outcome-' +
      verdictClass +
      '">' +
      "<h2>3 · Outcome</h2>" +
      '<p class="eth-verdict">' +
      esc(Lib.verdictLabel(o.verdict)) +
      "</p>" +
      "<h3>" +
      esc(o.title) +
      "</h3>" +
      "<p>" +
      esc(o.rationale) +
      "</p>" +
      '<p class="eth-lenses"><strong>Lenses:</strong> ' +
      lenses +
      "</p>" +
      "<h4>Next steps</h4>" +
      "<ul>" +
      steps +
      "</ul>" +
      '<div class="eth-nav">' +
      '<button type="button" class="btn btn-secondary" id="eth-back">← Back</button>' +
      '<button type="button" class="btn btn-ghost" id="eth-restart">Restart scenario</button>' +
      "</div>" +
      "</section>"
    );
  }

  function renderExport() {
    if (!walk.done) {
      return (
        '<section class="eth-panel">' +
        "<h2>4 · Export</h2>" +
        '<p class="eth-hint">Finish the tree to download your decision trail.</p>' +
        "</section>"
      );
    }
    return (
      '<section class="eth-panel">' +
      "<h2>4 · Export</h2>" +
      '<div class="deck-links">' +
      '<button type="button" class="btn" id="eth-export-json">Download ethical-decision-trail.json</button>' +
      '<button type="button" class="btn btn-secondary" id="eth-export-md">Download ethical-decision-trail.md</button>' +
      '<a class="btn btn-ghost" href="../pii-scrubber/index.html">PII scrubber</a>' +
      '<a class="btn btn-ghost" href="../deid-risk/index.html">De-id risk</a>' +
      "</div>" +
      "</section>"
    );
  }

  function bindEvents() {
    root.querySelectorAll("[data-scenario]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        startScenario(btn.getAttribute("data-scenario"));
      });
    });
    root.querySelectorAll("[data-choice]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        try {
          walk = Lib.choose(scenario, walk, btn.getAttribute("data-choice"));
        } catch (err) {
          console.error(err);
        }
        renderAll();
      });
    });
    const back = document.getElementById("eth-back");
    if (back) {
      back.addEventListener("click", function () {
        walk = Lib.back(scenario, walk);
        renderAll();
      });
    }
    const restart = document.getElementById("eth-restart");
    if (restart) {
      restart.addEventListener("click", function () {
        walk = Lib.startWalk(scenario);
        renderAll();
      });
    }
    const exJ = document.getElementById("eth-export-json");
    if (exJ) {
      exJ.addEventListener("click", function () {
        Lib.downloadReportJson(Lib.buildReport(scenario, walk));
      });
    }
    const exM = document.getElementById("eth-export-md");
    if (exM) {
      exM.addEventListener("click", function () {
        Lib.downloadReportMd(Lib.buildReport(scenario, walk));
      });
    }
  }

  renderAll();
})();
