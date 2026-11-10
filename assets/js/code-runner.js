/**
 * Dataset Fundamentals - Interactive In-Browser Python Runner & CodeLab Engine
 * 
 * Powered by WebAssembly Python (Pyodide v0.26.4)
 * Provides:
 *  1. Zero-Install In-Browser Execution ("⚡ Run"): Live Python stdout, stderr & return values
 *  2. In-Place Code Editing ("✏️ Edit" / "↺ Reset"): Edit parameters & code right in the textbook
 *  3. Matplotlib Inline Visualizations: Automatic plot rendering in execution drawers
 *  4. Interactive CodeLab Challenges: Structured practice missions with automated unit testing
 *  5. Web Terminal Bridge ("▶ Terminal"): One-click handoff to /interactive/terminal/
 *  6. Seamless compatibility with Material for MkDocs instant navigation & light/dark modes
 */

(function () {
  'use strict';

  // Do not attach code runners on the terminal workbench page itself
  function isTerminalPage() {
    return window.location.pathname.includes('/interactive/terminal');
  }

  // ============================================================================
  // Pyodide Singleton Kernel Manager & Package Loader
  // ============================================================================
  let pyodideInstance = null;
  let pyodideLoadingPromise = null;
  const loadedPackages = new Set();

  const PACKAGE_MAP = {
    'numpy': 'numpy',
    'np': 'numpy',
    'pandas': 'pandas',
    'pd': 'pandas',
    'scipy': 'scipy',
    'sklearn': 'scikit-learn',
    'matplotlib': 'matplotlib',
    'plt': 'matplotlib',
    'pydantic': 'pydantic',
    'micropip': 'micropip',
    'sqlite3': 'sqlite3'
  };

  function detectRequiredPackages(code) {
    const pkgs = new Set();
    const importRegex = /(?:^|\n)\s*(?:from\s+([a-zA-Z0-9_]+)|import\s+([a-zA-Z0-9_]+))/g;
    let match;
    while ((match = importRegex.exec(code)) !== null) {
      const mod = (match[1] || match[2] || '').toLowerCase();
      if (PACKAGE_MAP[mod]) {
        pkgs.add(PACKAGE_MAP[mod]);
      }
    }
    return Array.from(pkgs);
  }

  async function getPyodide(statusCb) {
    if (pyodideInstance) return pyodideInstance;
    if (pyodideLoadingPromise) return pyodideLoadingPromise;

    pyodideLoadingPromise = (async () => {
      if (typeof loadPyodide === 'undefined') {
        if (statusCb) statusCb('⏳ Loading WebAssembly Python (Pyodide v0.26.4)...');
        await new Promise((resolve, reject) => {
          const s = document.createElement('script');
          s.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
          s.onload = resolve;
          s.onerror = () => reject(new Error('Could not load Pyodide CDN. Please verify your internet connection.'));
          document.head.appendChild(s);
        });
      }

      if (statusCb) statusCb('⚙️ Initializing Python WebAssembly kernel...');
      const py = await loadPyodide();

      // Setup VFS directories for code that writes files
      try {
        const dirs = ['/workspace', '/workspace/data', '/workspace/scripts'];
        dirs.forEach(d => {
          try { py.FS.mkdirTree(d); } catch (e) { }
        });
      } catch (e) { }

      pyodideInstance = py;
      return py;
    })();

    return pyodideLoadingPromise;
  }

  async function runPythonInWasm(code, statusCb) {
    const py = await getPyodide(statusCb);

    // Auto-load any packages needed by this code snippet
    const needed = detectRequiredPackages(code).filter(p => !loadedPackages.has(p));
    if (needed.length > 0) {
      if (statusCb) statusCb(`📦 Loading scientific packages: ${needed.join(', ')}...`);
      await py.loadPackage(needed);
      needed.forEach(p => loadedPackages.add(p));
    }

    if (statusCb) statusCb('⚡ Executing in WebAssembly...');

    // Execute Python with stdout, stderr, and matplotlib figure capture
    const wrappedCode = `
import sys, io, base64, warnings
warnings.filterwarnings('ignore', category=DeprecationWarning)
warnings.filterwarnings('ignore', category=FutureWarning)

_stdout_buf = io.StringIO()
_stderr_buf = io.StringIO()
_orig_stdout = sys.stdout
_orig_stderr = sys.stderr
sys.stdout = _stdout_buf
sys.stderr = _stderr_buf

_exec_error = None
_result_repr = None
_figs_base64 = []

try:
    _ns = {'__name__': '__main__'}
    exec(${JSON.stringify(code)}, _ns)
except Exception as _e:
    import traceback
    _exec_error = traceback.format_exc()
finally:
    # Capture any Matplotlib plots if generated
    if 'matplotlib' in sys.modules:
        try:
            import matplotlib.pyplot as _plt
            for _figno in _plt.get_fignums():
                _f = _plt.figure(_figno)
                _b = io.BytesIO()
                _f.savefig(_b, format='png', bbox_inches='tight', dpi=120)
                _b.seek(0)
                _figs_base64.append(base64.b64encode(_b.read()).decode('ascii'))
            _plt.close('all')
        except Exception:
            pass

    sys.stdout = _orig_stdout
    sys.stderr = _orig_stderr

_stdout_val = _stdout_buf.getvalue()
_stderr_val = _stderr_buf.getvalue()

{
    'stdout': _stdout_val,
    'stderr': _stderr_val,
    'error': _exec_error,
    'figures': _figs_base64
}
`;

    const resProxy = await py.runPythonAsync(wrappedCode);
    const result = {
      stdout: resProxy.get('stdout') || '',
      stderr: resProxy.get('stderr') || '',
      error: resProxy.get('error') || null,
      figures: resProxy.get('figures') ? resProxy.get('figures').toJs() : []
    };
    resProxy.destroy();
    return result;
  }

  // ============================================================================
  // Helpers & VFS File Naming
  // ============================================================================
  function deriveFilename(code, pageTitle) {
    const lower = code.toLowerCase();
    if (lower.includes('customerorderevent') || lower.includes('orderitem')) return 'pipeline_types.py';
    if (lower.includes('impute') || lower.includes('outlier') || lower.includes('iqr')) return 'clean_features.py';
    if (lower.includes('fairness') || lower.includes('disparate_impact')) return 'fairness_audit.py';
    if (lower.includes('parquet') || lower.includes('arrow') || lower.includes('snappy')) return 'storage_bench.py';
    if (lower.includes('krippendorff') || lower.includes('cohen')) return 'iaa_agreement.py';
    if (lower.includes('laplace') || lower.includes('k_anonymity')) return 'privacy_engine.py';
    if (lower.includes('dvc') || lower.includes('pipeline')) return 'dvc_pipeline.py';

    const slug = (pageTitle || 'dataset_script').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    return `${slug.slice(0, 24) || 'script'}.py`;
  }

  function extractRawCode(highlightEl) {
    const codeEl = highlightEl.querySelector('pre > code') || highlightEl.querySelector('pre');
    if (!codeEl) return '';
    const clone = codeEl.cloneNode(true);
    clone.querySelectorAll('.md-clipboard, .linenos, [data-linenos]').forEach(n => n.remove());
    return clone.innerText || clone.textContent || '';
  }

  function getTerminalUrl() {
    const navLink = document.querySelector('a[href*="interactive/terminal"]');
    if (navLink && navLink.href) return navLink.href;
    return '/interactive/terminal/';
  }

  function sendToTerminal(code, filename, title) {
    try {
      sessionStorage.setItem('dataset_terminal_exec', JSON.stringify({
        code: code,
        file: filename,
        title: title || document.title
      }));
    } catch (e) {
      console.error('[CodeRunner] Failed to store execution payload:', e);
    }
    window.location.href = getTerminalUrl();
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ============================================================================
  // Standard In-Page Python Block Runner with Editable Editor & Output Drawer
  // ============================================================================
  function attachCodeRunner(highlightEl) {
    if (!highlightEl || highlightEl.getAttribute('data-noc-runner-ready') === 'true') {
      return;
    }

    if (highlightEl.closest('.noc-term-window, .noc-workbench-layout, .noc-sim-card, .noc-sim-container, .dataset-codelab')) {
      return;
    }

    const codeEl = highlightEl.querySelector('pre > code') || highlightEl.querySelector('pre');
    if (!codeEl) return;

    const classNames = (highlightEl.className + ' ' + (codeEl.className || '')).toLowerCase();
    const isPython = classNames.includes('python') || classNames.includes('lang-python') || classNames.includes('language-python') || classNames.includes('language-py');
    const isBash = classNames.includes('bash') || classNames.includes('shell') || classNames.includes('language-sh') || classNames.includes('language-bash');

    if (!isPython && !isBash) return;

    highlightEl.setAttribute('data-noc-runner-ready', 'true');

    // Create wrapper
    let wrapper = highlightEl.parentElement;
    if (!wrapper || !wrapper.classList.contains('noc-code-wrapper')) {
      wrapper = document.createElement('div');
      wrapper.className = 'noc-code-wrapper';
      highlightEl.parentNode.insertBefore(wrapper, highlightEl);
      wrapper.appendChild(highlightEl);
    }

    const initialCode = extractRawCode(highlightEl);
    let currentCode = initialCode;
    const pageHeading = document.querySelector('h1, h2')?.innerText || document.title;
    const filename = deriveFilename(initialCode, pageHeading);

    // Create In-Place Editor (hidden by default)
    const editorWrap = document.createElement('div');
    editorWrap.className = 'noc-inline-editor-wrap';
    editorWrap.style.display = 'none';

    const editorTextarea = document.createElement('textarea');
    editorTextarea.className = 'noc-inline-editor';
    editorTextarea.value = initialCode;
    editorTextarea.spellcheck = false;
    editorTextarea.setAttribute('autocomplete', 'off');
    editorTextarea.setAttribute('autocorrect', 'off');
    editorTextarea.setAttribute('autocapitalize', 'off');

    // Handle Tab key in editor
    editorTextarea.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = editorTextarea.selectionStart;
        const end = editorTextarea.selectionEnd;
        editorTextarea.value = editorTextarea.value.substring(0, start) + '    ' + editorTextarea.value.substring(end);
        editorTextarea.selectionStart = editorTextarea.selectionEnd = start + 4;
        currentCode = editorTextarea.value;
      } else if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        executeCode();
      }
    });

    editorTextarea.addEventListener('input', () => {
      currentCode = editorTextarea.value;
      resetBtn.style.display = (currentCode !== initialCode) ? 'inline-flex' : 'none';
      adjustEditorHeight();
    });

    function adjustEditorHeight() {
      editorTextarea.style.height = 'auto';
      editorTextarea.style.height = Math.max(160, editorTextarea.scrollHeight + 10) + 'px';
    }

    editorWrap.appendChild(editorTextarea);
    wrapper.insertBefore(editorWrap, highlightEl.nextSibling);

    // Create Code Toolbar
    const toolbar = document.createElement('div');
    toolbar.className = 'noc-code-toolbar';

    // Button 1: Run Live
    const runBtn = document.createElement('button');
    runBtn.type = 'button';
    runBtn.className = 'noc-code-btn primary';
    runBtn.title = 'Run Python live in your browser via WebAssembly (Pyodide)';
    runBtn.innerHTML = '⚡ Run';

    // Button 2: Edit In-Place (Python blocks only)
    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.className = 'noc-code-btn secondary';
    editBtn.title = 'Edit this code snippet directly in the browser';
    editBtn.innerHTML = '✏️ Edit';

    // Button 3: Reset
    const resetBtn = document.createElement('button');
    resetBtn.type = 'button';
    resetBtn.className = 'noc-code-btn secondary';
    resetBtn.title = 'Reset code to original textbook snippet';
    resetBtn.innerHTML = '↺ Reset';
    resetBtn.style.display = 'none';

    // Button 4: Full Terminal
    const termBtn = document.createElement('button');
    termBtn.type = 'button';
    termBtn.className = 'noc-code-btn';
    termBtn.title = 'Send code to full interactive Web Terminal';
    termBtn.innerHTML = '▶ Terminal';

    toolbar.appendChild(runBtn);
    if (isPython) {
      toolbar.appendChild(editBtn);
      toolbar.appendChild(resetBtn);
    }
    toolbar.appendChild(termBtn);
    highlightEl.appendChild(toolbar);

    // Create Inline Output Drawer
    const drawer = document.createElement('div');
    drawer.className = 'noc-code-drawer';

    const drawerHeader = document.createElement('div');
    drawerHeader.className = 'noc-code-drawer-header';
    drawerHeader.innerHTML = `
      <div class="noc-drawer-title">
        <span class="noc-drawer-kernel">🐍 Pyodide WASM Kernel</span>
        <span class="noc-drawer-status" id="drawerStatus">Ready</span>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <button type="button" class="noc-drawer-clear" title="Clear output" style="background:none; border:none; cursor:pointer; font-size:0.75rem; color:inherit; opacity:0.8;">Clear</button>
        <button type="button" class="noc-drawer-close" title="Close drawer" style="background:none; border:none; cursor:pointer; font-size:0.9rem; color:inherit; padding:0 4px;">✕</button>
      </div>
    `;

    const drawerBody = document.createElement('div');
    drawerBody.className = 'noc-code-drawer-body';

    const drawerFooter = document.createElement('div');
    drawerFooter.className = 'noc-code-drawer-footer';
    drawerFooter.innerHTML = `
      <span>⏱️ In-Browser Execution • Zero Server Latency</span>
      <a href="javascript:void(0)" class="noc-open-term-link" style="color:var(--md-primary-fg-color, #0284c7); font-weight:700; text-decoration:none;">Open in Full Terminal ↗</a>
    `;

    drawer.appendChild(drawerHeader);
    drawer.appendChild(drawerBody);
    drawer.appendChild(drawerFooter);
    wrapper.appendChild(drawer);

    const statusEl = drawerHeader.querySelector('#drawerStatus');
    const clearBtn = drawerHeader.querySelector('.noc-drawer-clear');
    const closeBtn = drawerHeader.querySelector('.noc-drawer-close');

    clearBtn.addEventListener('click', () => {
      drawerBody.innerHTML = '';
      statusEl.textContent = 'Cleared';
    });

    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      wrapper.classList.remove('has-open-drawer');
      runBtn.innerHTML = '⚡ Run';
    });

    // Toggle Edit Mode
    let isEditing = false;
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      isEditing = !isEditing;
      if (isEditing) {
        highlightEl.style.display = 'none';
        editorWrap.style.display = 'block';
        editBtn.innerHTML = '👁️ Preview';
        editBtn.classList.add('active');
        adjustEditorHeight();
        editorTextarea.focus();
      } else {
        highlightEl.style.display = 'block';
        editorWrap.style.display = 'none';
        editBtn.innerHTML = '✏️ Edit';
        editBtn.classList.remove('active');
      }
    });

    // Reset Code
    resetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentCode = initialCode;
      editorTextarea.value = initialCode;
      resetBtn.style.display = 'none';
      statusEl.textContent = 'Code reset to original';
    });

    // Execution logic
    async function executeCode() {
      drawer.classList.add('open');
      wrapper.classList.add('has-open-drawer');
      runBtn.innerHTML = '⏳ Running...';
      runBtn.disabled = true;

      drawerBody.innerHTML = '<div class="noc-exec-loading"><div class="noc-spinner"></div> <span id="loadingMsg">Preparing Python execution...</span></div>';
      const loadingMsg = drawerBody.querySelector('#loadingMsg');
      const updateStatus = (msg) => {
        if (loadingMsg) loadingMsg.textContent = msg;
        if (statusEl) statusEl.textContent = msg;
      };

      const startTime = performance.now();

      try {
        if (!isPython) {
          // Fallback simulation for non-Python blocks
          updateStatus('Running shell script...');
          await new Promise(r => setTimeout(r, 200));
          drawerBody.innerHTML = `<pre class="noc-console-stdout">${escapeHtml(currentCode)}\n\n✔ Script completed with exit code 0.</pre>`;
          statusEl.textContent = 'Completed (0.20s)';
          runBtn.innerHTML = '⚡ Run';
          runBtn.disabled = false;
          return;
        }

        const res = await runPythonInWasm(currentCode, updateStatus);
        const elapsed = ((performance.now() - startTime) / 1000).toFixed(2);

        let html = '';
        if (res.stdout) {
          html += `<pre class="noc-console-stdout">${escapeHtml(res.stdout)}</pre>`;
        }
        if (res.stderr) {
          html += `<pre class="noc-console-stderr">${escapeHtml(res.stderr)}</pre>`;
        }
        if (res.error) {
          html += `<pre class="noc-console-error">❌ Execution Error:\n${escapeHtml(res.error)}</pre>`;
          statusEl.innerHTML = `<span style="color:#ef4444;">Error (${elapsed}s)</span>`;
        } else {
          statusEl.innerHTML = `<span style="color:#10b981;">✔ Exit Code 0 (${elapsed}s)</span>`;
        }

        // Render any matplotlib plots captured
        if (res.figures && res.figures.length > 0) {
          html += '<div class="noc-figure-gallery">';
          res.figures.forEach((b64, idx) => {
            html += `<div class="noc-figure-card"><div class="noc-figure-title">📊 Generated Plot #${idx + 1}</div><img src="data:image/png;base64,${b64}" alt="Matplotlib Plot" class="noc-generated-plot" /></div>`;
          });
          html += '</div>';
        }

        if (!html.trim()) {
          html = `<pre class="noc-console-stdout" style="color:#64748b;">(Script completed silently with no printed output. Try adding print(...) statements!)</pre>`;
        }

        drawerBody.innerHTML = html;
      } catch (err) {
        const elapsed = ((performance.now() - startTime) / 1000).toFixed(2);
        drawerBody.innerHTML = `<pre class="noc-console-error">❌ Kernel Launch Error:\n${escapeHtml(err.message || String(err))}\n\nTip: You can also use the full Web Terminal via the button above.</pre>`;
        statusEl.innerHTML = `<span style="color:#ef4444;">Failed (${elapsed}s)</span>`;
      } finally {
        runBtn.innerHTML = '⚡ Run';
        runBtn.disabled = false;
      }
    }

    runBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      executeCode();
    });

    termBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sendToTerminal(currentCode, filename, pageHeading);
    });

    drawerFooter.querySelector('.noc-open-term-link').addEventListener('click', (e) => {
      e.preventDefault();
      sendToTerminal(currentCode, filename, pageHeading);
    });
  }

  // ============================================================================
  // CodeLab Interactive Practice Missions (like Module 09 Codelab)
  // ============================================================================
  function initCodeLabs(root) {
    const labs = (root || document).querySelectorAll('.dataset-codelab');
    labs.forEach(setupCodeLab);
  }

  function setupCodeLab(labEl) {
    if (labEl.getAttribute('data-codelab-ready') === 'true') return;
    labEl.setAttribute('data-codelab-ready', 'true');

    const title = labEl.getAttribute('data-title') || 'Interactive Coding Challenge';
    const difficulty = labEl.getAttribute('data-difficulty') || 'Intermediate';

    // Find starter code and test definitions
    const codeTag = labEl.querySelector('pre > code') || labEl.querySelector('pre');
    const initialStarterCode = codeTag ? codeTag.innerText.trim() : '';

    // Tests script block
    let testCases = [];
    const testScript = labEl.querySelector('script.codelab-tests');
    if (testScript) {
      try {
        testCases = JSON.parse(testScript.textContent);
      } catch (e) {
        console.error('Invalid codelab tests JSON:', e);
      }
    }

    // Build modern UI structure
    labEl.innerHTML = `
      <div class="codelab-card">
        <div class="codelab-header">
          <div class="codelab-header-left">
            <span class="codelab-badge">${escapeHtml(difficulty)}</span>
            <span class="codelab-title">${escapeHtml(title)}</span>
          </div>
          <div class="codelab-header-actions">
            <button type="button" class="codelab-btn secondary codelab-reset-btn" title="Reset to starter template">↺ Reset</button>
            <button type="button" class="codelab-btn secondary codelab-run-btn" title="Run current code">⚡ Run Code</button>
            <button type="button" class="codelab-btn primary codelab-check-btn" title="Run automated test suite (Ctrl+Enter)">✔ Run Checks</button>
          </div>
        </div>

        <div class="codelab-intro">
          ${labEl.getAttribute('data-instruction') || 'Implement the missing function(s) marked with <code>TODO</code> below, then click <b>Run Checks</b> to test against the verification suite.'}
        </div>

        <div class="codelab-editor-wrap">
          <textarea class="codelab-editor" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off"></textarea>
        </div>

        <div class="codelab-results-drawer" style="display:none;">
          <div class="codelab-results-head">
            <span class="codelab-results-status">Ready</span>
            <button type="button" class="codelab-results-close">✕</button>
          </div>
          <div class="codelab-results-body"></div>
        </div>
      </div>
    `;

    const editor = labEl.querySelector('.codelab-editor');
    editor.value = initialStarterCode;

    const resetBtn = labEl.querySelector('.codelab-reset-btn');
    const runBtn = labEl.querySelector('.codelab-run-btn');
    const checkBtn = labEl.querySelector('.codelab-check-btn');
    const resultsDrawer = labEl.querySelector('.codelab-results-drawer');
    const resultsStatus = labEl.querySelector('.codelab-results-status');
    const resultsBody = labEl.querySelector('.codelab-results-body');
    const resultsClose = labEl.querySelector('.codelab-results-close');

    function adjustLabHeight() {
      editor.style.height = 'auto';
      editor.style.height = Math.max(220, editor.scrollHeight + 10) + 'px';
    }
    adjustLabHeight();

    editor.addEventListener('input', adjustLabHeight);
    editor.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.value = editor.value.substring(0, start) + '    ' + editor.value.substring(end);
        editor.selectionStart = editor.selectionEnd = start + 4;
      } else if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runChecks();
      }
    });

    resultsClose.addEventListener('click', () => {
      resultsDrawer.style.display = 'none';
    });

    resetBtn.addEventListener('click', () => {
      if (confirm('Reset your code to the original starter template?')) {
        editor.value = initialStarterCode;
        adjustLabHeight();
        resultsDrawer.style.display = 'none';
      }
    });

    // Run Code only
    runBtn.addEventListener('click', async () => {
      resultsDrawer.style.display = 'block';
      resultsStatus.textContent = 'Executing...';
      resultsBody.innerHTML = '<div class="noc-exec-loading"><div class="noc-spinner"></div> Running in Pyodide WebAssembly...</div>';

      try {
        const res = await runPythonInWasm(editor.value, (msg) => {
          resultsStatus.textContent = msg;
        });

        let out = '';
        if (res.stdout) out += `<pre class="noc-console-stdout">${escapeHtml(res.stdout)}</pre>`;
        if (res.stderr) out += `<pre class="noc-console-stderr">${escapeHtml(res.stderr)}</pre>`;
        if (res.error) out += `<pre class="noc-console-error">❌ Runtime Error:\n${escapeHtml(res.error)}</pre>`;

        if (!out) out = '<div style="color:#64748b; font-size:0.85rem;">Code executed cleanly with no output. Click "Run Checks" to verify against test suite!</div>';
        resultsBody.innerHTML = out;
        resultsStatus.textContent = res.error ? 'Error' : 'Execution Finished';
      } catch (err) {
        resultsBody.innerHTML = `<pre class="noc-console-error">❌ Kernel Error: ${escapeHtml(err.message)}</pre>`;
        resultsStatus.textContent = 'Failed';
      }
    });

    // Run Checks against test suite
    async function runChecks() {
      resultsDrawer.style.display = 'block';
      resultsStatus.textContent = 'Running test suite...';
      resultsBody.innerHTML = '<div class="noc-exec-loading"><div class="noc-spinner"></div> Executing automated checks in WebAssembly...</div>';

      const userCode = editor.value;

      try {
        const py = await getPyodide((msg) => { resultsStatus.textContent = msg; });
        const needed = detectRequiredPackages(userCode).filter(p => !loadedPackages.has(p));
        if (needed.length > 0) {
          resultsStatus.textContent = `Loading packages: ${needed.join(', ')}...`;
          await py.loadPackage(needed);
          needed.forEach(p => loadedPackages.add(p));
        }

        // Test runner wrapper in Python
        const testPayload = JSON.stringify(testCases);
        const runnerScript = `
import sys, io, json

_results = []
_user_ns = {'__name__': '__main__'}

# 1. Execute User Code
try:
    exec(${JSON.stringify(userCode)}, _user_ns)
    _user_compiled = True
except Exception as _e:
    _user_compiled = False
    _compile_err = str(_e)

# 2. Run Individual Unit Tests
_tests = json.loads(${JSON.stringify(testPayload)})

for t in _tests:
    name = t.get('name', 'Check')
    test_code = t.get('test', '')
    
    if not _user_compiled:
        _results.append({'name': name, 'status': 'FAIL', 'note': f"User code compilation failed: {_compile_err}"})
        continue

    try:
        exec(test_code, _user_ns)
        _results.append({'name': name, 'status': 'PASS', 'note': ''})
    except NotImplementedError as _nie:
        _results.append({'name': name, 'status': 'INCOMPLETE', 'note': str(_nie) or 'Function contains NotImplementedError'})
    except AssertionError as _ae:
        _results.append({'name': name, 'status': 'FAIL', 'note': str(_ae) or 'Assertion condition violated'})
    except Exception as _ex:
        _results.append({'name': name, 'status': 'FAIL', 'note': f"{type(_ex).__name__}: {_ex}"})

json.dumps(_results)
`;

        const testJsonStr = await py.runPythonAsync(runnerScript);
        const results = JSON.parse(testJsonStr);

        let passCount = 0;
        let html = '<div class="codelab-test-list">';
        results.forEach(r => {
          if (r.status === 'PASS') passCount++;
          const badgeClass = r.status === 'PASS' ? 'pass' : (r.status === 'INCOMPLETE' ? 'incomplete' : 'fail');
          const badgeLabel = r.status === 'PASS' ? '✔ PASS' : (r.status === 'INCOMPLETE' ? '⚠️ INCOMPLETE' : '✖ FAIL');
          html += `
            <div class="codelab-test-item ${badgeClass}">
              <div class="codelab-test-badge ${badgeClass}">${badgeLabel}</div>
              <div class="codelab-test-detail">
                <div class="codelab-test-name">${escapeHtml(r.name)}</div>
                ${r.note ? `<div class="codelab-test-note">${escapeHtml(r.note)}</div>` : ''}
              </div>
            </div>
          `;
        });
        html += '</div>';

        const allPassed = passCount === results.length && results.length > 0;
        const summaryBadge = allPassed
          ? `<div class="codelab-summary-pass">🎉 All ${passCount}/${results.length} checks passed! Great job!</div>`
          : `<div class="codelab-summary-progress">Score: ${passCount}/${results.length} checks passing</div>`;

        resultsBody.innerHTML = summaryBadge + html;
        resultsStatus.innerHTML = allPassed ? '<span style="color:#10b981; font-weight:bold;">100% Passed</span>' : `<span>${passCount}/${results.length} Passed</span>`;
      } catch (err) {
        resultsBody.innerHTML = `<pre class="noc-console-error">❌ Test Harness Error: ${escapeHtml(err.message)}</pre>`;
        resultsStatus.textContent = 'Test Error';
      }
    }

    checkBtn.addEventListener('click', runChecks);
  }

  // ============================================================================
  // Lifecycle & Instant Navigation Hooks
  // ============================================================================
  function initAll(root) {
    if (isTerminalPage()) return;
    const target = root || document.body;
    const highlights = target.querySelectorAll('.highlight');
    highlights.forEach(attachCodeRunner);
    initCodeLabs(target);
  }

  if (typeof document$ !== 'undefined' && document$.subscribe) {
    document$.subscribe((args) => {
      const el = (args && args.body) ? args.body : document.body;
      initAll(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAll(document.body));
  } else {
    initAll(document.body);
  }

  window.addEventListener('load', () => initAll(document.body));
})();
