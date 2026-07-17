# Example 6.18 — Variance Sketch

**Chapter:** 6  
**Label:** `eg:6.18`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.2.3` — Measures of Dispersion: Variance, Standard Deviation, Range

## Learning objective

Compute squared deviations from the mean and population vs sample variance for a small dataset.

## Chapter context

Section 6.2.3 dispersion—Example 6.18 walks variance as average squared deviation; Example 6.19 takes the square root.

## What this example shows

For [2, 4, 4, 6, 8], mean 4.8; squared deviations average to population variance 4.16 (n) or sample variance 5.2 (n−1).

## What you should learn

### From the code / process
- Variance is in squared units—harder to interpret than SD.
- Report whether you use population or sample formula.
- Larger spread → larger squared deviations.

### From the output / result
- `run.sh` prints mean, squared deviations, and both variance formulas.

## Contents

| File | Role |
|------|------|
| `main.py` | Standard-library calculation from the book example |
| `install.sh` | Confirms Python 3 is available (no external packages) |
| `run.sh` | Runs `main.py` |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ (stdlib only)

## Setup

```bash
cd modules/chapter6/example18
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Values: [2, 4, 4, 6, 8]
Mean: 4.8
Squared deviations: [7.839999999999999, 0.6399999999999997, 0.6399999999999997, 1.4400000000000004, 10.240000000000002]
Population variance (n): 4.16
Sample variance (n-1): 5.2
```

## How to interpret the result

Match population vs sample denominators to your inference goal—modules print both for teaching.

## Try it / Reflect

- Which single value in the list most increases squared deviation from the mean?

## Related examples

- `eg:6.19` — Standard deviation as sqrt(variance).
- `eg:6.20` — Range as simpler spread measure.
- `eg:6.15` — Mean used in deviation calculation.

## Notes

- Standard-library only.
- EDA detects and frames issues; Chapter 5 contains cleaning and preprocessing remedies.
