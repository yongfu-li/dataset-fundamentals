# Lectures

Companion lecture parts, slides, and quizzes for *Fundamental of Dataset: Collection, Annotation, and Management*.

Each chapter is a **learning path**: short video clips with bridge descriptions between them, per-clip quizzes, and a downloadable full PPT deck.

**Interactive tools:** [Sampling tool](tools/sampling/index.html) (Ch.2) · [Image annotation](tools/image-annotation/index.html) (Ch.4) · [Text annotation](tools/text-annotation/index.html) (Ch.4) · [IAA calculator](tools/iaa/index.html) (Ch.4) · [Cleaning workbench](tools/cleaning/index.html) (Ch.5) · [EDA dashboard](tools/eda-dashboard/index.html) (Ch.1/6) · [Bias & fairness meter](tools/fairness/index.html) (Ch.7) · [Representation visualizer](tools/representation/index.html) (Ch.7) · [Datasheet builder](tools/datasheet/index.html) (Ch.8) · [Metadata checker](tools/metadata-checker/index.html) (Ch.8) · [Version timeline](tools/version-timeline/index.html) (Ch.8).

| Chapter | Landing |
|---------|---------|
| 1 — Introduction to Datasets | [chapter1](chapter1/pages/index.md) |
| 2 — Fundamentals of Data Collection | [chapter2](chapter2/pages/index.md) |
| 3 — Ethics and Privacy in Data Work | [chapter3](chapter3/pages/index.md) |
| 4 — Data Annotation | [chapter4](chapter4/pages/index.md) |
| 5 — Data Cleaning and Preprocessing | [chapter5](chapter5/pages/index.md) |
| 6 — Exploratory Data Analysis (EDA) | [chapter6](chapter6/pages/index.md) |
| 7 — Dataset Bias and Fairness | [chapter7](chapter7/pages/index.md) |
| 8 — Dataset Documentation and Version Control | [chapter8](chapter8/pages/index.md) |
| 9 — Advanced Data Collection Techniques | [chapter9](chapter9/pages/index.md) |
| 10 — Synthetic Data Generation | [chapter10](chapter10/pages/index.md) |
| 11 — Advanced Annotation Techniques | [chapter11](chapter11/pages/index.md) |
| 12 — Scalable Data Management | [chapter12](chapter12/pages/index.md) |
| 13 — Reproducibility and Open Science | [chapter13](chapter13/pages/index.md) |

Videos are optional media under each part’s `video/` folder. Generate with the `book-slides` TTS/ffmpeg helpers when ready.

## Analytics (GA4)

1. Sign in at [analytics.google.com](https://analytics.google.com) as `liyongfu.sg@gmail.com`.
2. Create a GA4 property + **Web** data stream for your GitHub Pages URL.
3. Copy the Measurement ID (`G-XXXXXXXX`) into [`site.json`](site.json) → `ga4_measurement_id`.
4. Rebuild: `python .cursor/skills/book-slides/scripts/build_site.py lectures/`
5. In GA4 → Admin → Data streams → Enhanced measurement: leave engagement on; HTML5 lecture videos use custom events (`video_start`, `video_progress`, `video_complete`).

The dashboard is only at analytics.google.com (your login). Readers see a short footer note when GA4 is enabled—no admin page on this site.
