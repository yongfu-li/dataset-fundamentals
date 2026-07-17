# Example 9.25 — Streaming Stock Sensor and Social Feeds

**Chapter:** 9  
**Label:** `eg:9.25`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.4.2` — Introduction to Streaming Data and Distributed Systems for Big Data

## Learning objective

Contrast streaming stock, sensor, and social feeds with batch processing on latency grounds.

## Chapter context

Section 9.4.2 introduces streaming data and distributed systems (Hadoop, Kafka, Spark) for continuous high-throughput flows. Examples of streaming data include real-time stock market feeds, sensor readings from IoT devices, and social media updates.

## What this example shows

Examples of streaming data include real-time stock market feeds, sensor readings from IoT devices, and social media updates.

## Key terms

- **Streaming data** — Continuously generated data processed as it arrives, not in batch.

## What you should learn

### From the concept
- Stock feeds, IoT sensors, social updates arrive continuously
- Kafka/Spark-style systems process data as it arrives
- Batch processing adds lag these use cases cannot afford

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
cd modules/chapter9/example25
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Streaming sources:
- Stock feeds, IoT sensors, social updates arrive continuously
- Kafka/Spark-style systems process data as it arrives
- Batch processing adds lag these use cases cannot afford
```

## How to interpret the result

The closing bullet—'Batch processing adds lag these use cases cannot afford'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Where in your work does 'Streaming Stock Sensor and Social Feeds' apply—or fail to apply?

## Related examples

- `eg:9.28` — Streaming sentiment case study.
- `eg:9.6` — Cloud/distributed processing backbone.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
