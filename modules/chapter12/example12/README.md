# Example 12.12 — Spanner and CockroachDB Strong Consistency

**Chapter:** 12  
**Label:** `eg:12.12`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.2.9` — Consistency Models in Distributed Systems

## Learning objective

Compare Spanner/CockroachDB global strong consistency trade-offs.

## Chapter context

Section 12.2.9 frames the CAP theorem and consistency choices for distributed datasets. Google Spanner and CockroachDB provide strongly consistent distributed SQL using consensus protocols, trading some latency for global consistency guarantees.

## What this example shows

Google Spanner and CockroachDB provide strongly consistent distributed SQL using consensus protocols, trading some latency for global consistency guarantees.

## Key terms

- **CAP theorem** — Distributed systems trade consistency, availability, and partition tolerance.
- **Strong consistency** — All readers see the same data after a write completes.
- **Eventual consistency** — Replicas converge over time; reads may be stale briefly.

## What you should learn

### From the concept
- Strongly consistent distributed SQL
- Consensus protocols across regions
- Trade latency for global consistency

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
cd modules/chapter12/example12
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Spanner / CockroachDB:
- Strongly consistent distributed SQL
- Consensus protocols across regions
- Trade latency for global consistency
```

## How to interpret the result

The closing bullet—'Trade latency for global consistency'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'Spanner and CockroachDB Strong Consistency' over a single-node database?

## Related examples

- `eg:12.11` — Previous example in the same section.
- `eg:12.13` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
