#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.53 — Add Squared Feature Term"
cat <<'EOF'
If feature $X$ has a quadratic relationship with the target, adding $X^2$ lets a linear model capture curvature that a single linear term cannot represent.
EOF
