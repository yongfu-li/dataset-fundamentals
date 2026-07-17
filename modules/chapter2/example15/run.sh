#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.15 — Snowball Recruitment for Gig-Worker Interviews"
cat <<'EOF'
Snowball sampling reaches hidden populations:
- Start with 5 drivers; each refers 2 peers across waves
- Access people who never answer public ads
- Bias risk: homophily — referrals resemble referrers
EOF
