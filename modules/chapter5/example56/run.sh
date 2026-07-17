#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.56 — Polynomial Feature Expansion"
cat <<'EOF'
Transforming feature $X$ into $X^2$ or $X^3$ lets regression models fit nonlinear trends while remaining linear in the parameters.
EOF
