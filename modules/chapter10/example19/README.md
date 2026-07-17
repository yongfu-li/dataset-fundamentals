# Example 10.19 — Manipulated Performance Reporting

**Chapter:** 10  
**Label:** `eg:10.19`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.7.3` — Risks of Synthetic Data: Misuse, Over-Reliance, Quality Concerns

## Learning objective

Reject synthetic-only performance reporting that omits macro shocks.

## Chapter context

Chapter 10 covers synthetic data when real data are scarce, sensitive, or imbalanced. A vendor reports strong accuracy using only synthetic loan-default data that omits recent macro shocks; downstream banks discover the model fails once deployed on live portfolios.

## What this example shows

A vendor reports strong accuracy using only synthetic loan-default data that omits recent macro shocks; downstream banks discover the model fails once deployed on live portfolios.

## What you should learn

### From the concept
- Strong scores on synthetic loans that omit macro shocks
- Live portfolios expose the failure
- Require real held-out evaluation before procurement

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
cd modules/chapter10/example19
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Misuse — synthetic-only metrics:
- Strong scores on synthetic loans that omit macro shocks
- Live portfolios expose the failure
- Require real held-out evaluation before procurement
```

## How to interpret the result

The closing bullet—'Require real held-out evaluation before procurement'—is the release gate: synthetic data is useful only if it passes this check before training or sharing.

## Try it / Reflect

- Where does 'Manipulated Performance Reporting' apply in your domain—and what would you validate on real data?

## Related examples

- `eg:10.4` — Validation gap.
- `eg:10.14` — Real fraud held-out evaluation.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
