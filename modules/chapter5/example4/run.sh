#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.4 — Missing Contact Fields"
cat <<'EOF'
A customer table may omit email for some rows. Depending on the task, analysts impute a sentinel, request completion, or exclude those rows from email campaigns while retaining them for other analyses.
EOF
