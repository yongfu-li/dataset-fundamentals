---
marp: true
title: Chapter 13 — R Markdown and DVC tools
paginate: true
---

# Chapter 13 — R Markdown and DVC tools

CI keeps pipelines green; literate tools and data-versioning systems keep analyses and large artifacts aligned

---

## Learning objectives
- By the end of this part

---

## Literate reporting with R Markdown
- R Markdown creates dynamic, reproducible reports that integrate code, data
- When the document is compiled, embedded code executes and tables, figures
- That coupling keeps analysis, narrative
- Outputs can include HTML, PDF, or Word for flexible sharing

---

## Example 13.41 — RMarkdown Public Health Analysis Report
- Example 13.41 — hands-on module
- Example 13.41 regenerates an analysis report from an R Markdown source
- Generate visualizations in one document
- As the report compiles
- Explore the chapter example module
- View files: `modules/chapter13/example41/`

---

## DVC for large research artifacts
- Large datasets in genomics
- DVC versions large datasets and models so they remain reproducible and shareable
- Every modification remains traceable

---

## Example 13.44 — DVC Tracks Training Data and Weights
- Example 13.44 — hands-on module
- Example 13.44 versions training data, model weights, and evaluation outputs with DVC
- In a machine learning project
- Without that linkage
- Explore the chapter example module
- View files: `modules/chapter13/example44/`

---

## Example 13.45 — DVC Pipeline for Preprocess Train Evaluate
- Example 13.45 — hands-on module
- DVC also supports data pipelines that automate flow through the research process
- Example 13.45 defines a versioned pipeline across preprocessing, model training
- Each step’s inputs and outputs are tracked so regenerating results is a single pipeline
- Explore the chapter example module
- View files: `modules/chapter13/example45/`

---

## Takeaways
- R Markdown couples narrative and executable analysis so published reports recompile
- DVC keeps large training data and model weights retrievable alongside code
- Versioned DVC pipelines encode preprocess, train
- Literate reports plus data versioning close the gap between papers and the artifacts they

---

## Next
- Complete the quiz for this part
- A brief climate-modeling outlook

