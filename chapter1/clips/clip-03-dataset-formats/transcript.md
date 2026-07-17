# Chapter 1 — Dataset formats — transcript

**Clip id:** clip-03-dataset-formats  
**Estimated duration:** 6 minutes  
**Sources:** `author/chapter1.tex` (§1.2.5), `modules/chapter1/example8/`, `modules/chapter1/example9/`

## Slide 1 — Chapter 1 — Dataset formats

Structure tells you how records are organized; format tells you how they are stored. This clip connects common on-disk formats to the types from the previous clip.

## Slide 2 — Learning objectives

You should leave able to name formats for tabular, hierarchical, and geospatial data, explain when CSV, SQL, HDF5, or GeoJSON fits, and connect format choice to the tools that will consume the data.

## Slide 3 — Why format matters

Format is the serialization of structure. Matching format to structure, expected volume, and downstream tools reduces friction across collection and analysis. A mismatch—for example, forcing huge arrays through naive CSV—creates avoidable cost.

## Slide 4 — Common formats at a glance

CSV remains the common language for simple tables. SQL tables add typed schemas and efficient queries. JSON and GeoJSON handle nested objects and spatial features. HDF5 targets large scientific or array-oriented datasets. Each aligns with a structural niche.

## Slide 5 — Example 1.8 — SQL format

Example 1.8 shows structured data in a relational form: typed columns and queries for filtering and joins. When attributes are stable and analysts need aggregations, SQL (or an equivalent relational store) is a natural fit. Explore `modules/chapter1/example8/`.

## Slide 6 — Example 1.9 — HDF5

Example 1.9 creates and reads an HDF5 file—a hierarchical binary format efficient for large numeric arrays. Scientific and machine-learning pipelines often prefer HDF5 when CSV becomes too slow or too large. Try `modules/chapter1/example9/` (requires h5py).

## Slide 7 — Choosing a format

Start from structure, then consider size, update rate, and tooling. Prefer formats your team already supports, and document the choice so later consumers are not guessing. Metadata and documentation—covered next—make that choice durable.

## Slide 8 — Takeaways

Format serializes structure. Everyday tables lean on CSV and SQL; specialized shapes and scales use HDF5, GeoJSON, and related formats.

## Slide 9 — Next

Complete the quiz, then move to characteristics of good datasets—accuracy, completeness, and related quality dimensions.
