#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 6.8 — City Name Inconsistency"
cat <<'EOF'
City-name consistency check:
- Frequency table reveals NY / New York / New York City.
- Confirm that they mean the same geography.
- Map them to one documented canonical category before analysis.
EOF
