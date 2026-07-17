# Chapter 13 — Reproducibility and Open Science (author notes)

Canonical metadata lives in [`../chapter.json`](../chapter.json). This page mirrors the chapter learning path for authoring and packaging.

## Chapter objectives

1. Distinguish reproducibility from replicability and state core open-science principles
2. Anticipate privacy, documentation, and standards barriers that block reproducible work
3. Apply documentation, metadata, and pinned dataset versions for research-facing reuse
4. Explain FAIR principles and data-quality practices that support reproducibility
5. Describe provenance, licensing, privacy, and ethical constraints on open data sharing
6. Integrate notebooks, containers, and workflow files into reproducible research pipelines
7. Use continuous integration and automated documentation to keep analyses checkable
8. Employ R Markdown, DVC, collaboration platforms, and audit trails for team-scale reproducibility

## Part sequence

| # | Part id | Section | Examples | Est. min | Focus |
|---|---------|---------|----------|----------|-------|
| 1 | `part-01-reproducibility-and-open-science` | sec:13.1.1–13.1.2 | eg:13.1–13.4 | 7 | Definitions and open science |
| 2 | `part-02-challenges-and-standards` | sec:13.1.3–13.1.5 | eg:13.5–13.8 | 7 | Barriers and standards |
| 3 | `part-03-documentation-and-metadata` | sec:13.2–13.3 | eg:13.9–13.11 | 6 | Docs, metadata, pinned versions |
| 4 | `part-04-fair-data-principles` | sec:13.4.1–13.4.2 | eg:13.12–13.15 | 7 | FAIR findable–reusable |
| 5 | `part-05-quality-and-provenance` | sec:13.4.3–13.5 | eg:13.18, 13.24, 13.25 | 7 | Quality and provenance |
| 6 | `part-06-licensing-and-ethics` | sec:13.6 | eg:13.26–13.28 | 7 | Licenses, privacy, ethics |
| 7 | `part-07-reproducible-workflows` | sec:13.7 | eg:13.29, 13.31, 13.34, 13.36 | 7 | Workflows, notebooks, Docker |
| 8 | `part-08-automation-and-ci` | sec:13.8 | eg:13.37–13.39 | 6 | CI and automated docs |
| 9 | `part-09-rmarkdown-and-dvc` | sec:13.9–13.10 | eg:13.41, 13.44, 13.45 | 7 | R Markdown and DVC |
| 10 | `part-10-collaboration-audits-outlook` | sec:13.11–13.16 | eg:13.47, 13.50, 13.55 | 8 | Cloud, audits, pitfalls, future |

## Packaging checklist

- [ ] Sync slides from each `transcript.md` (`transcript_to_outline.py`)
- [ ] Build `clip.pptx` and chapter deck
- [ ] Run `verify_clip.py` per part
- [ ] TTS + `video/clip.mp4` via `narrate_clips.sh`
- [ ] `build_site.py lectures/ --chapter 13`

## Split notes

- **Section 13.1** split across parts 01–02 (definitions vs challenges).
- **Section 13.4** split across parts 04–05 (FAIR vs quality); provenance (sec:13.5) joined with quality in part 05.
- Sections **13.11–13.16** merged into part 10 (collaboration, audits, challenges, climate case study, outlook) to keep a 10-part path.
- Many manuscript examples (e.g., 13.16–13.17, 13.19–13.23, 13.30–13.33, 13.40, 13.42–13.43, 13.46, 13.48–13.49, 13.51–13.54, 13.56–13.60) are omitted from featured slides; modules remain browsable on the site.
- Distinguish Ch.8/Ch.12 operational docs/lineage from research-facing reproducibility here.
