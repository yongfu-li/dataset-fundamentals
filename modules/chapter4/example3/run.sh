#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.3 — Text Annotation on Named Entities"
cat <<'EOF'
Named entities:
- Sentence: “Barack Obama was born in Hawaii”
- “Barack Obama” → person
- “Hawaii” → location
Standard NER schema on factual text.
EOF
