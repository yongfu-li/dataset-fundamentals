#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.27 — Active Learning Queue for Text"
cat <<'EOF'
Active learning queue for text:
- Ambiguous / uncertain sentences → human review
- High-confidence cases → auto-label or skip
Annotators spend time where the model is most uncertain.
EOF
