# Example 8.45 — PII Processing Under GDPR Principles

**Chapter:** 8  
**Label:** `eg:8.45`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.7.1` — Automating Documentation Updates

## Learning objective

Log PII processing (anonymization, encryption) for GDPR accountability.

## Chapter context

Section 8.7.1 covers automated doc updates, lineage, privacy processing, and emerging audit ideas. If a dataset contains personally identifiable information (PII), tracking its processing activities (such as anonymization or encryption) ensures that the company can demonstrate compliance with GDPR'…

## What this example shows

If a dataset contains personally identifiable information (PII), tracking its processing activities (such as anonymization or encryption) ensures that the company can demonstrate compliance with GDPR's data minimization and privacy-by-design principles.

## What you should learn

### From the concept
- PII processing logs must record anonymization, encryption, and other minimization actions.
- Accountability means being able to demonstrate privacy-by-design, not merely claim it.

### From the output / result
- `run.sh` prints the structured documentation/version-control takeaway.

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
cd modules/chapter8/example45
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
- PII processing logs must record anonymization, encryption, and other minimization actions.
- Accountability means being able to demonstrate privacy-by-design, not merely claim it.
```

## How to interpret the result

Accountability means being able to demonstrate privacy-by-design, not merely claim it. Treat this as a release gate before sharing data or training models.

## Try it / Reflect

- Audit a dataset you maintain: which element of “PII Processing Under GDPR Principles” is missing from your README or DVC metadata?

## Related examples

- `eg:8.44` — Previous example in the same section.
- `eg:8.46` — Next example in the same section.

## Notes

- Prose-only; run.sh prints operational takeaway.
