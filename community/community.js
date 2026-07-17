/**
 * Community page — Web3Forms submission + URL helpers (?tool= & ?type=).
 */
(function () {
  const PLACEHOLDER_KEY = "REPLACE_WITH_YOUR_KEY";
  const root = document.getElementById("community-root");
  if (!root) return;

  const accessKey = root.dataset.accessKey || "";
  const setupBanner = document.getElementById("comm-setup");
  if (setupBanner && (!accessKey || accessKey === PLACEHOLDER_KEY)) {
    setupBanner.hidden = false;
  }

  const params = new URLSearchParams(location.search);
  const typeParam = params.get("type");
  const toolParam = params.get("tool");

  if (typeParam === "tool") {
    const target = document.getElementById("tool-feedback");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (typeParam === "testimonial") {
    const target = document.getElementById("share-testimonial");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const toolSelect = document.getElementById("tool-name");
  if (toolSelect && toolParam) {
    for (const opt of toolSelect.options) {
      if (opt.value === toolParam) {
        opt.selected = true;
        break;
      }
    }
  }

  async function submitForm(form, statusEl) {
    if (!accessKey || accessKey === PLACEHOLDER_KEY) {
      statusEl.hidden = false;
      statusEl.className = "comm-status comm-status-err";
      statusEl.textContent =
        "Form not configured yet. Add your Web3Forms access key to lectures/community/community.json, then rebuild the site.";
      return;
    }

    const hp = form.querySelector('input[name="botcheck"]');
    if (hp && hp.value) return;

    const btn = form.querySelector('button[type="submit"]');
    const originalLabel = btn ? btn.textContent : "";
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Sending…";
    }
    statusEl.hidden = true;

    const payload = Object.fromEntries(new FormData(form).entries());
    payload.access_key = accessKey;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        form.reset();
        statusEl.hidden = false;
        statusEl.className = "comm-status comm-status-ok";
        statusEl.textContent =
          "Thank you — your message was sent. We read every submission; testimonials are reviewed before appearing on this page.";
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      statusEl.hidden = false;
      statusEl.className = "comm-status comm-status-err";
      statusEl.textContent =
        "Could not send right now. Please try again in a moment or email us directly.";
      console.error(err);
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = originalLabel;
      }
    }
  }

  document.querySelectorAll("form.comm-form[data-form]").forEach((form) => {
    const statusEl = form.querySelector(".comm-status");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (statusEl) submitForm(form, statusEl);
    });
  });
})();
