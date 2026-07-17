# Example 2.11 — Stratified Sample of Cart Abandoners

**Chapter:** 2  
**Label:** `eg:2.11`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.5.2` — Stratified Sampling

## Learning objective

Use stratification to guarantee representation of known subgroups (mobile vs desktop) that matter for the decision.

## Chapter context

Section 2.5.2 upgrades SRS when subgroup differences are the point. Cart abandoners by device class continues the Example 2.1 retail plan.

## What this example shows

Analysts divide recent abandoners into mobile and desktop strata, then draw random samples of equal size from each so device-specific checkout friction remains visible even if one class is rarer.

## Key terms

- **Stratified sampling** — Partition the frame into strata, then sample within each.

## What you should learn

### From the concept
- Strata should match decision-relevant subgroups.
- Equal-size draws can oversample rare strata relative to population share.
- Within-stratum draws remain random.

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
cd modules/chapter2/example11
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Stratify when subgroups drive the decision:
- Split abandoners into mobile vs desktop strata
- Draw within each so rare device classes stay visible
- Within-stratum selection remains random
```

## How to interpret the result

Stratify when "average abandoner" would hide the subgroup you must fix (e.g., mobile-only checkout bugs).

## Try it / Reflect

- If mobile is 20% of abandoners but half the sample, how would you weight estimates back to the population?

## Related examples

- `eg:2.1` — Collection plan that specified stratified sampling.
- `eg:2.10` — SRS when subgroups are not critical.

## Notes

- Prose-only in the manuscript.
