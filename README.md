# Dataset Fundamentals Learning Hub (`yongfu-li/dataset-fundamentals`)

[![Live Learning Hub](https://img.shields.io/badge/Live%20Platform-yongfu--li.github.io%2Fdataset--fundamentals-0f766e?style=flat&logo=githubpages)](https://yongfu-li.github.io/dataset-fundamentals/)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-green?logo=creativecommons&logoColor=white)](LICENSE)
[![Role](https://img.shields.io/badge/role-Open%20Learning%20Platform-orange)](https://yongfu-li.github.io/dataset-fundamentals/)
[![Parent](https://img.shields.io/badge/parent-book%20monorepo%20(private)-0A9EDC)](https://github.com/yongfu-li/Fundamental-of-Dataset-Collection-Annotation-and-Management)

An open-source, interactive curriculum and laboratory bridging theoretical dataset collection, human-in-the-loop annotation, data cleaning heuristics, algorithmic fairness, and reproducible open science. Grounded in 13 definitive textbook chapters, hands-on browser simulations, and verified data engineering research.

---

## 🚀 Live Platform Navigation

- **Learning Hub Portal**: [https://yongfu-li.github.io/dataset-fundamentals/](https://yongfu-li.github.io/dataset-fundamentals/)
- **Official Textbook Hub**: [https://yongfu-li.github.io/dataset-fundamentals/textbook/](https://yongfu-li.github.io/dataset-fundamentals/textbook/)
- **13 Curriculum Tracks**: [https://yongfu-li.github.io/dataset-fundamentals/tracks/](https://yongfu-li.github.io/dataset-fundamentals/tracks/)
- **Interactive Data Studio (21+ Labs)**: [https://yongfu-li.github.io/dataset-fundamentals/tools/](https://yongfu-li.github.io/dataset-fundamentals/tools/)
- **Certification & Exam**: [https://yongfu-li.github.io/dataset-fundamentals/quiz/](https://yongfu-li.github.io/dataset-fundamentals/quiz/)
- **Hall of Fame & Verification**: [https://yongfu-li.github.io/dataset-fundamentals/leaderboard/](https://yongfu-li.github.io/dataset-fundamentals/leaderboard/)
- **Dataset Architecture Glossary**: [https://yongfu-li.github.io/dataset-fundamentals/glossary/](https://yongfu-li.github.io/dataset-fundamentals/glossary/)

---

## 📚 Curriculum Structure

- **Track 1: Introduction to Datasets**: Records, attributes, data quality dimensions (accuracy, completeness, consistency, timeliness, relevance), and structure taxonomy.
- **Track 2: Fundamentals of Data Collection**: Sampling error mathematics, simple random vs. stratified vs. cluster sampling, power analysis, and population coverage.
- **Track 3: Ethics & Privacy in Data Work**: Regulatory compliance (GDPR, HIPAA, CCPA), $k$-anonymity, $l$-diversity, $t$-closeness, and differential privacy ($\epsilon, \delta$).
- **Track 4: Data Annotation & Agreement**: Human-in-the-loop annotation pipelines, multi-label bounding boxes, and Inter-Annotator Agreement (Cohen's $\kappa$, Fleiss' $\kappa$, Krippendorff's $\alpha$).
- **Track 5: Data Cleaning & Preprocessing**: Missingness mechanisms (MCAR, MAR, MNAR), outlier detection (Z-scores, IQR), feature scaling, and class imbalance (SMOTE).
- **Track 6: Exploratory Data Analysis (EDA)**: Univariate/multivariate inspection, covariance structures, Pearson/Spearman correlation matrices, PCA dimensionality reduction, and Simpson's Paradox.
- **Track 7: Dataset Bias and Fairness**: Representation vs. historical bias, Disparate Impact Ratio (80% rule), Equalized Odds, and Demographic Parity frontiers.
- **Track 8: Dataset Documentation & Versioning**: Gebru et al. Datasheets for Datasets, semantic versioning, and Data Version Control (DVC).
- **Track 9: Advanced Data Collection Techniques**: Web crawling ethics, Robots.txt compliance, API rate limits, sliding window backoff, and IoT telemetry streams.
- **Track 10: Synthetic Data Generation**: Rule-based media augmentation, text paraphrasing, Generative Adversarial Networks (GANs), and Diffusion models.
- **Track 11: Advanced Annotation Techniques**: Active learning query heuristics (uncertainty sampling, QBC), weak supervision (Snorkel), and label aggregation under noisy workers.
- **Track 12: Scalable Data Management**: CAP theorem, Columnar storage (Apache Parquet, Arrow, ORC), partitioning, and cloud data lakes (S3).
- **Track 13: Reproducibility & Open Science**: FAIR data principles, open science licensing (Creative Commons CC BY / CC0, ODC-By), and persistent identifiers (DOIs).

---

## 🛠️ Local Development & Build

### 1. Preview Local Server
```bash
# In the parent monorepo:
mkdocs serve
# Server will start at http://127.0.0.1:8000
```

### 2. Build Static Site
```bash
mkdocs build --strict
# Compiles into site/
```

---

## 🤝 Role in the Course

| Repo | Visibility | Responsibility |
|------|------------|----------------|
| **Parent Monorepo** ([`Fundamental-of-Dataset-...`](https://github.com/yongfu-li/Fundamental-of-Dataset-Collection-Annotation-and-Management)) | **Private** | Springer `svmono` manuscript (`author/`), figures (`images/`), build tooling |
| **This Repo** ([`dataset-fundamentals`](https://github.com/yongfu-li/dataset-fundamentals)) | **Public** | Web platform, interactive labs, video lectures, and GitHub Pages host |

---

## 📄 License

- Public teaching platform and interactive tools: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — see [`LICENSE`](LICENSE).
- The Springer Nature book manuscript in the private parent repository is **not** covered by this license.
