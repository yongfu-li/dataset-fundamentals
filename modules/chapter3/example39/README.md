# Example 3.39 — Data Localization Pressure

**Chapter:** 3  
**Label:** `eg:3.39`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.10.3` — Global Privacy Regulation Challenges

## Learning objective

Explain how data-localization mandates force regional infrastructure despite operational simplicity of one global cloud.

## Chapter context

Example 3.39 complements regime conflicts in 3.38 with infrastructure consequences—where data must live and who may access it cross-border.

## What this example shows

Localization mandates and transfer restrictions can force regional infrastructure even when a single global cloud would be simpler—raising cost and security-design complexity for consumer platforms.

## Key terms

- **Data localization** — Legal requirement to store or process data within a jurisdiction.
- **Transfer restriction** — Limits on sending personal data across borders.
- **Regional shard** — Geo-partitioned deployment to satisfy sovereignty rules.

## What you should learn

### From the concept
- Compliance architecture can override cheapest cloud topology.
- More regions can mean more attack surface to govern.
- Privacy law directly shapes DevOps and SRE decisions.

### From the output / result
- `run.sh` links localization to cost and security complexity.

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
cd modules/chapter3/example39
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Data localization pressure:
- Mandates and transfer restrictions can force regional infrastructure
- Even when a single global cloud would be simpler
- Raises cost and security-design complexity for consumer platforms
```

## How to interpret the result

When leadership asks for ‘one region to rule them all,’ Example 3.39 is the counter for EU/APAC launches.

## Try it / Reflect

- If primary DB must stay in-country, what still must not cross the border—logs, backups, support tickets?

## Related examples

- `eg:3.38` — Parallel GDPR/CCPA workflows.
- `eg:3.40` — Schrems II impact on EU–U.S. transfers.
- `eg:3.14` — Encryption does not erase localization rules.

## Notes

- Prose-only.
