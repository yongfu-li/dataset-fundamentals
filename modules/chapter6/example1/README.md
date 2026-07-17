# Example 6.1 — E-Commerce Customer EDA Pass

**Chapter:** 6  
**Label:** `eg:6.1`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6` — ?

## Learning objective

Outline a first-pass EDA workflow that combines summary statistics with univariate and bivariate plots on a customer table.

## Chapter context

Chapter 6 opens after cleaning (Chapter 5): EDA explores before confirmatory modeling. Example 6.1 turns the chapter definition into a compact e-commerce customer pass—summaries first, then histogram and scatter.

## What this example shows

An analyst reviews mean, median, and standard deviation for age, income, and purchase frequency, then plots an age histogram and an income-versus-spending scatter plot.

## Key terms

- **EDA** — Exploratory analysis to understand structure, quality, and relationships before formal modeling.
- **Univariate plot** — One-variable view such as a histogram of age.
- **Bivariate plot** — Two-variable view such as income versus spending.

## What you should learn

### From the concept
- Center and spread summaries precede model choice.
- Plots reveal shape and relationships tables hide.
- EDA findings may send data back to Chapter 5 for repair.

### From the output / result
- `run.sh` prints the four-step first-pass checklist.

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
cd modules/chapter6/example1
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
First-pass customer EDA:
1. Summarize age, annual income, and purchase frequency.
2. Plot the age distribution.
3. Plot income versus spending.
4. Record missingness, outliers, and relationships for follow-up.
```

## How to interpret the result

If you cannot name what you plotted and what defect you flagged, you have not finished first-pass EDA—only opened a notebook.

## Try it / Reflect

- On any table you have, list three numeric columns and one bivariate plot you would draw first.

## Related examples

- `eg:6.2` — Distribution shape checks after summaries.
- `eg:6.6` — Missingness profiling on clinical fields.
- `eg:6.15` — Mean as one summary statistic in the workflow.

## Notes

- Prose-only. Iterates with Chapter 5 cleaning.
