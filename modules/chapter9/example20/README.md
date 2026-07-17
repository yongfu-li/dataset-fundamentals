# Example 9.20 — Securing Wearable Health Edge Devices

**Chapter:** 9  
**Label:** `eg:9.20`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.3.6` — Security in IoT Data Collection and Edge Computing Use Cases

## Learning objective

List security controls required for wearable health data at the edge (encryption, secure boot).

## Chapter context

Section 9.3.6 applies IoT collection to smart cities: multi-source integration and public-space ethics. In healthcare, edge computing devices such as wearable health trackers can monitor vital signs in real time. Securing these devices from tampering and ensuring that health data is …

## What this example shows

In healthcare, edge computing devices such as wearable health trackers can monitor vital signs in real time. Securing these devices from tampering and ensuring that health data is transmitted securely to medical professionals are essential to prevent breaches of patient privacy.

## What you should learn

### From the concept
- Vital signs are sensitive data: encrypt end-to-end
- Secure boot and encrypted storage on the edge device
- HIPAA/GDPR duties travel with the data

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
cd modules/chapter9/example20
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Securing health wearables:
- Vital signs are sensitive data: encrypt end-to-end
- Secure boot and encrypted storage on the edge device
- HIPAA/GDPR duties travel with the data
```

## How to interpret the result

The closing bullet—'HIPAA/GDPR duties travel with the data'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- Where in your work does 'Securing Wearable Health Edge Devices' apply—or fail to apply?

## Related examples

- `eg:9.21` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
