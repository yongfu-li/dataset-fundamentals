#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.26 — Manual Sentiment Ambiguity"
cat <<'EOF'
Manual sentiment ambiguity:
- Sentence: “That was quite a disaster, but at least I got the coffee!”
- Surface words look negative; context may still warrant positive
- Brittle keyword rules miss this; trained humans catch it
Manage inter-annotator variance with guidelines and IAA.
EOF
