# Example 4.20 — Emotion Tagging on Speech

**Chapter:** 4  
**Label:** `eg:4.20`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.2.4` — Audio Annotation Techniques

## Learning objective

Assign discrete emotion classes to speech segments for call-quality or spoken-sentiment monitoring.

## Chapter context

Example 4.20 closes the Section 4.2.4 audio technique set—happy/angry/sad/neutral tags on speech intervals.

## What this example shows

Segments may be labeled happy, angry, sad, or neutral for call-center quality monitoring or spoken sentiment analysis.

## Key terms

- **Discrete emotion schema** — Small closed set of affect classes on speech.
- **Spoken sentiment analysis** — Predicting polarity or emotion from audio.
- **Call-center QA** — Using emotion tags to monitor service quality.

## What you should learn

### From the concept
- Emotion labels are highly subjective—calibration is essential.
- Acoustic cues and lexical content may disagree.
- Connects to subjective bias discussion in Section 4.6.2.

### From the output / result
- `run.sh` lists emotion classes and use cases.

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
cd modules/chapter4/example20
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Emotion tagging on speech:
- Labels: happy, angry, sad, or neutral
- Use: call-center quality monitoring or spoken sentiment analysis
```

## How to interpret the result

Before automating emotion scoring, measure human κ on a pilot batch (Example 4.31 pattern).

## Try it / Reflect

- Is ‘raised voice but polite words’ angry or neutral in your rubric?

## Related examples

- `eg:4.7` — Frustration/satisfaction intervals on calls.
- `eg:4.26` — Text ambiguity—parallel subjectivity in labels.
- `eg:4.28` — Crowd redundancy for simpler sentiment tasks.

## Notes

- Prose-only.
