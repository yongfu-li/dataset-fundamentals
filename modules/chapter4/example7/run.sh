#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.7 — Audio Annotation on Customer Service Calls"
cat <<'EOF'
Customer-service audio annotation:
- Mark time intervals of frustration or satisfaction
- Attach corresponding emotion labels
Time-aligned affect labels for speech/affect models.
EOF
