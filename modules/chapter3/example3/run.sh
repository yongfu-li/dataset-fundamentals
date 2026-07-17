#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.3 — Hiring Algorithm"
cat <<'EOF'
Hiring algorithm — fairness:
- Trained on past hires that favored one demographic in technical roles
- Can reproduce that pattern for new applicants
- Treat the risk as a design constraint, not a post-deployment surprise
EOF
