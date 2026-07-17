#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 13.2 — Replication with New Climate Data"
cat <<'EOF'
Reproducibility: same data, faithful rerun.
Replicability: new data/team, does the finding still hold?
EOF
