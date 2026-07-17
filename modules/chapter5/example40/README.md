# Example 5.40 — Hot Deck Impute From Donor Row

**Chapter:** 5  
**Label:** `eg:5.40`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.3.1` — Handling Missing Data: Deletion and Imputation Methods

## Learning objective

Apply hot-deck imputation from similar donor rows to preserve multivariate structure.

## Chapter context

Section 5.3.1 compares deletion strategies and imputation (mean, hot deck, median) with their variance and bias trade-offs. For a missing income value, hot-deck imputation copies income from a similar donor row that shares education and occupation codes. That choice preserves multivariate structure bett…

## What this example shows

For a missing income value, hot-deck imputation copies income from a similar donor row that shares education and occupation codes. That choice preserves multivariate structure better than a single global mean.

## What you should learn

### From the concept
- For a missing income value, hot-deck imputation copies income from a similar donor row that shares education and occupation codes.
- That choice preserves multivariate structure better than a single global mean.

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
cd modules/chapter5/example40
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
For a missing income value, hot-deck imputation copies income from a similar donor row that shares education and occupation codes. That choice preserves multivariate structure better than a single global mean.
```

## How to interpret the result

That choice preserves multivariate structure better than a single global mean.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Hot Deck Impute” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.39` — Previous example in the same section.
- `eg:5.41` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
