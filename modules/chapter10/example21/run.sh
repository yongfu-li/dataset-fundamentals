#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 10.21 — Low-Quality Synthetic Tabular Data"
cat <<'EOF'
Low-quality synthetic tables:
- Impossible joint values in credit records
- Risk models learn spurious rules
- Validate joints and domain constraints before training
EOF
