"""Generate sample datasets for the Datasheet / data-card builder.

Each preset includes default documentation prompts so exported Markdown
is complete without manual entry.

Run:
    python make_presets.py
"""

from __future__ import annotations

import json
import random
from pathlib import Path

IDENTITY_DEFAULTS = {
    "version": "1.0.0",
    "creators": "Dataset Fundamentals course (synthetic teaching data)",
    "created_date": "2024-06-01",
    "license": "CC BY 4.0",
    "contact": "Bundled with lecture tools — teaching use only",
}


def hiring_applicants(rng: random.Random) -> dict:
    groups = ["Group A", "Group B", "Group C", "Group D"]
    rows = []
    for i in range(1, 81):
        rows.append(
            {
                "id": f"H{i:04d}",
                "group": rng.choice(groups),
                "label": 1 if rng.random() > 0.45 else 0,
                "score": round(rng.uniform(0.05, 0.98), 4),
                "years_experience": rng.randint(0, 20),
            }
        )
    return {
        "name": "hiring-applicants",
        "suggestedName": "Hiring screen applicants (teaching sample)",
        "suggestedDomain": "Fairness / HR analytics teaching",
        "description": "Synthetic applicants with group, label, model score, and experience — use to practice fairness + documentation (§7.3, §8.2).",
        "rows": rows,
        "columnDescriptions": {
            "id": "Synthetic applicant identifier (format H####). Not linked to real people.",
            "group": "Sensitive demographic group for fairness analysis (Group A–D). Use for disparity checks, not as a sole hiring feature.",
            "label": "Ground-truth qualified/hire outcome: 1 = positive class, 0 = negative.",
            "score": "Model prediction score in [0, 1]. Decisions use Ŷ = 1{score ≥ threshold}.",
            "years_experience": "Years of professional experience (integer, 0–20).",
        },
        "defaults": {
            "datasheet": {
                **IDENTITY_DEFAULTS,
                "dataset_name": "Hiring screen applicants (teaching sample)",
                "motivation": (
                    "Support coursework on fairness in hiring-screen scenarios (§7.3, §7.5). "
                    "Learners practice writing dataset documentation alongside disparate-impact "
                    "and demographic-parity exercises. This dataset is for teaching only—not for "
                    "real hiring, compliance, or employment decisions."
                ),
                "composition": (
                    "80 synthetic applicant records across four groups (Group A–D). Each row has "
                    "an applicant id, sensitive group, binary qualified/hire label, model score "
                    "in [0, 1], and years of experience (0–20). Roughly balanced labels; groups "
                    "are evenly sampled in this teaching release."
                ),
                "collection": (
                    "Fully synthetic data generated with a fixed random seed (reproducible). "
                    "No real applicants, employers, or HR systems were involved. Instances represent "
                    "a simplified screening pipeline: features → score → thresholded decision vs. label."
                ),
                "preprocessing": (
                    "Raw teaching release—no cleaning or deduplication applied. Instructors may "
                    "optionally run the Ch.5 cleaning workbench or Ch.7 fairness meter on the same file "
                    "and document those steps in a separate version note."
                ),
                "uses": (
                    "Teaching fairness metrics (demographic parity, 80% rule, equal opportunity), "
                    "threshold sweeps, datasheet and data-dictionary practice, and pairing with the "
                    "Bias & fairness meter (Ch.7). Suitable for classroom labs and documentation drills."
                ),
                "distribution": (
                    "Bundled with course lecture tools under lectures/tools/datasheet/. "
                    "Distributed as CSV/JSON sample and preset in the browser tool. "
                    "License: CC BY 4.0. No PII; safe for classroom sharing."
                ),
                "maintenance": (
                    "Maintained by course authors; version bumped per book edition. "
                    "Regenerate presets via data/make_presets.py. Breaking schema changes require a new version tag."
                ),
                "limitations": (
                    "Small sample (80 rows); not statistically representative of any workforce. "
                    "Synthetic scores and labels; must not be used for operational HR decisions, "
                    "EEOC filings, or production model training without real data and governance review."
                ),
            },
            "datacard": {
                **IDENTITY_DEFAULTS,
                "dataset_name": "Hiring screen applicants (teaching sample)",
                "purpose": (
                    "Train learners to document tabular ML datasets used in fairness audits, "
                    "and to connect metadata (§8.2) with measurable disparity checks (§7.3)."
                ),
                "provenance": (
                    "Course-authored synthetic sample (seed 42). Derived for the Dataset Fundamentals "
                    "lecture site; not collected from any employer or job platform."
                ),
                "composition": (
                    "80 rows × 5 columns: id, group, label, score, years_experience. "
                    "Binary label and continuous score support threshold-based decision analysis."
                ),
                "collection": (
                    "Programmatic generation for teaching. Inclusion: all four groups represented; "
                    "exclusion: no real personal data, no longitudinal employment history."
                ),
                "uses": (
                    "Documentation labs, fairness meter exercises, metadata completeness checks, "
                    "and FAIR/reproducibility discussions in Ch.8 and Ch.13."
                ),
                "factors": (
                    "The group column is a sensitive attribute for fairness analysis. "
                    "Document whether it is used only for auditing (recommended) vs. as a model input (discouraged in teaching scenarios)."
                ),
                "limitations": (
                    "Toy sample; labels and scores are simulated. Coverage of groups is even by design, "
                    "which may not reflect real hiring pipelines."
                ),
                "ethical": (
                    "No real individuals, but treat the scenario seriously: document harms from misuse "
                    "(automated rejection, disparate impact) and state clearly that the data is synthetic."
                ),
            },
        },
    }


def climate_sensors(rng: random.Random) -> dict:
    sites = ["north-field", "south-field", "coastal-station"]
    rows = []
    for i in range(1, 61):
        rows.append(
            {
                "reading_id": f"R{i:04d}",
                "site": rng.choice(sites),
                "timestamp": f"2024-{rng.randint(1,12):02d}-{rng.randint(1,28):02d}",
                "temp_c": round(rng.gauss(22, 4), 1),
                "rainfall_mm": round(max(0, rng.gauss(2, 5)), 1),
                "quality_flag": rng.choice(["ok", "suspect", "missing_sensor"]),
            }
        )
    return {
        "name": "climate-sensors",
        "suggestedName": "Regional climate sensor readings",
        "suggestedDomain": "Environmental monitoring / reproducibility",
        "description": "Multi-site sensor log with timestamps and quality flags — practice provenance and data-dictionary fields (§8.2).",
        "rows": rows,
        "columnDescriptions": {
            "reading_id": "Unique sensor reading identifier (format R####).",
            "site": "Deployment site: north-field, south-field, or coastal-station.",
            "timestamp": "Observation date (YYYY-MM-DD, synthetic calendar year 2024).",
            "temp_c": "Air temperature in degrees Celsius at observation time.",
            "rainfall_mm": "Rainfall in millimeters since prior reading (non-negative).",
            "quality_flag": "QC flag: ok (trusted), suspect (review), or missing_sensor (instrument fault).",
        },
        "defaults": {
            "datasheet": {
                **IDENTITY_DEFAULTS,
                "dataset_name": "Regional climate sensor readings",
                "motivation": (
                    "Support coursework on environmental monitoring datasets and reproducible "
                    "documentation (§8.2–8.3). Learners practice provenance notes, data dictionaries, "
                    "and quality-flag semantics before sharing sensor logs with collaborators."
                ),
                "composition": (
                    "60 sensor readings from three deployment sites (north-field, south-field, "
                    "coastal-station). Fields: reading id, site, timestamp (2024), temperature (°C), "
                    "rainfall (mm), and quality_flag. Mix of ok, suspect, and missing_sensor flags."
                ),
                "collection": (
                    "Synthetic IoT-style log for teaching. Readings simulate periodic telemetry "
                    "from field sensors with occasional suspect values and missing-sensor events. "
                    "Not collected from real instruments or weather agencies."
                ),
                "preprocessing": (
                    "Raw release only. No gap-filling, unit conversion, or outlier removal applied. "
                    "Document any downstream cleaning (e.g., Ch.5 workbench) in version notes if instructors extend the lab."
                ),
                "uses": (
                    "Teaching data dictionaries, provenance and codebook fields, QC flag interpretation, "
                    "version-control scenarios (Ch.8), and metadata export as JSON for pipeline automation."
                ),
                "distribution": (
                    "Bundled with lecture tools (lectures/tools/datasheet/). CC BY 4.0. "
                    "No geographic restrictions; synthetic coordinates and site names only."
                ),
                "maintenance": (
                    "Course authors regenerate via make_presets.py. Planned updates: add schema version "
                    "field and changelog when new sites or variables are introduced."
                ),
                "limitations": (
                    "Synthetic timestamps and readings; not suitable for climate research, forecasting, "
                    "or policy reports. quality_flag distribution is illustrative, not calibrated to real sensor failure rates."
                ),
            },
            "datacard": {
                **IDENTITY_DEFAULTS,
                "dataset_name": "Regional climate sensor readings",
                "purpose": (
                    "Teach how to document time-series sensor data: units, QC flags, site provenance, "
                    "and reproducible release metadata."
                ),
                "provenance": (
                    "Synthetic course dataset (seed 42). Simulates multi-site field deployment in 2024; "
                    "no linkage to government or commercial weather feeds."
                ),
                "composition": (
                    "60 rows × 6 columns. Numeric measures (temp_c, rainfall_mm) plus categorical site "
                    "and quality_flag. Date-stamped observations for timeline/version exercises."
                ),
                "collection": (
                    "Generated readings emulate edge-to-cloud ingestion: each row is one telemetry event "
                    "with an optional QC outcome. Instructors can discuss buffer loss and retry policies (Ch.9) in prose."
                ),
                "uses": (
                    "Documentation drills, metadata JSON export labs, pairing with version-timeline concepts (Ch.8), "
                    "and EDA previews (Ch.6) without publishing real infrastructure data."
                ),
                "factors": (
                    "Site may correlate with temperature and rainfall patterns in this synthetic set. "
                    "Document spatial coverage and whether sites are comparable for aggregation."
                ),
                "limitations": (
                    "Small sample; irregular timestamps; suspect/missing flags are random, not physics-based. "
                    "Do not use for operational agriculture or disaster-response models."
                ),
                "ethical": (
                    "No privacy risk (synthetic). Still document responsible use: mislabeled QC flags could "
                    "mislead downstream models if documentation omits known sensor faults."
                ),
            },
        },
    }


def main() -> None:
    rng = random.Random(42)
    presets = {
        "hiring-applicants": hiring_applicants(rng),
        "climate-sensors": climate_sensors(rng),
    }
    out = Path(__file__).resolve().parent / "presets-bundle.js"
    payload = json.dumps(presets, separators=(",", ":"))
    out.write_text(
        "/* Auto-generated by make_presets.py — do not edit by hand. */\n"
        "window.DatasheetPresets = " + payload + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {out} ({len(presets)} presets, {out.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
