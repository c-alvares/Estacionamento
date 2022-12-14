require('dotenv').config();
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const clientes = require('./src/routes/clientes')
const carros = require('./src/routes/carros')
const entradas = require('./src/routes/entradas')

const app = express()
    .use(express.json())
    .use(cors())
    .use(carros)
    .use(clientes)
    .use(entradas)

app.listen(PORT, () => {
    console.log('Servido em execução na porta ' + PORT);
});