#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.17 — Larger Table Slower Training"
cat <<'EOF'
A tree model trained on 500,000 rows that include 100,000 duplicates spends extra memory and time on redundant examples. Removing duplicates shrinks the table without changing unique customer behavior.
EOF
