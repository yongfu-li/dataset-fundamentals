# Example 2.12 — Cluster Sample of Neighborhood Clinics

**Chapter:** 2  
**Label:** `eg:2.12`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.5.3` — Cluster Sampling

## Learning objective

Apply cluster sampling when no complete person list exists but intact groups (clinics) can be visited as units.

## Chapter context

Section 2.5.3 covers cluster sampling for geographic or institutional frames. Public-health clinic visits illustrate the travel-cost benefit and within-cluster correlation risk.

## What this example shows

A team randomly selects twelve clinics, then invites every consenting adult patient on two weekdays; travel cost drops, but patients within a clinic are more alike than a city-wide SRS would be.

## Key terms

- **Cluster sampling** — Select groups (clusters) first, then observe units inside selected clusters.

## What you should learn

### From the concept
- Clusters are useful when the person-level frame is incomplete.
- Travel and logistics costs fall when visits are concentrated.
- Within-cluster similarity reduces effective sample size — report design effect if possible.

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
cd modules/chapter2/example12
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Cluster sample when groups are visit-able but people lists are not:
- Randomly select 12 clinics, then survey patients on two weekdays
- Saves travel cost; patients within a clinic are more alike
- Treat precision cautiously (within-cluster correlation)
```

## How to interpret the result

Cluster sampling solves logistics; it does not magically create independent observations — interpret precision cautiously.

## Try it / Reflect

- Would sampling patients across more clinics with fewer patients each reduce design effect? (Usually yes.)

## Related examples

- `eg:2.10` — SRS when a complete roster exists.
- `eg:2.13` — Systematic sampling from a directory.

## Notes

- Prose-only in the manuscript.
