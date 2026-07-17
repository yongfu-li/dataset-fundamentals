#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 10.22 — Bias Amplification in Hiring Data"
cat <<'EOF'
Bias amplification — hiring:
- Historical male-dominated data trains the generator
- Synthetic resumes over-represent the same career paths
- Audit source and synthetic cohorts with Chapter 7 metrics
EOF
