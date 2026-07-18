# Chapter 9 — Advanced Data Collection Techniques (author notes)

Canonical metadata lives in [`../chapter.json`](../chapter.json). This page mirrors the chapter learning path for authoring and packaging.

## Chapter objectives

1. Explain when traditional collection pipelines hit scale, speed, and heterogeneity limits
2. Design crowdsourcing campaigns with clear tasks, quality controls, and ethical labor practices
3. Compare MTurk and alternative crowd platforms for microtasks and research recruitment
4. Describe IoT sensing components and edge computing benefits for continuous collection
5. Anticipate IoT security, privacy, scalability, and data-overload challenges
6. Characterize big data volume, velocity, variety, and veracity for collection design
7. Distinguish streaming ingestion, data lakes, and data warehouses for operational storage
8. Connect advanced collection patterns to real-time sentiment, distributed storage, and AI pipelines

## Part sequence

| # | Part id | Section | Examples | Est. min | Focus |
|---|---------|---------|----------|----------|-------|
| 1 | `part-01-from-fundamentals-to-advanced` | sec:9.1 | eg:9.1, 9.2, 9.5 | 7 | Why advanced collection is needed |
| 2 | `part-02-crowdsourcing-use-cases` | sec:9.2.1–9.2.2 | eg:9.8–9.10 | 7 | Crowdsourcing definition and use cases |
| 3 | `part-03-mturk-and-platforms` | sec:9.2.3, 9.2.7 | eg:9.11 | 7 | MTurk workflow and alternative platforms |
| 4 | `part-04-crowdsourcing-quality-and-ethics` | sec:9.2.4–9.2.6, 9.2.8 | — | 7 | Advantages, challenges, practices, ethics |
| 5 | `part-05-iot-components` | sec:9.3.1 | eg:9.12, 9.14, 9.16 | 7 | Sensors, connectivity, IoT components |
| 6 | `part-06-edge-computing-pipeline` | sec:9.3.2–9.3.4 | eg:9.17–9.19 | 7 | Pipeline and edge benefits |
| 7 | `part-07-iot-security-and-ethics` | sec:9.3.5–9.3.7 | eg:9.20, 9.21 | 7 | Security, privacy, overload |
| 8 | `part-08-big-data-and-streaming` | sec:9.4.1–9.4.2 | eg:9.23–9.25 | 7 | Big-data characteristics and streaming |
| 9 | `part-09-lakes-warehouses-tools` | sec:9.4.3–9.4.4 | eg:9.26, 9.27 | 7 | Tools, lakes vs warehouses |
| 10 | `part-10-sentiment-hdfs-and-outlook` | sec:9.4.5–9.4.6 | eg:9.28 | 7 | Sentiment case study, HDFS, outlook |

## Packaging checklist

- [ ] Sync slides from each `transcript.md` (`transcript_to_outline.py`)
- [ ] Build `clip.pptx` and chapter deck
- [ ] Run `verify_clip.py` per part
- [ ] TTS + `video/clip.mp4` via `narrate_clips.sh`
- [ ] `build_site.py lectures/ --chapter 9`

## Split notes

- **Section 9.2** is split across parts 02–04 (use cases, platforms, quality/ethics).
- **Section 9.3** is split across parts 05–07 (components, edge pipeline, security/ethics).
- **Section 9.4** is split across parts 08–10 (streaming, storage tools, case study/outlook).
- All Chapter 9 examples are **conceptual** (no `lstlisting` blocks); example slides will be bullets-only unless module files provide inspectable text.
