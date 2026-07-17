# Example 5.17 — Larger Table Slower Training

**Chapter:** 5  
**Label:** `eg:5.17`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.3` — Duplicate Data: Causes and Impact

## Learning objective

Quantify compute waste when redundant duplicate rows inflate tree training cost.

## Chapter context

Section 5.2.3 traces duplicate rows from retries and grain mismatch through KPI inflation, overfitting, and wasted compute. A tree model trained on 500,000 rows that include 100,000 duplicates spends extra memory and time on redundant examples. Removing duplicates shrinks the table without changing uniq…

## What this example shows

A tree model trained on 500,000 rows that include 100,000 duplicates spends extra memory and time on redundant examples. Removing duplicates shrinks the table without changing unique customer behavior.

## Key terms

- **Duplicate row** — Repeated record sharing the same business key or full row hash.
- **Analytic grain** — The intended one-row-per-entity unit (customer, order, session).

## What you should learn

### From the concept
- A tree model trained on 500,000 rows that include 100,000 duplicates spends extra memory and time on redundant examples.
- Removing duplicates shrinks the table without changing unique customer behavior.

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
cd modules/chapter5/example17
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
A tree model trained on 500,000 rows that include 100,000 duplicates spends extra memory and time on redundant examples. Removing duplicates shrinks the table without changing unique customer behavior.
```

## How to interpret the result

Removing duplicates shrinks the table without changing unique customer behavior.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Larger Table Slower Training” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.16` — Previous example in the same section.

## Notes

- Prose-only in the manuscript.
