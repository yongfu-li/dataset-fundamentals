#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.58 — Dplyr Filter and Select Columns"
if command -v Rscript >/dev/null 2>&1; then
  Rscript main.R
else
  cat <<'EOF'
Rscript not found — printing the book takeaway instead.
Removing missing values and selecting columns in R (dplyr):
  filter(!is.na(column_name)) %>% select(column1, column2)
EOF
fi
