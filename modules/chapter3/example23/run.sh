#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.23 — Equifax (2017): Unpatched Internet-Facing Systems"
cat <<'EOF'
Equifax (2017):
- Unpatched web-application vulnerability
- ~147 million individuals; names, SSNs, birth dates, addresses
- Failure mode: delayed patching and weak monitoring on high-value identity stores
Downstream costs: Example 3.26.
EOF
