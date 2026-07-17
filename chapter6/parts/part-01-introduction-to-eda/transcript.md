# Chapter 6 — Introduction to EDA — transcript

**Part id:** part-01-introduction-to-eda  
**Estimated duration:** 6 minutes  
**Sources:** `author/chapter6.tex` (§6.1), `modules/chapter6/example1/`

## Slide 1 — Chapter 6 — Introduction to EDA

Chapter 5 repaired defects in a table; this chapter asks how to explore that table before formal modeling. Exploratory Data Analysis summarizes and visualizes datasets to understand structure, spot anomalies, and form questions—not to confirm pre-chosen hypotheses.

## Slide 2 — Learning objectives

By the end of this part, you should define EDA, explain how it differs from confirmatory analysis, and describe how exploration and cleaning iterate in practice.

## Slide 3 — What EDA does

EDA combines descriptive statistics, graphical plots, and light transformations. Typical steps include summarizing variables, visualizing relationships, and flagging missing values, outliers, or inconsistencies for repair. The objective is to understand the data itself before choosing models or tests.

## Slide 4 — EDA versus earlier chapters

Chapter 1 introduced a minimal exploration mindset; Chapter 5 covered repairing defects once found. This chapter is the authoritative home for exploration: plots and summaries reveal problems, and cleaning restores a table you can explore again with confidence.

## Slide 5 — Example 6.1 — E-commerce customer EDA pass

Example 6.1 sketches a first pass on a customer table: review mean, median, and standard deviation for age, income, and purchase frequency, then histogram age and scatter income versus spending. Open the example 1 module for this chapter to walk through that sequence.

## Slide 6 — Why EDA matters

EDA clarifies data structure, surfaces quality issues for Chapter 5 repair, informs model choice, and guides hypothesis formation from patterns you did not expect. Example 6.4 contrasts linear and nonlinear cues; Example 6.5 shows a sales–weather relationship prompting seasonal questions.

## Slide 7 — Example 6.4 — Linear versus nonlinear patterns

Example 6.4 notes that a strong linear scatter suggests linear regression may fit, while curved or clustered patterns may favor trees or neural networks. Shape checks from Example 6.2 should precede algorithm selection.

## Slide 8 — Takeaways

EDA is observation-first exploration before modeling. It iterates with cleaning. Summaries plus plots form the core toolkit introduced in the parts that follow.

## Slide 9 — Next

Pause for the quiz, then continue to data types and measures of central tendency.
