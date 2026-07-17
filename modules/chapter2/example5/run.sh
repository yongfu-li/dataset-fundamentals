#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.5 — Campus Wi-Fi Satisfaction Survey Plan"
cat <<'EOF'
Survey plan for campus Wi-Fi:
- 5-minute online questionnaire for students and staff
- Stratify by building; ask about failures and peak-hour experience
- Each item should map to a facilities decision, not curiosity alone
EOF
