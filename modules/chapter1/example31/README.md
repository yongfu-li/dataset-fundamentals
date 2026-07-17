# Example 1.31 — Python Code on Predicting Customer Churn

**Chapter:** 1  
**Label:** `eg:1.31`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.5.3` — Case Study: Predicting Customer Churn

## Learning objective

Walk one end-to-end analytics arc on tabular customer data: explore, impute, train, rank feature importance, and evaluate with classification metrics.

## Chapter context

Section 1.5.3's case study stitches the chapter's themes into a single pipeline: the customer fields introduced earlier become a modeling frame, and this listing implements imputation, a random forest, an importance ranking, and accuracy/precision/recall/F1 on a holdout split.

## What this example shows

Python code that builds a 10-row churn table, profiles it (`info`, missing counts, `describe`), imputes, trains a `RandomForestClassifier`, ranks feature importances, and reports evaluation metrics on a 20% holdout.

## Key terms

- **Imputation** — filling missing values with a statistic, here the column mean, so the model has a value for every feature.
- **Feature importance** — a random-forest score ranking how much each feature contributed to the model's predictions.
- **Holdout evaluation** — measuring accuracy/precision/recall/F1 on a test split the model never trained on.

## What you should learn

### From the data / input
- Features: `Complaints`, `Product_Usage`, `Account_Activity_Change`, `Subscription_Length`.
- Label: `Churned` (1 = churned, 0 = not).
- Only 10 rows — metrics are illustrative, not production-grade.

### From the code / process
1. Build a DataFrame and explore it (`info`, missingness, `describe`).
2. `SimpleImputer` with the mean strategy on the predictor columns.
3. `train_test_split` (20% test, `random_state=42`).
4. Fit a random forest; rank `feature_importances_`.
5. Predict on the holdout and compute accuracy, precision, recall, F1.

### From the output / result
- Feature importance ranks which behaviors precede cancellation — on this toy set, usage/complaints/activity dominate subscription length.
- The evaluation table reports holdout metrics that look perfect (1.0 across the board) only because the test split has 2 rows — read the table as a template for interpreting scores, not as evidence of real performance.

## Contents

| File | Role |
|------|------|
| `main.py` | Book Python listing |
| `requirements.txt` | pandas, numpy, scikit-learn |
| `install.sh` | Creates venv and installs deps |
| `run.sh` | Runs main.py |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+

## Setup

```bash
cd modules/chapter1/example31
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Dataset Info:
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 10 entries, 0 to 9
Data columns (total 6 columns):
 #   Column                   Non-Null Count  Dtype
---  ------                   --------------  -----
 0   Customer_ID              10 non-null     int64
 1   Complaints               10 non-null     int64
 2   Product_Usage            10 non-null     int64
 3   Account_Activity_Change  10 non-null     int64
 4   Subscription_Length      10 non-null     int64
 5   Churned                  10 non-null     int64
dtypes: int64(6)

Missing Values:
Customer_ID                0
Complaints                 0
Product_Usage              0
Account_Activity_Change    0
Subscription_Length        0
Churned                    0
dtype: int64

Feature Importance:
                   Feature  Importance
1            Product_Usage    0.323232
0               Complaints    0.282828
2  Account_Activity_Change    0.252525
3      Subscription_Length    0.141414

Model Evaluation Metrics:
      Metric  Value
0   Accuracy    1.0
1  Precision    1.0
2     Recall    1.0
3   F1 Score    1.0
```

## How to interpret the result

The chapter's closing lesson: datasets support decisions when exploration, cleaning, modeling, and interpretation form one workflow. The perfect-looking metrics are a 10-row artifact (a 2-row test set), not a claim about real-world churn accuracy — governance and collection details continue in later chapters.

## Try it / Reflect

- Change `random_state` in `train_test_split` and rerun — watch accuracy/precision/recall stop being a perfect 1.0 once the toy test set changes.

## Related examples

- `eg:1.28` — the same labeled-features-to-classifier pattern applied to fraud instead of churn.
- `eg:1.12`, `eg:1.20` — completeness/missingness and EDA techniques this pipeline reuses.

## Notes

- Data mirrors the customer-churn case study in the chapter.
- Synthetic toy sample; do not generalize the perfect metrics.
