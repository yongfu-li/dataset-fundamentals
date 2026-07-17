# Example 10.18 — GDPR-Compliant Synthetic Patients

**Chapter:** 10  
**Label:** `eg:10.18`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.7.2` — Privacy Preservation: Synthetic Data as a Solution for GDPR, HIPAA Compliance

## Learning objective

Share GDPR-aware synthetic patient cohorts while keeping identifiable records internal.

## Chapter context

Chapter 10 covers synthetic data when real data are scarce, sensitive, or imbalanced. A cross-border research project shares synthetic patient cohorts for algorithm benchmarking while keeping identifiable EU health records inside the data controller's environment.

## What this example shows

A cross-border research project shares synthetic patient cohorts for algorithm benchmarking while keeping identifiable EU health records inside the data controller's environment.

## What you should learn

### From the concept
- Synthetic cohorts for external benchmarking
- Identifiable EU records stay with the controller
- Residual identifiability — not the word 'synthetic' — sets the legal regime

### From the output / result
- `run.sh` prints the structured takeaway below—use it as a design checklist.

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
cd modules/chapter10/example18
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
GDPR-aware synthetic sharing:
- Synthetic cohorts for external benchmarking
- Identifiable EU records stay with the controller
- Residual identifiability — not the word 'synthetic' — sets the legal regime
```

## How to interpret the result

The closing bullet—'Residual identifiability — not the word 'synthetic' — sets the legal regime'—is the release gate: synthetic data is useful only if it passes this check before training or sharing.

## Try it / Reflect

- Where does 'GDPR-Compliant Synthetic Patients' apply in your domain—and what would you validate on real data?

## Related examples

- `eg:10.2` — Privacy-preserving patients.
- `eg:10.23` — GDPR rights on derivatives.
- `Chapter 3` — GDPR principles.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
