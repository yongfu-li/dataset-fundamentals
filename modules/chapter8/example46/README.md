# Example 8.46 — Encrypting Sensitive Datasets with DVC

**Chapter:** 8  
**Label:** `eg:8.46`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.7.1` — Automating Documentation Updates

## Learning objective

Combine encryption with DVC/Git LFS and cloud IAM for sensitive data.

## Chapter context

Section 8.7.1 covers automated doc updates, lineage, privacy processing, and emerging audit ideas. Using DVC and Git LFS, datasets containing sensitive information could be encrypted and stored in a secure cloud environment with restricted access. This ensures that only approved personnel can acces…

## What this example shows

Using DVC and Git LFS, datasets containing sensitive information could be encrypted and stored in a secure cloud environment with restricted access. This ensures that only approved personnel can access and modify the data.

## What you should learn

### From the concept
- Encryption protects sensitive bytes; remote access controls restrict who can retrieve them.
- DVC/Git LFS references must not bypass cloud permissions or key management.

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
cd modules/chapter8/example46
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
- Encryption protects sensitive bytes; remote access controls restrict who can retrieve them.
- DVC/Git LFS references must not bypass cloud permissions or key management.
```

## How to interpret the result

DVC/Git LFS references must not bypass cloud permissions or key management. Treat this as a release gate before sharing data or training models.

## Try it / Reflect

- Audit a dataset you maintain: which element of “Encrypting Sensitive Datasets with DVC” is missing from your README or DVC metadata?

## Related examples

- `eg:8.45` — Previous example in the same section.
- `eg:8.47` — Next example in the same section.

## Notes

- Prose-only; run.sh prints operational takeaway.
