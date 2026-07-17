# Example 2.15 — Snowball Recruitment for Gig-Worker Interviews

**Chapter:** 2  
**Label:** `eg:2.15`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.6.3` — Snowball Sampling

## Learning objective

Use snowball sampling to reach hidden populations, while naming the network-homophily bias it introduces.

## Chapter context

Section 2.6.3 addresses hard-to-reach groups. Gig-worker interviews show how referrals expand access and also concentrate on similar peers.

## What this example shows

A labor study starts with five ride-hail drivers and asks each to refer two full-time peers; within three waves the team reaches drivers who never answer public ads, but almost all share similar platforms and schedules.

## Key terms

- **Snowball sampling** — Recruitment via referrals from current participants.
- **Homophily** — Tendency of referrals to resemble the referrer — a bias source.

## What you should learn

### From the concept
- Snowball helps when no public frame exists.
- Waves expand reach but amplify network similarity.
- Document seeds and waves so readers can judge coverage.

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
cd modules/chapter2/example15
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Snowball sampling reaches hidden populations:
- Start with 5 drivers; each refers 2 peers across waves
- Access people who never answer public ads
- Bias risk: homophily — referrals resemble referrers
```

## How to interpret the result

Snowball is a access method for hidden populations, not a substitute for a probability claim about all gig workers.

## Try it / Reflect

- How would adding seeds from a second platform (food delivery) reduce homophily?

## Related examples

- `eg:2.14` — Convenience sample — another non-probability design.

## Notes

- Prose-only in the manuscript.
