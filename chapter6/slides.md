---
marp: true
title: Chapter 6 — Exploratory Data Analysis (EDA)
paginate: true
---

# Chapter 6 — Introduction to EDA

Chapter 5 repaired defects in a table; this chapter asks how to explore that table before formal modeling

---

## Learning objectives
- Define EDA, explain how it differs from confirmatory analysis
- Describe how exploration and cleaning iterate in practice

---

## What EDA does
- EDA combines descriptive statistics, graphical plots, and light transformations
- Typical steps include summarizing variables, visualizing relationships
- The objective is to understand the data itself before choosing models or tests

---

## EDA versus earlier chapters
- Chapter 1 introduced a minimal exploration mindset
- This chapter is the authoritative home for exploration

---

## Example 6.1 — E-commerce customer EDA pass
- Example 6.1 — hands-on module
- Example 6.1 sketches a first pass on a customer table
- Explore the chapter example module
- View files: `modules/chapter6/example1/`

---

## Why EDA matters
- Guides hypothesis formation from patterns you did not expect
- Example 6.4 contrasts linear and nonlinear cues

---

## Example 6.4 — Linear versus nonlinear patterns
- Example 6.4 — hands-on module
- Example 6.4 notes that a strong linear scatter suggests linear regression may fit
- Shape checks from Example 6.2 should precede algorithm selection
- View files: `modules/chapter6/example4/`

---

## Takeaways
- EDA is observation-first exploration before modeling
- It iterates with cleaning
- Summaries plus plots form the core toolkit introduced in the parts that follow

---

## Next
- Complete the quiz for this part
- Continue to data types and measures of central tendency

---

# Chapter 6 — Data types and central tendency

Before plotting, classify each column: continuous versus discrete numerics, nominal versus ordinal categories

---

## Learning objectives
- Distinguish four common data types, compute mean, median
- Mode
- State when each central tendency measure is appropriate

---

## Types of data
- Continuous variables take any value in an interval, height, income, sales totals
- Discrete variables are counts, purchases per month, items in a basket
- Nominal categories have no order, product type, color
- Ordinal categories have meaningful order, satisfaction ratings, education bands

---

## Example 6.10 and 6.13 — Continuous and nominal cases
- Example 6.10 — hands-on module
- Example 6.10 lists continuous physical measures
- Example 6.13 shows nominal product categories
- Explore the chapter example module
- View files: `modules/chapter6/example10/`

---

## Mean
- The mean is the arithmetic average, sum divided by count
- Example 6.15 computes mean income
- Use means for roughly symmetric continuous data

---

## Median
- The median is the middle value when sorted
- Example 6.16 contrasts odd and even samples
- Median resists outliers and suits skewed income or spend distributions

---

## Mode
- The mode is the most frequent value, especially useful for categorical data
- Example 6.17 shows a simple numeric mode
- A multimodal distribution may indicate subpopulations worth splitting

---

## Matching summary to type
- Use means and medians for numeric exploration; use mode or frequency tables for categories
- Report all three for numeric fields during early EDA so skew is visible when mean and

---

## Takeaways
- Variable type dictates valid summaries
- Mean, median, and mode answer different questions about center
- Always inspect type before computing describe() output blindly

---

## Next
- Complete the quiz for this part
- Continue to dispersion, shape, frequency tables, and grouping

---

# Chapter 6 — Dispersion, shape, and grouping

A mean without spread is ambiguous

---

## Learning objectives
- Compute variance and standard deviation
- Summarize by groups

---

## Variance and standard deviation
- Variance averages squared deviations from the mean
- Example 6.18 sketches variance for a small sample; Example 6.19 takes the square root
- Larger standard deviation means more spread around the center

---

## Example 6.18 — Variance sketch
- Example 6.18 — hands-on module
- Example 6.18 uses the sample values two, four, four, six, and eight
- Explore the chapter example module
- View files: `modules/chapter6/example18/`

---

## Example 6.18 — listing

```
"""Calculate variance from Example 6.18."""

from __future__ import annotations

from statistics import fmean, pvariance, variance


def main() -> None:
    """Print deviations and both population and sample variance."""
    values: list[int] = [2, 4, 4, 6, 8]
    mean_value: float = fmean(values)
    squared_deviations: list[float] = [
        (value - mean_value) ** 2 for value in values
    ]
    print("Values:", values)
    print("Mean:", mean_value)
    print("Squared deviations:", squared_deviations)
    print("Population variance (n):", pvariance(values))
    print("Sample variance (n-1):", variance(values))

```

---

## Range
- Range is max minus min, Example 6.20 on a small sample
- Simple but sensitive to outliers
- Pair range with quartiles or IQR for robust spread views in later plots

---

## Measures of shape
- Skewness indicates asymmetry: right-skewed income tails pull the mean above the median
- Kurtosis relates to tail heaviness
- Example 6.2 from the introduction linked skewness to model choice

---

## Frequency distributions and grouping
- Frequency tables count category occurrences or bin counts for numerics
- Group-by summaries compute mean spend by region or category
- Aggregation reveals segment differences raw global means hide

---

## Takeaways
- Report center and spread together
- Shape guides transforms and model families
- Frequency and group-by tables bridge summaries to the visual techniques in the next parts

---

## Next
- Complete the quiz for this part
- Continue to univariate and bivariate visualization

---

# Chapter 6 — Univariate and bivariate visualization

Graphics reveal patterns tables hide

---

## Learning objectives
- Choose univariate plots for distribution checks
- Read a correlation heatmap at a screening level

---

## Why visualize
- Visualization supports pattern recognition, quality assessment, hypothesis generation
- In EDA, charts often detect missingness patterns, odd scales

---

## Univariate plots
- Histograms show frequency by bin, useful for age or spend shape
- Box plots summarize median, quartiles, and outlier candidates via the IQR rule
- Pie charts work for quick share checks with few categories

---

## Example 6.2 — Skewness informs model choice
- Example 6.2 — hands-on module
- Example 6.2 ties histogram or density shape to later methods
- Explore the chapter example module
- View files: `modules/chapter6/example2/`

---

## Bivariate plots
- Scatter plots expose linear or nonlinear association, clusters
- Correlation matrices store pairwise coefficients

---

## Categorical–numerical views
- Box plots by category compare spend across product types
- These views support segment comparisons that group-by tables started numerically

---

## Takeaways
- Match chart type to variable count and question
- Univariate plots check shape and outliers; bivariate plots screen relationships
- Correlation heatmaps prioritize pairs for deeper analysis in later parts

---

## Next
- Complete the quiz for this part
- Continue to multivariate and high-dimensional visualization

---

# Chapter 6 — Multivariate visualization

When more than two features matter, pair plots, heatmaps, parallel coordinates, PCA

---

## Learning objectives
- Explain pair plots and parallel-coordinate uses
- State cautions for t-SNE cluster views

---

## Heatmaps and pair plots
- Heatmaps color-code matrix values, default for correlation tables
- Frequency together

---

## Parallel coordinates
- Each variable is a vertical axis; each row is a polyline across axes
- Useful for finding similar customer profiles in moderate dimensions

---

## Principal component analysis
- PCA builds orthogonal components capturing successive maximum variance directions
- Plotting the first two or three components can reveal clusters invisible in raw feature
- PCA is linear; nonlinear structure may need other tools

---

## t-SNE embeddings
- T-SNE emphasizes local neighborhoods in two or three dimensions
- Interpret distances between distant clusters cautiously

---

## Example 6.9 — Geography and purchase frequency
- Example 6.9 — hands-on module
- Example 6.9 links geography to purchase hypotheses
- Explore the chapter example module
- View files: `modules/chapter6/example9/`

---

## Takeaways
- Escalate plot complexity only when the question requires it
- PCA and t-SNE are exploratory projections, not replacements for domain validation
- Pair plots remain the honest first multivariate screen

---

## Next
- Complete the quiz for this part
- Continue to detecting data issues during EDA

---

# Chapter 6 — Detecting data issues

EDA finds problems; Chapter 5 fixes them

---

## Learning objectives
- Name detection methods for five defect classes
- Explain the explore-then-repair loop with Chapter 5

---

## Missing data detection
- Use null counts, column-wise sums, and missingness heatmaps
- Example 6.6 profiles clinical missingness
- Classify MCAR

---

## Example 6.6 — Healthcare missingness profile
- Example 6.6 — hands-on module
- Example 6.6 shows how missing labs appear across patients
- Explore the chapter example module
- View files: `modules/chapter6/example6/`

---

## Outliers and duplicates
- Detect outliers with box plots, scatter plots, Z-scores, and IQR rules
- Example 6.7 places outliers in a fraud transaction setting
- Find duplicates with duplicated checks on keys
- Decide whether outliers are errors, rare valid events, or noise before treatment

---

## Inconsistency and imbalance
- Frequency tables surface format drift, Example 6.8 shows city name inconsistency
- Bar charts of class counts reveal imbalance typical in fraud screens
- Standardize labels in Chapter 5

---

## Example 6.8 — City name inconsistency
- Example 6.8 — hands-on module
- A geographic label conflict visible in value counts
- Explore the chapter example module
- View files: `modules/chapter6/example8/`

---

## Takeaways
- EDA detection is deliberate routing, not silent fixing
- Each defect class has visual and tabular signals
- Repair workflows live in Chapter 5; exploration returns after fixes

---

## Next
- Complete the quiz for this part
- Continue to the EDA workflow and tools

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

---

# Chapter 6 — Advanced EDA techniques

High-dimensional structure

---

## Learning objectives
- Contrast Pearson and Spearman correlation, interpret correlation heatmaps cautiously
- Name additional advanced techniques surveyed in the chapter

---

## Correlation analysis
- Pearson correlation measures linear association between continuous pairs
- Spearman uses ranks and tolerates monotonic nonlinear relationships better
- Coefficients live on minus one to plus one

---

## Reading heatmaps
- Correlation heatmaps make strong pairs easy to scan but do not prove causation
- Confounding and small samples can inflate or hide relationships
- Confirm interesting cells with scatter plots and domain reasoning

---

## Example 6.4 — Linear versus nonlinear patterns
- Example 6.4 — hands-on module
- Example 6.4 reminds you that high Pearson correlation implies linearity
- Explore the chapter example module
- View files: `modules/chapter6/example4/`

---

## Additional advanced techniques
- Links PCA and t-SNE from visualization to structural exploration
- Use these when pairwise screens are insufficient for dimensionality or temporal dependence

---

## When to stop exploring
- Advanced methods still serve exploration, not final inference
- Document which correlations or components motivated feature selection or transforms before

---

## Takeaways
- Choose Pearson or Spearman based on shape and scale
- Heatmaps screen; scatter plots verify
- Advanced tools extend EDA when many features or time order matter

---

## Next
- Complete the quiz for this part
- Continue to best practices for reproducible, clear EDA

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

---

# Chapter 6 — Common pitfalls in EDA

Even experienced analysts over-read charts, ignore quality problems, or stop after one pass

---

## Learning objectives
- Recognize visualization overfitting, confirmation bias, neglected quality checks
- Premature closure of exploration

---

## Overfitting with visualization
- Too many variables, categories, or colors clutter charts and invite false patterns
- Spurious correlations and cherry-picked time ranges can look convincing
- Prefer simple charts, fair axes, and follow-up checks

---

## Misreading patterns
- A one-day sales spike may be a promotion, not a trend
- Weak correlations become overstated when charts are tuned to impress
- Example 6.5's weather cue still needs confirmatory analysis, not instant causation claims

---

## Ignoring data quality issues
- Skipping missingness
- Section 6.4 exists to prevent exploring broken tables as if they were ground truth

---

## Confirmation bias and lack of iteration
- Searching only for evidence that supports a favored hypothesis hides contradictory views
- EDA should be iterative: new plots after cleaning, new questions after surprises
- Example 6.4 warns against forcing linear stories on nonlinear data

---

## Takeaways
- Simplify visuals, validate patterns, fix quality first, and iterate
- Pitfalls are cognitive as much as technical, process discipline reduces them

---

## Next
- Complete the quiz for this part
- Continue to domain case studies

---

# Chapter 6 — Case studies in EDA

Domain narratives show how summaries, plots, and quality checks combine

---

## Learning objectives
- Outline EDA steps for retail segmentation and clinical outcome tables
- Identify exploration priorities in fraud and climate settings

---

## Retail sales analysis
- Mixed currencies
- EDA profiles missingness

---

## Healthcare data analysis
- Clinical records mix labs, history
- Box plots and IQR screens flag vitals

---

## Fraud detection
- Transaction EDA emphasizes extreme amounts, rare positive class counts, and time patterns
- Example 6.7 places outliers in a financial setting
- Open the example 7 module for fraud-oriented summaries

---

## E-commerce segmentation and climate
- Customer segmentation repeats retail motifs, RFM-style features, geography
- Climate monitoring stresses temporal plots, missing sensors

---

## Example 6.5 — Sales and weather hypothesis
- Example 6.5 — hands-on module
- Example 6.5 shows how exploratory correlation can suggest seasonal hypotheses worth later
- Explore the chapter example module
- View files: `modules/chapter6/example5/`

---

## Takeaways
- Case studies share a pattern: profile, visualize, detect issues, clean, re-explore
- Domain dictates which defects and relationships matter most

---

## Next
- Complete the quiz for this part
- Continue to advanced topics and future directions

---

# Chapter 6 — Advanced topics and future directions

Notebook EDA on static CSVs is the baseline; large and streaming datasets push new tooling and pipeline integration

---

## Learning objectives
- Name trends in automated EDA, outline challenges for streaming exploration
- Describe how EDA hooks into ML pipelines

---

## Automated EDA tools
- Report generators and AutoML front-ends accelerate first passes on wide tables
- Fairness implications connected to Chapter 7

---

## EDA in big data and streaming
- Batch assumptions fail when data never stops arriving
- Sliding windows, online summaries, and sampled visualizations replace full-table scans
- Latency and consistency constraints mirror Chapter 5 streaming preprocessing themes

---

## Integration with ML pipelines
- Exploration informs feature stores, train-validation splits, and monitoring baselines
- Documented EDA artifacts become regression tests when production data drifts

---

## Looking ahead
- Chapter 7 deepens bias and fairness analysis once exploration reveals segment disparities
- Strong EDA logs make later modeling and auditing more trustworthy

---

## Takeaways
- Automation scales the first pass; humans keep domain judgment
- Streaming and pipeline integration extend EDA beyond one-off notebooks

---

## Next
- Complete the quiz for this part
- Pause for the quiz
