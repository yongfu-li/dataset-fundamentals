# Example 9.15 — IoT Connectivity Options

**Chapter:** 9  
**Label:** `eg:9.15`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.3.1` — Introduction to IoT and Its Components

## Learning objective

Match IoT connectivity options (Wi-Fi, BLE, cellular, LPWAN) to device constraints.

## Chapter context

Section 9.3.1 describes IoT components—sensing devices, connectivity, and processing—and continuous versus batch collection. IoT devices require reliable connectivity to transfer the collected data to a central processing unit, often in the cloud. This can be achieved through various communication protoc…

## What this example shows

IoT devices require reliable connectivity to transfer the collected data to a central processing unit, often in the cloud. This can be achieved through various communication protocols, such as:

## Key terms

- **IoT** — Network of physical devices that collect and exchange data over the internet.
- **LPWAN** — Low-power wide-area network for small, infrequent payloads over long distances.

## What you should learn

### From the concept
- Wi-Fi for powered home/office devices
- BLE for wearables; cellular for long-range mobility
- LPWAN for small, infrequent payloads across fields

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
cd modules/chapter9/example15
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
IoT connectivity options:
- Wi-Fi for powered home/office devices
- BLE for wearables; cellular for long-range mobility
- LPWAN for small, infrequent payloads across fields
```

## How to interpret the result

The closing bullet—'LPWAN for small, infrequent payloads across fields'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Pick a device you own and justify Wi-Fi vs. BLE vs. cellular for its use case.

## Related examples

- `eg:9.14` — Previous example in the same section.
- `eg:9.16` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
