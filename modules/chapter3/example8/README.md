# Example 3.8 — Dilemma in Criminal Justice Risk Scores

**Chapter:** 3  
**Label:** `eg:3.8`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.2.3` — Ethical Dilemmas in Practice

## Learning objective

Analyze a criminal-justice recidivism tool where institutional accuracy conflicts with community fairness.

## Chapter context

Section 3.2.3 presents dilemmas where two legitimate values collide. Example 3.8 sketches the justice-system conflict that Examples 3.20 and 3.34 and Chapter 7 treat with metrics and case detail.

## What this example shows

Recidivism tools can help scheduling yet reproduce racial disparities from historical justice data—institutional accuracy then conflicts with fairness for affected communities; more data alone does not resolve it.

## Key terms

- **Ethical dilemma** — A case where two defensible values—efficiency and fairness—cannot both be maximized naively.
- **Recidivism score** — A risk estimate used in supervision or scheduling decisions.
- **Historical disparity** — Unequal enforcement or labeling embedded in training outcomes.

## What you should learn

### From the concept
- Useful for the institution ≠ fair for every community scored.
- Historical labels import existing injustice into new models.
- Collecting more of the same data does not erase structural bias.

### From the output / result
- `run.sh` states the accuracy–fairness collision and rejects ‘more data’ as a sole fix.

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
cd modules/chapter3/example8
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Criminal justice risk scores — dilemma:
- Tools appear useful for scheduling/supervision
- Can reproduce racial disparities from historical justice data
- Institutional accuracy conflicts with fairness for communities
“More data” alone does not dissolve the conflict.
```

## How to interpret the result

Example 3.20 (COMPAS) and Example 3.34 (four lenses) are mandatory companions; Chapter 7 is where measurement and mitigation live.

## Try it / Reflect

- If base rates differ by group, which error type (false positive vs false negative) hurts defendants more under your jurisdiction's use case?

## Related examples

- `eg:3.20` — COMPAS disparate error rates case study.
- `eg:3.34` — Utilitarian, rights, virtue, and justice lenses on the same conflict.
- `eg:3.19` — Algorithmic bias pattern in another high-stakes domain.

## Notes

- Prose-only. Analyzed further in Section 3.5 and Chapter 7.
