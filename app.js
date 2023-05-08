const express = require('express');
const app = express();
const { getUserController, updateUserController } = require('./src/controller/userShift');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());

app.get('/:user', (req, res) => {
  getUserController(req, res);
});

app.post('/:user/shift', (req, res) => {
  updateUserController(req, res);
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
