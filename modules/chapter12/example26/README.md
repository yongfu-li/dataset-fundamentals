# Example 12.26 — Serverless Compute Over Object Storage

**Chapter:** 12  
**Label:** `eg:12.26`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.4.5` — Challenges in Lineage Tracking

## Learning objective

Combine serverless compute with object storage for elastic ingest processing.

## Chapter context

Section 12.4.5 case-studies healthcare imaging governance at scale. Object stores such as Amazon S3 hold durable blobs while serverless functions process events on ingest, scaling compute independently of storage capacity.

## What this example shows

Object stores such as Amazon S3 hold durable blobs while serverless functions process events on ingest, scaling compute independently of storage capacity.

## What you should learn

### From the concept
- S3-class blobs stay durable
- Functions process ingest events
- Compute scales independently of storage

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
cd modules/chapter12/example26
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Serverless over object storage:
- S3-class blobs stay durable
- Functions process ingest events
- Compute scales independently of storage
```

## How to interpret the result

The closing bullet—'Compute scales independently of storage'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'Serverless Compute Over Object Storage' over a single-node database?

## Related examples

- `eg:12.5` — Object storage foundation.
- `eg:12.25` — Healthcare imaging case.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
