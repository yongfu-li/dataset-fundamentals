# Example 3.34 — AI in Criminal Justice

**Chapter:** 3  
**Label:** `eg:3.34`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.9.2` — Practical Ethical Decision-Making Examples

## Learning objective

Weigh public-safety utilitarian arguments against rights, virtue, and justice concerns in criminal-justice AI.

## Chapter context

Example 3.34 returns to Examples 3.8 and 3.20 with full four-lens analysis—institutional averages vs concentrated community harm.

## What this example shows

A model may improve average institutional metrics while concentrating harm on over-policed communities—utilitarian public-safety claims must meet rights against discriminatory targeting, virtues of fairness, and justice demands to inspect subgroup harms.

## Key terms

- **Public-safety utilitarianism** — Justifying surveillance or scores by aggregate crime metrics.
- **Discriminatory targeting** — Enforcement or scoring burdens borne unequally by community.
- **Subgroup harm inspection** — Justice requirement beyond citywide averages.

## What you should learn

### From the concept
- Citywide averages hide neighborhood concentration of harm.
- Rights and justice lenses elevate affected communities' standing.
- Chapter 7 supplies metrics this vignette demands.

### From the output / result
- `run.sh` lists four lens tensions on justice AI.

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
cd modules/chapter3/example34
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Four lenses — AI in criminal justice:
- May improve average institutional metrics while concentrating harm on over-policed communities
- Utilitarian public-safety arguments vs rights against discriminatory targeting
- Virtues of fairness in public institutions
- Justice: inspect subgroup harms, not citywide averages alone
(Examples 3.8, 3.20; metrics in Chapter 7)
```

## How to interpret the result

Mandatory trio with Examples 3.8 and 3.20 before defending any recidivism or hotspot model.

## Try it / Reflect

- Pick one metric your jurisdiction publishes publicly—could it mask neighborhood-level disparate impact?

## Related examples

- `eg:3.8` — Original accuracy–fairness dilemma.
- `eg:3.20` — COMPAS disparate error rates.
- `eg:3.33` — Same four-lens method on marketing data.

## Notes

- Prose-only. Metrics developed in Chapter 7.
