#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.11 — Nonresponse Skips Sensitive Questions"
cat <<'EOF'
In a health survey, respondents may skip questions about debt or mental health while answering other items. Those blank answers reflect deliberate nonresponse rather than a random system glitch.
EOF
