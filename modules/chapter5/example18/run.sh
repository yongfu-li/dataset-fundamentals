#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.18 — Mixed Dates Gender and Units"
cat <<'EOF'
Date Formats: A dataset might contain dates in multiple formats, such as "MM/DD/YYYY" and "DD-MM-YYYY". This inconsistency can cause errors when performing time series analysis or when merging datasets.
EOF
