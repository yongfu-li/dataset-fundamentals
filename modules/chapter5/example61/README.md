# Example 5.61 — OneHotEncoder for Gender Column

**Chapter:** 5  
**Label:** `eg:5.61`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.5.6` — Scaling and Encoding with scikit-learn

## Learning objective

One-hot encode a nominal gender column with scikit-learn and inspect expanded binary columns.

## Chapter context

Section 5.5.6 applies scikit-learn StandardScaler and OneHotEncoder after cleaning. Encoding the ``gender'' column:

## What this example shows

OneHotEncoder expands gender into binary indicator columns alongside age

## What you should learn

### From the code / process
- OneHotEncoder expands gender into binary indicator columns alongside age.
- Drop='first' or handle unknowns in production pipelines not shown in the minimal listing.

### From the output / result
- `run.sh` runs `main.py` (or `main.R`) and prints Before/After frames—compare shapes and columns.

## Contents

| File | Role |
|------|------|
| `main.py` | OneHotEncoder on gender |
| `requirements.txt` | pandas + scikit-learn pins |
| `install.sh` | Installs runtime dependencies |
| `run.sh` | Runs the example |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+; pandas, scikit-learn as needed (installed by `install.sh`)

## Setup

```bash
cd modules/chapter5/example61
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Before:
    gender  age
0    Male   30
1  Female   40
2    Male   50
After OneHotEncoder:
    age  Female  Male
0   30     0.0   1.0
1   40     1.0   0.0
2   50     0.0   1.0
```

## How to interpret the result

Match each printed Before/After change to a book listing step—those deltas are the cleaning decisions Section 5.5 expects you to defend in a pipeline review.

## Try it / Reflect

- Change one step in the script (e.g., keep NA rows or skip dedupe)—how does the After shape or columns differ?

## Related examples

- `eg:5.60` — Previous example in the same section.

## Notes

- Sample CSVs are synthetic and sized for the listing; they are not from a published dataset.
- `install.sh` uses `pip install --user` (no local venv) for reliability on Windows-mounted paths.
- Listing logic matches the book; wrappers only add imports and I/O so the module runs standalone.
