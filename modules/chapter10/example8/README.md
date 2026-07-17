# Example 10.8 — Income-Age Joint Distribution

**Chapter:** 10  
**Label:** `eg:10.8`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.3.2` — Correlation and Dependencies: Capturing Relationships Between Variables

## Learning objective

Generate correlated age–income pairs and explain why independent sampling fails.

## Chapter context

Section 10.3.2 covers multivariate and joint-distribution modeling when variables are correlated rather than independent. In a dataset involving income and age, one would analyze the joint distribution of both variables, allowing for the generation of synthetic data that maintains the same relationshi…

## What this example shows

In a dataset involving income and age, one would analyze the joint distribution of both variables, allowing for the generation of synthetic data that maintains the same relationship (e.g., higher income with age in certain segments).

## Key terms

- **Joint distribution** — Combined probability structure linking multiple variables.
- **Pearson correlation** — Linear association measure preserved in multivariate synthesis.

## What you should learn

### From the code / process
- Generate age 25–65 with income = 20k + 1.2×age + noise.
- Compute Pearson r between age and income.
- Independent univariate draws would break the positive correlation.

### From the output / result
- Compare printed statistics to the chapter's claimed behavior (moments, correlation, frequencies, or projections).

## Contents

| File | Role |
|------|------|
| `main.py` | Standard-library demo of the chapter's statistical method |
| `install.sh` | Checks that `python3` is available |
| `run.sh` | Runs `python3 main.py` |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ (standard library only)

## Setup

```bash
cd modules/chapter10/example8
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Synthetic pairs: 500
Age range: 25.1–65.0
Income range: $34,613–$118,719
Pearson r(age, income): 0.86

Independent univariate sampling would break this joint relationship;
multivariate (or copula) modeling keeps income rising with age.
```

## How to interpret the result

High Pearson r confirms the joint model; breaking correlation would produce implausible age–income pairs for downstream models.

## Try it / Reflect

- What happens to Pearson r if you sample age and income independently?

## Related examples

- `eg:10.6` — Univariate sampling is insufficient here.
- `eg:10.21` — Impossible joints when quality fails.

## Notes

- Standard-library Python demo; fixed seed for reproducible teaching output.
