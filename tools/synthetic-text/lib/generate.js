/* Rule-based text synthesis (window.SynthTextLib). No training / no LLM. */
(function (global) {
  "use strict";
  const SynthTextLib = global.SynthTextLib || (global.SynthTextLib = {});

  const SYNONYMS = {
    great: ["excellent", "fantastic", "wonderful"],
    okay: ["fine", "acceptable", "alright"],
    terrible: ["awful", "horrible", "poor"],
    love: ["adore", "enjoy", "like"],
    arrived: ["came", "showed up", "got here"],
    package: ["parcel", "box", "shipment"],
    product: ["item", "device", "gadget"],
    support: ["help desk", "customer service", "assistance"],
    slow: ["sluggish", "delayed", "late"],
    excellent: ["outstanding", "superb", "great"],
  };

  function mulberry32(a) {
    return function () {
      let t = (a += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function pick(rng, arr) {
    if (!arr || !arr.length) return "";
    return arr[Math.floor(rng() * arr.length)];
  }

  function fillTemplate(rng, template, slots) {
    const filled = [];
    const text = template.replace(/\{([a-zA-Z0-9_]+)\}/g, function (_, key) {
      const bank = slots[key];
      const val = pick(rng, bank && bank.length ? bank : ["[" + key + "]"]);
      filled.push({ slot: key, value: val });
      return "\u0001" + (filled.length - 1) + "\u0002";
    });
    const parts = [];
    const re = /\u0001(\d+)\u0002/g;
    let last = 0;
    let m;
    while ((m = re.exec(text))) {
      if (m.index > last) parts.push({ type: "text", value: text.slice(last, m.index) });
      const f = filled[Number(m[1])];
      parts.push({ type: "slot", slot: f.slot, value: f.value });
      last = m.index + m[0].length;
    }
    if (last < text.length) parts.push({ type: "text", value: text.slice(last) });
    const plain = parts
      .map(function (p) {
        return p.value;
      })
      .join("");
    return { text: plain, parts: parts, method: "template", template: template };
  }

  function applyNoise(rng, seed, intensity) {
    const parts = [{ type: "text", value: seed }];
    let text = seed;
    const ops = [];
    const nOps = intensity <= 0 ? 0 : 1 + Math.floor(rng() * Math.min(3, Math.ceil(intensity * 3)));

    for (let i = 0; i < nOps; i++) {
      const words = text.split(/(\s+)/);
      const wordIdxs = [];
      for (let w = 0; w < words.length; w++) {
        if (/\w/.test(words[w])) wordIdxs.push(w);
      }
      if (!wordIdxs.length) break;
      const wi = pick(rng, wordIdxs);
      const word = words[wi];
      const lower = word.toLowerCase();
      const roll = rng();
      if (roll < 0.4 && SYNONYMS[lower]) {
        const syn = pick(rng, SYNONYMS[lower]);
        const repl =
          word[0] === word[0].toUpperCase() ? syn.charAt(0).toUpperCase() + syn.slice(1) : syn;
        words[wi] = repl;
        ops.push({ op: "synonym", from: word, to: repl });
      } else if (roll < 0.7 && word.length > 3) {
        const pos = 1 + Math.floor(rng() * (word.length - 2));
        const chars = word.split("");
        const tmp = chars[pos];
        chars[pos] = chars[pos + 1] || chars[pos];
        if (chars[pos + 1]) chars[pos + 1] = tmp;
        words[wi] = chars.join("");
        ops.push({ op: "typo", from: word, to: words[wi] });
      } else if (wordIdxs.length > 3) {
        words[wi] = "";
        ops.push({ op: "drop", from: word });
      }
      text = words.join("").replace(/\s{2,}/g, " ").trim();
    }

    // Highlight changed regions roughly by marking whole string as noise result
    return {
      text: text,
      parts: [{ type: "text", value: text }],
      method: "noise",
      seed: seed,
      ops: ops,
    };
  }

  function buildMarkov(seeds) {
    const model = { starts: [], next: {} };
    seeds.forEach(function (s) {
      const tokens = String(s)
        .trim()
        .split(/\s+/)
        .filter(Boolean);
      if (tokens.length < 2) return;
      model.starts.push(tokens[0]);
      for (let i = 0; i < tokens.length - 1; i++) {
        const a = tokens[i];
        const b = tokens[i + 1];
        if (!model.next[a]) model.next[a] = [];
        model.next[a].push(b);
      }
      const last = tokens[tokens.length - 1];
      if (!model.next[last]) model.next[last] = [];
      model.next[last].push(null);
    });
    return model;
  }

  function markovSample(rng, model, maxWords) {
    if (!model.starts.length) throw new Error("Need at least two-word seed lines for Markov.");
    let w = pick(rng, model.starts);
    const words = [w];
    for (let i = 0; i < maxWords - 1; i++) {
      const opts = model.next[w];
      if (!opts || !opts.length) break;
      const nxt = pick(rng, opts);
      if (nxt == null) break;
      words.push(nxt);
      w = nxt;
    }
    const text = words.join(" ");
    return {
      text: text,
      parts: [{ type: "text", value: text }],
      method: "markov",
      nTokens: words.length,
    };
  }

  function uniqueness(texts) {
    const seen = {};
    let dupes = 0;
    texts.forEach(function (t) {
      const k = t.toLowerCase();
      if (seen[k]) dupes++;
      else seen[k] = 1;
    });
    const unique = texts.length - dupes;
    return {
      n: texts.length,
      unique: unique,
      duplicateExact: dupes,
      uniqueRate: texts.length ? unique / texts.length : 0,
    };
  }

  SynthTextLib.generate = function (session, opts) {
    const method = opts.method || session.method || "template";
    const count = Math.max(1, Math.min(100, Number(opts.count) || 10));
    const seed = Number(opts.seed);
    const seedNum = Number.isFinite(seed) ? seed >>> 0 : 42;
    const intensity = Math.max(0, Math.min(1, Number(opts.noiseIntensity) || 0.5));
    const rng = mulberry32(seedNum);
    const items = [];

    if (method === "template") {
      const templates = session.templates || [];
      if (!templates.length) throw new Error("This session has no templates. Choose a template preset.");
      for (let i = 0; i < count; i++) {
        const tmpl = pick(rng, templates);
        const g = fillTemplate(rng, tmpl, session.slots || {});
        items.push({
          id: "S" + String(i + 1).padStart(3, "0"),
          text: g.text,
          parts: g.parts,
          method: g.method,
          template: g.template,
        });
      }
    } else if (method === "noise") {
      const seeds = session.seedTexts || [];
      if (!seeds.length) throw new Error("Noise mode needs seed texts (preset or upload).");
      for (let i = 0; i < count; i++) {
        const src = pick(rng, seeds);
        const g = applyNoise(rng, src, intensity);
        items.push({
          id: "S" + String(i + 1).padStart(3, "0"),
          text: g.text,
          parts: g.parts,
          method: g.method,
          seed: g.seed,
          ops: g.ops,
        });
      }
    } else if (method === "markov") {
      const seeds = session.seedTexts || [];
      if (seeds.length < 3) throw new Error("Markov needs at least 3 seed lines.");
      const model = buildMarkov(seeds);
      for (let i = 0; i < count; i++) {
        const g = markovSample(rng, model, 8 + Math.floor(rng() * 10));
        items.push({
          id: "S" + String(i + 1).padStart(3, "0"),
          text: g.text,
          parts: g.parts,
          method: g.method,
          nTokens: g.nTokens,
        });
      }
    } else {
      throw new Error("Unknown method: " + method);
    }

    const stats = uniqueness(
      items.map(function (it) {
        return it.text;
      })
    );

    return {
      method: method,
      seed: seedNum,
      count: count,
      noiseIntensity: method === "noise" ? intensity : null,
      items: items,
      stats: stats,
      caveats: [
        "Rule-based synthesis only—no neural net or LLM API on this site.",
        "Synthetic text can still memorize or leak rare phrases from seeds.",
        "Validate utility and privacy before mixing into a production training set.",
      ],
    };
  };
})(typeof window !== "undefined" ? window : globalThis);
