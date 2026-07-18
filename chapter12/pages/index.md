# Chapter 12 — Scalable Data Management (author notes)

Canonical metadata lives in [`../chapter.json`](../chapter.json). This page mirrors the chapter learning path for authoring and packaging.

## Chapter objectives

1. Define scalable data management and explain elasticity, efficiency, and resilience
2. Compare databases, object storage, and lakehouse formats for large datasets
3. Describe distributed systems patterns including HDFS, Cassandra, and Kafka
4. Apply CAP theorem, sharding, and consistency models to storage design choices
5. Use dataset versioning tools such as DVC, Pachyderm, Delta Lake, and Iceberg at scale
6. Explain data lineage techniques, tools, benefits, and cross-platform gaps
7. Recognize scalable architectures in streaming media, analytics, and healthcare imaging
8. Identify emerging trends including serverless compute, graph stores, and streaming platforms

## Part sequence

| # | Part id | Section | Examples | Est. min | Focus |
|---|---------|---------|----------|----------|-------|
| 1 | `part-01-introduction-to-scalable-management` | sec:12.1 | — | 6 | Principles and challenges |
| 2 | `part-02-databases-and-cloud-storage` | sec:12.2.1–12.2.2 | eg:12.1, 12.2 | 7 | Databases, NoSQL, cloud |
| 3 | `part-03-formats-and-storage-types` | sec:12.2.3–12.2.4 | eg:12.3–12.6 | 7 | Parquet/Avro/ORC; object vs block |
| 4 | `part-04-distributed-systems` | sec:12.2.5–12.2.6 | eg:12.7–12.9 | 7 | HDFS, Cassandra, Kafka |
| 5 | `part-05-cap-sharding-consistency` | sec:12.2.7–12.2.10 | eg:12.10, 12.11, 12.13 | 7 | CAP, sharding, consistency |
| 6 | `part-06-dataset-versioning-tools` | sec:12.3.1–12.3.2 | eg:12.14–12.17 | 7 | DVC, Pachyderm, Delta, Iceberg |
| 7 | `part-07-versioning-benefits-challenges` | sec:12.3.3–12.3.4 | eg:12.18 | 6 | Benefits and challenges |
| 8 | `part-08-data-lineage-tracking` | sec:12.4 | eg:12.19–12.22 | 7 | Provenance and lineage tools |
| 9 | `part-09-case-studies` | sec:12.5 | eg:12.23–12.25 | 6 | Netflix, Spotify, healthcare |
| 10 | `part-10-emerging-trends` | sec:12.6 | eg:12.26–12.29 | 7 | Serverless, graph, time-series, Kafka |

## Packaging checklist

- [ ] Sync slides from each `transcript.md` (`transcript_to_outline.py`)
- [ ] Build `clip.pptx` and chapter deck
- [ ] Run `verify_clip.py` per part
- [ ] TTS + `video/clip.mp4` via `narrate_clips.sh`
- [ ] `build_site.py lectures/ --chapter 12`

## Split notes

- **Section 12.2** split across parts 02–05 (databases → formats → distributed → CAP/consistency).
- **Section 12.3** split across parts 06–07 (tools vs benefits/challenges).
- Example 12.12 (Spanner/CockroachDB) and 12.30 (NiFi) are omitted from featured slides to keep clips short; modules remain browsable.
- Examples are primarily conceptual; expect bullets-only example slides unless module files sync to `code` slides.
