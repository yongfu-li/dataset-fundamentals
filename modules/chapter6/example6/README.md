# Example 6.6 — Healthcare Missingness Profile

**Chapter:** 6  
**Label:** `eg:6.6`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.1.2` — Key Benefits of EDA

## Learning objective

Profile missingness across healthcare fields and age groups before choosing imputation or exclusion.

## Chapter context

Section 6.1.2 on EDA benefits—Example 6.6 is the clinical missingness audit that drives Chapter 5 imputation strategy.

## What this example shows

On patient age, history, and test results, EDA counts missing values, compares rates across age groups, and decides whether to impute, drop, or investigate collection.

## Key terms

- **Missingness profile** — Per-field and per-subgroup rates of NA.
- **MAR/MNAR awareness** — Mechanism hints from who is missing—not only how much.

## What you should learn

### From the concept
- Count NAs per column before any model.
- Compare missing rates across clinically relevant subgroups.
- High missingness in one age band signals collection or consent issues.

### From the output / result
- `run.sh` prints the three-step healthcare missingness checklist.

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
cd modules/chapter6/example6
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Healthcare missingness profile:
1. Count missing values for age, history, and test results.
2. Compare missing rates across age groups.
3. Decide whether to impute, drop rows, or investigate collection procedures.
```

## How to interpret the result

If missingness rises with age, mean imputation without adjustment can bias elderly summaries—see Chapter 5 MNAR examples.

## Try it / Reflect

- For a table with three clinical columns, draft a missingness table you would compute first.

## Related examples

- `eg:6.3` — Single-cell missing-feature risk.
- `eg:5.9` — MAR income pattern in Chapter 5.
- `eg:6.7` — Outlier handling in another domain.

## Notes

- Prose-only.
