#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.11 — Consent for Healthcare Data Uses"
cat <<'EOF'
Consent for healthcare data uses:
- Separate care consent from research consent
- Explain secondary uses in plain language
- Allow refusal without affecting treatment
Bundling research into a general intake form fails informed consent.
EOF
