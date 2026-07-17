#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.69 — Encoding Tradeoffs Ordinal Versus Nominal"
cat <<'EOF'
One-hot encoding avoids false order among nominal categories but expands dimensionality, whereas label encoding is compact but can imply ordinality where none exists.
EOF
