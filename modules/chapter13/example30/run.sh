#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 13.30 — Genomics Pipeline Runs in Fixed Order"
cat <<'EOF'
Pipelines: enforce a fixed step order across runs.
EOF
