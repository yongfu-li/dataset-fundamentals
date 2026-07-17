# Chapter 12 — Databases and cloud storage — transcript

**Clip id:** part-02-databases-and-cloud-storage
**Estimated duration:** 7 minutes
**Sources:** `author/chapter12.tex` (§12.2.1–12.2.2), `modules/chapter12/example1/`, `modules/chapter12/example2/`

## Slide 1 — Chapter 12 — Databases and cloud storage

Principles alone do not pick a store. Teams need concrete database and storage families for web, mobile, Internet of Things, and analytics workloads. This part surveys database types, NoSQL use cases, and cloud object storage across major providers.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to contrast relational and NoSQL design trade-offs; recognize typical NoSQL fits for web, mobile, and Internet of Things streams; and map major cloud offerings for object storage and managed databases across Amazon Web Services, Google Cloud, and Azure.

## Slide 3 — Choosing databases and storage

In large-scale data management, choosing the right database and storage solution is a primary design decision. The choice depends on use case, data type, and performance requirements. Broadly, systems fall into databases for structured and unstructured data and storage solutions for organizing and accessing that data.

## Slide 4 — Relational databases

Relational databases store data in tables with predefined schemas and enforce integrity through ACID properties: atomicity, consistency, isolation, and durability. They excel in transactional applications that need complex queries and strong consistency, such as financial systems, customer relationship management, and enterprise resource planning.

## Slide 5 — NoSQL databases

NoSQL stores such as MongoDB, Cassandra, and Redis favor scalability, flexible schemas, and speed for large, rapidly changing data. Models include key-value, document, and graph forms. They are designed to scale horizontally across machines and to handle high-velocity streams, large web applications, and big-data analytics.

## Slide 6 — Example 12.1 — NoSQL for Web Mobile and IoT

Example 12.1 lists typical NoSQL application patterns. NoSQL stores fit real-time social and messaging apps, semi-structured logs for analytics, and high-ingest Internet of Things streams where schemas evolve faster than relational tables allow. The example 1 module for this chapter summarizes those patterns.

## Slide 7 — SQL versus NoSQL trade-offs

The chapter comparison table contrasts data model, scaling, consistency, transactions, and best fit. SQL systems favor tables, often vertical scale first, strong consistency with ACID, and complex joins. NoSQL systems favor flexible models, horizontal scale-out, often eventual consistency, limited transactions, and high-volume semi-structured or rapidly changing data.

## Slide 8 — Example 12.2 — Cloud Storage Across AWS GCP Azure

Example 12.2 summarizes managed storage and database options from major clouds. Amazon Web Services pairs S3 object storage with RDS and DynamoDB; Google Cloud offers Cloud Storage, Cloud SQL, BigQuery, and Datastore; Azure offers Blob Storage, Azure SQL Database, and Cosmos DB for globally distributed NoSQL workloads. The example 2 module for this chapter frames that provider map.

## Slide 9 — Takeaways

Relational stores fit structured transactional work with strong consistency; NoSQL fits horizontal scale and flexible schemas. Web, mobile, and Internet of Things streams often prefer NoSQL when schemas evolve quickly. Major clouds package object storage with managed SQL and NoSQL services so teams reduce operational burden while scaling.

## Slide 10 — Next

The next part covers storage formats and media types: Parquet, Avro, and ORC for analytics and streams, then object versus block storage for archives and low-latency databases.
