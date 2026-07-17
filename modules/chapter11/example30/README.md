# Example 11.30 — Hybrid Quality Control Pattern

**Chapter:** 11  
**Label:** `eg:11.30`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11.9.5` — Benefits of Hybrid Approaches

## Learning objective

Run hybrid QC: expert review of crowd batches triggers guideline fixes.

## Chapter context

Section 11.9.5 summarizes hybrid benefits: cost savings, QC patterns, and active routing. Experts review a fixed percent of crowd labels each week; systematic error patterns trigger guideline updates before the next batch ships.

## What this example shows

Experts review a fixed percent of crowd labels each week; systematic error patterns trigger guideline updates before the next batch ships.

## What you should learn

### From the concept
- Experts review a fixed percent of crowd labels weekly
- Systematic errors trigger guideline updates
- Next batch ships only after the fix

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
cd modules/chapter11/example30
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Hybrid QC pattern:
- Experts review a fixed percent of crowd labels weekly
- Systematic errors trigger guideline updates
- Next batch ships only after the fix
```

## How to interpret the result

The closing bullet—'Next batch ships only after the fix'—is the operational gate: if your pipeline skips this check, advanced annotation saves cost on paper but not in production quality.

## Try it / Reflect

- Where would 'Hybrid Quality Control Pattern' change your current labeling queue?

## Related examples

- `eg:11.31` — Speed with expert gates.
- `Chapter 4` — Annotation QC workflows.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
