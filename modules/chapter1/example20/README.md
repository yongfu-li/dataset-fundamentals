# Example 1.20 — Exploratory Analysis of Household Incomes

**Chapter:** 1  
**Label:** `eg:1.20`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.4.3` — Techniques for Data Exploration

## Learning objective

Run a minimal pandas EDA loop — preview, summarize, check missingness, visualize — and read skew directly off mean vs median.

## Chapter context

Section 1.4.3's worked exploration recipe (`head`, `describe`, `isnull`, histogram) is applied here to Example 1.16's income table, producing the mean-greater-than-median evidence for right skew the text discusses.

## What this example shows

A Python script that loads `household_incomes.csv`, previews it, computes summary statistics, checks nulls, and saves a histogram.

## Key terms

- **`describe()`** — a pandas method producing count/mean/std/quartiles per numeric column.
- **Right skew** — mean > median, caused by a long tail of high values; diagnosed here from the summary statistics.

## What you should learn

### From the data / input
- Same ten incomes as Example 1.16 (this module keeps a local copy so it is self-contained).

### From the code / process
1. `read_csv` loads the table.
2. `head()` previews structure.
3. `describe()` reports count/mean/std/quartiles.
4. `isnull().sum()` checks completeness.
5. `hist()` visualizes the income distribution — this module saves `income_hist.png` for headless runs; the book listing uses `plt.show()`.

### From the output / result
- Mean ~= 105200, median (50%) = 87500 -> mean > median => right skew.
- Missing counts are zero for both columns.
- Histogram shows more mass at lower incomes with a long high-income tail.

## Contents

| File | Role |
|------|------|
| `household_incomes.csv` | Same data as Example 1.16 |
| `main.py` | Book EDA script (savefig instead of interactive show) |
| `requirements.txt` | pandas, matplotlib |
| `install.sh` | Creates venv and installs deps |
| `run.sh` | Runs main.py with MPLBACKEND=Agg |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+

## Setup

```bash
cd modules/chapter1/example20
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 1.20 — Exploratory Analysis of Household Incomes
   ID  Income
0   1   45000
1   2   52000
2   3   60000
3   4   75000
4   5   80000
             ID         Income
count  10.00000      10.000000
mean    5.50000  105200.000000
std     3.02765   53989.299351
min     1.00000   45000.000000
25%     3.25000   63750.000000
50%     5.50000   87500.000000
75%     7.75000  142500.000000
max    10.00000  200000.000000
ID        0
Income    0
dtype: int64
Saved histogram to income_hist.png
```

## How to interpret the result

Skew is a modeling/cleaning signal, not a footnote — later cleaning chapters return to it when choosing transforms; here, the message is simply: do not assume symmetry from the mean alone.

## Try it / Reflect

- Open `income_hist.png` after running and count how many of the ten incomes fall below the mean (105200) versus above it.

## Related examples

- `eg:1.16` — the raw data this script profiles.
- `eg:1.12` — the same `isnull().sum()` idea applied manually to a smaller table.

## Notes

- Book listing calls `plt.show()`; this module saves a PNG so headless runs succeed.
- CSV duplicated here so the module is self-contained.
