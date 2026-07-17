# Example 7.23 — Proxy Correlation via Name Features

**Chapter:** 7  
**Label:** `eg:7.32`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.3.2` — Statistical Measures: Distribution Comparison and Correlation Analysis

## Learning objective

Explain proxy bias through names, zip codes, or schools even when race is dropped.

## Chapter context

Section 7.3.2 introduces quantitative and visual bias detection techniques. If a hiring algorithm uses a feature like "name" and finds correlations with race or ethnicity (e.g., names common to certain ethnic groups), the model could inherit these biases. …

## What this example shows

If a hiring algorithm uses a feature like "name" and finds correlations with race or ethnicity (e.g., names common to certain ethnic groups), the model could inherit these biases. By examining correlation coefficients between features, analysts can detect where biased associations might exist in the data.

## Key terms

- **80% rule** — Disparate-impact heuristic: group selection rate should be ≥80% of the highest group.
- **Chi-squared test** — Tests whether two categorical variables are independent.

## What you should learn

### From the concept
- Names (and zip codes, schools) correlate with race/ethnicity
- Models inherit bias through proxies even with sensitive columns removed
- Screen features via correlation analysis before training

### From the output / result
- `run.sh` prints the structured takeaway below—use it when classifying or mitigating bias.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op or prerequisite check |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter7/example23
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.23 — Proxy Correlation via Name Features
Proxy features:
- Names (and zip codes, schools) correlate with race/ethnicity
- Models inherit bias through proxies even with sensitive columns removed
- Screen features via correlation analysis before training
```

## How to interpret the result

The closing bullet—'Screen features via correlation analysis before training'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Proxy Correlation via Name Features' appear in a dataset you have worked with?

## Related examples

- `eg:7.31` — Previous example in the same section.
- `eg:7.33` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example23` is **Example 7.23** in the PDF; manuscript label is `eg:7.32`.
