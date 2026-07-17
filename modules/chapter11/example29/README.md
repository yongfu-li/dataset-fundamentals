# Example 11.29 — Hybrid Cost Savings Pattern

**Chapter:** 11  
**Label:** `eg:11.29`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11.9.5` — Benefits of Hybrid Approaches

## Learning objective

Apply hybrid cost pattern—crowds for routine boxes, experts for adjudication.

## Chapter context

Section 11.9.5 summarizes hybrid benefits: cost savings, QC patterns, and active routing. A hybrid plan pays crowds for routine boxes and experts for adjudication, cutting total labeling spend without dropping gold-set quality.

## What this example shows

A hybrid plan pays crowds for routine boxes and experts for adjudication, cutting total labeling spend without dropping gold-set quality.

## What you should learn

### From the concept
- Crowds for routine boxes
- Experts for adjudication
- Lower spend without dropping gold quality

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
cd modules/chapter11/example29
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Hybrid cost savings:
- Crowds for routine boxes
- Experts for adjudication
- Lower spend without dropping gold quality
```

## How to interpret the result

The closing bullet—'Lower spend without dropping gold quality'—is the operational gate: if your pipeline skips this check, advanced annotation saves cost on paper but not in production quality.

## Try it / Reflect

- Where would 'Hybrid Cost Savings Pattern' change your current labeling queue?

## Related examples

- `eg:11.25` — Expert gold then crowd scale.
- `eg:11.30` — Hybrid QC pattern.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
