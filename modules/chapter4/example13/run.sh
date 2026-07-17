#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.13 — Part-of-Speech Tagging"
cat <<'EOF'
Part-of-speech tagging:
- “The quick fox jumps”
- “quick” → adjective
- “jumps” → verb
EOF
