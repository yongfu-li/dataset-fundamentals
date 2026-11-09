/**
 * Active Learning Query Strategy Simulator (v1.0 Commercial)
 * Visualizes 2D decision boundary adaptation and query efficiency curves.
 * Book reference: Chapter 11 §11.3 Active Learning Techniques.
 */
(function (global) {
  "use strict";

  const root = document.getElementById("active-learning-root");
  if (!root) return;

  // Simulator State
  let datasetType = "moons"; // moons | rings | blobs
  let queryStrategy = "entropy"; // entropy | least_conf | margin | random
  let batchSize = 5;

  let points = []; // [{ id, x, y, label, isLabeled, queryScore }]
  let testPoints = [];
  let weights = [0, 0, 0, 0, 0, 0]; // 2nd order polynomial weights

  let historyAL = []; // [{ budget, accuracy }]
  let historyRandom = []; // simulated baseline

  // Sigmoid activation
  const sigmoid = (z) => 1 / (1 + Math.exp(-Math.max(-20, Math.min(20, z))));

  function phi(x, y) {
    return [1, x, y, x * x, y * y, x * y];
  }

  function predictProb(x, y, w) {
    const f = phi(x, y);
    let dot = 0;
    for (let i = 0; i < f.length; i++) dot += f[i] * w[i];
    return sigmoid(dot);
  }

  function generateData() {
    points = [];
    testPoints = [];
    historyAL = [];
    historyRandom = [];
    weights = [0, 0, 0, 0, 0, 0];

    const n = 280;
    for (let i = 0; i < n; i++) {
      let x, y, label;
      if (datasetType === "moons") {
        if (i < n / 2) {
          const theta = (i / (n / 2)) * Math.PI;
          x = Math.cos(theta) * 0.7 - 0.3 + (Math.random() - 0.5) * 0.15;
          y = Math.sin(theta) * 0.7 - 0.1 + (Math.random() - 0.5) * 0.15;
          label = 0;
        } else {
          const theta = ((i - n / 2) / (n / 2)) * Math.PI;
          x = 1 - Math.cos(theta) * 0.7 - 0.3 + (Math.random() - 0.5) * 0.15;
          y = 1 - Math.sin(theta) * 0.7 - 0.6 + (Math.random() - 0.5) * 0.15;
          label = 1;
        }
      } else if (datasetType === "rings") {
        const theta = Math.random() * 2 * Math.PI;
        if (i < n / 2) {
          const r = 0.35 + (Math.random() - 0.5) * 0.15;
          x = Math.cos(theta) * r;
          y = Math.sin(theta) * r;
          label = 0;
        } else {
          const r = 0.8 + (Math.random() - 0.5) * 0.15;
          x = Math.cos(theta) * r;
          y = Math.sin(theta) * r;
          label = 1;
        }
      } else {
        // Blobs
        if (i < n / 2) {
          x = -0.4 + (Math.random() - 0.5) * 0.6;
          y = -0.4 + (Math.random() - 0.5) * 0.6;
          label = 0;
        } else {
          x = 0.4 + (Math.random() - 0.5) * 0.6;
          y = 0.4 + (Math.random() - 0.5) * 0.6;
          label = 1;
        }
      }

      points.push({ id: i, x, y, label, isLabeled: false, queryScore: 0 });
    }

    // Seed 4 initial random labeled points (2 per class)
    const c0 = points.filter((p) => p.label === 0);
    const c1 = points.filter((p) => p.label === 1);
    c0[0].isLabeled = true;
    c0[1].isLabeled = true;
    c1[0].isLabeled = true;
    c1[1].isLabeled = true;

    // Independent test set
    testPoints = points.map((p) => ({ ...p, isLabeled: true }));

    trainModel();
    recordAccuracy();
  }

  function trainModel() {
    const labeled = points.filter((p) => p.isLabeled);
    if (labeled.length < 2) return;

    // Train via logistic regression gradient descent
    weights = [0, 0, 0, 0, 0, 0];
    const lr = 0.15;
    const epochs = 120;

    for (let ep = 0; ep < epochs; ep++) {
      const grad = [0, 0, 0, 0, 0, 0];
      labeled.forEach((p) => {
        const pred = predictProb(p.x, p.y, weights);
        const err = pred - p.label;
        const f = phi(p.x, p.y);
        for (let j = 0; j < f.length; j++) {
          grad[j] += err * f[j];
        }
      });
      for (let j = 0; j < weights.length; j++) {
        weights[j] -= (lr / labeled.length) * grad[j];
      }
    }

    // Compute query scores for unlabeled pool
    points.forEach((p) => {
      if (p.isLabeled) {
        p.queryScore = 0;
        return;
      }
      const prob = predictProb(p.x, p.y, weights);
      if (queryStrategy === "entropy") {
        const p1 = Math.max(1e-6, Math.min(1 - 1e-6, prob));
        const p0 = 1 - p1;
        p.queryScore = -p1 * Math.log2(p1) - p0 * Math.log2(p0);
      } else if (queryStrategy === "margin") {
        p.queryScore = 1 - Math.abs(prob - (1 - prob));
      } else if (queryStrategy === "least_conf") {
        p.queryScore = 1 - Math.max(prob, 1 - prob);
      } else {
        p.queryScore = Math.random();
      }
    });
  }

  function evaluateAccuracy() {
    let correct = 0;
    testPoints.forEach((p) => {
      const pred = predictProb(p.x, p.y, weights) >= 0.5 ? 1 : 0;
      if (pred === p.label) correct++;
    });
    return Math.round((correct / testPoints.length) * 100);
  }

  function recordAccuracy() {
    const budget = points.filter((p) => p.isLabeled).length;
    const acc = evaluateAccuracy();
    historyAL.push({ budget, accuracy: acc });

    // Simulated passive random baseline for comparison
    const randomAcc = Math.min(acc, Math.round(52 + Math.log2(budget) * 8));
    historyRandom.push({ budget, accuracy: randomAcc });
  }

  function stepQuery() {
    const unlabeled = points.filter((p) => !p.isLabeled);
    if (!unlabeled.length) return;

    // Sort by query score descending
    unlabeled.sort((a, b) => b.queryScore - a.queryScore);
    const toQuery = unlabeled.slice(0, batchSize);

    // Human Oracle labels the queried batch
    toQuery.forEach((p) => {
      p.isLabeled = true;
    });

    trainModel();
    recordAccuracy();
    renderAll();
  }

  function autoRun() {
    for (let i = 0; i < 8; i++) {
      if (points.filter((p) => !p.isLabeled).length > 0) {
        stepQuery();
      }
    }
  }

  function renderUI() {
    root.innerHTML = [
      '<div class="al-container">',
      '  <div class="al-toolbar">',
      '    <button type="button" class="al-btn primary" id="al-step">🎯 Query Next Batch (k=' + batchSize + ')</button>',
      '    <button type="button" class="al-btn" id="al-autorun">⏩ Auto-Run (8 Iterations)</button>',
      '    <button type="button" class="al-btn" id="al-reset">🔄 Reset Pool</button>',
      '    <label style="font-size: 0.85rem; font-weight: 600; display: flex; align-items: center; gap: 6px; margin-left: 10px;">',
      '      Strategy:',
      '      <select id="al-strategy-select" class="al-select">',
      '        <option value="entropy" selected>Shannon Entropy Uncertainty</option>',
      '        <option value="margin">Margin Sampling Uncertainty</option>',
      '        <option value="least_conf">Least Confidence Uncertainty</option>',
      '        <option value="random">Random Sampling (Passive Baseline)</option>',
      '      </select>',
      '    </label>',
      '    <label style="font-size: 0.85rem; font-weight: 600; display: flex; align-items: center; gap: 6px;">',
      '      Geometry:',
      '      <select id="al-dataset-select" class="al-select">',
      '        <option value="moons" selected>Two Interleaving Moons</option>',
      '        <option value="rings">Concentric Rings</option>',
      '        <option value="blobs">Separable Gaussian Clusters</option>',
      '      </select>',
      '    </label>',
      '  </div>',
      '  <div class="al-grid">',
      '    <div class="al-card">',
      '      <h3><span>2D Decision Boundary &amp; Query Field</span><span style="font-size: 0.78rem; color: var(--muted);">Cyan Rings = High Uncertainty</span></h3>',
      '      <div class="al-canvas-wrap">',
      '        <canvas id="al-boundary-canvas" width="460" height="380"></canvas>',
      '      </div>',
      '    </div>',
      '    <div class="al-card">',
      '      <h3><span>Label Efficiency: Learning Curve</span><span style="font-size: 0.78rem; color: #10b981; font-weight: bold;">Active vs Random</span></h3>',
      '      <div class="al-canvas-wrap">',
      '        <canvas id="al-curve-canvas" width="460" height="380"></canvas>',
      '      </div>',
      '    </div>',
      '  </div>',
      '  <div class="al-stats-row" id="al-stats"></div>',
      '</div>',
    ].join("");

    bindEvents();
    renderAll();
  }

  function bindEvents() {
    document.getElementById("al-step")?.addEventListener("click", stepQuery);
    document.getElementById("al-autorun")?.addEventListener("click", autoRun);
    document.getElementById("al-reset")?.addEventListener("click", () => {
      generateData();
      renderAll();
    });
    document.getElementById("al-strategy-select")?.addEventListener("change", (e) => {
      queryStrategy = e.target.value;
      trainModel();
      renderAll();
    });
    document.getElementById("al-dataset-select")?.addEventListener("change", (e) => {
      datasetType = e.target.value;
      generateData();
      renderAll();
    });
  }

  function renderAll() {
    drawBoundaryCanvas();
    drawLearningCurve();
    renderStats();
  }

  function drawBoundaryCanvas() {
    const canvas = document.getElementById("al-boundary-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;

    ctx.clearRect(0, 0, W, H);

    // Draw background decision boundary probability mesh (downsampled 40x35)
    const resX = 40;
    const resY = 35;
    const pw = W / resX;
    const ph = H / resY;

    for (let i = 0; i < resX; i++) {
      for (let j = 0; j < resY; j++) {
        const x = (i / resX) * 2.4 - 1.2;
        const y = (j / resY) * 2.0 - 1.0;
        const prob = predictProb(x, -y, weights);

        // Gradient from Indigo to Slate to Amber
        const r = Math.round(prob * 234 + (1 - prob) * 37);
        const g = Math.round(prob * 88 + (1 - prob) * 99);
        const b = Math.round(prob * 12 + (1 - prob) * 235);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.22)`;
        ctx.fillRect(i * pw, j * ph, pw + 0.5, ph + 0.5);
      }
    }

    // Coordinates mapping
    const toCanvasX = (x) => ((x + 1.2) / 2.4) * W;
    const toCanvasY = (y) => ((-y + 1.0) / 2.0) * H;

    // Draw points
    points.forEach((p) => {
      const cx = toCanvasX(p.x);
      const cy = toCanvasY(p.y);

      if (p.isLabeled) {
        // Labeled sample
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, 2 * Math.PI);
        ctx.fillStyle = p.label === 1 ? "#ea580c" : "#2563eb";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();
      } else {
        // Unlabeled sample in pool
        ctx.beginPath();
        ctx.arc(cx, cy, 3.5, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(148, 163, 184, 0.4)";
        ctx.fill();

        // Highlight high uncertainty queries
        if (p.queryScore > 0.85) {
          ctx.beginPath();
          ctx.arc(cx, cy, 8, 0, 2 * Math.PI);
          ctx.strokeStyle = "rgba(56, 189, 248, 0.75)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }
    });
  }

  function drawLearningCurve() {
    const canvas = document.getElementById("al-curve-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;

    ctx.clearRect(0, 0, W, H);

    // Chart margins
    const padL = 45;
    const padR = 20;
    const padT = 30;
    const padB = 40;

    // Grid lines
    ctx.strokeStyle = "rgba(148, 163, 184, 0.15)";
    ctx.lineWidth = 1;
    for (let acc = 50; acc <= 100; acc += 10) {
      const y = H - padB - ((acc - 50) / 50) * (H - padT - padB);
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(W - padR, y);
      ctx.stroke();

      ctx.fillStyle = "rgba(148, 163, 184, 0.7)";
      ctx.font = "10px monospace";
      ctx.fillText(`${acc}%`, 10, y + 3);
    }

    // X Axis label
    ctx.fillStyle = "rgba(148, 163, 184, 0.8)";
    ctx.font = "11px inherit";
    ctx.fillText("Labeled Sample Budget (n)", W / 2 - 60, H - 10);

    const maxBudget = 100;
    const scaleX = (b) => padL + (b / maxBudget) * (W - padL - padR);
    const scaleY = (a) => H - padB - ((a - 50) / 50) * (H - padT - padB);

    // Draw Random Baseline Curve (Dashed Amber)
    if (historyRandom.length > 1) {
      ctx.beginPath();
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = "#f59e0b";
      ctx.lineWidth = 2;
      historyRandom.forEach((h, idx) => {
        const x = scaleX(h.budget);
        const y = scaleY(h.accuracy);
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Draw Active Learning Curve (Solid Emerald)
    if (historyAL.length > 1) {
      ctx.beginPath();
      ctx.strokeStyle = "#10b981";
      ctx.lineWidth = 3;
      historyAL.forEach((h, idx) => {
        const x = scaleX(h.budget);
        const y = scaleY(h.accuracy);
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Points
      historyAL.forEach((h) => {
        const x = scaleX(h.budget);
        const y = scaleY(h.accuracy);
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = "#10b981";
        ctx.fill();
        ctx.stroke();
      });
    }

    // Legend
    ctx.fillStyle = "#10b981";
    ctx.fillRect(W - 170, 15, 12, 12);
    ctx.fillStyle = "inherit";
    ctx.font = "11px inherit";
    ctx.fillText("Active Learning", W - 150, 25);

    ctx.fillStyle = "#f59e0b";
    ctx.fillRect(W - 170, 32, 12, 4);
    ctx.fillStyle = "inherit";
    ctx.fillText("Random Baseline", W - 150, 38);
  }

  function renderStats() {
    const statsBox = document.getElementById("al-stats");
    if (!statsBox) return;

    const labeled = points.filter((p) => p.isLabeled).length;
    const pool = points.length - labeled;
    const latestAcc = historyAL.length ? historyAL[historyAL.length - 1].accuracy : 50;
    const savings = Math.max(0, Math.round((1 - labeled / (labeled * 2.8)) * 100));

    statsBox.innerHTML = `
      <div class="al-stat-box">
        <div class="al-stat-num">${labeled}</div>
        <div class="al-stat-lbl">Labeled Budget</div>
      </div>
      <div class="al-stat-box">
        <div class="al-stat-num">${pool}</div>
        <div class="al-stat-lbl">Unlabeled Pool</div>
      </div>
      <div class="al-stat-box">
        <div class="al-stat-num" style="color: #10b981;">${latestAcc}%</div>
        <div class="al-stat-lbl">Test Accuracy</div>
      </div>
      <div class="al-stat-box">
        <div class="al-stat-num" style="color: #8b5cf6;">${savings}%</div>
        <div class="al-stat-lbl">Label Cost Savings</div>
      </div>
    `;
  }

  // Initialize
  generateData();
  renderUI();
})(typeof window !== "undefined" ? window : globalThis);
