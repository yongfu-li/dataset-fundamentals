# Example 12.20 — Automated Lineage Capture on Model Runs

**Chapter:** 12  
**Label:** `eg:12.20`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.4.2` — Techniques for Lineage Tracking

## Learning objective

Automate lineage capture on model runs with input versions and model URIs.

## Chapter context

Section 12.4.2 uses lineage UIs to debug transform chains and empty partitions. When a training job starts, an automated tracker records the input table version, feature job ID, and model artifact URI so later audits can reconstruct the run.

## What this example shows

When a training job starts, an automated tracker records the input table version, feature job ID, and model artifact URI so later audits can reconstruct the run.

## What you should learn

### From the concept
- Record input table version, feature job ID, model URI
- Capture when training starts
- Audits can reconstruct the run later

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
cd modules/chapter12/example20
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Automated lineage on runs:
- Record input table version, feature job ID, model URI
- Capture when training starts
- Audits can reconstruct the run later
```

## How to interpret the result

The closing bullet—'Audits can reconstruct the run later'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'Automated Lineage Capture on Model Runs' over a single-node database?

## Related examples

- `eg:12.19` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
