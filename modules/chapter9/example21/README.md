# Example 9.21 — Smart-City Multi-Source IoT Collection

**Chapter:** 9  
**Label:** `eg:9.21`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.3.6` — Security in IoT Data Collection and Edge Computing Use Cases

## Learning objective

Integrate multi-source smart-city feeds and name the governance questions public sensing raises.

## Chapter context

Section 9.3.6 applies IoT collection to smart cities: multi-source integration and public-space ethics. Smart cities utilize IoT devices to manage urban services and infrastructure efficiently. These systems collect and analyze data from various sources, including traffic lights, env…

## What this example shows

Smart cities utilize IoT devices to manage urban services and infrastructure efficiently. These systems collect and analyze data from various sources, including traffic lights, environmental sensors, waste management systems, and public transportation networks.

## What you should learn

### From the concept
- Traffic, environment, waste, and transit feeds combined
- Standard protocols (MQTT, CoAP) enable integration
- Public-space sensing raises surveillance and ownership questions

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
cd modules/chapter9/example21
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Smart-city collection:
- Traffic, environment, waste, and transit feeds combined
- Standard protocols (MQTT, CoAP) enable integration
- Public-space sensing raises surveillance and ownership questions
```

## How to interpret the result

The closing bullet—'Public-space sensing raises surveillance and ownership questions'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Where in your work does 'Smart-City Multi-Source IoT Collection' apply—or fail to apply?

## Related examples

- `eg:9.20` — Previous example in the same section.
- `eg:9.22` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
