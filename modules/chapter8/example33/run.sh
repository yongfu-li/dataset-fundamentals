#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.33 — Descriptive Dataset Commit Message"
cat <<'EOF'
- A useful message names the changed artifact and the median-imputation operation.
- The reason and method matter more than a vague message such as 'update data'.
EOF
