# Example 10.7 — Monte Carlo Asset-Return Simulation

**Chapter:** 10  
**Label:** `eg:10.7`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.3.1` — Data Distribution Modeling: Fitting Data to Known Distributions, Monte Carlo Simulations

## Learning objective

Run a Monte Carlo return simulation and read distributional risk summaries.

## Chapter context

Section 10.3.1 introduces distribution modeling and Monte Carlo simulation: fit a law, then sample or simulate many draws under uncertainty. In financial modeling, Monte Carlo simulations are used to generate synthetic data that mimics the returns of an asset, considering various risk factors and market conditions.

## What this example shows

In financial modeling, Monte Carlo simulations are used to generate synthetic data that mimics the returns of an asset, considering various risk factors and market conditions.

## Key terms

- **Monte Carlo simulation** — Repeated random sampling to approximate an outcome distribution.

## What you should learn

### From the code / process
- Simulate 5,000 one-period returns from N(8%, 20%).
- Report mean, sd, P(return<0), and 5th percentile.
- Many random paths approximate risk under uncertainty.

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
cd modules/chapter10/example7
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Assumed return model: N(mu=8%, sigma=20%)
Monte Carlo paths: 5000
Mean simulated return: 7.60%
Sd of simulated return: 19.98%
P(return < 0): 35.5%
5th percentile: -25.31%

Repeated random draws approximate the outcome distribution under risk factors.
```

## How to interpret the result

Tail metrics like P(return<0) and the 5th percentile matter more than the mean alone for risk decisions—the Monte Carlo spread is the deliverable.

## Try it / Reflect

- How does P(return < 0) change if you halve sigma?

## Related examples

- `eg:10.6` — Parametric sampling baseline.
- `eg:10.10` — Regression-based projection.

## Notes

- Standard-library Python demo; fixed seed for reproducible teaching output.
