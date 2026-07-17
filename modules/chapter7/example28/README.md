# Example 7.28 — Income-Race Scatter Plot

**Chapter:** 7  
**Label:** `eg:7.37`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.3.2` — Statistical Measures: Distribution Comparison and Correlation Analysis

## Learning objective

Use income–race scatter plots to expose clustering and proxy structure.

## Chapter context

Section 7.3.2 introduces quantitative and visual bias detection techniques. If income is plotted against race, a scatter plot can show whether certain racial groups are clustered in specific income ranges, potentially signaling a bias in the data.

## What this example shows

If income is plotted against race, a scatter plot can show whether certain racial groups are clustered in specific income ranges, potentially signaling a bias in the data.

## Key terms

- **80% rule** — Disparate-impact heuristic: group selection rate should be ≥80% of the highest group.
- **Chi-squared test** — Tests whether two categorical variables are independent.

## What you should learn

### From the concept
- Group-colored points expose clustering in income ranges
- Clustering signals structural bias and potential proxy features
- Use alongside heatmaps and bar charts for a full visual screen

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
cd modules/chapter7/example28
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.28 — Income-Race Scatter Plot
Income-race scatter plot:
- Group-colored points expose clustering in income ranges
- Clustering signals structural bias and potential proxy features
- Use alongside heatmaps and bar charts for a full visual screen
```

## How to interpret the result

The closing bullet—'Use alongside heatmaps and bar charts for a full visual screen'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Income-Race Scatter Plot' appear in a dataset you have worked with?

## Related examples

- `eg:7.36` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example28` is **Example 7.28** in the PDF; manuscript label is `eg:7.37`.
