#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.14 — Duplicate Customer Purchase Rows"
cat <<'EOF'
In a retail extract, the same customer may appear once per purchase even when the analytic goal is one row per customer. Duplicate rows inflate total spend and purchase frequency until deduplicated or aggregated.
EOF
