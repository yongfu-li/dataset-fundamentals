# Example 9.9 — Netflix Prize Crowdsourced Innovation

**Chapter:** 9  
**Label:** `eg:9.9`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.2.2` — Use Cases of Crowdsourcing

## Learning objective

Contrast crowd collaboration for algorithmic innovation (Netflix Prize) with microtask crowd labor.

## Chapter context

Section 9.2.2 covers crowdsourcing use cases: ML labeling, market research, fraud review, and open innovation competitions. Netflix offered a 1 million prize for the best algorithm to improve its recommendation system.

## What this example shows

Netflix offered a 1 million prize for the best algorithm to improve its recommendation system.

## What you should learn

### From the concept
- $1M open competition for a better recommender
- Taps global expertise beyond the company's own team
- Crowd creation/collaboration, not microtask labor

### From the output / result
- `run.sh` prints the structured takeaway below—use it as a design checklist.

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
cd modules/chapter9/example9
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Crowdsourced innovation — Netflix Prize:
- $1M open competition for a better recommender
- Taps global expertise beyond the company's own team
- Crowd creation/collaboration, not microtask labor
```

## How to interpret the result

The closing bullet—'Crowd creation/collaboration, not microtask labor'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Where in your work does 'Netflix Prize Crowdsourced Innovation' apply—or fail to apply?

## Related examples

- `eg:9.10` — Contrast open innovation with microtask labor.
- `eg:9.11` — MTurk workflow for structured tasks.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
