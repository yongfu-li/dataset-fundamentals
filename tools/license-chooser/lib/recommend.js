/* License recommendation engine from use-case answers (Ch.13 §13.6).
 * Covers Creative Commons, Open Data Commons, companion OSS, and restricted access. */
(function (global) {
  "use strict";
  const Lib = global.LicenseChooserLib || (global.LicenseChooserLib = {});

  const QUESTIONS = [
    {
      id: "sensitive",
      prompt: "Does the release include sensitive personal, health, or community-controlled data?",
      help: "Clinical records, identifiable people, or Indigenous / community data usually need restricted access—not an open license (eg:13.26, eg:13.28).",
      options: [
        { value: "yes", label: "Yes — sensitive or community-controlled" },
        { value: "no", label: "No — non-sensitive research / public data" },
      ],
    },
    {
      id: "artifact",
      prompt: "What are you primarily licensing?",
      help: "Creative Commons / Open Data Commons fit datasets; MIT / Apache / BSD / GPL fit companion code.",
      options: [
        { value: "data", label: "A dataset (tables, images, text, audio, maps, …)" },
        { value: "code", label: "Code or tooling that ships with the data" },
      ],
    },
    {
      id: "data_family",
      prompt: "Which open-data license family fits this artifact best?",
      help: "Creative Commons is common for media and research tables; Open Data Commons is designed for databases.",
      options: [
        { value: "cc", label: "Creative Commons (works, media, general research data)" },
        { value: "odc", label: "Open Data Commons (databases / structured dumps)" },
      ],
    },
    {
      id: "commercial",
      prompt: "May others use this for commercial purposes?",
      help: "Non-commercial (NC) terms block many industry reuses; use them only when policy requires it.",
      options: [
        { value: "yes", label: "Yes — commercial reuse is allowed" },
        { value: "no", label: "No — research / education only" },
      ],
    },
    {
      id: "attribution",
      prompt: "Must reusers credit the creators?",
      help: "CC BY / ODC-By require attribution; CC0 / PDDL dedicate to the public domain.",
      options: [
        { value: "yes", label: "Yes — require attribution" },
        { value: "no", label: "No — public-domain dedication is fine" },
      ],
    },
    {
      id: "sharealike",
      prompt: "Must derivatives stay under the same license (ShareAlike / copyleft-style)?",
      help: "ShareAlike (CC BY-SA, ODbL) keeps remixes in the commons; it can deter some productization.",
      options: [
        { value: "yes", label: "Yes — same license on derivatives" },
        { value: "no", label: "No — reusers may choose another license" },
      ],
    },
    {
      id: "copyleft",
      prompt: "For code: do you require strong copyleft (GPL-style) on derivatives?",
      help: "GPL-3.0 forces reciprocal sharing of derivative software; permissive licenses (MIT/Apache/BSD) do not.",
      options: [
        { value: "yes", label: "Yes — prefer GPL-3.0 copyleft" },
        { value: "no", label: "No — permissive license is enough" },
        { value: "na", label: "Not applicable (dataset, not code)" },
      ],
    },
    {
      id: "patents",
      prompt: "For permissive code: do you want an explicit patent grant?",
      help: "Apache-2.0 includes a patent license; MIT and BSD-3-Clause are shorter without that grant.",
      options: [
        { value: "yes", label: "Yes — prefer Apache-2.0" },
        { value: "no", label: "No — short permissive (MIT; BSD-3 as alternate)" },
        { value: "na", label: "Not applicable" },
      ],
    },
  ];

  const PLAIN = {
    closed: {
      summary: "Use a restricted / closed access policy instead of a permissive open license.",
      why: [
        "Sensitive personal, health, or community-controlled data should not carry unrestricted open licenses (§13.6).",
        "Publish who may request access and under what agreement; decide license together with the privacy review.",
      ],
      permissions: ["Access by approved requesters only", "Terms defined by a data-use agreement"],
      limitations: ["Not openly redistributable", "Not a Creative Commons / ODC open license"],
    },
    "cc0-1.0": {
      summary: "CC0 1.0 — public domain dedication; maximum reuse, no attribution required.",
      why: [
        "You waived attribution and allowed any purpose, including commercial use.",
        "Common for government and public scientific releases when policy allows dedication.",
      ],
      permissions: ["Any purpose, including commercial", "No attribution required by the license"],
      limitations: ["Harder to track reuse", "Not suitable for sensitive data"],
    },
    "cc-by-4.0": {
      summary: "CC BY 4.0 — the most common open data license; attribution required.",
      why: [
        "Commercial reuse is allowed, attribution is required, and ShareAlike is not required.",
        "§13.6 notes CC BY as the most popular open license for datasets.",
      ],
      permissions: ["Commercial and non-commercial reuse", "Adapt and redistribute", "Require credit"],
      limitations: ["No warranty", "Attribution must be retained"],
    },
    "cc-by-sa-4.0": {
      summary: "CC BY-SA 4.0 — attribution + ShareAlike on derivatives.",
      why: [
        "Commercial use is allowed and derivatives must stay under the same terms.",
        "Fits collaborative community datasets where remixing is encouraged (§13.6).",
      ],
      permissions: ["Commercial and non-commercial reuse", "Require credit", "Derivatives under CC BY-SA"],
      limitations: ["ShareAlike can complicate some product licenses", "Full text: Creative Commons"],
    },
    "cc-by-nc-4.0": {
      summary: "CC BY-NC 4.0 — attribution required; non-commercial use only.",
      why: [
        "You disallowed commercial reuse while still wanting standard open sharing for research/education.",
      ],
      permissions: ["Share and adapt for non-commercial purposes", "Require credit"],
      limitations: ["No commercial use", "Full legal text: Creative Commons"],
    },
    "cc-by-nc-sa-4.0": {
      summary: "CC BY-NC-SA 4.0 — non-commercial + attribution + ShareAlike.",
      why: [
        "Education/research sharing with credit, no commercial use, and same-license derivatives.",
      ],
      permissions: ["Non-commercial share and adapt", "Require credit", "Derivatives under CC BY-NC-SA"],
      limitations: ["No commercial use", "ShareAlike + NC is a strict combination"],
    },
    "odc-by-1.0": {
      summary: "ODC-By 1.0 — Open Data Commons Attribution (database-oriented).",
      why: [
        "You chose the Open Data Commons family with attribution and without ShareAlike.",
      ],
      permissions: ["Share and reuse with attribution", "Designed for databases"],
      limitations: ["Full text: Open Data Commons", "Less familiar than CC BY in some venues"],
    },
    "odc-odbl-1.0": {
      summary: "ODbL 1.0 — Open Database License (attribution + ShareAlike for databases).",
      why: [
        "Database-oriented ShareAlike: derivatives of the database stay under ODbL.",
        "Familiar from collaborative mapping-style database releases.",
      ],
      permissions: ["Use and share the database with attribution", "ShareAlike on database derivatives"],
      limitations: ["Produced works from the DB have separate rules", "Full text: Open Data Commons"],
    },
    "pddl-1.0": {
      summary: "PDDL 1.0 — Public Domain Dedication and License (ODC family).",
      why: [
        "Open Data Commons public-domain path when you waive attribution for a database.",
      ],
      permissions: ["Any purpose", "No attribution required by the dedication"],
      limitations: ["Confirm institutional authority to dedicate", "Full text: Open Data Commons"],
    },
    mit: {
      summary: "MIT — short permissive software license.",
      why: [
        "Companion code, commercial OK, no copyleft, no explicit patent grant needed.",
      ],
      permissions: ["Use, modify, redistribute commercially", "Include copyright notice"],
      limitations: ["No patent grant language", "No warranty"],
    },
    "bsd-3-clause": {
      summary: "BSD-3-Clause — permissive software license with a non-endorsement clause.",
      why: [
        "Similar to MIT; often chosen when an institution already standardizes on BSD.",
      ],
      permissions: ["Use, modify, redistribute commercially", "Retain copyright and disclaimer"],
      limitations: ["No patent grant language", "Non-endorsement clause"],
    },
    "apache-2.0": {
      summary: "Apache-2.0 — permissive software license with an explicit patent grant.",
      why: [
        "Companion code where you want patent grant language typical of larger projects.",
      ],
      permissions: ["Use, modify, redistribute commercially", "Patent license from contributors"],
      limitations: ["NOTICE file obligations when applicable", "Longer text than MIT"],
    },
    "gpl-3.0": {
      summary: "GPL-3.0 — strong copyleft for software.",
      why: [
        "You require reciprocal sharing of derivative software under GPL terms.",
      ],
      permissions: ["Use and modify", "Redistribute under GPL-3.0"],
      limitations: ["Copyleft obligations on derivatives", "Often a poor fit for proprietary product stacks"],
    },
  };

  function visibleQuestions(answers) {
    return QUESTIONS.filter(function (q) {
      if (answers.sensitive === "yes" && q.id !== "sensitive") return false;
      if (q.id === "artifact") return answers.sensitive === "no";
      if (q.id === "data_family") return answers.sensitive === "no" && answers.artifact === "data";
      if (q.id === "commercial" || q.id === "attribution" || q.id === "sharealike") {
        return answers.sensitive === "no" && !!answers.artifact;
      }
      if (q.id === "copyleft") {
        return answers.sensitive === "no" && answers.artifact === "code";
      }
      if (q.id === "patents") {
        return answers.sensitive === "no" && answers.artifact === "code" && answers.copyleft === "no";
      }
      return true;
    });
  }

  function isComplete(answers) {
    const vis = visibleQuestions(answers);
    for (let i = 0; i < vis.length; i += 1) {
      if (!answers[vis[i].id]) return false;
    }
    return !!answers.sensitive;
  }

  function recommend(answers) {
    if (answers.sensitive === "yes") {
      return finish("closed", answers, "Sensitive / community-controlled gate");
    }
    if (answers.artifact === "code") {
      if (answers.copyleft === "yes") return finish("gpl-3.0", answers, "Code + strong copyleft");
      if (answers.patents === "yes") return finish("apache-2.0", answers, "Code + patent grant");
      return finish("mit", answers, "Code + short permissive", {
        alternate_key: "bsd-3-clause",
        alternate_note: "If your institution standardizes on BSD, BSD-3-Clause is a close permissive alternate to MIT.",
      });
    }
    // Dataset path
    const family = answers.data_family || "cc";
    if (family === "odc") {
      if (answers.attribution === "no") return finish("pddl-1.0", answers, "ODC public-domain dedication");
      if (answers.sharealike === "yes") {
        if (answers.commercial === "no") {
          return finish("odc-odbl-1.0", answers, "ODC ShareAlike (note: ODbL is not NC)", {
            alternate_key: "cc-by-nc-sa-4.0",
            alternate_note:
              "ODbL does not offer a standard NonCommercial variant. For NC + ShareAlike on general works, use CC BY-NC-SA instead.",
          });
        }
        return finish("odc-odbl-1.0", answers, "ODC attribution + ShareAlike");
      }
      if (answers.commercial === "no") {
        return finish("odc-by-1.0", answers, "ODC attribution (NC via policy)", {
          alternate_key: "cc-by-nc-4.0",
          alternate_note:
            "ODC-By is not NonCommercial. For a standard NC open license, prefer CC BY-NC 4.0.",
        });
      }
      return finish("odc-by-1.0", answers, "ODC attribution");
    }
    // Creative Commons family
    if (answers.commercial === "no" && answers.sharealike === "yes") {
      return finish("cc-by-nc-sa-4.0", answers, "CC non-commercial + ShareAlike");
    }
    if (answers.commercial === "no") {
      return finish("cc-by-nc-4.0", answers, "CC non-commercial");
    }
    if (answers.attribution === "no") {
      return finish("cc0-1.0", answers, "CC public-domain dedication");
    }
    if (answers.sharealike === "yes") {
      return finish("cc-by-sa-4.0", answers, "CC attribution + ShareAlike");
    }
    return finish("cc-by-4.0", answers, "CC attribution (default open data)", {
      alternate_key: "odc-by-1.0",
      alternate_note: "For a database-oriented attribution license, consider ODC-By 1.0 instead of CC BY.",
    });
  }

  function finish(key, answers, rule, extra) {
    const Lic = global.ToolsLicenses;
    const specs = Lic && Lic.licenseSpecs ? Lic.licenseSpecs() : {};
    const spec = specs[key] || { short_label: key, spdx: key, url: "" };
    const plain = PLAIN[key] || {
      summary: spec.short_label || key,
      why: [],
      permissions: [],
      limitations: [],
    };
    const result = {
      license_key: key,
      spdx: spec.spdx || key,
      label: spec.label || plain.summary,
      short_label: spec.short_label || key,
      url: spec.url || "",
      summary: plain.summary,
      why: plain.why.slice(),
      permissions: plain.permissions.slice(),
      limitations: plain.limitations.slice(),
      rule: rule,
      answers: Object.assign({}, answers),
      book_anchors: ["§13.6 Licensing and Ethical Considerations"],
    };
    if (extra) {
      result.alternate_key = extra.alternate_key;
      result.alternate_note = extra.alternate_note;
      if (extra.alternate_key && specs[extra.alternate_key]) {
        result.alternate_label = specs[extra.alternate_key].short_label;
        result.alternate_url = specs[extra.alternate_key].url;
      }
    }
    if (Lic && Lic.buildLicenseFile) {
      const file = Lic.buildLicenseFile({
        license_key: key,
        dataset_name: answers.dataset_name || "Dataset",
        creators: answers.creators || "Dataset authors",
        contact: answers.contact || "",
        version: answers.version || "",
        created_date: answers.created_date || "",
        license_source: "license chooser",
      });
      result.has_full_text = !!file.has_full_text;
      result.license_filename = file.filename;
    } else {
      result.has_full_text = false;
      result.license_filename = "LICENSE";
    }
    return result;
  }

  function recommendationMarkdown(result, identity) {
    const id = identity || {};
    let md = "## Recommendation\n\n";
    md += "- **License:** " + result.short_label + "\n";
    md += "- **SPDX:** `" + result.spdx + "`\n";
    if (result.url) md += "- **URL:** " + result.url + "\n";
    md += "- **Rule path:** " + result.rule + "\n\n";
    md += result.summary + "\n\n";
    if (id.dataset_name) md += "**Dataset:** " + id.dataset_name + "\n\n";
    if (id.creators) md += "**Creators:** " + id.creators + "\n\n";
    md += "## Why this fits\n\n";
    result.why.forEach(function (line) {
      md += "- " + line + "\n";
    });
    md += "\n## Permissions (plain language)\n\n";
    result.permissions.forEach(function (line) {
      md += "- " + line + "\n";
    });
    md += "\n## Limitations\n\n";
    result.limitations.forEach(function (line) {
      md += "- " + line + "\n";
    });
    if (result.alternate_note) {
      md += "\n## Alternate\n\n" + result.alternate_note + "\n";
      if (result.alternate_label) md += "- Alternate: **" + result.alternate_label + "**\n";
      if (result.alternate_url) md += "- URL: " + result.alternate_url + "\n";
    }
    md += "\n## Your answers\n\n";
    Object.keys(result.answers).forEach(function (k) {
      if (
        k === "dataset_name" ||
        k === "creators" ||
        k === "contact" ||
        k === "version" ||
        k === "created_date" ||
        k === "modality"
      ) {
        return;
      }
      md += "- **" + k + ":** " + result.answers[k] + "\n";
    });
    md += "\n## Next steps\n\n";
    md += "1. Export `LICENSE` from this tool (or the datasheet builder) when full text is available.\n";
    md += "2. Record the SPDX id in your datasheet / metadata.\n";
    md += "3. For restricted data, publish an access procedure instead of an open license.\n";
    return md;
  }

  function recommendationJson(result, identity) {
    return {
      tool: "License chooser",
      generated: new Date().toISOString(),
      book_anchors: result.book_anchors,
      identity: identity || {},
      recommendation: {
        license_key: result.license_key,
        spdx: result.spdx,
        label: result.label,
        short_label: result.short_label,
        url: result.url,
        rule: result.rule,
        summary: result.summary,
        why: result.why,
        permissions: result.permissions,
        limitations: result.limitations,
        alternate_key: result.alternate_key || null,
        alternate_note: result.alternate_note || null,
        has_full_text: result.has_full_text,
      },
      answers: result.answers,
    };
  }

  /** Diverse modality scenarios covering CC, ODC, OSS, and restricted paths. */
  const SCENARIOS = [
    {
      id: "gov-open-stats",
      name: "Government open statistics",
      group: "Open data · CC0",
      modality: "tabular",
      blurb: "Public census aggregates; dedicate to public domain.",
      answers: {
        sensitive: "no",
        artifact: "data",
        data_family: "cc",
        commercial: "yes",
        attribution: "no",
        sharealike: "no",
        dataset_name: "City open census tables",
        creators: "Municipal statistics office",
      },
      expect_key: "cc0-1.0",
    },
    {
      id: "open-tabular",
      name: "Campus weather sensors",
      group: "Open data · CC BY",
      modality: "tabular / IoT",
      blurb: "Non-sensitive sensor table; commercial OK; want credit.",
      answers: {
        sensitive: "no",
        artifact: "data",
        data_family: "cc",
        commercial: "yes",
        attribution: "yes",
        sharealike: "no",
        dataset_name: "Campus weather sensors",
        creators: "Open Data Lab",
      },
      expect_key: "cc-by-4.0",
    },
    {
      id: "geojson-maps",
      name: "Campus building GeoJSON",
      group: "Open data · CC BY",
      modality: "geospatial",
      blurb: "Building footprints as GeoJSON; attribution, commercial OK.",
      answers: {
        sensitive: "no",
        artifact: "data",
        data_family: "cc",
        commercial: "yes",
        attribution: "yes",
        sharealike: "no",
        dataset_name: "Campus buildings GeoJSON",
        creators: "Facilities GIS team",
      },
      expect_key: "cc-by-4.0",
    },
    {
      id: "speech-audio",
      name: "Read-speech audio clips",
      group: "Open data · CC BY",
      modality: "audio",
      blurb: "Consented lab speech; share with attribution.",
      answers: {
        sensitive: "no",
        artifact: "data",
        data_family: "cc",
        commercial: "yes",
        attribution: "yes",
        sharealike: "no",
        dataset_name: "Lab read-speech corpus",
        creators: "Speech research group",
      },
      expect_key: "cc-by-4.0",
    },
    {
      id: "collab-wiki",
      name: "Community wiki image bank",
      group: "Open data · CC BY-SA",
      modality: "images / collaborative",
      blurb: "Volunteer-edited image bank; ShareAlike remixes.",
      answers: {
        sensitive: "no",
        artifact: "data",
        data_family: "cc",
        commercial: "yes",
        attribution: "yes",
        sharealike: "yes",
        dataset_name: "Community landmark photos",
        creators: "Volunteer editors",
      },
      expect_key: "cc-by-sa-4.0",
    },
    {
      id: "edu-nc",
      name: "Classroom object photos",
      group: "Open data · CC BY-NC",
      modality: "images",
      blurb: "Teaching images; block commercial reuse.",
      answers: {
        sensitive: "no",
        artifact: "data",
        data_family: "cc",
        commercial: "no",
        attribution: "yes",
        sharealike: "no",
        dataset_name: "Classroom object photos",
        creators: "Teaching media team",
      },
      expect_key: "cc-by-nc-4.0",
    },
    {
      id: "nlp-nc-sa",
      name: "Course essay corpus (NC+SA)",
      group: "Open data · CC BY-NC-SA",
      modality: "text / NLP",
      blurb: "De-identified student essays; education only + ShareAlike.",
      answers: {
        sensitive: "no",
        artifact: "data",
        data_family: "cc",
        commercial: "no",
        attribution: "yes",
        sharealike: "yes",
        dataset_name: "De-identified course essays",
        creators: "Writing program",
      },
      expect_key: "cc-by-nc-sa-4.0",
    },
    {
      id: "sql-warehouse",
      name: "Retail events database dump",
      group: "Open data · ODC-By",
      modality: "database / SQL",
      blurb: "Synthetic retail events DB; ODC attribution.",
      answers: {
        sensitive: "no",
        artifact: "data",
        data_family: "odc",
        commercial: "yes",
        attribution: "yes",
        sharealike: "no",
        dataset_name: "Synthetic retail events DB",
        creators: "Analytics teaching lab",
      },
      expect_key: "odc-by-1.0",
    },
    {
      id: "odbl-maps",
      name: "Collaborative street database",
      group: "Open data · ODbL",
      modality: "database / maps",
      blurb: "Crowd-edited street network; database ShareAlike.",
      answers: {
        sensitive: "no",
        artifact: "data",
        data_family: "odc",
        commercial: "yes",
        attribution: "yes",
        sharealike: "yes",
        dataset_name: "Community street network DB",
        creators: "Local mapping collective",
      },
      expect_key: "odc-odbl-1.0",
    },
    {
      id: "pddl-reference",
      name: "Reference code tables (PDDL)",
      group: "Open data · PDDL",
      modality: "database",
      blurb: "ISO-style lookup tables; ODC public-domain path.",
      answers: {
        sensitive: "no",
        artifact: "data",
        data_family: "odc",
        commercial: "yes",
        attribution: "no",
        sharealike: "no",
        dataset_name: "Country code reference tables",
        creators: "Standards working group",
      },
      expect_key: "pddl-1.0",
    },
    {
      id: "health-restricted",
      name: "Clinical trial extracts",
      group: "Restricted",
      modality: "health / tabular",
      blurb: "Identifiable health fields — not an open license (eg:13.26).",
      answers: {
        sensitive: "yes",
        dataset_name: "Trial outcomes (restricted extract)",
        creators: "Hospital research office",
      },
      expect_key: "closed",
    },
    {
      id: "indigenous-community",
      name: "Indigenous ecological observations",
      group: "Restricted",
      modality: "community-controlled",
      blurb: "Community authority over sharing (eg:13.28).",
      answers: {
        sensitive: "yes",
        dataset_name: "Community ecological observations",
        creators: "Partner Indigenous stewards",
      },
      expect_key: "closed",
    },
    {
      id: "code-tooling",
      name: "Companion ETL scripts",
      group: "Companion code · MIT",
      modality: "code",
      blurb: "Small Python ETL helpers; short permissive license.",
      answers: {
        sensitive: "no",
        artifact: "code",
        commercial: "yes",
        attribution: "yes",
        sharealike: "no",
        copyleft: "no",
        patents: "no",
        dataset_name: "etl-helpers",
        creators: "Data eng team",
      },
      expect_key: "mit",
    },
    {
      id: "code-apache",
      name: "Training pipeline toolkit",
      group: "Companion code · Apache",
      modality: "code",
      blurb: "Larger ML pipeline library; want patent grant.",
      answers: {
        sensitive: "no",
        artifact: "code",
        commercial: "yes",
        attribution: "yes",
        sharealike: "no",
        copyleft: "no",
        patents: "yes",
        dataset_name: "train-pipeline",
        creators: "ML platform team",
      },
      expect_key: "apache-2.0",
    },
    {
      id: "code-gpl",
      name: "Copyleft preprocessing CLI",
      group: "Companion code · GPL",
      modality: "code",
      blurb: "CLI that must stay free/open under GPL-3.0.",
      answers: {
        sensitive: "no",
        artifact: "code",
        commercial: "yes",
        attribution: "yes",
        sharealike: "yes",
        copyleft: "yes",
        patents: "na",
        dataset_name: "prep-cli",
        creators: "Open tooling guild",
      },
      expect_key: "gpl-3.0",
    },
  ];

  Lib.QUESTIONS = QUESTIONS;
  Lib.SCENARIOS = SCENARIOS;
  Lib.PLAIN = PLAIN;
  Lib.visibleQuestions = visibleQuestions;
  Lib.isComplete = isComplete;
  Lib.recommend = recommend;
  Lib.recommendationMarkdown = recommendationMarkdown;
  Lib.recommendationJson = recommendationJson;
})(typeof window !== "undefined" ? window : globalThis);
