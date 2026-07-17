# Example 13.2 — Replication with New Climate Data

**Chapter:** 13  
**Label:** `eg:13.2`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.1.1` — Defining Reproducibility and Replicability

## Learning objective

Contrast reproducibility (same data rerun) with replicability (new data or independent team).

## Chapter context

Section 13.1.1 distinguishes reproducibility (same data and method → same result) from replicability (independent rerun with new data or team). A climate model may be replicated by a different team using a new set of environmental data to see if the original findings hold under a different context or dataset. Replicability…

## What this example shows

A climate model may be replicated by a different team using a new set of environmental data to see if the original findings hold under a different context or dataset. Replicability can thus be seen as an extension of reproducibility, testing the generalizability of findings across different conditions or data sources.

## Key terms

- **Reproducibility** — Same dataset and computational method yield the same result.
- **Replicability** — Independent study with new data tests whether findings generalize.

## What you should learn

### From the concept
- same data, faithful rerun.
- new data/team, does the finding still hold?

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
cd modules/chapter13/example2
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Reproducibility: same data, faithful rerun.
Replicability: new data/team, does the finding still hold?
```

## How to interpret the result

The takeaway 'new data/team, does the finding still hold?' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Replication with New Climate Data' is missing from your current project README?

## Related examples

- `eg:13.1` — Methods reproducibility demo.
- `eg:13.22` — Replication with benchmark data.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
