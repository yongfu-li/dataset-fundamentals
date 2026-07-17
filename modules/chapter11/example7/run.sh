#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.7 — Cost-Sensitive Routing in Legal Labeling"
cat <<'EOF'
Cost-sensitive legal labeling:
- Ambiguous contracts → legal experts
- Simpler documents → non-experts
- Optimize accuracy gain per labeling dollar
EOF
