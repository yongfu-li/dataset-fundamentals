/* Storage & format chooser — stacks + scenarios (classic IIFE, file:// safe).
 * Book: §12.2.3–12.2.4; eg:12.3–12.6; Fig. 12.1. */
(function (global) {
  "use strict";
  const Lib = global.StorageFormatLib || (global.StorageFormatLib = {});

  /**
   * Recommended stacks are seamless bundles (storage + format).
   * Learners never see a two-step wizard — just pick a workload.
   */
  const STACKS = {
    "object-parquet": {
      id: "object-parquet",
      label: "Object store + Parquet",
      storage: "object",
      format: "parquet",
      layout: "columnar",
      summary: "Lake/analytics files on S3-style object storage in a columnar format.",
      book: "eg:12.3, eg:12.5",
    },
    "object-orc": {
      id: "object-orc",
      label: "Object store + ORC",
      storage: "object",
      format: "orc",
      layout: "columnar",
      summary: "Hive-style warehouse reads on object or HDFS with ORC columnar files.",
      book: "eg:12.4, eg:12.5",
    },
    "object-avro": {
      id: "object-avro",
      label: "Stream path + Avro",
      storage: "object",
      format: "avro",
      layout: "row",
      summary: "Row-oriented Avro for Kafka-style streams with schema evolution.",
      book: "eg:12.4",
    },
    "object-raw": {
      id: "object-raw",
      label: "Object store (media / blobs)",
      storage: "object",
      format: "raw",
      layout: "blob",
      summary: "Unstructured objects (video, images, backups) in a flat namespace.",
      book: "eg:12.5, Fig. 12.1",
    },
    "block-db": {
      id: "block-db",
      label: "Block volume + database",
      storage: "block",
      format: "db-native",
      layout: "row",
      summary: "Low-latency block disks (EBS-like) under a transactional database.",
      book: "eg:12.6, Fig. 12.1",
    },
  };

  const SCENARIOS = [
    {
      id: "warehouse-scan",
      title: "Analytics warehouse scan",
      summary: "BI team scans a few columns from a wide fact table every hour.",
      detail:
        "Ten million rows, 80 columns; each dashboard query needs only 3 measures. Cost is dominated by bytes read.",
      recommended: "object-parquet",
      distractors: ["object-avro", "block-db", "object-raw"],
      rationale:
        "Columnar Parquet on object storage lets the engine read only the three columns (eg:12.3). Row Avro would pull every column; a block-attached DB is overkill for cold/warm lake scans.",
      showScan: true,
      scanDefaults: { rows: 1e7, cols: 80, selectCols: 3, rowBytes: 32 },
    },
    {
      id: "hive-orc",
      title: "Hive-style warehouse",
      summary: "Legacy Hadoop/Hive jobs over a curated warehouse table.",
      detail:
        "Read-heavy SQL on a Hadoop-era warehouse. Team already runs Hive; they want a columnar file format tuned for that path.",
      recommended: "object-orc",
      distractors: ["object-avro", "object-parquet", "block-db"],
      rationale:
        "ORC is the columnar format optimized for Hive and similar read-heavy warehouses (eg:12.4). Parquet is also columnar and often fine elsewhere; Avro fits streams better than warehouse scans.",
      showScan: true,
      scanDefaults: { rows: 5e6, cols: 40, selectCols: 4, rowBytes: 28 },
    },
    {
      id: "kafka-stream",
      title: "Event stream ingest",
      summary: "Clickstream events land in Kafka, then land as files in the lake.",
      detail:
        "Producers emit evolving event schemas. Downstream jobs need schema evolution and whole-event replay more than narrow column scans.",
      recommended: "object-avro",
      distractors: ["object-parquet", "object-orc", "block-db"],
      rationale:
        "Avro is row-oriented and common on Kafka-style paths with schema evolution (eg:12.4). Columnar Parquet/ORC shine later for analytics after events are curated.",
      showScan: true,
      scanDefaults: { rows: 2e6, cols: 25, selectCols: 25, rowBytes: 40 },
    },
    {
      id: "media-archive",
      title: "Media & backup archive",
      summary: "Years of video, images, and backup tarballs that grow without bound.",
      detail:
        "Objects are large, mostly write-once, retrieved by key. No SQL over columns.",
      recommended: "object-raw",
      distractors: ["block-db", "object-parquet", "object-avro"],
      rationale:
        "Object stores keep self-describing blobs in a flat namespace for unstructured media and backups (eg:12.5, Fig. 12.1). Parquet/Avro are for tabular analytics, not MP4 archives.",
      showScan: false,
    },
    {
      id: "oltp-orders",
      title: "Transactional order database",
      summary: "Checkout service needs low-latency reads/writes on order rows.",
      detail:
        "POSIX-like I/O under a relational DB on VMs. Latency matters more than scanning petabytes.",
      recommended: "block-db",
      distractors: ["object-parquet", "object-raw", "object-avro"],
      rationale:
        "Block volumes (EBS-like) attach low-latency disks for transactional databases (eg:12.6). Object GET/PUT semantics are a poor fit for chatty OLTP.",
      showScan: false,
    },
    {
      id: "cold-parquet",
      title: "Cold analytics lake",
      summary: "Infrequently queried history kept cheaply for audits and rare models.",
      detail:
        "Cost-sensitive cold tier; when queries do run, they still touch a handful of columns.",
      recommended: "object-parquet",
      distractors: ["block-db", "object-avro", "object-raw"],
      rationale:
        "Object storage plus Parquet is a common cost-effective pattern for cold analytics (Ch.12 cost/tiering note; eg:12.3). Block disks stay expensive for rarely touched history.",
      showScan: true,
      scanDefaults: { rows: 5e7, cols: 60, selectCols: 2, rowBytes: 24 },
    },
  ];

  function getScenario(id) {
    return SCENARIOS.find(function (s) {
      return s.id === id;
    });
  }

  function getStack(id) {
    return STACKS[id] || null;
  }

  function choiceIds(scenario) {
    const ids = [scenario.recommended].concat(scenario.distractors || []);
    // stable shuffle by scenario id for variety without Math.random (file:// demos stay stable)
    let h = 0;
    const key = scenario.id || "";
    for (let i = 0; i < key.length; i += 1) h = (h * 31 + key.charCodeAt(i)) >>> 0;
    const out = ids.slice();
    for (let i = out.length - 1; i > 0; i -= 1) {
      h = (h * 1103515245 + 12345) >>> 0;
      const j = h % (i + 1);
      const tmp = out[i];
      out[i] = out[j];
      out[j] = tmp;
    }
    return out;
  }

  function evaluatePick(scenario, stackId) {
    const stack = getStack(stackId);
    const recommended = getStack(scenario.recommended);
    const correct = stackId === scenario.recommended;
    let tip = "";
    if (correct) {
      tip = "Good match for this workload.";
    } else if (stack && recommended) {
      if (stack.storage !== recommended.storage) {
        tip =
          stack.storage === "block"
            ? "Block volumes fit transactional DBs; this workload leans object/lake or stream paths."
            : "Object storage fits lakes, media, and many analytics files — but the format still matters.";
      } else if (stack.layout !== recommended.layout) {
        tip =
          recommended.layout === "columnar"
            ? "This workload benefits from columnar layout (read only needed columns)."
            : recommended.layout === "row"
              ? "Whole-record / stream-friendly row layout fits better than a narrow columnar scan format."
              : "Unstructured blobs do not need a tabular file format.";
      } else {
        tip = "Same family, different format — check Hive vs Spark/Parquet vs Avro stream habits.";
      }
    }
    return {
      correct: correct,
      stack: stack,
      recommended: recommended,
      tip: tip,
      rationale: scenario.rationale,
    };
  }

  /**
   * Simulated bytes / relative latency for row vs columnar layout on a projection.
   * Teaching model only — not a real engine benchmark.
   */
  function simulateScan(opts) {
    const rows = Math.max(1, Number(opts.rows) || 1e6);
    const cols = Math.max(1, Math.floor(Number(opts.cols) || 20));
    const selectCols = Math.min(cols, Math.max(1, Math.floor(Number(opts.selectCols) || 1)));
    const bytesPerValue = Math.max(1, Number(opts.rowBytes) || 32);

    const rowBytes = rows * cols * bytesPerValue;
    const colBytes = rows * selectCols * bytesPerValue;
    // Overhead factors: row format reads full records; columnar pays small footer/metadata tax
    const avroBytes = Math.round(rowBytes * 1.05);
    const parquetBytes = Math.round(colBytes * 1.08);
    const orcBytes = Math.round(colBytes * 1.1);
    const baseline = avroBytes;
    function lat(bytes) {
      return Math.round((bytes / baseline) * 1000) / 1000;
    }
    return {
      rows: rows,
      cols: cols,
      selectCols: selectCols,
      bytesPerValue: bytesPerValue,
      formats: [
        {
          id: "avro",
          label: "Avro (row)",
          layout: "row",
          bytes: avroBytes,
          relativeLatency: lat(avroBytes),
        },
        {
          id: "parquet",
          label: "Parquet (columnar)",
          layout: "columnar",
          bytes: parquetBytes,
          relativeLatency: lat(parquetBytes),
        },
        {
          id: "orc",
          label: "ORC (columnar)",
          layout: "columnar",
          bytes: orcBytes,
          relativeLatency: lat(orcBytes),
        },
      ],
      note:
        "Toy model: row layout ≈ all columns × rows; columnar ≈ selected columns × rows (+ small metadata). Real engines add compression, predicate pushdown, and caching.",
    };
  }

  function formatBytes(n) {
    if (n >= 1e12) return (n / 1e12).toFixed(2) + " TB";
    if (n >= 1e9) return (n / 1e9).toFixed(2) + " GB";
    if (n >= 1e6) return (n / 1e6).toFixed(2) + " MB";
    if (n >= 1e3) return (n / 1e3).toFixed(1) + " KB";
    return String(n) + " B";
  }

  function exportPayload(scenario, pick, scan) {
    return {
      tool: "Storage & format chooser",
      generated: new Date().toISOString(),
      book_anchors: [
        "§12.2.3 Storage Formats for Large Datasets",
        "§12.2.4 Storage Types: Object vs. Block",
        "eg:12.3 Parquet",
        "eg:12.4 Avro and ORC",
        "eg:12.5–12.6 Object vs block",
        "Figure 12.1",
      ],
      scenario: {
        id: scenario.id,
        title: scenario.title,
      },
      pick: pick
        ? {
            stack_id: pick.stack && pick.stack.id,
            correct: pick.correct,
            recommended: scenario.recommended,
            tip: pick.tip,
          }
        : null,
      recommended_stack: getStack(scenario.recommended),
      rationale: scenario.rationale,
      scan: scan || null,
    };
  }

  Lib.STACKS = STACKS;
  Lib.SCENARIOS = SCENARIOS;
  Lib.getScenario = getScenario;
  Lib.getStack = getStack;
  Lib.choiceIds = choiceIds;
  Lib.evaluatePick = evaluatePick;
  Lib.simulateScan = simulateScan;
  Lib.formatBytes = formatBytes;
  Lib.exportPayload = exportPayload;
})(typeof window !== "undefined" ? window : globalThis);
