# Example 13.14 — FASTQ VCF and Controlled Vocabularies

**Chapter:** 13  
**Label:** `eg:13.14`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.4.1` — Understanding FAIR Data

## Learning objective

Combine standard formats (FASTQ, VCF) with controlled vocabularies for interoperability.

## Chapter context

Section 13.4.1 treats interoperability via standard formats and controlled vocabularies. Genomic data must be formatted in standard file types like FASTQ or VCF to allow integration with bioinformatics tools or databases. Controlled vocabularies such as Gene Ontology (…

## What this example shows

Genomic data must be formatted in standard file types like FASTQ or VCF to allow integration with bioinformatics tools or databases. Controlled vocabularies such as Gene Ontology (GO) or the Unified Medical Language System (UMLS) standardize meaning. They help link data to other resources.

## What you should learn

### From the concept
- Genomic data must be formatted in standard file types like FASTQ or VCF to allow integration with bioinformatics tools or databases.
- Controlled vocabularies such as Gene Ontology (GO) or the Unified Medical Language System (UMLS) standardize meaning.

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
cd modules/chapter13/example14
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Interoperable: standard formats plus controlled vocabularies.
```

## How to interpret the result

The takeaway 'standard formats plus controlled vocabularies.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'FASTQ VCF and Controlled Vocabularies' is missing from your current project README?

## Related examples

- `eg:13.15` — Community formats.
- `eg:13.17` — Controlled vocabularies.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
