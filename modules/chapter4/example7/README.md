# Example 4.7 — Audio Annotation on Customer Service Calls

**Chapter:** 4  
**Label:** `eg:4.7`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.1.2` — Examples of Annotated Data

## Learning objective

Attach time-aligned emotion labels to intervals in customer-service audio.

## Chapter context

Section 4.1.2 introduces audio annotation after image vignettes. Example 4.7 shows affect intervals on call-center speech—distinct from transcription (4.17) or diarization (4.18–4.19).

## What this example shows

On customer-service recordings, annotators mark intervals where a caller expresses frustration or satisfaction and attach the corresponding emotion label.

## Key terms

- **Time-aligned label** — A tag bound to start/end times in audio.
- **Affect / emotion tag** — Discrete class (e.g., frustration) on a speech segment.
- **Interval annotation** — Labeling spans within a longer recording.

## What you should learn

### From the concept
- Audio tasks require temporal precision, not only transcript text.
- Emotion labels are subjective—guidelines and IAA matter.
- Example 4.20 lists discrete emotion classes in Section 4.2.4.

### From the output / result
- `run.sh` describes interval emotion marking on calls.

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
cd modules/chapter4/example7
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Customer-service audio annotation:
- Mark time intervals of frustration or satisfaction
- Attach corresponding emotion labels
Time-aligned affect labels for speech/affect models.
```

## How to interpret the result

Pair with Example 4.26’s subjectivity lesson—emotion tags need calibration rounds, not only a class list.

## Try it / Reflect

- Define whether ‘sarcastic thank you’ is frustration, neutral, or a separate class in your schema.

## Related examples

- `eg:4.20` — Discrete emotion classes on speech segments.
- `eg:4.17` — Transcription as a different audio annotation product.
- `eg:4.26` — Subjective tone in text—parallel ambiguity in audio.

## Notes

- Prose-only.
