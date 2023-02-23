const express = require('express');
const app = express();

// req y res SIEMPRE tiene que tener ese orden.
app.get('/', function (req, res) {
  res.send('Hello World')
});

// dice al servidor que hay un cliente escuchando en el puerto 3000
app.listen(3000);

// Detener el servidor con ctrl + c