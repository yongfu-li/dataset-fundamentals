#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.64 — Retail Purchase Record Schema"
cat <<'EOF'
A practice dataset may list customer ID, product name, purchase date, price, and payment method, with typical defects such as missing prices and duplicate transactions.
EOF
