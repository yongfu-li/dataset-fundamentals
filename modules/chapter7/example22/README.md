# Example 7.22 — Correlation with Sensitive Attributes

**Chapter:** 7  
**Label:** `eg:7.31`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.3.2` — Statistical Measures: Distribution Comparison and Correlation Analysis

## Learning objective

Screen features for proxy correlation with sensitive attributes before training.

## Chapter context

Section 7.3.2 introduces quantitative and visual bias detection techniques. If certain features in the dataset are correlated with sensitive attributes like race, gender, or socio-economic status, these correlations may lead to biased predictions when the …

## What this example shows

If certain features in the dataset are correlated with sensitive attributes like race, gender, or socio-economic status, these correlations may lead to biased predictions when the model is trained on these features.

## Key terms

- **80% rule** — Disparate-impact heuristic: group selection rate should be ≥80% of the highest group.
- **Chi-squared test** — Tests whether two categorical variables are independent.

## What you should learn

### From the code / process
- Compute Pearson r between each feature and a binary sensitive attribute.
- Flag |r| ≥ 0.5 as likely proxy features (zip_income_index here).
- Dropping the sensitive column alone does not remove the proxy path.

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
cd modules/chapter7/example22
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Correlation of each feature with the sensitive attribute:
  years_experience   r = +0.05
  zip_income_index   r = -0.98  <-- likely proxy, review before use

A feature strongly correlated with the sensitive attribute can act as a
proxy: dropping the attribute itself is not enough to remove the bias path.
```

## How to interpret the result

A near-perfect proxy correlation means the model can reconstruct the sensitive attribute; remove or transform the proxy before training.

## Try it / Reflect

- Where does 'Correlation with Sensitive Attributes' appear in a dataset you have worked with?

## Related examples

- `eg:7.32` — Proxy features.
- `eg:7.35` — Correlation heatmap.

## Notes

- Standard-library bias-metric demo aligned with the chapter calculation.
- Module folder `example22` is **Example 7.22** in the PDF; manuscript label is `eg:7.31`.
