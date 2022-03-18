const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => console.log(`[server] Server started at http://localhost:${PORT}`));