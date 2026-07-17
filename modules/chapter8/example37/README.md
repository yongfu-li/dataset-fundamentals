# Example 8.37 — Access Control for Privacy Compliance

**Chapter:** 8  
**Label:** `eg:8.37`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.5.9` — Addressing Common Challenges

## Learning objective

Apply least-privilege access and encryption for privacy-regulated datasets.

## Chapter context

Section 8.5.9 addresses challenges (large files, conflicts, reproducibility, access) via case studies. Ensuring that data is properly secured and accessible only to authorized users supports compliance with privacy regulations such as GDPR or HIPAA. : Implement access controls on remote storage (e.g., …

## What this example shows

Ensuring that data is properly secured and accessible only to authorized users supports compliance with privacy regulations such as GDPR or HIPAA. : Implement access controls on remote storage (e.g., using AWS IAM roles or Google Cloud permissions). Encrypt sensitive datasets both at rest and in transit. Ensure that access logs are maintained to track who accessed the data and when.

## What you should learn

### From the concept
- Sensitive data needs least-privilege access, encryption at rest/in transit, and access logs.
- These controls provide evidence for GDPR/HIPAA-style compliance.

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
cd modules/chapter8/example37
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
- Sensitive data needs least-privilege access, encryption at rest/in transit, and access logs.
- These controls provide evidence for GDPR/HIPAA-style compliance.
```

## How to interpret the result

These controls provide evidence for GDPR/HIPAA-style compliance. Treat this as a release gate before sharing data or training models.

## Try it / Reflect

- Audit a dataset you maintain: which element of “Access Control for Privacy Compliance” is missing from your README or DVC metadata?

## Related examples

- `eg:8.36` — Previous example in the same section.
- `eg:8.38` — Next example in the same section.

## Notes

- Prose-only; run.sh prints operational takeaway.
