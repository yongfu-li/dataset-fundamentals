/**
 * Mermaid Integration for Material for MkDocs
 * Renders fenced mermaid blocks and supports instant navigation.
 */
(function () {
  let rendering = false;

  async function renderAllMermaid() {
    if (typeof mermaid === "undefined") return;
    if (rendering) return;

    const pres = document.querySelectorAll("pre.mermaid");
    const divs = document.querySelectorAll("div.mermaid:not([data-processed='true']):not([data-processing='true'])");
    if (pres.length === 0 && divs.length === 0) return;

    rendering = true;

    try {
      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          securityLevel: "loose",
          fontFamily: "'Inter', sans-serif"
        });
      } catch (e) {
        // already initialized
      }

      const toRender = [];
      pres.forEach((pre) => {
        if (pre.getAttribute("data-processing") === "true") return;
        pre.setAttribute("data-processing", "true");
        const code = pre.querySelector("code");
        const text = (code ? code.textContent : pre.textContent) || "";
        if (!text.trim()) return;
        const div = document.createElement("div");
        div.className = "mermaid";
        div.textContent = text.trim();
        div.setAttribute("data-processing", "true");
        pre.parentNode.insertBefore(div, pre);
        pre.remove();
        toRender.push(div);
      });

      divs.forEach((div) => {
        if (!div.getAttribute("data-processed") && !div.querySelector("svg") && !toRender.includes(div)) {
          const text = (div.textContent || "").trim();
          if (text) {
            div.setAttribute("data-processing", "true");
            toRender.push(div);
          }
        }
      });

      if (toRender.length > 0) {
        await mermaid.run({ nodes: toRender });
        toRender.forEach((el) => {
          el.setAttribute("data-processed", "true");
          el.removeAttribute("data-processing");
        });
        if (typeof window.sanitizeMermaidGlobal === "function") {
          window.sanitizeMermaidGlobal(document);
        }
      }
    } catch (err) {
      console.warn("Mermaid render error:", err);
    } finally {
      rendering = false;
    }
  }

  // Material for MkDocs instant navigation support
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(() => setTimeout(renderAllMermaid, 50));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(renderAllMermaid, 50));
  } else {
    setTimeout(renderAllMermaid, 50);
  }

  window.addEventListener("load", () => setTimeout(renderAllMermaid, 150));
})();
