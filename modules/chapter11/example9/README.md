# Example 11.9 — Active Learning for Review Sentiment

**Chapter:** 11  
**Label:** `eg:11.9`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11` — ?

## Learning objective

Apply active learning to ironic or mixed sentiment reviews with uncertainty queries.

## Chapter context

Chapter 11 extends Chapter 4 with active learning, weak supervision, self-supervision, and hybrid crowd–expert pipelines. A sentiment model trained on a small seed set uses uncertainty or entropy sampling to request labels on ironic or mixed reviews, improving nuance with fewer total annotations.

## What this example shows

A sentiment model trained on a small seed set uses uncertainty or entropy sampling to request labels on ironic or mixed reviews, improving nuance with fewer total annotations.

## What you should learn

### From the concept
- Seed train, then query ironic/mixed reviews
- Uncertainty/entropy sampling picks the hard language
- Better nuance with fewer total annotations

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
cd modules/chapter11/example9
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Sentiment active learning:
- Seed train, then query ironic/mixed reviews
- Uncertainty/entropy sampling picks the hard language
- Better nuance with fewer total annotations
```

## How to interpret the result

The closing bullet—'Better nuance with fewer total annotations'—is the operational gate: if your pipeline skips this check, advanced annotation saves cost on paper but not in production quality.

## Try it / Reflect

- Where would 'Active Learning for Review Sentiment' change your current labeling queue?

## Related examples

- `eg:11.6` — Diversity for subjective text.
- `eg:11.19` — Crowd sentiment aggregation.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
