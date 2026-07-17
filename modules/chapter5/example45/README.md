# Example 5.45 — Drop Correlated Bathroom Features

**Chapter:** 5  
**Label:** `eg:5.45`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.3.6` — Feature Selection for Irrelevant Data: Techniques Like Correlation Analysis

## Learning objective

Remove collinear predictors (bathrooms vs toilets) to reduce redundancy.

## Chapter context

Section 5.3.6 uses correlation analysis to drop redundant predictors that add dimension without signal. In house-price modeling, ``number of bathrooms'' and ``number of toilets'' may be nearly collinear. Dropping one reduces redundancy without losing predictive signal.

## What this example shows

In house-price modeling, ``number of bathrooms'' and ``number of toilets'' may be nearly collinear. Dropping one reduces redundancy without losing predictive signal.

## What you should learn

### From the concept
- In house-price modeling, ``number of bathrooms'' and ``number of toilets'' may be nearly collinear.
- Dropping one reduces redundancy without losing predictive signal.

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
cd modules/chapter5/example45
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
In house-price modeling, "number of bathrooms" and "number of toilets" may be nearly collinear. Dropping one reduces redundancy without losing predictive signal.
```

## How to interpret the result

Dropping one reduces redundancy without losing predictive signal.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Drop Correlated Bathroom Features” appear, and which Chapter 5 remedy would you apply first?

## Notes

- Prose-only in the manuscript.
