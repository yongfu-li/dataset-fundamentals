# Example 5.5 — Inconsistent Date Formats

**Chapter:** 5  
**Label:** `eg:5.5`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.1.2` — Key Definitions: Data Cleaning vs Data Preprocessing

## Learning objective

Standardize mixed date formats before time-series work or joins to prevent silent parse failures.

## Chapter context

Section 5.1.2 separates cleaning (fix errors) from preprocessing (reshape for algorithms). The vignettes preview duplicates, missing fields, dates, scaling, and encoding. A single date column may mix , , and . Standardizing to one calendar representation prevents silent parse failures and incorrect time-based joins.

## What this example shows

A single date column may mix , , and . Standardizing to one calendar representation prevents silent parse failures and incorrect time-based joins.

## What you should learn

### From the concept
- A single date column may mix , , and .
- Standardizing to one calendar representation prevents silent parse failures and incorrect time-based joins.

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
cd modules/chapter5/example5
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
A single date column may mix MM/DD/YYYY, DD-MM-YYYY, and YYYY/MM/DD. Standardizing to one calendar representation prevents silent parse failures and incorrect time-based joins.
```

## How to interpret the result

Standardizing to one calendar representation prevents silent parse failures and incorrect time-based joins.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Inconsistent Date Formats” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.4` — Previous example in the same section.
- `eg:5.6` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
