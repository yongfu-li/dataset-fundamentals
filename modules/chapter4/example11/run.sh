#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.11 — Aspect-Based Review Tags"
cat <<'EOF'
Aspect-based review tags:
- Sentence-level sentiment labels
- Plus span-level product-attribute tags (e.g., battery life, packaging)
Supports aspect-based sentiment analysis beyond document polarity.
EOF
