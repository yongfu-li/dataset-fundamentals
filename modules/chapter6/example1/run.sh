#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 6.1 — E-Commerce Customer EDA Pass"
cat <<'EOF'
First-pass customer EDA:
1. Summarize age, annual income, and purchase frequency.
2. Plot the age distribution.
3. Plot income versus spending.
4. Record missingness, outliers, and relationships for follow-up.
EOF
