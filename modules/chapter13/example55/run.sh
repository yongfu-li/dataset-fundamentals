#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 13.55 — DVC Links Retraining to Data Versions"
cat <<'EOF'
Audit trail: DVC links each retraining run to its data version.
EOF
