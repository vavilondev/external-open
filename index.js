// index-express.js
const express = require('express');
const app = express();
const FINAL = 'https://claritycheck.com/';

app.get('/r1', (req, res) => {
  res.set({
    'Content-Length': '0',
    'Cache-Control': 'no-store',
    'Pragma': 'no-cache',
    'Connection': 'close'
  });
  return res.redirect(302, `/r2`);
});

app.get('/r2', (req, res) => {
  res.set({
    'Content-Length': '0',
    'Cache-Control': 'no-store',
    'Pragma': 'no-cache',
    'Connection': 'close'
  });
  return res.redirect(302, FINAL);
});

app.get('/', (req, res) => res.send('ok'));
app.listen(process.env.PORT || 3000);
