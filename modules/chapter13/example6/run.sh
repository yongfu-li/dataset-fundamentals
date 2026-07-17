#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 13.6 — Missing Hyperparameters Block Replication"
cat <<'EOF'
Barrier: undocumented hyperparameters/preprocessing prevent replication.
EOF
