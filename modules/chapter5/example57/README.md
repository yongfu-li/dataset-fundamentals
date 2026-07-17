# Example 5.57 — Pandas Dropna and Drop Duplicates

**Chapter:** 5  
**Label:** `eg:5.57`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.5.1` — Python: pandas

## Learning objective

Apply pandas dropna and drop_duplicates and interpret how many rows NA vs duplicates removed.

## Chapter context

Section 5.5.1 is the first Python/pandas tooling vignette—basic row and duplicate removal before longer pipelines. Removing rows with missing values and duplicates in pandas:

## What this example shows

Compare `Before:` and `After:` shapes—two rows drop from NA, one from duplicate id=3

## What you should learn

### From the code / process
- Compare `Before:` and `After:` shapes—two rows drop from NA, one from duplicate id=3.
- `dropna()` is axis-0 default; column-wise drops need `axis=1`.
- Always dedupe on business keys, not only identical full rows.

### From the output / result
- `run.sh` runs `main.py` (or `main.R`) and prints Before/After frames—compare shapes and columns.

## Contents

| File | Role |
|------|------|
| `main.py` | dropna and drop_duplicates on sample CSV |
| `data.csv` | Rows with NA and a duplicate |
| `install.sh` | Installs runtime dependencies |
| `run.sh` | Runs the example |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+; pandas, scikit-learn as needed (installed by `install.sh`)

## Setup

```bash
cd modules/chapter5/example57
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Before: (5, 3)
   id  value category
0   1   10.0        a
1   2    NaN        a
2   3   30.0        b
3   3   30.0        b
4   4   40.0        b
After: (3, 3)
   id  value category
0   1   10.0        a
2   3   30.0        b
4   4   40.0        b
```

## How to interpret the result

Match each printed Before/After change to a book listing step—those deltas are the cleaning decisions Section 5.5 expects you to defend in a pipeline review.

## Try it / Reflect

- Change one step in the script (e.g., keep NA rows or skip dedupe)—how does the After shape or columns differ?

## Related examples

- `eg:5.3` — Duplicate retail motivation.
- `eg:5.59` — Longer pandas pipeline.

## Notes

- Sample CSVs are synthetic and sized for the listing; they are not from a published dataset.
- `install.sh` uses `pip install --user` (no local venv) for reliability on Windows-mounted paths.
- Listing logic matches the book; wrappers only add imports and I/O so the module runs standalone.
