# Example 12.16 — Delta Lake Time Travel on Object Stores

**Chapter:** 12  
**Label:** `eg:12.16`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.3.2` — Versioning Tools and Techniques for Large Datasets

## Learning objective

Apply Delta Lake time travel for point-in-time tables on object storage.

## Chapter context

Section 12.3.2 covers Delta Lake and Iceberg table snapshots on object storage. Delta Lake maintains a transaction log over Parquet files on object storage so teams can time-travel to prior table versions without copying every file .

## What this example shows

Delta Lake maintains a transaction log over Parquet files on object storage so teams can time-travel to prior table versions without copying every file .

## Key terms

- **Delta Lake** — ACID table layer with transaction log over Parquet on object storage.
- **Iceberg** — Open table format with snapshot isolation and rollback.

## What you should learn

### From the concept
- Transaction log over Parquet on object storage
- Point-in-time table versions without full copies
- Scalable counterpart to file-level DVC commits

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
cd modules/chapter12/example16
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Delta Lake time travel:
- Transaction log over Parquet on object storage
- Point-in-time table versions without full copies
- Scalable counterpart to file-level DVC commits
```

## How to interpret the result

The closing bullet—'Scalable counterpart to file-level DVC commits'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- What timestamp would you time-travel to before rerunning a bad job?

## Related examples

- `eg:12.17` — Iceberg snapshot rollback.
- `eg:12.18` — Operational rollback case.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
