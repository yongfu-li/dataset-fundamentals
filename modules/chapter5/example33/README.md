# Example 5.33 — Fraud Class at One Percent

**Chapter:** 5  
**Label:** `eg:5.33`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.7` — Imbalanced Data: Definition and Example

## Learning objective

Explain why majority-class accuracy misleads on 1% fraud prevalence.

## Chapter context

Section 5.2.7 introduces class imbalance and remedies—oversampling, class weights, and SMOTE—for rare events such as fraud. In transaction fraud detection, fraudulent rows may account for only 1\ A model that always predicts ``legitimate'' can look accurate while missing nearly every fraud case.

## What this example shows

In transaction fraud detection, fraudulent rows may account for only 1\ A model that always predicts ``legitimate'' can look accurate while missing nearly every fraud case.

## Key terms

- **Class imbalance** — Rare positive class (e.g., fraud) dominated by negatives.
- **SMOTE** — Synthetic minority oversampling via interpolating neighbor points in feature space.

## What you should learn

### From the concept
- In transaction fraud detection, fraudulent rows may account for only 1\ A model that always predicts ``legitimate'' can look accurate while missing nearly every fraud case.

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
cd modules/chapter5/example33
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
In transaction fraud detection, fraudulent rows may account for only 1\ A model that always predicts "legitimate" can look accurate while missing nearly every fraud case.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Fraud Class at One Percent” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.62` — Accuracy illusion on rare fraud.
- `eg:5.34` — Oversampling remedy.
- `eg:5.35` — Class-weight remedy.

## Notes

- Prose-only in the manuscript.
