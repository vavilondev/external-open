const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;

// Куда будет финальный редирект
const FINAL_URL = 'https://claritycheck.com/';

// Заголовки, которые помогают Instagram WebView "вылететь" в Safari
const REDIRECT_HEADERS = {
  'Content-Length': '0',
  'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
  'Pragma': 'no-cache',
  'Connection': 'close',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff'
};

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;

  // Первый редирект: на поддомен (или просто другой домен)
  if (path === '/r1') {
    const nextHop = FINAL_URL; // ← обязательно абсолютный URL!
    res.writeHead(302, {
      'Location': nextHop,
      ...REDIRECT_HEADERS
    });
    return res.end();
  }

  // Любой другой путь — просто сообщение
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('OK — use /r1 or /r2 for redirect');
});

server.listen(PORT, () => {
  console.log(`Redirect server running on http://localhost:${PORT}`);
});
