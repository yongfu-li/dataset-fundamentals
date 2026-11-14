/**
 * KaTeX Auto-Render Initializer & Mermaid Boundary Guardian for Material for MkDocs
 * Supporting standard DOM lifecycle and Material instant navigation.
 */
(function () {
  function renderAllKaTeX(root) {
    const target = root || document.body;
    if (typeof renderMathInElement === "function" && target) {
      renderMathInElement(target, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true }
        ],
        ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
        throwOnError: false
      });
    }
  }

  function guardMermaidBoundaries(root) {
    const target = root || document.body;
    const nodes = target.querySelectorAll('.mermaid .node');
    if (!nodes || nodes.length === 0) return;

    nodes.forEach(node => {
      const shape = node.querySelector('rect, polygon, circle, ellipse, path:not(.flowchart-link)');
      const fo = node.querySelector('foreignObject');
      const div = fo ? fo.querySelector('div') : null;
      if (shape && div) {
        let shapeW = parseFloat(shape.getAttribute('width') || 0);
        let shapeH = parseFloat(shape.getAttribute('height') || 0);
        if ((!shapeW || !shapeH) && shape.getBoundingClientRect) {
          const bbox = shape.getBoundingClientRect();
          if (!shapeW) shapeW = bbox.width;
          if (!shapeH) shapeH = bbox.height;
        }

        const textW = Math.max(div.scrollWidth, div.offsetWidth);
        const textH = Math.max(div.scrollHeight, div.offsetHeight);
        const marginX = 14;
        const marginY = 8;

        if (shapeW > 0 && textW + marginX > shapeW) {
          const scale = Math.max(0.65, Math.min(0.98, (shapeW - marginX) / textW));
          div.style.transform = `scale(${scale.toFixed(3)})`;
          div.style.transformOrigin = 'center center';
        }
      }
    });
  }

  function runAll(root) {
    const target = root || document.body;
    renderAllKaTeX(target);
    // Allow Mermaid async rendering to settle before checking boundaries
    setTimeout(() => guardMermaidBoundaries(target), 300);
    setTimeout(() => guardMermaidBoundaries(target), 1200);
  }

  // Support Material for MkDocs instant navigation when enabled
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe((args) => {
      const el = (args && args.body) ? args.body : document.body;
      runAll(el);
    });
  }

  // Execute on initial DOM ready or immediately if already loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => runAll(document.body));
  } else {
    runAll(document.body);
  }

  window.addEventListener("load", () => runAll(document.body));
})();


