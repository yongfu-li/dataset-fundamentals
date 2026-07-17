#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.19 — Lineage Metadata on Schema and Steps"
cat <<'EOF'
Lineage metadata:
- Schema versions, transform job IDs, update timestamps
- Reconstruct how a table was produced
- Foundation for catalogs and audits
EOF
