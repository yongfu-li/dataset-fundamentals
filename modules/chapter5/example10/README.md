# Example 5.10 — MNAR Income Self-Censoring

**Chapter:** 5  
**Label:** `eg:5.10`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.1` — Missing Data: Types (MCAR, MAR, MNAR)

## Learning objective

Explain MNAR self-censoring on sensitive values and why mean imputation can understate tails.

## Chapter context

Section 5.2.1 classifies missing-data mechanisms—MCAR, MAR, and MNAR—so deletion and imputation choices match the missingness process rather than default pandas calls. If people with very high incomes are less likely to disclose them, missingness depends on the unobserved value itself (MNAR). Standard deletion or mean imputation can understate in…

## What this example shows

If people with very high incomes are less likely to disclose them, missingness depends on the unobserved value itself (MNAR). Standard deletion or mean imputation can understate income and require specialized correction.

## Key terms

- **MCAR** — Missing completely at random—missingness unrelated to observed or unobserved values.
- **MAR** — Missing at random—missingness depends on observed data, not the missing value itself.
- **MNAR** — Missing not at random—probability of missingness depends on the unobserved value.

## What you should learn

### From the concept
- If people with very high incomes are less likely to disclose them, missingness depends on the unobserved value itself (MNAR).
- Standard deletion or mean imputation can understate income and require specialized correction.

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
cd modules/chapter5/example10
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
If people with very high incomes are less likely to disclose them, missingness depends on the unobserved value itself (MNAR). Standard deletion or mean imputation can understate income and require specialized correction.
```

## How to interpret the result

Standard deletion or mean imputation can understate income and require specialized correction.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “MNAR Income Self-Censoring” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.9` — Previous example in the same section.

## Notes

- Prose-only in the manuscript.
