# Chapter 1 — Introduction to datasets — transcript

**Clip id:** clip-01-introduction-to-datasets  
**Estimated duration:** 6 minutes  
**Sources:** `author/chapter1.tex` (§1.1), `modules/chapter1/example1/`, `modules/chapter1/example4/`

## Slide 1 — Chapter 1 — Introduction to datasets

This clip opens Chapter 1 by answering a deceptively simple question: what counts as a dataset? By the end, the vocabulary of records and attributes should feel concrete, whether the file is a spreadsheet or a JSON document.

## Slide 2 — Learning objectives

Three goals guide this clip. First, define a dataset as something curated for analysis, not merely a raw stream of events. Second, separate records from attributes so every later example has a shared language. Third, see that the same idea appears in both flat CSV tables and nested JSON.

## Slide 3 — What is a dataset?

A dataset is a curated collection of data, often organized as records and attributes, that serves as input to analysis, modeling, or decision-making. Unlike raw operational logs, a dataset usually has defined scope, structure, and ideally documentation that makes it interpretable. In modern data work, the dataset is the basic unit—whether the task is machine learning, statistics, or business intelligence.

## Slide 4 — Records and attributes

In tabular data, each record is one observation—one sale, one patient, one sensor reading—and each attribute describes a property of that observation. The sales CSV uses Date, Product, Quantity, and Price as attributes; each row is one transaction. The same mapping appears in healthcare and sensor examples later in the section: change the domain, keep the structure.

## Slide 5 — Example 1.1 — Sample CSV sales data

Example 1.1 is the chapter's first concrete anchor: a small CSV of retail sales. Each row is one sale; columns detail product, date, quantity, and price. Open `modules/chapter1/example1/` to inspect the file and count rows and columns before moving on—later examples change domain but keep this shape.

## Slide 6 — Example 1.4 — Housing prices in JSON

Datasets are not only tables. Example 1.4 stores housing listings as JSON with nested fields—still records with attributes, but in a flexible schema. The form changes; the objective stays the same: provide meaningful data that can be turned into insight. Try `modules/chapter1/example4/` to see how keys and nested objects play the role of columns.

## Slide 7 — Takeaways

Remember three points. A dataset is prepared for a purpose. Records and attributes are the shared vocabulary. Formats and modalities vary widely, but the goal of interpretable, usable data does not.

## Slide 8 — Next

Pause for the quiz, then continue to the next clip on types of datasets—structured, unstructured, and semi-structured.
