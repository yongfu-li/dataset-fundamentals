#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.30 — NiFi Visual Dataflow Automation"
cat <<'EOF'
NiFi dataflow:
- Visual canvas for ingest, route, transform
- Avoid hand-writing every connector
- Keep lineage documented as flows grow
EOF
