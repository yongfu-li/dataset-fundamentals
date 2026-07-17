/**
 * Small UX helpers for the book-slides site.
 */
(function () {
  // If a video source 404s, show the placeholder instead of a blank player.
  document.querySelectorAll(".video-wrap").forEach((wrap) => {
    const video = wrap.querySelector("video");
    const placeholder = wrap.querySelector(".video-placeholder");
    if (!video || !placeholder) return;
    video.addEventListener("error", () => {
      video.style.display = "none";
      placeholder.hidden = false;
    });
  });

  // Remember open/closed state for slides/transcript panels on this page.
  document.querySelectorAll("details.panel[data-persist]").forEach((panel) => {
    const key = `book-slides:${location.pathname}:${panel.dataset.persist}`;
    try {
      const saved = localStorage.getItem(key);
      if (saved === "1") panel.open = true;
      if (saved === "0") panel.open = false;
    } catch (_) {
      /* ignore */
    }
    panel.addEventListener("toggle", () => {
      try {
        localStorage.setItem(key, panel.open ? "1" : "0");
      } catch (_) {
        /* ignore */
      }
    });
  });
})();
