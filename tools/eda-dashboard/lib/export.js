/* Classic script — commercial-grade EDA export helpers (window.EdaLib).
 * Supports:
 *   1. JSON summary & Markdown findings
 *   2. Executable Jupyter Notebook (.ipynb) with embedded Pandas / Seaborn profiling
 *   3. Standalone Python EDA profiling script
 */
(function (global) {
  "use strict";
  const EdaLib = global.EdaLib || (global.EdaLib = {});

  function download(filename, text, mime) {
    const blob = new Blob([text], { type: mime || "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function buildSummary(session) {
    const rows = session.viewRows || session.rows || [];
    const columns = session.columns || [];
    const schema = EdaLib.schemaTable(rows, columns);
    const numericStats = {};
    columns.forEach(function (c) {
      if (EdaLib.isNumericColumn(rows, c)) {
        numericStats[c] = EdaLib.columnStats(rows, c);
      }
    });
    return {
      format: "eda-summary",
      version: 1,
      source: session.source || "session",
      exportedAt: new Date().toISOString(),
      bookAnchors: session.bookAnchors || [],
      rowCount: rows.length,
      columnCount: columns.length,
      filterActive: !!(session.filters && session.filters.length),
      schema: schema,
      numericStats: numericStats,
      missing: EdaLib.missingProfile(rows, columns),
      correlation: EdaLib.correlationMatrix(rows, columns),
      issues: EdaLib.issueSummary(rows, columns),
    };
  }

  function buildFindingsMd(session, findingsText) {
    const summary = buildSummary(session);
    const lines = [];
    lines.push("# EDA findings");
    lines.push("");
    lines.push("- **Source:** " + (summary.source || ""));
    lines.push("- **Exported:** " + summary.exportedAt);
    lines.push("- **Rows × cols:** " + summary.rowCount + " × " + summary.columnCount);
    if (summary.bookAnchors && summary.bookAnchors.length) {
      lines.push("- **Book anchors:** " + summary.bookAnchors.join(", "));
    }
    lines.push("");
    lines.push("## Learner notes");
    lines.push("");
    lines.push(findingsText && findingsText.trim() ? findingsText.trim() : "_No notes yet._");
    lines.push("");
    lines.push("## Missingness");
    lines.push("");
    if (!summary.missing.length) {
      lines.push("No missing values detected in the current view.");
    } else {
      summary.missing.forEach(function (m) {
        lines.push(
          "- `" + m.column + "`: " + m.missing + " missing (" + m.missingPct + "%)"
        );
      });
    }
    lines.push("");
    lines.push("## Top Pearson correlations");
    lines.push("");
    const corr = summary.correlation;
    const pairs = [];
    if (corr && corr.columns) {
      for (let i = 0; i < corr.columns.length; i += 1) {
        for (let j = i + 1; j < corr.columns.length; j += 1) {
          const r = corr.matrix[i][j];
          if (r != null) {
            pairs.push({ a: corr.columns[i], b: corr.columns[j], r: r });
          }
        }
      }
    }
    pairs.sort(function (a, b) {
      return Math.abs(b.r) - Math.abs(a.r);
    });
    if (!pairs.length) {
      lines.push("Not enough numeric pairs for correlation.");
    } else {
      pairs.slice(0, 5).forEach(function (p) {
        lines.push("- `" + p.a + "` ↔ `" + p.b + "`: r = " + p.r);
      });
    }
    lines.push("");
    lines.push("## Issue checklist (Ch.6 §6.4 → repair in Ch.5)");
    lines.push("");
    const iss = summary.issues;
    lines.push("- Duplicate rows (extras): " + iss.duplicates);
    lines.push("- Inconsistency groups: " + iss.inconsistencies.length);
    lines.push("- Numeric columns with IQR outliers: " + iss.outliers.length);
    lines.push("");
    lines.push(
      "_Correlation is not causation — treat strong r as a hypothesis, not a claim (Ch.6)._"
    );
    lines.push("");
    return lines.join("\n");
  }

  function rowsToCsv(rows, columns) {
    if (!rows || !rows.length || !columns || !columns.length) return "";
    const lines = [columns.join(",")];
    rows.forEach(function (r) {
      const line = columns.map(function (c) {
        let val = r[c];
        if (val == null) return "";
        val = String(val);
        if (/[",\n\r]/.test(val)) return '"' + val.replace(/"/g, '""') + '"';
        return val;
      }).join(",");
      lines.push(line);
    });
    return lines.join("\n");
  }

  function buildJupyterNotebook(session) {
    const rows = session.viewRows || session.rows || [];
    const columns = session.columns || [];
    const csvContent = rowsToCsv(rows.slice(0, 1000), columns);

    const nb = {
      cells: [
        {
          cell_type: "markdown",
          metadata: {},
          source: [
            "# 📊 Automated Exploratory Data Analysis (EDA) Report\n",
            "**Companion to Chapter 6 — Exploratory Data Analysis & Feature Dynamics**\n",
            `*Source: \`${session.source || "dataset"}\` | Records: ${rows.length} | Features: ${columns.length}*\n`,
            "\n",
            "This reproducible notebook was generated by the **Dataset Fundamentals EDA Workbench**.\n",
            "It executes comprehensive univariate distributions, bivariate correlation heatmaps, missing value profiles, and Tukey IQR outlier fences."
          ]
        },
        {
          cell_type: "code",
          execution_count: null,
          metadata: {},
          outputs: [],
          source: [
            "# 1. Setup & Visual Styling\n",
            "import io\n",
            "import pandas as pd\n",
            "import numpy as np\n",
            "import matplotlib.pyplot as plt\n",
            "import seaborn as sns\n",
            "\n",
            "sns.set_theme(style='whitegrid', palette='muted')\n",
            "plt.rcParams['figure.dpi'] = 140\n",
            "print('Libraries imported successfully.')"
          ]
        },
        {
          cell_type: "code",
          execution_count: null,
          metadata: {},
          outputs: [],
          source: [
            "# 2. Load Dataset into Pandas DataFrame\n",
            `csv_data = \"\"\"${csvContent}\"\"\"\n`,
            "df = pd.read_csv(io.StringIO(csv_data))\n",
            "print(f'DataFrame loaded with shape: {df.shape}')\n",
            "df.head()"
          ]
        },
        {
          cell_type: "code",
          execution_count: null,
          metadata: {},
          outputs: [],
          source: [
            "# 3. Statistical Summary & Metadata\n",
            "print('--- Data Types & Non-Null Counts ---')\n",
            "print(df.info())\n",
            "\n",
            "print('\\n--- Summary Statistics (Numeric) ---')\n",
            "display(df.describe())"
          ]
        },
        {
          cell_type: "code",
          execution_count: null,
          metadata: {},
          outputs: [],
          source: [
            "# 4. Missingness Analysis\n",
            "missing_counts = df.isnull().sum()\n",
            "missing_pct = (missing_counts / len(df)) * 100\n",
            "missing_df = pd.DataFrame({'missing_count': missing_counts, 'pct': missing_pct})\n",
            "missing_df = missing_df[missing_df['missing_count'] > 0].sort_values(by='pct', ascending=False)\n",
            "\n",
            "if len(missing_df) > 0:\n",
            "    plt.figure(figsize=(8, max(3, len(missing_df) * 0.4)))\n",
            "    sns.barplot(x=missing_df['pct'], y=missing_df.index, color='#ef4444')\n",
            "    plt.xlabel('Missing Percentage (%)')\n",
            "    plt.title('Missing Value Profile by Column')\n",
            "    plt.show()\n",
            "else:\n",
            "    print('No missing values found in current view!')"
          ]
        },
        {
          cell_type: "code",
          execution_count: null,
          metadata: {},
          outputs: [],
          source: [
            "# 5. Pearson Correlation Heatmap\n",
            "numeric_df = df.select_dtypes(include=[np.number])\n",
            "if len(numeric_df.columns) > 1:\n",
            "    plt.figure(figsize=(9, 7))\n",
            "    corr = numeric_df.corr()\n",
            "    mask = np.triu(np.ones_like(corr, dtype=bool))\n",
            "    sns.heatmap(corr, mask=mask, annot=True, fmt='.2f', cmap='Blues', vmin=-1, vmax=1, square=True)\n",
            "    plt.title('Covariance & Correlation Heatmap (Lower Triangle)')\n",
            "    plt.show()\n",
            "else:\n",
            "    print('Fewer than 2 numeric features found.')"
          ]
        },
        {
          cell_type: "code",
          execution_count: null,
          metadata: {},
          outputs: [],
          source: [
            "# 6. Feature Distributions (Histograms & KDE)\n",
            "numeric_cols = numeric_df.columns.tolist()[:6]\n",
            "if numeric_cols:\n",
            "    fig, axes = plt.subplots(nrows=(len(numeric_cols)+1)//2, ncols=2, figsize=(12, 3 * ((len(numeric_cols)+1)//2)))\n",
            "    axes = axes.flatten()\n",
            "    for idx, col in enumerate(numeric_cols):\n",
            "        sns.histplot(df[col].dropna(), kde=True, ax=axes[idx], color='#2563eb')\n",
            "        axes[idx].set_title(f'Distribution: {col}')\n",
            "    plt.tight_layout()\n",
            "    plt.show()"
          ]
        },
        {
          cell_type: "code",
          execution_count: null,
          metadata: {},
          outputs: [],
          source: [
            "# 7. Outlier Detection via Tukey IQR Fences\n",
            "for col in numeric_df.columns[:4]:\n",
            "    s = df[col].dropna()\n",
            "    q25, q75 = s.quantile(0.25), s.quantile(0.75)\n",
            "    iqr = q75 - q25\n",
            "    lower, upper = q25 - 1.5 * iqr, q75 + 1.5 * iqr\n",
            "    outliers = s[(s < lower) | (s > upper)]\n",
            "    print(f'Column \"{col}\": {len(outliers)} outliers outside [{lower:.2f}, {upper:.2f}] (IQR={iqr:.2f})')"
          ]
        }
      ],
      metadata: {
        language_info: { name: "python" },
        kernelspec: { display_name: "Python 3", language: "python", name: "python3" }
      },
      nbformat: 4,
      nbformat_minor: 2
    };

    return JSON.stringify(nb, null, 2);
  }

  function buildPythonScript(session) {
    return `# Automated Exploratory Data Analysis Script
# Companion code for Chapter 6 — Fundamental of Dataset
# Usage:
#   pip install pandas numpy matplotlib seaborn
#   python run_eda.py

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Set visual style
sns.set_theme(style="whitegrid", palette="muted")

def profile_dataset(filepath="data.csv"):
    df = pd.read_csv(filepath)
    print(f"Loaded {len(df)} rows and {len(df.columns)} columns.")
    
    # Missingness
    missing = df.isnull().sum()
    print("\\n--- Missing Values ---")
    print(missing[missing > 0])
    
    # Numeric Summary
    num_df = df.select_dtypes(include=[np.number])
    print("\\n--- Descriptive Statistics ---")
    print(num_df.describe())
    
    # Correlation Heatmap
    if len(num_df.columns) > 1:
        plt.figure(figsize=(8, 6))
        sns.heatmap(num_df.corr(), annot=True, fmt=".2f", cmap="Blues")
        plt.title("Correlation Matrix")
        plt.tight_layout()
        plt.savefig("eda_correlation_matrix.png")
        print("Saved eda_correlation_matrix.png")
        
    print("EDA profiling complete.")

if __name__ == "__main__":
    profile_dataset()
`;
  }

  EdaLib.download = download;
  EdaLib.buildSummary = buildSummary;
  EdaLib.buildFindingsMd = buildFindingsMd;
  EdaLib.buildJupyterNotebook = buildJupyterNotebook;
  EdaLib.buildPythonScript = buildPythonScript;

  EdaLib.downloadSummary = function (session) {
    download("eda-summary.json", JSON.stringify(buildSummary(session), null, 2), "application/json");
  };

  EdaLib.downloadFindings = function (session, findingsText) {
    download("eda-findings.md", buildFindingsMd(session, findingsText), "text/markdown");
  };

  EdaLib.downloadJupyterNotebook = function (session) {
    download("eda_report.ipynb", buildJupyterNotebook(session), "application/x-ipynb+json");
  };

  EdaLib.downloadPythonScript = function (session) {
    download("run_eda_analysis.py", buildPythonScript(session), "text/x-python");
  };

})(typeof window !== "undefined" ? window : globalThis);
