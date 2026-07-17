# Example 5.65 — Guided Pandas Cleaning Template

**Chapter:** 5  
**Label:** `eg:5.65`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.8.2` — Fix the Problem: Using Python to Clean and Preprocess Data

## Learning objective

Complete a guided pandas cleaning template: impute, dedupe, standardize, and filter outliers on retail rows.

## Chapter context

Section 5.8.2 provides a guided pandas template to impute, dedupe, standardize, and cap outliers. Complete the template to impute, deduplicate, standardize, and filter outliers:

## What this example shows

Template stitches impute, dedupe, type fixes, and outlier filtering in one script

## What you should learn

### From the code / process
- Template stitches impute, dedupe, type fixes, and outlier filtering in one script.
- Row count shrinks from six to four on the toy retail extract.

### From the output / result
- `run.sh` runs `main.py` (or `main.R`) and prints Before/After frames—compare shapes and columns.

## Contents

| File | Role |
|------|------|
| `main.py` | Guided cleaning template |
| `data.csv` | Retail rows with defects |
| `cleaned_data.csv` | Written on run |
| `install.sh` | Installs runtime dependencies |
| `run.sh` | Runs the example |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+; pandas, scikit-learn as needed (installed by `install.sh`)

## Setup

```bash
cd modules/chapter5/example65
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Before: (6, 4)
After: (4, 4)
   customer_id product   price purchase_date
0          1.0  widget    10.0    2024-01-01
1          2.0  gadget   208.0    2024-01-02
2          3.0  widget    12.5    2024-01-03
4          4.0   gizmo  1000.0    2024-01-04
Wrote cleaned_data.csv
```

## How to interpret the result

Match each printed Before/After change to a book listing step—those deltas are the cleaning decisions Section 5.5 expects you to defend in a pipeline review.

## Try it / Reflect

- Change one step in the script (e.g., keep NA rows or skip dedupe)—how does the After shape or columns differ?

## Notes

- Sample CSVs are synthetic and sized for the listing; they are not from a published dataset.
- `install.sh` uses `pip install --user` (no local venv) for reliability on Windows-mounted paths.
- Listing logic matches the book; wrappers only add imports and I/O so the module runs standalone.
