# dataset-fundamentals

[![GitHub](https://img.shields.io/badge/GitHub-dataset--fundamentals-181717?logo=github)](https://github.com/yongfu-li/dataset-fundamentals)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-green?logo=creativecommons&logoColor=white)](LICENSE)
[![Role](https://img.shields.io/badge/role-Git%20submodule-orange)](https://github.com/yongfu-li/Fundamental-of-Dataset-Collection-Annotation-and-Management)
[![Parent](https://img.shields.io/badge/parent-book%20monorepo%20(private)-0A9EDC)](https://github.com/yongfu-li/Fundamental-of-Dataset-Collection-Annotation-and-Management)
[![Site](https://img.shields.io/badge/site-GitHub%20Pages-222?logo=githubpages)](https://yongfu-li.github.io/dataset-fundamentals/)
[![Domain](https://img.shields.io/badge/domain-teaching%20%2F%20open%20lectures-purple)](https://yongfu-li.github.io/dataset-fundamentals/)

**dataset-fundamentals** is the open learning platform for *Fundamental of Dataset: Collection, Annotation, and Management*. It is consumed as a **Git submodule** at `lectures/` inside the private book monorepo, and published as a static site on [GitHub Pages](https://yongfu-li.github.io/dataset-fundamentals/).

Readers and students usually **browse the site** or clone this public repo. Authors edit content here (or via the parent monorepo checkout), rebuild the HTML site, and push; the parent repo only stores a pinned submodule commit.

## Table of contents
- [Contents](#contents)
- [Browse or clone](#browse-or-clone)
- [Consume from the parent](#consume-from-the-parent)
- [Author: publish or update](#author-publish-or-update)
- [Chapter landings](#chapter-landings)
- [Interactive tools](#interactive-tools)
- [License](#license)

## Contents

```text
dataset-fundamentals/
├── index.html           # course home (generated)
├── chapter1/ … chapter13/
│   ├── index.html       # chapter learning path
│   ├── chapter.json
│   ├── slides.md / .pptx / .pdf
│   └── parts/part-NN-slug/
├── tools/               # browser labs
├── project/             # guided release kit
├── modules/             # packaged examples
├── community/
├── site.json            # GA4 and site metadata
├── LICENSE              # CC BY 4.0
└── README.md
```

Videos are optional media under each part’s `video/` folder. Generate with the `book-slides` TTS/ffmpeg helpers in the parent monorepo when ready.

## Browse or clone

- **Site:** [https://yongfu-li.github.io/dataset-fundamentals/](https://yongfu-li.github.io/dataset-fundamentals/)
- **Clone this repo alone:**

```bash
git clone https://github.com/yongfu-li/dataset-fundamentals.git
cd dataset-fundamentals
```

Open `index.html` locally, or use GitHub Pages above.

## Consume from the parent

From a clone of the **private** book monorepo (lists this repo in `.gitmodules`):

```bash
git clone --recurse-submodules \
  git@github.com:yongfu-li/Fundamental-of-Dataset-Collection-Annotation-and-Management.git
# or, if already cloned without submodules:
git submodule update --init --recursive

ls lectures
cat lectures/LICENSE
```

Working tree path in the parent: `lectures/` → this repository at a pinned commit.

## Author: publish or update

Edit and rebuild inside the parent monorepo (recommended) or in a standalone clone of this repo.

```bash
# from the private parent checkout
cd lectures
# … edit chapter sources / tools …
# rebuild HTML from the parent:
cd ..
python .cursor/skills/book-slides/scripts/build_site.py lectures/

cd lectures
git add -A
git commit -m "Update lecture site"
git push origin main
```

Then bump the pin in the **parent**:

```bash
cd /path/to/Fundamental-of-Dataset-Collection-Annotation-and-Management
git add lectures
git commit -m "Bump lectures submodule"
git push
```

## Chapter landings

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

## Interactive tools

By workflow: [Sampling](tools/sampling/index.html) → [Consent & PII scrubber](tools/pii-scrubber/index.html) · [De-id risk](tools/deid-risk/index.html) · [Ethical decision](tools/ethical-decision/index.html) → [Image annotation](tools/image-annotation/index.html) · [Text annotation](tools/text-annotation/index.html) · [IAA](tools/iaa/index.html) → [Schema / format](tools/schema-format/index.html) · [EDA](tools/eda-dashboard/index.html) · [Cleaning](tools/cleaning/index.html) · [Scaling / encoding](tools/scaling-encoding/index.html) · [Class imbalance](tools/class-imbalance/index.html) · [Train/test split](tools/train-test-split/index.html) → [Representation](tools/representation/index.html) · [Fairness](tools/fairness/index.html) → [Datasheet](tools/datasheet/index.html) · [Metadata](tools/metadata-checker/index.html) · [Version timeline](tools/version-timeline/index.html). See [all tools](tools/index.html).

## License

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — see [`LICENSE`](LICENSE).

The Springer book manuscript in the private parent repository is **not** covered by this license.
