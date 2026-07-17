# Example 12.14 — DVC Remotes on Object Storage

**Chapter:** 12  
**Label:** `eg:12.14`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.3.2` — Versioning Tools and Techniques for Large Datasets

## Learning objective

Pin DVC dataset versions to object-storage remotes without copying petabytes.

## Chapter context

Section 12.3.2 covers Delta Lake and Iceberg table snapshots on object storage. A team keeps DVC hash files in Git while the actual training shards live in an S3 or GCS remote, so scalable object storage holds bytes and DVC records which version a run used .

## What this example shows

A team keeps DVC hash files in Git while the actual training shards live in an S3 or GCS remote, so scalable object storage holds bytes and DVC records which version a run used .

## Key terms

- **Delta Lake** — ACID table layer with transaction log over Parquet on object storage.
- **Iceberg** — Open table format with snapshot isolation and rollback.

## What you should learn

### From the concept
- Hash/metadata in Git
- Training shards in S3/GCS remotes
- Pin runs to versions without copying petabytes

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
cd modules/chapter12/example14
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
DVC on object storage:
- Hash/metadata in Git
- Training shards in S3/GCS remotes
- Pin runs to versions without copying petabytes
```

## How to interpret the result

The closing bullet—'Pin runs to versions without copying petabytes'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'DVC Remotes on Object Storage' over a single-node database?

## Related examples

- `Chapter 8` — DVC team-scale versioning.
- `eg:12.16` — Lakehouse table versions.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
