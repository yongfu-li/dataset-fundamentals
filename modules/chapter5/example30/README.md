# Example 5.30 — More Columns Harder to Interpret

**Chapter:** 5  
**Label:** `eg:5.30`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.6` — Irrelevant Data: Features Unrelated to the Target Variable

## Learning objective

Reduce unused survey columns to keep models and plots interpretable.

## Chapter context

Section 5.2.6 warns that irrelevant columns add noise, hurt interpretability, slow training, and invite overfitting on spurious splits. Including dozens of unused survey fields alongside ten useful predictors makes coefficient tables and partial dependence plots harder to interpret without improving accuracy.

## What this example shows

Including dozens of unused survey fields alongside ten useful predictors makes coefficient tables and partial dependence plots harder to interpret without improving accuracy.

## What you should learn

### From the concept
- Including dozens of unused survey fields alongside ten useful predictors makes coefficient tables and partial dependence plots harder to interpret without improving accuracy.

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
cd modules/chapter5/example30
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Including dozens of unused survey fields alongside ten useful predictors makes coefficient tables and partial dependence plots harder to interpret without improving accuracy.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “More Columns Harder to Interpret” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.29` — Previous example in the same section.
- `eg:5.31` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
