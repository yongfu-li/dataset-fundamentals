# Example 6.3 — Missing Feature Bias Risk

**Chapter:** 6  
**Label:** `eg:6.3`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.1.1` — Importance of EDA in Data Science

## Learning objective

Treat a single missing important feature as a documented bias risk—not silent omission.

## Chapter context

Example 6.3 is the data-quality face of Section 6.1.1: one NA in a key column can distort analysis if ignored; Chapter 5 holds the repair methods.

## What this example shows

A missing value in an important feature can bias results if it is ignored rather than documented and repaired.

## Key terms

- **Missingness audit** — Counting and locating NA before analysis.
- **Selection bias** — Distorted inference when missing rows differ systematically from complete rows.

## What you should learn

### From the concept
- Detect, quantify, and document missing values during EDA.
- Check whether missingness clusters by group or condition.
- Choose imputation or exclusion with justification (Chapter 5).

### From the output / result
- `run.sh` lists detect–cluster–repair steps for missing features.

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
cd modules/chapter6/example3
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Missing-feature risk:
- Detect and quantify the missing value.
- Check whether missingness clusters by group or condition.
- Document it and choose a justified repair; silent omission can bias results.
```

## How to interpret the result

Pair with Example 6.6's healthcare missingness profile for a multi-column version of the same duty.

## Try it / Reflect

- If 5% of income is missing only for one region, what would you investigate before imputing?

## Related examples

- `eg:6.6` — Healthcare missingness profile across fields and age groups.
- `eg:6.8` — Inconsistency found during EDA, fixed in Chapter 5.
- `eg:5.37` — Listwise deletion remedy in Chapter 5.

## Notes

- Prose-only. Repairs in Chapter 5.
