const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/servicos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'servicos.html'));
});

app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'sobre.html'));
});

app.post('/contato', (req, res) => {
  const { nome, email, mensagem } = req.body;
  res.send(`Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});