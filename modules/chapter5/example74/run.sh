#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.74 — Deep Feature Synthesis on Transactions"
cat <<'EOF'
Featuretools deep feature synthesis can add customer-level fields such as total spend, average days between orders, and time since last purchase from raw transaction tables.
EOF
