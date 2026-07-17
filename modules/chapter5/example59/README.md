# Example 5.59 — Pandas End to End Cleaning Walkthrough

**Chapter:** 5  
**Label:** `eg:5.59`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.5.5` — R: tidyr

## Learning objective

Walk through an end-to-end pandas cleaning pipeline (NA, duplicates, strings, encoding) and read before/after shapes.

## Chapter context

Section 5.5.5 walks a full pandas cleaning pipeline on a messy customer table (despite the section's R tidyr label in the manuscript). This example shows how to handle missing data, remove duplicates, standardize string values, and encode categorical data using pandas. Consider a customer table with missing values…

## What this example shows

Pipeline order matters: dedupe before impute, standardize strings before encoding

## What you should learn

### From the code / process
- Pipeline order matters: dedupe before impute, standardize strings before encoding.
- Mean-imputed age and gender mapped to 0/1 appear in the cleaned frame.
- Outputs `cleaned_customers.csv` for downstream modeling.

### From the output / result
- `run.sh` runs `main.py` (or `main.R`) and prints Before/After frames—compare shapes and columns.

## Contents

| File | Role |
|------|------|
| `main.py` | End-to-end pandas cleaning |
| `customers.csv` | Messy customer table input |
| `cleaned_customers.csv` | Written on run |
| `install.sh` | Installs runtime dependencies |
| `run.sh` | Runs the example |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+; pandas, scikit-learn as needed (installed by `install.sh`)

## Setup

```bash
cd modules/chapter5/example59
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Before:
         name                email   age  gender
0  john smith     john@example.com  34.0    Male
1    jane doe     jane@example.com   NaN  Female
2  john smith     john@example.com  34.0    Male
3         NaN  missing@example.com  29.0  Female
4     Bob Lee      bob@example.com  41.0    male
After:
         name             email   age  gender
0  John Smith  john@example.com  34.0       1
1    Jane Doe  jane@example.com  34.5       0
4     Bob Lee   bob@example.com  41.0       1
Wrote cleaned_customers.csv
```

## How to interpret the result

Match each printed Before/After change to a book listing step—those deltas are the cleaning decisions Section 5.5 expects you to defend in a pipeline review.

## Try it / Reflect

- Change one step in the script (e.g., keep NA rows or skip dedupe)—how does the After shape or columns differ?

## Related examples

- `eg:5.57` — Basic dropna/dedupe building block.
- `eg:5.65` — Guided cleaning template exercise.

## Notes

- Sample CSVs are synthetic and sized for the listing; they are not from a published dataset.
- `install.sh` uses `pip install --user` (no local venv) for reliability on Windows-mounted paths.
- Listing logic matches the book; wrappers only add imports and I/O so the module runs standalone.
