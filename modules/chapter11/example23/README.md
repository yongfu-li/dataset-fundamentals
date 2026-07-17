# Example 11.23 — Clinical Language Requires Experts

**Chapter:** 11  
**Label:** `eg:11.23`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11.9.2` — Challenges of Crowdsourcing

## Learning objective

Use clinical experts for negation, temporality, and abbreviation in free text.

## Chapter context

Section 11.9.2 lists crowdsourcing challenges—quality, ethics, and subjective disagreement. Disease coding from free-text notes requires clinical language skill; expert annotators interpret negation, temporality, and abbreviations that crowd workers often get wrong.

## What this example shows

Disease coding from free-text notes requires clinical language skill; expert annotators interpret negation, temporality, and abbreviations that crowd workers often get wrong.

## What you should learn

### From the concept
- Negation, temporality, abbreviations need clinical skill
- Crowd workers often invert meaning
- Expert coding for free-text disease labels

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
cd modules/chapter11/example23
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Clinical language experts:
- Negation, temporality, abbreviations need clinical skill
- Crowd workers often invert meaning
- Expert coding for free-text disease labels
```

## How to interpret the result

The closing bullet—'Expert coding for free-text disease labels'—is the operational gate: if your pipeline skips this check, advanced annotation saves cost on paper but not in production quality.

## Try it / Reflect

- Where would 'Clinical Language Requires Experts' change your current labeling queue?

## Related examples

- `eg:11.22` — Previous example in the same section.
- `eg:11.24` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
