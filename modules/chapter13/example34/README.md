# Example 13.34 — Docker Image for Sequence Alignment Tools

**Chapter:** 13  
**Label:** `eg:13.34`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.7.2` — Managing Code and Data Together

## Learning objective

Pin sequence-alignment tool versions in a reproducible Docker image.

## Chapter context

Section 13.7.2 extends DVC to version data, models, and multi-stage pipelines. In a bioinformatics project, a Docker image can bundle preprocessing software. Specific tool versions, such as BWA for sequence alignment or Samtools for manipulating alignments, c…

## What this example shows

In a bioinformatics project, a Docker image can bundle preprocessing software. Specific tool versions, such as BWA for sequence alignment or Samtools for manipulating alignments, can be pinned in the container.

## Key terms

- **DVC** — Data Version Control—Git-coupled tracking of datasets, models, and pipeline stages.

## What you should learn

### From the concept
- In a bioinformatics project, a Docker image can bundle preprocessing software.
- Specific tool versions, such as BWA for sequence alignment or Samtools for manipulating alignments, can be pinned in the container.

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
cd modules/chapter13/example34
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Docker: pin exact tool versions in a reproducible image.
```

## How to interpret the result

The takeaway 'pin exact tool versions in a reproducible image.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which BWA/samtools version would you pin in a Dockerfile README?

## Related examples

- `eg:13.50` — Containers vs drift.
- `eg:13.36` — ML training Docker image.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
