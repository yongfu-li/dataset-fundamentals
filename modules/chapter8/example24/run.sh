#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.24 — Git LFS for Large Training Artifacts"
echo "--- .gitattributes.example ---"
sed -n '1,80p' ".gitattributes.example"
