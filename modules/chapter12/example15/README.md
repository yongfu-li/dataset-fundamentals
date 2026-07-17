# Example 12.15 — Pachyderm Partition Recompute

**Chapter:** 12  
**Label:** `eg:12.15`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.3.2` — Versioning Tools and Techniques for Large Datasets

## Learning objective

Use Pachyderm-style versioning to recompute only dependent pipeline stages.

## Chapter context

Section 12.3.2 covers Delta Lake and Iceberg table snapshots on object storage. Pachyderm versions pipeline inputs and outputs so a new raw partition triggers only downstream stages that depend on that slice rather than rebuilding the entire lake.

## What this example shows

Pachyderm versions pipeline inputs and outputs so a new raw partition triggers only downstream stages that depend on that slice rather than rebuilding the entire lake.

## Key terms

- **Delta Lake** — ACID table layer with transaction log over Parquet on object storage.
- **Iceberg** — Open table format with snapshot isolation and rollback.

## What you should learn

### From the concept
- Version pipeline inputs and outputs
- New raw partition triggers only dependent stages
- Avoid rebuilding the entire lake

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
cd modules/chapter12/example15
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Pachyderm recompute:
- Version pipeline inputs and outputs
- New raw partition triggers only dependent stages
- Avoid rebuilding the entire lake
```

## How to interpret the result

The closing bullet—'Avoid rebuilding the entire lake'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'Pachyderm Partition Recompute' over a single-node database?

## Related examples

- `eg:12.14` — Previous example in the same section.
- `eg:12.16` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
