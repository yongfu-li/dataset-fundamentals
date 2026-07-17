# Example 9.5 — Wearables as Continuous Health Data Sources

**Chapter:** 9  
**Label:** `eg:9.5`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.1.2` — The Need for Advanced Techniques to Handle Diverse Data Sources and Formats

## Learning objective

Recognize wearables as continuous health streams that periodic clinic visits cannot match in temporal resolution.

## Chapter context

Section 9.1.2 adds heterogeneous streams (IoT, social, logs, multimedia) and ties advanced collection to governance in Chapters 7 and 8. In healthcare, wearable devices such as fitness trackers and smartwatches generate continuous streams of heart-rate, activity, and sleep measurements that periodic clinic visits an…

## What this example shows

In healthcare, wearable devices such as fitness trackers and smartwatches generate continuous streams of heart-rate, activity, and sleep measurements that periodic clinic visits and paper records cannot capture at the same temporal resolution.

## What you should learn

### From the concept
- Heart rate, activity, and sleep streamed continuously
- Temporal resolution no periodic clinic visit can match
- Requires streaming-capable pipelines, not form processing

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
cd modules/chapter9/example5
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Wearables as continuous sources:
- Heart rate, activity, and sleep streamed continuously
- Temporal resolution no periodic clinic visit can match
- Requires streaming-capable pipelines, not form processing
```

## How to interpret the result

The closing bullet—'Requires streaming-capable pipelines, not form processing'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Which vital sign needs minute-level resolution that clinic visits cannot provide?

## Related examples

- `eg:9.12` — Wearable sensor endpoints.
- `eg:9.20` — Security duties for health wearables.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
