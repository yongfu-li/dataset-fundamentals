# Example 7.15 — Aggregate Bias in Credit Scoring

**Chapter:** 7  
**Label:** `eg:7.24`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.2.5` — Aggregation Bias: Generalizing Findings Across Diverse Subgroups

## Learning objective

Disaggregate credit-scoring errors to find who bears aggregation bias costs.

## Chapter context

Section 7.2.5 covers aggregation bias when pooled models hide subgroup structure. In credit scoring, aggregation bias may occur when a model uses data from a diverse population, including both high- and low-income individuals, but does not account for income dis…

## What this example shows

In credit scoring, aggregation bias may occur when a model uses data from a diverse population, including both high- and low-income individuals, but does not account for income disparities between groups. This may lead to inaccurate predictions of creditworthiness for individuals in lower-income brackets, disproportionately affecting them.

## What you should learn

### From the concept
- One pooled model ignores income-structure differences between groups
- Creditworthiness is mispredicted for lower-income brackets
- Disaggregate error analysis to find who bears the cost

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
cd modules/chapter7/example15
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.15 — Aggregate Bias in Credit Scoring
Aggregation bias — credit scoring:
- One pooled model ignores income-structure differences between groups
- Creditworthiness is mispredicted for lower-income brackets
- Disaggregate error analysis to find who bears the cost
```

## How to interpret the result

The closing bullet—'Disaggregate error analysis to find who bears the cost'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Aggregate Bias in Credit Scoring' appear in a dataset you have worked with?

## Related examples

- `eg:7.23` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example15` is **Example 7.15** in the PDF; manuscript label is `eg:7.24`.
