# Example 11.31 — Hybrid Speed with Expert Gates

**Chapter:** 11  
**Label:** `eg:11.31`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11.9.5` — Benefits of Hybrid Approaches

## Learning objective

Combine crowd throughput with expert gates on uncertain safety-critical items.

## Chapter context

Section 11.9.5 summarizes hybrid benefits: cost savings, QC patterns, and active routing. Crowds deliver overnight throughput on easy items while a smaller expert pool clears the uncertain queue, keeping both speed and safety-critical accuracy.

## What this example shows

Crowds deliver overnight throughput on easy items while a smaller expert pool clears the uncertain queue, keeping both speed and safety-critical accuracy.

## What you should learn

### From the concept
- Crowds: overnight easy-item throughput
- Experts: clear the uncertain queue
- Keep speed without sacrificing safety-critical accuracy

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
cd modules/chapter11/example31
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Hybrid speed + expert gates:
- Crowds: overnight easy-item throughput
- Experts: clear the uncertain queue
- Keep speed without sacrificing safety-critical accuracy
```

## How to interpret the result

The closing bullet—'Keep speed without sacrificing safety-critical accuracy'—is the operational gate: if your pipeline skips this check, advanced annotation saves cost on paper but not in production quality.

## Try it / Reflect

- Where would 'Hybrid Speed with Expert Gates' change your current labeling queue?

## Related examples

- `eg:11.30` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
