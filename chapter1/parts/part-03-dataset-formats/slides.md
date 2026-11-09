---
marp: true
title: Chapter 1 — Dataset Formats
paginate: true
---

# Chapter 1 — Dataset Formats

Welcome to Part 3 of Chapter 1

---

## Learning Objectives
- Four foundational goals guide our exploration of dataset formats
- We contrast row-oriented stores with columnar architectures through mechanical sympathy
- We formalize analytical query input-output using mathematical models of projection and
- Predicate pushdown
- Finally, we evaluate SQL, HDF5

---

## The Physical Storage Serialization Dilemma
- Choosing a storage format is an architectural decision that governs system performance
- A format mismatch imposes severe computational and financial penalties across data
- Storing hundreds of millions of transaction records in uncompressed CSV wastes massive
- Columnar and binary serializations eliminate parsing overhead by storing values in native

---

## Row Stores versus Columnar Stores: Mechanical Sympathy
- Modern NVMe solid-state storage reads data in fixed physical four-kilobyte pages
- Row-oriented layouts group all fields of an individual record contiguously on physical
- Row layouts excel at transactional point lookups where single full records are modified
- Columnar stores like Apache Parquet layout all values of a single column contiguously
- When computing aggregations over selected columns

---

## Mathematical Model of Analytical Query I/O
- Analytical input-output efficiency can be modeled mathematically
- For a table of N records and M columns
- A columnar architecture executes projection pushdown
- Columnar compression ratios further shrink physical disk footprint by exploiting type
- Total bytes transferred drops by an order of magnitude for analytical workloads

---

## Advanced Columnar Encoding: Dictionary and RLE
- Columnar engines achieve high compression ratios through specialized entropy encoding
- Categorical features with low cardinality replace repetitive strings with compact integer
- Run-length encoding compresses consecutive identical values into compact value and count
- Combining dictionary mapping with run-length encoding dramatically reduces memory

---

## Predicate Pushdown and Row Group Metadata Skipping
- Apache Parquet organizes large datasets into self-contained row groups
- Each row group header maintains embedded metadata storing exact minimum, maximum
- When executing filtered queries
- If a query filter falls outside the row group minimum and maximum range

---

## Example 1.8 — SQL Relational Storage
- Example 1.8 — hands-on module
- Example 1.8 demonstrates relational tabular data managed by a relational SQL engine
- Relational database management systems enforce strong column typing, unique primary keys
- Structured query language allows analysts to perform declarative filtering, joins
- View files: `modules/chapter1/example8/`

---

## Example 1.8 — listing

```
]
CREATE TABLE Customers (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10,2),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE Order_Items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);
```

---

## Example 1.9 — Hierarchical Scientific Arrays in HDF5
- Example 1.9 — hands-on module
- Example 1.9 demonstrates scientific array storage using the Hierarchical Data Format
- HDF5 organizes complex multidimensional numeric arrays into tree-like group hierarchies
- It supports chunked storage and native compression for high-dimensional scientific tensors
- View files: `modules/chapter1/example9/`

---

## Example 1.9 — listing

```
import h5py
import numpy as np

with h5py.File("example.h5", "w") as hdf:
    data = np.random.rand(100, 100)
    hdf.create_dataset("random_data", data=data)
    group = hdf.create_group("experiment")
    group.create_dataset("temperature", data=np.linspace(0, 100, 100))
    group.create_dataset("pressure", data=np.linspace(1, 10, 100))

with h5py.File("example.h5", "r") as hdf:
    print("Datasets in root:", list(hdf.keys()))
    random_data = hdf["random_data"][:]
    print("Shape of 'random_data':", random_data.shape)
```

---

## Multi-Format Trade-Off Matrix: Parquet, CSV, and SQLite
- Engineering teams must select formats based on access patterns and scale
- Plain text CSV remains universally portable for small diagnostic exports despite slow
- Relational SQLite provides zero-configuration local transactions and indexed queries for
- Apache Parquet represents the industry standard for analytical data lakes
- Specialized scientific formats like HDF5 and Zarr remain optimal for high-dimensional

---

## In-Browser Storage Format Benchmark and I/O Simulator
- Learners can evaluate serialization trade-offs interactively using our in-browser Storage
- The tool benchmarks file size, write latency
- You can adjust column selectivity and row group sizes to observe predicate pushdown and
- Observing these live metrics reinforces theoretical input-output equations with concrete

---

## Key Takeaways and Format Decision Framework
- Four principles govern physical format selection for dataset engineering
- Row layouts optimize single-record transactional writes and key-based point lookups
- Columnar stores optimize analytical aggregations through projection pushdown and entropy
- Predicate pushdown skips irrelevant row groups using embedded header metadata
- Matching storage format to downstream access patterns prevents expensive hardware

---

## Next
- Complete the quiz for this part
- Pause here to test your understanding with the quiz for this part

