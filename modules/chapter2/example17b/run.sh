#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.17b — CIRDC Harvest Stages and Cross-Repository Checks"
cat <<'EOF'
Operational scrape = stages + QA, not only a parser:
- Build publication-number index, then year-by-year JSON harvest
- Cross-check fields against a second repository or DOI registry
- Mismatches → re-harvest or manual review before freeze
EOF
