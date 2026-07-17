#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 1.4 — Housing Price Dataset in JSON Format"

if command -v python3 >/dev/null 2>&1; then
  python3 -m json.tool "housing.json"
else
  cat "housing.json"
fi

