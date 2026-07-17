# Example 6.10 — Continuous Physical Measures

**Chapter:** 6  
**Label:** `eg:6.10`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.2.1` — Types of Data

## Learning objective

Classify height, weight, temperature, and time as continuous measured variables for EDA summaries.

## Chapter context

Section 6.2.1 data types—Example 6.10 lists canonical continuous measures before discrete and categorical vignettes.

## What this example shows

Height, weight, temperature, and time are continuous: real-number scales that may include decimals (e.g., 175.2 cm).

## Key terms

- **Continuous variable** — Can take any value within an interval; measured, not counted.
- **Real-valued** — Permits fractional units on a scale.

## What you should learn

### From the concept
- Continuous variables suit histograms, means, and variances.
- Measurement units matter for interpretation.
- Contrast with discrete counts in Example 6.12.

### From the output / result
- `run.sh` lists continuous examples and decimal-scale property.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op installer |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter6/example10
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Continuous measures:
Examples: height, weight, temperature, time.
They may take decimal values within a range (for example, 175.2 cm) and are measured rather than counted.
```

## How to interpret the result

Choosing the wrong data type drives wrong summaries—do not treat continuous measures as arbitrary category codes.

## Try it / Reflect

- Which is continuous in your work: temperature, item count, or product category?

## Related examples

- `eg:6.11` — Monetary continuous case.
- `eg:6.12` — Discrete count contrast.
- `eg:6.15` — Mean for continuous numeric summaries.

## Notes

- Prose-only.
