---
marp: true
title: Chapter 5 — Python cleaning tools
paginate: true
---

# Chapter 5 — Python cleaning tools

Methods become operational through libraries

---

## Learning objectives
- Perform dropna, fillna
- Drop_duplicates in pandas, apply StandardScaler and OneHotEncoder from scikit-learn
- Outline an end-to-end cleaning walkthrough

---

## pandas for cleaning
- Pandas is the default toolkit for tabular cleaning
- Example 5.57 shows dropna and drop_duplicates in one script
- Example 5.59 walks an end-to-end cleaning template from raw extract to model-ready frame

---

## Example 5.57 — Pandas dropna and drop duplicates
- Example 5.57 — hands-on module
- The minimal cleaning API surface
- Explore the chapter example module
- View files: `modules/chapter5/example57/`

---

## Example 5.57 — listing

```
import pandas as pd
df = pd.read_csv("data.csv")
df = df.dropna()  # Removing rows with missing values
df = df.drop_duplicates()  # Removing duplicate rows
```

---

## scikit-learn for preprocessing
- Scikit-learn provides fit-transform estimators
- Example 5.60 standardizes age and salary; Example 5.61 one-hot encodes gender
- Fit on training data only to prevent leakage

---

## Example 5.59 — Pandas end-to-end cleaning walkthrough
- Example 5.59 — hands-on module
- Example 5.59 ties issues to fixes in one narrative
- Explore the chapter example module
- View files: `modules/chapter5/example59/`

---

## Example 5.59 — listing

```
import pandas as pd

# Load data
df = pd.read_csv("customers.csv")

# 1. Handling Missing Data
df['age'] = df['age'].fillna(df['age'].mean())
df = df.dropna(subset=['name', 'email'])

# 2. Removing Duplicates
df = df.drop_duplicates(subset=['email'])

# 3. Standardizing Column Formats
df['name'] = df['name'].str.title()

# 4. Encoding Categorical Data
df['gender'] = df['gender'].map({'Male': 1, 'Female': 0})

# 5. Saving the Cleaned Data
df.to_csv("cleaned_customers.csv", index=False)
```

---

## When to use which layer
- Use pandas for exploratory fixes and bespoke string parsing
- Use sklearn transformers when the same preprocessing must repeat across folds and
- Keep business rules and unit conversions visible in notebooks or pipeline comments

---

## Takeaways
- Pandas repairs tables; sklearn standardizes repeatable transforms
- Fit transformers on training splits
- Example modules provide runnable templates for this chapter

---

## Next
- Complete the quiz for this part
- Continue to pipelines, automation, visualization, and a brief R contrast

