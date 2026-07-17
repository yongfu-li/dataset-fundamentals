---
marp: true
title: Chapter 12 — Databases and cloud storage
paginate: true
---

# Chapter 12 — Databases and cloud storage

Principles alone do not pick a store

---

## Learning objectives
- By the end of this part

---

## Choosing databases and storage
- In large-scale data management
- The choice depends on use case, data type, and performance requirements
- Broadly, systems fall into databases for structured and unstructured data and storage

---

## Relational databases
- Atomicity, consistency, isolation, and durability
- Enterprise resource planning

---

## NoSQL databases
- NoSQL stores such as MongoDB, Cassandra
- Models include key-value, document, and graph forms
- Big-data analytics

---

## Example 12.1 — NoSQL for Web Mobile and IoT
- Example 12.1 — hands-on module
- Example 12.1 lists typical NoSQL application patterns
- NoSQL stores fit real-time social and messaging apps, semi-structured logs for analytics
- Explore the chapter example module
- View files: `modules/chapter12/example1/`

---

## SQL versus NoSQL trade-offs
- The chapter comparison table contrasts data model, scaling, consistency, transactions
- SQL systems favor tables, often vertical scale first, strong consistency with ACID
- High-volume semi-structured or rapidly changing data

---

## Example 12.2 — Cloud Storage Across AWS GCP Azure
- Example 12.2 — hands-on module
- Example 12.2 summarizes managed storage and database options from major clouds
- Amazon Web Services pairs S3 object storage with RDS and DynamoDB
- Explore the chapter example module
- View files: `modules/chapter12/example2/`

---

## Takeaways
- Relational stores fit structured transactional work with strong consistency
- Web, mobile, and Internet of Things streams often prefer NoSQL when schemas evolve quickly
- Major clouds package object storage with managed SQL and NoSQL services so teams reduce

---

## Next
- Complete the quiz for this part
- The next part covers storage formats and media types

