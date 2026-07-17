#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 13.43 — knitr and ggplot2 in RMarkdown"
cat <<'EOF'
RMarkdown: knitr executes code; ggplot2 renders visuals.
EOF
