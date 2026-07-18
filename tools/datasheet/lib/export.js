/* Classic script — export datasheet.md and datasheet-metadata.json. */
(function (global) {
  "use strict";
  const DatasheetLib = global.DatasheetLib || (global.DatasheetLib = {});

  function download(filename, text, mime) {
    const blob = new Blob([text], { type: mime || "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 500);
  }

  function buildMetadataPayload(state) {
    const tpl = DatasheetLib.TEMPLATES[state.templateId] || DatasheetLib.TEMPLATES.datasheet;
    const licenseFile = DatasheetLib.buildLicenseFile(state.fields);
    const sectionDocs = {};
    tpl.sections.forEach(function (sec) {
      sectionDocs[sec.id] = {
        title: sec.title,
        text: (state.fields[sec.id] || "").trim(),
      };
    });

    const dictionary = [];
    if (state.profile && state.profile.columns) {
      state.profile.columns.forEach(function (col) {
        dictionary.push({
          name: col.name,
          inferred_type: col.inferred_type,
          missing_count: col.missing_count,
          missing_pct: col.missing_pct,
          unique_count: col.unique_count,
          sample_values: col.sample_values,
          min: col.min,
          max: col.max,
          mean: col.mean,
          description: (state.columnDescriptions && state.columnDescriptions[col.name]) || col.description || "",
        });
      });
    }

    return {
      tool: "Datasheet / data-card builder",
      generated: new Date().toISOString(),
      template: state.templateId,
      template_label: tpl.label,
      book_anchors: [
        "§8.2 Key Components of Dataset Documentation",
        "§8.3 Creating Effective Documentation",
      ],
      dataset: {
        name: (state.fields.dataset_name || "").trim(),
        version: (state.fields.version || "").trim(),
        creators: (state.fields.creators || "").trim(),
        created_date: (state.fields.created_date || "").trim(),
        license: (state.fields.license || "").trim(),
        license_key: state.fields.license_key || null,
        contact: (state.fields.contact || "").trim(),
        spdx_license_identifier: licenseFile.spdx,
        license_file: licenseFile.filename,
        license_has_full_text: !!licenseFile.has_full_text,
      },
      documentation: sectionDocs,
      sample_data: state.sample
        ? {
            source: state.sample.source,
            row_count: state.profile ? state.profile.row_count : state.sample.rows.length,
            column_count: state.profile ? state.profile.column_count : state.sample.columns.length,
            profile: state.profile || null,
            data_dictionary: dictionary,
          }
        : null,
    };
  }

  function downloadMarkdown(markdown) {
    download("datasheet.md", markdown, "text/markdown;charset=utf-8");
  }

  function downloadMetadata(state) {
    const payload = buildMetadataPayload(state);
    download("datasheet-metadata.json", JSON.stringify(payload, null, 2), "application/json");
  }

  function downloadLicense(state) {
    if (state.fields) DatasheetLib.syncLicenseField(state.fields);
    const file = DatasheetLib.buildLicenseFile(state.fields);
    download(file.filename, file.content, "text/plain;charset=utf-8");
  }

  DatasheetLib.buildMetadataPayload = buildMetadataPayload;
  DatasheetLib.downloadMarkdown = downloadMarkdown;
  DatasheetLib.downloadMetadata = downloadMetadata;
  DatasheetLib.downloadLicense = downloadLicense;
})(typeof window !== "undefined" ? window : globalThis);
