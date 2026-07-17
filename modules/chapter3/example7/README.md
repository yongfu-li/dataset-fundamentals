# Example 3.7 — Utility--Privacy Tension in Personal Predictions

**Chapter:** 3  
**Label:** `eg:3.7`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.2.2` — Balancing Utility vs. Privacy

## Learning objective

Articulate the utility–privacy trade-off when predictive models use sensitive personal histories.

## Chapter context

Section 3.2.2 names the recurring tension between model utility and privacy protection. Example 3.7 frames it for health-risk and creditworthiness scoring where richer features help allocation but increase exposure.

## What this example shows

Models that score health risk or creditworthiness can improve service allocation, but underlying histories are sensitive—without minimization, access control, and purpose limits, utility features become levers for harm.

## Key terms

- **Utility–privacy trade-off** — Gains from prediction vs risk from collecting and retaining sensitive histories.
- **Purpose limitation** — Using data only for stated, consented purposes.
- **Minimization** — Collecting and retaining the smallest feature set that still meets the legitimate goal.

## What you should learn

### From the concept
- More predictive features often mean more sensitive data.
- Technical accuracy does not automatically justify broader collection.
- Controls must scale with sensitivity, not only with model AUC.

### From the output / result
- `run.sh` contrasts allocation benefits with harm levers when controls are missing.

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
cd modules/chapter3/example7
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Utility–privacy tension:
- Scoring health risk or creditworthiness can improve service allocation
- Underlying histories are sensitive
- Without minimization, access control, and purpose limits, the same features that raise utility become levers for harm
```

## How to interpret the result

Sections 3.3–3.4 supply the operational toolkit (consent, PbD, encryption, DP, federation) that resolves this tension in practice.

## Try it / Reflect

- Pick one score your organization builds: which single feature most raises utility and which most raises privacy risk?

## Related examples

- `eg:3.15` — Differential privacy for aggregate telemetry.
- `eg:3.16` — Federated learning to avoid raw text upload.
- `eg:3.12` — Privacy by Design defaults that limit collection.

## Notes

- Prose-only.
