# Example 1.10 — Sample of GeoJSON File

**Chapter:** 1  
**Label:** `eg:1.10`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.2.5` — Dataset Format

## Learning objective

Read a GeoJSON FeatureCollection and separate geometry (where) from properties (what), the way spatial datasets are structured.

## Chapter context

Section 1.2.5 closes the format survey with geospatial data, making Example 1.5's conceptual sketch concrete: coordinates and feature types replace flat columns.

## What this example shows

A FeatureCollection with a New York City point and a connecting line, each carrying a `name` property.

## Key terms

- **FeatureCollection** — the top-level GeoJSON object wrapping an array of features.
- **Feature** — one GeoJSON record: a `geometry` plus its `properties`.

## What you should learn

### From the data / input
- Top-level `"type": "FeatureCollection"` wraps a `features` array — the GeoJSON equivalent of "here are all the rows."
- Each feature has `geometry` (a `type` plus `coordinates`) and `properties` (non-spatial attributes) — the geometry/properties split Example 1.5 introduced in the abstract.
- Coordinates are ordered `[longitude, latitude]` — easy to get backwards when converting from other tools.

### From the output / result
- Pretty-printed output shows exactly two features: one `Point`, one `LineString`. The book's prose also mentions polygons, but this listing only contains these two geometry types.

## Contents

| File | Role |
|------|------|
| `data.geojson` | GeoJSON sample |
| `install.sh` | No-op installer |
| `run.sh` | Pretty-prints GeoJSON |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3 optional (falls back to `cat`)

## Setup

```bash
cd modules/chapter1/example10
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 1.10 — Sample of GeoJSON File
{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -73.935242,
                    40.73061
                ]
            },
            "properties": {
                "name": "New York City"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-73.935242, 40.73061],
                    [-74.006, 40.7128]
                ]
            },
            "properties": {
                "name": "Sample Line"
            }
        }
    ]
}
```

## How to interpret the result

If you can say "geometry = where, properties = what" for both features, you have the working definition Section 1.2.5 wants before you meet GIS tools later in the book that build on exactly this structure.

## Try it / Reflect

- Add a `Polygon` feature for a simple bounding box and confirm your GeoJSON still parses by round-tripping it through `json.load`/`json.dump`.

## Related examples

- `eg:1.5` — the conceptual introduction this listing makes concrete.
- `eg:1.8` — SQL/relational format, for contrast with this geometry-first structure.

## Notes

- Complements conceptual Example 1.5.
- Synthetic sample data from the book manuscript.
