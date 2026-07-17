# Example 12.7 — HDFS Partitioning and Replication

**Chapter:** 12  
**Label:** `eg:12.7`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.2.6` — Characteristics and Examples

## Learning objective

Describe HDFS block splitting, replication, and fault tolerance.

## Chapter context

Section 12.2.6 positions Kafka as durable event streaming infrastructure. HDFS splits large files into blocks (often 128MB), places replicas on multiple nodes, and keeps serving data when a node fails, illustrating partitioning, replication, and horizont…

## What this example shows

HDFS splits large files into blocks (often 128MB), places replicas on multiple nodes, and keeps serving data when a node fails, illustrating partitioning, replication, and horizontal scale.

## What you should learn

### From the concept
- Large files split into ~128MB blocks
- Replicas on multiple nodes
- Keep serving when a node fails

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
cd modules/chapter12/example7
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
HDFS pattern:
- Large files split into ~128MB blocks
- Replicas on multiple nodes
- Keep serving when a node fails
```

## How to interpret the result

The closing bullet—'Keep serving when a node fails'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'HDFS Partitioning and Replication' over a single-node database?

## Related examples

- `eg:12.10` — Sharding across HDFS nodes.
- `Chapter 9` — Hadoop/HDFS in big data.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
