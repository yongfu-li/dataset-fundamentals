/* Shared tool handoff via sessionStorage + localStorage + BroadcastChannel.
 * Pure client-side, zero-server, file:// and GitHub Pages safe.
 *
 * Payload shape (v1):
 *   { format, version, exportedAt, source, kind, table?, metadata?, annotations?, hints? }
 * kind: "table" | "metadata" | "annotations" | "pipeline"
 *
 * Supported Tool Chains:
 *   Prepare Chain:   sampling → cleaning → scaling-encoding → train-test-split
 *   Analysis Chain:  eda-dashboard → cleaning → representation → fairness
 *   Annotation Chain: crowdsourcing → text-annotation / image-annotation → iaa → datasheet
 *   Pipeline Chain:  pipeline-builder (orchestrates any stage)
 */
(function (global) {
  "use strict";

  const KEY = "dsetools:handoff:v1";
  const LOCAL_KEY = "dsetools:handoff:latest";
  const CHANNEL_NAME = "dataset_tools_handoff_bus";

  const Handoff = (global.DatasetToolsHandoff = global.DatasetToolsHandoff || {});

  Handoff.KEY = KEY;
  Handoff.LOCAL_KEY = LOCAL_KEY;
  Handoff.VERSION = 1;

  Handoff.notifyIncoming = function (payload) {
    try {
      const badge = document.getElementById("handoff-status-badge");
      if (badge && payload && payload.source) {
        badge.textContent = "New Data from " + payload.source;
        badge.style.background = "rgba(16, 185, 129, 0.25)";
        badge.style.borderColor = "rgba(16, 185, 129, 0.5)";
        badge.style.color = "#34d399";
      }
    } catch (e) {}
  };

  // Broadcast channel for instantaneous cross-tab and cross-iframe synchronization
  let broadcastChannel = null;
  try {
    if (typeof BroadcastChannel !== "undefined") {
      broadcastChannel = new BroadcastChannel(CHANNEL_NAME);
      broadcastChannel.onmessage = function (event) {
        if (event && event.data && event.data.type === "HANDOFF_UPDATED") {
          if (typeof Handoff.notifyIncoming === "function") {
            Handoff.notifyIncoming(event.data.payload);
          }
        }
      };
    }
  } catch (e) {
    /* ignore fallback */
  }

  /** Registry of tools supporting dataset handoff */
  Handoff.TOOLS = [
    { id: "sampling", name: "Sampling Visualizer", url: "../sampling/index.html", kind: "table", icon: "🎲" },
    { id: "cleaning", name: "Data Cleaning Workbench", url: "../cleaning/index.html", kind: "table", icon: "🧹" },
    { id: "eda-dashboard", name: "Automated EDA Dashboard", url: "../eda-dashboard/index.html", kind: "table", icon: "📊" },
    { id: "scaling-encoding", name: "Scaling & Encoding Lab", url: "../scaling-encoding/index.html", kind: "table", icon: "⚖️" },
    { id: "train-test-split", name: "Train / Test Splitter", url: "../train-test-split/index.html", kind: "table", icon: "✂️" },
    { id: "class-imbalance", name: "Class Imbalance Lab", url: "../class-imbalance/index.html", kind: "table", icon: "⚖️" },
    { id: "crowdsourcing", name: "Crowdsourcing & QC QA", url: "../crowdsourcing/index.html", kind: "annotations", icon: "👥" },
    { id: "text-annotation", name: "Text Annotation Studio", url: "../text-annotation/index.html", kind: "annotations", icon: "📝" },
    { id: "image-annotation", name: "Image Annotation Studio", url: "../image-annotation/index.html", kind: "annotations", icon: "🖼️" },
    { id: "iaa", name: "Inter-Annotator Agreement", url: "../iaa/index.html", kind: "annotations", icon: "🤝" },
    { id: "active-learning", name: "Active Learning Simulator", url: "../active-learning/index.html", kind: "table", icon: "🎯" },
    { id: "representation", name: "Representation Bias", url: "../representation/index.html", kind: "table", icon: "🔍" },
    { id: "fairness", name: "Bias & Fairness Meter", url: "../fairness/index.html", kind: "table", icon: "⚖️" },
    { id: "pipeline-builder", name: "Visual Pipeline Builder", url: "../pipeline-builder/index.html", kind: "pipeline", icon: "🔀" },
    { id: "datasheet", name: "Datasheet Builder", url: "../datasheet/index.html", kind: "metadata", icon: "📋" },
    { id: "metadata-checker", name: "Metadata Completeness", url: "../metadata-checker/index.html", kind: "metadata", icon: "✅" },
  ];

  Handoff.CHAINS = {
    prepare: {
      "sampling": { next: "cleaning", from: "sampling" },
      "cleaning": { next: "scaling-encoding", from: "cleaning" },
      "scaling-encoding": { next: "train-test-split", from: "scaling" },
    },
    privacy: {
      "pii-scrubber": [
        { next: "deid-risk", from: "pii" },
        { next: "cleaning", from: "pii" },
      ],
      "deid-risk": { next: "cleaning", from: "deid" },
    },
    document: {
      "datasheet": { next: "metadata-checker", from: "datasheet" },
    },
    fairness: {
      "representation": { next: "fairness", from: "representation" },
      "fairness": { next: "datasheet", from: "fairness" },
    },
    annotation: {
      "crowdsourcing": { next: "iaa", from: "crowdsourcing" },
      "text-annotation": { next: "iaa", from: "text-annotation" },
      "iaa": { next: "datasheet", from: "iaa" },
    }
  };

  /** Write payload into both sessionStorage and localStorage with fallback */
  Handoff.write = function (payload) {
    if (!payload || typeof payload !== "object") {
      throw new Error("Handoff payload required.");
    }
    const body = Object.assign(
      {
        format: "tool-handoff",
        version: 1,
        exportedAt: new Date().toISOString(),
      },
      payload
    );

    if (!body.kind) {
      if (body.metadata) body.kind = "metadata";
      else if (body.annotations) body.kind = "annotations";
      else if (body.table) body.kind = "table";
      else if (body.pipeline) body.kind = "pipeline";
      else body.kind = "generic";
    }

    const json = JSON.stringify(body);

    try {
      sessionStorage.setItem(KEY, json);
    } catch (err) {
      // Large Payload Fallback: Commercial in-memory & OPFS/IndexedDB storage
      try {
        global._CommercialHandoffCache = body;
        if (global.CommercialCore && global.CommercialCore.storage) {
          global.CommercialCore.storage.saveProject("handoff_latest", body);
        }
        const pointer = {
          format: "tool-handoff",
          version: 1,
          isLargePayload: true,
          source: body.source,
          kind: body.kind,
          exportedAt: body.exportedAt,
        };
        sessionStorage.setItem(KEY, JSON.stringify(pointer));
      } catch (innerErr) {
        console.warn("Could not write full session handoff:", innerErr);
      }
    }

    try {
      localStorage.setItem(LOCAL_KEY, json);
    } catch (e) {
      /* ignore quota errors */
    }

    if (broadcastChannel) {
      try {
        broadcastChannel.postMessage({ type: "HANDOFF_UPDATED", payload: body });
      } catch (e) {
        /* ignore */
      }
    }

    // Trigger local DOM event
    try {
      window.dispatchEvent(new CustomEvent("dsetools:handoff", { detail: body }));
    } catch (e) {}

    return body;
  };

  /** Convenience: write a tabular payload. */
  Handoff.writeTable = function (source, table, hints) {
    if (!table || !table.rows || !table.columns) {
      throw new Error("Handoff table requires rows and columns.");
    }
    return Handoff.write({
      source: source,
      kind: "table",
      table: {
        name: table.name || source,
        columns: table.columns.slice(),
        rows: table.rows,
      },
      hints: hints || {},
    });
  };

  /** Convenience: write a datasheet-metadata.json-shaped payload. */
  Handoff.writeMetadata = function (source, metadata, hints) {
    if (!metadata || typeof metadata !== "object") {
      throw new Error("Handoff metadata required.");
    }
    return Handoff.write({
      source: source,
      kind: "metadata",
      metadata: metadata,
      hints: hints || {},
    });
  };

  /** Read payload; if expectedSource is set, require matching source id. */
  Handoff.read = function (expectedSource) {
    return Handoff.readAny(expectedSource == null ? null : [expectedSource]);
  };

  /**
   * Read payload if source is in the allowed list (or any source if list is empty/null).
   * Checks sessionStorage first, then localStorage fallback for cross-tab navigation.
   */
  Handoff.readAny = function (sources) {
    let list = null;
    if (sources != null) {
      list = Array.isArray(sources) ? sources : [sources];
    }
    let raw = null;
    try {
      raw = sessionStorage.getItem(KEY);
    } catch (err) {}

    if (!raw) {
      try {
        raw = localStorage.getItem(LOCAL_KEY);
      } catch (err) {}
    }

    if (!raw) return null;

    try {
      const data = JSON.parse(raw);
      if (!data || data.format !== "tool-handoff") return null;
      if (list && list.length && list.indexOf(data.source) === -1) return null;
      if (data.isLargePayload && global._CommercialHandoffCache) {
        return global._CommercialHandoffCache;
      }
      return data;
    } catch (err) {
      return null;
    }
  };

  /** Read then clear (one-shot consume). */
  Handoff.consume = function (sources) {
    const data = Handoff.readAny(sources);
    if (data) Handoff.clear();
    return data;
  };

  Handoff.clear = function () {
    try {
      sessionStorage.removeItem(KEY);
      localStorage.removeItem(LOCAL_KEY);
    } catch (err) {
      /* ignore */
    }
  };

  Handoff.queryFrom = function () {
    try {
      return new URLSearchParams(window.location.search).get("from");
    } catch (err) {
      return null;
    }
  };

  Handoff.stripQuery = function () {
    try {
      if (window.history && window.history.replaceState) {
        window.history.replaceState({}, "", window.location.pathname);
      }
    } catch (err) {}
  };

  /**
   * Universal UI Component: Mounts a commercial-grade Dataset Flow & Handoff Toolbar.
   * Can be mounted into any tool via:
   *   DatasetToolsHandoff.mountBar(containerElement, {
   *     currentTool: 'cleaning',
   *     getTableData: () => ({ columns: [...], rows: [...] }),
   *     onLoadData: (table) => { ... }
   *   });
   */
  Handoff.mountBar = function (container, options) {
    if (!container) return null;
    options = options || {};
    const currentTool = options.currentTool || "tool";
    const getTableData = options.getTableData || null;
    const onLoadData = options.onLoadData || null;

    const bar = document.createElement("div");
    bar.className = "commercial-handoff-bar";
    bar.style.cssText = [
      "background: linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))",
      "border: 1px solid rgba(59, 130, 246, 0.3)",
      "border-radius: 8px",
      "padding: 10px 14px",
      "margin: 12px 0 20px 0",
      "display: flex",
      "align-items: center",
      "justify-content: space-between",
      "flex-wrap: wrap",
      "gap: 12px",
      "box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15)",
      "font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      "font-size: 0.88rem",
      "color: #e2e8f0"
    ].join(";");

    // Left info
    const leftCol = document.createElement("div");
    leftCol.style.cssText = "display: flex; align-items: center; gap: 8px; flex-wrap: wrap;";
    leftCol.innerHTML = `
      <span style="font-weight: 700; color: #60a5fa; display: flex; align-items: center; gap: 6px;">
        <span style="font-size: 1.1rem;">⚡</span> Pipeline Handoff Bus:
      </span>
      <span id="handoff-status-badge" style="background: rgba(59, 130, 246, 0.2); border: 1px solid rgba(59, 130, 246, 0.4); color: #93c5fd; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: 600;">
        Ready
      </span>
    `;

    // Right actions
    const rightCol = document.createElement("div");
    rightCol.style.cssText = "display: flex; align-items: center; gap: 8px; flex-wrap: wrap;";

    // Check if incoming handoff is available
    const incoming = Handoff.readAny();
    if (incoming && incoming.source !== currentTool) {
      const loadBtn = document.createElement("button");
      loadBtn.className = "md-button md-button--primary";
      loadBtn.style.cssText = "padding: 4px 10px; font-size: 0.82rem; background: #2563eb; color: #fff; border: none; border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 6px;";
      
      const recordCount = incoming.table ? (incoming.table.rows ? incoming.table.rows.length : 0) : "";
      const sourceName = incoming.source || "Previous Tool";
      loadBtn.innerHTML = `<span>📥 Load from ${sourceName} ${recordCount ? '(' + recordCount + ' rows)' : ''}</span>`;
      
      loadBtn.addEventListener("click", function () {
        if (typeof onLoadData === "function") {
          onLoadData(incoming);
          loadBtn.style.background = "#16a34a";
          loadBtn.innerHTML = `<span>✓ Loaded from ${sourceName}</span>`;
          setTimeout(() => { loadBtn.style.display = "none"; }, 3000);
        } else {
          alert(`Handoff dataset from ${sourceName} is available.`);
        }
      });
      rightCol.appendChild(loadBtn);
    }

    // Send To Dropdown
    const sendWrap = document.createElement("div");
    sendWrap.style.cssText = "display: flex; align-items: center; gap: 6px;";

    const select = document.createElement("select");
    select.style.cssText = "padding: 5px 8px; border-radius: 4px; background: #1e293b; color: #f8fafc; border: 1px solid #475569; font-size: 0.82rem; cursor: pointer;";
    select.innerHTML = '<option value="">📤 Send Dataset to...</option>';

    Handoff.TOOLS.filter(t => t.id !== currentTool).forEach(t => {
      const opt = document.createElement("option");
      opt.value = t.url;
      opt.dataset.toolId = t.id;
      opt.textContent = `${t.icon} ${t.name}`;
      select.appendChild(opt);
    });

    select.addEventListener("change", function () {
      const targetUrl = select.value;
      if (!targetUrl) return;

      if (typeof getTableData === "function") {
        try {
          const data = getTableData();
          if (data && (data.rows || data.table || data.metadata || data.annotations)) {
            if (data.rows && data.columns) {
              Handoff.writeTable(currentTool, data);
            } else {
              Handoff.write(Object.assign({ source: currentTool }, data));
            }
          }
        } catch (e) {
          console.warn("Could not extract dataset for handoff:", e);
        }
      }

      window.location.href = targetUrl + "?from=" + encodeURIComponent(currentTool);
    });

    sendWrap.appendChild(select);
    rightCol.appendChild(sendWrap);

    bar.appendChild(leftCol);
    bar.appendChild(rightCol);

    if (container.firstChild) {
      container.insertBefore(bar, container.firstChild);
    } else {
      container.appendChild(bar);
    }

    return bar;
  };

  // Attach to window.CommercialCore if loaded
  if (global.CommercialCore) {
    global.CommercialCore.Handoff = Handoff;
  }

})(typeof window !== "undefined" ? window : globalThis);
