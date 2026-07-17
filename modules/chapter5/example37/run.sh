#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.37 — Listwise Deletion Drops Any NA"
cat <<'EOF'
Listwise deletion removes every row with a missing value in any column. It is simple but can discard most of a sparse survey when many fields are optional.
EOF
