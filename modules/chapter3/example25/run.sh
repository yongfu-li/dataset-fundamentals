#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.25 — Target (2013): Third-Party Vendor Path"
cat <<'EOF'
Target (2013):
- Third-party vendor access → point-of-sale systems
- Tens of millions of payment cards compromised
- Failure mode: vendor risk and malware on retail networks
Prevention: vendor reviews and least-privilege third-party access.
EOF
