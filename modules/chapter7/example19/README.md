# Example 7.19 — Distribution Comparison Across Demographics

**Chapter:** 7  
**Label:** `eg:7.28`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.3.2` — Statistical Measures: Distribution Comparison and Correlation Analysis

## Learning objective

Compare dataset demographic shares to population targets and flag ≥5-point gaps.

## Chapter context

Section 7.3.2 introduces quantitative and visual bias detection techniques. If the dataset includes features like age, gender, and race, comparing the distribution of these features across different groups can reveal any imbalances.

## What this example shows

If the dataset includes features like age, gender, and race, comparing the distribution of these features across different groups can reveal any imbalances.

## Key terms

- **80% rule** — Disparate-impact heuristic: group selection rate should be ≥80% of the highest group.
- **Chi-squared test** — Tests whether two categorical variables are independent.

## What you should learn

### From the code / process
- Compare each group's dataset share to a target population share.
- Flag gaps ≥5 percentage points as re-sampling candidates.
- Male over-representation (+15 pts) and Female under-representation (−18 pts) signal imbalance.

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
cd modules/chapter7/example19
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Group    Dataset n  Dataset %  Population %     Gap
Male           640     64.0%        49.0%  +15.0%  <-- imbalance
Female         310     31.0%        49.0%  -18.0%  <-- imbalance
Other           50      5.0%         2.0%   +3.0%

Groups whose dataset share differs from the population share by 5+ points
are candidates for re-sampling or re-weighting before training.
```

## How to interpret the result

Large population gaps mean the model learns a non-representative world; fix collection or re-weight before claiming fair deployment.

## Try it / Reflect

- Change Female count to 490—does the gap flag disappear?

## Related examples

- `eg:7.29` — Age skew check.
- `Chapter 3` — Demographic imbalance eg:3.20.

## Notes

- Standard-library bias-metric demo aligned with the chapter calculation.
- Module folder `example19` is **Example 7.19** in the PDF; manuscript label is `eg:7.28`.
