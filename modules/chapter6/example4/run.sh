#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 6.4 — Linear Versus Nonlinear Patterns"
cat <<'EOF'
Relationship-shape cue:
- Strong straight-line pattern → test a linear model.
- Curves or complex interactions → consider tree-based or neural models.
Validate any candidate beyond the exploratory plot.
EOF
