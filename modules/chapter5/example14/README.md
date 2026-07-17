# Example 5.14 — Duplicate Customer Purchase Rows

**Chapter:** 5  
**Label:** `eg:5.14`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.3` — Duplicate Data: Causes and Impact

## Learning objective

Aggregate or dedupe when analytic grain is one row per customer, not per purchase.

## Chapter context

Section 5.2.3 traces duplicate rows from retries and grain mismatch through KPI inflation, overfitting, and wasted compute. In a retail extract, the same customer may appear once per purchase even when the analytic goal is one row per customer. Duplicate rows inflate total spend and purchase frequency u…

## What this example shows

In a retail extract, the same customer may appear once per purchase even when the analytic goal is one row per customer. Duplicate rows inflate total spend and purchase frequency until deduplicated or aggregated.

## Key terms

- **Duplicate row** — Repeated record sharing the same business key or full row hash.
- **Analytic grain** — The intended one-row-per-entity unit (customer, order, session).

## What you should learn

### From the concept
- In a retail extract, the same customer may appear once per purchase even when the analytic goal is one row per customer.
- Duplicate rows inflate total spend and purchase frequency until deduplicated or aggregated.

### From the output / result
- `run.sh` prints the structured takeaway as a cleaning/preprocessing checklist.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op installer |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter5/example14
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
In a retail extract, the same customer may appear once per purchase even when the analytic goal is one row per customer. Duplicate rows inflate total spend and purchase frequency until deduplicated or aggregated.
```

## How to interpret the result

Duplicate rows inflate total spend and purchase frequency until deduplicated or aggregated.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Duplicate Customer Purchase Rows” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.15` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
