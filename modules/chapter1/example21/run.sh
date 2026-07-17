#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 1.21 — Purchase History Dataset"

cat <<'EOF'
Retail purchase-history tables are stored at order grain: one row per order, not per customer.
Attributes: customer ID, product category, purchase date, amount.
Aggregating by customer ID turns order-grain rows into customer-level features.
Analytical use: repurchase intervals and category preferences drive segmentation and promo calendars.
EOF
