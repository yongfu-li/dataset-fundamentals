# Example 5.16 — Model Overweights Repeated Rows

**Chapter:** 5  
**Label:** `eg:5.16`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.3` — Duplicate Data: Causes and Impact

## Learning objective

Explain how duplicate training rows cause memorization and overweighted patterns.

## Chapter context

Section 5.2.3 traces duplicate rows from retries and grain mismatch through KPI inflation, overfitting, and wasted compute. When identical churn records appear many times, a classifier may memorize those repeated rows and overweight their patterns. Deduplication reduces spurious repetition in the traini…

## What this example shows

When identical churn records appear many times, a classifier may memorize those repeated rows and overweight their patterns. Deduplication reduces spurious repetition in the training set.

## Key terms

- **Duplicate row** — Repeated record sharing the same business key or full row hash.
- **Analytic grain** — The intended one-row-per-entity unit (customer, order, session).

## What you should learn

### From the concept
- When identical churn records appear many times, a classifier may memorize those repeated rows and overweight their patterns.
- Deduplication reduces spurious repetition in the training set.

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
cd modules/chapter5/example16
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
When identical churn records appear many times, a classifier may memorize those repeated rows and overweight their patterns. Deduplication reduces spurious repetition in the training set.
```

## How to interpret the result

Deduplication reduces spurious repetition in the training set.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Model Overweights Repeated Rows” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.15` — Previous example in the same section.
- `eg:5.17` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
