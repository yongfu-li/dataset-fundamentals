#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 6.14 — Ordinal Satisfaction Scale"
cat <<'EOF'
Ordinal satisfaction:
Very Unsatisfied < Unsatisfied < Neutral < Satisfied < Very Satisfied.
Ranks are ordered, but the gaps between adjacent labels are not necessarily equal.
EOF
