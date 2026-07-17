# Example 9.12 — Wearable Health Sensors

**Chapter:** 9  
**Label:** `eg:9.12`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.3.1` — Introduction to IoT and Its Components

## Learning objective

Identify wearable health sensors as IoT endpoints and the privacy controls they require.

## Chapter context

Section 9.3.1 describes IoT components—sensing devices, connectivity, and processing—and continuous versus batch collection. Devices like fitness trackers or smartwatches that monitor health parameters such as heart rate, steps taken, and sleep patterns.

## What this example shows

Devices like fitness trackers or smartwatches that monitor health parameters such as heart rate, steps taken, and sleep patterns.

## Key terms

- **IoT** — Network of physical devices that collect and exchange data over the internet.
- **LPWAN** — Low-power wide-area network for small, infrequent payloads over long distances.

## What you should learn

### From the concept
- Heart rate, steps, and sleep captured continuously on the body
- BLE connectivity to phones/gateways
- Personal health data demands security and privacy controls

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
cd modules/chapter9/example12
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Wearable health sensors:
- Heart rate, steps, and sleep captured continuously on the body
- BLE connectivity to phones/gateways
- Personal health data demands security and privacy controls
```

## How to interpret the result

The closing bullet—'Personal health data demands security and privacy controls'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Where in your work does 'Wearable Health Sensors' apply—or fail to apply?

## Related examples

- `eg:9.13` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
