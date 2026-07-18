# Chapter 8 — Dataset Documentation and Version Control (author notes)

Canonical metadata lives in [`../chapter.json`](../chapter.json). This page mirrors the chapter learning path for authoring and packaging.

## Chapter objectives

1. Explain why dataset documentation and version control enable reproducibility and collaboration
2. Assemble metadata, data dictionaries, codebooks, provenance, and annotation notes
3. Apply documentation practices aligned with FAIR principles and structured formats
4. Compare Git, DVC, Quilt, DataHub, and Git LFS for dataset versioning
5. Automate dataset updates and pipeline stages with CI and DVC workflows
6. Follow best practices for commits, naming, collaboration, and access control
7. Recognize documentation and versioning patterns in research, industry, and clinical case studies
8. Anticipate advanced automation, lineage, privacy, and emerging versioning trends

## Part sequence

| # | Part id | Section | Examples | Est. min | Focus |
|---|---------|---------|----------|----------|-------|
| 1 | `part-01-introduction-to-documentation` | sec:8.1 | eg:8.1–8.3 | 7 | Why documentation and versioning matter |
| 2 | `part-02-metadata-and-data-dictionaries` | sec:8.2.1–8.2.3 | eg:8.5, 8.6, 8.8 | 7 | Metadata fields and data dictionaries |
| 3 | `part-03-codebooks-provenance-notes` | sec:8.2.4–8.2.6 | eg:8.9–8.11 | 7 | Codebooks, provenance, annotations |
| 4 | `part-04-creating-effective-documentation` | sec:8.3 | eg:8.13, 8.15, 8.19 | 8 | Practices, tools, FAIR, templates |
| 5 | `part-05-version-control-basics` | sec:8.4.1–8.4.2 | eg:8.20, 8.21 | 7 | Git and DVC foundations |
| 6 | `part-06-version-control-tools` | sec:8.4.3–8.4.6 | eg:8.22–8.24 | 7 | Quilt, DataHub, Git LFS |
| 7 | `part-07-dvc-pipelines-and-automation` | sec:8.4.7–8.4.8 | eg:8.25, 8.28, 8.29 | 8 | Pipelines, CI, live DVC demos |
| 8 | `part-08-best-practices` | sec:8.5 | eg:8.30, 8.33, 8.34 | 7 | Documentation and VC habits |
| 9 | `part-09-case-studies` | sec:8.6 | eg:8.38–8.40 | 6 | Climate, maintenance, clinical |
| 10 | `part-10-advanced-and-emerging` | sec:8.7–8.8 | eg:8.41, 8.43, 8.47 | 7 | Automation, lineage, privacy, trends |

## Packaging checklist

- [ ] Sync slides from each `transcript.md` (`transcript_to_outline.py`)
- [ ] Build `clip.pptx` and chapter deck
- [ ] Run `verify_clip.py` per part
- [ ] TTS + `video/clip.mp4` via `narrate_clips.sh`
- [ ] `build_site.py lectures/ --chapter 8`

## Split notes

- **Section 8.2** is split across parts 02–03 (metadata/dictionaries vs codebooks/provenance/notes).
- **Section 8.4** is split across parts 05–07 (basics, tools, automation).
- **Sections 8.7–8.8** are merged into part 10 as a single closing unit.
- Several examples have `lstlisting` blocks or module data files; sync should emit text `code` slides where available.
