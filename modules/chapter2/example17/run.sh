#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.17 — Static Parser vs Browser Driver for Catalog Pages"
cat <<'EOF'
Scrape tooling follows how the page loads:
- Titles in initial HTML → static parser (e.g., BeautifulSoup)
- Titles after clicks/filters → browser driver (e.g., Selenium)
- Drivers are slower and more likely to hit anti-bot blocks
EOF
