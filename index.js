// index.js - minimal server that serves a page which alerts UA/platform and then tries x-safari-... redirect
const http = require('http');

const PORT = process.env.PORT || 3000;
const TARGET = 'https://claritycheck.com/';

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Test x-safari redirect</title>
  <style>body{font-family:system-ui,-apple-system,Arial;margin:40px;color:#111}</style>
</head>
<body>
  <h2>Test: alert UA & platform, then attempt x-safari redirect</h2>
  <p>If nothing happens automatically, press the "Open" button below.</p>
  <button id="openBtn">Open in external</button>

  <script>
    (function() {
      // show UA and platform in alerts (as requested)
      try {
      } catch (e) {
        console.error(e);
      }

      // helper to build scheme and attempt navigation
      function attemptXSafari(targetUrl) {
        try {
          // scheme as requested
          const scheme = 'x-safari-' + encodeURIComponent(targetUrl);
          // try setting location.href to the custom scheme
          window.location.href = scheme;
        } catch (err) {
          console.error('redirect error', err);
        }
      }

      // attempt automatic redirect after a short delay so alerts are seen
      setTimeout(function(){
        attemptXSafari('${TARGET}');
      }, 500);

      // button fallback for manual trigger
      document.getElementById('openBtn').addEventListener('click', function(){
        attemptXSafari('${TARGET}');
      }, false);
    })();
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  // serve the HTML on any path
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'
  });
  res.end(html);
});

server.listen(PORT, () => {
  console.log('Simple test server listening on http://localhost:' + PORT);
  console.log('Open this URL in Instagram (or any browser) to test.');
});
