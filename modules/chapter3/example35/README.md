# Example 3.35 — Surveillance and Facial Analysis

**Chapter:** 3  
**Label:** `eg:3.35`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.10.1` — AI and Privacy Concerns

## Learning objective

Evaluate city-scale facial analysis as simultaneous privacy and discrimination risk when accuracy varies by subgroup.

## Chapter context

Section 3.10.1 covers AI-specific privacy concerns. Example 3.35 focuses on facial analysis accuracy gaps across phenotype and gender—linking bias and surveillance.

## What this example shows

Commercial facial analysis shows large accuracy gaps across phenotype and gender subgroups, making city-scale camera deployments both a privacy and discrimination risk for identification or screening.

## Key terms

- **Facial analysis** — Automated detection or identification from camera feeds.
- **Phenotype gap** — Performance differences across skin tone and appearance groups.
- **City-scale surveillance** — Wide camera networks used for public identification.

## What you should learn

### From the concept
- Surveillance privacy harms do not require perfect identification.
- Accuracy gaps turn screening into discriminatory stops.
- Re-identification limits from Example 3.13 still apply to released face embeddings.

### From the output / result
- `run.sh` links accuracy gaps to dual privacy/discrimination risk.

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
cd modules/chapter3/example35
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Surveillance and facial analysis:
- Large accuracy gaps across phenotype and gender subgroups
- City-scale camera deployments for identification/screening
→ both a privacy risk and a discrimination risk
```

## How to interpret the result

A procurement RFP citing ‘industry-leading accuracy’ without subgroup tables fails Example 3.35's bar.

## Try it / Reflect

- What two harms occur if a system has high false-match rates for one phenotype in a transit gate deployment?

## Related examples

- `eg:3.13` — Re-identification limits for released biometric-like data.
- `eg:3.36` — Sensitive clinical prediction leakage risks.
- `eg:3.20` — Disparate error rates in another scored domain.

## Notes

- Prose-only.
