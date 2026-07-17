# Example 7.26 — Salary-Race Correlation Heatmap

**Chapter:** 7  
**Label:** `eg:7.35`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.3.2` — Statistical Measures: Distribution Comparison and Correlation Analysis

## Learning objective

Read a salary–race correlation heatmap for historical bias fingerprints.

## Chapter context

Section 7.3.2 introduces quantitative and visual bias detection techniques. If race correlates strongly with salary, this could indicate the presence of historical biases in the dataset that need to be addressed.

## What this example shows

If race correlates strongly with salary, this could indicate the presence of historical biases in the dataset that need to be addressed.

## Key terms

- **80% rule** — Disparate-impact heuristic: group selection rate should be ≥80% of the highest group.
- **Chi-squared test** — Tests whether two categorical variables are independent.

## What you should learn

### From the concept
- Color-coded feature-correlation matrix, sensitive attributes included
- Strong race-salary correlation = historical bias fingerprint
- Hot cells tell you which features to investigate or remove

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
cd modules/chapter7/example26
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.26 — Salary-Race Correlation Heatmap
Correlation heatmap:
- Color-coded feature-correlation matrix, sensitive attributes included
- Strong race-salary correlation = historical bias fingerprint
- Hot cells tell you which features to investigate or remove
```

## How to interpret the result

The closing bullet—'Hot cells tell you which features to investigate or remove'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Salary-Race Correlation Heatmap' appear in a dataset you have worked with?

## Related examples

- `eg:7.34` — Previous example in the same section.
- `eg:7.36` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example26` is **Example 7.26** in the PDF; manuscript label is `eg:7.35`.
