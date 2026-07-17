# Example 5.9 — MAR Income Nonresponse Pattern

**Chapter:** 5  
**Label:** `eg:5.9`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.1` — Missing Data: Types (MCAR, MAR, MNAR)

## Learning objective

Identify MAR income nonresponse and when conditioning on observed covariates or MI helps.

## Chapter context

Section 5.2.1 classifies missing-data mechanisms—MCAR, MAR, and MNAR—so deletion and imputation choices match the missingness process rather than default pandas calls. If lower-income participants are less likely to report income but the missingness does not depend on the unreported value itself, the pattern is missing at random (MAR). Multiple i…

## What this example shows

If lower-income participants are less likely to report income but the missingness does not depend on the unreported value itself, the pattern is missing at random (MAR). Multiple imputation or models that condition on observed covariates are often appropriate.

## Key terms

- **MCAR** — Missing completely at random—missingness unrelated to observed or unobserved values.
- **MAR** — Missing at random—missingness depends on observed data, not the missing value itself.
- **MNAR** — Missing not at random—probability of missingness depends on the unobserved value.

## What you should learn

### From the concept
- If lower-income participants are less likely to report income but the missingness does not depend on the unreported value itself, the pattern is missing at random (MAR).
- Multiple imputation or models that condition on observed covariates are often appropriate.

### From the output / result
- `run.sh` prints the structured takeaway as a cleaning/preprocessing checklist.

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
cd modules/chapter5/example9
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
If lower-income participants are less likely to report income but the missingness does not depend on the unreported value itself, the pattern is missing at random (MAR). Multiple imputation or models that condition on observed covariates are often appropriate.
```

## How to interpret the result

Multiple imputation or models that condition on observed covariates are often appropriate.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “MAR Income Nonresponse Pattern” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.8` — Previous example in the same section.
- `eg:5.10` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
