/* Classic script — §8.2 documentation component checklist. */
(function (global) {
  "use strict";
  const MetadataCheckerLib = global.MetadataCheckerLib || (global.MetadataCheckerLib = {});

  const CATEGORIES = [
    { id: "identity", title: "Identity & discovery", section: "§8.2.2 Metadata" },
    { id: "narrative", title: "Documentation narrative", section: "§8.2.1 / §8.3" },
    { id: "dictionary", title: "Data dictionary", section: "§8.2.2" },
    { id: "provenance", title: "Provenance & lineage", section: "§8.2.4" },
    { id: "codebook", title: "Codebook", section: "§8.2.3" },
    { id: "notes", title: "Annotations & caveats", section: "§8.2.4" },
    { id: "release", title: "Release & maintenance", section: "§8.2 / §8.4" },
  ];

  function docText(card, key) {
    const doc = card.documentation || {};
    const entry = doc[key];
    if (!entry) return "";
    if (typeof entry === "string") return entry.trim();
    if (entry.text) return String(entry.text).trim();
    return "";
  }

  function field(card, path) {
    const parts = path.split(".");
    let cur = card;
    for (let i = 0; i < parts.length; i += 1) {
      if (!cur || typeof cur !== "object") return "";
      cur = cur[parts[i]];
    }
    if (cur == null) return "";
    return String(cur).trim();
  }

  function hasText(value, minLen) {
    const t = String(value || "").trim();
    return t.length >= (minLen || 8);
  }

  function dictionary(card) {
    const sd = card.sample_data || {};
    return sd.data_dictionary || sd.profile && sd.profile.columns || [];
  }

  const CHECKS = [
    {
      id: "name",
      category: "identity",
      label: "Dataset name",
      hint: "Add a clear, unique dataset name so releases are findable (§8.2.2).",
      weight: 2,
      test: function (c) {
        return hasText(field(c, "dataset.name"), 3);
      },
    },
    {
      id: "creators",
      category: "identity",
      label: "Creator(s)",
      hint: "Record who created or collected the dataset for accountability (§8.2.2).",
      weight: 2,
      test: function (c) {
        return hasText(field(c, "dataset.creators"), 3);
      },
    },
    {
      id: "created_date",
      category: "identity",
      label: "Creation date",
      hint: "Add when the dataset was created or first collected (§8.2.2).",
      weight: 1,
      test: function (c) {
        return hasText(field(c, "dataset.created_date"), 4);
      },
    },
    {
      id: "version",
      category: "identity",
      label: "Version identifier",
      hint: "Use semver or dated versions so consumers know which release they have (§8.4).",
      weight: 2,
      test: function (c) {
        const v = field(c, "dataset.version");
        return hasText(v, 1) && v.toLowerCase().indexOf("draft") === -1;
      },
    },
    {
      id: "license",
      category: "identity",
      label: "License",
      hint: "Specify reuse terms (e.g. CC BY 4.0) and ship a LICENSE file (§8.2.2, Ch.13).",
      weight: 2,
      test: function (c) {
        return hasText(field(c, "dataset.license"), 2);
      },
    },
    {
      id: "contact",
      category: "identity",
      label: "Contact",
      hint: "Provide an email or project URL for questions about the dataset (§8.2.2).",
      weight: 1,
      test: function (c) {
        return hasText(field(c, "dataset.contact"), 5);
      },
    },
    {
      id: "motivation",
      category: "narrative",
      label: "Motivation / purpose",
      hint: "Explain why the dataset exists and who it is for (§8.3, Datasheets).",
      weight: 2,
      test: function (c) {
        return hasText(docText(c, "motivation") || docText(c, "purpose"), 20);
      },
    },
    {
      id: "composition",
      category: "narrative",
      label: "Composition",
      hint: "Describe rows, columns, groups, and coverage — not just row counts (§8.2).",
      weight: 2,
      test: function (c) {
        return hasText(docText(c, "composition"), 25);
      },
    },
    {
      id: "collection",
      category: "narrative",
      label: "Collection process",
      hint: "Document how data was obtained: instruments, sampling, inclusion/exclusion (§8.3).",
      weight: 2,
      test: function (c) {
        return hasText(docText(c, "collection") || docText(c, "collection methodology"), 20);
      },
    },
    {
      id: "uses",
      category: "narrative",
      label: "Recommended uses",
      hint: "State supported tasks and discourage misuse (§8.3).",
      weight: 1,
      test: function (c) {
        return hasText(docText(c, "uses"), 15);
      },
    },
    {
      id: "limitations",
      category: "narrative",
      label: "Limitations & ethics",
      hint: "Document gaps, bias risks, and harms from misuse (§8.3, §7).",
      weight: 2,
      test: function (c) {
        return (
          hasText(docText(c, "limitations"), 20) ||
          hasText(docText(c, "ethical"), 20) ||
          hasText(docText(c, "limitations & ethical considerations"), 20)
        );
      },
    },
    {
      id: "dictionary_present",
      category: "dictionary",
      label: "Data dictionary present",
      hint: "Include a table of variables with names and types (§8.2.2).",
      weight: 2,
      test: function (c) {
        return dictionary(c).length > 0;
      },
    },
    {
      id: "dictionary_descriptions",
      category: "dictionary",
      label: "Column descriptions complete",
      hint: "Every variable needs a human-readable description, units, and allowed values where relevant.",
      weight: 3,
      test: function (c) {
        const cols = dictionary(c);
        if (!cols.length) return false;
        const described = cols.filter(function (col) {
          return hasText(col.description, 8);
        }).length;
        return described / cols.length >= 0.8;
      },
    },
    {
      id: "provenance",
      category: "provenance",
      label: "Provenance trail",
      hint: "Track original source and transformations (§8.2.4 data lineage).",
      weight: 2,
      test: function (c) {
        return hasText(c.provenance, 25) || hasText(docText(c, "provenance"), 25);
      },
    },
    {
      id: "codebook",
      category: "codebook",
      label: "Codebook for coded fields",
      hint: "Map categorical codes to meanings when variables use abbreviations (§8.2.3).",
      weight: 1,
      test: function (c) {
        const cols = dictionary(c);
        const hasCategorical = cols.some(function (col) {
          return col.inferred_type === "string" || col.inferred_type === "boolean";
        });
        if (!hasCategorical) return true;
        return hasText(c.codebook, 15);
      },
    },
    {
      id: "annotations",
      category: "notes",
      label: "Annotations / caveats",
      hint: "Record sampling limits, sensor faults, or known quirks (§8.2.4).",
      weight: 1,
      test: function (c) {
        return hasText(c.annotations, 15);
      },
    },
    {
      id: "maintenance",
      category: "release",
      label: "Maintenance / update policy",
      hint: "Document update cadence and who maintains the release (§8.2.2).",
      weight: 1,
      test: function (c) {
        return (
          hasText(c.update_frequency, 8) ||
          hasText(docText(c, "maintenance"), 15) ||
          hasText(docText(c, "distribution"), 15)
        );
      },
    },
    {
      id: "license_file",
      category: "release",
      label: "License file reference",
      hint: "Bundle LICENSE alongside metadata JSON for reproducible releases.",
      weight: 1,
      test: function (c) {
        const ds = c.dataset || {};
        return hasText(ds.license_file, 3) || ds.license_has_full_text === true;
      },
    },
  ];

  MetadataCheckerLib.CATEGORIES = CATEGORIES;
  MetadataCheckerLib.CHECKS = CHECKS;
  MetadataCheckerLib.docText = docText;
  MetadataCheckerLib.dictionary = dictionary;
})(typeof window !== "undefined" ? window : globalThis);
