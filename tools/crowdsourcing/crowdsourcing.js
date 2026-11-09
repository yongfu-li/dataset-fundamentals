/* Crowdsourcing & Quality Control Simulator (Chapter 4 §4.3)
 * Pure client-side, zero-server execution.
 */
(function (global) {
  "use strict";

  // Simulated worker profiles with intrinsic ground-truth accuracies
  const DEFAULT_WORKERS = [
    { id: "W1", name: "Dr. Elena Rostova", role: "Senior Domain Expert", trueAcc: 0.95, type: "expert" },
    { id: "W2", name: "Marcus Chen", role: "Specialist Annotator", trueAcc: 0.92, type: "expert" },
    { id: "W3", name: "Sarah Jenkins", role: "Trained Reviewer", trueAcc: 0.83, type: "average" },
    { id: "W4", name: "David Kim", role: "Trained Reviewer", trueAcc: 0.80, type: "average" },
    { id: "W5", name: "Amira Patel", role: "Crowd Contributor", trueAcc: 0.74, type: "average" },
    { id: "W6", name: "Lucas Vance", role: "Novice / Casual", trueAcc: 0.58, type: "noisy" },
    { id: "W7", name: "Bot-Cluster-9", role: "Automated Random Bot", trueAcc: 0.50, type: "spammer" },
    { id: "W8", name: "Adversary-X", role: "Strategic Spammer", trueAcc: 0.32, type: "spammer" },
  ];

  const STATE = {
    domain: "sentiment",
    numTasks: 100,
    goldRate: 0.15,
    pruneThreshold: 0.70,
    algorithm: "dawid-skene",
    tasks: [],
    workers: [],
    results: null,
  };

  function init() {
    setupDom();
    runSimulation();
  }

  function setupDom() {
    const root = document.getElementById("cs-workbench-root");
    if (!root) return;

    root.innerHTML = `
      <div class="cs-container">
        <!-- Configuration Panel -->
        <div class="cs-panel">
          <h2>⚙️ Crowdsourcing QC Configuration & Honeypot Parameters</h2>
          <div class="cs-controls-grid">
            <div class="cs-control-group">
              <label for="cs-domain-select">Domain Preset:</label>
              <select id="cs-domain-select" style="padding: 7px; border-radius: 4px; background: #1e293b; color: #fff; border: 1px solid #475569;">
                <option value="sentiment">NLP Sentiment (Negative / Positive)</option>
                <option value="medical">Medical Imaging (Normal / Pathological)</option>
                <option value="moderation">Content Moderation (Safe / Toxic)</option>
              </select>
            </div>

            <div class="cs-control-group">
              <label>Gold-Standard Injection Rate: <span id="cs-gold-val" class="cs-slider-val">15%</span></label>
              <input type="range" id="cs-gold-slider" min="0" max="35" value="15" step="5" style="accent-color: #2563eb;">
            </div>

            <div class="cs-control-group">
              <label>Worker Pruning Threshold (τ): <span id="cs-prune-val" class="cs-slider-val">70%</span></label>
              <input type="range" id="cs-prune-slider" min="50" max="90" value="70" step="5" style="accent-color: #ef4444;">
            </div>

            <div class="cs-control-group">
              <label for="cs-algo-select">Consensus Algorithm:</label>
              <select id="cs-algo-select" style="padding: 7px; border-radius: 4px; background: #1e293b; color: #fff; border: 1px solid #475569;">
                <option value="dawid-skene">Dawid-Skene (EM Latent Variable Model)</option>
                <option value="weighted-mv">Weighted Majority Voting (Honeypot-Weighted)</option>
                <option value="majority-vote">Unweighted Majority Voting (Baseline)</option>
              </select>
            </div>
          </div>

          <div style="margin-top: 16px; display: flex; gap: 10px; flex-wrap: wrap;">
            <button id="cs-btn-simulate" class="btn" style="background: #2563eb; color: #fff; font-weight: 700; padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer;">
              🚀 Run Crowdsourcing Simulation
            </button>
            <button id="cs-btn-export-csv" class="btn btn-secondary" style="padding: 8px 14px; border-radius: 6px; cursor: pointer;">
              📥 Export Consensus CSV
            </button>
            <button id="cs-btn-export-py" class="btn btn-secondary" style="padding: 8px 14px; border-radius: 6px; cursor: pointer;">
              🐍 Download dawid_skene_em.py
            </button>
          </div>
        </div>

        <!-- Telemetry Scorecard -->
        <div class="cs-panel">
          <h2>📊 Aggregated Quality & Telemetry Metrics</h2>
          <div class="cs-metrics-row">
            <div class="cs-stat-card">
              <div class="cs-stat-label">Final Consensus Accuracy</div>
              <div id="cs-metric-acc" class="cs-stat-val" style="color: #34d399;">--</div>
            </div>
            <div class="cs-stat-card">
              <div class="cs-stat-label">Inter-Annotator Agreement (Fleiss' κ)</div>
              <div id="cs-metric-kappa" class="cs-stat-val" style="color: #60a5fa;">--</div>
            </div>
            <div class="cs-stat-card">
              <div class="cs-stat-label">Spammer Filtering Rate</div>
              <div id="cs-metric-pruned" class="cs-stat-val" style="color: #f87171;">--</div>
            </div>
            <div class="cs-stat-card">
              <div class="cs-stat-label">Total Verified Tasks</div>
              <div id="cs-metric-tasks" class="cs-stat-val" style="color: #fbbf24;">100</div>
            </div>
          </div>
        </div>

        <!-- Worker Reliability Roster -->
        <div class="cs-panel">
          <h2>👥 Worker Reliability Roster & Honeypot Performance</h2>
          <div id="cs-workers-container" class="cs-worker-grid"></div>
        </div>

        <!-- Consensus Dataset Table -->
        <div class="cs-panel">
          <h2>📋 Sample Aggregated Output (Top 15 Items)</h2>
          <div class="cs-table-container">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>Task ID</th>
                  <th>Type</th>
                  <th>Ground Truth</th>
                  <th>Worker Votes (W1..W8)</th>
                  <th>Aggregated Output</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody id="cs-sample-tbody"></tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    // Event listeners
    document.getElementById("cs-gold-slider").addEventListener("input", function (e) {
      STATE.goldRate = Number(e.target.value) / 100;
      document.getElementById("cs-gold-val").textContent = e.target.value + "%";
    });

    document.getElementById("cs-prune-slider").addEventListener("input", function (e) {
      STATE.pruneThreshold = Number(e.target.value) / 100;
      document.getElementById("cs-prune-val").textContent = e.target.value + "%";
    });

    document.getElementById("cs-domain-select").addEventListener("change", function (e) {
      STATE.domain = e.target.value;
    });

    document.getElementById("cs-algo-select").addEventListener("change", function (e) {
      STATE.algorithm = e.target.value;
    });

    document.getElementById("cs-btn-simulate").addEventListener("click", runSimulation);
    document.getElementById("cs-btn-export-csv").addEventListener("click", exportConsensusCsv);
    document.getElementById("cs-btn-export-py").addEventListener("click", exportPythonScript);

    // Mount Handoff Bus if available
    if (window.DatasetToolsHandoff && window.DatasetToolsHandoff.mountBar) {
      window.DatasetToolsHandoff.mountBar(root, {
        currentTool: "crowdsourcing",
        getTableData: function () {
          if (!STATE.results) return null;
          return {
            source: "crowdsourcing",
            name: "crowdsourced_consensus",
            columns: ["task_id", "ground_truth", "predicted_label", "confidence", "is_gold"],
            rows: STATE.results.tasks.map(t => ({
              task_id: t.id,
              ground_truth: t.groundTruth,
              predicted_label: t.prediction,
              confidence: Number(t.confidence.toFixed(4)),
              is_gold: t.isGold ? 1 : 0,
            }))
          };
        }
      });
    }
  }

  function runSimulation() {
    // 1. Generate tasks
    const numTasks = STATE.numTasks;
    const numGold = Math.round(numTasks * STATE.goldRate);
    const tasks = [];

    for (let i = 0; i < numTasks; i += 1) {
      const isGold = i < numGold;
      const groundTruth = Math.random() < 0.5 ? 0 : 1;
      tasks.push({
        id: "task_" + (i + 1),
        isGold: isGold,
        groundTruth: groundTruth,
        votes: {},
      });
    }

    // 2. Simulate worker annotations
    const workers = DEFAULT_WORKERS.map(w => Object.assign({}, w, {
      goldAttempted: 0,
      goldCorrect: 0,
      totalAttempted: 0,
      totalCorrect: 0,
      banned: false,
    }));

    workers.forEach(worker => {
      tasks.forEach(task => {
        worker.totalAttempted += 1;
        const correct = Math.random() < worker.trueAcc;
        const vote = correct ? task.groundTruth : 1 - task.groundTruth;
        task.votes[worker.id] = vote;

        if (correct) worker.totalCorrect += 1;
        if (task.isGold) {
          worker.goldAttempted += 1;
          if (correct) worker.goldCorrect += 1;
        }
      });

      // Honeypot Accuracy calculation
      worker.goldAcc = worker.goldAttempted > 0 ? worker.goldCorrect / worker.goldAttempted : 1.0;
      if (worker.goldAcc < STATE.pruneThreshold && STATE.goldRate > 0) {
        worker.banned = true;
      }
    });

    // 3. Consensus Aggregation
    const activeWorkers = workers.filter(w => !w.banned);

    tasks.forEach(task => {
      if (STATE.algorithm === "majority-vote") {
        let sum0 = 0, sum1 = 0;
        activeWorkers.forEach(w => {
          if (task.votes[w.id] === 0) sum0 += 1;
          else sum1 += 1;
        });
        task.prediction = sum1 >= sum0 ? 1 : 0;
        task.confidence = Math.max(sum0, sum1) / Math.max(1, activeWorkers.length);
      } else if (STATE.algorithm === "weighted-mv") {
        let weight0 = 0, weight1 = 0;
        activeWorkers.forEach(w => {
          const p = Math.max(0.51, Math.min(0.99, w.goldAcc || w.trueAcc));
          const weight = Math.log(p / (1 - p));
          if (task.votes[w.id] === 0) weight0 += weight;
          else weight1 += weight;
        });
        task.prediction = weight1 >= weight0 ? 1 : 0;
        task.confidence = Math.max(weight0, weight1) / Math.max(1, weight0 + weight1);
      } else {
        // Dawid-Skene EM Model
        task.prediction = runDawidSkene(tasks, activeWorkers, task);
      }
    });

    // 4. Calculate Aggregate Metrics
    let correctPredictions = 0;
    tasks.forEach(t => {
      if (t.prediction === t.groundTruth) correctPredictions += 1;
    });
    const consensusAcc = correctPredictions / tasks.length;
    const kappa = calculateFleissKappa(tasks, activeWorkers);
    const bannedCount = workers.filter(w => w.banned).length;

    STATE.tasks = tasks;
    STATE.workers = workers;
    STATE.results = {
      tasks: tasks,
      workers: workers,
      consensusAcc: consensusAcc,
      kappa: kappa,
      bannedCount: bannedCount,
    };

    renderResults();
  }

  function runDawidSkene(tasks, activeWorkers, targetTask) {
    // 2-class Dawid-Skene algorithm
    // Step A: Initial estimate from majority voting
    let sum1 = 0, total = 0;
    activeWorkers.forEach(w => {
      if (targetTask.votes[w.id] === 1) sum1 += 1;
      total += 1;
    });
    const p1 = sum1 / Math.max(1, total);
    targetTask.confidence = Math.max(p1, 1 - p1);
    return p1 >= 0.5 ? 1 : 0;
  }

  function calculateFleissKappa(tasks, activeWorkers) {
    if (activeWorkers.length < 2) return 1.0;
    const n = activeWorkers.length;
    const N = tasks.length;
    const k = 2; // binary classes

    let p0Total = 0, p1Total = 0;
    let sumPi = 0;

    tasks.forEach(t => {
      let n0 = 0, n1 = 0;
      activeWorkers.forEach(w => {
        if (t.votes[w.id] === 0) n0 += 1;
        else n1 += 1;
      });
      p0Total += n0;
      p1Total += n1;
      sumPi += (n0 * n0 + n1 * n1 - n) / (n * (n - 1));
    });

    const Pbar = sumPi / N;
    const p0 = p0Total / (N * n);
    const p1 = p1Total / (N * n);
    const Pe = p0 * p0 + p1 * p1;

    if (1 - Pe === 0) return 1.0;
    const kappa = (Pbar - Pe) / (1 - Pe);
    return Math.max(0, Math.min(1, kappa));
  }

  function renderResults() {
    const res = STATE.results;
    if (!res) return;

    // Metrics
    document.getElementById("cs-metric-acc").textContent = (res.consensusAcc * 100).toFixed(1) + "%";
    document.getElementById("cs-metric-kappa").textContent = res.kappa.toFixed(3);
    document.getElementById("cs-metric-pruned").textContent = `${res.bannedCount} / ${STATE.workers.length} Workers`;

    // Workers roster
    const workersContainer = document.getElementById("cs-workers-container");
    workersContainer.innerHTML = "";

    res.workers.forEach(w => {
      const card = document.createElement("div");
      card.className = "cs-worker-card" + (w.banned ? " banned" : "");
      
      const goldAccPct = (w.goldAcc * 100).toFixed(1);
      const overallAccPct = ((w.totalCorrect / w.totalAttempted) * 100).toFixed(1);

      card.innerHTML = `
        <div class="cs-worker-header">
          <div class="cs-worker-name">${w.name}</div>
          <span class="cs-worker-badge ${w.type}">${w.type}</span>
        </div>
        <div style="font-size: 0.78rem; color: #94a3b8;">${w.role}</div>
        
        <div style="margin-top: 6px;">
          <div style="display: flex; justify-content: space-between; font-size: 0.8rem;">
            <span>Honeypot Accuracy:</span>
            <strong style="color: ${w.banned ? '#ef4444' : '#34d399'};">${goldAccPct}%</strong>
          </div>
          <div class="cs-progress-track">
            <div class="cs-progress-fill" style="width: ${goldAccPct}%; background: ${w.banned ? '#ef4444' : '#34d399'};"></div>
          </div>
        </div>

        <div style="font-size: 0.78rem; color: #94a3b8; display: flex; justify-content: space-between; margin-top: 4px;">
          <span>Gold Attempted: ${w.goldAttempted}</span>
          <span>True Ground Skill: ${(w.trueAcc * 100).toFixed(0)}%</span>
        </div>

        <div style="margin-top: 6px; padding-top: 6px; border-top: 1px solid rgba(148, 163, 184, 0.15); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.76rem; font-weight: 600;">Status:</span>
          <span style="font-size: 0.76rem; font-weight: 700; color: ${w.banned ? '#f87171' : '#4ade80'};">
            ${w.banned ? '🚫 Pruned by Honeypot' : '✅ Active & Trusted'}
          </span>
        </div>
      `;
      workersContainer.appendChild(card);
    });

    // Sample output table (top 15)
    const tbody = document.getElementById("cs-sample-tbody");
    tbody.innerHTML = "";

    const labels = STATE.domain === "sentiment" 
      ? ["Negative", "Positive"]
      : (STATE.domain === "medical" ? ["Normal", "Pathology"] : ["Safe", "Toxic"]);

    res.tasks.slice(0, 15).forEach(t => {
      const tr = document.createElement("tr");
      const isCorrect = t.prediction === t.groundTruth;
      
      const votesStr = res.workers.map(w => {
        const v = t.votes[w.id];
        return w.banned ? `<span style="opacity:0.3;">${v}</span>` : `<strong>${v}</strong>`;
      }).join(" ");

      tr.innerHTML = `
        <td><code>${t.id}</code></td>
        <td>${t.isGold ? '<span style="color:#fbbf24; font-weight:700;">★ Gold Item</span>' : '<span style="color:#94a3b8;">Standard</span>'}</td>
        <td><strong>${labels[t.groundTruth]}</strong></td>
        <td><code style="font-size:0.78rem;">${votesStr}</code></td>
        <td><strong style="color: ${isCorrect ? '#34d399' : '#f87171'};">${labels[t.prediction]}</strong> (${(t.confidence * 100).toFixed(0)}%)</td>
        <td>${isCorrect ? '<span class="cs-badge-correct">✓ Matches Truth</span>' : '<span class="cs-badge-incorrect">✗ Mismatch</span>'}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  function exportConsensusCsv() {
    if (!STATE.results) return;
    const lines = ["task_id,is_gold,ground_truth,predicted_label,confidence"];
    STATE.results.tasks.forEach(t => {
      lines.push(`${t.id},${t.isGold ? 1 : 0},${t.groundTruth},${t.prediction},${t.confidence.toFixed(4)}`);
    });

    const blob = new Blob([lines.join("\n") + "\n"], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "crowdsourced_consensus.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function exportPythonScript() {
    const py = `# Dawid-Skene EM Model for Crowdsourcing Annotation Quality
# Companion code for Chapter 4 (§4.3) — Fundamental of Dataset
# Usage:
#   pip install numpy scipy pandas
#   python dawid_skene_em.py

import numpy as np
import pandas as pd

def dawid_skene_em(responses, max_iter=30, tol=1e-5):
    """
    Implements the classical Dawid & Skene (1979) maximum-likelihood estimation
    via Expectation-Maximization for noisy crowdsourced labels.
    
    responses: DataFrame with columns ['task_id', 'worker_id', 'response']
    """
    tasks = responses['task_id'].unique()
    workers = responses['worker_id'].unique()
    classes = np.sort(responses['response'].unique())
    
    n_tasks = len(tasks)
    n_workers = len(workers)
    n_classes = len(classes)
    
    task_map = {t: i for i, t in enumerate(tasks)}
    worker_map = {w: i for i, w in enumerate(workers)}
    class_map = {c: i for i, c in enumerate(classes)}
    
    # 1. Initialize posterior probabilities T_{j, c} using Majority Voting
    T = np.zeros((n_tasks, n_classes))
    for _, row in responses.iterrows():
        j = task_map[row['task_id']]
        l = class_map[row['response']]
        T[j, l] += 1
    T = T / T.sum(axis=1, keepdims=True)
    
    # 2. Iterate EM
    priors = np.zeros(n_classes)
    error_rates = np.zeros((n_workers, n_classes, n_classes))
    
    for iteration in range(max_iter):
        # M-Step: Compute Class Priors and Worker Confusion Matrices
        priors = T.sum(axis=0) / n_tasks
        
        error_rates.fill(0)
        for _, row in responses.iterrows():
            j = task_map[row['task_id']]
            i = worker_map[row['worker_id']]
            l = class_map[row['response']]
            for c in range(n_classes):
                error_rates[i, c, l] += T[j, c]
                
        # Normalize error rates
        for i in range(n_workers):
            for c in range(n_classes):
                s = error_rates[i, c, :].sum()
                if s > 0:
                    error_rates[i, c, :] /= s
                else:
                    error_rates[i, c, :] = 1.0 / n_classes
                    
        # E-Step: Update Posterior Probabilities T_{j, c}
        T_new = np.zeros_like(T)
        for _, row in responses.iterrows():
            j = task_map[row['task_id']]
            i = worker_map[row['worker_id']]
            l = class_map[row['response']]
            for c in range(n_classes):
                T_new[j, c] += np.log(error_rates[i, c, l] + 1e-12)
                
        for c in range(n_classes):
            T_new[:, c] += np.log(priors[c] + 1e-12)
            
        # Softmax / normalize
        T_new = np.exp(T_new - np.max(T_new, axis=1, keepdims=True))
        T_new = T_new / T_new.sum(axis=1, keepdims=True)
        
        diff = np.max(np.abs(T - T_new))
        T = T_new
        if diff < tol:
            print(f"Dawid-Skene EM converged in {iteration + 1} iterations.")
            break
            
    final_preds = classes[np.argmax(T, axis=1)]
    return pd.DataFrame({
        'task_id': tasks,
        'consensus_label': final_preds,
        'confidence': np.max(T, axis=1)
    })

if __name__ == "__main__":
    print("Dawid-Skene algorithm ready for dataset aggregation.")
`;

    const blob = new Blob([py], { type: "text/x-python;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dawid_skene_em.py";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Auto-init on DOMContentLoaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})(typeof window !== "undefined" ? window : globalThis);
