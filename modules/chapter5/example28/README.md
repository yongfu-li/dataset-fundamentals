# Example 5.28 — Replace Sensor Spike With Median

**Chapter:** 5  
**Label:** `eg:5.28`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.5` — Outliers: Definition, Causes, and Handling Techniques

## Learning objective

Impute isolated bad sensor readings with rolling medians to preserve row count.

## Chapter context

Section 5.2.5 distinguishes entry errors, legitimate extremes, and sensor failures—and transforms such as log, winsorize, and median imputation for skew and spikes. After detecting one corrupted temperature spike in an otherwise stable sensor stream, replacing that point with the rolling median preserves row count while removing the bad value.

## What this example shows

After detecting one corrupted temperature spike in an otherwise stable sensor stream, replacing that point with the rolling median preserves row count while removing the bad value.

## What you should learn

### From the concept
- After detecting one corrupted temperature spike in an otherwise stable sensor stream, replacing that point with the rolling median preserves row count while removing the bad value.

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
cd modules/chapter5/example28
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
After detecting one corrupted temperature spike in an otherwise stable sensor stream, replacing that point with the rolling median preserves row count while removing the bad value.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Replace Sensor Spike With Median” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.27` — Previous example in the same section.

## Notes

- Prose-only in the manuscript.
