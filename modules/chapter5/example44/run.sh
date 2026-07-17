#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.44 — Extreme Income Flagged by IQR"
cat <<'EOF'
In an annual income column, a \$50 million observation may lie beyond the upper fence from the interquartile range. Flagging or winsorizing it prevents one row from dominating mean income estimates.
EOF
