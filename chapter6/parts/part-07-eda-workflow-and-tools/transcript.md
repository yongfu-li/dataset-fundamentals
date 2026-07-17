# Chapter 6 — EDA workflow and tools — transcript

**Part id:** part-07-eda-workflow-and-tools  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter6.tex` (§6.5), `modules/chapter6/example1/`

## Slide 1 — Chapter 6 — EDA workflow and tools

Exploration needs a repeatable sequence and a tool stack. This part walks four linked steps and maps them to pandas, matplotlib, seaborn, and automated profiling helpers.

## Slide 2 — Learning objectives

By the end of this part, you should outline the four-step EDA process, name core Python libraries for tables and plots, and recognize when automated profiling accelerates a first pass.

## Slide 3 — Step 1 — Data understanding

Review structure with head, dtypes, and missing or duplicate flags. Know which columns are numeric, categorical, or temporal before summarizing. Example 6.1 begins here on the e-commerce customer table.

## Slide 4 — Step 2 — Descriptive statistics

Compute means, medians, modes, variance, and standard deviation for numerics; counts and percentages for categories. describe() in pandas bundles many numeric summaries—interpret alongside type checks from the previous part.

## Slide 5 — Step 3 — Visualization

Apply histograms, box plots, scatter plots, and bar charts from earlier parts. Visualization reveals patterns summaries alone miss and supports stakeholder communication.

## Slide 6 — Step 4 — Data quality checks

Use Section 6.4 as a checklist, repair in Chapter 5, then re-explore. Iteration is normal: a fixed table may expose new relationship questions.

## Slide 7 — Tools — pandas, matplotlib, seaborn

pandas handles tables—read_csv, describe, isnull, drop_duplicates. matplotlib provides base plotting; seaborn adds statistical aesthetics like histplot with KDE. R users mirror many steps with dplyr and ggplot2 mentioned in the chapter.

## Slide 8 — Automating EDA

Libraries such as pandas-profiling or ydata-profiling generate summary reports quickly—useful for wide tables, but review automated outputs critically and document overrides. Automation starts exploration; it does not replace domain questions.

## Slide 9 — Takeaways

Follow understand, summarize, visualize, quality-check in order. pandas plus seaborn cover most chapter workflows. Automate the first pass, then drill into anomalies manually.

## Slide 10 — Next

Pause for the quiz, then continue to advanced EDA techniques including correlation depth.
