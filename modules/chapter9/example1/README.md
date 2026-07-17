# Example 9.1 — Customer Sentiment Survey for Decisions

**Chapter:** 9  
**Label:** `eg:9.1`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9` — ?

## Learning objective

State the decision a collection pipeline must serve before choosing crowdsourcing, IoT, or streaming.

## Chapter context

Chapter 9 extends Chapter 2 to crowdsourcing, IoT/edge, and big-data streaming. A product team may still begin with customer-satisfaction surveys, but once the same questions must be answered continuously across regions, channels, and product lines, survey log…

## What this example shows

A product team may still begin with customer-satisfaction surveys, but once the same questions must be answered continuously across regions, channels, and product lines, survey logistics alone cannot keep up. Advanced collection methods (crowdsourcing, IoT sensing, and streaming ingestion) exist to preserve that decision-making purpose at larger scale.

## What you should learn

### From the concept
- Surveys answer decision questions, but not continuously across regions and channels
- Crowdsourcing, IoT, and streaming preserve the decision purpose at larger scale
- Collect the right evidence for a concrete action, not data for its own sake

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
cd modules/chapter9/example1
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Decision-first collection:
- Surveys answer decision questions, but not continuously across regions and channels
- Crowdsourcing, IoT, and streaming preserve the decision purpose at larger scale
- Collect the right evidence for a concrete action, not data for its own sake
```

## How to interpret the result

The closing bullet—'Collect the right evidence for a concrete action, not data for its own sake'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Name one business decision your team tracks and whether a survey could answer it continuously.

## Related examples

- `eg:9.2` — Scalability limit that triggers advanced methods.
- `Chapter 2` — Collection fundamentals this chapter extends.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
