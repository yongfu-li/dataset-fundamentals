# Example 9.17 — Smart Thermostat Local Reading

**Chapter:** 9  
**Label:** `eg:9.17`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.3.2` — IoT Data Collection Pipeline and Edge Computing Benefits

## Learning objective

Place local sensor reading (thermostat) as the first stage of an IoT collection pipeline.

## Chapter context

Section 9.3.2 maps the IoT pipeline stages from data generation through transmission, processing, and storage, highlighting edge benefits. A smart thermostat records temperature data in a room.

## What this example shows

A smart thermostat records temperature data in a room.

## Key terms

- **Edge computing** — Processing data near the source to reduce latency and bandwidth use.

## What you should learn

### From the concept
- A thermostat records room temperature — the raw pipeline input
- Context (device, location, time) must be captured at the source
- Transmission, processing, and storage stages follow

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
cd modules/chapter9/example17
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Data generation stage:
- A thermostat records room temperature — the raw pipeline input
- Context (device, location, time) must be captured at the source
- Transmission, processing, and storage stages follow
```

## How to interpret the result

The closing bullet—'Transmission, processing, and storage stages follow'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Where in your work does 'Smart Thermostat Local Reading' apply—or fail to apply?

## Related examples

- `eg:9.18` — Edge processing after local generation.
- `eg:9.16` — Continuous sensing with actuation.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
