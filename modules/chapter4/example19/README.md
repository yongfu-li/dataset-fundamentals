# Example 4.19 — Speaker Identification on Meeting Audio

**Chapter:** 4  
**Label:** `eg:4.19`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.2.4` — Audio Annotation Techniques

## Learning objective

Tag meeting-audio segments with speaker identities for turn-taking and attribution models.

## Chapter context

Example 4.19 is the second diarization setting in Section 4.2.4—Speaker 1 / Speaker 2 tags on meeting recordings.

## What this example shows

In a meeting recording, each segment is tagged Speaker 1 or Speaker 2 so models can learn turn-taking and attribution.

## Key terms

- **Speaker identification (annotation)** — Assigning speaker labels to audio segments.
- **Turn-taking** — Alternation patterns between speakers over time.
- **Attribution** — Linking utterances to identifiable speakers.

## What you should learn

### From the concept
- Anonymous Speaker N labels avoid PII but limit real-world deployment.
- Consistent segment boundaries matter across annotators.
- Pair with transcription when text content is also needed.

### From the output / result
- `run.sh` describes per-segment speaker tags.

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
cd modules/chapter4/example19
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Meeting speaker identification:
- Tag each segment Speaker 1 or Speaker 2
- Models learn turn-taking and attribution
```

## How to interpret the result

For public release, anonymization policies (Chapter 3) may forbid real names even if internally known.

## Try it / Reflect

- When a third participant joins mid-call, do you renumber speakers or add Speaker 3?

## Related examples

- `eg:4.18` — Podcast diarization with transcript.
- `eg:4.17` — Transcript-only annotation path.
- `eg:4.20` — Emotion classes on top of speaker segments.

## Notes

- Prose-only.
