#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.1 — Collection Plan for a Retail Satisfaction Study"
cat <<'EOF'
Five-part collection plan (before tools):
- Objective: identify checkout friction behind cart abandonment
- Sources: primary survey + secondary web analytics
- Methods / sample / storage: survey+logs, stratified by device, anonymized CSV
EOF
