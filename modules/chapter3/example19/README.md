# Example 3.19 — Algorithmic Bias in Hiring Algorithm

**Chapter:** 3  
**Label:** `eg:3.19`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.5.2` — Types of Bias: Selection Bias, Algorithmic Bias

## Learning objective

Explain proxy-driven hiring bias when protected attributes are removed but historical hire labels remain.

## Chapter context

Example 3.19 restates the hiring fairness thread from Examples 3.3 and 3.21 with emphasis on proxies and model objectives—predictive-policing variants appear in Examples 3.8 and Chapter 7.

## What this example shows

Hiring rankers trained on past hires reproduce gender or racial patterns even when protected attributes are omitted, because résumé and career-history proxies remain available to the model.

## Key terms

- **Proxy features** — Correlates of protected attributes still usable by the model.
- **Label bias** — Historical hires as training signal encoding past discrimination.
- **Fairness through unawareness** — The mistaken belief that dropping protected columns removes bias.

## What you should learn

### From the concept
- Fairness-through-unawareness fails in realistic feature sets.
- Objective and label choice allocate error across groups.
- The same loop appears in policing and lending with different features.

### From the output / result
- `run.sh` lists proxy persistence and uneven error allocation.

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
cd modules/chapter3/example19
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Algorithmic bias in hiring:
- Trained on past hires → can reproduce gender/racial patterns
- Even if protected attributes are omitted, proxies in resume and career history remain
- Model design and objectives can still allocate error unevenly
```

## How to interpret the result

A feature-importance plot without subgroup error rates is insufficient when Example 3.19 applies.

## Try it / Reflect

- List three résumé fields that correlate with gender without naming it explicitly.

## Related examples

- `eg:3.3` — Fairness principle on historical hiring labels.
- `eg:3.21` — Automated hiring rankers case narrative.
- `eg:3.8` — Same bias loop in criminal justice scoring.

## Notes

- Prose-only.
