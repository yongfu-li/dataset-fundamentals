/* Schema inference + flatten / stringify (window.SchemaLib). */
(function (global) {
  "use strict";
  const SchemaLib = global.SchemaLib || (global.SchemaLib = {});

  function typeOfValue(v) {
    if (v === null || v === undefined) return "null";
    if (Array.isArray(v)) return "array";
    if (SchemaLib.isPlainObject(v)) return "object";
    if (typeof v === "number" && isFinite(v)) return "number";
    if (typeof v === "boolean") return "boolean";
    return "string";
  }

  function walkSchema(value, path, out, depth) {
    const t = typeOfValue(value);
    const key = path || "(root)";
    if (!out[key]) {
      out[key] = {
        path: key,
        types: {},
        nullable: false,
        nested: depth > 0,
        depth: depth,
        examples: [],
      };
    }
    const node = out[key];
    node.types[t] = (node.types[t] || 0) + 1;
    if (t === "null") node.nullable = true;
    if (node.examples.length < 3 && t !== "null" && t !== "object" && t !== "array") {
      node.examples.push(value);
    }
    if (t === "object") {
      Object.keys(value).forEach(function (k) {
        const child = path ? path + "." + k : k;
        walkSchema(value[k], child, out, depth + 1);
      });
    } else if (t === "array") {
      const child = path ? path + "[]" : "[]";
      if (!value.length) {
        walkSchema(null, child, out, depth + 1);
      } else {
        // Sample up to 5 elements for schema
        const n = Math.min(5, value.length);
        for (let i = 0; i < n; i += 1) {
          walkSchema(value[i], child, out, depth + 1);
        }
      }
    }
  }

  function inferSchema(rows) {
    const map = {};
    (rows || []).forEach(function (row) {
      walkSchema(row, "", map, 0);
    });
    // Drop synthetic root if present
    delete map[""];
    delete map["(root)"];
    const fields = Object.keys(map)
      .map(function (k) {
        return map[k];
      })
      .sort(function (a, b) {
        return a.path.localeCompare(b.path);
      });
    let maxDepth = 0;
    let hasArray = false;
    let hasObject = false;
    fields.forEach(function (f) {
      if (f.depth > maxDepth) maxDepth = f.depth;
      if (f.types.array) hasArray = true;
      if (f.types.object) hasObject = true;
    });
    let structure = "structured";
    // depth 1 = top-level fields; depth > 1 or object/array types ⇒ semi-structured
    if (hasArray || hasObject || maxDepth > 1) structure = "semi-structured";
    return {
      fields: fields,
      maxDepth: maxDepth,
      hasNested: hasArray || hasObject || maxDepth > 1,
      structure: structure,
      rowCount: (rows || []).length,
    };
  }

  function primaryType(types) {
    let best = "null";
    let n = -1;
    Object.keys(types || {}).forEach(function (t) {
      if (types[t] > n) {
        n = types[t];
        best = t;
      }
    });
    return best;
  }

  /** Flatten one level of objects with dot keys; arrays become JSON strings. */
  function flattenRows(rows, mode) {
    const m = mode || "dot"; // dot | stringify-arrays | explode (not full explode here)
    const warnings = [];
    const flat = [];
    let arrayFields = 0;
    let objectFields = 0;

    function flattenOne(obj, prefix, into) {
      Object.keys(obj || {}).forEach(function (k) {
        const key = prefix ? prefix + "." + k : k;
        const v = obj[k];
        if (SchemaLib.isPlainObject(v)) {
          objectFields += 1;
          flattenOne(v, key, into);
        } else if (Array.isArray(v)) {
          arrayFields += 1;
          if (m === "stringify-arrays" || m === "dot") {
            into[key] = JSON.stringify(v);
          } else {
            into[key] = v;
          }
        } else {
          into[key] = v;
        }
      });
    }

    (rows || []).forEach(function (row) {
      const out = {};
      if (SchemaLib.isPlainObject(row)) flattenOne(row, "", out);
      else out.value = row;
      flat.push(out);
    });

    if (objectFields) {
      warnings.push(
        "Nested objects were flattened with dotted field names (e.g. address.city)."
      );
    }
    if (arrayFields) {
      warnings.push(
        "Array fields were stringified for CSV. That preserves values but loses typed columns — semi-structured → flat is lossy (§1.2)."
      );
    }
    return {
      rows: flat,
      columns: SchemaLib.collectColumns(flat),
      warnings: warnings,
      mode: m,
    };
  }

  function rowsToCsv(rows, columns) {
    function esc(v) {
      if (v == null) return "";
      if (typeof v === "object") v = JSON.stringify(v);
      const s = String(v);
      if (/[",\n\r]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
      return s;
    }
    const cols = columns && columns.length ? columns : SchemaLib.collectColumns(rows);
    const lines = [cols.map(esc).join(",")];
    rows.forEach(function (r) {
      lines.push(
        cols
          .map(function (c) {
            return esc(r[c]);
          })
          .join(",")
      );
    });
    return lines.join("\n") + "\n";
  }

  function rowsToJson(rows, pretty) {
    return JSON.stringify(rows, null, pretty ? 2 : 0);
  }

  function schemaToJson(schema) {
    return {
      format: "inferred-schema",
      version: 1,
      structure: schema.structure,
      maxDepth: schema.maxDepth,
      rowCount: schema.rowCount,
      fields: schema.fields.map(function (f) {
        return {
          path: f.path,
          primaryType: primaryType(f.types),
          types: f.types,
          nullable: f.nullable,
          depth: f.depth,
          examples: f.examples,
        };
      }),
    };
  }

  SchemaLib.typeOfValue = typeOfValue;
  SchemaLib.inferSchema = inferSchema;
  SchemaLib.primaryType = primaryType;
  SchemaLib.flattenRows = flattenRows;
  SchemaLib.rowsToCsv = rowsToCsv;
  SchemaLib.rowsToJson = rowsToJson;
  SchemaLib.schemaToJson = schemaToJson;
})(typeof window !== "undefined" ? window : globalThis);
