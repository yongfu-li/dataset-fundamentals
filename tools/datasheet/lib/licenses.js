/* Classic script — full LICENSE file generation for dataset release bundles.
 * Prefers window.DatasheetLicenseTexts (licenses-bundle.js) for canonical bodies. */
(function (global) {
  "use strict";
  const DatasheetLib = global.DatasheetLib || (global.DatasheetLib = {});

  const FALLBACK_SPECS = {
    "cc-by-4.0": {
      spdx: "CC-BY-4.0",
      label: "Creative Commons Attribution 4.0 International",
      short_label: "CC BY 4.0",
      url: "https://creativecommons.org/licenses/by/4.0/",
      filename: "LICENSE",
    },
    "cc0-1.0": {
      spdx: "CC0-1.0",
      label: "Creative Commons Zero v1.0 Universal",
      short_label: "CC0 1.0",
      url: "https://creativecommons.org/publicdomain/zero/1.0/",
      filename: "LICENSE",
    },
    mit: {
      spdx: "MIT",
      label: "MIT License",
      short_label: "MIT",
      url: "https://opensource.org/licenses/MIT",
      filename: "LICENSE",
    },
    "apache-2.0": {
      spdx: "Apache-2.0",
      label: "Apache License 2.0",
      short_label: "Apache-2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0",
      filename: "LICENSE",
    },
  };

  const LICENSE_OPTIONS = [
    { key: "cc-by-4.0", value: "CC BY 4.0" },
    { key: "cc0-1.0", value: "CC0 1.0" },
    { key: "mit", value: "MIT" },
    { key: "apache-2.0", value: "Apache-2.0" },
    { key: "other", value: "Other…" },
  ];

  function licenseBundle() {
    return global.DatasheetLicenseTexts || { specs: FALLBACK_SPECS, bodies: {} };
  }

  function licenseSpecs() {
    return licenseBundle().specs || FALLBACK_SPECS;
  }

  function copyrightYear(createdDate) {
    const m = String(createdDate || "").match(/^(\d{4})/);
    if (m) return m[1];
    return String(new Date().getFullYear());
  }

  function normalizeLicenseKey(licenseField) {
    const raw = String(licenseField || "").trim().toLowerCase();
    if (!raw) return "other";
    if (raw === "other" || raw === "other…" || raw === "custom") return "other";
    if (raw.indexOf("cc0") !== -1 || raw.indexOf("public domain") !== -1) return "cc0-1.0";
    if (raw.indexOf("cc by") !== -1 || raw.indexOf("cc-by") !== -1 || raw.indexOf("attribution 4") !== -1) {
      return "cc-by-4.0";
    }
    if (raw === "mit" || raw.indexOf("mit license") !== -1) return "mit";
    if (raw.indexOf("apache") !== -1) return "apache-2.0";
    // Exact match against short labels
    const specs = licenseSpecs();
    const keys = Object.keys(specs);
    for (let i = 0; i < keys.length; i += 1) {
      const s = specs[keys[i]];
      if (raw === String(s.short_label || "").toLowerCase() || raw === String(s.spdx || "").toLowerCase()) {
        return keys[i];
      }
    }
    return "other";
  }

  function resolveLicenseKey(fields) {
    if (fields.license_key && fields.license_key !== "other") return fields.license_key;
    if (fields.license_key === "other") return "other";
    return normalizeLicenseKey(fields.license);
  }

  function displayLicenseName(fields) {
    const key = resolveLicenseKey(fields);
    if (key === "other") return (fields.license_other || fields.license || "Custom license").trim();
    const specs = licenseSpecs();
    return (specs[key] && (specs[key].short_label || specs[key].label)) || fields.license || key;
  }

  function buildNoticeHeader(fields, spec) {
    const year = copyrightYear(fields.created_date);
    const who = (fields.creators || "Dataset authors").trim();
    const name = (fields.dataset_name || "Dataset").trim();
    const contact = (fields.contact || "").trim();
    const version = (fields.version || "").trim();
    let hdr = "Dataset release notice\n";
    hdr += "======================\n\n";
    hdr += "Dataset:  " + name + "\n";
    if (version) hdr += "Version:  " + version + "\n";
    hdr += "Creator:  " + who + "\n";
    hdr += "Year:     " + year + "\n";
    if (contact) hdr += "Contact:  " + contact + "\n";
    if (spec) {
      hdr += "License:  " + (spec.label || spec.short_label) + "\n";
      hdr += "SPDX:     " + spec.spdx + "\n";
      if (spec.url) hdr += "URL:      " + spec.url + "\n";
    } else {
      hdr += "License:  " + displayLicenseName(fields) + "\n";
      hdr += "SPDX:     LicenseRef-custom\n";
    }
    hdr += "\n";
    if (spec && (spec.spdx === "CC-BY-4.0" || spec.spdx === "CC0-1.0")) {
      hdr +=
        'Suggested attribution:\n  "' +
        name +
        '" by ' +
        who +
        (contact ? " (" + contact + ")" : "") +
        ", licensed under " +
        (spec.short_label || spec.spdx) +
        (spec.url ? " (" + spec.url + ")" : "") +
        "\n\n";
    }
    hdr +=
      "------------------------------------------------------------------------\n" +
      "Full license text follows.\n" +
      "------------------------------------------------------------------------\n\n";
    return hdr;
  }

  function personalizeBody(key, body, fields) {
    const year = copyrightYear(fields.created_date);
    const who = (fields.creators || "Dataset authors").trim();
    if (key === "mit") {
      return body
        .replace(/Copyright \(c\) <year> <copyright holders>/g, "Copyright (c) " + year + " " + who)
        .replace(/Copyright \(c\) \[year\] \[fullname\]/g, "Copyright (c) " + year + " " + who);
    }
    if (key === "apache-2.0") {
      // Apache appendix often uses [yyyy] [name of copyright owner]
      let text = body;
      if (text.indexOf("[yyyy]") !== -1) {
        text = text.replace(/\[yyyy\]/g, year).replace(/\[name of copyright owner\]/g, who);
      }
      return text;
    }
    return body;
  }

  function buildCustom(fields) {
    const license = displayLicenseName(fields);
    const contact = (fields.contact || "").trim();
    return (
      buildNoticeHeader(fields, null) +
      "Custom / other license\n\n" +
      "License name or identifier: " +
      license +
      "\n\n" +
      "This release selected \"Other\" in the datasheet builder. Paste the full legal\n" +
      "text approved by your institution or legal team below this notice, or replace\n" +
      "this file entirely before publishing.\n\n" +
      "Keep datasheet.md, datasheet-metadata.json, and LICENSE consistent.\n" +
      (contact ? "\nFor licensing questions, contact: " + contact + "\n" : "")
    );
  }

  function buildLicenseFile(fields) {
    const key = resolveLicenseKey(fields);
    const specs = licenseSpecs();
    const bodies = licenseBundle().bodies || {};

    if (key === "other") {
      return {
        filename: "LICENSE",
        content: buildCustom(fields),
        spdx: "LicenseRef-custom",
        license_key: "other",
        license_label: displayLicenseName(fields),
        has_full_text: false,
      };
    }

    const spec = specs[key] || FALLBACK_SPECS[key];
    const rawBody = bodies[key];
    if (!rawBody) {
      return {
        filename: "LICENSE",
        content:
          buildNoticeHeader(fields, spec) +
          "Full license text was not bundled. Download the canonical text from:\n" +
          (spec && spec.url ? spec.url : "(unknown)") +
          "\n",
        spdx: (spec && spec.spdx) || "LicenseRef-custom",
        license_key: key,
        license_label: (spec && spec.label) || key,
        has_full_text: false,
      };
    }

    const body = personalizeBody(key, rawBody, fields);
    return {
      filename: (spec && spec.filename) || "LICENSE",
      content: buildNoticeHeader(fields, spec) + body,
      spdx: spec.spdx,
      license_key: key,
      license_label: spec.label,
      has_full_text: true,
    };
  }

  function syncLicenseField(fields) {
    const key = resolveLicenseKey(fields);
    fields.license_key = key;
    if (key === "other") {
      fields.license = (fields.license_other || fields.license || "").trim() || "Other";
    } else {
      const specs = licenseSpecs();
      fields.license = (specs[key] && specs[key].short_label) || key;
      fields.license_other = "";
    }
    return fields;
  }

  DatasheetLib.LICENSE_OPTIONS = LICENSE_OPTIONS;
  DatasheetLib.licenseSpecs = licenseSpecs;
  DatasheetLib.normalizeLicenseKey = normalizeLicenseKey;
  DatasheetLib.resolveLicenseKey = resolveLicenseKey;
  DatasheetLib.displayLicenseName = displayLicenseName;
  DatasheetLib.syncLicenseField = syncLicenseField;
  DatasheetLib.buildLicenseFile = buildLicenseFile;
})(typeof window !== "undefined" ? window : globalThis);
