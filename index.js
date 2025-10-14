const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/go', (req, res) => {
  const finalUrl = 'https://claritycheck.com/'; // сюда твоя финальная ссылка
  res.redirect(302, finalUrl);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
