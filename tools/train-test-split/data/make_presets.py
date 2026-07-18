#!/usr/bin/env python3
"""Generate presets-bundle.js for the train/val/test splitter."""
from __future__ import annotations

import json
from pathlib import Path

OUT = Path(__file__).resolve().parent / "presets-bundle.js"


def churn_holdout() -> list[dict]:
    """eg:1.31-style churn table — one row per customer (clean random/stratified demo)."""
    rows = [
        (1, 2, 5, 1, 12, 0),
        (2, 0, 8, 0, 24, 0),
        (3, 5, 2, 3, 6, 1),
        (4, 1, 7, 0, 18, 0),
        (5, 4, 3, 2, 9, 1),
        (6, 0, 9, 0, 30, 0),
        (7, 3, 4, 1, 15, 1),
        (8, 1, 6, 0, 20, 0),
        (9, 6, 1, 4, 4, 1),
        (10, 2, 5, 1, 14, 0),
        (11, 0, 10, 0, 36, 0),
        (12, 4, 2, 2, 8, 1),
        (13, 1, 7, 0, 22, 0),
        (14, 5, 3, 3, 7, 1),
        (15, 0, 8, 0, 28, 0),
        (16, 3, 4, 1, 11, 1),
        (17, 2, 6, 0, 16, 0),
        (18, 7, 1, 3, 5, 1),
        (19, 0, 9, 0, 32, 0),
        (20, 4, 3, 2, 10, 1),
    ]
    out = []
    for cid, complaints, usage, activity, length, churned in rows:
        out.append(
            {
                "Customer_ID": cid,
                "Complaints": complaints,
                "Product_Usage": usage,
                "Account_Activity_Change": activity,
                "Subscription_Length": length,
                "Churned": churned,
            }
        )
    return out


def entity_leak() -> list[dict]:
    """Multiple sessions per customer — random split leaks entity IDs across folds."""
    out = []
    rid = 1
    # Customers C01–C08 each appear 3 times (sessions)
    for c in range(1, 9):
        cid = f"C{c:02d}"
        for session in range(1, 4):
            churned = 1 if c % 3 == 0 else 0
            out.append(
                {
                    "row_id": rid,
                    "customer_id": cid,
                    "session": session,
                    "tenure_months": 3 + c * 2 + session,
                    "spend": 40 + c * 10 + session * 5,
                    "churned": churned,
                }
            )
            rid += 1
    return out


def orders_temporal() -> list[dict]:
    """Orders with dates — random split risks future→past leakage; time split is correct."""
    out = []
    # Chronological orders; some repeat customer_id across time (OK for time split)
    data = [
        ("2024-01-05", "U01", 120, 0),
        ("2024-01-12", "U02", 80, 0),
        ("2024-01-20", "U01", 95, 0),
        ("2024-02-02", "U03", 210, 1),
        ("2024-02-14", "U04", 60, 0),
        ("2024-02-28", "U02", 140, 0),
        ("2024-03-08", "U05", 300, 1),
        ("2024-03-15", "U03", 175, 0),
        ("2024-03-22", "U06", 90, 0),
        ("2024-04-01", "U01", 110, 0),
        ("2024-04-10", "U07", 250, 1),
        ("2024-04-18", "U04", 70, 0),
        ("2024-05-03", "U08", 180, 0),
        ("2024-05-12", "U05", 320, 1),
        ("2024-05-20", "U02", 100, 0),
        ("2024-06-01", "U09", 55, 0),
        ("2024-06-15", "U07", 260, 1),
        ("2024-06-28", "U03", 150, 0),
        ("2024-07-04", "U10", 400, 1),
        ("2024-07-20", "U06", 85, 0),
        ("2024-08-02", "U08", 190, 0),
        ("2024-08-18", "U09", 65, 0),
        ("2024-09-01", "U10", 410, 1),
        ("2024-09-15", "U04", 75, 0),
    ]
    for i, (date, uid, amount, fraud) in enumerate(data, start=1):
        out.append(
            {
                "order_id": f"O{i:03d}",
                "order_date": date,
                "customer_id": uid,
                "amount": amount,
                "fraud": fraud,
            }
        )
    return out


PRESETS = {
    "churn-holdout": {
        "id": "churn-holdout",
        "name": "churn-holdout",
        "title": "Customer churn (clean)",
        "description": "eg:1.31-style: one row per Customer_ID. Safe for random or stratified holdout.",
        "bookAnchors": ["§1.5", "eg:1.31"],
        "teachingFocus": "A clean holdout: unique entities, stratified by Churned.",
        "defaults": {
            "idCol": "Customer_ID",
            "labelCol": "Churned",
            "timeCol": "",
            "method": "stratified",
            "trainPct": 70,
            "valPct": 0,
            "testPct": 30,
            "seed": 42,
        },
        "rows": churn_holdout(),
    },
    "entity-leak": {
        "id": "entity-leak",
        "name": "entity-leak",
        "title": "Multi-session customers (ID leak)",
        "description": "Same customer_id on many rows. Random split puts the same person in train and test.",
        "bookAnchors": ["§1.5"],
        "teachingFocus": "Entity leakage: split by row ≠ split by person.",
        "defaults": {
            "idCol": "customer_id",
            "labelCol": "churned",
            "timeCol": "",
            "method": "random",
            "trainPct": 70,
            "valPct": 15,
            "testPct": 15,
            "seed": 7,
        },
        "rows": entity_leak(),
    },
    "orders-temporal": {
        "id": "orders-temporal",
        "name": "orders-temporal",
        "title": "Orders over time",
        "description": "order_date chronology. Random split risks future→past leakage; use time-based.",
        "bookAnchors": ["§1.5"],
        "teachingFocus": "Temporal leakage: never train on the future to predict the past.",
        "defaults": {
            "idCol": "customer_id",
            "labelCol": "fraud",
            "timeCol": "order_date",
            "method": "random",
            "trainPct": 60,
            "valPct": 20,
            "testPct": 20,
            "seed": 42,
        },
        "rows": orders_temporal(),
    },
}


def main() -> None:
    for p in PRESETS.values():
        if not p["rows"]:
            raise SystemExit(f"Preset {p['id']} has no rows.")
    payload = json.dumps(PRESETS, ensure_ascii=False, indent=2)
    OUT.write_text(
        "/* Generated by make_presets.py — do not edit by hand. */\n"
        "window.SplitPresets = " + payload + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {OUT} ({len(PRESETS)} presets)")


if __name__ == "__main__":
    main()
