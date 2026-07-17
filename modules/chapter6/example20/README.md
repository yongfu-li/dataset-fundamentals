# Example 6.20 — Range of a Small Sample

**Chapter:** 6  
**Label:** `eg:6.20`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.2.3` — Measures of Dispersion: Variance, Standard Deviation, Range

## Learning objective

Compute range as max minus min and note its sensitivity to outliers.

## Chapter context

Example 6.20 closes Section 6.2.3—range is the simplest dispersion measure on [1,3,5,7,9].

## What this example shows

For [1, 3, 5, 7, 9], range = 9 − 1 = 8.

## What you should learn

### From the code / process
- Range uses only two points—very sensitive to outliers.
- Quick sanity check, not a robust spread summary.
- Pair with IQR (Chapter 5) for robust fences.

### From the output / result
- `run.sh` prints min, max, and range 8.

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
cd modules/chapter6/example20
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Values: [1, 3, 5, 7, 9]
Minimum: 1
Maximum: 9
Range: 8
```

## How to interpret the result

A single typo max (Example 6.7) can double range—always verify extremes before trusting it.

## Try it / Reflect

- How does range change if the maximum becomes 99 instead of 9?

## Related examples

- `eg:6.18` — Variance uses all points, not just extremes.
- `eg:6.7` — Outlier affects range strongly.
- `eg:5.44` — IQR outlier flag in Chapter 5.

## Notes

- Standard-library only.
- EDA detects and frames issues; Chapter 5 contains cleaning and preprocessing remedies.
