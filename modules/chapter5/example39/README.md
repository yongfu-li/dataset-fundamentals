# Example 5.39 — Mean Impute Missing Age

**Chapter:** 5  
**Label:** `eg:5.39`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.3.1` — Handling Missing Data: Deletion and Imputation Methods

## Learning objective

Critique mean imputation for shrinking variance and ignoring covariates.

## Chapter context

Section 5.3.1 compares deletion strategies and imputation (mean, hot deck, median) with their variance and bias trade-offs. Filling missing age with the mean age of observed respondents is quick but shrinks variance and ignores relationships with income, education, or outcome variables.

## What this example shows

Filling missing age with the mean age of observed respondents is quick but shrinks variance and ignores relationships with income, education, or outcome variables.

## What you should learn

### From the concept
- Filling missing age with the mean age of observed respondents is quick but shrinks variance and ignores relationships with income, education, or outcome variables.

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
cd modules/chapter5/example39
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Filling missing age with the mean age of observed respondents is quick but shrinks variance and ignores relationships with income, education, or outcome variables.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Mean Impute Missing Age” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.38` — Previous example in the same section.
- `eg:5.40` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
