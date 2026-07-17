# Example 1.14 — Metadata of Weather Dataset

**Chapter:** 1  
**Label:** `eg:1.14`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.3.2` — Metadata

## Learning objective

Use a metadata sidecar to answer questions a raw measurement table cannot: what units, what coverage, whose data, how fresh.

## Chapter context

Section 1.3.2 shifts from the values themselves to describing the dataset: provenance, schema, units, and licensing. Without this, even an accurate, complete, consistent table is easy to misread.

## What this example shows

A JSON metadata record for a weather extract: measurement units, geographic location, time period, data source, and last-updated timestamp.

## Key terms

- **Metadata** — data about the dataset itself — units, coverage, provenance, update time — as opposed to the measurements it contains.

## What you should learn

### From the data / input
- `measurement_units` prevents Celsius/Fahrenheit confusion before any value is read.
- `geographic_location` and `time_period` define spatial and temporal scope.
- `data_source` and `last_updated` support provenance and freshness (timeliness) checks.

### From the output / result
- Pretty-printed JSON should read as documentation about the data, not the measurements themselves.

## Contents

| File | Role |
|------|------|
| `metadata.json` | Weather metadata record |
| `install.sh` | No-op installer |
| `run.sh` | Pretty-prints JSON |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3 optional (falls back to `cat`)

## Setup

```bash
cd modules/chapter1/example14
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 1.14 — Metadata of Weather Dataset
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

## How to interpret the result

Ask of any new file: do I know units, coverage, and source? If any answer is "no," the dataset's metadata is incomplete — regardless of how clean the rows themselves look.

## Try it / Reflect

- Write a one-paragraph metadata sidecar for Example 1.16's income CSV, modeled on this JSON's keys.

## Related examples

- `eg:1.3` — units embedded in column headers instead of a separate metadata file; compare the two approaches.

## Notes

- Chapter 8 expands documentation and catalogs.
- Synthetic sample data from the book manuscript.
