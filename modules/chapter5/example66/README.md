# Example 5.66 — Compare MinMax and Standard Scaling

**Chapter:** 5  
**Label:** `eg:5.66`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.8.3` — Scaling Exercise: Applying Normalization and Standardization

## Learning objective

Compare MinMaxScaler and StandardScaler on the same numeric columns and read bounded vs z-scored ranges.

## Chapter context

Section 5.8.3 compares min-max normalization with z-score standardization on numeric columns. Apply both scalers to numeric columns and inspect the transformed ranges:

## What this example shows

MinMax maps price to [0,1]; StandardScaler z-scores quantity

## What you should learn

### From the code / process
- MinMax maps price to [0,1]; StandardScaler z-scores quantity.
- Same data, different geometry—pick based on model (Section 5.8.3 / eg:5.67).

### From the output / result
- `run.sh` runs `main.py` (or `main.R`) and prints Before/After frames—compare shapes and columns.

## Contents

| File | Role |
|------|------|
| `main.py` | MinMax vs StandardScaler |
| `data.csv` | Numeric price/quantity sample |
| `scaled_data.csv` | Written on run |
| `install.sh` | Installs runtime dependencies |
| `run.sh` | Runs the example |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+; pandas, scikit-learn as needed (installed by `install.sh`)

## Setup

```bash
cd modules/chapter5/example66
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Before:
    price  quantity
0     10         1
1     20         2
2     30         3
3     40         4
4     50         5
After:
    price  quantity  normalized_price  standardized_quantity
0     10         1              0.00              -1.414214
1     20         2              0.25              -0.707107
2     30         3              0.50               0.000000
3     40         4              0.75               0.707107
4     50         5              1.00               1.414214
Wrote scaled_data.csv
```

## How to interpret the result

Match each printed Before/After change to a book listing step—those deltas are the cleaning decisions Section 5.5 expects you to defend in a pipeline review.

## Try it / Reflect

- Change one step in the script (e.g., keep NA rows or skip dedupe)—how does the After shape or columns differ?

## Related examples

- `eg:5.67` — Next example in the same section.

## Notes

- Sample CSVs are synthetic and sized for the listing; they are not from a published dataset.
- `install.sh` uses `pip install --user` (no local venv) for reliability on Windows-mounted paths.
- Listing logic matches the book; wrappers only add imports and I/O so the module runs standalone.
