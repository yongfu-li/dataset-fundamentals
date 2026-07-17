#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.6 — Health-Tracking App"
cat <<'EOF'
Health-tracking app — autonomy:
- Explicit consent before activity, sleep, heart-rate streams
- Plain-language purpose statement
- Users can revoke consent, delete history, or narrow permissions
Autonomy fails when consent is buried or withdrawal is impossible.
EOF
