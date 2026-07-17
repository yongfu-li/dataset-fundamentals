#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.14 — Encryption for Medical Record Transfer"
cat <<'EOF'
Encryption for medical record transfer:
- TLS (or equivalent) keeps intercepted packets unreadable to outsiders
- Once an authorized clinician decrypts, misuse controls must come from access policy, audit logs, and minimization
Encryption alone is not enough.
EOF
