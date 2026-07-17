#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.2 — Paper Surveys and Scalability Limits"
cat <<'EOF'
Scalability limit — paper surveys:
- Each response costs distribution, collection, and processing time
- Effort grows exponentially with sample size
- Motivation for crowdsourcing and automated ingestion
EOF
