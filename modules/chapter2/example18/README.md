# Example 2.18 — API-Driven Brand Mention Log

**Chapter:** 2  
**Label:** `eg:2.18`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.7.3` — API Tools

## Learning objective

Operate an API collection loop with polling cadence and backoff when quotas are hit.

## Chapter context

Section 2.7.3 scales Example 2.7's minimal request into production tooling: clients, keys, schedulers, and quota-aware backoff for continuous brand monitoring.

## What this example shows

A marketing team polls a social API every five minutes for brand-keyword posts, storing timestamp, text, and engagement; when the daily quota is reached, the job backs off instead of retrying aggressively.

## Key terms

- **Polling** — Repeatedly requesting new records on a fixed interval.
- **Backoff** — Slowing or pausing requests after quota or error signals.

## What you should learn

### From the concept
- Cadence (e.g., 5 minutes) must match freshness needs and quota budget.
- Aggressive retries can burn the next day's access.
- Store only the fields required for later analytics.

### From the output / result
- `run.sh` prints the takeaway or data/code output below; use it as a checklist for similar collection designs.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op installer |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter2/example18
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Operational API collection needs cadence + backoff:
- Poll every 5 minutes for brand-keyword posts
- Store timestamp, text, engagement counts
- On daily quota: back off — do not retry aggressively
```

## How to interpret the result

API tooling succeeds when the job survives quotas without losing access — reliability is part of collection quality.

## Try it / Reflect

- If the daily quota is 1,000 calls, how many 5-minute polls fit in 24 hours? (288 — quota is not the bottleneck; content volume is.)

## Related examples

- `eg:2.7` — Minimal one-shot API request.
- `eg:2.22` — Election-week sentiment with bot filters.

## Notes

- Prose-only in the manuscript.
