# Example 12.1 — NoSQL for Web Mobile and IoT

**Chapter:** 12  
**Label:** `eg:12.1`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.2.2` — Types and Use Cases

## Learning objective

Identify workloads where NoSQL fits better than relational ACID joins.

## Chapter context

Section 12.2.2 compares analytical file formats—Parquet, Avro, and ORC—for scan vs stream workloads. NoSQL stores fit real-time social and messaging apps, semi-structured logs for analytics, and high-ingest IoT streams where schemas evolve faster than relational tables allow.

## What this example shows

NoSQL stores fit real-time social and messaging apps, semi-structured logs for analytics, and high-ingest IoT streams where schemas evolve faster than relational tables allow.

## Key terms

- **Parquet** — Columnar file format optimizing analytical scans with compression.
- **Avro** — Row-oriented format with schema evolution, common in Kafka streams.

## What you should learn

### From the concept
- Real-time social/messaging, semi-structured logs, IoT streams
- Schemas evolve faster than relational tables allow
- Trade ACID joins for horizontal scale and flexibility

### From the output / result
- `run.sh` prints the structured takeaway below—use it when choosing storage or consistency patterns.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op or prerequisite check |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter12/example1
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
NoSQL fit:
- Real-time social/messaging, semi-structured logs, IoT streams
- Schemas evolve faster than relational tables allow
- Trade ACID joins for horizontal scale and flexibility
```

## How to interpret the result

The closing bullet—'Trade ACID joins for horizontal scale and flexibility'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'NoSQL for Web Mobile and IoT' over a single-node database?

## Related examples

- `eg:12.8` — Cassandra NoSQL pattern.
- `Chapter 9` — IoT/stream ingestion context.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
