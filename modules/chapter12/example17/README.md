# Example 12.17 — Iceberg Snapshot Rollback

**Chapter:** 12  
**Label:** `eg:12.17`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.3.2` — Versioning Tools and Techniques for Large Datasets

## Learning objective

Rollback Iceberg snapshots after a bad overwrite without full restore.

## Chapter context

Section 12.3.2 covers Delta Lake and Iceberg table snapshots on object storage. Apache Iceberg (and similar lakehouse formats) expose snapshots so operators can point readers at a prior table state after a bad overwrite without restoring an entire warehouse ba…

## What this example shows

Apache Iceberg (and similar lakehouse formats) expose snapshots so operators can point readers at a prior table state after a bad overwrite without restoring an entire warehouse backup.

## Key terms

- **Delta Lake** — ACID table layer with transaction log over Parquet on object storage.
- **Iceberg** — Open table format with snapshot isolation and rollback.

## What you should learn

### From the concept
- Snapshots expose prior table states
- After bad overwrite, repoint readers
- No full warehouse backup restore required

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
cd modules/chapter12/example17
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Iceberg snapshot rollback:
- Snapshots expose prior table states
- After bad overwrite, repoint readers
- No full warehouse backup restore required
```

## How to interpret the result

The closing bullet—'No full warehouse backup restore required'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'Iceberg Snapshot Rollback' over a single-node database?

## Related examples

- `eg:12.16` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
