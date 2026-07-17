#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.3 — Duplicate Retail Transactions"
cat <<'EOF'
In a retail sales extract, the same order ID may appear twice after a system retry. Counting both rows inflates revenue and customer frequency until duplicates are removed or merged.
EOF
