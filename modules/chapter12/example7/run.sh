#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.7 — HDFS Partitioning and Replication"
cat <<'EOF'
HDFS pattern:
- Large files split into ~128MB blocks
- Replicas on multiple nodes
- Keep serving when a node fails
EOF
