/* Rule-based text synthesis (window.SynthTextLib). No training / no LLM. */
(function (global) {
  "use strict";
  const SynthTextLib = global.SynthTextLib || (global.SynthTextLib = {});

  const SYNONYMS = {
    great: ["excellent", "fantastic", "wonderful", "superb"],
    okay: ["fine", "acceptable", "alright", "decent"],
    terrible: ["awful", "horrible", "poor", "dreadful"],
    love: ["adore", "enjoy", "like", "appreciate"],
    arrived: ["came", "showed up", "got here", "reached"],
    package: ["parcel", "box", "shipment", "delivery"],
    product: ["item", "device", "gadget", "goods"],
    support: ["help desk", "customer service", "assistance", "help"],
    slow: ["sluggish", "delayed", "late", "slower"],
    excellent: ["outstanding", "superb", "great", "top-notch"],
    broken: ["damaged", "faulty", "defective", "ruined"],
    early: ["ahead of schedule", "promptly", "sooner"],
    battery: ["power", "charge", "cell"],
    camera: ["lens", "photo module", "imager"],
    shipping: ["delivery", "freight", "dispatch"],
  };

  const INSERT_WORDS = [
    "really",
    "quite",
    "very",
    "actually",
    "basically",
    "somewhat",
    "pretty",
    "honestly",
  ];

  // QWERTY neighbors for character noise
  const KEY_NEIGHBORS = {
    a: "qwsz",
    b: "vghn",
    c: "xdfv",
    d: "sfcer",
    e: "wrsdf",
    f: "dgcvrt",
    g: "fhvty",
    h: "gjbun",
    i: "ujko",
    j: "hknum",
    k: "jlmio",
    l: "kop",
    m: "njk",
    n: "bhjm",
    o: "iklp",
    p: "ol",
    q: "wa",
    r: "edft",
    s: "awedxz",
    t: "rfgy",
    u: "yhji",
    v: "cfgb",
    w: "qeas",
    x: "zsdc",
    y: "tghu",
    z: "asx",
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

  function wordTokens(text) {
    return String(text)
      .trim()
      .split(/\s+/)
      .filter(Boolean);
  }

  function matchCase(orig, repl) {
    if (!orig) return repl;
    if (orig === orig.toUpperCase()) return repl.toUpperCase();
    if (orig[0] === orig[0].toUpperCase()) {
      return repl.charAt(0).toUpperCase() + repl.slice(1);
    }
    return repl;
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
        const repl = matchCase(word, syn);
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

    return {
      text: text,
      parts: [{ type: "text", value: text }],
      method: "noise",
      seed: seed,
      ops: ops,
    };
  }

  /** Easy Data Augmentation–style ops (synonym / insert / swap / delete). */
  function applyEda(rng, seed, intensity) {
    let words = wordTokens(seed);
    if (!words.length) {
      return { text: seed, parts: [{ type: "text", value: seed }], method: "eda", seed: seed, ops: [] };
    }
    const ops = [];
    const nOps = intensity <= 0 ? 0 : 1 + Math.floor(rng() * Math.min(4, Math.ceil(intensity * 4)));

    for (let i = 0; i < nOps; i++) {
      if (words.length < 1) break;
      const roll = rng();
      if (roll < 0.25) {
        // synonym replace
        const candidates = [];
        for (let w = 0; w < words.length; w++) {
          if (SYNONYMS[words[w].toLowerCase()]) candidates.push(w);
        }
        if (candidates.length) {
          const wi = pick(rng, candidates);
          const from = words[wi];
          const to = matchCase(from, pick(rng, SYNONYMS[from.toLowerCase()]));
          words[wi] = to;
          ops.push({ op: "sr", from: from, to: to });
        }
      } else if (roll < 0.5) {
        // random insert
        const ins = pick(rng, INSERT_WORDS);
        const at = Math.floor(rng() * (words.length + 1));
        words.splice(at, 0, ins);
        ops.push({ op: "ri", word: ins, at: at });
      } else if (roll < 0.75 && words.length >= 2) {
        // random swap
        const i1 = Math.floor(rng() * words.length);
        let i2 = Math.floor(rng() * words.length);
        if (i2 === i1) i2 = (i1 + 1) % words.length;
        const tmp = words[i1];
        words[i1] = words[i2];
        words[i2] = tmp;
        ops.push({ op: "rs", i: i1, j: i2 });
      } else if (words.length > 3) {
        // random delete
        const di = Math.floor(rng() * words.length);
        const dropped = words[di];
        words.splice(di, 1);
        ops.push({ op: "rd", from: dropped });
      }
    }

    const text = words.join(" ");
    return {
      text: text,
      parts: [{ type: "text", value: text }],
      method: "eda",
      seed: seed,
      ops: ops,
    };
  }

  function applyCharNoise(rng, seed, intensity) {
    const chars = seed.split("");
    const ops = [];
    const letterIdxs = [];
    for (let i = 0; i < chars.length; i++) {
      if (/[a-zA-Z]/.test(chars[i])) letterIdxs.push(i);
    }
    const nOps =
      intensity <= 0 || !letterIdxs.length
        ? 0
        : 1 + Math.floor(rng() * Math.min(4, Math.ceil(intensity * 4)));

    for (let i = 0; i < nOps; i++) {
      if (!letterIdxs.length) break;
      const li = pick(rng, letterIdxs);
      const ch = chars[li];
      const lower = ch.toLowerCase();
      const neigh = KEY_NEIGHBORS[lower];
      const roll = rng();
      if (neigh && roll < 0.5) {
        let repl = pick(rng, neigh.split(""));
        if (ch === ch.toUpperCase()) repl = repl.toUpperCase();
        chars[li] = repl;
        ops.push({ op: "key", from: ch, to: repl });
      } else if (roll < 0.75 && li + 1 < chars.length && /[a-zA-Z]/.test(chars[li + 1])) {
        const tmp = chars[li];
        chars[li] = chars[li + 1];
        chars[li + 1] = tmp;
        ops.push({ op: "transpose", at: li });
      } else {
        chars.splice(li, 0, ch);
        letterIdxs.push(chars.length - 1);
        ops.push({ op: "dup", ch: ch });
      }
    }

    const text = chars.join("");
    return {
      text: text,
      parts: [{ type: "text", value: text }],
      method: "char_noise",
      seed: seed,
      ops: ops,
    };
  }

  function bootstrapSample(rng, seeds) {
    const src = pick(rng, seeds);
    return {
      text: src,
      parts: [{ type: "text", value: src }],
      method: "bootstrap",
      seed: src,
    };
  }

  function mixupSample(rng, seeds) {
    if (seeds.length < 2) throw new Error("Mixup needs at least 2 seed lines.");
    const a = pick(rng, seeds);
    let b = pick(rng, seeds);
    let guard = 0;
    while (b === a && guard++ < 8) b = pick(rng, seeds);
    const wa = wordTokens(a);
    const wb = wordTokens(b);
    if (!wa.length || !wb.length) {
      return {
        text: a + " " + b,
        parts: [
          { type: "slot", slot: "A", value: a },
          { type: "text", value: " " },
          { type: "slot", slot: "B", value: b },
        ],
        method: "mixup",
        seedA: a,
        seedB: b,
      };
    }
    const cutA = Math.max(1, Math.floor(rng() * wa.length));
    const cutB = Math.min(wb.length - 1, Math.floor(rng() * wb.length));
    const left = wa.slice(0, cutA);
    const right = wb.slice(cutB);
    const leftText = left.join(" ");
    const rightText = right.join(" ");
    const text = (leftText + " " + rightText).trim();
    return {
      text: text,
      parts: [
        { type: "slot", slot: "A", value: leftText },
        { type: "text", value: " " },
        { type: "slot", slot: "B", value: rightText },
      ],
      method: "mixup",
      seedA: a,
      seedB: b,
    };
  }

  function buildMarkov(seeds, order) {
    const n = Math.max(1, Math.min(3, order || 1));
    const model = { starts: [], next: {}, order: n };
    seeds.forEach(function (s) {
      const tokens = wordTokens(s);
      if (tokens.length < n + 1) return;
      model.starts.push(tokens.slice(0, n).join("\u0000"));
      for (let i = 0; i <= tokens.length - n - 1; i++) {
        const key = tokens.slice(i, i + n).join("\u0000");
        const b = tokens[i + n];
        if (!model.next[key]) model.next[key] = [];
        model.next[key].push(b);
      }
      const endKey = tokens.slice(tokens.length - n).join("\u0000");
      if (!model.next[endKey]) model.next[endKey] = [];
      model.next[endKey].push(null);
    });
    return model;
  }

  function markovSample(rng, model, maxWords) {
    if (!model.starts.length) {
      throw new Error("Need longer seed lines for Markov (order " + model.order + ").");
    }
    const startKey = pick(rng, model.starts);
    const words = startKey.split("\u0000");
    let key = startKey;
    while (words.length < maxWords) {
      const opts = model.next[key];
      if (!opts || !opts.length) break;
      const nxt = pick(rng, opts);
      if (nxt == null) break;
      words.push(nxt);
      key = words.slice(words.length - model.order).join("\u0000");
    }
    const text = words.join(" ");
    return {
      text: text,
      parts: [{ type: "text", value: text }],
      method: model.order === 2 ? "markov3" : "markov",
      nTokens: words.length,
      order: model.order,
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

  function needSeeds(seeds, min, label) {
    if (!seeds || seeds.length < min) {
      throw new Error(label + " needs at least " + min + " seed line" + (min === 1 ? "" : "s") + ".");
    }
  }

  function intensityApplies(method) {
    return method === "noise" || method === "eda" || method === "char_noise";
  }

  SynthTextLib.METHODS = [
    { id: "template", label: "Template / slot fill", needs: "templates" },
    { id: "noise", label: "Noise on seeds", needs: "seeds" },
    { id: "eda", label: "EDA (synonym / insert / swap / delete)", needs: "seeds" },
    { id: "char_noise", label: "Character / keyboard noise", needs: "seeds" },
    { id: "bootstrap", label: "Bootstrap resample", needs: "seeds" },
    { id: "mixup", label: "Sentence mixup (splice two seeds)", needs: "seeds" },
    { id: "markov", label: "Markov bigram", needs: "seeds" },
    { id: "markov3", label: "Markov trigram", needs: "seeds" },
  ];

  SynthTextLib.generate = function (session, opts) {
    const method = opts.method || session.method || "template";
    const count = Math.max(1, Math.min(100, Number(opts.count) || 10));
    const seed = Number(opts.seed);
    const seedNum = Number.isFinite(seed) ? seed >>> 0 : 42;
    const intensity = Math.max(0, Math.min(1, Number(opts.noiseIntensity) || 0.5));
    const rng = mulberry32(seedNum);
    const items = [];
    const seeds = session.seedTexts || [];

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
      needSeeds(seeds, 1, "Noise");
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
    } else if (method === "eda") {
      needSeeds(seeds, 1, "EDA");
      for (let i = 0; i < count; i++) {
        const src = pick(rng, seeds);
        const g = applyEda(rng, src, intensity);
        items.push({
          id: "S" + String(i + 1).padStart(3, "0"),
          text: g.text,
          parts: g.parts,
          method: g.method,
          seed: g.seed,
          ops: g.ops,
        });
      }
    } else if (method === "char_noise") {
      needSeeds(seeds, 1, "Character noise");
      for (let i = 0; i < count; i++) {
        const src = pick(rng, seeds);
        const g = applyCharNoise(rng, src, intensity);
        items.push({
          id: "S" + String(i + 1).padStart(3, "0"),
          text: g.text,
          parts: g.parts,
          method: g.method,
          seed: g.seed,
          ops: g.ops,
        });
      }
    } else if (method === "bootstrap") {
      needSeeds(seeds, 1, "Bootstrap");
      for (let i = 0; i < count; i++) {
        const g = bootstrapSample(rng, seeds);
        items.push({
          id: "S" + String(i + 1).padStart(3, "0"),
          text: g.text,
          parts: g.parts,
          method: g.method,
          seed: g.seed,
        });
      }
    } else if (method === "mixup") {
      needSeeds(seeds, 2, "Mixup");
      for (let i = 0; i < count; i++) {
        const g = mixupSample(rng, seeds);
        items.push({
          id: "S" + String(i + 1).padStart(3, "0"),
          text: g.text,
          parts: g.parts,
          method: g.method,
          seedA: g.seedA,
          seedB: g.seedB,
        });
      }
    } else if (method === "markov" || method === "markov3") {
      needSeeds(seeds, 3, "Markov");
      const order = method === "markov3" ? 2 : 1;
      const model = buildMarkov(seeds, order);
      for (let i = 0; i < count; i++) {
        const g = markovSample(rng, model, 8 + Math.floor(rng() * 10));
        items.push({
          id: "S" + String(i + 1).padStart(3, "0"),
          text: g.text,
          parts: g.parts,
          method: g.method,
          nTokens: g.nTokens,
          order: g.order,
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
      noiseIntensity: intensityApplies(method) ? intensity : null,
      items: items,
      stats: stats,
      caveats: [
        "Rule-based synthesis only—no neural net or LLM API on this site.",
        "Synthetic text can still memorize or leak rare phrases from seeds.",
        "Bootstrap copies seeds exactly (with replacement)—useful for §10.3 sampling demos, not for privacy.",
        "Validate utility and privacy before mixing into a production training set.",
      ],
    };
  };
})(typeof window !== "undefined" ? window : globalThis);
