# Chapter 2 — Fundamentals of Data Collection (author notes)

Canonical metadata lives in [`../chapter.json`](../chapter.json). This page mirrors the chapter learning path for authoring and packaging.

## Chapter objectives

1. Define data collection as a systematic, objective-oriented process that precedes dataset curation
2. Distinguish primary, secondary, and real-time data sources and their trade-offs
3. Match surveys, observation, web scraping, and APIs to research questions
4. Compare manual and automated execution for the same collection method
5. Apply probability and non-probability sampling designs appropriately
6. Select survey, scraping, and API tools that implement earlier method choices
7. Anticipate quality, bias, and integration challenges during collection design
8. Recognize how collection patterns appear across social, climate, and healthcare domains

## Clip sequence

| # | Clip id | Section | Examples | Est. min | Bridge in |
|---|---------|---------|----------|----------|-----------|
| 1 | `clip-01-introduction-to-data-collection` | sec:2.1 | eg:2.1 | 6 | Chapter 1 defined what a dataset is; this chapter asks how records enter one. This first part frames data collection as a planned process—objectives, sources, methods, sampling, and storage—before any tool is chosen. |
| 2 | `clip-02-sources-of-data` | sec:2.2 | eg:2.2, eg:2.3 | 7 | A collection plan starts with purpose; the next decision is where records originate. This part contrasts primary data measured for the current study, secondary archives reused from others, and real-time streams that keep refreshing. |
| 3 | `clip-03-surveys-and-scraping` | sec:2.3 | eg:2.5, eg:2.6 | 7 | Knowing a source type is not enough—you still need an instrument. This part covers surveys and questionnaires, field observation, and web scraping when no API exists, including the fragility and policy constraints scraping introduces. |
| 4 | `clip-04-apis-for-collection` | sec:2.3.4 | eg:2.7 | 6 | When a provider exposes structured endpoints, APIs are usually preferable to scraping. This part shows how a programmatic weather request becomes one appendable row and why rate limits and keys are part of the collection design. |
| 5 | `clip-05-manual-vs-automated` | sec:2.4 | eg:2.8, eg:2.9 | 6 | The same survey can be filled by hand or ingested from a form API. This part separates which method you use from who or what executes it, comparing manual precision with automated scale. |
| 6 | `clip-06-probability-sampling` | sec:2.5 | eg:2.10, eg:2.11 | 7 | Collection instruments gather answers; sampling decides whose answers count for inference. This part introduces simple random, stratified, and cluster designs and when each fits a usable frame. |
| 7 | `clip-07-additional-sampling` | sec:2.6 | eg:2.13, eg:2.14 | 6 | Not every study has a complete frame or the budget for probability draws. This part adds systematic sampling on ordered lists and two non-probability designs—convenience and snowball—used when access, not inference, is the binding constraint. |
| 8 | `clip-08-tools-for-collection` | sec:2.7 | eg:2.16, eg:2.17 | 7 | Method choices become operational through platforms and libraries. This part maps survey form builders, scraping stacks, and API clients to the instruments already introduced—and stresses that tools encode workflow, not research design. |
| 9 | `clip-09-challenges-and-case-studies` | sec:2.8 | eg:2.19, eg:2.22 | 7 | Even good tools fail when quality, bias, or integration are ignored. This final part covers preventable collection defects, channel bias, and how the same design questions appear in election sentiment, climate monitoring, and remote healthcare programs. |

## Packaging checklist

- [ ] Sync slides from each `transcript.md` (`transcript_to_outline.py`)
- [ ] Build `clip.pptx` and chapter deck
- [ ] Run `verify_clip.py` per clip
- [ ] TTS + `video/clip.mp4` via `narrate_clips.sh`
- [ ] `build_site.py lectures/ --chapter 2`

## Split notes

- **Section 2.3** is split across clips 3 (surveys, observation, scraping) and 4 (APIs).
- Clip 9 synthesizes §2.8 challenges with §2.9 case studies (social, climate, healthcare).
