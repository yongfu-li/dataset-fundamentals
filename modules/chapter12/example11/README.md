# Example 12.11 — Strong Consistency in Financial Ledgers

**Chapter:** 12  
**Label:** `eg:12.11`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.2.9` — Consistency Models in Distributed Systems

## Learning objective

Prefer strong consistency for financial ledgers under concurrent transfers.

## Chapter context

Section 12.2.9 frames the CAP theorem and consistency choices for distributed datasets. In payments and ledger systems, strong consistency is preferred so concurrent transfers cannot leave accounts in conflicting states visible to different clients.

## What this example shows

In payments and ledger systems, strong consistency is preferred so concurrent transfers cannot leave accounts in conflicting states visible to different clients.

## Key terms

- **CAP theorem** — Distributed systems trade consistency, availability, and partition tolerance.
- **Strong consistency** — All readers see the same data after a write completes.
- **Eventual consistency** — Replicas converge over time; reads may be stale briefly.

## What you should learn

### From the concept
- Concurrent transfers must not leave conflicting balances
- Prefer consistency over availability under partition
- Correctness first for payments

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
cd modules/chapter12/example11
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Strong consistency — ledgers:
- Concurrent transfers must not leave conflicting balances
- Prefer consistency over availability under partition
- Correctness first for payments
```

## How to interpret the result

The closing bullet—'Correctness first for payments'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- Name one financial operation that breaks under eventual consistency.

## Related examples

- `eg:12.13` — Eventual consistency contrast.
- `eg:12.12` — Spanner strong SQL.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
