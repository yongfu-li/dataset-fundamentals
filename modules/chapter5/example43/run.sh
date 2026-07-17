#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.43 — Normalize Currency Symbols Across Markets"
cat <<'EOF'
International sales files may mix USD, EUR, and GBP symbols in one price column. Converting all amounts to a single currency enables fair comparison and aggregation.
EOF
