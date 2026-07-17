# Example 5.18 — Mixed Dates Gender and Units

**Chapter:** 5  
**Label:** `eg:5.18`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.4` — Inconsistent Data: Examples and Issues

## Learning objective

Catalog inconsistent dates, gender codes, and units as separate standardization tasks.

## Chapter context

Section 5.2.4 covers inconsistent dates, gender codes, free text, and join keys that block merges until standardized. : A dataset might contain dates in multiple formats, such as ``MM/DD/YYYY'' and ``DD-MM-YYYY''. This inconsistency can cause errors when performing time series analysis or when mer…

## What this example shows

: A dataset might contain dates in multiple formats, such as ``MM/DD/YYYY'' and ``DD-MM-YYYY''. This inconsistency can cause errors when performing time series analysis or when merging datasets. : A ``Gender'' column may have inconsistent entries, such as ``Male,'' ``M,'' or ``Males,'' all representing the same category. These variations can result in incorrect categorization when the data is used for analysis or modeling. : A product sales dataset may record prices in different currencies or quantities in different units (e.g., ``kg'' and ``lbs''), causing discrepancies in analysis.

## What you should learn

### From the concept
- : A dataset might contain dates in multiple formats, such as ``MM/DD/YYYY'' and ``DD-MM-YYYY''.
- This inconsistency can cause errors when performing time series analysis or when merging datasets.

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
cd modules/chapter5/example18
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Date Formats: A dataset might contain dates in multiple formats, such as "MM/DD/YYYY" and "DD-MM-YYYY". This inconsistency can cause errors when performing time series analysis or when merging datasets.
```

## How to interpret the result

This inconsistency can cause errors when performing time series analysis or when merging datasets.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Mixed Dates Gender and Units” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.19` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
