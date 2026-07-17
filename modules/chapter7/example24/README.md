# Example 7.24 — The 80\% Rule in Hiring

**Chapter:** 7  
**Label:** `eg:7.33`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.3.2` — Statistical Measures: Distribution Comparison and Correlation Analysis

## Learning objective

Compute hiring selection rates and apply the 80% disparate-impact rule.

## Chapter context

Section 7.3.2 introduces quantitative and visual bias detection techniques. In hiring, if a selection process disproportionately excludes candidates from a certain race or gender without a justified reason, the metric of disparate impact would flag this di…

## What this example shows

In hiring, if a selection process disproportionately excludes candidates from a certain race or gender without a justified reason, the metric of disparate impact would flag this disparity. A common threshold used in disparate impact analysis is the 80

## Key terms

- **80% rule** — Disparate-impact heuristic: group selection rate should be ≥80% of the highest group.
- **Chi-squared test** — Tests whether two categorical variables are independent.

## What you should learn

### From the code / process
- Selection rate = selected / applicants per group.
- Ratio = group rate / highest group rate.
- Ratios below 0.80 trigger adverse-impact review under the 80% rule.

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
cd modules/chapter7/example24
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Group     Applied Selected   Rate  Ratio
Group A       200       60 30.0%   1.00
Group B       180       45 25.0%   0.83
Group C       120       24 20.0%   0.67  <-- below 80% rule
Group D       100       20 20.0%   0.67  <-- below 80% rule

Reference (highest) selection rate: 30.0%
Any group whose ratio falls below 0.80 may indicate adverse impact and
should trigger review of the selection process (cf. Figure 7.1).
```

## How to interpret the result

Groups C and D below 0.80 need process review—legal disparate-impact analysis often starts exactly here.

## Try it / Reflect

- Which group's ratio crosses 0.80 if Group C selects 30 instead of 24?

## Related examples

- `eg:7.36` — Bar chart screening.
- `eg:7.47` — Procedural fairness in hiring.

## Notes

- Standard-library bias-metric demo aligned with the chapter calculation.
- Module folder `example24` is **Example 7.24** in the PDF; manuscript label is `eg:7.33`.
