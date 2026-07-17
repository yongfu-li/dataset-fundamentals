#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.23 — Petabyte-Scale Social and Sensor Volume"
cat <<'EOF'
Big data volume:
- Social, sensor, and transaction data reach petabytes
- Conventional DBMS cannot process at this scale
- Distributed systems (Hadoop, Spark) become mandatory
EOF
