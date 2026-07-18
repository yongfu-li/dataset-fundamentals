"""Generate fictional dataset cards for the Metadata completeness checker.

Cards mirror datasheet-metadata.json shape from the datasheet builder.

Run:
    python make_presets.py
"""

from __future__ import annotations

import json
from pathlib import Path


def draft_hiring() -> dict:
    """Incomplete release — common gaps before publication (§8.2)."""
    return {
        "name": "draft-hiring",
        "description": "Draft hiring-screen card — missing license, contact, limitations, and column descriptions. Score ~50%.",
        "card": {
            "tool": "Datasheet / data-card builder (fictional draft)",
            "template": "datasheet",
            "dataset": {
                "name": "Hiring screen applicants",
                "version": "0.3-draft",
                "creators": "ML team",
                "created_date": "",
                "license": "",
                "contact": "",
            },
            "documentation": {
                "motivation": {"title": "Motivation", "text": "Train a resume screener."},
                "composition": {
                    "title": "Composition",
                    "text": "Applicants with scores and groups. About 400 rows.",
                },
                "collection": {"title": "Collection process", "text": ""},
                "preprocessing": {"title": "Preprocessing", "text": ""},
                "uses": {"title": "Recommended uses", "text": "Internal model training only."},
                "distribution": {"title": "Distribution & access", "text": ""},
                "maintenance": {"title": "Maintenance", "text": ""},
                "limitations": {"title": "Limitations", "text": ""},
            },
            "sample_data": {
                "source": "hiring-applicants",
                "row_count": 400,
                "column_count": 5,
                "data_dictionary": [
                    {"name": "id", "inferred_type": "string", "description": ""},
                    {"name": "group", "inferred_type": "string", "description": ""},
                    {"name": "label", "inferred_type": "number", "description": ""},
                    {"name": "score", "inferred_type": "number", "description": ""},
                    {"name": "years_experience", "inferred_type": "number", "description": ""},
                ],
            },
            "provenance": "",
            "codebook": "",
            "annotations": "",
            "update_frequency": "",
        },
    }


def release_climate() -> dict:
    """Near-complete card — suitable for teaching release-ready documentation."""
    return {
        "name": "release-climate",
        "description": "Climate sensor release card — strong metadata, dictionary, provenance, and license fields. Score ~90%+.",
        "card": {
            "tool": "Datasheet / data-card builder",
            "template": "datasheet",
            "dataset": {
                "name": "Regional climate sensor readings",
                "version": "1.0.0",
                "creators": "Dataset Fundamentals course (synthetic teaching data)",
                "created_date": "2024-06-01",
                "license": "CC BY 4.0",
                "license_key": "cc-by-4.0",
                "contact": "course-materials@example.edu",
                "spdx_license_identifier": "CC-BY-4.0",
                "license_file": "LICENSE",
                "license_has_full_text": True,
            },
            "documentation": {
                "motivation": {
                    "title": "Motivation",
                    "text": (
                        "Support coursework on environmental monitoring datasets and reproducible "
                        "documentation (§8.2–8.3)."
                    ),
                },
                "composition": {
                    "title": "Composition",
                    "text": (
                        "60 sensor readings from three deployment sites with temperature, rainfall, "
                        "timestamps, and quality flags."
                    ),
                },
                "collection": {
                    "title": "Collection process",
                    "text": (
                        "Synthetic IoT-style log for teaching. Readings emulate periodic telemetry "
                        "with suspect and missing-sensor events."
                    ),
                },
                "preprocessing": {
                    "title": "Preprocessing",
                    "text": "Raw release only; document downstream cleaning in version notes.",
                },
                "uses": {
                    "title": "Recommended uses",
                    "text": "Teaching data dictionaries, provenance fields, and metadata QA labs.",
                },
                "distribution": {
                    "title": "Distribution & access",
                    "text": "Bundled with lecture tools under CC BY 4.0.",
                },
                "maintenance": {
                    "title": "Maintenance",
                    "text": "Maintained by course authors; version bumped per edition.",
                },
                "limitations": {
                    "title": "Limitations",
                    "text": (
                        "Synthetic readings; not suitable for climate research or operational forecasting."
                    ),
                },
            },
            "sample_data": {
                "source": "climate-sensors",
                "row_count": 60,
                "column_count": 6,
                "data_dictionary": [
                    {
                        "name": "reading_id",
                        "inferred_type": "string",
                        "description": "Unique sensor reading identifier (R####).",
                    },
                    {
                        "name": "site",
                        "inferred_type": "string",
                        "description": "Deployment site name (north-field, south-field, coastal-station).",
                    },
                    {
                        "name": "timestamp",
                        "inferred_type": "date",
                        "description": "Observation date (YYYY-MM-DD).",
                    },
                    {
                        "name": "temp_c",
                        "inferred_type": "number",
                        "description": "Air temperature in degrees Celsius.",
                    },
                    {
                        "name": "rainfall_mm",
                        "inferred_type": "number",
                        "description": "Rainfall in millimeters since prior reading.",
                    },
                    {
                        "name": "quality_flag",
                        "inferred_type": "string",
                        "description": "QC flag: ok, suspect, or missing_sensor.",
                    },
                ],
            },
            "provenance": (
                "Original synthetic telemetry generated with seed 42. No external agency feeds. "
                "Version 1.0.0 is the first public teaching release."
            ),
            "codebook": "quality_flag: ok=trusted reading; suspect=manual review; missing_sensor=instrument fault.",
            "annotations": "Timestamps are synthetic calendar dates in 2024, not live operational data.",
            "update_frequency": "Static teaching release; updated per book edition.",
        },
    }


def main() -> None:
    presets = {
        "draft-hiring": draft_hiring(),
        "release-climate": release_climate(),
    }
    out = Path(__file__).resolve().parent / "presets-bundle.js"
    payload = json.dumps(presets, separators=(",", ":"))
    out.write_text(
        "/* Auto-generated by make_presets.py — do not edit by hand. */\n"
        "window.MetadataCheckerPresets = " + payload + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {out} ({len(presets)} presets, {out.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
