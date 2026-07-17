# Example 12.22 — Cross-Platform Lineage Gaps

**Chapter:** 12  
**Label:** `eg:12.22`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.4.5` — Challenges in Lineage Tracking

## Learning objective

Diagnose lineage gaps when pipelines cross object store, Spark, and ML platforms.

## Chapter context

Section 12.4.5 case-studies healthcare imaging governance at scale. Data may land in object storage, transform in Spark, then train in an ML platform; without connectors, lineage stops at each boundary and audits cannot walk the full path.

## What this example shows

Data may land in object storage, transform in Spark, then train in an ML platform; without connectors, lineage stops at each boundary and audits cannot walk the full path.

## What you should learn

### From the concept
- Object store → Spark → ML platform
- Without connectors, lineage stops at each boundary
- Audits cannot walk the full path

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
cd modules/chapter12/example22
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Cross-platform lineage gaps:
- Object store → Spark → ML platform
- Without connectors, lineage stops at each boundary
- Audits cannot walk the full path
```

## How to interpret the result

The closing bullet—'Audits cannot walk the full path'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- Where does lineage break in your current stack—storage, compute, or ML?

## Related examples

- `eg:12.21` — Lineage UI for debug.
- `Chapter 13` — Reproducibility and audits.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
