# Example 2.23 — Soil-Moisture Network for Irrigation Planning

**Chapter:** 2  
**Label:** `eg:2.23`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.9.2` — Climate Monitoring

## Learning objective

Join high-frequency probe streams with satellite indices only when field IDs and map projections align.

## Chapter context

Section 2.9.2 applies collection to climate and agriculture monitoring. Soil-moisture probes plus vegetation indices echo Example 2.21's integration lesson in an environmental setting.

## What this example shows

A regional office deploys soil-moisture probes across irrigation districts and joins them with public satellite vegetation indices; probes report every fifteen minutes, but without common field IDs and matched projections the join fails.

## Key terms

- **In-situ probe** — Ground sensor measuring local conditions (e.g., soil moisture).
- **Vegetation index** — Satellite-derived summary of plant greenness used with ground data.

## What you should learn

### From the concept
- Probe cadence (15 min) and satellite revisit differ — align windows deliberately.
- Common field IDs and projections are collection requirements.
- Public secondary satellite data still needs fitness checks (Example 2.3).

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
cd modules/chapter2/example23
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Climate monitoring joins need shared field IDs:
- 15-min soil-moisture probes + satellite vegetation indices
- Without common IDs and map projections, the join fails
- Align time windows when cadences differ
```

## How to interpret the result

Environmental "fusion" products inherit every integration defect — fix keys and clocks at collection time.

## Try it / Reflect

- If satellites refresh daily but probes are 15-min, what aggregate of probe data would you join to each satellite scene?

## Related examples

- `eg:2.21` — Feeds without shared keys — same failure mode.
- `eg:2.4` — Real-time sensor streams.

## Notes

- Prose-only in the manuscript.
