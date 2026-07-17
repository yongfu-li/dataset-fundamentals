#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.23 — Clinical Language Requires Experts"
cat <<'EOF'
Clinical language experts:
- Negation, temporality, abbreviations need clinical skill
- Crowd workers often invert meaning
- Expert coding for free-text disease labels
EOF
