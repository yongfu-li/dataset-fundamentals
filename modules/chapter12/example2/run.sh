#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.2 — Cloud Storage Across AWS GCP Azure"
cat <<'EOF'
Cloud storage suites:
- AWS: S3 + RDS + DynamoDB
- GCP: Cloud Storage + Cloud SQL + BigQuery + Datastore
- Azure: Blob + Azure SQL + Cosmos DB
EOF
