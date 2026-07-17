"""Generate version-chain presets for the Version timeline tool.

Two teaching scenarios:

* feature-drift-pilot — sentiment labels grow, then schema renames (eg:8.2)
* hiring-schema-evolution — hiring table gains columns and drops a feature

Bundled as ``window.VersionTimelinePresets`` for file:// compatibility.

Run:
    python make_presets.py
"""

from __future__ import annotations

import json
from pathlib import Path


def feature_drift_pilot() -> dict:
    """v1 pilot → v2 row growth + label fixes → v3 schema rename + source."""
    v1_rows = [
        {"id": "R01", "text": "Delivery arrived early and intact.", "sentiment": "positive"},
        {"id": "R02", "text": "Battery life is worse than advertised.", "sentiment": "negative"},
        {"id": "R03", "text": "Packaging was fine; product is average.", "sentiment": "neutral"},
        {"id": "R04", "text": "Support resolved my ticket in one day.", "sentiment": "positive"},
        {"id": "R05", "text": "The app crashes when I export CSV.", "sentiment": "negative"},
        {"id": "R06", "text": "Neutral tone in the product FAQ.", "sentiment": "neutral"},
        {"id": "R07", "text": "Checkout felt slow but worked.", "sentiment": "neutral"},  # will flip in v2
        {"id": "R08", "text": "Love the new dark mode.", "sentiment": "positive"},
    ]

    v2_rows = [dict(r) for r in v1_rows]
    # Label corrections
    for r in v2_rows:
        if r["id"] == "R07":
            r["sentiment"] = "negative"  # "slow" is a complaint
        if r["id"] == "R03":
            r["sentiment"] = "positive"  # re-read as mild praise
    # New March batch
    v2_rows.extend(
        [
            {"id": "R09", "text": "March promo code failed at checkout.", "sentiment": "negative"},
            {"id": "R10", "text": "New onboarding tour is clear.", "sentiment": "positive"},
            {"id": "R11", "text": "Docs cover the API well enough.", "sentiment": "neutral"},
        ]
    )

    # v3: rename sentiment → label, add source, remove R06, change two labels
    v3_rows = []
    for r in v2_rows:
        if r["id"] == "R06":
            continue  # removed
        row = {
            "id": r["id"],
            "text": r["text"],
            "label": r["sentiment"],
            "source": "web-form" if r["id"] < "R09" else "march-import",
        }
        if r["id"] == "R11":
            row["label"] = "positive"
        if r["id"] == "R04":
            row["label"] = "neutral"
        v3_rows.append(row)

    return {
        "name": "feature-drift-pilot",
        "description": "Sentiment pilot → row growth → rename sentiment→label + source column (eg:8.2).",
        "teachingFocus": "feature-drift",
        "versions": [
            {
                "id": "v1.0.0",
                "date": "2024-02-01",
                "message": "Initial sentiment pilot (8 reviews).",
                "columns": ["id", "text", "sentiment"],
                "rows": v1_rows,
                "renames": [],
                "schema_notes": "Pilot schema: id, free-text review, sentiment label.",
                "callout": "v1 is the attributable baseline. Without this snapshot, later drift has nowhere to roll back to.",
            },
            {
                "id": "v2.0.0",
                "date": "2024-03-12",
                "message": "Add March batch; fix ambiguous neutral/positive labels.",
                "columns": ["id", "text", "sentiment"],
                "rows": v2_rows,
                "renames": [],
                "schema_notes": "Same columns; rows grew and two labels were corrected.",
                "callout": "v2 shows row churn and label drift with no schema change — still needs a version bump and a commit message (eg:8.20).",
            },
            {
                "id": "v3.0.0",
                "date": "2024-04-05",
                "message": "Rename sentiment→label; add source; drop R06; retarget two labels.",
                "columns": ["id", "text", "label", "source"],
                "rows": v3_rows,
                "renames": [{"from": "sentiment", "to": "label"}],
                "schema_notes": "Schema drift: renamed sentiment→label, added source provenance column.",
                "callout": "v3 renamed a feature and added another — downstream code that reads sentiment will break unless the version is pinned (eg:8.2).",
            },
        ],
    }


def hiring_schema_evolution() -> dict:
    """Hiring screen table: add score, then rename group and drop years_experience."""
    v1_rows = [
        {"id": "H01", "group": "A", "hired": "0", "years_experience": "3"},
        {"id": "H02", "group": "B", "hired": "1", "years_experience": "5"},
        {"id": "H03", "group": "A", "hired": "0", "years_experience": "2"},
        {"id": "H04", "group": "C", "hired": "1", "years_experience": "7"},
        {"id": "H05", "group": "B", "hired": "0", "years_experience": "4"},
        {"id": "H06", "group": "C", "hired": "0", "years_experience": "1"},
    ]

    v2_rows = []
    for r in v1_rows:
        row = dict(r)
        # Add model score; tweak one hire decision
        scores = {"H01": "0.42", "H02": "0.81", "H03": "0.35", "H04": "0.78", "H05": "0.55", "H06": "0.22"}
        row["score"] = scores[r["id"]]
        if r["id"] == "H05":
            row["hired"] = "1"
        v2_rows.append(row)
    v2_rows.append(
        {"id": "H07", "group": "A", "hired": "1", "years_experience": "6", "score": "0.74"}
    )

    v3_rows = []
    for r in v2_rows:
        if r["id"] == "H06":
            continue
        v3_rows.append(
            {
                "id": r["id"],
                "demographic_group": r["group"],
                "hired": r["hired"],
                "score": r["score"],
            }
        )

    return {
        "name": "hiring-schema-evolution",
        "description": "Hiring table: add score column, then rename group and drop years_experience.",
        "teachingFocus": "schema-evolution",
        "versions": [
            {
                "id": "v1.0.0",
                "date": "2024-01-10",
                "message": "Baseline hiring outcomes with experience years.",
                "columns": ["id", "group", "hired", "years_experience"],
                "rows": v1_rows,
                "renames": [],
                "schema_notes": "Outcome table without model scores.",
                "callout": "v1 has no model score — useful as the pre-model release.",
            },
            {
                "id": "v2.0.0",
                "date": "2024-02-20",
                "message": "Attach screening scores; add H07; flip H05 hire flag.",
                "columns": ["id", "group", "hired", "years_experience", "score"],
                "rows": v2_rows,
                "renames": [],
                "schema_notes": "Added score feature; one label (hired) changed.",
                "callout": "Adding a feature without a version id makes it hard to attribute later fairness regressions.",
            },
            {
                "id": "v3.0.0",
                "date": "2024-03-15",
                "message": "Rename group→demographic_group; drop years_experience; remove H06.",
                "columns": ["id", "demographic_group", "hired", "score"],
                "rows": v3_rows,
                "renames": [{"from": "group", "to": "demographic_group"}],
                "schema_notes": "Column rename + feature removal — classic schema drift.",
                "callout": "Dropping years_experience and renaming group breaks any pipeline that assumed the v2 schema.",
            },
        ],
    }


def main() -> None:
    presets = {
        "feature-drift-pilot": feature_drift_pilot(),
        "hiring-schema-evolution": hiring_schema_evolution(),
    }
    for name, p in presets.items():
        ns = [len(v["rows"]) for v in p["versions"]]
        print(f"{name}: rows per version = {ns}")

    out = Path(__file__).with_name("presets-bundle.js")
    payload = json.dumps(presets, indent=2)
    out.write_text(
        "/* Generated by make_presets.py — do not edit by hand. */\n"
        "window.VersionTimelinePresets = " + payload + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {out}")


if __name__ == "__main__":
    main()
