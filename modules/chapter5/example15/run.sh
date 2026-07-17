#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.15 — Double Counted Revenue From Duplicates"
cat <<'EOF'
If the same order ID is exported twice after a payment retry, summing revenue double-counts that transaction. Cleaning removes or merges duplicates before KPI and forecast calculations.
EOF
