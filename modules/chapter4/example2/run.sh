#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.2 — Text Annotation on Customer Feedback"
cat <<'EOF'
Customer feedback sentiment:
- “The service was excellent” → positive
- “The product was disappointing” → negative
Simple document-level polarity labels for NLP training.
EOF
