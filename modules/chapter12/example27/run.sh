#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.27 — Neo4j for Relationship-Heavy Graphs"
cat <<'EOF'
Neo4j / graph DBs:
- Multi-hop relationships are the primary query
- Fit social graphs and fraud rings
- Purpose-built over forced tabular joins
EOF
