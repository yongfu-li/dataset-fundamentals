# Example 12.8 — Cassandra for Multi-Datacenter Writes

**Chapter:** 12  
**Label:** `eg:12.8`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.2.6` — Characteristics and Examples

## Learning objective

Justify Cassandra for multi-datacenter write-heavy availability.

## Chapter context

Section 12.2.6 positions Kafka as durable event streaming infrastructure. Apache Cassandra is a distributed NoSQL store built for high write throughput and multi-datacenter availability when horizontal scale matters more than single-key ACID transactions…

## What this example shows

Apache Cassandra is a distributed NoSQL store built for high write throughput and multi-datacenter availability when horizontal scale matters more than single-key ACID transactions .

## What you should learn

### From the concept
- High write throughput, multi-datacenter availability
- Horizontal scale over single-key ACID
- Fits write-heavy global apps

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
cd modules/chapter12/example8
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Cassandra:
- High write throughput, multi-datacenter availability
- Horizontal scale over single-key ACID
- Fits write-heavy global apps
```

## How to interpret the result

The closing bullet—'Fits write-heavy global apps'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'Cassandra for Multi-Datacenter Writes' over a single-node database?

## Related examples

- `eg:12.7` — Previous example in the same section.
- `eg:12.9` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
