#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.9 — Dilemma in Platform Data Collection"
cat <<'EOF'
Platform data collection — dilemma:
- Fine-grained interaction logs enrich recommendations
- Users may never have meaningfully agreed to share them
- Engagement gains clash with autonomy and transparency when notice is incomplete or consent is bundled
EOF
