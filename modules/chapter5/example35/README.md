# Example 5.35 — Higher Loss Weight on Minority Class

**Chapter:** 5  
**Label:** `eg:5.35`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.7` — Imbalanced Data: Definition and Example

## Learning objective

Shift decision boundaries with class weights that penalize missed fraud more.

## Chapter context

Section 5.2.7 introduces class imbalance and remedies—oversampling, class weights, and SMOTE—for rare events such as fraud. Setting class weights so misclassifying a fraud transaction costs more than misclassifying a legitimate one pushes the decision boundary toward catching minority cases.

## What this example shows

Setting class weights so misclassifying a fraud transaction costs more than misclassifying a legitimate one pushes the decision boundary toward catching minority cases.

## Key terms

- **Class imbalance** — Rare positive class (e.g., fraud) dominated by negatives.
- **SMOTE** — Synthetic minority oversampling via interpolating neighbor points in feature space.

## What you should learn

### From the concept
- Setting class weights so misclassifying a fraud transaction costs more than misclassifying a legitimate one pushes the decision boundary toward catching minority cases.

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
cd modules/chapter5/example35
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Setting class weights so misclassifying a fraud transaction costs more than misclassifying a legitimate one pushes the decision boundary toward catching minority cases.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Higher Loss Weight on Minority Class” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.34` — Previous example in the same section.
- `eg:5.36` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
