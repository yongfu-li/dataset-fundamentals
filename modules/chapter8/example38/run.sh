#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.38 — Climate Agriculture Research Case Study"
python3 -m json.tool "variable_metadata.json"
