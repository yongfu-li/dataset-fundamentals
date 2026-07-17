#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.22 — Extra Zero In Blood Pressure"
cat <<'EOF'
A nurse might enter "1200/80" instead of "120/80" for blood pressure. That value is far outside plausible clinical range and should be flagged before modeling.
EOF
