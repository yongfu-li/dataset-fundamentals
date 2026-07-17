# Example 10.2 — Synthetic Patient Records for Privacy

**Chapter:** 10  
**Label:** `eg:10.2`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.1.2` — Benefits of Synthetic Data

## Learning objective

Explain how synthetic patient records enable sharing while preserving privacy constraints.

## Chapter context

Section 10.1.2 lists benefits: privacy preservation, cost efficiency, and scalability for rare or expensive-to-collect scenarios. A healthcare provider can generate synthetic patient records that mimic the characteristics of real medical data but without exposing any actual patient information.

## What this example shows

A healthcare provider can generate synthetic patient records that mimic the characteristics of real medical data but without exposing any actual patient information.

## What you should learn

### From the concept
- Mimic medical characteristics without real patient IDs
- Enables sharing under GDPR/HIPAA constraints
- Still validate that rare individuals are not memorized

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
cd modules/chapter10/example2
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Privacy-preserving synthetic patients:
- Mimic medical characteristics without real patient IDs
- Enables sharing under GDPR/HIPAA constraints
- Still validate that rare individuals are not memorized
```

## How to interpret the result

The closing bullet—'Still validate that rare individuals are not memorized'—is the release gate: synthetic data is useful only if it passes this check before training or sharing.

## Try it / Reflect

- Where does 'Synthetic Patient Records for Privacy' apply in your domain—and what would you validate on real data?

## Related examples

- `eg:10.12` — Synthetic EHR release pattern.
- `eg:10.18` — GDPR-aware sharing.
- `Chapter 3` — Privacy foundations.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
