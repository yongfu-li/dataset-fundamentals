/* Classic script — regex and rule-based pre-labeling engine for text annotation.
 * window.TextAnnRegexPrelabel
 */
(function (global) {
  "use strict";

  const Prelabel = (global.TextAnnRegexPrelabel = global.TextAnnRegexPrelabel || {});

  // High-precision regex definitions
  const PATTERNS = {
    per: [
      /\b(?:Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.|Sir)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\b/g,
      /\b([A-Z][a-z]+\s+[A-Z][a-z]+)\b(?=\s+(?:said|noted|argued|claimed|founded|joined|resigned|stated))/g,
    ],
    org: [
      /\b([A-Z][a-zA-Z0-9]*(?:\s+[A-Z][a-zA-Z0-9]*)*\s+(?:Inc\.|Corp\.|Corporation|LLC|Ltd\.|Group|Labs|Laboratories|Technologies|University|Institute|Foundation|Bank))\b/g,
      /\b(Google|Microsoft|Apple|Amazon|Meta|NVIDIA|OpenAI|DeepMind|Springer Nature|Hugging Face|IBM|Intel|Salesforce|Oracle|Cisco)\b/g,
    ],
    loc: [
      /\b(New York|San Francisco|London|Paris|Berlin|Tokyo|Beijing|Singapore|Sydney|Toronto|Cupertino|Silicon Valley|California|Washington|Europe|Asia|North America|United States|Germany|United Kingdom|France|Japan|China)\b/g,
    ],
    misc: [
      /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g, // Emails
      /(?:\$|€|£|¥)\s*\d+(?:,\d{3})*(?:\.\d+)?|\b\d+(?:,\d{3})*(?:\.\d+)?\s*(?:USD|EUR|GBP|dollars)\b/g, // Monetary amounts
      /\b\d{4}-\d{2}-\d{2}\b|\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2}(?:,\s+\d{4})?\b/g, // Dates
    ],
  };

  /**
   * Scans text and returns non-overlapping span predictions.
   * @param {string} text
   * @param {string[]} enabledLabels - e.g. ["per", "org", "loc", "misc"]
   * @param {string} customPattern - optional regex string
   * @param {string} customLabel - optional label for custom pattern
   * @returns {Array<{start: number, end: number, label: string, surface: string}>}
   */
  Prelabel.findMatches = function (text, enabledLabels, customPattern, customLabel) {
    if (!text || typeof text !== "string") return [];
    enabledLabels = enabledLabels || ["per", "org", "loc", "misc"];

    const candidates = [];

    // Built-in label patterns
    enabledLabels.forEach(function (label) {
      const key = label.toLowerCase();
      const regexList = PATTERNS[key] || [];
      regexList.forEach(function (rx) {
        // Clone regex with sticky/global flags reset
        const r = new RegExp(rx.source, rx.flags);
        let match;
        while ((match = r.exec(text)) !== null) {
          // If capture group 1 exists, use it, else full match
          const targetStr = match[1] || match[0];
          const offset = match[1] ? match[0].indexOf(match[1]) : 0;
          const start = match.index + offset;
          const end = start + targetStr.length;
          candidates.push({
            start: start,
            end: end,
            label: label,
            surface: targetStr,
          });
        }
      });
    });

    // Custom regex pattern
    if (customPattern && customLabel) {
      try {
        const customRx = new RegExp(customPattern, "g");
        let match;
        while ((match = customRx.exec(text)) !== null) {
          candidates.push({
            start: match.index,
            end: match.index + match[0].length,
            label: customLabel,
            surface: match[0],
          });
        }
      } catch (err) {
        console.warn("Invalid custom regex pattern:", err);
      }
    }

    // Sort candidates by start ascending, then length descending
    candidates.sort(function (a, b) {
      if (a.start !== b.start) return a.start - b.start;
      return (b.end - b.start) - (a.end - a.start);
    });

    // Remove overlapping spans (greedy longest match)
    const nonOverlapping = [];
    let lastEnd = -1;

    candidates.forEach(function (c) {
      if (c.start >= lastEnd) {
        nonOverlapping.push(c);
        lastEnd = c.end;
      }
    });

    return nonOverlapping;
  };

  /**
   * Automatically pre-labels all items in a session.
   * Merges new predictions with existing annotations without overwriting manual spans.
   */
  Prelabel.autoLabelSession = function (session, currentAnnotations, enabledLabels, customPattern, customLabel) {
    const items = session.items || [];
    const updatedAnnotations = Object.assign({}, currentAnnotations);
    let totalAdded = 0;

    items.forEach(function (item) {
      const existing = updatedAnnotations[item.id] || { spans: [] };
      const existingSpans = existing.spans || [];

      const predictions = Prelabel.findMatches(item.text, enabledLabels, customPattern, customLabel);

      // Filter out predictions that overlap with any existing manual span
      const validNewSpans = predictions.filter(function (pred) {
        return !existingSpans.some(function (manual) {
          return (pred.start < manual.end && pred.end > manual.start);
        });
      });

      if (validNewSpans.length > 0) {
        totalAdded += validNewSpans.length;
        const merged = existingSpans.concat(validNewSpans);
        merged.sort(function (a, b) { return a.start - b.start; });
        updatedAnnotations[item.id] = { spans: merged };
      }
    });

    return {
      annotations: updatedAnnotations,
      totalAdded: totalAdded,
    };
  };

})(typeof window !== "undefined" ? window : globalThis);
