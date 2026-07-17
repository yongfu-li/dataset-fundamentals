#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.19 — Algorithmic Bias in Hiring Algorithm"
cat <<'EOF'
Algorithmic bias in hiring:
- Trained on past hires → can reproduce gender/racial patterns
- Even if protected attributes are omitted, proxies in resume and career history remain
- Model design and objectives can still allocate error unevenly
EOF
