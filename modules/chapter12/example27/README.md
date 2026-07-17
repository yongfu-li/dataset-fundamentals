# Example 12.27 — Neo4j for Relationship-Heavy Graphs

**Chapter:** 12  
**Label:** `eg:12.27`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.4.5` — Challenges in Lineage Tracking

## Learning objective

Choose Neo4j when multi-hop graph relationships dominate queries.

## Chapter context

Section 12.4.5 case-studies healthcare imaging governance at scale. Graph databases such as Neo4j fit social graphs and fraud rings where multi-hop relationships are the primary query pattern.

## What this example shows

Graph databases such as Neo4j fit social graphs and fraud rings where multi-hop relationships are the primary query pattern.

## What you should learn

### From the concept
- Multi-hop relationships are the primary query
- Fit social graphs and fraud rings
- Purpose-built over forced tabular joins

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
cd modules/chapter12/example27
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Neo4j / graph DBs:
- Multi-hop relationships are the primary query
- Fit social graphs and fraud rings
- Purpose-built over forced tabular joins
```

## How to interpret the result

The closing bullet—'Purpose-built over forced tabular joins'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'Neo4j for Relationship-Heavy Graphs' over a single-node database?

## Related examples

- `eg:12.26` — Previous example in the same section.
- `eg:12.28` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
