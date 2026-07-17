# Example 6.4 — Linear Versus Nonlinear Patterns

**Chapter:** 6  
**Label:** `eg:6.4`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.1.1` — Importance of EDA in Data Science

## Learning objective

Read scatter-plot shape to narrow candidate model families—linear vs nonlinear.

## Chapter context

Example 6.4 connects EDA visuals to model selection: a straight-line cloud suggests linear regression; curves or interactions suggest trees or neural nets.

## What this example shows

Strong linear patterns may suit linear regression; nonlinear patterns or complex interactions may suit tree-based models or neural networks.

## Key terms

- **Linear relationship** — Roughly straight-line association between two numeric variables.
- **Model family** — Broad algorithm class chosen before hyperparameter tuning.

## What you should learn

### From the concept
- EDA suggests candidates; it does not prove one model is best.
- Validate any choice on held-out data after exploration.
- Interaction effects may need engineered features or flexible models.

### From the output / result
- `run.sh` maps straight-line vs curved patterns to model families.

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
cd modules/chapter6/example4
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Relationship-shape cue:
- Strong straight-line pattern → test a linear model.
- Curves or complex interactions → consider tree-based or neural models.
Validate any candidate beyond the exploratory plot.
```

## How to interpret the result

Anscombe's quartet (cited in the chapter) is the classic warning—always plot, never trust correlation alone.

## Try it / Reflect

- Name one relationship you would expect to be linear and one you would expect to be curved in your domain.

## Related examples

- `eg:6.1` — Scatter plot in the first-pass workflow.
- `eg:6.9` — Geography–purchase hypothesis from a bivariate view.
- `eg:6.5` — Hypothesis formation from exploratory correlation.

## Notes

- Prose-only.
