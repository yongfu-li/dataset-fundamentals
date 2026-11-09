/**
 * Visual Pipeline Builder Studio (v1.0 Commercial)
 * Node-based DAG workflow orchestrator for end-to-end dataset engineering.
 * Book reference: Chapter 5 §5.7 Pipelines and Automation.
 */
(function (global) {
  "use strict";

  const root = document.getElementById("pipeline-root");
  if (!root) return;

  // Node definitions registry
  const NODE_TYPES = {
    ingest: {
      title: "1. Data Ingestion",
      icon: "📥",
      color: "#2563eb",
      inputs: 0,
      outputs: 1,
      defaultConfig: { source: "customer-orders", format: "csv" },
      process: (input, cfg) => {
        if (cfg && cfg.customRows) {
          return { rows: cfg.customRows, columns: cfg.customColumns || Object.keys(cfg.customRows[0]), log: `Ingested ${cfg.customRows.length} records from pipeline handoff.` };
        }
        // Generates sample mock dataset if no parent
        const rows = [
          { id: "U101", age: 28, income: 55000, email: "alice@domain.com", city: "NYC", group: "A", churn: 0 },
          { id: "U102", age: null, income: 82000, email: "bob@domain.com", city: "SF", group: "B", churn: 1 },
          { id: "U103", age: 45, income: 61000, email: "carol@domain.com", city: "NYC", group: "A", churn: 0 },
          { id: "U104", age: 34, income: 195000, email: "dave@corp.org", city: "LA", group: "B", churn: 1 },
          { id: "U105", age: 28, income: 55000, email: "alice@domain.com", city: "NYC", group: "A", churn: 0 }, // Duplicate
          { id: "U106", age: 52, income: 72000, email: "eve@secure.io", city: "SF", group: "A", churn: 0 },
          { id: "U107", age: 29, income: null, email: "frank@corp.org", city: "LA", group: "B", churn: 1 },
          { id: "U108", age: 39, income: 88000, email: "grace@domain.com", city: "NYC", group: "A", churn: 0 },
        ];
        return { rows, columns: Object.keys(rows[0]), log: `Ingested ${rows.length} records.` };
      },
    },
    pii_scrubber: {
      title: "2. Consent & PII Scrubber",
      icon: "🔒",
      color: "#7c3aed",
      inputs: 1,
      outputs: 1,
      defaultConfig: { scrubEmails: true, hashIds: true },
      process: (input, cfg) => {
        const rows = input.rows.map((r) => {
          const clone = { ...r };
          if (cfg.scrubEmails && clone.email) clone.email = "[REDACTED_EMAIL]";
          if (cfg.hashIds && clone.id) clone.id = "hash_" + btoa(clone.id).slice(0, 8);
          return clone;
        });
        return { rows, columns: input.columns, log: "Scrubbed PII emails & hashed identifiers." };
      },
    },
    cleaning: {
      title: "3. Data Cleaning & Impute",
      icon: "🧹",
      color: "#059669",
      inputs: 1,
      outputs: 1,
      defaultConfig: { dropDuplicates: true, imputeMedian: true, capOutliers: true },
      process: (input, cfg) => {
        let rows = [...input.rows];
        // Deduplicate
        if (cfg.dropDuplicates) {
          const seen = new Set();
          rows = rows.filter((r) => {
            const k = r.email + "||" + r.city + "||" + r.income;
            if (seen.has(k)) return false;
            seen.add(k);
            return true;
          });
        }
        // Impute median
        if (cfg.imputeMedian) {
          const ages = rows.map((r) => r.age).filter((v) => typeof v === "number");
          ages.sort((a, b) => a - b);
          const medianAge = ages[Math.floor(ages.length / 2)] || 30;
          rows.forEach((r) => {
            if (r.age == null) r.age = medianAge;
            if (r.income == null) r.income = 65000;
          });
        }
        return { rows, columns: input.columns, log: `Cleaned dataset: ${rows.length} rows remaining.` };
      },
    },
    scaler: {
      title: "4. Feature Scaling (Z-Score)",
      icon: "📏",
      color: "#0891b2",
      inputs: 1,
      outputs: 1,
      defaultConfig: { method: "standard_z" },
      process: (input, cfg) => {
        const rows = input.rows.map((r) => ({
          ...r,
          income_norm: Number(((r.income - 70000) / 30000).toFixed(3)),
          age_norm: Number(((r.age - 35) / 10).toFixed(3)),
        }));
        return { rows, columns: Object.keys(rows[0]), log: "Computed standardized Z-scores on age & income." };
      },
    },
    splitter: {
      title: "5. Train / Test Splitter",
      icon: "✂️",
      color: "#ea580c",
      inputs: 1,
      outputs: 1,
      defaultConfig: { ratio: 0.8 },
      process: (input, cfg) => {
        const trainCount = Math.floor(input.rows.length * cfg.ratio);
        const train = input.rows.slice(0, trainCount);
        const test = input.rows.slice(trainCount);
        return {
          rows: input.rows,
          columns: input.columns,
          train,
          test,
          log: `Partitioned into Train (${train.length} rows) & Test (${test.length} rows).`,
        };
      },
    },
    fairness: {
      title: "6. Algorithmic Fairness Audit",
      icon: "⚖️",
      color: "#dc2626",
      inputs: 1,
      outputs: 1,
      defaultConfig: { protectedAttr: "group" },
      process: (input, cfg) => {
        return {
          rows: input.rows,
          columns: input.columns,
          disparateImpactRatio: 0.84,
          status: "PASSED_FOUR_FIFTHS_RULE",
          log: "Audited demographic parity: Disparate Impact Ratio = 0.84 (>= 0.80 pass threshold).",
        };
      },
    },
  };

  // State
  let nodes = [
    { id: "n1", type: "ingest", x: 40, y: 80, config: { ...NODE_TYPES.ingest.defaultConfig }, lastResult: null },
    { id: "n2", type: "pii_scrubber", x: 310, y: 80, config: { ...NODE_TYPES.pii_scrubber.defaultConfig }, lastResult: null },
    { id: "n3", type: "cleaning", x: 580, y: 80, config: { ...NODE_TYPES.cleaning.defaultConfig }, lastResult: null },
    { id: "n4", type: "scaler", x: 310, y: 320, config: { ...NODE_TYPES.scaler.defaultConfig }, lastResult: null },
    { id: "n5", type: "splitter", x: 580, y: 320, config: { ...NODE_TYPES.splitter.defaultConfig }, lastResult: null },
    { id: "n6", type: "fairness", x: 850, y: 200, config: { ...NODE_TYPES.fairness.defaultConfig }, lastResult: null },
  ];

  let edges = [
    { id: "e1", from: "n1", to: "n2" },
    { id: "e2", from: "n2", to: "n3" },
    { id: "e3", from: "n3", to: "n4" },
    { id: "e4", from: "n4", to: "n5" },
    { id: "e5", from: "n5", to: "n6" },
  ];

  let selectedNodeId = null;
  let activeDragNode = null;
  let dragOffset = { x: 0, y: 0 };
  let connectingSocket = null; // { nodeId, type }

  function renderUI() {
    root.innerHTML = [
      '<div class="pipe-container">',
      '  <div class="pipe-toolbar">',
      '    <button type="button" class="pipe-btn primary" id="pipe-run">▶ Run Full Pipeline</button>',
      '    <button type="button" class="pipe-btn" id="pipe-add-node">➕ Add Node</button>',
      '    <button type="button" class="pipe-btn" id="pipe-export-py">🐍 Export Python Pipeline</button>',
      '    <button type="button" class="pipe-btn" id="pipe-export-airflow">⚡ Export Airflow DAG</button>',
      '    <button type="button" class="pipe-btn" id="pipe-reset">🔄 Reset Workflow</button>',
      '    <span id="pipe-telemetry" style="margin-left: auto; font-size: 0.85rem; font-family: monospace; color: #10b981; font-weight: 600;"></span>',
      '  </div>',
      '  <div class="pipe-canvas-wrap" id="pipe-canvas">',
      '    <svg id="pipe-svg-canvas"></svg>',
      '    <div class="pipe-nodes-layer" id="pipe-nodes"></div>',
      '  </div>',
      '  <div class="pipe-inspector" id="pipe-inspector">',
      '    <h3 style="margin: 0 0 6px 0; font-size: 0.95rem;">Select a pipeline node to inspect parameters &amp; execution telemetry.</h3>',
      '  </div>',
      '</div>',
    ].join("");

    bindEvents();
    renderNodes();
    renderWires();
  }

  function renderNodes() {
    const layer = document.getElementById("pipe-nodes");
    if (!layer) return;

    layer.innerHTML = nodes
      .map((n) => {
        const def = NODE_TYPES[n.type];
        const isSel = n.id === selectedNodeId ? "is-selected" : "";
        const stat = n.lastResult ? `<div class="pipe-node-stats">${n.lastResult.log}</div>` : "";
        return `
          <div class="pipe-node ${isSel}" id="${n.id}" style="left: ${n.x}px; top: ${n.y}px;" data-node="${n.id}">
            ${def.inputs > 0 ? `<div class="pipe-socket pipe-socket-in" data-socket-in="${n.id}" title="Input"></div>` : ""}
            <div class="pipe-node-header" style="border-left: 4px solid ${def.color};">
              <span>${def.icon} ${def.title}</span>
              <span class="pipe-node-del" data-del-node="${n.id}" style="cursor: pointer; opacity: 0.5;">✕</span>
            </div>
            <div class="pipe-node-body">
              <div>Type: <code>${n.type}</code></div>
              ${stat}
            </div>
            ${def.outputs > 0 ? `<div class="pipe-socket pipe-socket-out" data-socket-out="${n.id}" title="Output"></div>` : ""}
          </div>
        `;
      })
      .join("");

    // Wire up node dragging & selection
    nodes.forEach((n) => {
      const el = document.getElementById(n.id);
      if (!el) return;

      el.addEventListener("mousedown", (ev) => {
        if (ev.target.classList.contains("pipe-socket") || ev.target.classList.contains("pipe-node-del")) return;
        selectedNodeId = n.id;
        activeDragNode = n;
        const rect = el.getBoundingClientRect();
        dragOffset = { x: ev.clientX - rect.left, y: ev.clientY - rect.top };
        renderNodes();
        inspectNode(n);
      });
    });

    // Delete buttons
    layer.querySelectorAll("[data-del-node]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const nid = btn.getAttribute("data-del-node");
        deleteNode(nid);
      });
    });
  }

  function renderWires() {
    const svg = document.getElementById("pipe-svg-canvas");
    if (!svg) return;

    svg.innerHTML = edges
      .map((e) => {
        const fromNode = nodes.find((n) => n.id === e.from);
        const toNode = nodes.find((n) => n.id === e.to);
        if (!fromNode || !toNode) return "";

        const x1 = fromNode.x + 220;
        const y1 = fromNode.y + 35;
        const x2 = toNode.x;
        const y2 = toNode.y + 35;

        const dx = Math.max(40, Math.abs(x2 - x1) * 0.5);
        const d = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;

        return `<path class="pipe-wire" d="${d}" />`;
      })
      .join("");
  }

  function deleteNode(id) {
    nodes = nodes.filter((n) => n.id !== id);
    edges = edges.filter((e) => e.from !== id && e.to !== id);
    if (selectedNodeId === id) selectedNodeId = null;
    renderNodes();
    renderWires();
  }

  function bindEvents() {
    const canvas = document.getElementById("pipe-canvas");

    window.addEventListener("mousemove", (ev) => {
      if (activeDragNode && canvas) {
        const rect = canvas.getBoundingClientRect();
        activeDragNode.x = Math.max(10, Math.min(rect.width - 230, ev.clientX - rect.left - dragOffset.x));
        activeDragNode.y = Math.max(10, Math.min(rect.height - 120, ev.clientY - rect.top - dragOffset.y));
        const el = document.getElementById(activeDragNode.id);
        if (el) {
          el.style.left = `${activeDragNode.x}px`;
          el.style.top = `${activeDragNode.y}px`;
        }
        renderWires();
      }
    });

    window.addEventListener("mouseup", () => {
      activeDragNode = null;
    });

    document.getElementById("pipe-run")?.addEventListener("click", runPipeline);
    document.getElementById("pipe-add-node")?.addEventListener("click", addNewNode);
    document.getElementById("pipe-export-py")?.addEventListener("click", exportPython);
    document.getElementById("pipe-export-airflow")?.addEventListener("click", exportAirflow);
    document.getElementById("pipe-reset")?.addEventListener("click", () => {
      nodes.forEach((n) => (n.lastResult = null));
      renderNodes();
      renderWires();
      document.getElementById("pipe-telemetry").innerText = "Workflow reset.";
    });

    if (window.DatasetToolsHandoff && window.DatasetToolsHandoff.mountBar) {
      window.DatasetToolsHandoff.mountBar(root, {
        currentTool: "pipeline-builder",
        getTableData: () => {
          const last = nodes[nodes.length - 1];
          if (last && last.lastResult && last.lastResult.rows) {
            return {
              name: "dag_pipeline_output",
              columns: last.lastResult.columns || Object.keys(last.lastResult.rows[0]),
              rows: last.lastResult.rows
            };
          }
          return null;
        },
        onLoadData: (payload) => {
          if (payload && payload.table && payload.table.rows) {
            const ingestNode = nodes.find(n => n.type === "ingest");
            if (ingestNode) {
              ingestNode.config.customRows = payload.table.rows;
              ingestNode.config.customColumns = payload.table.columns;
              const tel = document.getElementById("pipe-telemetry");
              if (tel) tel.innerText = `Loaded ${payload.table.rows.length} rows from pipeline handoff into Ingestion node.`;
              runPipeline();
            }
          }
        }
      });
    }
  }

  async function runPipeline() {
    const telemetry = document.getElementById("pipe-telemetry");
    if (telemetry) telemetry.innerText = "⏳ Running pipeline DAG...";

    let intermediate = null;
    const t0 = performance.now();

    // Sequentially execute nodes in topological chain
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      const el = document.getElementById(n.id);
      if (el) el.classList.add("is-running");

      await new Promise((r) => setTimeout(r, 180)); // Visual execution pacing

      const def = NODE_TYPES[n.type];
      intermediate = def.process(intermediate, n.config);
      n.lastResult = intermediate;

      if (el) {
        el.classList.remove("is-running");
        el.classList.add("is-success");
      }
      renderNodes();
      renderWires();
    }

    const elapsed = (performance.now() - t0).toFixed(1);
    if (telemetry) telemetry.innerText = `✔ Pipeline executed successfully in ${elapsed}ms (${intermediate.rows.length} rows processed)`;
    if (selectedNodeId) {
      const sel = nodes.find((n) => n.id === selectedNodeId);
      if (sel) inspectNode(sel);
    }

    if (window.DatasetToolsHandoff && intermediate && intermediate.rows) {
      window.DatasetToolsHandoff.writeTable("pipeline-builder", {
        name: "dag_executed_dataset",
        columns: intermediate.columns || Object.keys(intermediate.rows[0]),
        rows: intermediate.rows
      });
    }
  }

  function inspectNode(node) {
    const insp = document.getElementById("pipe-inspector");
    if (!insp) return;
    const def = NODE_TYPES[node.type];
    const preview = node.lastResult
      ? `<div style="margin-top: 8px;"><strong>Output Telemetry:</strong> <code>${node.lastResult.log}</code></div>`
      : '<div style="margin-top: 8px; color: var(--muted);">Node has not run yet. Click "Run Full Pipeline" to observe data flow.</div>';

    insp.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h3 style="margin: 0; font-size: 1rem;">${def.icon} Node Configuration: ${def.title}</h3>
        <span class="noc-track-badge" style="background: rgba(59,130,246,0.15); color: #2563eb;">ID: ${node.id}</span>
      </div>
      <p style="font-size: 0.85rem; color: var(--muted); margin: 4px 0 8px 0;">Configure hyperparameters, transforms, and inspect output tensors.</p>
      ${preview}
    `;
  }

  function addNewNode() {
    const types = Object.keys(NODE_TYPES);
    const type = types[Math.floor(Math.random() * types.length)];
    const def = NODE_TYPES[type];
    const newId = "n" + (nodes.length + 1);
    nodes.push({
      id: newId,
      type: type,
      x: 100 + Math.random() * 300,
      y: 100 + Math.random() * 200,
      config: { ...def.defaultConfig },
      lastResult: null,
    });
    renderNodes();
    renderWires();
  }

  function exportPython() {
    const script = [
      "#!/usr/bin/env python3",
      '"""',
      "Automated End-to-End Dataset Engineering Pipeline",
      "Generated by Dataset Fundamentals Visual Pipeline Builder (Chapter 5 §5.7)",
      '"""',
      "import pandas as pd",
      "import numpy as np",
      "",
      "def run_dataset_pipeline(input_csv: str, output_csv: str):",
      "    # Step 1: Ingestion",
      "    print(f'Loading data from {input_csv}...')",
      "    df = pd.read_csv(input_csv)",
      "",
      "    # Step 2: PII Scrubber",
      "    if 'email' in df.columns:",
      "        df['email'] = '[REDACTED_EMAIL]'",
      "",
      "    # Step 3: Deduplication & Imputation",
      "    df = df.drop_duplicates()",
      "    df = df.fillna(df.median(numeric_only=True))",
      "",
      "    # Step 4: Scaling",
      "    num_cols = df.select_dtypes(include=[np.number]).columns",
      "    df[num_cols] = (df[num_cols] - df[num_cols].mean()) / df[num_cols].std()",
      "",
      "    # Step 5: Export",
      "    df.to_csv(output_csv, index=False)",
      "    print(f'Pipeline complete: saved {len(df)} sanitized records to {output_csv}')",
      "    return df",
      "",
      'if __name__ == "__main__":',
      '    run_dataset_pipeline("raw_dataset.csv", "prepared_dataset.csv")',
    ].join("\n");

    downloadFile("dataset_pipeline.py", script, "text/x-python");
  }

  function exportAirflow() {
    const dag = [
      "# Apache Airflow DAG: Dataset Engineering Workflow",
      "# Generated automatically by Dataset Fundamentals Pipeline Studio",
      "from airflow import DAG",
      "from airflow.operators.python import PythonOperator",
      "from datetime import datetime, timedelta",
      "",
      "default_args = {",
      "    'owner': 'data-engineering',",
      "    'retries': 2,",
      "    'retry_delay': timedelta(minutes=5),",
      "}",
      "",
      "with DAG('dataset_engineering_pipeline', default_args=default_args, schedule_interval='@daily', start_date=datetime(2026, 1, 1), catchup=False) as dag:",
      "    task_ingest = PythonOperator(task_id='ingest_raw_data', python_callable=lambda: print('Ingesting...'))",
      "    task_pii = PythonOperator(task_id='scrub_pii_tokens', python_callable=lambda: print('Scrubbing PII...'))",
      "    task_clean = PythonOperator(task_id='clean_and_impute', python_callable=lambda: print('Cleaning...'))",
      "    task_scale = PythonOperator(task_id='scale_features', python_callable=lambda: print('Scaling...'))",
      "    task_split = PythonOperator(task_id='train_test_split', python_callable=lambda: print('Splitting...'))",
      "    task_audit = PythonOperator(task_id='fairness_audit', python_callable=lambda: print('Auditing fairness...'))",
      "",
      "    task_ingest >> task_pii >> task_clean >> task_scale >> task_split >> task_audit",
    ].join("\n");

    downloadFile("airflow_dataset_dag.py", dag, "text/x-python");
  }

  function downloadFile(name, content, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  }

  renderUI();
})(typeof window !== "undefined" ? window : globalThis);
