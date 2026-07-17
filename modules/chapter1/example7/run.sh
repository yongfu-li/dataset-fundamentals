#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 1.7 — Semi-Structured Dataset In JSON Format"

if command -v python3 >/dev/null 2>&1; then
  python3 -m json.tool "order.json"
else
  cat "order.json"
fi

