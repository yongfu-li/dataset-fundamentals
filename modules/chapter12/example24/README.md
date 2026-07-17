# Example 12.24 — Spotify Real-Time Analytics Pipelines

**Chapter:** 12  
**Label:** `eg:12.24`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.4.5` — Challenges in Lineage Tracking

## Learning objective

Describe Spotify-style real-time listening analytics across SQL/NoSQL/Spark.

## Chapter context

Section 12.4.5 case-studies healthcare imaging governance at scale. Music platforms stream listening events into cloud storage and real-time analytics so recommendations and charts update without nightly batch-only warehouses. A mix of SQL and NoSQ…

## What this example shows

Music platforms stream listening events into cloud storage and real-time analytics so recommendations and charts update without nightly batch-only warehouses. A mix of SQL and NoSQL stores with frameworks such as Apache Spark lets the infrastructure absorb traffic spikes and serve millions of users globally.

## What you should learn

### From the concept
- Stream listening events to cloud storage/analytics
- Recommendations update without nightly-only warehouses
- SQL + NoSQL + Spark absorb traffic spikes

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
cd modules/chapter12/example24
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Spotify-style analytics:
- Stream listening events to cloud storage/analytics
- Recommendations update without nightly-only warehouses
- SQL + NoSQL + Spark absorb traffic spikes
```

## How to interpret the result

The closing bullet—'SQL + NoSQL + Spark absorb traffic spikes'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'Spotify Real-Time Analytics Pipelines' over a single-node database?

## Related examples

- `eg:12.23` — Previous example in the same section.
- `eg:12.25` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
