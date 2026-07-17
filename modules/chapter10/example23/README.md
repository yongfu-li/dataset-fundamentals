# Example 10.23 — Synthetic Data Under GDPR Rights

**Chapter:** 10  
**Label:** `eg:10.23`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.7.6` — Regulatory Considerations: Data Privacy Laws and Synthetic Data Compliance

## Learning objective

Apply GDPR rights and lifecycle policy to synthetic data derivatives.

## Chapter context

Chapter 10 covers synthetic data when real data are scarce, sensitive, or imbalanced. A regulator asks whether individuals can challenge inferences trained on synthetic derivatives of their personal data, pushing teams to document provenance and retention policies.

## What this example shows

A regulator asks whether individuals can challenge inferences trained on synthetic derivatives of their personal data, pushing teams to document provenance and retention policies.

## What you should learn

### From the concept
- Inferences from synthetic data may still be challengeable
- Document provenance and retention for every release
- Lifecycle policy: generate, use, share, and delete responsibly

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
cd modules/chapter10/example23
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
GDPR rights and synthetic derivatives:
- Inferences from synthetic data may still be challengeable
- Document provenance and retention for every release
- Lifecycle policy: generate, use, share, and delete responsibly
```

## How to interpret the result

The closing bullet—'Lifecycle policy: generate, use, share, and delete responsibly'—is the release gate: synthetic data is useful only if it passes this check before training or sharing.

## Try it / Reflect

- Where does 'Synthetic Data Under GDPR Rights' apply in your domain—and what would you validate on real data?

## Related examples

- `eg:10.18` — GDPR-compliant sharing.
- `Chapter 8` — Provenance and versioning.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
