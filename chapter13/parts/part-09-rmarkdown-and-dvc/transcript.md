# Chapter 13 — R Markdown and DVC tools — transcript

**Clip id:** part-09-rmarkdown-and-dvc
**Estimated duration:** 7 minutes
**Sources:** `author/chapter13.tex` (§13.9–13.10), `modules/chapter13/example41/`, `modules/chapter13/example44/`, `modules/chapter13/example45/`

## Slide 1 — Chapter 13 — R Markdown and DVC tools

CI keeps pipelines green; literate tools and data-versioning systems keep analyses and large artifacts aligned. This part covers R Markdown reports and DVC for tracking training data, weights, and pipeline stages. Chapter 8 introduces DVC mechanistically; here the focus is research-facing reports and published ML artifacts.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to explain how R Markdown keeps code, narrative, and results synchronized; describe DVC tracking of training data and model weights; and outline a DVC pipeline that versions preprocess, train, and evaluate stages.

## Slide 3 — Literate reporting with R Markdown

R Markdown creates dynamic, reproducible reports that integrate code, data, and results in a single document. When the document is compiled, embedded code executes and tables, figures, and statistical outputs are inserted automatically. That coupling keeps analysis, narrative, and visualization synchronized and supports version control so collaborators track changes over time. Outputs can include HTML, PDF, or Word for flexible sharing.

## Slide 4 — Example 13.41 — RMarkdown Public Health Analysis Report

Example 13.41 regenerates an analysis report from an R Markdown source. A researcher analyzing a public health dataset might load data, clean it, run statistical analyses, and generate visualizations in one document. As the report compiles, code and narrative stay synchronized, reducing the risk that a paper figure drifts from the script that produced it. The example 41 module for this chapter covers that public-health report pattern.

## Slide 5 — DVC for large research artifacts

Large datasets in genomics, climate modeling, or machine learning are difficult to track with Git alone. DVC versions large datasets and models so they remain reproducible and shareable: metadata and pointers live in the repository, while the bytes live in external storage such as cloud object stores. Every modification remains traceable, improving integrity for published results that depend on heavy artifacts.

## Slide 6 — Example 13.44 — DVC Tracks Training Data and Weights

Example 13.44 versions training data, model weights, and evaluation outputs with DVC. In a machine learning project, managing these dependencies helps ensure that the data and models used to produce published results can be retrieved later. Without that linkage, a paper may cite results that cannot be rebuilt from the current repository. The example 44 module for this chapter summarizes tracking data and weights together.

## Slide 7 — Example 13.45 — DVC Pipeline for Preprocess Train Evaluate

DVC also supports data pipelines that automate flow through the research process. Example 13.45 defines a versioned pipeline across preprocessing, model training, and evaluation. Each step’s inputs and outputs are tracked so regenerating results is a single pipeline run rather than a fragile sequence of manual scripts. The example 45 module for this chapter frames that preprocess–train–evaluate pipeline.

## Slide 8 — Takeaways

R Markdown couples narrative and executable analysis so published reports recompile faithfully. DVC keeps large training data and model weights retrievable alongside code. Versioned DVC pipelines encode preprocess, train, and evaluate stages as a single reproducible path. Literate reports plus data versioning close the gap between papers and the artifacts they claim.

## Slide 9 — Next

The final part covers cloud collaboration, audit trails that link retraining to data versions, common pitfalls such as environment drift, and a brief climate-modeling outlook.
