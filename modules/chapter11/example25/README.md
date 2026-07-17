# Example 11.25 — Expert Gold Then Crowd Scale-Up

**Chapter:** 11  
**Label:** `eg:11.25`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11.9.4` — Balancing Crowdsourcing and Expert Annotation: Hybrid Approaches

## Learning objective

Build expert gold sets first, then scale crowds with batch audits and adjudication.

## Chapter context

Section 11.9.4 balances crowd and expert work with expertise-matched assignment. Experts first label a small medical-image gold set. Crowds then label the remainder, while experts audit random batches and adjudicate disagreements against that gold set.

## What this example shows

Experts first label a small medical-image gold set. Crowds then label the remainder, while experts audit random batches and adjudicate disagreements against that gold set.

## Key terms

- **Hybrid pipeline** — Crowds handle routine items; experts own gold sets and hard cases.

## What you should learn

### From the concept
- Experts label a small gold set first
- Crowds label the bulk; experts audit batches
- Adjudicate disagreements against gold

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
cd modules/chapter11/example25
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Expert gold → crowd scale:
- Experts label a small gold set first
- Crowds label the bulk; experts audit batches
- Adjudicate disagreements against gold
```

## How to interpret the result

The closing bullet—'Adjudicate disagreements against gold'—is the operational gate: if your pipeline skips this check, advanced annotation saves cost on paper but not in production quality.

## Try it / Reflect

- What percent of crowd batches would you send to expert audit weekly?

## Related examples

- `eg:11.30` — Hybrid QC after crowd scale.
- `Chapter 4` — Gold-set quality control.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
