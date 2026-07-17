# Example 12.18 — Rollback After Corrupt Preprocessing

**Chapter:** 12  
**Label:** `eg:12.18`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.3.3` — Benefits of Dataset Versioning

## Learning objective

Recover from corrupt preprocessing by rolling back to the last good snapshot.

## Chapter context

Section 12.3.3 shows operational rollback after corrupt transforms using versioned tables. If a preprocessing job corrupts a shared feature table, teams roll back to the last good snapshot and rerun from a known state instead of rebuilding from scratch.

## What this example shows

If a preprocessing job corrupts a shared feature table, teams roll back to the last good snapshot and rerun from a known state instead of rebuilding from scratch.

## What you should learn

### From the concept
- Preprocess corrupts a shared feature table
- Roll back to last good snapshot
- Rerun from known state — do not rebuild from scratch

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
cd modules/chapter12/example18
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Rollback after corruption:
- Preprocess corrupts a shared feature table
- Roll back to last good snapshot
- Rerun from known state — do not rebuild from scratch
```

## How to interpret the result

The closing bullet—'Rerun from known state — do not rebuild from scratch'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'Rollback After Corrupt Preprocessing' over a single-node database?

## Related examples

- `eg:12.16` — Delta time travel.
- `eg:12.17` — Iceberg snapshots.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
