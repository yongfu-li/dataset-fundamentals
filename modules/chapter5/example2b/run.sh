#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 5.2b — Unifying Intrusion Features Before Model Training"
cat <<'EOF'
UM-NIDS-style cross-dataset standardization:
- Rebuild CIC-style and UNSW-style releases into one shared flow-statistics table
- Align payload-derived fields and short history windows
- Pass consistency checks: identical column names, units, label taxonomies
Only then train one model family and report cross-dataset scores.
EOF
