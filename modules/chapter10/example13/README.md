# Example 10.13 — Rare-Disease Case Simulation

**Chapter:** 10  
**Label:** `eg:10.13`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.6.2` — Synthetic Data in Healthcare: Privacy-Preserving Medical Datasets, Simulation of Rare Conditions

## Learning objective

Use synthetic data to expand rare-disease cases while preserving clinical relevance.

## Chapter context

Section 10.6.2 covers finance fraud detection and cybersecurity attack simulation. An oncology team generates additional synthetic cases of a rare lymphoma subtype so a classifier can train on more than the handful of real admissions observed in a single center.

## What this example shows

An oncology team generates additional synthetic cases of a rare lymphoma subtype so a classifier can train on more than the handful of real admissions observed in a single center.

## What you should learn

### From the concept
- Expand beyond a handful of real lymphoma admissions
- Preserve clinical relevance of the subtype
- Confirm performance on real rare cases before clinical use

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
cd modules/chapter10/example13
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Rare-disease synthesis:
- Expand beyond a handful of real lymphoma admissions
- Preserve clinical relevance of the subtype
- Confirm performance on real rare cases before clinical use
```

## How to interpret the result

The closing bullet—'Confirm performance on real rare cases before clinical use'—is the release gate: synthetic data is useful only if it passes this check before training or sharing.

## Try it / Reflect

- Where does 'Rare-Disease Case Simulation' apply in your domain—and what would you validate on real data?

## Related examples

- `eg:10.12` — Medical synthetic release.
- `eg:10.2` — Privacy-preserving patients.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
