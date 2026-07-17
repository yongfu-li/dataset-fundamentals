# Example 10.21 — Low-Quality Synthetic Tabular Data

**Chapter:** 10  
**Label:** `eg:10.21`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.7.3` — Risks of Synthetic Data: Misuse, Over-Reliance, Quality Concerns

## Learning objective

Detect low-quality synthetic tabular data with impossible joint values.

## Chapter context

Chapter 10 covers synthetic data when real data are scarce, sensitive, or imbalanced. A generator trained on a biased sample produces synthetic credit records with impossible joint values, causing a risk model to learn spurious rules.

## What this example shows

A generator trained on a biased sample produces synthetic credit records with impossible joint values, causing a risk model to learn spurious rules.

## What you should learn

### From the concept
- Impossible joint values in credit records
- Risk models learn spurious rules
- Validate joints and domain constraints before training

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
cd modules/chapter10/example21
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Low-quality synthetic tables:
- Impossible joint values in credit records
- Risk models learn spurious rules
- Validate joints and domain constraints before training
```

## How to interpret the result

The closing bullet—'Validate joints and domain constraints before training'—is the release gate: synthetic data is useful only if it passes this check before training or sharing.

## Try it / Reflect

- Where does 'Low-Quality Synthetic Tabular Data' apply in your domain—and what would you validate on real data?

## Related examples

- `eg:10.8` — Joint modeling requirement.
- `eg:10.22` — Bias amplification.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
