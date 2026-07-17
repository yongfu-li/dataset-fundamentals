---
marp: true
title: Chapter 6 — Best practices in EDA
paginate: true
---

# Chapter 6 — Best practices in EDA

Exploration is also communication and reproducibility

---

## Learning objectives
- Select charts by analysis type, avoid misleading visual design, document EDA steps
- Tailor presentations to technical versus non-technical audiences

---

## Linking detection to repair
- When EDA surfaces defects, log what you found and apply Chapter 5 repairs
- Short notes tying plots to cleaning actions support reproducibility and later model audits

---

## Choosing the right chart
- Histograms and box plots for univariate numerics
- Simplicity beats decorative complexity

---

## Avoiding misleading visuals
- Do not truncate axes to exaggerate differences
- Anscombe's quartet reminds us identical summaries can hide different shapes

---

## Reproducibility
- Document steps in notebooks or scripts; explain why transforms or charts were chosen
- Use version control for analysis artifacts
- Markdown cells in Jupyter should state the question each plot answers

---

## Collaboration and storytelling
- Tailor depth to the audience
- Each chart should convey one message

---

## Takeaways
- Good EDA is reproducible and honest
- Chart choice and annotation matter as much as code
- Link exploration logs to cleaning and modeling downstream

---

## Next
- Complete the quiz for this part
- Continue to common pitfalls in EDA

