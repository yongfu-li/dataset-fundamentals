#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.19 — Customer ID Formats Block Join"
cat <<'EOF'
If one table stores customer IDs as integers and another prefixes them with "CUST-", a join on the raw fields fails silently or drops valid matches until formats are standardized.
EOF
