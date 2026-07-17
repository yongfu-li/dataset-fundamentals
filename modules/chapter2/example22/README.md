# Example 2.22 — Election-Week Sentiment Collection

**Chapter:** 2  
**Label:** `eg:2.22`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.9.1` — Social Media Analytics

## Learning objective

Design social-media collection with official APIs, bot filters, and retention limits before any aggregate reaches decision makers.

## Chapter context

Section 2.9.1 applies collection fundamentals to social analytics. Election-week monitoring shows that filters and retention are part of collection ethics and quality, not post-processing niceties.

## What this example shows

A campaign streams posts mentioning a candidate via an official API, stores text, timestamps, and engagement, applies bot filters before hourly aggregates, and caps retention under policy.

## Key terms

- **Bot filter** — Rules or models that remove non-human accounts before aggregation.
- **Retention limit** — How long raw social posts may be stored.

## What you should learn

### From the concept
- Prefer official APIs over unauthorized scrapes for public platforms.
- Filter bots before leaders see hourly charts.
- Retention caps are both legal and operational design choices.

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
cd modules/chapter2/example22
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Social collection needs API + filters + retention:
- Stream candidate mentions via official API
- Store text, timestamps, engagement; apply bot filters first
- Cap retention under policy before leaders see aggregates
```

## How to interpret the result

An unfiltered spike may be bots, not voters — collection hygiene protects decisions.

## Try it / Reflect

- Which fields from Example 2.18's brand log reappear here (timestamp, text, engagement)?

## Related examples

- `eg:2.18` — API polling pattern reused for brand mentions.
- `eg:2.7` — Minimal API request pattern.

## Notes

- Prose-only in the manuscript.
