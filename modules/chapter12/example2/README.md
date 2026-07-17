# Example 12.2 — Cloud Storage Across AWS GCP Azure

**Chapter:** 12  
**Label:** `eg:12.2`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.2.2` — Types and Use Cases

## Learning objective

Map AWS, GCP, and Azure storage suites to object, SQL, and NoSQL roles.

## Chapter context

Section 12.2.2 compares analytical file formats—Parquet, Avro, and ORC—for scan vs stream workloads. AWS pairs S3 object storage with RDS and DynamoDB; GCP offers Cloud Storage, Cloud SQL, BigQuery, and Datastore; Azure offers Blob Storage, Azure SQL Database, and Cosmos DB for gl…

## What this example shows

AWS pairs S3 object storage with RDS and DynamoDB; GCP offers Cloud Storage, Cloud SQL, BigQuery, and Datastore; Azure offers Blob Storage, Azure SQL Database, and Cosmos DB for globally distributed NoSQL workloads.

## Key terms

- **Parquet** — Columnar file format optimizing analytical scans with compression.
- **Avro** — Row-oriented format with schema evolution, common in Kafka streams.

## What you should learn

### From the concept
- AWS: S3 + RDS + DynamoDB
- GCP: Cloud Storage + Cloud SQL + BigQuery + Datastore
- Azure: Blob + Azure SQL + Cosmos DB

### From the output / result
- `run.sh` prints the structured takeaway below—use it when choosing storage or consistency patterns.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op or prerequisite check |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter12/example2
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Cloud storage suites:
- AWS: S3 + RDS + DynamoDB
- GCP: Cloud Storage + Cloud SQL + BigQuery + Datastore
- Azure: Blob + Azure SQL + Cosmos DB
```

## How to interpret the result

The closing bullet—'Azure: Blob + Azure SQL + Cosmos DB'—is the architecture gate: if your platform cannot deliver that property, the chosen store or consistency model is wrong for the workload.

## Try it / Reflect

- When would you choose the pattern in 'Cloud Storage Across AWS GCP Azure' over a single-node database?

## Related examples

- `eg:12.5` — Object storage in cloud suites.
- `eg:12.6` — Block storage counterpart.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
