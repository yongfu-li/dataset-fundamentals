# Example 3.29 — Healthcare Prediction

**Chapter:** 3  
**Label:** `eg:3.29`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.9.1` — Models for Ethical Decision-Making

## Learning objective

Critique a utilitarian argument for broad healthcare secondary use when individuals did not consent to research reuse.

## Chapter context

Section 3.9.1 applies four decision lenses to data work. Example 3.29 is the utilitarian healthcare vignette that can underweight individual privacy.

## What this example shows

A team predicting population health might justify broad secondary use of identifiable records for societal benefit even without individual research consent—strict utilitarianism can approve whenever aggregate gains look large.

## Key terms

- **Utilitarianism** — Ethical frame maximizing aggregate welfare, sometimes at individual expense.
- **Secondary research use** — Reusing clinical records beyond direct care.
- **Rights-based counterweight** — Duties to consent and purpose limits regardless of aggregate gain.

## What you should learn

### From the concept
- Population benefit claims need consent and minimization checks.
- Utilitarian framing is common in public-health rhetoric.
- One lens alone rarely settles data ethics questions.

### From the output / result
- `run.sh` states the utilitarian trade-off and need for parallel rights checks.

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
cd modules/chapter3/example29
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Utilitarian lens — healthcare prediction:
- Argue broad secondary use of identifiable records maximizes societal benefit
- Even when individuals did not consent to research reuse
- Strict utilitarianism can justify that whenever aggregate gains look large
→ why rights-based checks are needed in parallel
```

## How to interpret the result

Read against Examples 3.11 (consent bar) and 3.30 (rights-based product choices).

## Try it / Reflect

- Write one sentence a utilitarian would use to defend reuse—and one rights-based rebuttal.

## Related examples

- `eg:3.11` — Informed consent when care and research diverge.
- `eg:3.30` — Rights-based recommendation design.
- `eg:3.33` — Four lenses on marketing collection.

## Notes

- Prose-only. First of four Section 3.9.1 lens examples.
