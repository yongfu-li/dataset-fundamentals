# Chapter 7 — Runnable Examples

Extracted from `author/chapter7.tex` (*Dataset Bias and Fairness*).

Every module's `README.md` follows the enriched pedagogical template from the
`book-examples` skill: learning objective, chapter context, key terms (where
applicable), decomposed "what you should learn" bullets, real captured output
under *Expected output*, interpretation, a *Try it / Reflect* prompt, and
*Related examples* cross-links — so a reader can learn the concept from the
README alone, without the book.

**Folder numbering:** `example1` … `example38` match the **printed** examples in
the PDF (Example 7.1 … Example 7.38). Each module also records its stable
LaTeX label (`eg:7.4`, `eg:7.6`, …) because manuscript label numbers have gaps.

The manuscript has no code listings. **31 conceptual** modules print structured
takeaways on bias types, detection, fairness, and compliance. **7 code** modules
(printed Examples 7.19, 7.20, 7.21, 7.22, 7.24, 7.27, 7.38 — labels
`eg:7.28`–`eg:7.50`) add standard-library Python demos of distribution checks,
chi-squared, correlation, the 80% rule, visual screening, and demographic-parity
trade-offs.

| Module | Label | Title | Type | Runnable |
|--------|-------|-------|------|----------|
| [example1](example1/) | `eg:7.4` | GDPR & ECOA Policies | conceptual | partial |
| [example2](example2/) | `eg:7.6` | Gender Shades Project | conceptual | partial |
| [example3](example3/) | `eg:7.9` | OECD AI Principles | conceptual | partial |
| [example4](example4/) | `eg:7.10` | European Union's Artificial Intelligence Act | conceptual | partial |
| [example5](example5/) | `eg:7.11` | Algorithmic Accountability and Fairness for All Act | conceptual | partial |
| [example6](example6/) | `eg:7.12` | Facial Recognition System | conceptual | partial |
| [example7](example7/) | `eg:7.13` | Predictive Policing Resource Allocation | conceptual | partial |
| [example8](example8/) | `eg:7.14` | Creditworthiness System | conceptual | partial |
| [example9](example9/) | `eg:7.15` | Medical Instrument Calibration | conceptual | partial |
| [example10](example10/) | `eg:7.16` | Facial Recognition Capture Quality | conceptual | partial |
| [example11](example11/) | `eg:7.17` | Entrenched Societal Biases in Historical Records | conceptual | partial |
| [example12](example12/) | `eg:7.21` | Labeling Bias in Sentiment Annotation | conceptual | partial |
| [example13](example13/) | `eg:7.22` | Labeling Bias in Predictive Justice Data | conceptual | partial |
| [example14](example14/) | `eg:7.23` | Aggregate Bias in Healthcare | conceptual | partial |
| [example15](example15/) | `eg:7.24` | Aggregate Bias in Credit Scoring | conceptual | partial |
| [example16](example16/) | `eg:7.25` | Confirmation Bias in Research | conceptual | partial |
| [example17](example17/) | `eg:7.26` | Confirmation Bias in Predictive Policing | conceptual | partial |
| [example18](example18/) | `eg:7.27` | Multiple Manifestations of Dataset Bias | conceptual | partial |
| [example19](example19/) | `eg:7.28` | Distribution Comparison Across Demographics | runnable (Python) | yes |
| [example20](example20/) | `eg:7.29` | Age Skew in Training Data | runnable (Python) | yes |
| [example21](example21/) | `eg:7.30` | Chi-Squared Test for Gender Distribution | runnable (Python) | yes |
| [example22](example22/) | `eg:7.31` | Correlation with Sensitive Attributes | runnable (Python) | yes |
| [example23](example23/) | `eg:7.32` | Proxy Correlation via Name Features | conceptual | partial |
| [example24](example24/) | `eg:7.33` | The 80\% Rule in Hiring | runnable (Python) | yes |
| [example25](example25/) | `eg:7.34` | Combining Views for Bias Screening | conceptual | partial |
| [example26](example26/) | `eg:7.35` | Salary-Race Correlation Heatmap | conceptual | partial |
| [example27](example27/) | `eg:7.36` | Bar Chart of Predictions by Demographic Group | runnable (Python) | yes |
| [example28](example28/) | `eg:7.37` | Income-Race Scatter Plot | conceptual | partial |
| [example29](example29/) | `eg:7.38` | Inequitable Treatment in Credit and Justice Decisions | conceptual | partial |
| [example30](example30/) | `eg:7.40` | Amplification of Policing and Hiring Disparities | conceptual | partial |
| [example31](example31/) | `eg:7.41` | Recruitment Algorithm Perpetuating Gender Gaps | conceptual | partial |
| [example32](example32/) | `eg:7.42` | Compliance Exposure Under GDPR and CCPA | conceptual | partial |
| [example33](example33/) | `eg:7.43` | GDPR Enforcement Against Discriminatory AI | conceptual | partial |
| [example34](example34/) | `eg:7.44` | U.S. Regulatory Exposure for Biased AI | conceptual | partial |
| [example35](example35/) | `eg:7.45` | Financial Penalties from Biased Hiring and Credit Systems | conceptual | partial |
| [example36](example36/) | `eg:7.47` | Consistent Criteria in Hiring Decisions | conceptual | partial |
| [example37](example37/) | `eg:7.48` | Outcome Fairness in Predictive Policing | conceptual | partial |
| [example38](example38/) | `eg:7.50` | Demographic Parity Reducing Loan Default Prediction | runnable (Python) | yes |

## Quick start

```bash
cd modules/chapter7/example24
bash install.sh
bash run.sh
```
