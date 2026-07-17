#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.22 — Cross-Platform Lineage Gaps"
cat <<'EOF'
Cross-platform lineage gaps:
- Object store → Spark → ML platform
- Without connectors, lineage stops at each boundary
- Audits cannot walk the full path
EOF
