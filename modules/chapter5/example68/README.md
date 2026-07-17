# Example 5.68 — Label Versus One Hot Encoding Lab

**Chapter:** 5  
**Label:** `eg:5.68`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.8.4` — Encoding Activity: Choosing Between One-Hot and Label Encoding

## Learning objective

Apply label encoding to an ordinal field and one-hot encoding to a nominal field on the same frame.

## Chapter context

Section 5.8.4 lab contrasts label vs one-hot encoding on ordinal vs nominal fields. Apply label encoding to an ordinal product type and one-hot encoding to a nominal region column:

## What this example shows

Ordinal `product_type` gets label codes; nominal `region` gets one-hot dummies

## What you should learn

### From the code / process
- Ordinal `product_type` gets label codes; nominal `region` gets one-hot dummies.
- Side-by-side columns show false ordinality risk vs expanded dimensionality.

### From the output / result
- `run.sh` runs `main.py` (or `main.R`) and prints Before/After frames—compare shapes and columns.

## Contents

| File | Role |
|------|------|
| `main.py` | Label vs one-hot encoding lab |
| `data.csv` | Ordinal product_type + nominal region |
| `encoded_data.csv` | Written on run |
| `install.sh` | Installs runtime dependencies |
| `run.sh` | Runs the example |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+; pandas, scikit-learn as needed (installed by `install.sh`)

## Setup

```bash
cd modules/chapter5/example68
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Before:
   product_type region  sales
0        small   east     10
1       medium   west     20
2        large   east     30
3       medium  north     15
4        small   west     12
After:
   product_type  sales  product_type_encoded  region_north  region_west
0        small     10                     2         False        False
1       medium     20                     1         False         True
2        large     30                     0         False        False
3       medium     15                     1          True        False
4        small     12                     2         False         True
Wrote encoded_data.csv
```

## How to interpret the result

Match each printed Before/After change to a book listing step—those deltas are the cleaning decisions Section 5.5 expects you to defend in a pipeline review.

## Try it / Reflect

- Change one step in the script (e.g., keep NA rows or skip dedupe)—how does the After shape or columns differ?

## Related examples

- `eg:5.48` — Label encoding for ordinal size.
- `eg:5.47` — One-hot for nominal color.
- `eg:5.69` — Encoding tradeoffs prose.

## Notes

- Sample CSVs are synthetic and sized for the listing; they are not from a published dataset.
- `install.sh` uses `pip install --user` (no local venv) for reliability on Windows-mounted paths.
- Listing logic matches the book; wrappers only add imports and I/O so the module runs standalone.
