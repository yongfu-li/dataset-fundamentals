#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.2 — Dropping Unused Identifier Columns"
cat <<'EOF'
Removing high-cardinality identifiers (for example, raw transaction IDs) that never enter the model reduces memory use and training time without changing the predictive schema.
EOF
