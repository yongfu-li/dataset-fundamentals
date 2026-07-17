#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.26 — Serverless Compute Over Object Storage"
cat <<'EOF'
Serverless over object storage:
- S3-class blobs stay durable
- Functions process ingest events
- Compute scales independently of storage
EOF
