# Example 2.24 — Remote Monitoring for Chronic Heart Disease

**Chapter:** 2  
**Label:** `eg:2.24`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.9.3` — Healthcare Data

## Learning objective

Specify healthcare remote monitoring as primary streaming plus encryption, access control, consent, and standardized identifiers.

## Chapter context

Section 2.9.3 closes applications with clinical remote monitoring. Devices stream primary vitals (as in 2.2), but collection is incomplete without privacy and identity controls.

## What this example shows

Elderly patients wear devices that stream heart rate and activity to a hospital dashboard; nurses investigate anomalies before symptoms escalate, provided encryption, access control, consent records, and standardized identifiers are in place.

## Key terms

- **Remote monitoring** — Continuous patient data collection outside the clinic via wearables or home devices.
- **Consent record** — Documented permission covering what is collected and who may access it.

## What you should learn

### From the concept
- Clinical streams are primary data with acute decision value.
- Security and consent are collection requirements, not IT afterthoughts.
- Standardized identifiers enable care-team joins without ambiguity.

### From the output / result
- `run.sh` prints the takeaway or data/code output below; use it as a checklist for similar collection designs.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op installer |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter2/example24
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Healthcare remote monitoring = stream + safeguards:
- Wearables stream heart rate and activity to a dashboard
- Nurses act on anomalies only if encryption, access control, and consent exist
- Standardized identifiers keep care-team joins unambiguous
```

## How to interpret the result

A dashboard without encryption, consent, and IDs is not a finished healthcare collection system — even if the sensors work.

## Try it / Reflect

- Which Example 2.2 protocol elements (interval, device type) reappear in wearable monitoring?

## Related examples

- `eg:2.2` — Primary clinical monitoring protocol.
- `eg:2.19` — What happens when intake identifiers/fields are incomplete.

## Notes

- Prose-only in the manuscript.
- Privacy detail expands in Chapter 3.
