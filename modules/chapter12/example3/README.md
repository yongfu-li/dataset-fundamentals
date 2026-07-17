# Example 12.3 — Parquet Columnar Analytics Format

**Chapter:** 12  
**Label:** `eg:12.3`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.2.3` — Storage Formats for Large Datasets

## Learning objective

Explain why Parquet columnar layout cuts I/O for analytical scans.

## Chapter context

Section 12.2.3 contrasts object storage for unstructured archives with block storage for databases. Parquet stores data by column with compression and encoding suited to Spark and Hadoop analytics, so queries read only needed columns and cut I/O.

## What this example shows

Parquet stores data by column with compression and encoding suited to Spark and Hadoop analytics, so queries read only needed columns and cut I/O.

## Key terms

- **Object storage** — Flat namespace durable store (e.g., S3) for blobs and lake files.
- **Block storage** — Low-latency attached volumes for transactional databases.

## What you should learn

### From the concept
- Columnar storage with compression/encoding
- Spark/Hadoop queries read only needed columns
- Cuts I/O for analytical scans

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
cd modules/chapter12/example3
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Parquet:
- Columnar storage with compression/encoding
- Spark/Hadoop queries read only needed columns
- Cuts I/O for analytical scans
```

## How to interpret the result

The closing bullet—'Cuts I/O for analytical scans'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- Which three columns would you project in a Parquet scan to minimize I/O?

## Related examples

- `eg:12.4` — Avro/ORC format choice.
- `eg:12.16` — Parquet under Delta Lake.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
