/* Classic script — span helpers for NER mode (window.TextAnnLib). */
(function (global) {
  "use strict";
  const TextAnnLib = global.TextAnnLib || (global.TextAnnLib = {});

  let spanCounter = 0;

  function createSpan(start, end, label) {
    spanCounter += 1;
    return {
      id: "sp" + Date.now().toString(36) + "_" + spanCounter,
      start: start,
      end: end,
      label: label,
    };
  }

  /** Normalize selection offsets so start < end. */
  function normalizeRange(a, b) {
    return a <= b ? { start: a, end: b } : { start: b, end: a };
  }

  /** True if [a0,a1) overlaps [b0,b1). */
  function overlaps(a0, a1, b0, b1) {
    return a0 < b1 && b0 < a1;
  }

  /**
   * Add a span if non-empty and non-overlapping; returns {ok, spans, error}.
   * @param {Array} spans
   * @param {number} start
   * @param {number} end
   * @param {string} label
   * @param {string} text
   */
  function tryAddSpan(spans, start, end, label, text) {
    const r = normalizeRange(start, end);
    if (r.start === r.end) {
      return { ok: false, spans: spans, error: "Select at least one character." };
    }
    if (r.start < 0 || r.end > text.length) {
      return { ok: false, spans: spans, error: "Selection is outside the text." };
    }
    if (!label) {
      return { ok: false, spans: spans, error: "Choose an entity label first." };
    }
    for (let i = 0; i < spans.length; i += 1) {
      if (overlaps(r.start, r.end, spans[i].start, spans[i].end)) {
        return {
          ok: false,
          spans: spans,
          error: "Spans cannot overlap. Delete the conflicting span first.",
        };
      }
    }
    const next = spans.slice();
    next.push(createSpan(r.start, r.end, label));
    next.sort(function (a, b) {
      return a.start - b.start;
    });
    return { ok: true, spans: next, error: null };
  }

  function removeSpan(spans, spanId) {
    return spans.filter(function (s) {
      return s.id !== spanId;
    });
  }

  /**
   * Build highlighted HTML for a text with spans.
   * Escapes text; inserts mark elements for each span.
   */
  function renderMarkedHtml(text, spans, escFn) {
    const sorted = (spans || []).slice().sort(function (a, b) {
      return a.start - b.start;
    });
    let html = "";
    let cursor = 0;
    sorted.forEach(function (sp) {
      if (sp.start > cursor) {
        html += escFn(text.slice(cursor, sp.start));
      }
      const chunk = text.slice(sp.start, sp.end);
      html +=
        '<mark class="ta-span ta-span-' +
        escFn(String(sp.label).toLowerCase()) +
        '" data-span-id="' +
        escFn(sp.id) +
        '" title="' +
        escFn(sp.label) +
        '">' +
        escFn(chunk) +
        "</mark>";
      cursor = sp.end;
    });
    if (cursor < text.length) html += escFn(text.slice(cursor));
    return html;
  }

  /** Review gate flags for the current session. */
  function reviewFlags(items, mode, annotations) {
    const flags = [];
    items.forEach(function (item) {
      const ann = annotations[item.id];
      if (mode === "sentiment") {
        if (!ann || !ann.label) {
          flags.push({ id: item.id, kind: "missing", detail: "No sentiment label" });
        }
      } else {
        const spans = (ann && ann.spans) || [];
        if (!spans.length) {
          flags.push({ id: item.id, kind: "missing", detail: "No entity spans" });
        }
      }
    });
    return flags;
  }

  function labeledCount(items, mode, annotations) {
    let n = 0;
    items.forEach(function (item) {
      const ann = annotations[item.id];
      if (mode === "sentiment") {
        if (ann && ann.label) n += 1;
      } else if (ann && ann.spans && ann.spans.length) {
        n += 1;
      }
    });
    return n;
  }

  TextAnnLib.createSpan = createSpan;
  TextAnnLib.tryAddSpan = tryAddSpan;
  TextAnnLib.removeSpan = removeSpan;
  TextAnnLib.renderMarkedHtml = renderMarkedHtml;
  TextAnnLib.reviewFlags = reviewFlags;
  TextAnnLib.labeledCount = labeledCount;
})(typeof window !== "undefined" ? window : globalThis);
