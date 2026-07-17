# Example 7.38 — Demographic Parity Reducing Loan Default Prediction

**Chapter:** 7  
**Label:** `eg:7.50`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.5.2` — Accuracy vs. Fairness

## Learning objective

Demonstrate demographic parity on loan approvals and its accuracy/default trade-off.

## Chapter context

Chapter 7 covers dataset bias types, detection, fairness metrics, and regulatory exposure. For example, if a loan approval system is adjusted to ensure equal approval rates for different racial groups (demographic parity), the system might become less accurate in predict…

## What this example shows

For example, if a loan approval system is adjusted to ensure equal approval rates for different racial groups (demographic parity), the system might become less accurate in predicting which individuals are most likely to repay loans, which could lead to higher default rates. This introduces a trade-off between fairness (equalizing outcomes) and accuracy (predictive precision).

## What you should learn

### From the code / process
- Compare single threshold vs group-specific thresholds on synthetic loan applicants.
- Demographic parity equalizes approval rates across groups A and B.
- Parity admits more borderline B applicants—accuracy falls and defaults rise.

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
cd modules/chapter7/example38
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Single threshold (accuracy-first)
  approval rate A = 60%, B = 20%
  accuracy = 90%, default rate among approved = 12%

Group thresholds (demographic parity)
  approval rate A = 60%, B = 60%
  accuracy = 80%, default rate among approved = 33%

Equalizing approval rates raises approvals for group B but admits more
borderline cases, so accuracy drops and defaults rise: the fairness-
accuracy trade-off the chapter describes.
```

## How to interpret the result

The printed accuracy/default shift shows why fairness constraints are policy choices with measurable costs, not free checkbox fixes.

## Try it / Reflect

- What approval threshold for B would match A's rate without lowering accuracy?

## Related examples

- `eg:7.33` — Disparate impact rule.
- `eg:7.48` — Outcome fairness metrics.

## Notes

- Standard-library bias-metric demo aligned with the chapter calculation.
- Module folder `example38` is **Example 7.38** in the PDF; manuscript label is `eg:7.50`.
