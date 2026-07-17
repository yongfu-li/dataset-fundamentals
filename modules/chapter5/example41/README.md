# Example 5.41 — Median Impute Missing Square Footage

**Chapter:** 5  
**Label:** `eg:5.41`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.3.1` — Handling Missing Data: Deletion and Imputation Methods

## Learning objective

Fill missing housing square footage with group medians or regression predictions.

## Chapter context

Section 5.3.1 compares deletion strategies and imputation (mean, hot deck, median) with their variance and bias trade-offs. In a housing price table, missing square footage can be filled with the median footage for homes in a similar price band. Alternatively, a regression on neighborhood and bedroom co…

## What this example shows

In a housing price table, missing square footage can be filled with the median footage for homes in a similar price band. Alternatively, a regression on neighborhood and bedroom count can predict the missing values.

## What you should learn

### From the concept
- In a housing price table, missing square footage can be filled with the median footage for homes in a similar price band.
- Alternatively, a regression on neighborhood and bedroom count can predict the missing values.

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
cd modules/chapter5/example41
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
In a housing price table, missing square footage can be filled with the median footage for homes in a similar price band. Alternatively, a regression on neighborhood and bedroom count can predict the missing values.
```

## How to interpret the result

Alternatively, a regression on neighborhood and bedroom count can predict the missing values.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Median Impute Missing Square Footage” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.40` — Previous example in the same section.

## Notes

- Prose-only in the manuscript.
