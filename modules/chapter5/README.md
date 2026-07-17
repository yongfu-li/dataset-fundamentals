# Chapter 5 — Runnable Examples

Extracted from `author/chapter5.tex` (*Data Cleaning and Preprocessing*).

Every module's `README.md` follows the enriched pedagogical template from the
`book-examples` skill: learning objective, chapter context, key terms (where
applicable), decomposed "what you should learn" bullets, real captured output
under *Expected output*, interpretation, a *Try it / Reflect* prompt, and
*Related examples* cross-links — so a reader can learn the concept from the
README alone, without the book.

Most examples are **conceptual** (`run.sh` prints structured takeaways). **Eight**
modules extract Python/R listings into runnable scripts with synthetic CSVs
(`eg:5.57`–`5.61`, `5.65`, `5.66`, `5.68`). Includes `eg:5.2b` (UM-NIDS schema unification).

| Module | Label | Title | Type | Runnable |
|--------|-------|-------|------|----------|
| [example1](example1/) | `eg:5.1` | Missing Target Values in Classification | conceptual | partial |
| [example2](example2/) | `eg:5.2` | Dropping Unused Identifier Columns | conceptual | partial |
| [example2b](example2b/) | `eg:5.2b` | Unifying Intrusion Features Before Model Training | conceptual | partial |
| [example3](example3/) | `eg:5.3` | Duplicate Retail Transactions | conceptual | partial |
| [example4](example4/) | `eg:5.4` | Missing Contact Fields | conceptual | partial |
| [example5](example5/) | `eg:5.5` | Inconsistent Date Formats | conceptual | partial |
| [example6](example6/) | `eg:5.6` | Scale Mismatch Between Age and Income | conceptual | partial |
| [example7](example7/) | `eg:5.7` | Encoding a Color Category | conceptual | partial |
| [example8](example8/) | `eg:5.8` | MCAR System Error Omits Records | conceptual | partial |
| [example9](example9/) | `eg:5.9` | MAR Income Nonresponse Pattern | conceptual | partial |
| [example10](example10/) | `eg:5.10` | MNAR Income Self-Censoring | conceptual | partial |
| [example11](example11/) | `eg:5.11` | Nonresponse Skips Sensitive Questions | conceptual | partial |
| [example12](example12/) | `eg:5.12` | Typo Leaves Blank Entry Field | conceptual | partial |
| [example13](example13/) | `eg:5.13` | Disk Failure Truncates Sensor File | conceptual | partial |
| [example14](example14/) | `eg:5.14` | Duplicate Customer Purchase Rows | conceptual | partial |
| [example15](example15/) | `eg:5.15` | Double Counted Revenue From Duplicates | conceptual | partial |
| [example16](example16/) | `eg:5.16` | Model Overweights Repeated Rows | conceptual | partial |
| [example17](example17/) | `eg:5.17` | Larger Table Slower Training | conceptual | partial |
| [example18](example18/) | `eg:5.18` | Mixed Dates Gender and Units | conceptual | partial |
| [example19](example19/) | `eg:5.19` | Customer ID Formats Block Join | conceptual | partial |
| [example20](example20/) | `eg:5.20` | Male Versus M Split Categories | conceptual | partial |
| [example21](example21/) | `eg:5.21` | Weeks Normalizing Free Text Cities | conceptual | partial |
| [example22](example22/) | `eg:5.22` | Extra Zero In Blood Pressure | conceptual | partial |
| [example23](example23/) | `eg:5.23` | Valid Extreme Income Observation | conceptual | partial |
| [example24](example24/) | `eg:5.24` | Faulty IoT Sensor Spike | conceptual | partial |
| [example25](example25/) | `eg:5.25` | Drop Typo Age 250 | conceptual | partial |
| [example26](example26/) | `eg:5.26` | Log Income Compresses Right Tail | conceptual | partial |
| [example27](example27/) | `eg:5.27` | Cap Income at 95th Percentile | conceptual | partial |
| [example28](example28/) | `eg:5.28` | Replace Sensor Spike With Median | conceptual | partial |
| [example29](example29/) | `eg:5.29` | Irrelevant Color and Pet Features | conceptual | partial |
| [example30](example30/) | `eg:5.30` | More Columns Harder to Interpret | conceptual | partial |
| [example31](example31/) | `eg:5.31` | Model Fits Noise in Unused Fields | conceptual | partial |
| [example32](example32/) | `eg:5.32` | Extra Features Slow Tree Training | conceptual | partial |
| [example33](example33/) | `eg:5.33` | Fraud Class at One Percent | conceptual | partial |
| [example34](example34/) | `eg:5.34` | Oversample Fraud Rows | conceptual | partial |
| [example35](example35/) | `eg:5.35` | Higher Loss Weight on Minority Class | conceptual | partial |
| [example36](example36/) | `eg:5.36` | SMOTE Synthesizes Minority Neighbors | conceptual | partial |
| [example37](example37/) | `eg:5.37` | Listwise Deletion Drops Any NA | conceptual | partial |
| [example38](example38/) | `eg:5.38` | Available Case Analysis Keeps Rows | conceptual | partial |
| [example39](example39/) | `eg:5.39` | Mean Impute Missing Age | conceptual | partial |
| [example40](example40/) | `eg:5.40` | Hot Deck Impute From Donor Row | conceptual | partial |
| [example41](example41/) | `eg:5.41` | Median Impute Missing Square Footage | conceptual | partial |
| [example42](example42/) | `eg:5.42` | Near Duplicate Customer Names | conceptual | partial |
| [example43](example43/) | `eg:5.43` | Normalize Currency Symbols Across Markets | conceptual | partial |
| [example44](example44/) | `eg:5.44` | Extreme Income Flagged by IQR | conceptual | partial |
| [example45](example45/) | `eg:5.45` | Drop Correlated Bathroom Features | conceptual | partial |
| [example46](example46/) | `eg:5.46` | Scale Age and Income for KNN | conceptual | partial |
| [example47](example47/) | `eg:5.47` | One Hot Encode Color Categories | conceptual | partial |
| [example48](example48/) | `eg:5.48` | Label Encode Ordinal Size | conceptual | partial |
| [example49](example49/) | `eg:5.49` | Target Encode City by Mean Price | conceptual | partial |
| [example50](example50/) | `eg:5.50` | One Hot Encode Gender for Churn | conceptual | partial |
| [example51](example51/) | `eg:5.51` | Equal Width Age Bins | conceptual | partial |
| [example52](example52/) | `eg:5.52` | Frequency Bins for Test Scores | conceptual | partial |
| [example53](example53/) | `eg:5.53` | Add Squared Feature Term | conceptual | partial |
| [example54](example54/) | `eg:5.54` | Age Income Interaction Feature | conceptual | partial |
| [example55](example55/) | `eg:5.55` | Engineer Price Per Square Foot | conceptual | partial |
| [example56](example56/) | `eg:5.56` | Polynomial Feature Expansion | conceptual | partial |
| [example57](example57/) | `eg:5.57` | Pandas Dropna and Drop Duplicates | code (Python) | yes |
| [example58](example58/) | `eg:5.58` | Dplyr Filter and Select Columns | code (R) | yes |
| [example59](example59/) | `eg:5.59` | Pandas End to End Cleaning Walkthrough | code (Python) | yes |
| [example60](example60/) | `eg:5.60` | StandardScaler on Age and Salary | code (Python) | yes |
| [example61](example61/) | `eg:5.61` | OneHotEncoder for Gender Column | code (Python) | yes |
| [example62](example62/) | `eg:5.62` | Rare Fraud Class Distorts Accuracy | conceptual | partial |
| [example63](example63/) | `eg:5.63` | Convert Currencies Before Modeling | conceptual | partial |
| [example64](example64/) | `eg:5.64` | Retail Purchase Record Schema | conceptual | partial |
| [example65](example65/) | `eg:5.65` | Guided Pandas Cleaning Template | code (Python) | yes |
| [example66](example66/) | `eg:5.66` | Compare MinMax and Standard Scaling | code (Python) | yes |
| [example67](example67/) | `eg:5.67` | When to Prefer Normalization or Standardization | conceptual | partial |
| [example68](example68/) | `eg:5.68` | Label Versus One Hot Encoding Lab | code (Python) | yes |
| [example69](example69/) | `eg:5.69` | Encoding Tradeoffs Ordinal Versus Nominal | conceptual | partial |
| [example70](example70/) | `eg:5.70` | Bayesian Imputation with Clinical Priors | conceptual | partial |
| [example71](example71/) | `eg:5.71` | Autoencoder Imputation for Retail Gaps | conceptual | partial |
| [example72](example72/) | `eg:5.72` | Rolling Window for Streaming Prices | conceptual | partial |
| [example73](example73/) | `eg:5.73` | Real Time Vital Sign Preprocessing | conceptual | partial |
| [example74](example74/) | `eg:5.74` | Deep Feature Synthesis on Transactions | conceptual | partial |
| [example75](example75/) | `eg:5.75` | Document Imputation for Auditable Models | conceptual | partial |
| [example76](example76/) | `eg:5.76` | Prefer Interpretable Credit Features | conceptual | partial |
| [example77](example77/) | `eg:5.77` | Fair Encoding of Clinical Features | conceptual | partial |

## Quick start

```bash
cd modules/chapter5/example57
bash install.sh
bash run.sh
```
