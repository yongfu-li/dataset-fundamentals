# Example 9.2 — Paper Surveys and Scalability Limits

**Chapter:** 9  
**Label:** `eg:9.2`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.1.1` — Why Traditional Pipelines Hit Limits

## Learning objective

Explain why paper surveys fail to scale and when automated or crowd-based ingestion becomes necessary.

## Chapter context

Section 9.1.1 names three limits of traditional pipelines—scalability, reliability, and cost—that motivate crowdsourcing, IoT, and streaming in the rest of the chapter. Collecting data via paper surveys requires time to distribute, collect, and process responses, which becomes exponentially more difficult as the sample size increases.

## What this example shows

Collecting data via paper surveys requires time to distribute, collect, and process responses, which becomes exponentially more difficult as the sample size increases.

## What you should learn

### From the concept
- Each response costs distribution, collection, and processing time
- Effort grows exponentially with sample size
- Motivation for crowdsourcing and automated ingestion

### From the output / result
- `run.sh` prints the structured takeaway below—use it as a design checklist.

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
cd modules/chapter9/example2
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Scalability limit — paper surveys:
- Each response costs distribution, collection, and processing time
- Effort grows exponentially with sample size
- Motivation for crowdsourcing and automated ingestion
```

## How to interpret the result

The closing bullet—'Motivation for crowdsourcing and automated ingestion'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Estimate how response time grows if you doubled a paper-survey sample—what breaks first?

## Related examples

- `eg:9.3` — Reliability limit from manual observation.
- `eg:9.10` — Crowd microtasks as a scalable alternative.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
