#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 6.11 — Continuous Sales Totals"
cat <<'EOF'
Continuous sales total:
$1,234,567.89 is a measured monetary amount within a range.
For EDA, treat sales totals as continuous and inspect center, spread, skew, and outliers.
EOF
