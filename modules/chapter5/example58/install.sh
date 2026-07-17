#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
if command -v Rscript >/dev/null 2>&1; then
  echo "Rscript found. Install dplyr if needed: install.packages('dplyr')"
else
  echo "Rscript not found; run.sh will print the takeaway instead."
fi
