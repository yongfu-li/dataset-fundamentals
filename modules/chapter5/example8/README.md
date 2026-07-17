# Example 5.8 — MCAR System Error Omits Records

**Chapter:** 5  
**Label:** `eg:5.8`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.1` — Missing Data: Types (MCAR, MAR, MNAR)

## Learning objective

Classify MCAR survey dropouts and when listwise deletion or simple imputation is less biased.

## Chapter context

Section 5.2.1 classifies missing-data mechanisms—MCAR, MAR, and MNAR—so deletion and imputation choices match the missingness process rather than default pandas calls. If a survey platform randomly fails to save some completed responses, the missing rows are missing completely at random (MCAR). Listwise deletion or simple imputation is less likel…

## What this example shows

If a survey platform randomly fails to save some completed responses, the missing rows are missing completely at random (MCAR). Listwise deletion or simple imputation is less likely to introduce systematic bias in that case.

## Key terms

- **MCAR** — Missing completely at random—missingness unrelated to observed or unobserved values.
- **MAR** — Missing at random—missingness depends on observed data, not the missing value itself.
- **MNAR** — Missing not at random—probability of missingness depends on the unobserved value.

## What you should learn

### From the concept
- If a survey platform randomly fails to save some completed responses, the missing rows are missing completely at random (MCAR).
- Listwise deletion or simple imputation is less likely to introduce systematic bias in that case.

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
cd modules/chapter5/example8
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
If a survey platform randomly fails to save some completed responses, the missing rows are missing completely at random (MCAR). Listwise deletion or simple imputation is less likely to introduce systematic bias in that case.
```

## How to interpret the result

Listwise deletion or simple imputation is less likely to introduce systematic bias in that case.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “MCAR System Error Omits Records” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.9` — MAR pattern contrast.
- `eg:5.10` — MNAR pattern contrast.
- `eg:5.37` — Deletion when MCAR is plausible.

## Notes

- Prose-only in the manuscript.
