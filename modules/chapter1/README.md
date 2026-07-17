# Chapter 1 — Runnable Examples

Extracted from `author/chapter1.tex`. Each folder maps to label `eg:1.M`.

Every module's `README.md` follows the enriched pedagogical template from the
`book-examples` skill: learning objective, chapter context, key terms, decomposed
"what you should learn" bullets, real captured output under *Expected output*,
interpretation, a *Try it / Reflect* prompt, and *Related examples* cross-links —
so a reader can learn the concept from the README alone, without the book.

| Module | Label | Title | Type | Runnable |
|--------|-------|-------|------|----------|
| [example1](example1/) | `eg:1.1` | Sample CSV Sales Data | data | yes |
| [example2](example2/) | `eg:1.2` | Healthcare Dataset | data | yes |
| [example3](example3/) | `eg:1.3` | Sensor Reading Dataset | data | yes |
| [example4](example4/) | `eg:1.4` | Housing Price Dataset in JSON Format | data | yes |
| [example5](example5/) | `eg:1.5` | Geospatial Land-Cover Dataset | conceptual | partial |
| [example6](example6/) | `eg:1.6` | Textual Social Media Dataset | data | yes |
| [example7](example7/) | `eg:1.7` | Semi-Structured Dataset In JSON Format | data | yes |
| [example8](example8/) | `eg:1.8` | Sample of SQL Format | sql | yes |
| [example9](example9/) | `eg:1.9` | Creating and Reading an HDF5 File | code | yes |
| [example10](example10/) | `eg:1.10` | Sample of GeoJSON File | data | yes |
| [example11](example11/) | `eg:1.11` | Financial Dataset with an Incorrect Transaction | data | yes |
| [example12](example12/) | `eg:1.12` | Healthcare Dataset with Missing Attributes | data | yes |
| [example13](example13/) | `eg:1.13` | Inconsistent Date Formats | data | yes |
| [example14](example14/) | `eg:1.14` | Metadata of Weather Dataset | data | yes |
| [example15](example15/) | `eg:1.15` | E-Commerce Dataset | conceptual | partial |
| [example16](example16/) | `eg:1.16` | Household Incomes Dataset | data | yes |
| [example20](example20/) | `eg:1.20` | Exploratory Analysis of Household Incomes | mixed | yes |
| [example21](example21/) | `eg:1.21` | Purchase History Dataset | conceptual | partial |
| [example22](example22/) | `eg:1.22` | Wearable Devices Dataset | conceptual | partial |
| [example28](example28/) | `eg:1.28` | Banking Transactions Dataset | conceptual | partial |
| [example31](example31/) | `eg:1.31` | Python Code on Predicting Customer Churn | code | yes |

## Quick start

```bash
cd modules/chapter1/example1
bash install.sh
bash run.sh
```

Examples needing Python packages: `example9` (h5py), `example20` (pandas/matplotlib), `example31` (scikit-learn).
