#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.20 — Male Versus M Split Categories"
cat <<'EOF'
Treating "Male" and "M" as separate levels makes bar charts and models report two groups for the same gender, understating each count and distorting downstream metrics.
EOF
