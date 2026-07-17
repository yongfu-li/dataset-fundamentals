# Example 12.23 — Netflix Scale Streaming Architecture

**Chapter:** 12  
**Label:** `eg:12.23`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.4.5` — Challenges in Lineage Tracking

## Learning objective

Outline Netflix-scale object storage, CDN, and streaming under load.

## Chapter context

Section 12.4.5 case-studies healthcare imaging governance at scale. Global streaming platforms combine object storage, CDNs, and real-time pipelines so viewing events and catalog metadata remain available under heavy concurrent load. Seamless integ…

## What this example shows

Global streaming platforms combine object storage, CDNs, and real-time pipelines so viewing events and catalog metadata remain available under heavy concurrent load. Seamless integration of these technologies delivers high performance while keeping storage and egress costs manageable.

## What you should learn

### From the concept
- Object storage + CDNs + real-time pipelines
- Viewing events/catalog stay available under load
- Balance performance with storage/egress cost

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
cd modules/chapter12/example23
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Netflix-scale pattern:
- Object storage + CDNs + real-time pipelines
- Viewing events/catalog stay available under load
- Balance performance with storage/egress cost
```

## How to interpret the result

The closing bullet—'Balance performance with storage/egress cost'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'Netflix Scale Streaming Architecture' over a single-node database?

## Related examples

- `eg:12.24` — Spotify analytics pattern.
- `eg:12.9` — Kafka streaming backbone.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
