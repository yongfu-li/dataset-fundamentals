# Example 6.9 — Geography and Purchase Frequency

**Chapter:** 6  
**Label:** `eg:6.9`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.1.2` — Key Benefits of EDA

## Learning objective

Form a testable geography–purchase hypothesis from a regional cluster in a scatter or map view.

## Chapter context

Section 6.1.2 hypothesis benefit—Example 6.9 complements Example 6.5 with location instead of weather as the exploratory cue.

## What this example shows

A scatter plot may show frequent purchasers concentrating in one region—motivating a testable hypothesis about location and purchase behavior.

## Key terms

- **Spatial clustering** — Geographic concentration visible in EDA plots.
- **Coverage bias** — Confounder when one region is oversampled in the table.

## What you should learn

### From the concept
- Visual clusters suggest hypotheses; they do not prove causation.
- Check sample coverage before marketing decisions.
- Formal tests account for confounders (income, channel, etc.).

### From the output / result
- `run.sh` states observation, hypothesis, and formal-test next step.

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
cd modules/chapter6/example9
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Geography–purchase cue:
Observation: frequent purchasers cluster in one region.
Hypothesis: location is associated with purchase frequency.
Next: check coverage/confounders and test the association formally.
```

## How to interpret the result

Regional concentration may reflect warehouse proximity or ad spend—EDA flags the pattern; study design explains it.

## Try it / Reflect

- What one plot would you use to check whether high-frequency buyers cluster geographically?

## Related examples

- `eg:6.5` — Sales–weather hypothesis from another cue.
- `eg:6.8` — Clean city labels before geographic analysis.
- `eg:6.1` — Scatter plots in first-pass EDA.

## Notes

- Prose-only.
