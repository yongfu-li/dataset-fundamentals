/* Classic script — Datasheet for Datasets and Data Card field definitions (§8.2–8.3). */
(function (global) {
  "use strict";
  const DatasheetLib = global.DatasheetLib || (global.DatasheetLib = {});

  const TEMPLATES = {
    datasheet: {
      label: "Datasheet for Datasets",
      sections: [
        {
          id: "motivation",
          title: "Motivation",
          hint: "Why was the dataset created? Who funded it? What task should it support?",
          placeholder: "e.g. Support fair hiring-screen audits in coursework; compare selection rates across groups.",
        },
        {
          id: "composition",
          title: "Composition",
          hint: "What does the dataset contain? Instances, labels, fields, and population coverage.",
          placeholder: "Describe rows, columns, groups, and time span. Sample-data stats can pre-fill this.",
        },
        {
          id: "collection",
          title: "Collection process",
          hint: "How was data obtained? Sampling, sensors, APIs, crowdsourcing, inclusion/exclusion.",
          placeholder: "e.g. Synthetic applicants generated for teaching; not representative of any employer.",
        },
        {
          id: "preprocessing",
          title: "Preprocessing",
          hint: "Cleaning, deduplication, normalization, or label harmonization applied.",
          placeholder: "e.g. None in raw release; cleaning steps documented separately in Ch.5 workbench.",
        },
        {
          id: "uses",
          title: "Recommended uses",
          hint: "Tasks and contexts where the dataset is appropriate.",
          placeholder: "e.g. Teaching fairness metrics, threshold sweeps, and documentation practice.",
        },
        {
          id: "distribution",
          title: "Distribution & access",
          hint: "Where the dataset is hosted, license, and access restrictions.",
          placeholder: "e.g. Bundled with course materials; CC BY 4.0; no PII.",
        },
        {
          id: "maintenance",
          title: "Maintenance",
          hint: "Who maintains the dataset, update cadence, and version policy.",
          placeholder: "e.g. Course authors; updated per edition; version in filename.",
        },
        {
          id: "limitations",
          title: "Limitations & ethical considerations",
          hint: "Known gaps, biases, privacy risks, and misuse scenarios.",
          placeholder: "e.g. Synthetic only; not for production hiring decisions; small sample size.",
        },
      ],
    },
    datacard: {
      label: "Data Card",
      sections: [
        {
          id: "purpose",
          title: "Purpose",
          hint: "Primary intended use and stakeholders.",
          placeholder: "e.g. Train learners to write dataset documentation before release.",
        },
        {
          id: "provenance",
          title: "Provenance",
          hint: "Source, collection period, and transformations.",
          placeholder: "e.g. Derived from course module examples; collected 2024–2026.",
        },
        {
          id: "composition",
          title: "Composition",
          hint: "Structure, size, and field overview.",
          placeholder: "Auto-filled from sample data when available.",
        },
        {
          id: "collection",
          title: "Collection methodology",
          hint: "How instances were gathered and verified.",
          placeholder: "Describe instruments, sampling frame, and quality checks.",
        },
        {
          id: "uses",
          title: "Recommended uses",
          hint: "Supported downstream tasks.",
          placeholder: "Documentation drills, metadata QA, FAIR checklist practice.",
        },
        {
          id: "factors",
          title: "Factors & sensitive attributes",
          hint: "Demographic or other attributes; whether they should be used as model inputs.",
          placeholder: "e.g. group column for fairness analysis only; not for prediction.",
        },
        {
          id: "limitations",
          title: "Limitations & caveats",
          hint: "Coverage gaps, label noise, and known failure modes.",
          placeholder: "Small toy sample; not statistically representative.",
        },
        {
          id: "ethical",
          title: "Ethical considerations",
          hint: "Consent, privacy, and potential harms from misuse.",
          placeholder: "No real individuals; still practice harm analysis for similar real datasets.",
        },
      ],
    },
  };

  function defaultFields(templateId) {
    const tpl = TEMPLATES[templateId] || TEMPLATES.datasheet;
    const fields = {
      dataset_name: "",
      version: "1.0.0",
      creators: "",
      created_date: "",
      license: "CC BY 4.0",
      license_key: "cc-by-4.0",
      license_other: "",
      contact: "",
    };
    tpl.sections.forEach(function (sec) {
      fields[sec.id] = "";
    });
    return fields;
  }

  function renderMarkdown(templateId, fields, profile, columnDescriptions) {
    const tpl = TEMPLATES[templateId] || TEMPLATES.datasheet;
    const title = fields.dataset_name || "Untitled dataset";
    let md = "# " + title + "\n\n";
    md += "**Template:** " + tpl.label + "  \n";
    if (fields.version) md += "**Version:** " + fields.version + "  \n";
    if (fields.creators) md += "**Creator(s):** " + fields.creators + "  \n";
    if (fields.created_date) md += "**Created:** " + fields.created_date + "  \n";
    if (fields.license) md += "**License:** " + fields.license + "  \n";
    if (fields.contact) md += "**Contact:** " + fields.contact + "  \n";
    md += "\n---\n\n";

    tpl.sections.forEach(function (sec) {
      const body = (fields[sec.id] || "").trim();
      md += "## " + sec.title + "\n\n";
      md += (body || "_Not provided._") + "\n\n";
    });

    if (profile && profile.columns && profile.columns.length) {
      md += "## Data dictionary (from sample)\n\n";
      md += "| Column | Type | Missing % | Unique | Description |\n";
      md += "|--------|------|-----------|--------|-------------|\n";
      profile.columns.forEach(function (col) {
        const desc = (columnDescriptions && columnDescriptions[col.name]) || col.description || "";
        md +=
          "| " +
          col.name +
          " | " +
          col.inferred_type +
          " | " +
          col.missing_pct +
          "% | " +
          col.unique_count +
          " | " +
          (desc || "—") +
          " |\n";
      });
      md += "\n";
    }

    md += "---\n\n";
    md += "_Generated by the Dataset Fundamentals Datasheet / data-card builder (§8.2–8.3)._  \n";
    md += "_Book: Fundamental of Dataset: Collection, Annotation, and Management._\n";
    return md;
  }

  DatasheetLib.TEMPLATES = TEMPLATES;
  DatasheetLib.defaultFields = defaultFields;
  DatasheetLib.renderMarkdown = renderMarkdown;
})(typeof window !== "undefined" ? window : globalThis);
