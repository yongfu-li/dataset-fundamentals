/* Shared LICENSE file generation for dataset tools.
 * Prefers window.ToolsLicenseTexts (licenses-bundle.js). Exposes ToolsLicenses
 * and mirrors the API onto DatasheetLib for the datasheet builder. */
(function (global) {
  "use strict";
  const ToolsLicenses = global.ToolsLicenses || (global.ToolsLicenses = {});
  const DatasheetLib = global.DatasheetLib || (global.DatasheetLib = {});

  const FALLBACK_SPECS = {
    "cc-by-4.0": {
      spdx: "CC-BY-4.0",
      label: "Creative Commons Attribution 4.0 International",
      short_label: "CC BY 4.0",
      url: "https://creativecommons.org/licenses/by/4.0/",
      filename: "LICENSE",
      downloadable: true,
    },
    "cc0-1.0": {
      spdx: "CC0-1.0",
      label: "Creative Commons Zero v1.0 Universal",
      short_label: "CC0 1.0",
      url: "https://creativecommons.org/publicdomain/zero/1.0/",
      filename: "LICENSE",
      downloadable: true,
    },
    mit: {
      spdx: "MIT",
      label: "MIT License",
      short_label: "MIT",
      url: "https://opensource.org/licenses/MIT",
      filename: "LICENSE",
      downloadable: true,
    },
    "apache-2.0": {
      spdx: "Apache-2.0",
      label: "Apache License 2.0",
      short_label: "Apache-2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0",
      filename: "LICENSE",
      downloadable: true,
    },
    "cc-by-nc-4.0": {
      spdx: "CC-BY-NC-4.0",
      label: "Creative Commons Attribution-NonCommercial 4.0 International",
      short_label: "CC BY-NC 4.0",
      url: "https://creativecommons.org/licenses/by-nc/4.0/",
      filename: "LICENSE",
      downloadable: false,
    },
    "cc-by-sa-4.0": {
      spdx: "CC-BY-SA-4.0",
      label: "Creative Commons Attribution-ShareAlike 4.0 International",
      short_label: "CC BY-SA 4.0",
      url: "https://creativecommons.org/licenses/by-sa/4.0/",
      filename: "LICENSE",
      downloadable: false,
    },
    "cc-by-nc-sa-4.0": {
      spdx: "CC-BY-NC-SA-4.0",
      label: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International",
      short_label: "CC BY-NC-SA 4.0",
      url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      filename: "LICENSE",
      downloadable: false,
    },
    "odc-by-1.0": {
      spdx: "ODC-By-1.0",
      label: "Open Data Commons Attribution License (ODC-By) v1.0",
      short_label: "ODC-By 1.0",
      url: "https://opendatacommons.org/licenses/by/1-0/",
      filename: "LICENSE",
      downloadable: false,
    },
    "odc-odbl-1.0": {
      spdx: "ODbL-1.0",
      label: "Open Data Commons Open Database License (ODbL) v1.0",
      short_label: "ODbL 1.0",
      url: "https://opendatacommons.org/licenses/odbl/1-0/",
      filename: "LICENSE",
      downloadable: false,
    },
    "pddl-1.0": {
      spdx: "PDDL-1.0",
      label: "ODC Public Domain Dedication and License (PDDL) v1.0",
      short_label: "PDDL 1.0",
      url: "https://opendatacommons.org/licenses/pddl/1-0/",
      filename: "LICENSE",
      downloadable: false,
    },
    "bsd-3-clause": {
      spdx: "BSD-3-Clause",
      label: "BSD 3-Clause License",
      short_label: "BSD-3-Clause",
      url: "https://opensource.org/licenses/BSD-3-Clause",
      filename: "LICENSE",
      downloadable: false,
    },
    "gpl-3.0": {
      spdx: "GPL-3.0-only",
      label: "GNU General Public License v3.0 only",
      short_label: "GPL-3.0",
      url: "https://www.gnu.org/licenses/gpl-3.0.html",
      filename: "LICENSE",
      downloadable: false,
    },
    closed: {
      spdx: "LicenseRef-Restricted",
      label: "Restricted / closed access",
      short_label: "Restricted",
      url: "",
      filename: "LICENSE",
      downloadable: false,
    },
  };

  /** Dropdown options for tools that ship full legal text (datasheet). */
  const LICENSE_OPTIONS = [
    { key: "cc-by-4.0", value: "CC BY 4.0" },
    { key: "cc0-1.0", value: "CC0 1.0" },
    { key: "mit", value: "MIT" },
    { key: "apache-2.0", value: "Apache-2.0" },
    { key: "other", value: "Other…" },
  ];

  function licenseBundle() {
    return (
      global.ToolsLicenseTexts ||
      global.DatasheetLicenseTexts || { specs: FALLBACK_SPECS, bodies: {} }
    );
  }

  function licenseSpecs() {
    const bundled = licenseBundle().specs || {};
    return Object.assign({}, FALLBACK_SPECS, bundled);
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
    if (raw.indexOf("restricted") !== -1 || raw.indexOf("closed") !== -1) return "closed";
    if (raw.indexOf("odbl") !== -1) return "odc-odbl-1.0";
    if (raw.indexOf("pddl") !== -1) return "pddl-1.0";
    if (raw.indexOf("odc") !== -1) return "odc-by-1.0";
    if (raw.indexOf("by-nc-sa") !== -1 || raw.indexOf("nc-sa") !== -1) return "cc-by-nc-sa-4.0";
    if (raw.indexOf("by-nc") !== -1 || raw.indexOf("noncommercial") !== -1 || raw.indexOf("non-commercial") !== -1) {
      return "cc-by-nc-4.0";
    }
    if (raw.indexOf("by-sa") !== -1 || raw.indexOf("sharealike") !== -1 || raw.indexOf("share-alike") !== -1) {
      return "cc-by-sa-4.0";
    }
    if (raw.indexOf("cc0") !== -1 || raw.indexOf("public domain") !== -1) return "cc0-1.0";
    if (raw.indexOf("cc by") !== -1 || raw.indexOf("cc-by") !== -1 || raw.indexOf("attribution 4") !== -1) {
      return "cc-by-4.0";
    }
    if (raw.indexOf("gpl") !== -1) return "gpl-3.0";
    if (raw.indexOf("bsd") !== -1) return "bsd-3-clause";
    if (raw === "mit" || raw.indexOf("mit license") !== -1) return "mit";
    if (raw.indexOf("apache") !== -1) return "apache-2.0";
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
    const source = (fields.license_source || "release tool").trim();
    return (
      buildNoticeHeader(fields, null) +
      "Custom / other license\n\n" +
      "License name or identifier: " +
      license +
      "\n\n" +
      'This release selected "Other" in the ' +
      source +
      ". Paste the full legal\n" +
      "text approved by your institution or legal team below this notice, or replace\n" +
      "this file entirely before publishing.\n\n" +
      "Keep documentation, metadata, and LICENSE consistent.\n" +
      (contact ? "\nFor licensing questions, contact: " + contact + "\n" : "")
    );
  }

  function buildRestrictedStub(fields, spec) {
    const contact = (fields.contact || "").trim();
    return (
      buildNoticeHeader(fields, spec) +
      "Restricted / closed access\n\n" +
      "This dataset should not carry an unrestricted open license.\n" +
      "Publish clear access procedures (who may request data, under what terms)\n" +
      "instead of a permissive Creative Commons or software license.\n\n" +
      "Replace this stub with your institution's data-use agreement or access policy.\n" +
      (contact ? "\nFor access requests, contact: " + contact + "\n" : "")
    );
  }

  function buildLinkStub(fields, spec) {
    return (
      buildNoticeHeader(fields, spec) +
      "Full license text was not bundled in this teaching site.\n" +
      "Download the canonical text from:\n" +
      (spec && spec.url ? spec.url : "(unknown)") +
      "\n\n" +
      "Keep the SPDX identifier and URL in your datasheet / metadata.\n"
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
    if (key === "closed") {
      return {
        filename: "LICENSE",
        content: buildRestrictedStub(fields, spec),
        spdx: (spec && spec.spdx) || "LicenseRef-Restricted",
        license_key: key,
        license_label: (spec && spec.label) || key,
        has_full_text: false,
      };
    }

    const rawBody = bodies[key];
    if (!rawBody) {
      return {
        filename: "LICENSE",
        content: buildLinkStub(fields, spec),
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

  function downloadText(filename, text, mime) {
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

  function downloadLicenseFile(fields) {
    syncLicenseField(fields);
    const file = buildLicenseFile(fields);
    downloadText(file.filename, file.content, "text/plain;charset=utf-8");
    return file;
  }

  ToolsLicenses.FALLBACK_SPECS = FALLBACK_SPECS;
  ToolsLicenses.LICENSE_OPTIONS = LICENSE_OPTIONS;
  ToolsLicenses.licenseSpecs = licenseSpecs;
  ToolsLicenses.normalizeLicenseKey = normalizeLicenseKey;
  ToolsLicenses.resolveLicenseKey = resolveLicenseKey;
  ToolsLicenses.displayLicenseName = displayLicenseName;
  ToolsLicenses.syncLicenseField = syncLicenseField;
  ToolsLicenses.buildLicenseFile = buildLicenseFile;
  ToolsLicenses.downloadText = downloadText;
  ToolsLicenses.downloadLicenseFile = downloadLicenseFile;

  DatasheetLib.LICENSE_OPTIONS = LICENSE_OPTIONS;
  DatasheetLib.licenseSpecs = licenseSpecs;
  DatasheetLib.normalizeLicenseKey = normalizeLicenseKey;
  DatasheetLib.resolveLicenseKey = resolveLicenseKey;
  DatasheetLib.displayLicenseName = displayLicenseName;
  DatasheetLib.syncLicenseField = syncLicenseField;
  DatasheetLib.buildLicenseFile = buildLicenseFile;
})(typeof window !== "undefined" ? window : globalThis);
