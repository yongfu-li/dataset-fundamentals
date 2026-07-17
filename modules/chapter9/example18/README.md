# Example 9.18 — Edge Processing for Traffic Lights

**Chapter:** 9  
**Label:** `eg:9.18`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.3.3` — Benefits of Edge Computing in the IoT Data Pipeline

## Learning objective

Explain why traffic-light control benefits from edge processing without a cloud round-trip.

## Chapter context

Section 9.3.3 explains edge computing: processing near the source to cut latency and bandwidth while cloud handles aggregation. In the case of smart traffic management systems, edge computing can instantly process data from cameras and traffic sensors to adjust traffic lights in real time, without waiting f…

## What this example shows

In the case of smart traffic management systems, edge computing can instantly process data from cameras and traffic sensors to adjust traffic lights in real time, without waiting for data to be transmitted to a centralized cloud server.

## What you should learn

### From the concept
- Cameras and sensors processed locally, lights adjusted instantly
- No cloud round-trip inside the decision loop
- Cloud gets summaries; edge handles the deadline

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
cd modules/chapter9/example18
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Edge processing — traffic lights:
- Cameras and sensors processed locally, lights adjusted instantly
- No cloud round-trip inside the decision loop
- Cloud gets summaries; edge handles the deadline
```

## How to interpret the result

The closing bullet—'Cloud gets summaries; edge handles the deadline'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Where would a 200 ms cloud round-trip break a traffic-control loop?

## Related examples

- `eg:9.22` — Smart traffic as public edge infrastructure.
- `eg:9.19` — Real-time logistics rerouting.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
