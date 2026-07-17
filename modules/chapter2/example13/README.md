# Example 2.13 — Systematic Draw from a Membership Directory

**Chapter:** 2  
**Label:** `eg:2.13`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.6.1` — Systematic Sampling

## Learning objective

Carry out systematic sampling with interval k and a random start, and spot periodicity risks in the ordered frame.

## Chapter context

Section 2.6.1 presents systematic sampling as a practical alternative to SRS on ordered lists. The membership directory shows both the procedure and the hazard of hidden periodic structure.

## What this example shows

From a 500-person alphabetical directory, interval 10 and random start 4 invite members 4, 14, 24, …; if the list were sorted by chapter in repeating blocks of 10, the draw could over-represent one chapter.

## Key terms

- **Systematic sampling** — Select every k-th unit after a random start.
- **Periodicity** — Repeating structure in the ordered frame that can bias every-k-th draws.

## What you should learn

### From the concept
- Procedure: choose k = N/n, random start in 1…k, then take every k-th.
- Alphabetical order is usually safer than cyclic chapter blocks.
- Inspect the frame for periodicity before trusting the sample.

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
cd modules/chapter2/example13
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Systematic sample: random start + every k-th unit:
- Example: k=10, start=4 → members 4, 14, 24, … from 500
- Watch for periodicity in the ordered frame (e.g., chapter blocks)
- Alphabetical order is usually safer than cyclic groupings
```

## How to interpret the result

Systematic sampling is convenient on lists, but the list's sort order is part of the design — bad order ⇒ biased every-k-th pattern.

## Try it / Reflect

- With N=500 and n=50, confirm k=10; what starts are possible?

## Related examples

- `eg:2.10` — SRS — shuffle then draw if periodicity worries you.

## Notes

- Prose-only in the manuscript.
