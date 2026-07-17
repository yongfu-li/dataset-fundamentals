#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.37 — Access Control for Privacy Compliance"
cat <<'EOF'
- Sensitive data needs least-privilege access, encryption at rest/in transit, and access logs.
- These controls provide evidence for GDPR/HIPAA-style compliance.
EOF
