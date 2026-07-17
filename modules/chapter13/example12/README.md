# Example 13.12 — Indexing Genomics Data in Public Archives

**Chapter:** 13  
**Label:** `eg:13.12`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.4.1` — Understanding FAIR Data

## Learning objective

Deposit genomics data in indexed public archives with persistent identifiers.

## Chapter context

Section 13.4.1 treats interoperability via standard formats and controlled vocabularies. When a cancer genomics dataset is published, it should be indexed in public archives such as NCBI or the European Nucleotide Archive (ENA). Researchers can then locate it through k…

## What this example shows

When a cancer genomics dataset is published, it should be indexed in public archives such as NCBI or the European Nucleotide Archive (ENA). Researchers can then locate it through keywords, metadata, or other relevant fields.

## What you should learn

### From the concept
- When a cancer genomics dataset is published, it should be indexed in public archives such as NCBI or the European Nucleotide Archive (ENA).
- Researchers can then locate it through keywords, metadata, or other relevant fields.

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
cd modules/chapter13/example12
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Findable: deposit in indexed archives with persistent identifiers.
```

## How to interpret the result

The takeaway 'deposit in indexed archives with persistent identifiers.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Indexing Genomics Data in Public Archives' is missing from your current project README?

## Related examples

- `eg:13.13` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
