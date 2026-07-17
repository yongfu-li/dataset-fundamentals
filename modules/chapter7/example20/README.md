# Example 7.20 — Age Skew in Training Data

**Chapter:** 7  
**Label:** `eg:7.29`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.3.2` — Statistical Measures: Distribution Comparison and Correlation Analysis

## Learning objective

Quantify age skew between training bands and deployment population ratios.

## Chapter context

Section 7.3.2 introduces quantitative and visual bias detection techniques. If an AI model trained on a dataset has more data points from younger individuals than older ones, this could lead to biased predictions when the model is deployed in real-world se…

## What this example shows

If an AI model trained on a dataset has more data points from younger individuals than older ones, this could lead to biased predictions when the model is deployed in real-world settings.

## Key terms

- **80% rule** — Disparate-impact heuristic: group selection rate should be ≥80% of the highest group.
- **Chi-squared test** — Tests whether two categorical variables are independent.

## What you should learn

### From the code / process
- Compute train_share / deploy_share ratio per age band.
- Ratios <0.8 mark under-representation; >1.25 mark over-representation.
- Skew toward 18–29 predicts poor performance on 45–59 and 60+ at deployment.

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
cd modules/chapter7/example20
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Age band   Train %  Deploy %  Ratio
18-29       52.0%    25.0%   2.08  <-- over-represented
30-44       30.0%    30.0%   1.00
45-59       13.0%    25.0%   0.52  <-- under-represented
60+          5.0%    20.0%   0.25  <-- under-represented

A model trained on this skew will see mostly young records;
expect degraded predictions for 45-59 and 60+ users at deployment.
```

## How to interpret the result

Deployment skew on older bands is a classic silent failure—overall metrics can look fine while older users get poor service.

## Try it / Reflect

- Where does 'Age Skew in Training Data' appear in a dataset you have worked with?

## Related examples

- `eg:7.28` — Previous example in the same section.
- `eg:7.30` — Next example in the same section.

## Notes

- Standard-library bias-metric demo aligned with the chapter calculation.
- Module folder `example20` is **Example 7.20** in the PDF; manuscript label is `eg:7.29`.
