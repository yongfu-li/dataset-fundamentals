# Example 3.18 — Selection Bias in Healthcare AI System

**Chapter:** 3  
**Label:** `eg:3.18`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.5.2` — Types of Bias: Selection Bias, Algorithmic Bias

## Learning objective

Identify selection bias when a healthcare model trains on one demographic slice and fails on others.

## Chapter context

Section 3.5.2 separates selection bias from algorithmic bias. Example 3.18 is the clinical pattern linked back to non-maleficence in Example 3.2.

## What this example shows

If a diagnostic model trains mainly on one demographic slice, performance degrades for groups scarce in training—the model never saw a representative sample of patients it will score.

## Key terms

- **Selection bias** — Training data that misrepresents the deployment population.
- **Representativeness** — Whether training coverage matches who will be scored.
- **Performance cliff** — Sharp accuracy drop on subgroups absent from training.

## What you should learn

### From the concept
- The training cohort defines who the model ‘knows.’
- Scarce groups are not minor edge cases in healthcare.
- Fixes require sampling and collection redesign, not only threshold tweaks.

### From the output / result
- `run.sh` states the demographic slice failure and representativeness gap.

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
cd modules/chapter3/example18
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Selection bias in healthcare AI:
- Trained mainly on one demographic slice
- Performance degrades for groups scarce in the training set
- The model never saw a representative sample of patients it will score
```

## How to interpret the result

If your validation set mirrors training but production does not, Example 3.18 predicts where the model will fail silently.

## Try it / Reflect

- Compare training demographics to census or clinic intake—where is the largest gap?

## Related examples

- `eg:3.2` — Non-maleficence framing of the same clinical harm.
- `eg:3.19` — Algorithmic bias when labels encode past decisions.
- `eg:3.17` — General bias risk statement.

## Notes

- Prose-only.
