#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.28 — Income-Race Scatter Plot"
cat <<'EOF'
Income-race scatter plot:
- Group-colored points expose clustering in income ranges
- Clustering signals structural bias and potential proxy features
- Use alongside heatmaps and bar charts for a full visual screen
EOF
