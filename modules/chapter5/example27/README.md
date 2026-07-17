# Example 5.27 — Cap Income at 95th Percentile

**Chapter:** 5  
**Label:** `eg:5.27`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.5` — Outliers: Definition, Causes, and Handling Techniques

## Learning objective

Use winsorization to limit leverage from top incomes while keeping all rows.

## Chapter context

Section 5.2.5 distinguishes entry errors, legitimate extremes, and sensor failures—and transforms such as log, winsorize, and median imputation for skew and spikes. Winsorizing income at the 95th percentile replaces values above that cutoff with the cutoff itself, limiting leverage from extremes while retaining every row.

## What this example shows

Winsorizing income at the 95th percentile replaces values above that cutoff with the cutoff itself, limiting leverage from extremes while retaining every row.

## What you should learn

### From the concept
- Winsorizing income at the 95th percentile replaces values above that cutoff with the cutoff itself, limiting leverage from extremes while retaining every row.

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
cd modules/chapter5/example27
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Winsorizing income at the 95th percentile replaces values above that cutoff with the cutoff itself, limiting leverage from extremes while retaining every row.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Cap Income at 95th Percentile” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.26` — Previous example in the same section.
- `eg:5.28` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
