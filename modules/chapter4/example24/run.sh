#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.24 — Categorization on Tabular Rows"
cat <<'EOF'
Tabular categorization:
- Customer rows labeled high / medium / low value from purchase history
- Supervised targeting models learn from those row classes
EOF
