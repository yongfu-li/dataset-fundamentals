# Example 12.19 — Lineage Metadata on Schema and Steps

**Chapter:** 12  
**Label:** `eg:12.19`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.4.2` — Techniques for Lineage Tracking

## Learning objective

Record lineage metadata—schema versions, job IDs, timestamps—for audits.

## Chapter context

Section 12.4.2 uses lineage UIs to debug transform chains and empty partitions. Lineage catalogs record schema versions, transform job IDs, and update timestamps so operators can reconstruct how a table was produced.

## What this example shows

Lineage catalogs record schema versions, transform job IDs, and update timestamps so operators can reconstruct how a table was produced.

## What you should learn

### From the concept
- Schema versions, transform job IDs, update timestamps
- Reconstruct how a table was produced
- Foundation for catalogs and audits

### From the output / result
- `run.sh` prints the structured takeaway below—use it when choosing storage or consistency patterns.

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
cd modules/chapter12/example19
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Lineage metadata:
- Schema versions, transform job IDs, update timestamps
- Reconstruct how a table was produced
- Foundation for catalogs and audits
```

## How to interpret the result

The closing bullet—'Foundation for catalogs and audits'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- List three lineage fields you would require before accepting a new table.

## Related examples

- `eg:12.20` — Automated run lineage.
- `Chapter 8` — Metadata and provenance.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
