# Example 5.32 — Extra Features Slow Tree Training

**Chapter:** 5  
**Label:** `eg:5.32`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.6` — Irrelevant Data: Features Unrelated to the Target Variable

## Learning objective

Remove unused columns to cut gradient-boosted tree scan cost without losing signal.

## Chapter context

Section 5.2.6 warns that irrelevant columns add noise, hurt interpretability, slow training, and invite overfitting on spurious splits. Gradient-boosted trees must scan every column at each split; carrying unused text metadata columns increases training time without improving validation performance.

## What this example shows

Gradient-boosted trees must scan every column at each split; carrying unused text metadata columns increases training time without improving validation performance.

## What you should learn

### From the concept
- Gradient-boosted trees must scan every column at each split; carrying unused text metadata columns increases training time without improving validation performance.

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
cd modules/chapter5/example32
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Gradient-boosted trees must scan every column at each split; carrying unused text metadata columns increases training time without improving validation performance.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Extra Features Slow Tree Training” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.31` — Previous example in the same section.

## Notes

- Prose-only in the manuscript.
