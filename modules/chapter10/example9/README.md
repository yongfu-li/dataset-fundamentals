# Example 10.9 — Bootstrapping Purchase Histories

**Chapter:** 10  
**Label:** `eg:10.9`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.3.3` — Bootstrapping Techniques: Generating Synthetic Datasets from Small Samples

## Learning objective

Bootstrap a larger purchase-history sample and note support limitations.

## Chapter context

Section 10.3.3 explains bootstrapping: resampling with replacement to expand datasets while reusing observed support. If you have a small dataset of customer purchase histories, bootstrapping can generate larger synthetic datasets that mimic the patterns observed in the original data, which can th…

## What this example shows

If you have a small dataset of customer purchase histories, bootstrapping can generate larger synthetic datasets that mimic the patterns observed in the original data, which can then be used to train a machine learning model for prediction.

## Key terms

- **Bootstrap** — Resampling with replacement from an observed sample to create synthetic sets.

## What you should learn

### From the code / process
- Bootstrap 40 purchase amounts by sampling 8 originals with replacement.
- Compare original vs synthetic means and value frequencies.
- Support is limited to observed amounts—no new extremes invented.

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
cd modules/chapter10/example9
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Original sample (n=8): [12.5, 40.0, 8.0, 95.0, 22.0, 15.5, 60.0, 33.0]
Bootstrap synthetic sample (n=40)
Original mean:  $35.75
Synthetic mean: $36.09
Value frequencies in synthetic set:
  $  8.0: 5 times
  $ 12.5: 6 times
  $ 15.5: 5 times
  $ 22.0: 5 times
  $ 33.0: 7 times
  $ 40.0: 1 times
  $ 60.0: 5 times
  $ 95.0: 6 times

Sampling with replacement reuses real rows; it expands volume but
cannot invent purchase amounts outside the original support.
```

## How to interpret the result

Matching means is not enough—check that no bootstrap value falls outside the original support; that boundary defines what resampling can invent.

## Try it / Reflect

- Can bootstrap invent a purchase amount outside the original eight values?

## Related examples

- `eg:10.6` — Distribution modeling alternative.
- `Chapter 5` — SMOTE as local resampling.

## Notes

- Standard-library Python demo; fixed seed for reproducible teaching output.
