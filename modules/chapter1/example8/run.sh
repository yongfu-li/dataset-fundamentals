#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 1.8 — Sample of SQL Format"

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 is required to run the SQLite demo" >&2
  exit 1
fi
python3 run_demo.py

