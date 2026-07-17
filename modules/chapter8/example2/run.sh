#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.2 — Feature Drift Across Dataset Versions"
cat <<'EOF'
- Feature additions and transformations must be attributable to a version.
- History lets the team locate and reverse the change that harmed performance.
EOF
