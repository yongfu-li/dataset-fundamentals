# Example 6.2 — Skewness Informs Model Choice

**Chapter:** 6  
**Label:** `eg:6.2`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.1.1` — Importance of EDA in Data Science

## Learning objective

Use distribution shape (symmetric vs skewed) to narrow later statistical and model choices.

## Chapter context

Section 6.1.1 lists roles of EDA; Example 6.2 is the shape-check vignette—normal-ish vs heavy skew changes which summaries and models are appropriate.

## What this example shows

Checking whether a variable is approximately normal or strongly skewed informs which statistical methods or models are appropriate later.

## Key terms

- **Skewness** — Asymmetry of a distribution—long tail on one side.
- **Parametric methods** — Techniques assuming approximate normality (e.g., some t-tests, linear models with Gaussian noise).

## What you should learn

### From the concept
- Symmetric data: mean and standard deviation are natural summaries.
- Skewed data: median, transforms, or robust methods may fit better.
- Shape checks belong in EDA, not after a misfit model.

### From the output / result
- `run.sh` contrasts symmetric vs skewed follow-up choices.

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
cd modules/chapter6/example2
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Inspect distribution shape before model choice:
- Approximately symmetric/normal: conventional parametric methods may fit.
- Strongly skewed: consider robust summaries, transformations, or other model assumptions.
```

## How to interpret the result

Example 6.11's monetary totals and log transforms (Chapter 5 eg:5.26) both connect here—skew prompts a deliberate summary choice.

## Try it / Reflect

- Sketch a histogram: would you report mean or median for its center?

## Related examples

- `eg:6.1` — First-pass workflow including summaries.
- `eg:6.11` — Continuous sales totals often skew right.
- `eg:6.4` — Model family choice from relationship shape.

## Notes

- Prose-only.
