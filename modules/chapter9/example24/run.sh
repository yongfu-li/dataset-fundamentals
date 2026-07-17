#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.24 — Noise Filtering in Social Media Streams"
cat <<'EOF'
Veracity — social stream noise:
- Spam, bots, and irrelevant content pollute raw streams
- Filtering is a required pipeline stage
- Unfiltered noise corrupts sentiment and trend analyses
EOF
