# Example 5.15 — Double Counted Revenue From Duplicates

**Chapter:** 5  
**Label:** `eg:5.15`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.3` — Duplicate Data: Causes and Impact

## Learning objective

Remove duplicate order IDs before summing revenue or forecasting.

## Chapter context

Section 5.2.3 traces duplicate rows from retries and grain mismatch through KPI inflation, overfitting, and wasted compute. If the same order ID is exported twice after a payment retry, summing revenue double-counts that transaction. Cleaning removes or merges duplicates before KPI and forecast calculat…

## What this example shows

If the same order ID is exported twice after a payment retry, summing revenue double-counts that transaction. Cleaning removes or merges duplicates before KPI and forecast calculations.

## Key terms

- **Duplicate row** — Repeated record sharing the same business key or full row hash.
- **Analytic grain** — The intended one-row-per-entity unit (customer, order, session).

## What you should learn

### From the concept
- If the same order ID is exported twice after a payment retry, summing revenue double-counts that transaction.
- Cleaning removes or merges duplicates before KPI and forecast calculations.

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
cd modules/chapter5/example15
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
If the same order ID is exported twice after a payment retry, summing revenue double-counts that transaction. Cleaning removes or merges duplicates before KPI and forecast calculations.
```

## How to interpret the result

Cleaning removes or merges duplicates before KPI and forecast calculations.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Double Counted Revenue” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.14` — Previous example in the same section.
- `eg:5.16` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
