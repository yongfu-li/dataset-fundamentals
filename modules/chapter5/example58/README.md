# Example 5.58 — Dplyr Filter and Select Columns

**Chapter:** 5  
**Label:** `eg:5.58`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.5.4` — R: dplyr

## Learning objective

Express dplyr filter/select column cleaning in R—or recognize the equivalent takeaway when R is unavailable.

## Chapter context

Section 5.5.4 shows the same cleaning ideas in R with dplyr filter/select. Removing missing values and selecting columns in R:

## What this example shows

dplyr `%>%` chains express filter-then-select cleaning readable for analysts

## What you should learn

### From the code / process
- dplyr `%>%` chains express filter-then-select cleaning readable for analysts.
- When R is unavailable, the fallback documents the intended transform.

### From the output / result
- `run.sh` runs `main.py` (or `main.R`) and prints Before/After frames—compare shapes and columns.

## Contents

| File | Role |
|------|------|
| `main.R` | dplyr filter/select when Rscript is available |
| `data.csv` | Sample table for R demo |
| `install.sh` | Installs runtime dependencies |
| `run.sh` | Runs the example |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- R with dplyr when available; otherwise `run.sh` prints the dplyr takeaway

## Setup

```bash
cd modules/chapter5/example58
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Rscript not found — printing the book takeaway instead.
Removing missing values and selecting columns in R (dplyr):
  filter(!is.na(column_name)) %>% select(column1, column2)
```

## How to interpret the result

Match each printed Before/After change to a book listing step—those deltas are the cleaning decisions Section 5.5 expects you to defend in a pipeline review.

## Try it / Reflect

- Change one step in the script (e.g., keep NA rows or skip dedupe)—how does the After shape or columns differ?

## Notes

- Sample CSVs are synthetic and sized for the listing; they are not from a published dataset.
- `install.sh` uses `pip install --user` (no local venv) for reliability on Windows-mounted paths.
- Listing logic matches the book; wrappers only add imports and I/O so the module runs standalone.
