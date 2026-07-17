# Example 5.34 — Oversample Fraud Rows

**Chapter:** 5  
**Label:** `eg:5.34`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.7` — Imbalanced Data: Definition and Example

## Learning objective

Use oversampling to give the learner more minority exposure per epoch.

## Chapter context

Section 5.2.7 introduces class imbalance and remedies—oversampling, class weights, and SMOTE—for rare events such as fraud. Duplicating or oversampling the rare fraud class gives the learner more minority examples per epoch, improving recall even though the raw database remains imbalanced.

## What this example shows

Duplicating or oversampling the rare fraud class gives the learner more minority examples per epoch, improving recall even though the raw database remains imbalanced.

## Key terms

- **Class imbalance** — Rare positive class (e.g., fraud) dominated by negatives.
- **SMOTE** — Synthetic minority oversampling via interpolating neighbor points in feature space.

## What you should learn

### From the concept
- Duplicating or oversampling the rare fraud class gives the learner more minority examples per epoch, improving recall even though the raw database remains imbalanced.

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
cd modules/chapter5/example34
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Duplicating or oversampling the rare fraud class gives the learner more minority examples per epoch, improving recall even though the raw database remains imbalanced.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Oversample Fraud Rows” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.33` — Previous example in the same section.
- `eg:5.35` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
