# Example 3.17 — Bias in AI System

**Chapter:** 3  
**Label:** `eg:3.17`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.5.1` — Understanding Bias in Data Work

## Learning objective

State why biased training data produces disproportionate harm in hiring, justice, and healthcare AI.

## Chapter context

Section 3.5.1 generalizes bias risk before Examples 3.18–3.21 specialize by bias type and case. Chapter 7 carries definitions and metrics forward.

## What this example shows

AI trained on biased data can harm groups underrepresented or historically mistreated in the training distribution—especially in hiring, criminal justice, and healthcare where errors change life chances.

## Key terms

- **Dataset bias** — Skewed representation or labels that models encode into decisions.
- **Disproportionate harm** — Errors or exclusions concentrated on specific groups.
- **High-stakes domain** — Settings where model mistakes alter rights, health, or livelihood.

## What you should learn

### From the concept
- Bias is a data-and-objective problem, not only a post-hoc metric.
- Click-through and résumé ranking differ in moral weight.
- Chapter 3 introduces; Chapter 7 operationalizes.

### From the output / result
- `run.sh` links biased training to life-chance harms in three domains.

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
cd modules/chapter3/example17
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Bias in AI systems:
- Trained on biased data → decisions that disproportionately harm underrepresented or historically mistreated groups
- Especially acute in hiring, criminal justice, and healthcare
- Errors change life chances, not only click-through rates
```

## How to interpret the result

Use Example 3.17 as the chapter banner; drill into 3.18–3.21 and Chapter 7 for specifics.

## Try it / Reflect

- Which domain in the takeaway is closest to your work—and what harm metric would you report first?

## Related examples

- `eg:3.18` — Selection bias in clinical training slices.
- `eg:3.19` — Algorithmic bias via proxies in hiring.
- `eg:3.20` — COMPAS case study on disparate errors.

## Notes

- Prose-only. Overview before Section 3.5.2 case studies.
