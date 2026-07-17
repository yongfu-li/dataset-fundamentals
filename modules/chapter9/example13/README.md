# Example 9.13 — Environmental Monitoring Sensors

**Chapter:** 9  
**Label:** `eg:9.13`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.3.1` — Introduction to IoT and Its Components

## Learning objective

Explain environmental sensors as spatially anchored time series with calibration caveats.

## Chapter context

Section 9.3.1 describes IoT components—sensing devices, connectivity, and processing—and continuous versus batch collection. Sensors embedded in buildings or outdoor environments that measure air quality, temperature, humidity, or even pollution levels.

## What this example shows

Sensors embedded in buildings or outdoor environments that measure air quality, temperature, humidity, or even pollution levels.

## Key terms

- **IoT** — Network of physical devices that collect and exchange data over the internet.
- **LPWAN** — Low-power wide-area network for small, infrequent payloads over long distances.

## What you should learn

### From the concept
- Air quality, temperature, humidity, pollution measured in place
- Spatially anchored time series with calibration caveats
- Building blocks of smart-city monitoring

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
cd modules/chapter9/example13
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Environmental sensors:
- Air quality, temperature, humidity, pollution measured in place
- Spatially anchored time series with calibration caveats
- Building blocks of smart-city monitoring
```

## How to interpret the result

The closing bullet—'Building blocks of smart-city monitoring'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Where in your work does 'Environmental Monitoring Sensors' apply—or fail to apply?

## Related examples

- `eg:9.12` — Previous example in the same section.
- `eg:9.14` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
