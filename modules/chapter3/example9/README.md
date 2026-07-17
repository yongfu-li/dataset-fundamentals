# Example 3.9 — Dilemma in Platform Data Collection

**Chapter:** 3  
**Label:** `eg:3.9`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.2.3` — Ethical Dilemmas in Practice

## Learning objective

Diagnose a platform engagement dilemma when fine-grained logs outrun meaningful user consent.

## Chapter context

The second dilemma in Section 3.2.3 connects back to collection design in Chapter 2: richer interaction logs improve recommendations but strain autonomy when notice is vague or bundled.

## What this example shows

A platform enriches recommendations with fine-grained interaction logs users never meaningfully agreed to share—engagement gains clash with autonomy and transparency when notice is incomplete or consent is bundled.

## Key terms

- **Bundled consent** — One acceptance covering unrelated purposes, obscuring what is actually collected.
- **Engagement optimization** — Product goals that reward deeper behavioral logging.
- **Transparency gap** — Users cannot tell what is logged or why from the notice they saw.

## What you should learn

### From the concept
- Recommendation quality can depend on surveillance users did not expect.
- Incomplete notice undermines autonomy even when logs are technically ‘allowed.’
- Collection design is an ethics decision, not only a ranking problem.

### From the output / result
- `run.sh` contrasts recommendation utility with autonomy and transparency failures.

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
cd modules/chapter3/example9
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Platform data collection — dilemma:
- Fine-grained interaction logs enrich recommendations
- Users may never have meaningfully agreed to share them
- Engagement gains clash with autonomy and transparency when notice is incomplete or consent is bundled
```

## How to interpret the result

Example 3.33 applies four ethical lenses to the same marketing-expansion scenario—use it when product asks to ‘just log a bit more.’

## Try it / Reflect

- Open an app privacy notice: can you tell which events are logged for ads vs core function? What would you change?

## Related examples

- `eg:3.33` — Four-lens analysis of marketing collection expansion.
- `eg:3.6` — Positive pattern: explicit consent before sensitive streams.
- `eg:3.1` — Executive partner-sharing pressure vs user control.

## Notes

- Prose-only. Related to Chapter 2 collection design.
