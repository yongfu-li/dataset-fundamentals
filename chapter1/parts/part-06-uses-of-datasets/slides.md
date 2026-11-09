---
marp: true
title: Chapter 1 — Uses of Datasets in Modeling and Industry
paginate: true
---

# Chapter 1 — Uses of Datasets in Modeling and Industry

Welcome to Part 6 of Chapter 1

---

## Learning Objectives
- Four primary learning goals guide this applied lecture
- We trace the closed-loop value creation cycle from raw phenomena to production
- We analyze cross-sector applications and their asymmetric cost topologies
- We formalize rigorous data partitioning protocols and eliminate three deadly data leakage
- Finally, we evaluate customer churn optimization and tune economic decision thresholds in

---

## The Value Creation Cycle: From Records to Action
- A dataset is not an isolated artifact
- Across commercial and scientific sectors, datasets follow an invariant lifecycle
- Real-world phenomena are collected and audited through schema validation gates
- Raw records undergo feature engineering and representation embedding
- Empirical risk minimization fits predictive models

---

## Empirical Risk Minimization and Expected Generalization Risk
- Supervised learning aims to minimize expected statistical risk over the unobserved
- Because the true distribution is inaccessible
- The model minimizes sample loss plus parameter regularization penalties
- High training fidelity only translates into real-world success when the curated sample

---

## Sectoral Applications and Asymmetric Cost Topologies
- Real-world applications operate under severely asymmetric error costs
- In healthcare sepsis forecasting
- In financial fraud detection
- In subscription services

---

## The Critical Protocol: Train, Validation, and Test Partitioning
- To obtain unbiased estimates of model generalization
- The training set optimizes model parameters, the validation set tunes hyperparameters
- When records are independent, stratified splitting preserves target class ratios
- When records represent temporal histories

---

## Three Deadly Data Leakage Vectors
- Data leakage occurs when target or future information inadvertently contaminates model
- Temporal lookahead leakage occurs when global feature statistics are computed across both
- Causing models to memorize individuals
- Exact duplicate record leakage artificially inflates evaluation metrics while failing on

---

## Example 1.21 — Retail Purchase History and Aggregation
- Example 1.21 — hands-on module
- Example 1.21 illustrates how raw transaction logs transform into predictive behavioral
- Individual purchase rows record customer identifiers
- Aggregating transactions by customer yields purchase frequencies and monetary spend
- Explore the chapter example module
- View files: `modules/chapter1/example21/`

---

## Enterprise Case Study: Customer Churn Optimization
- Subscription churn prediction represents a classic enterprise modeling lifecycle
- Behavioral features such as tenure, complaint frequency
- However, setting the decision threshold to point five is rarely optimal
- The optimal economic threshold balances true positive retention gains against the

---

## Example 1.31 — Churn Prediction Pipeline Sketch
- Example 1.31 — hands-on module
- Example 1.31 provides a complete Python implementation of a churn classification pipeline
- Computes ROC curves
- It demonstrates how feature importance scores highlight which behaviors precede customer
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

## In-Browser Decision Threshold and Cost-Benefit Workbench
- Learners can explore threshold optimization interactively using our in-browser Churn
- The interactive simulator lets you adjust the decision threshold across zero to one
- You can observe the trade-offs between precision, recall
- Tuning these controls demonstrates why financial loss matrices dictate practical machine

---

## Key Takeaways and Operational Deployment Principles
- Four principles summarize the applied use of datasets in machine learning systems
- Datasets exist to power closed-loop decision making and empirical risk minimization
- Real-world applications demand error metrics aligned with asymmetric business and clinical
- Rigid train, validation, and test partitioning prevents catastrophic data leakage
- Operational decision thresholds must be optimized against net economic utility rather than

---

## Next
- Complete the quiz for this part
- Pause here to complete the formative quiz for this part

