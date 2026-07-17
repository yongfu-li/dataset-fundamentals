# Example 7.21 — Chi-Squared Test for Gender Distribution

**Chapter:** 7  
**Label:** `eg:7.30`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.3.2` — Statistical Measures: Distribution Comparison and Correlation Analysis

## Learning objective

Run a chi-squared test on gender vs performance category and interpret rejection.

## Chapter context

Section 7.3.2 introduces quantitative and visual bias detection techniques. A Chi-squared test could check whether there is a significant difference in the distribution of gender across different categories in a dataset, such as high-performing vs. low-per…

## What this example shows

A Chi-squared test could check whether there is a significant difference in the distribution of gender across different categories in a dataset, such as high-performing vs. low-performing candidates.

## Key terms

- **80% rule** — Disparate-impact heuristic: group selection rate should be ≥80% of the highest group.
- **Chi-squared test** — Tests whether two categorical variables are independent.

## What you should learn

### From the code / process
- Build a 2×2 table: gender × (high/low performer).
- Compute chi-squared manually and compare to critical value 3.841 (df=1, α=0.05).
- Rejecting independence means gender and performance category are associated.

### From the output / result
- Compare printed statistics to the chapter's claimed bias signal or fairness trade-off.

## Contents

| File | Role |
|------|------|
| `main.py` | Standard-library demo of the chapter bias metric |
| `install.sh` | Checks that `python3` is available |
| `run.sh` | Runs `python3 main.py` |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ (standard library only)

## Setup

```bash
cd modules/chapter7/example21
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Gender    High   Low  Total
Male        90   210    300
Female      30   170    200
Total      120   380    500

Chi-squared statistic (df=1): 14.80
Critical value at alpha=0.05:  3.841
Result: REJECT independence — the high/low split differs by gender.
This is a bias signal worth investigating before training.
```

## How to interpret the result

A significant chi-squared result is a screening alarm, not proof of discrimination; it tells you where to audit labels and features next.

## Try it / Reflect

- What happens to chi-squared if Female high performers rise to 60?

## Related examples

- `eg:7.29` — Previous example in the same section.
- `eg:7.31` — Next example in the same section.

## Notes

- Standard-library bias-metric demo aligned with the chapter calculation.
- Module folder `example21` is **Example 7.21** in the PDF; manuscript label is `eg:7.30`.
