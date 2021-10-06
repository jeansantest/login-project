const express = require('express');
const cors = require('cors');

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());

const users = [
  {
    id: 1,
    email: 'admin@gmail.com',
    username: 'admin',
    password: 'admin',
    permission: 1,
  },
];

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.post('/users', (req, res) => {
  const { email, username, password } = req.body;
  users.push({
    id: users.length + 1,
    email,
    username,
    password,
    permission: 0,
  });
  res.status(200).json(users);
});

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
