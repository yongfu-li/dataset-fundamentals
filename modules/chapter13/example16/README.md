# Example 13.16 — Linking Expression Data to Ensembl

**Chapter:** 13  
**Label:** `eg:13.16`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.4.2` — Applying FAIR Principles to Datasets

## Learning objective

Link expression datasets to external references such as Ensembl and UniProt.

## Chapter context

Section 13.4.2 covers reusability: community formats and links to external references. Linking a dataset on gene expression with external resources like Ensembl or UniProt can add valuable context to the data.

## What this example shows

Linking a dataset on gene expression with external resources like Ensembl or UniProt can add valuable context to the data.

## What you should learn

### From the concept
- Linking a dataset on gene expression with external resources like Ensembl or UniProt can add valuable context to the data.

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
cd modules/chapter13/example16
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Interoperable: link datasets to external references (Ensembl, UniProt).
```

## How to interpret the result

The takeaway 'link datasets to external references (Ensembl, UniProt).' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Linking Expression Data to Ensembl' is missing from your current project README?

## Related examples

- `eg:13.15` — Previous example in the same section.
- `eg:13.17` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
