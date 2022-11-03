const express = require('express');
const router = express.Router();

const Vaga = require("../controllers/VagasController");

router.post("/estacionamento/vagas", Vaga.criarVaga);
router.get("/estacionamento/vagas", Vaga.listarVagas);
router.delete("/estacionamento/vagas/:id_vaga", Vaga.deletarVaga);

module.exports = router;