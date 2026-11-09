(function() {
  const root = document.getElementById('api-collector-root');
  if (!root) return;

  // Simulator State
  const state = {
    endpoint: 'sensors',
    pagination: 'cursor',
    batchSize: 20,
    rateLimitCap: 10,
    refillRate: 3, // tokens/sec
    currentTokens: 10,
    errorRate: 0.15, // 15% chance of 429
    backoffStrategy: 'exponential',
    isRunning: false,
    intervalId: null,
    totalRequests: 0,
    successRequests: 0,
    throttledRequests: 0,
    totalRecords: 0,
    cursor: 0,
    collectedData: [],
    logs: []
  };

  // Render Skeleton
  root.innerHTML = `
    <div class="api-container">
      <div class="api-stats-row">
        <div class="api-stat-card">
          <div class="api-stat-val" id="stat-records">0</div>
          <div class="api-stat-label">Harvested Rows</div>
        </div>
        <div class="api-stat-card">
          <div class="api-stat-val" id="stat-reqs">0</div>
          <div class="api-stat-label">API Requests</div>
        </div>
        <div class="api-stat-card">
          <div class="api-stat-val" id="stat-200" style="color: #059669;">0</div>
          <div class="api-stat-label">200 OK</div>
        </div>
        <div class="api-stat-card">
          <div class="api-stat-val" id="stat-429" style="color: #d97706;">0</div>
          <div class="api-stat-label">429 Throttled</div>
        </div>
        <div class="api-stat-card">
          <div class="api-stat-val" id="stat-tokens">10 / 10</div>
          <div class="api-stat-label">Token Bucket Level</div>
          <div class="api-bucket-meter"><div class="api-bucket-fill" id="bucket-fill" style="width: 100%;"></div></div>
        </div>
      </div>

      <div class="api-grid">
        <div class="api-panel">
          <h3>⚙️ Ingestion &amp; Throttling Configuration</h3>
          <div class="api-field">
            <label>API Endpoint &amp; Schema</label>
            <select id="sel-endpoint">
              <option value="sensors">/v1/sensors/telemetry (IoT Timeseries)</option>
              <option value="reviews">/v1/products/reviews (E-Commerce Text)</option>
              <option value="logs">/v1/security/audit-events (Server Logs)</option>
            </select>
          </div>
          <div class="api-field">
            <label>Pagination Strategy</label>
            <select id="sel-pagination">
              <option value="cursor">Cursor-Based (?cursor=eyJhbGci...)</option>
              <option value="offset">Offset-Limit (?offset=N&amp;limit=K)</option>
              <option value="page">Page-Based (?page=N&amp;per_page=K)</option>
            </select>
          </div>
          <div class="api-field">
            <label>Batch Size per Call</label>
            <select id="sel-batch">
              <option value="10">10 records / call</option>
              <option value="20" selected>20 records / call</option>
              <option value="50">50 records / call</option>
            </select>
          </div>
          <div class="api-field">
            <label>Token Bucket Capacity (Max Burst)</label>
            <input type="number" id="inp-capacity" value="10" min="2" max="50">
          </div>
          <div class="api-field">
            <label>Bucket Refill Rate (Tokens / Sec)</label>
            <input type="number" id="inp-refill" value="3" min="1" max="20">
          </div>
          <div class="api-field">
            <label>Client Retry / Backoff Strategy</label>
            <select id="sel-backoff">
              <option value="exponential">Exponential Backoff with Full Jitter</option>
              <option value="constant">Fixed Wait (1000ms)</option>
              <option value="immediate">Immediate Retry (Aggressive)</option>
            </select>
          </div>
          <div class="api-actions">
            <button class="api-btn api-btn-primary" id="btn-fetch-one">⚡ Fetch Single Batch</button>
            <button class="api-btn api-btn-success" id="btn-toggle-auto">▶ Start Auto-Harvest</button>
            <button class="api-btn api-btn-secondary" id="btn-reset">🔄 Reset Buffer</button>
            <button class="api-btn api-btn-secondary" id="btn-export">💾 Download JSON</button>
          </div>
        </div>

        <div class="api-panel" style="display:flex; flex-direction:column; gap:14px;">
          <h3>📡 Real-Time HTTP Protocol &amp; Ingestion Log</h3>
          <div class="api-log-container" id="log-box">
            <div style="color: #94a3b8;">[READY] Simulation initialized. Click 'Fetch Single Batch' or 'Start Auto-Harvest' to poll API...</div>
          </div>

          <h3 style="margin-top: 10px;">📋 Ingested Dataset Preview (Latest Records)</h3>
          <div class="api-table-wrapper" id="table-box">
            <div style="padding: 16px; color: var(--muted); text-align: center;">No records collected yet.</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Refill tokens periodically
  setInterval(() => {
    if (state.currentTokens < state.rateLimitCap) {
      state.currentTokens = Math.min(state.rateLimitCap, state.currentTokens + (state.refillRate / 10));
      updateTokenMeter();
    }
  }, 100);

  function updateTokenMeter() {
    const fill = document.getElementById('bucket-fill');
    const label = document.getElementById('stat-tokens');
    if (!fill || !label) return;
    const pct = Math.max(0, Math.min(100, (state.currentTokens / state.rateLimitCap) * 100));
    fill.style.width = pct + '%';
    label.textContent = `${Math.floor(state.currentTokens)} / ${state.rateLimitCap}`;
  }

  function appendLog(status, method, url, latency, msg) {
    const box = document.getElementById('log-box');
    if (!box) return;
    const now = new Date().toTimeString().split(' ')[0] + '.' + String(new Date().getMilliseconds()).padStart(3, '0');
    const badgeClass = status === 200 ? 'badge-200' : (status === 429 ? 'badge-429' : 'badge-503');
    const entry = document.createElement('div');
    entry.className = 'api-log-entry';
    entry.innerHTML = `
      <span style="color:#64748b;">${now}</span>
      <span class="api-badge ${badgeClass}">${status}</span>
      <span style="color:#38bdf8;">${method}</span>
      <span style="color:#f1f5f9; flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${url}</span>
      <span style="color:#94a3b8;">${latency}ms</span>
      <span style="color:#e2e8f0;">${msg}</span>
    `;
    box.appendChild(entry);
    box.scrollTop = box.scrollHeight;
  }

  function generateRecord(id, endpoint) {
    const now = new Date(Date.now() - (1000 - id) * 1000).toISOString();
    if (endpoint === 'sensors') {
      return {
        id: 'sens_' + id,
        timestamp: now,
        temp_c: (20 + (Math.sin(id) * 8) + (Math.random() * 2)).toFixed(2),
        humidity_pct: (45 + (Math.cos(id) * 15)).toFixed(1),
        voltage: (3.3 - (id * 0.0005)).toFixed(3)
      };
    } else if (endpoint === 'reviews') {
      const sentiments = ['positive', 'neutral', 'negative'];
      return {
        review_id: 'rev_' + id,
        timestamp: now,
        rating: Math.floor(Math.random() * 5) + 1,
        verified: Math.random() > 0.3,
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)]
      };
    } else {
      const methods = ['GET', 'POST', 'PUT', 'DELETE'];
      return {
        audit_id: 'evt_' + id,
        timestamp: now,
        ip: `192.168.1.${(id % 250) + 1}`,
        endpoint: `/api/v1/resource/${id % 20}`,
        status: Math.random() > 0.05 ? 200 : 403
      };
    }
  }

  function updateTable() {
    const box = document.getElementById('table-box');
    if (!box || state.collectedData.length === 0) return;
    const sample = state.collectedData.slice(-8).reverse();
    const headers = Object.keys(sample[0]);

    let html = '<table class="api-table"><thead><tr>';
    headers.forEach(h => html += `<th>${h}</th>`);
    html += '</tr></thead><tbody>';

    sample.forEach(row => {
      html += '<tr>';
      headers.forEach(h => html += `<td>${row[h]}</td>`);
      html += '</tr>';
    });
    html += '</tbody></table>';
    box.innerHTML = html;
  }

  function updateStats() {
    document.getElementById('stat-records').textContent = state.totalRecords;
    document.getElementById('stat-reqs').textContent = state.totalRequests;
    document.getElementById('stat-200').textContent = state.successRequests;
    document.getElementById('stat-429').textContent = state.throttledRequests;
  }

  async function executeApiCall() {
    state.totalRequests++;
    const latency = Math.floor(40 + Math.random() * 120);

    // Build URL based on pagination
    let url = `/v1/${state.endpoint}?`;
    if (state.pagination === 'cursor') {
      url += `cursor=${btoa('cursor_' + state.cursor)}&limit=${state.batchSize}`;
    } else if (state.pagination === 'offset') {
      url += `offset=${state.cursor}&limit=${state.batchSize}`;
    } else {
      const page = Math.floor(state.cursor / state.batchSize) + 1;
      url += `page=${page}&per_page=${state.batchSize}`;
    }

    // Check token bucket
    if (state.currentTokens < 1) {
      state.throttledRequests++;
      updateStats();
      appendLog(429, 'GET', url, latency, 'Rate limited! 0 tokens available in bucket.');
      return false;
    }

    // Deduct token
    state.currentTokens -= 1;
    updateTokenMeter();

    // Check artificial error injection
    if (Math.random() < state.errorRate) {
      state.throttledRequests++;
      updateStats();
      appendLog(429, 'GET', url, latency, 'HTTP 429 Too Many Requests (Retry-After: 1s)');
      return false;
    }

    // Success!
    state.successRequests++;
    const newItems = [];
    for (let i = 0; i < state.batchSize; i++) {
      newItems.push(generateRecord(state.cursor + i + 1, state.endpoint));
    }
    state.cursor += state.batchSize;
    state.totalRecords += state.batchSize;
    state.collectedData.push(...newItems);

    updateStats();
    appendLog(200, 'GET', url, latency, `Ingested ${state.batchSize} records successfully.`);
    updateTable();
    return true;
  }

  // Event Listeners
  document.getElementById('sel-endpoint').addEventListener('change', e => state.endpoint = e.target.value);
  document.getElementById('sel-pagination').addEventListener('change', e => state.pagination = e.target.value);
  document.getElementById('sel-batch').addEventListener('change', e => state.batchSize = parseInt(e.target.value));
  document.getElementById('inp-capacity').addEventListener('change', e => {
    state.rateLimitCap = parseInt(e.target.value) || 10;
    state.currentTokens = Math.min(state.currentTokens, state.rateLimitCap);
    updateTokenMeter();
  });
  document.getElementById('inp-refill').addEventListener('change', e => state.refillRate = parseInt(e.target.value) || 3);
  document.getElementById('sel-backoff').addEventListener('change', e => state.backoffStrategy = e.target.value);

  document.getElementById('btn-fetch-one').addEventListener('click', () => {
    executeApiCall();
  });

  document.getElementById('btn-toggle-auto').addEventListener('click', () => {
    const btn = document.getElementById('btn-toggle-auto');
    if (!state.isRunning) {
      state.isRunning = true;
      btn.textContent = '⏸ Pause Harvesting';
      btn.className = 'api-btn api-btn-secondary';

      let retryCount = 0;
      async function loop() {
        if (!state.isRunning) return;
        const ok = await executeApiCall();
        let waitTime = 400; // Normal rate
        if (!ok) {
          retryCount++;
          if (state.backoffStrategy === 'exponential') {
            const base = 500 * Math.pow(2, Math.min(retryCount, 4));
            waitTime = Math.floor(Math.random() * base); // Full jitter
          } else if (state.backoffStrategy === 'constant') {
            waitTime = 1000;
          } else {
            waitTime = 100; // Immediate
          }
        } else {
          retryCount = 0;
        }
        state.intervalId = setTimeout(loop, waitTime);
      }
      loop();
    } else {
      state.isRunning = false;
      if (state.intervalId) clearTimeout(state.intervalId);
      btn.textContent = '▶ Start Auto-Harvest';
      btn.className = 'api-btn api-btn-success';
    }
  });

  document.getElementById('btn-reset').addEventListener('click', () => {
    if (state.isRunning) {
      document.getElementById('btn-toggle-auto').click();
    }
    state.totalRequests = 0;
    state.successRequests = 0;
    state.throttledRequests = 0;
    state.totalRecords = 0;
    state.cursor = 0;
    state.collectedData = [];
    state.currentTokens = state.rateLimitCap;
    updateStats();
    updateTokenMeter();
    document.getElementById('log-box').innerHTML = '<div style="color: #94a3b8;">[BUFFER RESET] Dataset buffer cleared. Ready.</div>';
    document.getElementById('table-box').innerHTML = '<div style="padding: 16px; color: var(--muted); text-align: center;">No records collected yet.</div>';
  });

  document.getElementById('btn-export').addEventListener('click', () => {
    if (state.collectedData.length === 0) {
      alert('No data collected yet to export.');
      return;
    }
    const blob = new Blob([JSON.stringify(state.collectedData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dataset_${state.endpoint}_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });
})();

