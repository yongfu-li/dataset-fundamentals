#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.7 — Encoding a Color Category"
cat <<'EOF'
A color field with values red, blue, and green must be mapped to numeric columns (for example, one-hot indicators) before most linear models or neural networks can consume it.
EOF
