# Example 5.38 — Available Case Analysis Keeps Rows

**Chapter:** 5  
**Label:** `eg:5.38`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.3.1` — Handling Missing Data: Deletion and Imputation Methods

## Learning objective

Use available-case analysis when only some columns need complete values.

## Chapter context

Section 5.3.1 compares deletion strategies and imputation (mean, hot deck, median) with their variance and bias trade-offs. If only one or two columns contain missing values, rows are dropped only for calculations that need those columns. The same rows stay available for other analyses that use complete…

## What this example shows

If only one or two columns contain missing values, rows are dropped only for calculations that need those columns. The same rows stay available for other analyses that use complete fields.

## What you should learn

### From the concept
- If only one or two columns contain missing values, rows are dropped only for calculations that need those columns.
- The same rows stay available for other analyses that use complete fields.

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
cd modules/chapter5/example38
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
If only one or two columns contain missing values, rows are dropped only for calculations that need those columns. The same rows stay available for other analyses that use complete fields.
```

## How to interpret the result

The same rows stay available for other analyses that use complete fields.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Available Case Analysis Keeps Rows” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.37` — Previous example in the same section.
- `eg:5.39` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
