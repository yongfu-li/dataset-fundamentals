# Chapter 11 — Runnable Examples

Extracted from `author/chapter11.tex` (*Advanced Annotation Strategies*).

Every module's `README.md` follows the enriched pedagogical template from the
`book-examples` skill: learning objective, chapter context, key terms (where
applicable), decomposed "what you should learn" bullets, real captured output
under *Expected output*, interpretation, a *Try it / Reflect* prompt, and
*Related examples* cross-links — so a reader can learn the concept from the
README alone, without the book.

The manuscript has no code listings. Examples 11.1–11.3 and 11.14 are **code**
modules with standard-library Python demos of uncertainty, margin, and entropy
sampling plus Snorkel-style labeling functions. Examples 11.4–11.13 and
11.15–11.31 are **conceptual** modules covering active learning applications,
weak/self-supervision, and hybrid crowd–expert pipelines.

| Module | Label | Title | Type | Runnable |
|--------|-------|-------|------|----------|
| [example1](example1/) | `eg:11.1` | Uncertainty Sampling for Cat-Dog Images | runnable (Python) | yes |
| [example2](example2/) | `eg:11.2` | Margin Sampling in Multi-Class Tasks | runnable (Python) | yes |
| [example3](example3/) | `eg:11.3` | High-Entropy Multi-Class Prediction | runnable (Python) | yes |
| [example4](example4/) | `eg:11.4` | Active Learning for MRI Tumor Detection | conceptual | partial |
| [example5](example5/) | `eg:11.5` | Uncertain Chest X-ray Near Decision Boundary | conceptual | partial |
| [example6](example6/) | `eg:11.6` | Diversity Sampling Across Review Clusters | conceptual | partial |
| [example7](example7/) | `eg:11.7` | Cost-Sensitive Routing in Legal Labeling | conceptual | partial |
| [example8](example8/) | `eg:11.8` | Model-in-the-Loop Tumor Review | conceptual | partial |
| [example9](example9/) | `eg:11.9` | Active Learning for Review Sentiment | conceptual | partial |
| [example10](example10/) | `eg:11.10` | Active Learning for Driving Perception | conceptual | partial |
| [example11](example11/) | `eg:11.11` | Key-Frame Selection for Action Labels | conceptual | partial |
| [example12](example12/) | `eg:11.12` | Pneumonia Detection with Uncertain X-rays | conceptual | partial |
| [example13](example13/) | `eg:11.13` | Dermoscopic Lesion Uncertainty Queue | conceptual | partial |
| [example14](example14/) | `eg:11.14` | Labeling Functions for Spam Detection | runnable (Python) | yes |
| [example15](example15/) | `eg:11.15` | Contrastive Pretraining Then Fine-Tune | conceptual | partial |
| [example16](example16/) | `eg:11.16` | Crowd Scale for Attribute Labels | conceptual | partial |
| [example17](example17/) | `eg:11.17` | Crowd Cost for Product Images | conceptual | partial |
| [example18](example18/) | `eg:11.18` | Fast Crowd Turnaround at Launch | conceptual | partial |
| [example19](example19/) | `eg:11.19` | Diverse Crowd Sentiment Judgments | conceptual | partial |
| [example20](example20/) | `eg:11.20` | Expert Quality for Radiology Labels | conceptual | partial |
| [example21](example21/) | `eg:11.21` | Radiologist Tumor Annotation | conceptual | partial |
| [example22](example22/) | `eg:11.22` | Legal Experts for Contract Clauses | conceptual | partial |
| [example23](example23/) | `eg:11.23` | Clinical Language Requires Experts | conceptual | partial |
| [example24](example24/) | `eg:11.24` | Geospatial Experts for Satellite Features | conceptual | partial |
| [example25](example25/) | `eg:11.25` | Expert Gold Then Crowd Scale-Up | conceptual | partial |
| [example26](example26/) | `eg:11.26` | Crowd Objects Expert Pathology | conceptual | partial |
| [example27](example27/) | `eg:11.27` | Crowd Common Classes Expert Rare | conceptual | partial |
| [example28](example28/) | `eg:11.28` | Active Learning Routes Hard Cases | conceptual | partial |
| [example29](example29/) | `eg:11.29` | Hybrid Cost Savings Pattern | conceptual | partial |
| [example30](example30/) | `eg:11.30` | Hybrid Quality Control Pattern | conceptual | partial |
| [example31](example31/) | `eg:11.31` | Hybrid Speed with Expert Gates | conceptual | partial |

## Quick start

```bash
cd modules/chapter11/example1
bash install.sh
bash run.sh
```
