#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.10 — Sentiment Tagging on Text"
cat <<'EOF'
Sentiment tagging:
- “I love this product!” → positive
- “This service is awful” → negative
Polarity labels for classification training.
EOF
