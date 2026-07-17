# Chapter 1 — Types of datasets — transcript

**Clip id:** clip-02-types-of-datasets  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter1.tex` (§1.2.1–1.2.4), `modules/chapter1/example7/`

## Slide 1 — Chapter 1 — Types of datasets

With records and attributes defined, this clip classifies how datasets are organized. The taxonomy—structure and temporal behavior—appears throughout the rest of the book.

## Slide 2 — Learning objectives

By the end of this clip, you should contrast the three structural types, name a typical format for each, and explain when a dataset is static versus dynamic.

## Slide 3 — Two classification axes

Datasets are commonly classified along two axes. Structure covers structured, unstructured, and semi-structured forms. Temporal behavior covers static snapshots versus continuously updating streams. Selecting an appropriate representation is a prerequisite for reliable analysis.

## Slide 4 — Structured datasets

Structured datasets follow a fixed schema: rows and columns with consistent types. They live comfortably in spreadsheets and relational databases and are generally the easiest to query and aggregate. A retail customer table—one row per customer, typed columns for email and purchase history—is the textbook case.

## Slide 5 — Unstructured datasets

Unstructured data has no predefined row–column model. Text, images, audio, and video fall here. Valuable insights often require NLP or image recognition rather than a simple SQL filter. Social media feedback and medical images are common examples.

## Slide 6 — Semi-structured datasets

Semi-structured data uses tags or keys—JSON, XML, YAML—without requiring every record to share the same flat columns. Example 1.7 shows JSON objects where optional fields appear when relevant. Open `modules/chapter1/example7/` to inspect a concrete sample.

## Slide 7 — Static vs dynamic

Static datasets change rarely—an archived extract. Dynamic datasets update continuously—sensor streams or click logs. The same entity can move between forms over its lifecycle. Temporal behavior shapes how often you refresh, version, and monitor the data.

## Slide 8 — Takeaways

Structure and time are independent. Structured data is easiest to query; unstructured data needs extraction pipelines; semi-structured data offers flexible keys that remain machine-readable.

## Slide 9 — Next

Complete the quiz, then continue to dataset formats—how these types are stored on disk.
