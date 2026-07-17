# Example 8.17 — Schema.org Dataset Vocabulary

**Chapter:** 8  
**Label:** `eg:8.17`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.3.11` — Structured Formats (JSON, XML, Schema.org)

## Learning objective

Inspect Schema.org JSON-LD metadata fields (creator, dateCreated, distribution) for dataset discovery.

## Chapter context

Section 8.3.11 uses structured formats (JSON-LD Schema.org) for machine-readable metadata. The Schema.org vocabulary offers specific terms for describing datasets, including fields like creator, dateCreated, and distribution. These formats are especially useful in automated data pipelines o…

## What this example shows

The Schema.org vocabulary offers specific terms for describing datasets, including fields like creator, dateCreated, and distribution. These formats are especially useful in automated data pipelines or open data repositories.

## What you should learn

### From the artifact / process
- The Schema.org vocabulary offers specific terms for describing datasets, including fields like creator, dateCreated, and distribution.
- These formats are especially useful in automated data pipelines or open data repositories.
- Inspect the artifact fields and tie each to a documentation or versioning duty.

### From the output / result
- `run.sh` displays the chapter artifact or runs `main.py`—compare output to the manuscript listing.

## Contents

| File | Role |
|------|------|
| `metadata.jsonld` | Schema.org JSON-LD dataset metadata |
| `install.sh` | Prerequisite check (no global tool install) |
| `run.sh` | Displays artifact or runs demo |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ if `main.py` is present; otherwise Bash only

## Setup

```bash
cd modules/chapter8/example17
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
{
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Example Dataset",
    "creator": {
        "@type": "Organization",
        "name": "Example Research Team"
    },
    "dateCreated": "2024-01-01",
    "distribution": {
        "@type": "DataDownload",
        "encodingFormat": "text/csv",
        "contentUrl": "https://example.org/data.csv"
    }
}
```

## How to interpret the result

Each line or field in the captured output should map to a documentation or version-control obligation from Section 8—if a collaborator cannot answer 'which version and which transform' from this artifact alone, add metadata.

## Try it / Reflect

- Add one missing field to the schema.org dataset vocabulary artifact—what downstream user would need it?

## Notes

- Artifact from chapter listing.
