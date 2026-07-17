# Example 6.15 — Mean Income Calculation

**Chapter:** 6  
**Label:** `eg:6.15`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.2.2` — Descriptive Statistics for Numerical Data

## Learning objective

Compute and interpret the arithmetic mean of five income observations using the sum-over-count definition.

## Chapter context

Section 6.2.2 descriptive statistics—Example 6.15 is the first numeric calculation, implemented with Python's standard library.

## What this example shows

For incomes [30000, 35000, 40000, 45000, 50000], sum 200000 divided by 5 gives mean 40000.

## What you should learn

### From the code / process
- Mean uses every observation equally.
- Symmetric evenly spaced incomes yield mean = median here.
- With skew or outliers, compare mean to median (Examples 6.2, 6.16).

### From the output / result
- `run.sh` prints values, sum, count, and mean 40000.0.

## Contents

| File | Role |
|------|------|
| `main.py` | Standard-library calculation from the book example |
| `install.sh` | Confirms Python 3 is available (no external packages) |
| `run.sh` | Runs `main.py` |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ (stdlib only)

## Setup

```bash
cd modules/chapter6/example15
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Values: [30000, 35000, 40000, 45000, 50000]
Sum: 200000
Count: 5
Mean: 40000.0
```

## How to interpret the result

Verify Sum/Count matches Mean—then ask whether mean is the right center for your real income data.

## Try it / Reflect

- Add one outlier income of 500000—how would the mean change vs the median in Example 6.16?

## Related examples

- `eg:6.16` — Median for robust center.
- `eg:6.2` — Skew prompts median over mean.
- `eg:6.18` — Spread around the mean.

## Notes

- Standard-library only; no external packages.
- EDA detects and frames issues; Chapter 5 contains cleaning and preprocessing remedies.
