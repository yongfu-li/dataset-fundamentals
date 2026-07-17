# Example 5.67 — When to Prefer Normalization or Standardization

**Chapter:** 5  
**Label:** `eg:5.67`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.8.3` — Scaling Exercise: Applying Normalization and Standardization

## Learning objective

Pick min-max vs z-score scaling based on model expectations.

## Chapter context

Section 5.8.3 compares min-max normalization with z-score standardization on numeric columns. Min-max normalization suits neural networks that expect bounded inputs, while z-score standardization is common for logistic regression and support vector machines.

## What this example shows

Min-max normalization suits neural networks that expect bounded inputs, while z-score standardization is common for logistic regression and support vector machines.

## What you should learn

### From the concept
- Min-max normalization suits neural networks that expect bounded inputs, while z-score standardization is common for logistic regression and support vector machines.

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
cd modules/chapter5/example67
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Min-max normalization suits neural networks that expect bounded inputs, while z-score standardization is common for logistic regression and support vector machines.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “When to Prefer Normalization or Standardization” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.66` — Previous example in the same section.

## Notes

- Prose-only in the manuscript.
