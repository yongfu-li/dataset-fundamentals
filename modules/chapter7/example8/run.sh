#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.8 — Creditworthiness System"
cat <<'EOF'
Measurement bias — self-reported income:
- Respondents overstate income (social desirability, privacy concerns)
- Systematic error contaminates creditworthiness features at the source
- Validate against external records where possible
EOF
