# Example 6.19 — Standard Deviation from Variance

**Chapter:** 6  
**Label:** `eg:6.19`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.2.3` — Measures of Dispersion: Variance, Standard Deviation, Range

## Learning objective

Convert variance to standard deviation and report spread in original units.

## Chapter context

Example 6.19 continues Example 6.18's sample—SD is the interpretable spread measure in the same units as the data.

## What this example shows

For [2, 4, 4, 6, 8], standard deviation is the square root of the variance from Example 6.18 (~2.04 population, ~2.28 sample).

## What you should learn

### From the code / process
- SD is more interpretable than variance for reporting.
- Use the same n vs n−1 convention as variance.
- SD summarizes spread assuming roughly unimodal data.

### From the output / result
- `run.sh` prints population and sample variance and SD.

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
cd modules/chapter6/example19
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Values: [2, 4, 4, 6, 8]
Population variance: 4.16
Population standard deviation: 2.039607805437114
Sample variance: 5.2
Sample standard deviation: 2.280350850198276
```

## How to interpret the result

When Example 6.1 reports 'standard deviation for age,' this is the calculation behind that summary line.

## Try it / Reflect

- If variance doubles, what happens to standard deviation?

## Related examples

- `eg:6.18` — Variance calculation prerequisite.
- `eg:6.20` — Range vs SD trade-off.
- `eg:6.1` — SD in first-pass summaries.

## Notes

- Standard-library only.
- EDA detects and frames issues; Chapter 5 contains cleaning and preprocessing remedies.
