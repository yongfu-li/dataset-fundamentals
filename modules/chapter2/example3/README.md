# Example 2.3 — Secondary Census Extract for Store Siting

**Chapter:** 2  
**Label:** `eg:2.3`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.2.2` — Secondary Data

## Learning objective

Evaluate secondary data for fitness of use: speed and cost versus mismatched bins, geography, and definitions.

## Chapter context

Section 2.2.2 presents secondary data as reused public or third-party extracts. The census store-siting case shows the typical bargain: download is fast and free, but the schema may not match the decision you need.

## What this example shows

A retailer downloads a public census extract with neighborhood income and age distributions for store siting; age bins and geographic units do not match the retailer's internal trade-area definitions.

## Key terms

- **Secondary data** — Existing data collected by others and reused for a new purpose.
- **Fitness for use** — Whether the secondary schema, coverage, and definitions answer your decision.

## What you should learn

### From the concept
- Secondary data is fast and cheap, but not automatically usable.
- Check age bins, geographic units, and definitions against your decision frame.
- Mismatched units force remapping or a hybrid with primary collection.

### From the output / result
- `run.sh` prints the takeaway or data/code output below; use it as a checklist for similar collection designs.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op installer |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter2/example3
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Secondary data: fast/free, but check fitness for use:
- Example: census income/age for store siting
- Risk: age bins and geography may not match trade areas
- Action: remap units or combine with primary collection
```

## How to interpret the result

Treat a free download as a starting hypothesis, not a finished feature table — the section's point that secondary use requires a fitness check.

## Try it / Reflect

- List two fields you would remapping-document if census tracts must become store catchments.

## Related examples

- `eg:2.2` — Primary clinical collection — the contrast case.
- `eg:2.1` — Plan that explicitly mixes primary and secondary sources.

## Notes

- Prose-only in the manuscript.
