#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.8 — Cassandra for Multi-Datacenter Writes"
cat <<'EOF'
Cassandra:
- High write throughput, multi-datacenter availability
- Horizontal scale over single-key ACID
- Fits write-heavy global apps
EOF
