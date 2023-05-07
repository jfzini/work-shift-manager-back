const express = require('express');
const app = express();
const { getUserController } = require("./src/controller/userShift")

app.get('/:user', (req, res) => {
  getUserController(req, res)
});

app.post('/:user/shift', (req, res) => {
  res.send('work shift')
})

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});