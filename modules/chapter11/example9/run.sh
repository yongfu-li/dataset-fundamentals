#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.9 — Active Learning for Review Sentiment"
cat <<'EOF'
Sentiment active learning:
- Seed train, then query ironic/mixed reviews
- Uncertainty/entropy sampling picks the hard language
- Better nuance with fewer total annotations
EOF
