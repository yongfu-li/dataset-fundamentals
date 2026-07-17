#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.11 — Stratified Sample of Cart Abandoners"
cat <<'EOF'
Stratify when subgroups drive the decision:
- Split abandoners into mobile vs desktop strata
- Draw within each so rare device classes stay visible
- Within-stratum selection remains random
EOF
