---
marp: true
title: Chapter 1 — Introduction to Datasets
paginate: true
---

# Chapter 1 — Introduction to Datasets

Short lecture clips covering definitions, types, formats, quality, exploration, applications, and management

---

## Learning objectives

- Define a dataset as curated records and attributes prepared for a purpose
- Classify datasets by structure, temporal behavior, and storage format
- Assess quality along accuracy, completeness, consistency, relevance, and timeliness
- Apply a first-pass exploration mindset before modeling
- Recognize how organizations put datasets to work and why management matters

---

## Agenda

1. Introduction to datasets
2. Types of datasets
3. Dataset formats
4. Characteristics of good datasets
5. Exploring a dataset
6. Uses of datasets
7. Dataset management


---

## What is a dataset?

- Curated collection of data for analysis or decisions
- Typically organized as records and attributes
- Prepared for a purpose: scope, structure, documentation
- Basic unit for ML, statistics, and business intelligence

---

## Records and attributes

- **Record** — one observation (row, instance)
- **Attribute** — one property of that observation (column, field)
- Sales example: one sale = one record; Date, Product, Price = attributes
- Same pattern in healthcare, sensors, and other domains

---

## Example 1.1 — Sample CSV sales data

- Setting: six retail transactions in CSV
- Key idea: each row is one sale; columns describe it
- Try it: `modules/chapter1/example1/`

---

## Example 1.4 — Housing prices in JSON

- Setting: nested property listings (semi-structured)
- Key idea: records need not be flat tables
- Same goal: meaningful, interpretable data for analysis
- Try it: `modules/chapter1/example4/`

---

## Takeaways

- A dataset is curated for a purpose, not just a dump of bytes
- Records + attributes are the core vocabulary
- Form varies (CSV, JSON, images, text); the goal stays insight

---

# Chapter 1 — Types of datasets

Classify datasets by structure and temporal behavior

---

## Learning objectives

- Contrast structured, unstructured, and semi-structured data
- Give a typical format and example for each structural type
- Distinguish static from dynamic datasets

---

## Two classification axes

- **Structure:** structured / unstructured / semi-structured
- **Temporal behavior:** static vs dynamic
- Structure affects how you store, query, and analyze
- Choosing the right representation is a prerequisite for reliable analysis

---

## Structured datasets

- Fixed schema: rows and columns, consistent types
- Common stores: spreadsheets, relational tables, CSV
- Easy to filter, join, and aggregate
- Example: customer table (ID, Name, Email, …)

---

## Unstructured datasets

- No fixed row–column schema
- Text, images, audio, video
- Insights often need NLP or computer vision
- Example: social posts, X-rays, voice recordings

---

## Semi-structured datasets

- Flexible schema with tags or keys (JSON, XML, YAML)
- Nested fields without a rigid relational table
- Example 1.7: JSON objects with varying optional keys
- Try it: `modules/chapter1/example7/`

---

## Static vs dynamic

- **Static:** snapshot that changes rarely (archive census extract)
- **Dynamic:** updates continuously (sensor streams, click logs)
- Same entity can appear in both forms over its lifecycle
- Temporal behavior drives refresh, versioning, and monitoring needs

---

## Takeaways

- Structure and time are independent axes
- Structured data is easiest to query; unstructured needs extraction
- Semi-structured sits between: flexible keys, still machine-readable

---

# Chapter 1 — Dataset formats

Match storage formats to structure, volume, and tools

---

## Learning objectives

- Name common formats for tabular, hierarchical, and geospatial data
- Explain when CSV, SQL, HDF5, or GeoJSON is a fit
- Link format choice to downstream tooling

---

## Why format matters

- Format is how structure is serialized on disk
- Wrong format creates friction in the pipeline
- Match format to structure, volume, and tools
- Complements the type taxonomy from the previous clip

---

## Common formats at a glance

- **CSV** — simple tabular exchange
- **SQL tables** — queryable structured stores
- **JSON / GeoJSON** — nested or spatial features
- **HDF5** — large scientific / array datasets

---

## Example 1.8 — SQL format

- Setting: relational tables with typed columns
- Key idea: schema + queries for filtering and joins
- Fits structured datasets with stable attributes
- Try it: `modules/chapter1/example8/`

---

## Example 1.9 — HDF5

- Setting: hierarchical binary store for arrays
- Key idea: efficient read/write for large numeric data
- Common in scientific and ML feature pipelines
- Try it: `modules/chapter1/example9/`

---

## Choosing a format

- Start from structure (tabular vs nested vs spatial)
- Consider size, update rate, and who will query it
- Prefer formats your stack already supports well
- Document the choice in metadata (next quality topics)

---

## Takeaways

- Format = serialization of structure
- CSV and SQL dominate everyday tables
- HDF5 and GeoJSON serve specialized shapes and scales

---

# Chapter 1 — Characteristics of good datasets

Judge quality as a bundle of task-relative dimensions

---

## Learning objectives

- List five quality dimensions from the chapter
- Diagnose accuracy, completeness, and consistency defects
- Explain why metadata and documentation matter

---

## Five quality dimensions

- **Accuracy** — values reflect ground truth closely enough
- **Completeness** — needed records and attributes are present
- **Consistency** — uniform formats, units, definitions
- **Relevance** — data answers the intended question
- **Timeliness** — data is sufficiently up to date

---

## Example 1.11 — Incorrect transaction

- Setting: financial ledger with a mis-keyed amount
- Key idea: one extra zero shifts monthly revenue by 10×
- Accuracy failures distort aggregates and forecasts
- Try it: `modules/chapter1/example11/`

---

## Completeness and consistency

- Missing age or diagnosis fields bias clinical models (eg:1.12)
- Mixed date formats break chronological sorting (eg:1.13)
- Defects interact: complete yet inaccurate still fails the task
- Systematic repair is deferred to later chapters

---

## Metadata and documentation

- Metadata: who, when, schema, units, provenance
- Documentation: how to interpret and reuse the file
- Example 1.14: weather dataset metadata fields
- Try it: `modules/chapter1/example14/`

---

## Takeaways

- Quality is multi-dimensional and task-relative
- Spot accuracy, missingness, and format clashes early
- Metadata + docs make datasets usable beyond their author

---

# Chapter 1 — Exploring a dataset

Discover whether a concrete file meets the quality bar

---

## Learning objectives

- State three early questions exploration should answer
- Match common tools to dataset size and structure
- Outline a first-pass profiling pattern (summaries + visuals + missingness)

---

## Why explore first?

- Turns an unfamiliar file into a mental model
- Surfaces seasonal patterns, outliers, missing fields
- Shapes which quality issues to prioritize
- Does not replace formal cleaning—reveals where it is needed

---

## Three early questions

- What is in the table?
- What looks suspicious?
- What analysis goals remain feasible given defects?

---

## Tools for exploration

- Spreadsheets — small tables, quick looks
- SQL — filter and aggregate relational stores
- pandas — reproducible profiling scripts
- Tableau / Power BI — shared interactive views

---

## Example 1.20 — Household incomes EDA

- Setting: compact income table + pandas profiling
- Key idea: summaries, distribution checks, missingness
- Adapt the script to any new CSV
- Try it: `modules/chapter1/example20/`

---

## Takeaways

- Explore before modeling to set expectations
- Tool choice follows size, structure, and audience
- Document what you inspected and what you will fix

---

# Chapter 1 — Uses of datasets

Where datasets create value—and one end-to-end workflow

---

## Learning objectives

- Map sectors to typical datasets and analytical goals
- Trace the shared lifecycle: define, assess, explore, act
- Outline the customer-churn case study steps

---

## Applications across sectors

- Retail: purchase histories → segmentation, forecasts
- Healthcare: EHRs and wearables → risk and monitoring
- Finance: ledgers → fraud and credit scoring
- Education and government: logs and statistics → intervention and planning

---

## Example 1.21 — Purchase history

- Setting: one row per order (customer, category, date, amount)
- Key idea: aggregates reveal repurchase rhythms
- Drives segmentation and promotional calendars
- Module: `modules/chapter1/example21/`

---

## Case study: customer churn

- Collect and join customer behavior features
- Explore and clean before modeling
- Train a classifier; score risk of cancellation
- Act with retention offers guided by feature importance

---

## Example 1.31 — Churn model sketch

- Setting: Python workflow on churn labels
- Key idea: same arc as fraud or demand forecasting
- Only labels and cost of errors change by domain
- Try it: `modules/chapter1/example31/`

---

## Takeaways

- Domain vocabulary changes; the lifecycle does not
- Exploration and quality feed every serious application
- Churn shows define → prepare → model → intervene

---

# Chapter 1 — Dataset management

Keep datasets trustworthy as they are stored, shared, and reused

---

## Learning objectives

- Explain why management matters after models ship
- List core management practices (versioning, metadata, access, catalog)
- Name privacy and security controls that protect sensitive tables

---

## Why management matters

- Quiet work: access, versions, backups, retention
- Traceability for audits and collaboration
- Prevents undocumented preprocessing from poisoning models
- Protects the investment in collection and quality

---

## Best practices (overview)

- Version control for evolving extracts
- Cleaning and transformation with clear schemas
- Metadata documentation and data catalogs
- Storage, backups, and role-based access control

---

## Privacy and security

- Encryption at rest and in transit
- Anonymization / de-identification for sharing
- MFA and role-based access
- Compliance (e.g., GDPR, HIPAA) plus audit logging

---

## Looking ahead

- This chapter: what datasets are and how to use them responsibly
- Next: Chapter 2 — how records are collected
- Management depth continues in later chapters (privacy, docs, storage)

---

## Takeaways

- Management is not an optional add-on
- Versioning + metadata + access must work together
- Protection begins when records are first stored
