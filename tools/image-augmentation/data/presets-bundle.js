/* Procedural preset images (window.ImgAugPresets). */
(function (global) {
  "use strict";

  function drawShapes(ctx, w, h) {
    ctx.fillStyle = "#e8f0ec";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#0f6b5c";
    ctx.fillRect(24, 40, 90, 60);
    ctx.fillStyle = "#b86a00";
    ctx.beginPath();
    ctx.arc(170, 70, 36, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#3d5a80";
    ctx.beginPath();
    ctx.moveTo(80, 150);
    ctx.lineTo(140, 100);
    ctx.lineTo(200, 150);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#1c2421";
    ctx.font = "bold 16px sans-serif";
    ctx.fillText("shapes", 20, 24);
  }

  function drawGradientCard(ctx, w, h) {
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, "#0f6b5c");
    g.addColorStop(1, "#f4a261");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.fillRect(28, 48, w - 56, h - 96);
    ctx.fillStyle = "#1c2421";
    ctx.font = "bold 20px sans-serif";
    ctx.fillText("card", 48, 100);
    ctx.font = "14px sans-serif";
    ctx.fillText("augment me", 48, 128);
  }

  function drawIconGrid(ctx, w, h) {
    ctx.fillStyle = "#f7f9f8";
    ctx.fillRect(0, 0, w, h);
    const colors = ["#0f6b5c", "#a33b3b", "#3d5a80", "#b86a00"];
    let i = 0;
    for (let y = 20; y < h - 20; y += 70) {
      for (let x = 20; x < w - 20; x += 70) {
        ctx.fillStyle = colors[i % colors.length];
        ctx.fillRect(x, y, 50, 50);
        ctx.strokeStyle = "#1c2421";
        ctx.strokeRect(x, y, 50, 50);
        i++;
      }
    }
  }

  function makePreset(id, title, description, drawer, w, h) {
    const canvas = document.createElement("canvas");
    canvas.width = w || 240;
    canvas.height = h || 180;
    drawer(canvas.getContext("2d"), canvas.width, canvas.height);
    return {
      id: id,
      title: title,
      description: description,
      bookAnchors: ["§10.6", "eg:10.16"],
      canvas: canvas,
      dataUrl: canvas.toDataURL("image/png"),
      source: "preset:" + id,
    };
  }

  global.ImgAugPresets = {
    list: function () {
      return [
        makePreset(
          "shapes",
          "Shapes scene",
          "Simple colored shapes—easy to see flip / rotate / crop effects.",
          drawShapes
        ),
        makePreset(
          "gradient-card",
          "Gradient card",
          "Smooth gradient + panel—good for color jitter and brightness.",
          drawGradientCard
        ),
        makePreset(
          "icon-grid",
          "Icon grid",
          "Repeated tiles—noise and blur show clearly.",
          drawIconGrid,
          260,
          200
        ),
      ];
    },
    load: function (id) {
      const all = this.list();
      for (let i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
      throw new Error("Unknown preset: " + id);
    },
  };
})(typeof window !== "undefined" ? window : globalThis);
