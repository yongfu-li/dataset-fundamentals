# Chapter 10 — Synthetic Data Generation (author notes)

Canonical metadata lives in [`../chapter.json`](../chapter.json). This page mirrors the chapter learning path for authoring and packaging.

## Chapter objectives

1. Define synthetic data and explain its benefits for privacy, scarcity, and augmentation
2. Anticipate validation gaps, bias amplification, and diversity limits in synthetic datasets
3. Apply statistical methods including distribution fitting, Monte Carlo, bootstrapping, and regression
4. Explain GAN architecture, training dynamics, variants, evaluation metrics, and deepfake risks
5. Describe LLM-based synthesis for text, labels, and structured records with audit gates
6. Recognize synthetic-data use cases in healthcare, finance, autonomy, and cybersecurity
7. Evaluate ethical risks including privacy claims, over-reliance, quality, and regulatory compliance
8. Follow best practices for transparency, validation, and oversight before deployment

## Part sequence

| # | Part id | Section | Examples | Est. min | Focus |
|---|---------|---------|----------|----------|-------|
| 1 | `part-01-introduction-to-synthetic-data` | sec:10.1 | eg:10.1–10.3 | 7 | Definition and benefits |
| 2 | `part-02-challenges-of-synthetic-data` | sec:10.2 | eg:10.4, 10.5 | 6 | Validation, bias, diversity |
| 3 | `part-03-statistical-distributions-and-simulation` | sec:10.3.1 | eg:10.6, 10.7 | 7 | Distributions, Monte Carlo |
| 4 | `part-04-correlation-bootstrapping-regression` | sec:10.3.2–10.3.4 | eg:10.8–10.10 | 7 | Joint data, bootstrap, regression |
| 5 | `part-05-gan-architecture-and-training` | sec:10.4.1–10.4.2 | — | 7 | GAN basics and training |
| 6 | `part-06-gan-variants-evaluation-ethics` | sec:10.4.3–10.4.7 | eg:10.11 | 7 | Variants, metrics, deepfakes |
| 7 | `part-07-llms-for-synthetic-data` | sec:10.5 | — | 6 | LLM text/label synthesis |
| 8 | `part-08-use-cases-healthcare-finance` | sec:10.6.2–10.6.3 | eg:10.12–10.14 | 7 | Medical and fraud use cases |
| 9 | `part-09-use-cases-autonomy-security` | sec:10.6.4–10.6.6 | eg:10.15–10.17 | 7 | AV, CV augmentation, security |
| 10 | `part-10-ethics-and-regulation` | sec:10.7 | eg:10.18, 10.19, 10.22, 10.23 | 8 | Privacy, risks, regulation |

## Packaging checklist

- [ ] Sync slides from each `transcript.md` (`transcript_to_outline.py`)
- [ ] Build `clip.pptx` and chapter deck
- [ ] Run `verify_clip.py` per part
- [ ] TTS + `video/clip.mp4` via `narrate_clips.sh`
- [ ] `build_site.py lectures/ --chapter 10`

## Split notes

- **Section 10.3** split across parts 03–04 (simulation vs correlation/bootstrap/regression).
- **Section 10.4** split across parts 05–06 (architecture/training vs variants/ethics).
- **Section 10.6** split across parts 08–09 (healthcare/finance vs autonomy/security).
- Examples 10.6–10.10 have runnable Python modules; others are conceptual (bullets-only slides).
