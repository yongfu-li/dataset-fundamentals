# Storage & format chooser

Interactive browser tool for **Chapter 12 — Scalable Data Management**
(§12.2.3–12.2.4). Combines backlog ideas #33 (storage model) and #34 (Avro /
ORC / Parquet) into **one seamless stack picker** — no two-step wizard.

**Live path:** `lectures/tools/storage-format/index.html` (after `build_site.py`)

## Learning objectives

- Match a workload to a **storage + format bundle** (object/block × Avro/Parquet/ORC/raw).
- See why **columnar** layouts cut bytes for narrow projections (`eg:12.3`).
- Contrast **Avro** (streams) with **ORC/Parquet** (warehouse reads) (`eg:12.4`).
- Distinguish **object** archives from **block** volumes for OLTP (`eg:12.5–12.6`, Fig. 12.1).

## Workflow

1. Choose a workload scenario.
2. Pick one recommended **stack** card (storage and format already combined).
3. Read fit / miss feedback with book anchors.
4. On analytic scenarios, tweak rows/columns and compare toy Avro vs Parquet vs ORC I/O.
5. Export `storage-format-recommendation.json`.

## Scenarios

| Id | Recommended stack |
|----|-------------------|
| `warehouse-scan` | Object + Parquet |
| `hive-orc` | Object + ORC |
| `kafka-stream` | Stream path + Avro |
| `media-archive` | Object (media blobs) |
| `oltp-orders` | Block volume + database |
| `cold-parquet` | Object + Parquet (cold tier) |

## File layout

```
storage-format/
├── index.html
├── storage-format.js / .css
├── lib/core.js
├── data/smoke_test.mjs
└── README.md
```

## Book anchors

- §12.2.3 Storage Formats; §12.2.4 Object vs Block
- `eg:12.3`–`eg:12.6`; Figure 12.1
- Linked from `part-03-formats-and-storage-types`
