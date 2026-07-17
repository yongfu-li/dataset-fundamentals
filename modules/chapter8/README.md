# Chapter 8 — Runnable Examples

Extracted from `author/chapter8.tex` (*Dataset Documentation and Version Control*).

Every module's `README.md` follows the enriched pedagogical template from the
`book-examples` skill: learning objective, chapter context, key terms (where
applicable), decomposed "what you should learn" bullets, real captured output
under *Expected output*, interpretation, a *Try it / Reflect* prompt, and
*Related examples* cross-links — so a reader can learn the concept from the
README alone, without the book.

All 48 manuscript examples (`eg:8.1`–`eg:8.48`) are packaged below. Examples 8.8–8.9
are **data** artifacts (JSON dictionary, CSV codebook). Examples 8.15–8.19, 8.24–8.30,
8.38–8.43, and 8.42 (`main.py`) are **mixed** documentation/code modules with inspectable
YAML, Markdown, JSON-LD, or Python listings. The remaining examples are **conceptual**
modules whose `run.sh` prints structured documentation or version-control takeaways.

| Module | Label | Title | Type | Runnable |
|--------|-------|-------|------|----------|
| [example1](example1/) | `eg:8.1` | Undocumented Image Classification Dataset | conceptual | partial |
| [example2](example2/) | `eg:8.2` | Feature Drift Across Dataset Versions | conceptual | partial |
| [example3](example3/) | `eg:8.3` | Clinical Dataset Change Tracking for Compliance | conceptual | partial |
| [example4](example4/) | `eg:8.4` | Transaction Dataset Version History | conceptual | partial |
| [example5](example5/) | `eg:8.5` | Air-Quality Metadata Fields | conceptual | partial |
| [example6](example6/) | `eg:8.6` | Age Variable Description | conceptual | partial |
| [example7](example7/) | `eg:8.7` | Gender Allowed Values | conceptual | partial |
| [example8](example8/) | `eg:8.8` | Purchase Amount Data-Dictionary Entry | data | yes |
| [example9](example9/) | `eg:8.9` | Medical Condition Codebook | data | yes |
| [example10](example10/) | `eg:8.10` | Retail Transaction Provenance Trail | conceptual | partial |
| [example11](example11/) | `eg:8.11` | Urban-Only Sampling Note | conceptual | partial |
| [example12](example12/) | `eg:8.12` | Faulty Sensor Annotation | conceptual | partial |
| [example13](example13/) | `eg:8.13` | Documentation Depth by Intended Use | conceptual | partial |
| [example14](example14/) | `eg:8.14` | Collection Assumptions and Limitations | conceptual | partial |
| [example15](example15/) | `eg:8.15` | Markdown Documentation Outline | mixed documentation/code | yes |
| [example16](example16/) | `eg:8.16` | DVC Versus DataHub Documentation Support | conceptual | partial |
| [example17](example17/) | `eg:8.17` | Schema.org Dataset Vocabulary | mixed documentation/code | yes |
| [example18](example18/) | `eg:8.18` | Interoperable Schema for Dataset Linking | conceptual | partial |
| [example19](example19/) | `eg:8.19` | Retail Transaction Documentation Template | mixed documentation/code | yes |
| [example20](example20/) | `eg:8.20` | CSV Dataset Commits in Git | conceptual | partial |
| [example21](example21/) | `eg:8.21` | DVC Tracking of Cloud-Stored Datasets | conceptual | partial |
| [example22](example22/) | `eg:8.22` | Quilt for Genomic Dataset Versions | conceptual | partial |
| [example23](example23/) | `eg:8.23` | DataHub for Real-Time Feed Versions | conceptual | partial |
| [example24](example24/) | `eg:8.24` | Git LFS for Large Training Artifacts | mixed documentation/code | yes |
| [example25](example25/) | `eg:8.25` | DVC in an ML Pipeline | mixed documentation/code | yes |
| [example26](example26/) | `eg:8.26` | Quilt for Multi-Experiment Dataset Sharing | conceptual | partial |
| [example27](example27/) | `eg:8.27` | GitHub Actions Dataset Update Pipeline | mixed documentation/code | yes |
| [example28](example28/) | `eg:8.28` | DVC Pipeline Stages for Training | mixed documentation/code | yes |
| [example29](example29/) | `eg:8.29` | Live Demonstration of DVC Automation | mixed documentation/code | yes |
| [example30](example30/) | `eg:8.30` | Codebook for Categorical Labels | mixed documentation/code | yes |
| [example31](example31/) | `eg:8.31` | Documenting Collection and Cleaning Steps | conceptual | partial |
| [example32](example32/) | `eg:8.32` | Annotating Missing-Value Handling | conceptual | partial |
| [example33](example33/) | `eg:8.33` | Descriptive Dataset Commit Message | conceptual | partial |
| [example34](example34/) | `eg:8.34` | Large Binary Files Beyond Plain Git | conceptual | partial |
| [example35](example35/) | `eg:8.35` | Merge Conflicts on Shared Datasets | conceptual | partial |
| [example36](example36/) | `eg:8.36` | Reproducibility Without Version Pins | conceptual | partial |
| [example37](example37/) | `eg:8.37` | Access Control for Privacy Compliance | conceptual | partial |
| [example38](example38/) | `eg:8.38` | Climate Agriculture Research Case Study | mixed documentation/code | yes |
| [example39](example39/) | `eg:8.39` | Predictive Maintenance Versioning Case Study | mixed documentation/code | yes |
| [example40](example40/) | `eg:8.40` | Clinical Trial Collaboration Case Study | mixed documentation/code | yes |
| [example41](example41/) | `eg:8.41` | Auto-Generated Training Metadata | mixed documentation/code | yes |
| [example42](example42/) | `eg:8.42` | Sphinx Data-Dictionary Generation | mixed documentation/code | yes |
| [example43](example43/) | `eg:8.43` | DVC Stages in a Sensor Pipeline | mixed documentation/code | yes |
| [example44](example44/) | `eg:8.44` | Lineage Tools for Audit Trails | conceptual | partial |
| [example45](example45/) | `eg:8.45` | PII Processing Under GDPR Principles | conceptual | partial |
| [example46](example46/) | `eg:8.46` | Encrypting Sensitive Datasets with DVC | conceptual | partial |
| [example47](example47/) | `eg:8.47` | Blockchain Ideas for Version Auditability | conceptual | partial |
| [example48](example48/) | `eg:8.48` | Edge Sensor Data Version Sync | conceptual | partial |

## Quick start

```bash
cd modules/chapter8/example8
bash install.sh
bash run.sh
```
