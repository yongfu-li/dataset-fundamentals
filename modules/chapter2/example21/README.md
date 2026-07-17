# Example 2.21 — Traffic and Air-Quality Feeds Without a Shared Key

**Chapter:** 2  
**Label:** `eg:2.21`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.8.3` — Scalability and Integration

## Learning objective

Anticipate integration failure when streams lack a shared station identifier and clock policy.

## Chapter context

Section 2.8.3 covers scaling and joining multi-source collections. Smart-city feeds that cannot join are a warning that "integrated" dashboards need shared keys designed at collection time.

## What this example shows

A city streams traffic counts and particulate readings from separate vendors; without a shared station ID and clock policy, analysts cannot join feeds into one block-level table.

## Key terms

- **Shared key** — A common identifier that lets rows from different sources join.
- **Clock policy** — Agreed timestamp meaning (timezone, truncation, sync).

## What you should learn

### From the concept
- Integration requirements belong in the collection contract with vendors.
- Missing shared keys make "integrated" analytics impossible.
- Clock skew without a policy silently misaligns events.

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
cd modules/chapter2/example21
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Integration needs shared keys at collection time:
- Traffic and air-quality feeds from separate vendors
- Without station_id + clock policy, block-level joins fail
- "Integrated" dashboards require contracts, not hope
```

## How to interpret the result

Scalability is not only volume — it is whether sources can be joined for the decision the city claimed to support.

## Try it / Reflect

- Name the minimal join key you would require in both vendor contracts (e.g., `station_id` + UTC timestamp).

## Related examples

- `eg:2.23` — Soil-moisture + satellite join needing common field IDs.
- `eg:2.4` — Single-stream warehouse sensors — easier than multi-vendor joins.

## Notes

- Prose-only in the manuscript.
