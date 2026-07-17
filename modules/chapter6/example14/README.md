# Example 6.14 — Ordinal Satisfaction Scale

**Chapter:** 6  
**Label:** `eg:6.14`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.2.1` — Types of Data

## Learning objective

Treat satisfaction scales as ordinal—ordered ranks with not-necessarily-equal gaps.

## Chapter context

Example 6.14 closes Section 6.2.1—Very Unsatisfied through Very Satisfied are ordered but not interval-scaled.

## What this example shows

Satisfaction labels are ordered, but the gap between Neutral and Satisfied need not equal the gap between Very Unsatisfied and Unsatisfied.

## Key terms

- **Ordinal variable** — Categories with meaningful rank but unknown spacing.
- **Likert scale** — Common survey ordinal format.

## What you should learn

### From the concept
- Ranks matter; distances between labels may not.
- Median or rank-based methods often suit ordinals.
- Label encoding implies equal gaps—use only when justified (Chapter 5).

### From the output / result
- `run.sh` states ordered labels and unequal-gap caution.

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
cd modules/chapter6/example14
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Ordinal satisfaction:
Very Unsatisfied < Unsatisfied < Neutral < Satisfied < Very Satisfied.
Ranks are ordered, but the gaps between adjacent labels are not necessarily equal.
```

## How to interpret the result

Treating 'Very Satisfied' as 5× 'Neutral' in OLS without checking is an EDA-to-modeling mistake Example 6.14 warns against.

## Try it / Reflect

- Is 'Satisfied' exactly halfway between 'Neutral' and 'Very Satisfied'? Argue yes or no for your survey.

## Related examples

- `eg:6.13` — Nominal categories without order.
- `eg:5.48` — Label encoding for ordinal size in Chapter 5.
- `eg:6.17` — Mode on numeric samples—different setting.

## Notes

- Prose-only.
