const express = require('express');
const router = express.Router();

const Entrada = require("../controllers/EntradasController");

router.post("/estacionamento/entradas", Entrada.registrarEntrada);
router.get("/estacionamento/entradas", Entrada.listarEntradas);
router.get("/estacionamento/registro", Entrada.mostrarEntradas);
router.get("/estacionamento/entradas/data/:data", Entrada.entradasNaData);
router.put("/estacionamento/entradas/:id_entrada", Entrada.finalizarEntrada);

module.exports = router;