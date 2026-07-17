#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.32 — Annotating Missing-Value Handling"
cat <<'EOF'
- Missingness documentation distinguishes why values are absent from what was done about them.
- Imputation and removal change downstream interpretation and must be reproducible.
EOF
