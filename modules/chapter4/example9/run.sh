#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.9 — Tokenization on Text"
cat <<'EOF'
Tokenization:
- Sentence: “AI is the future”
- Tokens: [AI, is, the, future]
Prerequisite building block for most text taggers.
EOF
