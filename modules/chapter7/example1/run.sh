#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.1 — GDPR & ECOA Policies"
cat <<'EOF'
Fairness as a legal requirement:
- GDPR: automated decisions must not be based on biased data when they significantly affect individuals
- ECOA / Fair Lending Act: lending decisions must not be biased by race, gender, or other protected traits
- Non-compliance risks legal action, fines, and significant reputational damage
EOF
