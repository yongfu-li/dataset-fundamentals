#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 1.10 — Sample of GeoJSON File"

if command -v python3 >/dev/null 2>&1; then
  python3 -m json.tool "data.geojson"
else
  cat "data.geojson"
fi

