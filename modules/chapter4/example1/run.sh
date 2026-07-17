#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.1 — Text Dataset"
cat <<'EOF'
Text dataset — what annotation is:
- Tokens or spans tagged with parts of speech, sentiment, or named-entity types
- Supervised model learns those categories from labeled examples
Label quality often bounds achievable accuracy more tightly than model architecture alone.
EOF
