#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.19 — Diverse Crowd Sentiment Judgments"
cat <<'EOF'
Diverse crowd sentiment:
- Multiple raters expose disagreement a single rater hides
- Aggregation stabilizes subjective labels
- Disagreement flags hard items for review
EOF
