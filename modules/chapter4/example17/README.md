# Example 4.17 — Transcription on Customer Service Call

**Chapter:** 4  
**Label:** `eg:4.17`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.2.4` — Audio Annotation Techniques

## Learning objective

Create time-aligned transcripts from customer-service calls as ASR training targets.

## Chapter context

Section 4.2.4 covers audio techniques—Example 4.17 is pure transcription before diarization examples 4.18–4.19 and emotion tags in 4.20.

## What this example shows

Annotators listen to a call and produce a time-aligned transcript used to train automatic speech recognition.

## Key terms

- **Transcription** — Writing spoken content as text, often with timestamps.
- **Automatic speech recognition (ASR)** — Models mapping audio to text.
- **Time alignment** — Binding transcript segments to audio intervals.

## What you should learn

### From the concept
- ASR labels need consistent handling of disfluencies and crosstalk.
- Transcription without diarization loses speaker attribution.
- Audio QC includes checking timestamp drift on long files.

### From the output / result
- `run.sh` describes listen→transcript workflow for ASR.

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
cd modules/chapter4/example17
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Call transcription:
- Listen to customer-service call
- Produce time-aligned transcript
Training target for automatic speech recognition.
```

## How to interpret the result

Example 4.18 adds diarization—decide whether speaker turns are in scope before scaling transcription alone.

## Try it / Reflect

- Write a guideline line for ‘um’ and false starts—include, normalize, or drop?

## Related examples

- `eg:4.18` — Podcast diarization plus transcript.
- `eg:4.19` — Speaker ID tags on meeting segments.
- `eg:4.7` — Emotion intervals instead of full transcript.

## Notes

- Prose-only.
