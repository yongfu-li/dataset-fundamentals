# Example 13.19 — Uniform Dates Units and Categories

**Chapter:** 13  
**Label:** `eg:13.19`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.4.3` — Data Quality Standards for Reproducibility

## Learning objective

Standardize dates, units, and categorical values for cross-study consistency.

## Chapter context

Section 13.4.3 addresses data quality dimensions—completeness, consistency, and accuracy. Standardized formats for dates (YYYY-MM-DD), measurements (kilograms versus pounds), or categorical variables (for example, male/female versus M/F) keep the dataset interpretable. …

## What this example shows

Standardized formats for dates (YYYY-MM-DD), measurements (kilograms versus pounds), or categorical variables (for example, male/female versus M/F) keep the dataset interpretable. They also prevent errors when merging datasets.

## What you should learn

### From the concept
- Standardized formats for dates (YYYY-MM-DD), measurements (kilograms versus pounds), or categorical variables (for example, male/female versus M/F) keep the dataset interpretable.
- They also prevent errors when merging datasets.

### From the output / result
- `run.sh` prints the structured takeaway below—use it in reproducibility and open-science reviews.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op or prerequisite check |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter13/example19
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Consistency: standardize dates, units, and categorical values.
```

## How to interpret the result

The takeaway 'standardize dates, units, and categorical values.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- List one date format inconsistency that would break a meta-analysis merge.

## Related examples

- `eg:13.18` — Previous example in the same section.
- `eg:13.20` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
