# Example 10.12 — Privacy-Preserving Medical Records

**Chapter:** 10  
**Label:** `eg:10.12`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.6.2` — Synthetic Data in Healthcare: Privacy-Preserving Medical Datasets, Simulation of Rare Conditions

## Learning objective

Outline a privacy-preserving synthetic EHR release without direct identifiers.

## Chapter context

Section 10.6.2 covers finance fraud detection and cybersecurity attack simulation. A hospital consortium releases synthetic EHR tables with diagnosis codes, lab ranges, and visit counts that preserve cohort-level statistics while removing direct identifiers, enab…

## What this example shows

A hospital consortium releases synthetic EHR tables with diagnosis codes, lab ranges, and visit counts that preserve cohort-level statistics while removing direct identifiers, enabling external researchers to prototype models without accessing raw patient files.

## What you should learn

### From the concept
- Diagnosis codes, labs, visit counts without direct identifiers
- Cohort statistics preserved for external prototyping
- Raw patient files remain inside the controller

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
cd modules/chapter10/example12
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Synthetic EHR release:
- Diagnosis codes, labs, visit counts without direct identifiers
- Cohort statistics preserved for external prototyping
- Raw patient files remain inside the controller
```

## How to interpret the result

The closing bullet—'Raw patient files remain inside the controller'—is the release gate: synthetic data is useful only if it passes this check before training or sharing.

## Try it / Reflect

- Where does 'Privacy-Preserving Medical Records' apply in your domain—and what would you validate on real data?

## Related examples

- `eg:10.2` — Privacy motivation.
- `eg:10.13` — Rare-disease expansion.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
