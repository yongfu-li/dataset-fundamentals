#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 1.14 — Metadata of Weather Dataset"

if command -v python3 >/dev/null 2>&1; then
  python3 -m json.tool "metadata.json"
else
  cat "metadata.json"
fi

