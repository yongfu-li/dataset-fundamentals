#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.23 — Valid Extreme Income Observation"
cat <<'EOF'
A person with a very high income may still be a valid row in an income survey. Analysts should verify the record rather than automatically treating it as a mistake.
EOF
