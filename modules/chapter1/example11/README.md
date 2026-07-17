# Example 1.11 — Financial Dataset with an Incorrect Transaction

**Chapter:** 1  
**Label:** `eg:1.11`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.3.1` — Attributes of a Good Dataset

## Learning objective

Detect an accuracy defect by comparing a suspicious value against its neighbors, and see how one bad cell can dominate an aggregate.

## Chapter context

Section 1.3.1 opens the quality-dimensions discussion with accuracy: a mis-keyed amount is the simplest, most damaging kind of defect because downstream sums and models trust it at face value.

## What this example shows

A three-row ledger where transaction `T002`'s credit amount (15000.00) is an order of magnitude above the otherwise-similar `T001` (1500.00) — a plausible extra-zero data-entry error.

## Key terms

- **Accuracy** — the degree to which recorded values reflect real-world truth; the first quality dimension Section 1.3.1 introduces.

## What you should learn

### From the data / input
- Compare credit amounts: `1500.00` vs `15000.00` — same account type, implausible jump without further context.
- Defects can be local (one cell) yet global in impact (a monthly revenue total).

### From the code / process
- `main.py` loads the CSV, prints every row, sums the credit amounts, then explicitly flags `T002`.

### From the output / result
- Credit total `16500.0` is dominated by the suspect row — the "problem signal" the chapter wants you to notice before trusting the number.

## Contents

| File | Role |
|------|------|
| `data.csv` | Transaction sample |
| `main.py` | Prints rows and flags the outlier |
| `install.sh` | No-op installer |
| `run.sh` | Runs the preview script |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+

## Setup

```bash
cd modules/chapter1/example11
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 1.11 — Financial Dataset with an Incorrect Transaction
{'Txn_ID': 'T001', 'Date': '2024-03-01', 'Account': 'Revenue', 'Amount': '1500.00', 'Type': 'Credit'}
{'Txn_ID': 'T002', 'Date': '2024-03-02', 'Account': 'Revenue', 'Amount': '15000.00', 'Type': 'Credit'}
{'Txn_ID': 'T003', 'Date': '2024-03-03', 'Account': 'Refund', 'Amount': '50.00', 'Type': 'Debit'}

Credit total: 16500.0
Note: T002 (15000.00) is an order of magnitude larger than T001 (1500.00).
```

## How to interpret the result

Before trusting any KPI built from this table (like "credit total"), sanity-check magnitudes against neighboring rows — accuracy failures often look like round numbers or 10x jumps, exactly the pattern flagged here.

## Try it / Reflect

- Change `T002`'s amount to a plausible `1600.00` in `data.csv` and rerun — watch the credit total drop from 16500.0 to 3100.0.

## Related examples

- `eg:1.12` — completeness (missing values) as the next quality dimension.
- `eg:1.13` — consistency (mixed date formats) as the third.

## Notes

- Pair with Examples 1.12-1.13 (completeness and consistency).
- Synthetic sample data from the book manuscript.
