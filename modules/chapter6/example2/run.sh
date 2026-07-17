#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 6.2 — Skewness Informs Model Choice"
cat <<'EOF'
Inspect distribution shape before model choice:
- Approximately symmetric/normal: conventional parametric methods may fit.
- Strongly skewed: consider robust summaries, transformations, or other model assumptions.
EOF
