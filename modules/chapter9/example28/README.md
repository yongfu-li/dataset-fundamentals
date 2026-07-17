# Example 9.28 — Real-Time Twitter Sentiment for Launch Feedback

**Chapter:** 9  
**Label:** `eg:9.28`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.4.5` — Case Study: Social Media Platforms and Real-Time Sentiment Analysis

## Learning objective

Outline a real-time Twitter sentiment pipeline from streaming API to dashboard feedback.

## Chapter context

Section 9.4.5 case-studies real-time social sentiment analysis for product-launch feedback. A company launching a new product may want to understand public sentiment around its release by analyzing social media conversations. By using real-time streaming data from Twitter…

## What this example shows

A company launching a new product tracks public sentiment by streaming tweets about the release, transporting them through Kafka or Flume, classifying each post with NLP (TextBlob or VADER), and surfacing minute-by-minute perception on dashboards.

## What you should learn

### From the concept
- Collect launch tweets via streaming API
- Kafka/Flume transport; TextBlob/VADER classify sentiment
- Dashboards show public perception minute by minute

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
cd modules/chapter9/example28
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Real-time sentiment pipeline:
- Collect launch tweets via streaming API
- Kafka/Flume transport; TextBlob/VADER classify sentiment
- Dashboards show public perception minute by minute
```

## How to interpret the result

The closing bullet—'Dashboards show public perception minute by minute'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Sketch three pipeline stages from tweet ingest to dashboard without naming every tool.

## Related examples

- `eg:9.24` — Noise filtering before NLP.
- `eg:9.25` — Streaming source types.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
