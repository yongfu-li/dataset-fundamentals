#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.12 — NER on Sentence"
cat <<'EOF'
NER on sentence:
- “Apple is headquartered in Cupertino”
- “Apple” → organization
- “Cupertino” → location
EOF
