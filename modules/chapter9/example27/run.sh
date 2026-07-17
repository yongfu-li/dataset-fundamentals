#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.27 — Financial Data Warehouse for Structured BI"
cat <<'EOF'
Financial data warehouse:
- Transactions, balances, demographics cleaned and structured
- Fast, repeatable queries for monthly BI reporting
- Complementary to lakes, not a replacement for streaming
EOF
