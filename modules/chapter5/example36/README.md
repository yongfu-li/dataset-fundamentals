# Example 5.36 — SMOTE Synthesizes Minority Neighbors

**Chapter:** 5  
**Label:** `eg:5.36`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.7` — Imbalanced Data: Definition and Example

## Learning objective

Describe SMOTE synthetic minority points vs simple duplication for imbalance.

## Chapter context

Section 5.2.7 introduces class imbalance and remedies—oversampling, class weights, and SMOTE—for rare events such as fraud. SMOTE (Synthetic Minority Over-sampling Technique) creates new fraud examples by interpolating between existing minority points in feature space, balancing the training set without…

## What this example shows

SMOTE (Synthetic Minority Over-sampling Technique) creates new fraud examples by interpolating between existing minority points in feature space, balancing the training set without simple duplication.

## Key terms

- **Class imbalance** — Rare positive class (e.g., fraud) dominated by negatives.
- **SMOTE** — Synthetic minority oversampling via interpolating neighbor points in feature space.

## What you should learn

### From the concept
- SMOTE (Synthetic Minority Over-sampling Technique) creates new fraud examples by interpolating between existing minority points in feature space, balancing the training set without simple duplication.

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
cd modules/chapter5/example36
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
SMOTE (Synthetic Minority Over-sampling Technique) creates new fraud examples by interpolating between existing minority points in feature space, balancing the training set without simple duplication.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “SMOTE Synthesizes Minority Neighbors” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.35` — Previous example in the same section.

## Notes

- Prose-only in the manuscript.
