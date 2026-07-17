# Chapter 6 — Best practices in EDA — transcript

**Part id:** part-09-best-practices-in-eda  
**Estimated duration:** 6 minutes  
**Sources:** `author/chapter6.tex` (§6.7), `modules/chapter6/example6/`

## Slide 1 — Chapter 6 — Best practices in EDA

Exploration is also communication and reproducibility. This part covers chart choice, honest axes, documenting decisions, notebook workflows, and stakeholder storytelling.

## Slide 2 — Learning objectives

By the end of this part, you should select charts by analysis type, avoid misleading visual design, document EDA steps, and tailor presentations to technical versus non-technical audiences.

## Slide 3 — Linking detection to repair

When EDA surfaces defects, log what you found and apply Chapter 5 repairs. Short notes tying plots to cleaning actions support reproducibility and later model audits.

## Slide 4 — Choosing the right chart

Histograms and box plots for univariate numerics; bar charts for categories; scatter plots for two continuous variables; heatmaps for correlation matrices; pair plots for multivariate tours. Simplicity beats decorative complexity.

## Slide 5 — Avoiding misleading visuals

Do not truncate axes to exaggerate differences, overload color, or cherry-pick time windows. Anscombe's quartet reminds us identical summaries can hide different shapes—plots must be read carefully.

## Slide 6 — Reproducibility

Document steps in notebooks or scripts; explain why transforms or charts were chosen. Use version control for analysis artifacts. Markdown cells in Jupyter should state the question each plot answers.

## Slide 7 — Collaboration and storytelling

Tailor depth to the audience—statistical detail for engineers, decisions and recommendations for executives. Each chart should convey one message; sequence visuals to build a narrative from distributions to relationships to actions.

## Slide 8 — Takeaways

Good EDA is reproducible and honest. Chart choice and annotation matter as much as code. Link exploration logs to cleaning and modeling downstream.

## Slide 9 — Next

Pause for the quiz, then continue to common pitfalls in EDA.
