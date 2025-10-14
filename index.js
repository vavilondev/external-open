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
        window.location.href = 'x-safari-${TARGET}';
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
