#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 1.5 — Geospatial Land-Cover Dataset"

cat <<'EOF'
Geospatial datasets encode locations as geometries (point / line / polygon), not rows.
Each geometry carries properties — e.g., land-cover class or address — like columns on a record.
Used for: urban planning, environmental monitoring, infrastructure analysis.
See Example 1.10 for a concrete GeoJSON FeatureCollection.
EOF
