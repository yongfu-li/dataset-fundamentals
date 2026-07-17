# License chooser

Browser lab for **dataset / companion-code licensing** (book §13.6). Learners answer a short use-case questionnaire or load modality scenarios, get a plain-language recommendation across Creative Commons, Open Data Commons, companion OSS, or restricted access, and export a recommendation note plus a `LICENSE` file when full legal text is available.

## Learning objectives

- Match CC0 / CC BY / SA / NC / NC-SA and ODC-By / ODbL / PDDL to reuse goals.
- Separate dataset licenses from companion software licenses (MIT, BSD-3-Clause, Apache-2.0, GPL-3.0).
- Recognize when sensitive or community-controlled data need restricted access instead of an open deed.
- Export SPDX-aligned artifacts that pair with the datasheet builder.

## Workflow

1. **Learn** — load a scenario grouped by license path (government CC0, sensors, GeoJSON, audio, wiki ShareAlike, education NC, NLP NC-SA, SQL ODC-By, ODbL maps, PDDL tables, clinical/community restricted, MIT / Apache / GPL code).
2. **Apply** — answer the adaptive questionnaire for your own release plan.
3. **Optional identity** — dataset name / creators for the LICENSE notice header.
4. **Export** — `license-recommendation.md`, `license-recommendation.json`, and `LICENSE` (full text or stub).

## Shared license assets

Full legal texts and the LICENSE builder live in `lectures/assets/`:

| File | Role |
|------|------|
| `licenses-bundle.js` | Canonical bodies (CC BY 4.0, CC0, MIT, Apache-2.0) |
| `licenses.js` | `ToolsLicenses` API (+ `DatasheetLib` mirror) |
| `make_licenses.py` | Optional re-fetch of upstream texts |

```bash
python lectures/assets/make_licenses.py
```

## Book anchor

- §13.6 Licensing and Ethical Considerations; Table `tab:13.license-paths`
- Part: `lectures/chapter13/parts/part-06-licensing-and-ethics/`

## Pairs with

- [Datasheet / data-card builder](../datasheet/) — paste SPDX into documentation and download the same LICENSE texts
