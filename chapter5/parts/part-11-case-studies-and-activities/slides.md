---
marp: true
title: Chapter 5 — Case studies and hands-on activities
paginate: true
---

# Chapter 5 — Case studies and hands-on activities

Principles become concrete in retail segmentation and healthcare outcome prediction

---

## Learning objectives
- Outline cleaning steps for an e-commerce segmentation table and a clinical outcomes table
- Locate module labs for issue spotting and pandas repair templates

---

## Retail: customer segmentation
- An e-commerce firm segments customers by purchase behavior
- Challenges include missing age and frequency fields, inconsistent product capitalization
- Solutions: median or mode imputation, currency harmonization, text normalization
- Cleaned data supports clustering and targeted campaigns

---

## Healthcare: predicting disease outcomes
- Clinical records combine age, history, labs, and outcomes
- Missing labs, outlier vitals, and inconsistent smoker labels are common
- Solutions: principled imputation, categorical standardization, IQR outlier review
- Preprocessing improves allocative and diagnostic workflows when documented

---

## Example 5.64 — Retail purchase record schema
- Example 5.64 — hands-on module
- Example 5.64 introduces a practice table with missing prices and duplicate transactions
- Explore the chapter example module
- View files: `modules/chapter5/example64/`

---

## Example 5.65 — Guided pandas cleaning template
- Example 5.65 — hands-on module
- Example 5.65 provides a guided repair script
- Explore the chapter example module
- View files: `modules/chapter5/example65/`

---

## Example 5.65 — listing

```
import pandas as pd

df = pd.read_csv("data.csv")

df['price'] = df['price'].fillna(df['price'].mean())
df.dropna(subset=['customer_id'], inplace=True)

df.drop_duplicates(inplace=True)

df['product'] = df['product'].str.lower()
df['purchase_date'] = pd.to_datetime(df['purchase_date'])

z_scores = (df['price'] - df['price'].mean()) / df['price'].std()
df = df[z_scores < 3]

df.to_csv("cleaned_data.csv", index=False)
```

---

## From case study to production
- Both cases share a pattern
- Retail emphasizes revenue integrity
- Fairness review may follow in Chapter 7

---

## Takeaways
- Domain context chooses imputation and outlier rules
- Case studies connect Sections 5.2–5.5 into narratives
- Module activities supply hands-on repetition without requiring live execution on the

---

## Next
- Complete the quiz for this part
- Continue to advanced topics, Bayesian imputation, streaming data

