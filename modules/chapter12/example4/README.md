# Example 12.4 — Avro and ORC for Streams and Hive

**Chapter:** 12  
**Label:** `eg:12.4`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.2.3` — Storage Formats for Large Datasets

## Learning objective

Choose Avro for stream writes vs ORC for Hive read-heavy warehouses.

## Chapter context

Section 12.2.3 contrasts object storage for unstructured archives with block storage for databases. Avro is a row-oriented format common in Kafka-style streaming with schema evolution; ORC is a columnar format optimized for Hive and other read-heavy Hadoop warehouses.

## What this example shows

Avro is a row-oriented format common in Kafka-style streaming with schema evolution; ORC is a columnar format optimized for Hive and other read-heavy Hadoop warehouses.

## Key terms

- **Object storage** — Flat namespace durable store (e.g., S3) for blobs and lake files.
- **Block storage** — Low-latency attached volumes for transactional databases.

## What you should learn

### From the concept
- Avro: row-oriented, Kafka streams, schema evolution
- ORC: columnar, Hive/Hadoop read-heavy warehouses
- Match format to stream-write vs analytic-read

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
cd modules/chapter12/example4
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Avro vs ORC:
- Avro: row-oriented, Kafka streams, schema evolution
- ORC: columnar, Hive/Hadoop read-heavy warehouses
- Match format to stream-write vs analytic-read
```

## How to interpret the result

The closing bullet—'Match format to stream-write vs analytic-read'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- Would you pick Avro or ORC for a Kafka ingest → Hive warehouse path?

## Related examples

- `eg:12.3` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
