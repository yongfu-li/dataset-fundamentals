# Example 4.28 — Majority Vote on Crowdsourced Sentiment

**Chapter:** 4  
**Label:** `eg:4.28`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.3.4` — Crowdsourcing Annotation

## Learning objective

Apply majority vote across redundant crowd labels while using gold items and qualification tests for QC.

## Chapter context

Section 4.3.4 introduces crowdsourcing—Example 4.28 is the simple three-worker sentiment redundancy pattern with quality gates.

## What this example shows

Three workers label positive, positive, negative → majority positive; gold-item checks and qualification tests limit random or adversarial workers.

## Key terms

- **Majority vote** — Aggregating redundant labels by plurality.
- **Gold item** — Honeypot tasks with known answers to score workers.
- **Qualification test** — Entry assessment before workers access paid batches.

## What you should learn

### From the concept
- Redundancy costs 3× labels but reduces single-rater noise.
- Gold items detect inattentive or bad-faith workers.
- Fair payment and labor ethics remain obligations (Section 4.6.3).

### From the output / result
- `run.sh` shows vote aggregation plus gold/qualification QC.

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
cd modules/chapter4/example28
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Crowdsourced majority vote:
- Three labels: positive, positive, negative → majority = positive
- Gold-item checks and qualification tests limit random or adversarial workers
Scales simple schemas; still needs QC and fair labor practices.
```

## How to interpret the result

Majority vote fails on nuanced schemas—use simpler tasks or expert adjudication for Example 4.26-style ambiguity.

## Try it / Reflect

- How many gold items per 100 HITs would you inject—and what accuracy threshold bans a worker?

## Related examples

- `eg:4.26` — Ambiguity that crowds struggle without tight guidelines.
- `eg:4.2` — Simple sentiment suitable for crowd scale.
- `eg:4.31` — When κ on a pilot says ‘do not scale yet.’

## Notes

- Prose-only.
