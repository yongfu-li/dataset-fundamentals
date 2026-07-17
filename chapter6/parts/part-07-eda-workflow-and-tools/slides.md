---
marp: true
title: Chapter 6 — EDA workflow and tools
paginate: true
---

# Chapter 6 — EDA workflow and tools

Exploration needs a repeatable sequence and a tool stack

---

## Learning objectives
- Pass

---

## Step 1 — Data understanding
- Review structure with head, dtypes, and missing or duplicate flags
- Know which columns are numeric, categorical, or temporal before summarizing
- Example 6.1 begins here on the e-commerce customer table

---

## Step 2 — Descriptive statistics
- Compute means, medians, modes, variance, and standard deviation for numerics
- Describe() in pandas bundles many numeric summaries

---

## Step 3 — Visualization
- Apply histograms, box plots, scatter plots, and bar charts from earlier parts
- Visualization reveals patterns summaries alone miss and supports stakeholder communication

---

## Step 4 — Data quality checks
- Use Section 6.4 as a checklist, repair in Chapter 5, then re-explore
- Iteration is normal: a fixed table may expose new relationship questions

---

## Tools — pandas, matplotlib, seaborn
- Pandas handles tables, read_csv, describe, isnull, drop_duplicates
- Matplotlib provides base plotting
- R users mirror many steps with dplyr and ggplot2 mentioned in the chapter

---

## Automating EDA
- Libraries such as pandas-profiling or ydata-profiling generate summary reports quickly
- Automation starts exploration; it does not replace domain questions

---

## Takeaways
- Follow understand, summarize, visualize, quality-check in order
- Pandas plus seaborn cover most chapter workflows
- Automate the first pass, then drill into anomalies manually

---

## Next
- Complete the quiz for this part
- Continue to advanced EDA techniques including correlation depth

