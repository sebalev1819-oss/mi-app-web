const express = require('express');
const app = express();
const puerto = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(puerto, '0.0.0.0', () => {
  console.log('Servidor funcionando en puerto ' + puerto);
});
