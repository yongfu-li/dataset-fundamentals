# Example 11.28 — Active Learning Routes Hard Cases

**Chapter:** 11  
**Label:** `eg:11.28`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11.9.4` — Balancing Crowdsourcing and Expert Annotation: Hybrid Approaches

## Learning objective

Hybrid active learning: low-confidence to experts, high-confidence to crowds.

## Chapter context

Section 11.9.4 balances crowd and expert work with expertise-matched assignment. An NLP model trained on a small expert seed set queues low-confidence sentences to experts and high-confidence ones to crowds, shrinking expert hours while protecting hard cases.

## What this example shows

An NLP model trained on a small expert seed set queues low-confidence sentences to experts and high-confidence ones to crowds, shrinking expert hours while protecting hard cases.

## Key terms

- **Hybrid pipeline** — Crowds handle routine items; experts own gold sets and hard cases.

## What you should learn

### From the concept
- Low-confidence → experts
- High-confidence → crowds
- Shrink expert hours; protect hard cases

### From the output / result
- `run.sh` prints the structured takeaway below—use it when designing query or workforce rules.

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
cd modules/chapter11/example28
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
AL hybrid routing:
- Low-confidence → experts
- High-confidence → crowds
- Shrink expert hours; protect hard cases
```

## How to interpret the result

The closing bullet—'Shrink expert hours; protect hard cases'—is the operational gate: if your pipeline skips this check, advanced annotation saves cost on paper but not in production quality.

## Try it / Reflect

- At what confidence threshold would you switch from crowd to expert?

## Related examples

- `eg:11.7` — Cost-sensitive routing.
- `eg:11.29` — Hybrid cost pattern.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
