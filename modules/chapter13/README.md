# Chapter 13 — Runnable Examples

Extracted from `author/chapter13.tex` (*Reproducibility and Open Science*).

Every module's `README.md` follows the enriched pedagogical template from the
`book-examples` skill: learning objective, chapter context, key terms (where
applicable), decomposed "what you should learn" bullets, real captured output
under *Expected output*, interpretation, a *Try it / Reflect* prompt, and
*Related examples* cross-links — so a reader can learn the concept from the
README alone, without the book.

The manuscript has no code listings. Example 13.1 is a **code** module with a
standard-library determinism demo (seeded pipeline + SHA-256 hash check).
Examples 13.2–13.60 are **conceptual** modules covering reproducibility vs
replicability, open science, FAIR data, provenance, licensing/ethics, notebooks,
Docker, CI, DVC, RMarkdown, cloud collaboration, pitfalls, and audit trails.

| Module | Label | Title | Type | Runnable |
|--------|-------|-------|------|----------|
| [example1](example1/) | `eg:13.1` | Same Data and Methods Yield Identical Results | runnable (Python) | yes |
| [example2](example2/) | `eg:13.2` | Replication with New Climate Data | conceptual | partial |
| [example3](example3/) | `eg:13.3` | OSF and Zenodo for Open Sharing | conceptual | partial |
| [example4](example4/) | `eg:13.4` | Publishing Scripts and Notebooks | conceptual | partial |
| [example5](example5/) | `eg:13.5` | HIPAA Limits on Clinical Data Sharing | conceptual | partial |
| [example6](example6/) | `eg:13.6` | Missing Hyperparameters Block Replication | conceptual | partial |
| [example7](example7/) | `eg:13.7` | Incompatible Bioinformatics Naming Standards | conceptual | partial |
| [example8](example8/) | `eg:13.8` | Drug Decisions Depend on Reproducible Trials | conceptual | partial |
| [example9](example9/) | `eg:13.9` | Undocumented Methodology Blocks Replication | conceptual | partial |
| [example10](example10/) | `eg:13.10` | Repository Metadata Enables Discovery | conceptual | partial |
| [example11](example11/) | `eg:13.11` | Unpinned Dataset Versions Break Replication | conceptual | partial |
| [example12](example12/) | `eg:13.12` | Indexing Genomics Data in Public Archives | conceptual | partial |
| [example13](example13/) | `eg:13.13` | Zenodo and Figshare with Access Controls | conceptual | partial |
| [example14](example14/) | `eg:13.14` | FASTQ VCF and Controlled Vocabularies | conceptual | partial |
| [example15](example15/) | `eg:13.15` | Community File Formats for Reuse | conceptual | partial |
| [example16](example16/) | `eg:13.16` | Linking Expression Data to Ensembl | conceptual | partial |
| [example17](example17/) | `eg:13.17` | MeSH and ICD Controlled Terms | conceptual | partial |
| [example18](example18/) | `eg:13.18` | Documenting Clinical Trial Dropouts | conceptual | partial |
| [example19](example19/) | `eg:13.19` | Uniform Dates Units and Categories | conceptual | partial |
| [example20](example20/) | `eg:13.20` | Satellite Data Versus Ground Truth | conceptual | partial |
| [example21](example21/) | `eg:13.21` | Correcting Scale Errors in Financial Data | conceptual | partial |
| [example22](example22/) | `eg:13.22` | Climate Data Versus Weather Station Records | conceptual | partial |
| [example23](example23/) | `eg:13.23` | Document Instrument Limitations | conceptual | partial |
| [example24](example24/) | `eg:13.24` | Genomics Provenance for Sequencing Pipelines | conceptual | partial |
| [example25](example25/) | `eg:13.25` | Tracking Dataset Updates Over Time | conceptual | partial |
| [example26](example26/) | `eg:13.26` | Restricted Licenses for Health Data | conceptual | partial |
| [example27](example27/) | `eg:13.27` | Avoid Reinforcing Bias with Open Data | conceptual | partial |
| [example28](example28/) | `eg:13.28` | Indigenous Control Over Shared Data | conceptual | partial |
| [example29](example29/) | `eg:13.29` | Automated Bioinformatics Workflow File | conceptual | partial |
| [example30](example30/) | `eg:13.30` | Genomics Pipeline Runs in Fixed Order | conceptual | partial |
| [example31](example31/) | `eg:13.31` | Notebook Pipeline from Load to Plots | conceptual | partial |
| [example32](example32/) | `eg:13.32` | Notebook Explains Model Training Steps | conceptual | partial |
| [example33](example33/) | `eg:13.33` | Notebook Scale and Environment Limits | conceptual | partial |
| [example34](example34/) | `eg:13.34` | Docker Image for Sequence Alignment Tools | conceptual | partial |
| [example35](example35/) | `eg:13.35` | Separate Containers per Pipeline Stage | conceptual | partial |
| [example36](example36/) | `eg:13.36` | Docker Image for ML Training Stack | conceptual | partial |
| [example37](example37/) | `eg:13.37` | CI Checks Preprocessing and Inputs | conceptual | partial |
| [example38](example38/) | `eg:13.38` | Tests for Cross-Environment Consistency | conceptual | partial |
| [example39](example39/) | `eg:13.39` | CI Retests Model Training After Updates | conceptual | partial |
| [example40](example40/) | `eg:13.40` | Regression Tests After Cleaning Changes | conceptual | partial |
| [example41](example41/) | `eg:13.41` | RMarkdown Public Health Analysis Report | conceptual | partial |
| [example42](example42/) | `eg:13.42` | Shared RMarkdown Keeps Teams Aligned | conceptual | partial |
| [example43](example43/) | `eg:13.43` | knitr and ggplot2 in RMarkdown | conceptual | partial |
| [example44](example44/) | `eg:13.44` | DVC Tracks Training Data and Weights | conceptual | partial |
| [example45](example45/) | `eg:13.45` | DVC Pipeline for Preprocess Train Evaluate | conceptual | partial |
| [example46](example46/) | `eg:13.46` | DVC Sync for Satellite Imagery Teams | conceptual | partial |
| [example47](example47/) | `eg:13.47` | Cloud VMs for Consistent Workflows | conceptual | partial |
| [example48](example48/) | `eg:13.48` | Parallel Chunks Across Cloud Nodes | conceptual | partial |
| [example49](example49/) | `eg:13.49` | Slack Channels for Research Coordination | conceptual | partial |
| [example50](example50/) | `eg:13.50` | Environment Drift Breaks Identical Code | conceptual | partial |
| [example51](example51/) | `eg:13.51` | Undocumented Data Assumptions | conceptual | partial |
| [example52](example52/) | `eg:13.52` | Undocumented Methods and Code | conceptual | partial |
| [example53](example53/) | `eg:13.53` | Licensing Barriers to Data Access | conceptual | partial |
| [example54](example54/) | `eg:13.54` | Tool Interoperability Gaps | conceptual | partial |
| [example55](example55/) | `eg:13.55` | DVC Links Retraining to Data Versions | conceptual | partial |
| [example56](example56/) | `eg:13.56` | Pipeline Logs Capture Versions and Metrics | conceptual | partial |
| [example57](example57/) | `eg:13.57` | Repository Layout for Auditability | conceptual | partial |
| [example58](example58/) | `eg:13.58` | Biweekly Repository Checkpoints | conceptual | partial |
| [example59](example59/) | `eg:13.59` | Public Repository for External Review | conceptual | partial |
| [example60](example60/) | `eg:13.60` | S3 Versioning as Audit Backup | conceptual | partial |

## Quick start

```bash
cd modules/chapter13/example1
bash install.sh
bash run.sh
```
