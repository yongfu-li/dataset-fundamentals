# Example 5.29 — Irrelevant Color and Pet Features

**Chapter:** 5  
**Label:** `eg:5.29`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.6` — Irrelevant Data: Features Unrelated to the Target Variable

## Learning objective

Drop or ignore features unrelated to churn that add noise to selection.

## Chapter context

Section 5.2.6 warns that irrelevant columns add noise, hurt interpretability, slow training, and invite overfitting on spurious splits. In a dataset predicting customer churn, columns like ``favorite color'' or ``pet type'' are unlikely to relate to churn. They add noise and distract feature selection from useful p…

## What this example shows

In a dataset predicting customer churn, columns like ``favorite color'' or ``pet type'' are unlikely to relate to churn. They add noise and distract feature selection from useful predictors.

## What you should learn

### From the concept
- In a dataset predicting customer churn, columns like ``favorite color'' or ``pet type'' are unlikely to relate to churn.
- They add noise and distract feature selection from useful predictors.

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
cd modules/chapter5/example29
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
In a dataset predicting customer churn, columns like "favorite color" or "pet type" are unlikely to relate to churn. They add noise and distract feature selection from useful predictors.
```

## How to interpret the result

They add noise and distract feature selection from useful predictors.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Irrelevant Color and Pet Features” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.30` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
