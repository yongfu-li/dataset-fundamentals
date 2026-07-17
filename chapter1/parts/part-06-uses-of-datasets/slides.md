---
marp: true
title: Chapter 1 — Uses of datasets
paginate: true
---

# Chapter 1 — Uses of datasets

Earlier parts answered what a dataset is and how to read one responsibly

---

## Learning objectives
- Map sectors to typical datasets and goals, recognize the shared lifecycle across domains
- Outline the steps in the customer-churn case study

---

## Applications across sectors
- Use them to monitor performance, detect risk, or personalize services
- Retail emphasizes purchase and clickstream data

---

## Example 1.21 — Purchase history
- Example 1.21 — hands-on module
- Example 1.21 stores one row per order with customer, category, date, and amount
- Aggregating by customer reveals repurchase intervals and category preferences that drive
- Explore the chapter example module
- View files: `modules/chapter1/example21/`

---

## Case study: customer churn
- The churn case study stitches the chapter together
- Ranked feature importance highlights which behaviors precede churn

---

## Example 1.31 — Churn model sketch
- Example 1.31 — hands-on module
- Example 1.31 provides a Python sketch of that pipeline
- The same structure appears in fraud scoring and demand forecasting
- Explore the chapter example module
- View files: `modules/chapter1/example31/`

---

## Example 1.31 — listing

```
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.impute import SimpleImputer
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

# Sample dataset
data = {
    "Customer_ID": [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010],
    "Complaints": [2, 5, 8, 1, 3, 7, 0, 4, 6, 9],
    "Product_Usage": [50, 30, 20, 70, 45, 15, 80, 35, 25, 10],
    "Account_Activity_Change": [5, -10, -15, 8, -5, -20, 10, -7, -12, -25],
    "Subscription_Length": [24, 36, 12, 48, 30, 6, 60, 28, 14, 10],
    "Churned": [0, 1, 1, 0, 0, 1, 0, 1, 1, 1]  # 1 = Churned, 0 = Not Churned
}

# Convert to DataFrame
df = pd.DataFrame(data)

# Explore dataset
print("Dataset Info:")
df.info()
print("\nMissing Values:")
print(df.isnull().sum())
print("\nSummary Statistics:")
print(df.describe())

# Handle missing values using imputation
imputer = SimpleImputer(strategy="mean")
X = df.drop(columns=["Customer_ID", "Churned"])
X.iloc[:, :] = imputer.fit_transform(X)

y = df["Churned"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a Random Forest model
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)

# Feature importance
feature_importance = pd.DataFrame({"Feature": X.columns, "Importance": rf.feature_importances_})
feature_importance = feature_importance.sort_values(by="Importance", ascending=False)

# Print feature importance
print("Feature Importance:")
print(feature_importance)

# Make predictions
y_pred = rf.predict(X_test)

# Calculate evaluation metrics
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred)
recall = recall_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)

# Display evaluation metrics
evaluation_metrics = pd.DataFrame({
    "Metric": ["Accuracy", "Precision", "Recall", "F1 Score"],
    "Value": [accuracy, precision, recall, f1]
})

print("\nModel Evaluation Metrics:")
print(evaluation_metrics)
```

---

## Takeaways
- Domain vocabulary changes; the lifecycle does not
- Quality and exploration feed every serious application
- Churn is the chapter's end-to-end illustration of define, prepare, model, and intervene

---

## Next
- Complete the quiz for this part
- Complete the quiz, then finish the chapter with dataset management, versioning, access

