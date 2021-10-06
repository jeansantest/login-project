const express = require('express');

const PORT = 5000;
const app = express();
app.use(express.json());

const teste = [];

app.post('/teste', (req, res) => {
  const { login, password } = req.body;
  teste.push({ login, password });
  res.status(200).json(teste);
});

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
