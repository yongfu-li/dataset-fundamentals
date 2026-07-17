# Example 1.16 — Household Incomes Dataset

**Chapter:** 1  
**Label:** `eg:1.16`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.4.3` — Techniques for Data Exploration

## Learning objective

Inspect a small numeric table and predict distributional skew by eye before any summary statistic confirms it.

## Chapter context

Section 1.4.3 pairs summaries, plots, and completeness checks as exploration techniques. This ten-row income table is deliberately small enough to eyeball, and is the exact file Example 1.20 profiles with pandas.

## What this example shows

Ten household incomes ranging from 45000 to 200000 across two columns, `ID` and `Income`.

## Key terms

- **Skew** — an asymmetric distribution where the mean is pulled away from the median by extreme values, visible here as a long upper tail of incomes.

## What you should learn

### From the data / input
- Two columns only: `ID` and `Income` — enough to study a univariate distribution.
- Incomes rise into six figures for later IDs — expect a right-skewed histogram.

### From the output / result
- Printing the CSV shows 10 rows; note the min (45000) and max (200000) before running Example 1.20.

## Contents

| File | Role |
|------|------|
| `household_incomes.csv` | Income sample used again in Example 1.20 |
| `install.sh` | No-op installer |
| `run.sh` | Prints the CSV |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Any shell that can run `cat`

## Setup

```bash
cd modules/chapter1/example16
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 1.16 — Household Incomes Dataset
---- household_incomes.csv ----
ID,Income
1,45000
2,52000
3,60000
4,75000
5,80000
6,95000
7,120000
8,150000
9,175000
10,200000
```

## How to interpret the result

A wide spread with a long upper tail (45000 up to 200000, with most rows well below the top) foreshadows mean-above-median in Example 1.20 — skew is visible before you compute anything.

## Try it / Reflect

- Sort the incomes and find the midpoint by hand; compare your eyeballed median to the mean Example 1.20 prints.

## Related examples

- `eg:1.20` — the pandas EDA script that loads this same file.

## Notes

- Companion scripted analysis: Example 1.20.
- Synthetic sample data from the book manuscript.
