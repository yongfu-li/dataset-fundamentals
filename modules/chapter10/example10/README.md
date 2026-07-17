# Example 10.10 — Regression-Based GDP Projection

**Chapter:** 10  
**Label:** `eg:10.10`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.3.4` — Regression-Based Synthetic Data: Using Regression Models to Generate Values

## Learning objective

Fit a regression model and synthesize GDP projections for new rate scenarios.

## Chapter context

Section 10.3.4 uses regression-based models to synthesize dependent variables from fitted relationships plus noise. In economics, synthetic data for GDP growth can be generated based on predictors like interest rates, inflation, and government spending.

## What this example shows

In economics, synthetic data for GDP growth can be generated based on predictors like interest rates, inflation, and government spending.

## What you should learn

### From the code / process
- Fit GDP = b0 + b1×interest_rate on eight historical pairs.
- Add Gaussian noise at residual sd for new rate scenarios.
- Regression preserves the learned macro relationship.

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
cd modules/chapter10/example10
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Fitted model: GDP = 3.99 + (-0.75) * interest_rate + noise
Residual sd: 0.03

Synthetic GDP projections for new rate scenarios:
  interest_rate=1.25% -> synthetic GDP growth=3.03%
  interest_rate=2.75% -> synthetic GDP growth=1.92%
  interest_rate=5.00% -> synthetic GDP growth=0.24%

The regression preserves the learned rate-growth relationship while
noise samples new but plausible dependent-variable values.
```

## How to interpret the result

Synthetic GDP at unseen rates should follow the fitted negative slope; if projections ignore the learned relationship, the regression synthesis failed.

## Try it / Reflect

- Predict GDP at 6% interest from the fitted slope before running the script.

## Related examples

- `eg:10.7` — Simulation under uncertainty.
- `eg:10.19` — Synthetic-only metric misuse.

## Notes

- Standard-library Python demo; fixed seed for reproducible teaching output.
