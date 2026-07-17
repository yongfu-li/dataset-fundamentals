#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.3 — Parquet Columnar Analytics Format"
cat <<'EOF'
Parquet:
- Columnar storage with compression/encoding
- Spark/Hadoop queries read only needed columns
- Cuts I/O for analytical scans
EOF
