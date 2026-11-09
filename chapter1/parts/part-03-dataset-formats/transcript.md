# Chapter 1 — Dataset formats — transcript

**Part id:** part-03-dataset-formats  
**Estimated duration:** 8 minutes  
**Sources:** `author/chapter1.tex` (§1.2.5), `modules/chapter1/example8/`, `modules/chapter1/example9/`, `docs/track1-introduction-to-datasets/03-dataset-formats.md`

## Slide 1 — Chapter 1 — Dataset Formats

Welcome to Part 3 of Chapter 1. Having analyzed dataset structural types, we now examine physical storage serialization architectures. We study how on-disk byte layouts govern input-output throughput, query latency, and memory footprints.

## Slide 2 — Learning Objectives

Four foundational goals guide our exploration of dataset formats. We contrast row-oriented stores with columnar architectures through mechanical sympathy with modern storage hardware. We formalize analytical query input-output using mathematical models of projection and compression. We analyze columnar encoding techniques including dictionary compression, run-length encoding, and predicate pushdown. Finally, we evaluate SQL, HDF5, and Parquet trade-offs using our interactive benchmark simulator.

## Slide 3 — The Physical Storage Serialization Dilemma

Choosing a storage format is an architectural decision that governs system performance. A format mismatch imposes severe computational and financial penalties across data pipelines. Storing hundreds of millions of transaction records in uncompressed CSV wastes massive storage and bandwidth parsing text delimiters into binary numbers. Columnar and binary serializations eliminate parsing overhead by storing values in native binary representations.

## Slide 4 — Row Stores versus Columnar Stores: Mechanical Sympathy

Modern NVMe solid-state storage reads data in fixed physical four-kilobyte pages. Row-oriented layouts group all fields of an individual record contiguously on physical disk pages. Row layouts excel at transactional point lookups where single full records are modified. Columnar stores like Apache Parquet layout all values of a single column contiguously. When computing aggregations over selected columns, columnar engines load only target attributes, bypassing discarded fields entirely.

## Slide 5 — Mathematical Model of Analytical Query I/O

Analytical input-output efficiency can be modeled mathematically. For a table of N records and M columns, an uncompressed row store must read all column byte widths for every query. A columnar architecture executes projection pushdown, reading only requested column subsets. Columnar compression ratios further shrink physical disk footprint by exploiting type homogeneity. Total bytes transferred drops by an order of magnitude for analytical workloads.

## Slide 6 — Advanced Columnar Encoding: Dictionary and RLE

Columnar engines achieve high compression ratios through specialized entropy encoding schemes. Categorical features with low cardinality replace repetitive strings with compact integer tokens. Run-length encoding compresses consecutive identical values into compact value and count pairs. Combining dictionary mapping with run-length encoding dramatically reduces memory footprint while preserving direct random access.

## Slide 7 — Predicate Pushdown and Row Group Metadata Skipping

Apache Parquet organizes large datasets into self-contained row groups. Each row group header maintains embedded metadata storing exact minimum, maximum, and null counts for every column. When executing filtered queries, query engines inspect row group metadata before loading data. If a query filter falls outside the row group minimum and maximum range, the engine skips the entire row group from disk.

## Slide 8 — Example 1.8 — SQL Relational Storage

Example 1.8 demonstrates relational tabular data managed by a relational SQL engine. Relational database management systems enforce strong column typing, unique primary keys, and foreign key integrity. Structured query language allows analysts to perform declarative filtering, joins, and aggregations across related tables. You can inspect the table schemas and execute analytical queries in the example 8 module.

## Slide 9 — Example 1.9 — Hierarchical Scientific Arrays in HDF5

Example 1.9 demonstrates scientific array storage using the Hierarchical Data Format version 5. HDF5 organizes complex multidimensional numeric arrays into tree-like group hierarchies. It supports chunked storage and native compression for high-dimensional scientific tensors. Pipelines in physics, climate modeling, and deep learning rely on HDF5 for rapid multi-dimensional slicing. You can run code to create and query an HDF5 archive in the example 9 module.

## Slide 10 — Multi-Format Trade-Off Matrix: Parquet, CSV, and SQLite

Engineering teams must select formats based on access patterns and scale. Plain text CSV remains universally portable for small diagnostic exports despite slow parsing. Relational SQLite provides zero-configuration local transactions and indexed queries for mobile and embedded applications. Apache Parquet represents the industry standard for analytical data lakes, maximizing compression and query speed. Specialized scientific formats like HDF5 and Zarr remain optimal for high-dimensional numeric arrays.

## Slide 11 — In-Browser Storage Format Benchmark and I/O Simulator

Learners can evaluate serialization trade-offs interactively using our in-browser Storage Format Benchmark. The tool benchmarks file size, write latency, and analytical query scan times across CSV, JSON, and Parquet. You can adjust column selectivity and row group sizes to observe predicate pushdown and projection savings. Observing these live metrics reinforces theoretical input-output equations with concrete measurements.

## Slide 12 — Key Takeaways and Format Decision Framework

Four principles govern physical format selection for dataset engineering. Row layouts optimize single-record transactional writes and key-based point lookups. Columnar stores optimize analytical aggregations through projection pushdown and entropy compression. Predicate pushdown skips irrelevant row groups using embedded header metadata. Matching storage format to downstream access patterns prevents expensive hardware bottlenecks.

## Slide 13 — Next Steps

Pause here to test your understanding with the quiz for this part. When ready, proceed to Part 4 to explore the characteristics of good datasets and multi-dimensional quality frameworks.
