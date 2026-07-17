# Example 6.5 — Sales and Weather Hypothesis

**Chapter:** 6  
**Label:** `eg:6.5`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.1.1` — Importance of EDA in Data Science

## Learning objective

Turn an exploratory sales–weather association into a testable hypothesis with confounders noted.

## Chapter context

Section 6.1.1 closes with hypothesis formation from unexpected patterns. Example 6.5 is the seasonal-behavior cue—not confirmatory proof.

## What this example shows

Preliminary sales analysis may show performance correlating with weather, prompting hypotheses about seasonal variation and customer behavior.

## Key terms

- **Exploratory correlation** — Observed association that motivates further study.
- **Confounder** — A third variable (e.g., holidays) that can explain both sales and weather.

## What you should learn

### From the concept
- EDA generates hypotheses; formal tests confirm them.
- Correlation in one season may not generalize.
- Document the plot that sparked the hypothesis for reproducibility.

### From the output / result
- `run.sh` states observation, hypothesis, and next formal-test caution.

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
cd modules/chapter6/example5
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Sales–weather EDA:
Observation: sales performance varies with weather.
Hypothesis: seasonal conditions influence customer behavior.
Next: test on suitable data and account for confounders; correlation alone is not confirmation.
```

## How to interpret the result

Weather may proxy for season, foot traffic, or promotions—EDA names the cue; study design disentangles causes.

## Try it / Reflect

- List two confounders besides weather that could explain retail sales spikes.

## Related examples

- `eg:6.9` — Another hypothesis-from-plot pattern (geography).
- `eg:6.1` — EDA workflow that surfaces relationships.
- `eg:6.4` — When a relationship is nonlinear, model choice changes.

## Notes

- Prose-only.
