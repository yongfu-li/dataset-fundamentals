# Example 5.46 — Scale Age and Income for KNN

**Chapter:** 5  
**Label:** `eg:5.46`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.4.1` — Normalization and Scaling: Normalization, Standardization, and Use Cases

## Learning objective

Standardize features before KNN so distance is not income-dominated.

## Chapter context

Section 5.4.1 explains when to normalize or standardize so distance-based models treat features fairly. When age spans roughly 20 to 70 and income spans tens of thousands, k-nearest neighbors (KNN) is dominated by income unless both features are standardized or normalized.

## What this example shows

When age spans roughly 20 to 70 and income spans tens of thousands, k-nearest neighbors (KNN) is dominated by income unless both features are standardized or normalized.

## What you should learn

### From the concept
- When age spans roughly 20 to 70 and income spans tens of thousands, k-nearest neighbors (KNN) is dominated by income unless both features are standardized or normalized.

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
cd modules/chapter5/example46
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
When age spans roughly 20 to 70 and income spans tens of thousands, k-nearest neighbors (KNN) is dominated by income unless both features are standardized or normalized.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Scale Age and Income for KNN” appear, and which Chapter 5 remedy would you apply first?

## Notes

- Prose-only in the manuscript.
