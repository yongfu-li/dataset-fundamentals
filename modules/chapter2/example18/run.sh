#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.18 — API-Driven Brand Mention Log"
cat <<'EOF'
Operational API collection needs cadence + backoff:
- Poll every 5 minutes for brand-keyword posts
- Store timestamp, text, engagement counts
- On daily quota: back off — do not retry aggressively
EOF
