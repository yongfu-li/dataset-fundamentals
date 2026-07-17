# Example 5.6 — Scale Mismatch Between Age and Income

**Chapter:** 5  
**Label:** `eg:5.6`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.1.2` — Key Definitions: Data Cleaning vs Data Preprocessing

## Learning objective

Explain why distance-based models need scaling when age and income share a feature space.

## Chapter context

Section 5.1.2 separates cleaning (fix errors) from preprocessing (reshape for algorithms). The vignettes preview duplicates, missing fields, dates, scaling, and encoding. When age spans roughly 18--100 and income spans tens of thousands, distance-based models overweight income unless both features are scaled to a common range or standardized distrib…

## What this example shows

When age spans roughly 18--100 and income spans tens of thousands, distance-based models overweight income unless both features are scaled to a common range or standardized distribution.

## What you should learn

### From the concept
- When age spans roughly 18--100 and income spans tens of thousands, distance-based models overweight income unless both features are scaled to a common range or standardized distribution.

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
cd modules/chapter5/example6
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
When age spans roughly 18--100 and income spans tens of thousands, distance-based models overweight income unless both features are scaled to a common range or standardized distribution.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Scale Mismatch Between Age and Income” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.46` — Scaling before KNN.
- `eg:5.60` — StandardScaler listing.
- `eg:5.66` — MinMax vs standard comparison.

## Notes

- Prose-only in the manuscript.
