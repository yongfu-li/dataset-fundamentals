#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 13.50 — Environment Drift Breaks Identical Code"
cat <<'EOF'
Pitfall: environment drift; fix with containers or virtual envs.
EOF
