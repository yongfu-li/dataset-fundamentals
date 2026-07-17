/* Classic script — schema + row diffs between dataset versions.
 * Book anchors: §8.4 Dataset Version Control; eg:8.2 feature drift. */
(function (global) {
  "use strict";
  const VersionTimelineLib = global.VersionTimelineLib || (global.VersionTimelineLib = {});

  function rowMap(version) {
    const map = {};
    (version.rows || []).forEach(function (row) {
      const id = row.id != null ? String(row.id) : null;
      if (id) map[id] = row;
    });
    return map;
  }

  /**
   * Build rename map from next.renames: from → to (applied when aligning prev → next columns).
   */
  function renameMap(next) {
    const map = {};
    (next.renames || []).forEach(function (r) {
      if (r && r.from && r.to) map[r.from] = r.to;
    });
    return map;
  }

  /**
   * Project a prev-row into next's column namespace using renames.
   */
  function alignRow(prevRow, nextColumns, renames) {
    const out = {};
    Object.keys(prevRow).forEach(function (key) {
      const mapped = renames[key] || key;
      out[mapped] = prevRow[key];
    });
    // Only keep fields that exist on next (or id)
    const filtered = { id: out.id != null ? out.id : prevRow.id };
    nextColumns.forEach(function (col) {
      if (col === "id") return;
      if (Object.prototype.hasOwnProperty.call(out, col)) {
        filtered[col] = out[col];
      }
    });
    return filtered;
  }

  function schemaDiff(prev, next) {
    const renames = renameMap(next);
    const renameFrom = new Set(Object.keys(renames));
    const renameTo = new Set(Object.values(renames));
    const prevCols = new Set(prev.columns || []);
    const nextCols = new Set(next.columns || []);

    const renamed = (next.renames || []).map(function (r) {
      return { from: r.from, to: r.to };
    });

    const removed = [];
    prevCols.forEach(function (c) {
      if (renameFrom.has(c)) return;
      if (!nextCols.has(c)) removed.push(c);
    });

    const added = [];
    nextCols.forEach(function (c) {
      if (renameTo.has(c)) return;
      if (!prevCols.has(c)) added.push(c);
    });

    return {
      added: added.sort(),
      removed: removed.sort(),
      renamed: renamed,
      prevColumns: (prev.columns || []).slice(),
      nextColumns: (next.columns || []).slice(),
    };
  }

  function rowDiff(prev, next) {
    const renames = renameMap(next);
    const prevById = rowMap(prev);
    const nextById = rowMap(next);
    const nextColumns = next.columns || [];

    const added = [];
    const removed = [];
    const modified = [];

    Object.keys(nextById).forEach(function (id) {
      if (!prevById[id]) {
        added.push({
          id: id,
          status: "added",
          row: Object.assign({}, nextById[id]),
        });
      }
    });

    Object.keys(prevById).forEach(function (id) {
      if (!nextById[id]) {
        removed.push({
          id: id,
          status: "removed",
          row: Object.assign({}, prevById[id]),
        });
      }
    });

    Object.keys(nextById).forEach(function (id) {
      if (!prevById[id]) return;
      const aligned = alignRow(prevById[id], nextColumns, renames);
      const nextRow = nextById[id];
      const changes = [];
      nextColumns.forEach(function (col) {
        if (col === "id") return;
        const a = aligned[col];
        const b = nextRow[col];
        const aStr = a == null ? "" : String(a);
        const bStr = b == null ? "" : String(b);
        // Field newly present on next (not in aligned) counts as change if value set
        if (!Object.prototype.hasOwnProperty.call(aligned, col)) {
          if (bStr !== "") {
            changes.push({ field: col, from: null, to: b });
          }
          return;
        }
        if (aStr !== bStr) {
          changes.push({ field: col, from: a, to: b });
        }
      });
      if (changes.length) {
        modified.push({
          id: id,
          status: "modified",
          changes: changes,
          before: Object.assign({}, prevById[id]),
          after: Object.assign({}, nextRow),
        });
      }
    });

    added.sort(function (a, b) {
      return a.id.localeCompare(b.id);
    });
    removed.sort(function (a, b) {
      return a.id.localeCompare(b.id);
    });
    modified.sort(function (a, b) {
      return a.id.localeCompare(b.id);
    });

    return { added: added, removed: removed, modified: modified };
  }

  /**
   * Diff prev → next versions.
   */
  function diffVersions(prev, next) {
    if (!prev || !next) {
      return null;
    }
    const schema = schemaDiff(prev, next);
    const rows = rowDiff(prev, next);
    const nSchemaChanges =
      schema.added.length + schema.removed.length + schema.renamed.length;
    return {
      from: prev.id,
      to: next.id,
      schema: schema,
      rows: rows,
      summary: {
        nAdded: rows.added.length,
        nRemoved: rows.removed.length,
        nModified: rows.modified.length,
        nSchemaChanges: nSchemaChanges,
        nPrevRows: (prev.rows || []).length,
        nNextRows: (next.rows || []).length,
        nPrevCols: (prev.columns || []).length,
        nNextCols: (next.columns || []).length,
      },
    };
  }

  /**
   * Cumulative history from v1 through activeIndex (diffs between consecutive versions).
   */
  function buildManifest(preset, activeIndex) {
    const versions = preset.versions || [];
    const idx = Math.max(0, Math.min(activeIndex, versions.length - 1));
    const steps = [];
    for (let i = 1; i <= idx; i += 1) {
      steps.push(diffVersions(versions[i - 1], versions[i]));
    }
    return {
      tool: "Version timeline",
      source: preset.source || preset.name,
      teachingFocus: preset.teachingFocus || "",
      activeVersion: versions[idx] ? versions[idx].id : null,
      activeIndex: idx,
      versions: versions.map(function (v) {
        return {
          id: v.id,
          date: v.date,
          message: v.message,
          columns: v.columns,
          nRows: (v.rows || []).length,
          renames: v.renames || [],
          schema_notes: v.schema_notes || "",
        };
      }),
      steps: steps,
      book_anchors: [
        "§8.4 Dataset Version Control",
        "eg:8.2 Feature Drift Across Dataset Versions",
        "eg:8.20 CSV Dataset Commits in Git",
      ],
    };
  }

  VersionTimelineLib.diffVersions = diffVersions;
  VersionTimelineLib.buildManifest = buildManifest;
  VersionTimelineLib.schemaDiff = schemaDiff;
  VersionTimelineLib.rowDiff = rowDiff;
})(typeof window !== "undefined" ? window : globalThis);
