# Example 12.30 — NiFi Visual Dataflow Automation

**Chapter:** 12  
**Label:** `eg:12.30`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.4.5` — Challenges in Lineage Tracking

## Learning objective

Automate ingest/route/transform flows visually with NiFi while documenting lineage.

## Chapter context

Section 12.4.5 case-studies healthcare imaging governance at scale. Apache NiFi provides a visual canvas to ingest, route, and transform flows across systems without hand-writing every connector.

## What this example shows

Apache NiFi provides a visual canvas to ingest, route, and transform flows across systems without hand-writing every connector.

## What you should learn

### From the concept
- Visual canvas for ingest, route, transform
- Avoid hand-writing every connector
- Keep lineage documented as flows grow

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
cd modules/chapter12/example30
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
NiFi dataflow:
- Visual canvas for ingest, route, transform
- Avoid hand-writing every connector
- Keep lineage documented as flows grow
```

## How to interpret the result

The closing bullet—'Keep lineage documented as flows grow'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'NiFi Visual Dataflow Automation' over a single-node database?

## Related examples

- `eg:12.29` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
