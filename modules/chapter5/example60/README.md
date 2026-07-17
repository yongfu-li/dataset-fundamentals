# Example 5.60 — StandardScaler on Age and Salary

**Chapter:** 5  
**Label:** `eg:5.60`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.5.6` — Scaling and Encoding with scikit-learn

## Learning objective

Apply StandardScaler to numeric columns and verify zero-centered, unit-variance scaling on the sample.

## Chapter context

Section 5.5.6 applies scikit-learn StandardScaler and OneHotEncoder after cleaning. Scaling ``age'' and ``salary'' columns:

## What this example shows

StandardScaler centers each column (~0 mean) and scales to unit variance

## What you should learn

### From the code / process
- StandardScaler centers each column (~0 mean) and scales to unit variance.
- Salary magnitude no longer dominates age in distance-based follow-on models.

### From the output / result
- `run.sh` runs `main.py` (or `main.R`) and prints Before/After frames—compare shapes and columns.

## Contents

| File | Role |
|------|------|
| `main.py` | StandardScaler demo |
| `requirements.txt` | pandas + scikit-learn pins |
| `install.sh` | Installs runtime dependencies |
| `run.sh` | Runs the example |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+; pandas, scikit-learn as needed (installed by `install.sh`)

## Setup

```bash
cd modules/chapter5/example60
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Before:
    age  salary
0   25   40000
1   40   80000
2   55  120000
After StandardScaler:
         age    salary
0 -1.224745 -1.224745
1  0.000000  0.000000
2  1.224745  1.224745
```

## How to interpret the result

Match each printed Before/After change to a book listing step—those deltas are the cleaning decisions Section 5.5 expects you to defend in a pipeline review.

## Try it / Reflect

- Change one step in the script (e.g., keep NA rows or skip dedupe)—how does the After shape or columns differ?

## Related examples

- `eg:5.61` — Next example in the same section.

## Notes

- Sample CSVs are synthetic and sized for the listing; they are not from a published dataset.
- `install.sh` uses `pip install --user` (no local venv) for reliability on Windows-mounted paths.
- Listing logic matches the book; wrappers only add imports and I/O so the module runs standalone.
