#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.25 — Drop Typo Age 250"
cat <<'EOF'
If a registration form stores age as 250 years, dropping or correcting that row is preferable to letting a linear model treat it as a real observation.
EOF
