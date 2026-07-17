#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.6 — Choosing Scraping for Public Course Catalogs"
cat <<'EOF'
Choose scraping when pages are public and no API exists:
- Example: weekly university course titles and credit hours
- Store structured rows (code, title), not only raw HTML
- Plan for policy, throttling, and selector maintenance
EOF
