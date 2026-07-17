# Example 2.2 — Primary Collection in a Clinical Monitoring Study

**Chapter:** 2  
**Label:** `eg:2.2`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.2.1` — Primary Data

## Learning objective

Recognize primary data as first-hand measurements governed by a protocol that defines devices, intervals, and inclusion criteria.

## Chapter context

Section 2.2.1 contrasts primary with secondary data. Clinical monitoring is the section's anchor: the team designs the instruments and schedule, so they control freshness and relevance — at the cost of effort and ethics oversight.

## What this example shows

A hospital study of post-operative recovery collects vital signs every four hours from bedside monitors plus nurse-entered pain scores, with devices, intervals, and inclusion criteria written into the protocol.

## Key terms

- **Primary data** — Data collected first-hand for the study's own purpose, under a defined protocol.

## What you should learn

### From the concept
- Primary collection gives control over what is measured and when.
- The protocol (devices, intervals, inclusion) is part of the data product.
- Clinical primary data carries consent and privacy obligations (see also Example 2.24).

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
cd modules/chapter2/example2
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Primary data = first-hand, protocol-governed collection:
- Here: vitals every 4h + nurse pain scores for post-op recovery
- Protocol fixes devices, intervals, and inclusion criteria
- Trade-off: control and freshness vs effort and ethics overhead
```

## How to interpret the result

Choose primary collection when no existing source answers the research question at the required resolution — but budget for protocol design, not only for sensors.

## Try it / Reflect

- If monitors fail for one night, is the gap primary missingness or a protocol failure? (Both — see Example 2.19.)

## Related examples

- `eg:2.3` — Secondary census extract — the opposite source type.
- `eg:2.24` — Remote monitoring that also streams primary vitals.

## Notes

- Prose-only in the manuscript.
