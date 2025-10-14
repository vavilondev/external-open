// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// финальный URL — тот, куда нужно отправить
const FINAL_URL = 'https://claritycheck.com/';

// 🔹 1-й редирект: на поддомен (если он у тебя есть)
app.get('/r1', (req, res) => {
  res.set({
    'Content-Length': '0',
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
    'Pragma': 'no-cache',
    'Connection': 'close',
    'Referrer-Policy': 'no-referrer',
    'X-Content-Type-Options': 'nosniff'
  });

  // если у тебя нет поддомена — можно сразу на /r2
  res.redirect(302, '/r2');
});

// 🔹 2-й редирект: финальный переход (может вытолкнуть Safari)
app.get('/r2', (req, res) => {
  res.set({
    'Content-Length': '0',
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
    'Pragma': 'no-cache',
    'Connection': 'close',
    'Referrer-Policy': 'no-referrer',
    'X-Content-Type-Options': 'nosniff'
  });
  res.redirect(302, FINAL_URL);
});

// корневой путь (для проверки)
app.get('/', (_, res) => res.send('OK — use /r1 to redirect'));

app.listen(PORT, () => console.log(`Redirect server running on port ${PORT}`));
