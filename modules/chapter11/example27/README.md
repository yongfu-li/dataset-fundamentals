# Example 11.27 — Crowd Common Classes Expert Rare

**Chapter:** 11  
**Label:** `eg:11.27`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11.9.4` — Balancing Crowdsourcing and Expert Annotation: Hybrid Approaches

## Learning objective

Route common classes to crowds and rare diagnostics to clinicians.

## Chapter context

Section 11.9.4 balances crowd and expert work with expertise-matched assignment. Common object classes go to the crowd; rare diagnostic findings stay with clinicians so majority-class volume does not starve expert attention.

## What this example shows

Common object classes go to the crowd; rare diagnostic findings stay with clinicians so majority-class volume does not starve expert attention.

## Key terms

- **Hybrid pipeline** — Crowds handle routine items; experts own gold sets and hard cases.

## What you should learn

### From the concept
- Common classes → crowd volume
- Rare diagnostics → clinicians
- Do not let majority volume starve expert attention

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
cd modules/chapter11/example27
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Crowd common / expert rare:
- Common classes → crowd volume
- Rare diagnostics → clinicians
- Do not let majority volume starve expert attention
```

## How to interpret the result

The closing bullet—'Do not let majority volume starve expert attention'—is the operational gate: if your pipeline skips this check, advanced annotation saves cost on paper but not in production quality.

## Try it / Reflect

- Where would 'Crowd Common Classes Expert Rare' change your current labeling queue?

## Related examples

- `eg:11.26` — Previous example in the same section.
- `eg:11.28` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
