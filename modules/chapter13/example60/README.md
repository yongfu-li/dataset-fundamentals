# Example 13.60 — S3 Versioning as Audit Backup

**Chapter:** 13  
**Label:** `eg:13.60`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.12.2` — Step-by-Step Guide to Building Reproducible Research Workflows

## Learning objective

Enable object-storage versioning and encryption as an audit recovery backstop.

## Chapter context

Section 13.12.2 specifies pipeline logs, repository layout, checkpoints, and public review. Researchers might use Amazon S3 with versioning enabled to store all raw and processed data, ensuring that previous versions of datasets are recoverable. Encrypted backups ensure t…

## What this example shows

Researchers might use Amazon S3 with versioning enabled to store all raw and processed data, ensuring that previous versions of datasets are recoverable. Encrypted backups ensure that even sensitive data, such as personal or clinical information, remains protected while still being accessible for verification.

## What you should learn

### From the concept
- Researchers might use Amazon S3 with versioning enabled to store all raw and processed data, ensuring that previous versions of datasets are recoverable.
- Encrypted backups ensure that even sensitive data, such as personal or clinical information, remains protected while still being accessible for verification.

### From the output / result
- `run.sh` prints the structured takeaway below—use it in reproducibility and open-science reviews.

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
cd modules/chapter13/example60
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Audit trail: enable S3 versioning + encryption as a recovery backstop.
```

## How to interpret the result

The takeaway 'enable S3 versioning + encryption as a recovery backstop.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'S3 Versioning as Audit Backup' is missing from your current project README?

## Related examples

- `eg:13.59` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
