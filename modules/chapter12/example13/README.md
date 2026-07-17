# Example 12.13 — Eventual Consistency in DynamoDB and Cassandra

**Chapter:** 12  
**Label:** `eg:12.13`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.2.9` — Consistency Models in Distributed Systems

## Learning objective

Recognize eventual consistency in DynamoDB/Cassandra for high availability.

## Chapter context

Section 12.2.9 frames the CAP theorem and consistency choices for distributed datasets. Amazon DynamoDB and Apache Cassandra commonly emphasize availability and partition tolerance with eventual consistency tunable by client read/write quorums.

## What this example shows

Amazon DynamoDB and Apache Cassandra commonly emphasize availability and partition tolerance with eventual consistency tunable by client read/write quorums.

## Key terms

- **CAP theorem** — Distributed systems trade consistency, availability, and partition tolerance.
- **Strong consistency** — All readers see the same data after a write completes.
- **Eventual consistency** — Replicas converge over time; reads may be stale briefly.

## What you should learn

### From the concept
- DynamoDB/Cassandra favor availability under partition
- Consistency is eventual; quorums tune strength
- Right for high-availability web/social, not ledgers

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
cd modules/chapter12/example13
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Eventual consistency:
- DynamoDB/Cassandra favor availability under partition
- Consistency is eventual; quorums tune strength
- Right for high-availability web/social, not ledgers
```

## How to interpret the result

The closing bullet—'Right for high-availability web/social, not ledgers'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'Eventual Consistency in DynamoDB and Cassandra' over a single-node database?

## Related examples

- `eg:12.12` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
