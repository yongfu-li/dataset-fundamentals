# Example 7.25 — Combining Views for Bias Screening

**Chapter:** 7  
**Label:** `eg:7.34`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.3.2` — Statistical Measures: Distribution Comparison and Correlation Analysis

## Learning objective

Triangulate bias with heatmap, bar chart, and scatter plot before formal tests.

## Chapter context

Section 7.3.2 introduces quantitative and visual bias detection techniques. An analyst auditing a loan-approval dataset might combine a correlation heatmap, a bar chart of approval counts by race, and a scatter plot of income against approval probability, …

## What this example shows

An analyst auditing a loan-approval dataset might combine a correlation heatmap, a bar chart of approval counts by race, and a scatter plot of income against approval probability, triangulating across all three views to locate where imbalance is concentrated before running formal statistical tests.

## Key terms

- **80% rule** — Disparate-impact heuristic: group selection rate should be ≥80% of the highest group.
- **Chi-squared test** — Tests whether two categorical variables are independent.

## What you should learn

### From the concept
- Heatmap: which features correlate with sensitive attributes
- Bar chart: outcome counts/rates per group
- Scatter plot: joint feature-outcome patterns

### From the output / result
- `run.sh` prints the structured takeaway below—use it when classifying or mitigating bias.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op or prerequisite check |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter7/example25
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.25 — Combining Views for Bias Screening
Bias screening by triangulation:
- Heatmap: which features correlate with sensitive attributes
- Bar chart: outcome counts/rates per group
- Scatter plot: joint feature-outcome patterns
Locate the imbalance visually, then confirm with formal tests
```

## How to interpret the result

The closing bullet—'Scatter plot: joint feature-outcome patterns'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Combining Views for Bias Screening' appear in a dataset you have worked with?

## Related examples

- `eg:7.33` — Previous example in the same section.
- `eg:7.35` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example25` is **Example 7.25** in the PDF; manuscript label is `eg:7.34`.
