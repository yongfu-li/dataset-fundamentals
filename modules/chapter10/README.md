# Chapter 10 — Runnable Examples

Extracted from `author/chapter10.tex` (*Synthetic Data Generation*).

Every module's `README.md` follows the enriched pedagogical template from the
`book-examples` skill: learning objective, chapter context, key terms (where
applicable), decomposed "what you should learn" bullets, real captured output
under *Expected output*, interpretation, a *Try it / Reflect* prompt, and
*Related examples* cross-links — so a reader can learn the concept from the
README alone, without the book.

The manuscript has no code listings. Examples 10.1–10.5 and 10.11–10.23 are
**conceptual** modules whose `run.sh` prints structured takeaways. Examples
10.6–10.10 are **code** modules with standard-library Python demos of normal
sampling, Monte Carlo simulation, joint distributions, bootstrapping, and
regression-based projection.

Note: `eg:10.5b` (MESD controlled simulation benchmark) appears in the manuscript
but has no module folder yet.

| Module | Label | Title | Type | Runnable |
|--------|-------|-------|------|----------|
| [example1](example1/) | `eg:10.1` | Cross-Modal Fidelity in Synthetic Data | conceptual | partial |
| [example2](example2/) | `eg:10.2` | Synthetic Patient Records for Privacy | conceptual | partial |
| [example3](example3/) | `eg:10.3` | Synthetic Driving Scenarios for AV Training | conceptual | partial |
| [example4](example4/) | `eg:10.4` | Face-Recognition Validation Gap | conceptual | partial |
| [example5](example5/) | `eg:10.5` | Demographic Bias in GAN Training Data | conceptual | partial |
| [example6](example6/) | `eg:10.6` | Normal-Distribution Sampling Sketch | runnable (Python) | yes |
| [example7](example7/) | `eg:10.7` | Monte Carlo Asset-Return Simulation | runnable (Python) | yes |
| [example8](example8/) | `eg:10.8` | Income-Age Joint Distribution | runnable (Python) | yes |
| [example9](example9/) | `eg:10.9` | Bootstrapping Purchase Histories | runnable (Python) | yes |
| [example10](example10/) | `eg:10.10` | Regression-Based GDP Projection | runnable (Python) | yes |
| [example11](example11/) | `eg:10.11` | Conditional GAN Class Labels | conceptual | partial |
| [example12](example12/) | `eg:10.12` | Privacy-Preserving Medical Records | conceptual | partial |
| [example13](example13/) | `eg:10.13` | Rare-Disease Case Simulation | conceptual | partial |
| [example14](example14/) | `eg:10.14` | Synthetic Fraud Transaction Patterns | conceptual | partial |
| [example15](example15/) | `eg:10.15` | Pedestrian-in-Rain Edge Case | conceptual | partial |
| [example16](example16/) | `eg:10.16` | Computer-Vision Augmentation | conceptual | partial |
| [example17](example17/) | `eg:10.17` | Ransomware Attack Simulation | conceptual | partial |
| [example18](example18/) | `eg:10.18` | GDPR-Compliant Synthetic Patients | conceptual | partial |
| [example19](example19/) | `eg:10.19` | Manipulated Performance Reporting | conceptual | partial |
| [example20](example20/) | `eg:10.20` | Over-Reliance in AV Training | conceptual | partial |
| [example21](example21/) | `eg:10.21` | Low-Quality Synthetic Tabular Data | conceptual | partial |
| [example22](example22/) | `eg:10.22` | Bias Amplification in Hiring Data | conceptual | partial |
| [example23](example23/) | `eg:10.23` | Synthetic Data Under GDPR Rights | conceptual | partial |

## Quick start

```bash
cd modules/chapter10/example6
bash install.sh
bash run.sh
```
