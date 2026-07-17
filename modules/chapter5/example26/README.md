# Example 5.26 — Log Income Compresses Right Tail

**Chapter:** 5  
**Label:** `eg:5.26`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.5` — Outliers: Definition, Causes, and Handling Techniques

## Learning objective

Apply log transforms to compress right-skewed income for stable means and regressions.

## Chapter context

Section 5.2.5 distinguishes entry errors, legitimate extremes, and sensor failures—and transforms such as log, winsorize, and median imputation for skew and spikes. Applying a log transform to annual income compresses the long right tail so means, regressions, and scatter plots are less dominated by a few very large values.

## What this example shows

Applying a log transform to annual income compresses the long right tail so means, regressions, and scatter plots are less dominated by a few very large values.

## What you should learn

### From the concept
- Applying a log transform to annual income compresses the long right tail so means, regressions, and scatter plots are less dominated by a few very large values.

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
cd modules/chapter5/example26
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Applying a log transform to annual income compresses the long right tail so means, regressions, and scatter plots are less dominated by a few very large values.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Log Income Compresses Right Tail” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.25` — Previous example in the same section.
- `eg:5.27` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
