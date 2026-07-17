# Example 11.17 — Crowd Cost for Product Images

**Chapter:** 11  
**Label:** `eg:11.17`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11.9.1` — Overview and Advantages of Crowdsourcing

## Learning objective

Compare crowd microtask cost against expert-only catalog labeling.

## Chapter context

Section 11.9.1 covers crowdsourcing advantages for annotation scale, cost, and speed. A retailer needs thousands of product photos labeled for category and attributes. Paying only domain experts would blow the budget; crowd microtasks make the volume affordable when…

## What this example shows

A retailer needs thousands of product photos labeled for category and attributes. Paying only domain experts would blow the budget; crowd microtasks make the volume affordable when gold checks are in place.

## What you should learn

### From the concept
- Expert-only catalog labeling blows the budget
- Microtasks make thousands of photos affordable
- Gold checks keep quality under control

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
cd modules/chapter11/example17
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Crowd cost:
- Expert-only catalog labeling blows the budget
- Microtasks make thousands of photos affordable
- Gold checks keep quality under control
```

## How to interpret the result

The closing bullet—'Gold checks keep quality under control'—is the operational gate: if your pipeline skips this check, advanced annotation saves cost on paper but not in production quality.

## Try it / Reflect

- Where would 'Crowd Cost for Product Images' change your current labeling queue?

## Related examples

- `eg:11.16` — Previous example in the same section.
- `eg:11.18` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
