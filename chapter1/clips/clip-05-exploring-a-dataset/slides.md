---
marp: true
title: Chapter 1 — Exploring a dataset
paginate: true
---

# Chapter 1 — Exploring a dataset

Quality criteria tell you what good looks like

---

## Learning objectives
- A minimal profiling pattern using summaries, visuals, and missingness checks

---

## Why explore first?
- Exploration builds a mental model of the domain
- It does not replace formal cleaning in later chapters

---

## Three early questions
- Ask: what is in the table, what looks suspicious
- An e-commerce glance that reveals holiday spikes

---

## Tools for exploration
- Spreadsheets suit small tables
- SQL handles filtering and aggregation in relational stores
- Pandas supports reproducible profiling
- Dashboards help teams share interactive views
- No single tool wins every scenario

---

## Example 1.20 — Household incomes EDA
- Example 1.20 — hands-on module
- Example 1.20 walks through a standard pandas profiling script on a compact
- Use it as a template: summary statistics, distribution checks, and null counts
- Explore the chapter example module
- View files: `modules/chapter1/example20/`

---

## Example 1.20 — listing

```
import pandas as pd
import matplotlib.pyplot as plt

# Load the dataset
household_incomes = pd.read_csv("household_incomes.csv")

# View the first few rows
print(household_incomes.head())

# Summary statistics for numerical columns
print(household_incomes.describe())

# Check for missing values
print(household_incomes.isnull().sum())

# Visualize the income distribution
household_incomes["Income"].hist()
plt.title("Distribution of Household Incomes")
plt.xlabel("Income")
plt.ylabel("Frequency")
plt.show()
```

---

## Takeaways
- Explore before modeling
- Choose tools that fit size and structure
- Document what you inspected and what you decided to fix so later analysis stays

---

## Next
- Complete the quiz for this clip
- Complete the quiz

