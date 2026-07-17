# Example 9.16 — Soil Sensors for Continuous Agriculture Data

**Chapter:** 9  
**Label:** `eg:9.16`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.3.1` — Introduction to IoT and Its Components

## Learning objective

Describe the sense–decide–actuate loop for continuous soil sensing in agriculture.

## Chapter context

Section 9.3.1 describes IoT components—sensing devices, connectivity, and processing—and continuous versus batch collection. In agriculture, IoT sensors in soil can monitor moisture levels, temperature, and nutrient content continuously. These sensors transmit real-time data, allowing farmers to make ins…

## What this example shows

In agriculture, IoT sensors in soil can monitor moisture levels, temperature, and nutrient content continuously. These sensors transmit real-time data, allowing farmers to make instant decisions, such as adjusting irrigation systems or adding fertilizer. This reduces waste, optimizes resources, and increases crop yields.

## Key terms

- **IoT** — Network of physical devices that collect and exchange data over the internet.
- **LPWAN** — Low-power wide-area network for small, infrequent payloads over long distances.

## What you should learn

### From the concept
- Moisture, temperature, nutrients streamed in real time
- Farmers adjust irrigation/fertilizer immediately
- Less waste, better yields — the sense-decide-actuate loop

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
cd modules/chapter9/example16
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Continuous soil sensing:
- Moisture, temperature, nutrients streamed in real time
- Farmers adjust irrigation/fertilizer immediately
- Less waste, better yields — the sense-decide-actuate loop
```

## How to interpret the result

The closing bullet—'Less waste, better yields — the sense-decide-actuate loop'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Where in your work does 'Soil Sensors' apply—or fail to apply?

## Related examples

- `eg:9.7` — Agricultural IoT network context.
- `eg:9.17` — Pipeline stage: data generation.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
