# Example 5.31 — Model Fits Noise in Unused Fields

**Chapter:** 5  
**Label:** `eg:5.31`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.6` — Irrelevant Data: Features Unrelated to the Target Variable

## Learning objective

Prevent trees from splitting on spurious IDs that correlate with labels by chance.

## Chapter context

Section 5.2.6 warns that irrelevant columns add noise, hurt interpretability, slow training, and invite overfitting on spurious splits. A deep tree may split on random employee badge numbers that happened to correlate with the training label, fitting noise instead of durable churn drivers.

## What this example shows

A deep tree may split on random employee badge numbers that happened to correlate with the training label, fitting noise instead of durable churn drivers.

## What you should learn

### From the concept
- A deep tree may split on random employee badge numbers that happened to correlate with the training label, fitting noise instead of durable churn drivers.

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
cd modules/chapter5/example31
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
A deep tree may split on random employee badge numbers that happened to correlate with the training label, fitting noise instead of durable churn drivers.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Model Fits Noise in Unused Fields” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.30` — Previous example in the same section.
- `eg:5.32` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
