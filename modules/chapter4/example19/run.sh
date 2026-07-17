#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.19 — Speaker Identification on Meeting Audio"
cat <<'EOF'
Meeting speaker identification:
- Tag each segment Speaker 1 or Speaker 2
- Models learn turn-taking and attribution
EOF
