# Chapter 11 — Advanced Annotation Techniques (author notes)

Canonical metadata lives in [`../chapter.json`](../chapter.json). This page mirrors the chapter learning path for authoring and packaging.

## Chapter objectives

1. Contrast active learning, weak supervision, self-supervised learning, and hybrid crowd–expert pipelines
2. Explain the active-learning loop and common query strategies such as uncertainty, margin, and entropy sampling
3. Apply diversity, cost-sensitive, and model-in-the-loop techniques when selecting items to label
4. Recognize active-learning use cases in NLP, driving perception, and medical imaging
5. Define weak supervision and programmatic labeling with labeling functions and Snorkel-style aggregation
6. Describe self-supervised pretext tasks and contrastive pretraining before fine-tuning
7. Compare crowdsourcing and expert annotation on cost, quality, and domain risk
8. Design hybrid pipelines that combine crowd scale with expert gold sets and hard-case routing

## Part sequence

| # | Part id | Section | Examples | Est. min | Focus |
|---|---------|---------|----------|----------|-------|
| 1 | `part-01-from-fundamentals-to-advanced` | sec:11.1 | — | 6 | Four-strategy overview |
| 2 | `part-02-active-learning-basics` | sec:11.2 | eg:11.1–11.4 | 7 | Loop and query strategies |
| 3 | `part-03-active-learning-techniques` | sec:11.3 | eg:11.5–11.8 | 7 | Diversity, cost, model-in-loop |
| 4 | `part-04-active-learning-applications` | sec:11.4 | eg:11.9, 11.10, 11.12, 11.13 | 7 | NLP, AV, medical queues |
| 5 | `part-05-weak-supervision-intro` | sec:11.5 | — | 7 | Weak labels and sources |
| 6 | `part-06-weak-supervision-techniques` | sec:11.6 | eg:11.14 | 7 | Snorkel, heuristics, data programming |
| 7 | `part-07-self-supervised-learning` | sec:11.7 | eg:11.15 | 7 | Pretext tasks and contrastive SSL |
| 8 | `part-08-ssl-applications` | sec:11.8 | — | 6 | Vision, NLP, time-series SSL |
| 9 | `part-09-crowd-versus-expert` | sec:11.9.1–11.9.3 | eg:11.16, 11.17, 11.20, 11.22 | 7 | Crowd vs expert trade-offs |
| 10 | `part-10-hybrid-annotation-pipelines` | sec:11.9.4–11.9.6 | eg:11.25, 11.26, 11.28, 11.29 | 8 | Hybrid staffing patterns |

## Packaging checklist

- [ ] Sync slides from each `transcript.md` (`transcript_to_outline.py`)
- [ ] Build `clip.pptx` and chapter deck
- [ ] Run `verify_clip.py` per part
- [ ] TTS + `video/clip.mp4` via `narrate_clips.sh`
- [ ] `build_site.py lectures/ --chapter 11`

## Split notes

- **Section 11.9** split across parts 09–10 (crowd vs expert vs hybrid pipelines).
- Examples are primarily conceptual (no `lstlisting` in the manuscript); expect bullets-only example slides unless module data files sync to `code` slides.
- Featured examples omit some chapter examples (e.g., 11.11, 11.18–11.19, 11.21, 11.23–11.24, 11.27, 11.30–11.31) to keep clips within the 3–8 minute target; modules remain browsable on the site.
