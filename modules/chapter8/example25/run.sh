#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.25 — DVC in an ML Pipeline"
echo "--- dvc.yaml.example ---"
sed -n '1,80p' "dvc.yaml.example"
