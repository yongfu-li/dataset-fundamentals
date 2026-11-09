---
marp: true
title: Chapter 1 — Characteristics of Good Datasets
paginate: true
---

# Chapter 1 — Characteristics of Good Datasets

Welcome to Part 4 of Chapter 1

---

## Learning Objectives
- Four primary objectives anchor our study of data quality
- We define the five core dimensions of accuracy, completeness, consistency, timeliness
- We diagnose semantic accuracy defects and categorize missingness mechanisms into MCAR, MAR
- We examine metadata architectures adhering to the FAIR data principles
- Finally, we audit dataset health scores using our in-browser diagnostic inspector

---

## The Multi-Dimensional Quality Framework
- Data quality is not a single scalar metric
- A dataset can be completely populated while being factually inaccurate
- Following foundational data quality ontologies
- Accuracy measures ground truth fidelity
- Completeness measures attribute coverage and sparsity
- Consistency checks invariant rules

---

## Mathematical Definitions of Quality Dimensions
- Each quality dimension can be formalized mathematically
- Accuracy is computed as the proportion of recorded values falling within an acceptable
- Completeness measures the ratio of non-null, valid cells across the observation matrix
- Consistency calculates the fraction of records satisfying all referential integrity and
- Timeliness models freshness using exponential temporal decay functions from observation to

---

## The Semantic Accuracy Catastrophe
- Syntactically valid values can still cause severe analytical catastrophes
- The sample mean shifts dramatically
- Because the corrupted number remains a valid positive float
- Catching semantic inaccuracy requires distribution auditing, Mahalanobis distance checks

---

## Missingness Mechanisms: MCAR, MAR, and MNAR
- When attributes contain missing cells
- Missing completely at random occurs when data drops due to transient
- Missing at random occurs when missingness depends on observed features
- Missing not at random occurs when the missing value itself dictates its absence
- Imputing without understanding these mechanisms introduces severe statistical bias

---

## Consistency Invariants and Format Ambiguities
- Consistency failures frequently emerge from format collisions and violated relational
- Date format ambiguities represent a classic failure mode when combining American and
- Storing dates without ISO eight-six-zero-one standards causes sorting algorithms to
- This temporal disordering leaks future records into training sets
- Enforcing strict schema invariants at ingestion prevents downstream leakage

---

## Example 1.11 — Defective Transaction Ledger
- Example 1.11 — hands-on module
- Example 1.11 demonstrates a semantic accuracy failure in a retail transaction ledger
- One purchase entry contains an extra trailing zero
- Inspecting this simple table demonstrates why statistical screening must accompany schema
- View files: `modules/chapter1/example11/`

---

## Example 1.11 — listing

```
Txn_ID,Date,Account,Amount,Type
T001,2024-03-01,Revenue,1500.00,Credit
T002,2024-03-02,Revenue,15000.00,Credit
T003,2024-03-03,Refund,50.00,Debit
```

---

## Metadata Engineering and the FAIR Data Paradigm
- Accurate values are useless if consumers cannot interpret their physical meaning
- Collection provenance
- Reusable under explicit licenses

---

## Example 1.14 — Weather Dataset Metadata Sidecar
- Example 1.14 — hands-on module
- Example 1.14 demonstrates production metadata engineering using a JSON sidecar file
- Temporal sampling intervals
- Storing explicit metadata alongside raw readings ensures downstream models correctly
- View files: `modules/chapter1/example14/`

---

## Example 1.14 — listing

```
{
  "dataset_name": "Global Weather Data",
  "description": "This dataset contains weather measurements from various geographic locations.",
  "measurement_units": {
    "temperature": "Celsius",
    "humidity": "Percentage",
    "wind_speed": "m/s",
    "pressure": "hPa"
  },
  "geographic_location": {
    "latitude": 37.7749,
    "longitude": -122.4194,
    "city": "San Francisco",
    "country": "USA"
  },
  "time_period": {
    "start_date": "2024-01-01",
    "end_date": "2024-01-31",
    "time_zone": "UTC"
  },
  "data_source": "National Meteorological Agency",
  "last_updated": "2024-02-01T12:00:00Z"
}
```

---

## In-Browser Data Quality Health Inspector
- Learners can evaluate dataset health interactively using our in-browser Data Quality
- The workbench computes a composite quality index across accuracy, completeness
- You can toggle between clean datasets and corrupted samples containing MCAR and MNAR
- Observing how individual defects degrade the composite health score sharpens diagnostic

---

## Key Takeaways and Quality Assurance Principles
- Four fundamental principles summarize our study of dataset quality
- Quality is multi-dimensional and must be evaluated relative to specific analytical tasks
- Detecting semantic accuracy errors requires statistical distribution auditing beyond
- Addressing missing values requires identifying whether data is missing completely at
- Metadata sidecars adhering to FAIR principles ensure long-term scientific reproducibility

---

## Next
- Complete the quiz for this part
- Pause here to test your understanding with the formative quiz for this part

