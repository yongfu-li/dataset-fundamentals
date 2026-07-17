# Example 11.7 — Cost-Sensitive Routing in Legal Labeling

**Chapter:** 11  
**Label:** `eg:11.7`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11` — ?

## Learning objective

Route legal documents by cost-sensitive rules—experts for ambiguous contracts.

## Chapter context

Chapter 11 extends Chapter 4 with active learning, weak supervision, self-supervision, and hybrid crowd–expert pipelines. Cost-sensitive active learning sends ambiguous contracts to legal experts and simpler documents to non-experts, maximizing accuracy gain per labeling dollar.

## What this example shows

Cost-sensitive active learning sends ambiguous contracts to legal experts and simpler documents to non-experts, maximizing accuracy gain per labeling dollar.

## What you should learn

### From the concept
- Ambiguous contracts → legal experts
- Simpler documents → non-experts
- Optimize accuracy gain per labeling dollar

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
cd modules/chapter11/example7
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Cost-sensitive legal labeling:
- Ambiguous contracts → legal experts
- Simpler documents → non-experts
- Optimize accuracy gain per labeling dollar
```

## How to interpret the result

The closing bullet—'Optimize accuracy gain per labeling dollar'—is the operational gate: if your pipeline skips this check, advanced annotation saves cost on paper but not in production quality.

## Try it / Reflect

- Where would 'Cost-Sensitive Routing in Legal Labeling' change your current labeling queue?

## Related examples

- `eg:11.22` — Legal expert routing.
- `eg:11.28` — Hybrid confidence routing.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
