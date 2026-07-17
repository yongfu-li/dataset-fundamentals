---
marp: true
title: Chapter 12 — Formats and storage types
paginate: true
---

# Chapter 12 — Formats and storage types

Choosing a database is only half the storage decision

---

## Learning objectives
- By the end of this part

---

## Why storage formats matter
- ORC are widely used
- Format choice affects compression, schema evolution

---

## Example 12.3 — Parquet Columnar Analytics Format
- Example 12.3 — hands-on module
- Example 12.3 highlights Parquet for analytical scans
- So queries read only needed columns and cut input and output
- Explore the chapter example module
- View files: `modules/chapter12/example3/`

---

## Example 12.4 — Avro and ORC for Streams and Hive
- Example 12.4 — hands-on module
- Example 12.4 contrasts Avro row encoding with ORC columnar Hive storage
- Avro is a row-oriented format common in Kafka-style streaming with schema evolution
- Explore the chapter example module
- View files: `modules/chapter12/example4/`

---

## Object storage model
- Object storage systems
- This model is highly scalable and suitable for unstructured data such as videos, images
- Object storage is optimized for large-scale archiving and retrieval over an HTTP-style API

---

## Example 12.5 — Object Storage for Unstructured Archives
- Example 12.5 — hands-on module
- Example 12.5 places object storage in large unstructured workloads
- Lakehouse files that grow without block-device provisioning
- Explore the chapter example module
- View files: `modules/chapter12/example5/`

---

## Block storage and Example 12.6
- Example 12.6 — hands-on module
- Block storage divides data into blocks and provides low-latency access
- It is ideal for transactional systems that need fast reads and writes
- Example 12.6 shows block volumes attaching low-latency disks to virtual machines running
- Explore the chapter example module
- View files: `modules/chapter12/example6/`

---

## Putting formats and media together
- In practice, teams place lakehouse files, media
- Columnar formats such as Parquet and ORC sit on object stores for analytics

---

## Takeaways
- Parquet favors columnar analytics with selective column reads
- Avro fits streaming with schema evolution; ORC fits read-heavy Hive warehouses
- Object storage scales unstructured archives and lakehouse files
- Format and media choices should follow query and latency needs, not a single default

---

## Next
- Complete the quiz for this part
- The next part introduces distributed systems characteristics and concrete examples

