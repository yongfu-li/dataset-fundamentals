/* PII detectors: column dictionary + regex / format checks (window.PiiLib). */
(function (global) {
  "use strict";
  const PiiLib = global.PiiLib || (global.PiiLib = {});

  const SENSITIVE_HEADERS = [
    { re: /e[-_]?mail|mail_?address/i, role: "email" },
    { re: /phone|mobile|cell|tel\b|fax/i, role: "phone" },
    { re: /full_?name|(^|_)name$|first_?name|last_?name|surname|given_?name/i, role: "name" },
    { re: /ssn|national_?id|passport|driver|license|nin\b|sin\b/i, role: "id" },
    { re: /credit_?card|card_?number|pan\b|iban|account_?(number|no)/i, role: "financial" },
    { re: /\bip\b|ip_?address/i, role: "ip" },
    { re: /address|street|zip|postal|postcode/i, role: "address" },
    { re: /dob|birth|birthday/i, role: "dob" },
  ];

  const DETECTORS = [
    {
      type: "email",
      label: "Email",
      re: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
    },
    {
      type: "phone",
      label: "Phone",
      // Loose international / US-style phones
      re: /(?:\+?\d{1,3}[\s.-]?)?(?:\(?\d{2,4}\)?[\s.-]?)\d{3,4}[\s.-]?\d{3,4}\b/g,
      validate: function (m) {
        const digits = m.replace(/\D/g, "");
        return digits.length >= 10 && digits.length <= 15;
      },
    },
    {
      type: "ssn",
      label: "SSN-like ID",
      re: /\b\d{3}-\d{2}-\d{4}\b/g,
    },
    {
      type: "ip",
      label: "IPv4",
      re: /\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\b/g,
    },
    {
      type: "card",
      label: "Card-like number",
      re: /\b(?:\d[ -]*?){13,19}\b/g,
      validate: function (m) {
        const digits = m.replace(/\D/g, "");
        if (digits.length < 13 || digits.length > 19) return false;
        return luhnOk(digits);
      },
    },
  ];

  function luhnOk(digits) {
    let sum = 0;
    let alt = false;
    for (let i = digits.length - 1; i >= 0; i -= 1) {
      let n = Number(digits.charAt(i));
      if (alt) {
        n *= 2;
        if (n > 9) n -= 9;
      }
      sum += n;
      alt = !alt;
    }
    return sum % 10 === 0;
  }

  function inferColumnRoles(columns) {
    const roles = {};
    (columns || []).forEach(function (col) {
      let role = "other";
      for (let i = 0; i < SENSITIVE_HEADERS.length; i += 1) {
        if (SENSITIVE_HEADERS[i].re.test(col)) {
          role = SENSITIVE_HEADERS[i].role;
          break;
        }
      }
      roles[col] = role;
    });
    return roles;
  }

  function scanText(text, extras) {
    const findings = [];
    const seen = new Set();
    const src = String(text == null ? "" : text);
    DETECTORS.forEach(function (det) {
      const re = new RegExp(det.re.source, det.re.flags);
      let m;
      while ((m = re.exec(src)) !== null) {
        const value = m[0];
        if (det.validate && !det.validate(value)) continue;
        // Avoid tiny phone false positives from ticket ids like T01 when alone
        if (det.type === "phone" && value.replace(/\D/g, "").length < 10) continue;
        const key = det.type + "|" + m.index + "|" + value;
        if (seen.has(key)) continue;
        seen.add(key);
        findings.push({
          type: det.type,
          label: det.label,
          value: value,
          start: m.index,
          end: m.index + value.length,
          source: (extras && extras.source) || "text",
          column: extras && extras.column,
          rowIndex: extras && extras.rowIndex,
        });
      }
    });
    return findings;
  }

  function scanRows(rows, columns, columnRoles) {
    const roles = columnRoles || {};
    const findings = [];
    (rows || []).forEach(function (row, ri) {
      (columns || []).forEach(function (col) {
        const role = roles[col] || "other";
        const raw = row[col];
        if (raw == null || raw === "") return;
        const text = String(raw);
        // Whole-cell role hits
        if (role === "email" || role === "phone" || role === "name" || role === "id" || role === "financial" || role === "ip" || role === "address" || role === "dob") {
          findings.push({
            type: role === "financial" ? "card" : role === "id" ? "ssn" : role,
            label: "Column role: " + role,
            value: text,
            start: 0,
            end: text.length,
            source: "column-role",
            column: col,
            rowIndex: ri,
            wholeCell: true,
          });
        }
        // Regex inside cell (catches free-text notes)
        const cellHits = scanText(text, { column: col, rowIndex: ri, source: "regex" });
        cellHits.forEach(function (h) {
          // Skip duplicate whole-cell if regex finds same
          if (h.wholeCell) return;
          findings.push(h);
        });
      });
    });
    return findings;
  }

  function summarizeFindings(findings) {
    const byType = {};
    (findings || []).forEach(function (f) {
      byType[f.type] = (byType[f.type] || 0) + 1;
    });
    return { total: (findings || []).length, byType: byType };
  }

  PiiLib.SENSITIVE_HEADERS = SENSITIVE_HEADERS;
  PiiLib.DETECTORS = DETECTORS;
  PiiLib.luhnOk = luhnOk;
  PiiLib.inferColumnRoles = inferColumnRoles;
  PiiLib.scanText = scanText;
  PiiLib.scanRows = scanRows;
  PiiLib.summarizeFindings = summarizeFindings;
})(typeof window !== "undefined" ? window : globalThis);
