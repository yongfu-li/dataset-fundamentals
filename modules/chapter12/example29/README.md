# Example 12.29 — Kafka High-Throughput Messaging

**Chapter:** 12  
**Label:** `eg:12.29`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.4.5` — Challenges in Lineage Tracking

## Learning objective

Apply Kafka as a high-throughput operational messaging bus.

## Chapter context

Section 12.4.5 case-studies healthcare imaging governance at scale. Kafka sustains high message rates across producers and consumers, making it a common backbone for fraud detection and live analytics pipelines .

## What this example shows

Kafka sustains high message rates across producers and consumers, making it a common backbone for fraud detection and live analytics pipelines .

## What you should learn

### From the concept
- High message rates across producers/consumers
- Backbone for fraud detection and live analytics
- Operational bus for pipeline automation

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
cd modules/chapter12/example29
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Kafka messaging:
- High message rates across producers/consumers
- Backbone for fraud detection and live analytics
- Operational bus for pipeline automation
```

## How to interpret the result

The closing bullet—'Operational bus for pipeline automation'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'Kafka High-Throughput Messaging' over a single-node database?

## Related examples

- `eg:12.28` — Previous example in the same section.
- `eg:12.30` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
