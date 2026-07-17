# Example 6.16 — Median for Odd and Even Samples

**Chapter:** 6  
**Label:** `eg:6.16`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.2.2` — Descriptive Statistics for Numerical Data

## Learning objective

Compute the median for odd-length and even-length samples and contrast with the mean.

## Chapter context

Example 6.16 in Section 6.2.2 shows middle-value logic for n=5 and average-of-middles for n=4.

## What this example shows

Median is 30 for [10,20,30,40,50] and (20+30)/2 = 25 for [10,20,30,40].

## What you should learn

### From the code / process
- Sort before picking the median.
- Even n requires averaging the two central values.
- Compare median to mean when outliers or skew appear.

### From the output / result
- `run.sh` prints both odd and even sample medians.

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
cd modules/chapter6/example16
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Odd sample: [10, 20, 30, 40, 50] median = 30
Even sample: [10, 20, 30, 40] median = 25.0
```

## How to interpret the result

For even n, do not pick a single middle index—Example 6.16's 25 is the average of 20 and 30.

## Try it / Reflect

- Compute the median of [5, 1, 9] without sorting first—what goes wrong?

## Related examples

- `eg:6.15` — Mean on a similar scale.
- `eg:6.17` — Mode as another center concept.
- `eg:6.2` — When median is preferred.

## Notes

- Standard-library only.
- EDA detects and frames issues; Chapter 5 contains cleaning and preprocessing remedies.
