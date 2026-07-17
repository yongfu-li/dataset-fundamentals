# Example 2.20 — Mobile-Only Poll Coverage Gap

**Chapter:** 2  
**Label:** `eg:2.20`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.8.2` — Dealing with Bias

## Learning objective

Diagnose coverage bias when the recruitment channel excludes an entire subgroup (rural landline households).

## Chapter context

Section 2.8.2 addresses bias in collection design. A large completed sample can still be biased if the frame never included offline populations.

## What this example shows

A civic poll recruits only through a smartphone app popular with urban residents; rural landline households never enter the frame, so even a large sample under-represents offline voters unless a second channel is added.

## Key terms

- **Coverage bias** — Bias from a frame that systematically excludes part of the target population.

## What you should learn

### From the concept
- Sample size does not cure a missing frame segment.
- Channel choice (app-only) is a design decision with fairness consequences.
- Mitigation: add a second channel or reweight only if the missing group can be measured.

### From the output / result
- `run.sh` prints the takeaway or data/code output below; use it as a checklist for similar collection designs.

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
cd modules/chapter2/example20
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Coverage bias: who never enters the frame?
- App-only poll misses rural landline households
- Large n does not fix a missing population segment
- Add a second channel or stop claiming full-population coverage
```

## How to interpret the result

Ask "who could never appear?" before trusting topline poll numbers — coverage is a collection problem.

## Try it / Reflect

- Propose one offline channel (mail or landline RDD) and one field you would use to check urban/rural balance.

## Related examples

- `eg:2.14` — Convenience sample — related non-coverage pattern.
- `eg:2.10` — SRS from a complete roster avoids app-only frames.

## Notes

- Prose-only in the manuscript.
