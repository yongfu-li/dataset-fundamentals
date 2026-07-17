#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 6.13 — Nominal Product Categories"
cat <<'EOF'
Nominal product categories:
Electronics, Clothing, Groceries have no inherent ranking.
Summarize by frequency/proportion; numeric codes would be arbitrary labels, not quantities.
EOF
