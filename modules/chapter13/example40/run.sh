#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 13.40 — Regression Tests After Cleaning Changes"
cat <<'EOF'
CI: regression-test outputs when the cleaning step changes.
EOF
