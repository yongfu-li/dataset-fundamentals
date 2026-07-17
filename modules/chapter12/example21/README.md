# Example 12.21 — Visualizing Transform Chains for Debug

**Chapter:** 12  
**Label:** `eg:12.21`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.4.3` — Tools for Lineage Tracking

## Learning objective

Use lineage visualization to debug empty partitions in transform chains.

## Chapter context

Section 12.4.3 warns that cross-platform pipelines break end-to-end lineage without connectors. A lineage UI can show how a cohort table was filtered and joined so analysts locate which transform introduced an empty partition.

## What this example shows

A lineage UI can show how a cohort table was filtered and joined so analysts locate which transform introduced an empty partition.

## What you should learn

### From the concept
- UI shows filter/join chains for a cohort table
- Locate the transform that emptied a partition
- Walk upstream instead of blind re-runs

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
cd modules/chapter12/example21
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Lineage for debug:
- UI shows filter/join chains for a cohort table
- Locate the transform that emptied a partition
- Walk upstream instead of blind re-runs
```

## How to interpret the result

The closing bullet—'Walk upstream instead of blind re-runs'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'Visualizing Transform Chains for Debug' over a single-node database?

## Notes

- Prose-only manuscript example; no code listing in the chapter.
