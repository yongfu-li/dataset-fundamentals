---
marp: true
title: Chapter 10 — Synthetic Data Generation
paginate: true
---

# Chapter 10 — Introduction to synthetic data

Chapters 2 through 9 covered how real records are collected, labeled, cleaned, documented, and scaled

---

## Learning objectives
- Scalability benefits that motivate synthetic generation

---

## Definition and analytical value
- Patterns, or structure of real data
- The primary requirement is analytical value
- Synthetic outputs may still miss some real-world noise and edge complexity

---

## Example 10.1 — Cross-Modal Fidelity in Synthetic Data
- Example 10.1 — hands-on module
- Example 10.1 contrasts fidelity across modalities
- Trends seen in real markets
- The same generator cannot be judged by one universal rule; fidelity is modality-specific
- Explore the chapter example module
- View files: `modules/chapter10/example1/`

---

## Generation methods at a glance
- Simulation engines
- Statistical approaches draw from fitted distributions or Monte Carlo models
- Machine learning methods learn an underlying data distribution and emit new samples that
- The method choice depends on modality, privacy goals, and validation capacity

---

## Example 10.2 — Synthetic Patient Records for Privacy
- Example 10.2 — hands-on module
- Example 10.2 shows privacy-preserving medical records
- A healthcare provider can generate synthetic patient tables that mimic real diagnostic and
- This supports research and model development under regulations such as HIPAA and GDPR
- Explore the chapter example module
- View files: `modules/chapter10/example2/`

---

## Cost efficiency and scalability
- Collecting real-world data
- Synthetic generation scales volume on demand and can fill underrepresented classes or edge
- Fraud detection and rare-disease modeling are common cases where synthetic volume helps

---

## Example 10.3 — Synthetic Driving Scenarios for AV Training
- Example 10.3 — hands-on module
- Example 10.3 illustrates synthetic autonomous-driving scenarios
- Simulations can produce varied weather, lighting
- Synthetic clips let perception and planning stacks encounter diverse conditions before
- Explore the chapter example module
- View files: `modules/chapter10/example3/`

---

## Takeaways
- Synthetic data is algorithmically generated yet must preserve analytical structure
- Fidelity requirements differ by modality
- Key benefits include privacy preservation, lower collection cost
- Benefits do not remove the need for validation, which the next part addresses

---

## Next
- Complete the quiz for this part
- Overfitting or lack of diversity when models train only on synthetic copies

---

# Chapter 10 — Challenges of synthetic data

Synthetic data promises scale and privacy, but generated rows are not automatically trustworthy

---

## Learning objectives
- By the end of this part

---

## Validation and generalization gaps
- A central challenge is proving that synthetic data represents the phenomena it is meant to
- Generated samples may match aggregate statistics yet miss subtle structure
- Models trained only on synthetic data may look strong in controlled tests yet fail when

---

## Example 10.4 — Face-Recognition Validation Gap
- Example 10.4 — hands-on module
- Example 10.4 highlights a validation gap for synthetic faces
- Images may appear realistic yet lack lighting changes, occlusions
- A face-recognition model trained on such data can underperform in production
- Explore the chapter example module
- View files: `modules/chapter10/example4/`

---

## Generalization beyond the generator
- Synthetic data must generalize to conditions the generator never saw
- Real environments change unpredictably, markets shift, sensors drift
- When synthetic corpora oversimplify those dynamics

---

## Potential biases from source data
- Because generators learn from existing datasets or predefined models
- Mitigation matters

---

## Example 10.5 — Demographic Bias in GAN Training Data
- Example 10.5 — hands-on module
- Example 10.5 shows how biased source data propagates through a generative adversarial
- If training images underrepresent certain groups
- In sensitive domains such as healthcare or hiring
- Explore the chapter example module
- View files: `modules/chapter10/example5/`

---

## Overfitting and lack of diversity
- Machine-learning generators can overfit training data and emit homogeneous samples
- When synthetic sets omit edge cases or rare events
- Diversity is not optional

---

## Takeaways
- Synthetic data requires explicit validation against real benchmarks
- Source bias, mode collapse, and homogeneity can all undermine utility
- Teams should treat challenges here as design constraints before choosing statistical

---

## Next
- Complete the quiz for this part
- Monte Carlo simulation for uncertain outcomes such as asset returns

---

# Chapter 10 — Statistical distributions and simulation

Before deep generative models, teams synthesized data with explicit statistical assumptions

---

## Learning objectives
- By the end of this part

---

## Statistical methods overview
- Statistical synthesis uses mathematical models to simulate data that shares properties
- Common tools include distribution fitting, Monte Carlo draws, bootstrapping
- The main challenge is matching correlations and trends, not just marginal distributions

---

## Data distribution modeling
- Distribution modeling fits a known law
- Draw synthetic values from the same family
- This works when the assumed distribution matches the domain

---

## Example 10.6 — Normal-Distribution Sampling Sketch
- Example 10.6 — hands-on module
- Example 10.6 sketches sampling from a fitted normal distribution
- If real values follow a mean of fifty and standard deviation of ten
- Explore the chapter example module
- View files: `modules/chapter10/example6/`

---

## Example 10.6 — listing

```
"""Example 10.6 — sample synthetic points from a fitted normal distribution."""

from __future__ import annotations

import random
from statistics import fmean, pstdev


def main() -> None:
    """Draw samples from N(50, 10^2) and compare sample moments to the target."""
    random.seed(10)
    mean, sd, n = 50.0, 10.0, 1000
    samples = [random.gauss(mean, sd) for _ in range(n)]
    print(f"Target distribution: N(mean={mean}, sd={sd})")
    print(f"Sample size: {n}")
    print(f"Sample mean: {fmean(samples):.2f}")
    print(f"Sample sd:   {pstdev(samples):.2f}")
    print(f"First 5 draws: {[round(x, 2) for x in samples[:5]]}")
    print()
    print("Synthetic points inherit the fitted moments; they do not copy real rows.")
```

---

## Monte Carlo simulation
- Monte Carlo methods repeat random sampling and simulation when the underlying process is
- Many draws are averaged or aggregated to estimate outcomes under uncertainty
- Finance, engineering

---

## Example 10.7 — Monte Carlo Asset-Return Simulation
- Example 10.7 — hands-on module
- Example 10.7 applies Monte Carlo simulation to financial returns
- Synthetic return paths incorporate risk factors and market conditions
- Explore the chapter example module
- View files: `modules/chapter10/example7/`

---

## Example 10.7 — listing

```
"""Example 10.7 — Monte Carlo simulation of asset returns under uncertainty."""

from __future__ import annotations

import random
from statistics import fmean, pstdev


def main() -> None:
    """Simulate many one-period returns and summarize the resulting distribution."""
    random.seed(10)
    # Annualized mean return and volatility (illustrative).
    mu, sigma = 0.08, 0.20
    n_paths = 5_000
    returns = [random.gauss(mu, sigma) for _ in range(n_paths)]
    print(f"Assumed return model: N(mu={mu:.0%}, sigma={sigma:.0%})")
    print(f"Monte Carlo paths: {n_paths}")
    print(f"Mean simulated return: {fmean(returns):.2%}")
    print(f"Sd of simulated return: {pstdev(returns):.2%}")
    print(f"P(return < 0): {sum(r < 0 for r in returns) / n_paths:.1%}")
```

---

## Controlled simulation benchmarks
- Some releases, such as device-model sweeps, are synthetic by construction
- Quality assurance then documents settings and reproducibility rather than detecting
- That differs from privacy-motivated tabular synthesis but still produces shareable

---

## Takeaways
- Parametric sampling copies moments from fitted laws
- Both require explicit assumptions and validation against real benchmarks
- Univariate methods ignore variable relationships

---

## Next
- Complete the quiz for this part
- Regression-based projection for structured synthetic rows

---

# Chapter 10 — Correlation, bootstrapping, and regression

Univariate sampling ignores relationships between variables

---

## Learning objectives
- By the end of this part

---

## Correlations and dependencies
- Real datasets rarely treat columns as independent
- Income and age co-vary; asset returns co-move; vitals correlate across visits
- Useful synthetic tabular data must replicate these joint relationships
- Multivariate distributions and copulas model dependence structures

---

## Example 10.8 — Income-Age Joint Distribution
- Example 10.8 — hands-on module
- Example 10.8 preserves correlations between income and age
- Analysts model the joint distribution so synthetic rows keep segment-level relationships
- Explore the chapter example module
- View files: `modules/chapter10/example8/`

---

## Example 10.8 — listing

```
"""Example 10.8 — preserve the joint relationship between income and age."""

from __future__ import annotations

import math
import random


def pearson(xs: list[float], ys: list[float]) -> float:
    """Return Pearson's r for two equal-length sequences."""
    n = len(xs)
    mx, my = sum(xs) / n, sum(ys) / n
    cov = sum((x - mx) * (y - my) for x, y in zip(xs, ys))
    sx = math.sqrt(sum((x - mx) ** 2 for x in xs))
    sy = math.sqrt(sum((y - my) ** 2 for y in ys))
    return cov / (sx * sy)


def main() -> None:
    """Generate synthetic (age, income) pairs that keep a positive correlation."""
```

---

## Copulas for complex dependence
- Copulas separate marginal behavior from dependence structure
- After fitting dependence

---

## Bootstrapping from small samples
- Bootstrapping resamples an original dataset with replacement to create larger synthetic
- Some real rows repeat; others are omitted
- Repeating the process yields multiple bootstrap datasets for training or uncertainty

---

## Example 10.9 — Bootstrapping Purchase Histories
- Example 10.9 — hands-on module
- Example 10.9 bootstraps a small customer purchase-history sample into a larger training
- This supports model training when raw logs are limited
- Explore the chapter example module
- View files: `modules/chapter10/example9/`

---

## Example 10.9 — listing

```
"""Example 10.9 — bootstrap larger synthetic purchase histories from a small sample."""

from __future__ import annotations

import random
from collections import Counter
from statistics import fmean


def main() -> None:
    """Resample a tiny purchase-amount sample with replacement."""
    random.seed(10)
    original = [12.5, 40.0, 8.0, 95.0, 22.0, 15.5, 60.0, 33.0]
    n_boot = 40
    synthetic = [random.choice(original) for _ in range(n_boot)]
    counts = Counter(synthetic)
    print(f"Original sample (n={len(original)}): {original}")
    print(f"Bootstrap synthetic sample (n={n_boot})")
    print(f"Original mean:  ${fmean(original):.2f}")
    print(f"Synthetic mean: ${fmean(synthetic):.2f}")
```

---

## Regression-based synthetic data
- Regression models fit relationships between predictors and an outcome
- Economics, healthcare

---

## Example 10.10 — Regression-Based GDP Projection
- Example 10.10 — hands-on module
- Government spending
- The regression preserves structured relationships among indicators rather than independent
- Explore the chapter example module
- View files: `modules/chapter10/example10/`

---

## Example 10.10 — listing

```
"""Example 10.10 — generate synthetic GDP growth from a fitted linear regression."""

from __future__ import annotations

import random


def fit_simple_regression(
    xs: list[float], ys: list[float]
) -> tuple[float, float, float]:
    """Fit Y = b0 + b1 X and return (b0, b1, residual_sd)."""
    n = len(xs)
    mx, my = sum(xs) / n, sum(ys) / n
    b1 = sum((x - mx) * (y - my) for x, y in zip(xs, ys)) / sum((x - mx) ** 2 for x in xs)
    b0 = my - b1 * mx
    residuals = [y - (b0 + b1 * x) for x, y in zip(xs, ys)]
    residual_sd = (sum(r * r for r in residuals) / n) ** 0.5
    return b0, b1, residual_sd


```

---

## Takeaways
- Realistic tabular synthesis requires joint structure, not independent marginals
- Bootstrapping expands small real samples while preserving variability
- Statistical methods set the foundation before generative adversarial networks learn

---

## Next
- Complete the quiz for this part
- Convergence challenges that affect synthetic realism in generative adversarial networks

---

# Chapter 10 — GAN architecture and training

Statistical methods assume known forms; generative adversarial networks learn complex structure from data

---

## Learning objectives
- By the end of this part

---

## Generative adversarial network overview
- A generative adversarial network pairs two neural networks trained simultaneously in a
- The generator creates synthetic samples from random noise
- Other modalities

---

## The generator
- The generator maps latent noise to synthetic data points
- Its objective is to produce samples that appear authentic to humans or downstream
- Early training yields poor fakes

---

## The discriminator
- The discriminator acts as a binary classifier scoring whether each input is real or
- It trains on batches of real records and generator outputs
- If the discriminator becomes too strong or too weak relative to the generator

---

## Adversarial minimax training
- Training alternates discriminator and generator updates
- First the discriminator learns to separate real and fake batches
- Then the generator updates to fool the discriminator
- Careful balance of learning rates and capacity is required

---

## Loss functions
- The common choice is binary cross-entropy loss
- The discriminator minimizes classification error on real versus fake labels
- The generator minimizes the discriminator’s ability to reject fakes
- Loss design directly affects stability and sample quality

---

## Convergence challenges
- Generative adversarial network training is notoriously unstable
- Mode collapse occurs when the generator repeats a narrow set of outputs instead of
- Vanishing gradients, imbalanced network capacity
- Teams monitor samples, losses, and diversity metrics throughout training

---

## Takeaways
- Generative adversarial networks learn synthesis through adversarial feedback rather than
- Success depends on balanced generator–discriminator training and appropriate loss
- Architectural variants, evaluation metrics, and ethical risks are covered in the next part

---

## Next
- Complete the quiz for this part
- The next part surveys conditional generative adversarial networks, CycleGANs

---

# Chapter 10 — GAN variants, evaluation, and ethics

Basic generative adversarial networks are only the starting point

---

## Learning objectives
- By the end of this part, learners should be able to contrast conditional, cycle-consistent

---

## Conditional GANs
- Conditional generative adversarial networks feed class labels or other attributes into
- The generator then produces samples that satisfy specified constraints
- This supports supervised augmentation and controlled image translation

---

## Example 10.11 — Conditional GAN Class Labels
- Example 10.11 — hands-on module
- Example 10.11 shows a conditional generative adversarial network generating cats
- Label conditioning makes the output useful for image-to-image tasks and class-balanced
- Explore the chapter example module
- View files: `modules/chapter10/example11/`

---

## CycleGAN and StyleGAN
- CycleGAN translates between image domains without paired training examples
- Enabling photorealistic synthesis with adjustable coarse and fine attributes

---

## Advantages and limitations
- Generative adversarial networks excel at realistic image, text
- Limitations include training instability, heavy compute for high resolution
- Human review and statistical metrics both remain necessary

---

## Evaluation metrics
- Because synthetic sets lack per-row ground truth, teams use proxy metrics
- Inception Score measures classifiability and diversity of generated images
- Fréchet Inception Distance compares feature distributions of real and generated images
- Precision and recall adaptations assess fidelity versus coverage of the real manifold

---

## Prominent use cases
- Support creative generation
- In security and media

---

## Ethical challenges and deepfakes
- Realistic generators enable deepfakes
- The same tools can produce fraudulent documents or misleading news
- These risks connect to the chapter-wide ethics agenda, privacy, bias amplification

---

## Takeaways
- Variant architectures add control, unpaired translation
- Metrics such as Inception Score and Fréchet Inception Distance help compare generators but
- Deepfakes illustrate why governance and provenance matter alongside model quality

---

## Next
- Complete the quiz for this part
- The next part explains how large language models generate synthetic text, labels

---

# Chapter 10 — LLMs for synthetic text and labels

Images and tabular rows are not the only synthesis targets

---

## Learning objectives
- Bias risks that demand screening and audit before training use

---

## Large language models as synthesizers
- Large language models offer a practical route for synthetic text, labels
- Language-model synthesis typically conditions a pretrained model on prompts
- This supports low-resource natural language processing, instruction tuning

---

## Common workflows
- Teams paraphrase existing sentences
- The same pattern appears in programmatic weak supervision
- Cheap generation is attractive when real text is scarce

---

## Hallucination and factual risk
- Language models can invent facts
- For regulated or clinical text
- Synthetic corpora therefore need factual and schema checks

---

## Memorization and privacy leakage
- Pretrained models may reproduce memorized training snippets
- Synthetic text is not automatically privacy-safe
- Releases must be screened for identifiers and linkage risk
- Privacy engineering controls from earlier chapters still apply

---

## Bias and representation skew
- Language models inherit social and demographic biases present in pretraining corpora
- Synthetic labels or dialogues can over-represent dominant viewpoints or stereotyped roles
- Fairness audits should cover both source seeds and generated cohorts

---

## Validation gates
- Retain human oversight for high-stakes labels
- Annotation quality practices from earlier chapters extend directly to synthetic text

---

## Takeaways
- Large language models enable fast text and label synthesis through prompting rather than
- Low cost does not imply low risk, hallucination, memorization
- Domain use cases in healthcare, finance, autonomy

---

## Next
- Complete the quiz for this part
- The next part walks privacy-preserving medical records, rare-disease simulation

---

# Chapter 10 — Use cases in healthcare and finance

Synthesis methods become concrete in domain settings

---

## Learning objectives
- By the end of this part

---

## Healthcare privacy barriers
- Healthcare data face strict privacy rules in the United States and Europe
- Real electronic health records often cannot be shared freely for external research or
- Provided re-identification risk is validated, not assumed away

---

## Example 10.12 — Privacy-Preserving Medical Records
- Example 10.12 — hands-on module
- Visit counts
- External researchers prototype models without accessing raw patient files
- Explore the chapter example module
- View files: `modules/chapter10/example12/`

---

## Simulating rare conditions
- Low-prevalence diseases yield too few real cases for robust machine learning
- Synthetic generation can augment rare oncology or genetic presentations while preserving
- The goal is better classifiers and simulators

---

## Example 10.13 — Rare-Disease Case Simulation
- Example 10.13 — hands-on module
- Example 10.13 shows an oncology team generating additional synthetic cases of a rare
- Explore the chapter example module
- View files: `modules/chapter10/example13/`

---

## Finance and confidentiality
- Financial institutions handle sensitive transactional data restricted by security and
- Synthetic data offers an alternative for fraud modeling and strategy simulation without

---

## Fraud detection with synthetic patterns
- Fraud is a rare-event problem: historical logs contain few positive examples
- Synthetic generators can emit diverse fraudulent sequences

---

## Example 10.14 — Synthetic Fraud Transaction Patterns
- Example 10.14 — hands-on module
- Example 10.14 describes a payments provider synthesizing card-not-present fraud sequences
- Detectors gain positive examples absent from historical logs
- Explore the chapter example module
- View files: `modules/chapter10/example14/`

---

## Trading simulations
- Edge conditions underrepresented in limited historical windows
- Synthetic finance use cases still require validation against live macro regimes before

---

## Takeaways
- Healthcare synthesis targets privacy-preserving sharing and rare-disease coverage
- Both domains demand regulatory awareness and fidelity checks beyond aggregate similarity
- Autonomy and cybersecurity use cases follow in the next part

---

## Next
- Complete the quiz for this part
- Ransomware attack simulation for cybersecurity training

---

# Chapter 10 — Use cases in autonomy and security

Healthcare and finance are not the only high-stakes domains

---

## Learning objectives
- By the end of this part

---

## Autonomous systems data demands
- Self-driving stacks require vast labeled coverage across weather, lighting, traffic
- Logging every dangerous or rare combination on public roads is impractical and costly
- Synthetic environments generate diverse driving clips for navigation, decision-making

---

## Example 10.15 — Pedestrian-in-Rain Edge Case
- Example 10.15 — hands-on module
- A combination rarely present in fleet logs
- Edge-case synthesis improves robustness where real collection is sparse or unsafe
- Explore the chapter example module
- View files: `modules/chapter10/example15/`

---

## Edge cases and safety
- Rare events, jaywalking, sudden obstacles, or unusual road geometry, may never appear
- Synthetic simulation supplies critical scenarios at scale
- Over-reliance remains a risk if generators omit plausible human actions

---

## Augmenting vision and other modalities
- Synthetic data augments sparse or imbalanced real sets across computer vision
- Rendered product photos under varied lighting and clutter diversify backgrounds beyond
- Modified or generated text expands corpora for sentiment and translation tasks

---

## Example 10.16 — Computer-Vision Augmentation
- Example 10.16 — hands-on module
- Example 10.16 shows a vision team rendering synthetic product photos with varied lighting
- Explore the chapter example module
- View files: `modules/chapter10/example16/`

---

## Cybersecurity and evolving threats
- Cyber threats evolve quickly; real attack logs are incomplete and sensitive
- Insider-threat models without waiting for live incidents

---

## Example 10.17 — Ransomware Attack Simulation
- Example 10.17 — hands-on module
- Example 10.17 describes a security operations center replaying synthetic ransomware
- Explore the chapter example module
- View files: `modules/chapter10/example17/`

---

## Takeaways
- Autonomy benefits from synthetic rare-scenario coverage
- All three require validation that synthetic behavior matches plausible real threats and

---

## Next
- Complete the quiz for this part
- Regulatory considerations

---

# Chapter 10 — Ethics and regulation

The chapter closes by asking when synthetic data truly protects people and when it creates new harms

---

## Learning objectives
- By the end of this part

---

## Generator-specific ethical tensions
- Synthetic data adds risks beyond general privacy law
- Documentation and validation are ethical obligations, not optional metadata

---

## Privacy claims and GDPR
- Organizations often treat synthetic tables as lower risk because direct identifiers are
- That claim fails if generators memorize rare individuals or adversaries can link rows back
- Under GDPR, whether synthetic outputs escape personal-data duties depends on residual

---

## Example 10.18 — GDPR-Compliant Synthetic Patients
- Example 10.18 — hands-on module
- Example 10.18 describes a cross-border research project sharing synthetic patient cohorts
- Wide sharing is justified only when unlinkability is demonstrated
- Explore the chapter example module
- View files: `modules/chapter10/example18/`

---

## Misuse and manipulated reporting
- Poorly generated or deliberately skewed synthetic sets can mislead stakeholders
- Leading to harmful deployment in banking or healthcare

---

## Example 10.19 — Manipulated Performance Reporting
- Example 10.19 — hands-on module
- Downstream banks discover failure on live portfolios
- Explore the chapter example module
- View files: `modules/chapter10/example19/`

---

## Over-reliance and quality concerns
- Over-reliance treats synthetic corpora as complete substitutes for real-world evidence
- Autonomy planners trained mostly on synthetic intersections may fail when pedestrians
- Low-quality tabular generators can emit impossible joint values that teach spurious rules

---

## Bias amplification
- Generators trained on skewed historical data can emit apparently diverse yet
- Amplifying unfair outcomes in high-stakes decisions

---

## Example 10.22 — Bias Amplification in Hiring Data
- Example 10.22 — hands-on module
- Example 10.22 illustrates synthetic resumes from historically male-dominated hiring data
- Explore the chapter example module
- View files: `modules/chapter10/example22/`

---

## Mitigation: transparency, validation, oversight
- Ethics review or automated fairness checks
- Provenance and retention policies should support accountability when regulators or data

---

## Example 10.23 — Synthetic Data Under GDPR Rights
- Example 10.23 — hands-on module
- Pushing teams to document provenance and retention
- Explore the chapter example module
- View files: `modules/chapter10/example23/`

---

## Takeaways
- Synthetic data is a privacy tool only when validation shows acceptable re-identification
- Misuse, over-reliance
- Document generators, validate against real benchmarks

---

## Chapter complete
- This chapter positioned statistical sampling, generative adversarial networks
- Continue to annotation and corpus-scale storage topics in subsequent chapters
