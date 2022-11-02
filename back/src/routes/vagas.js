const express = require('express');
const router = express.Router();

const Vaga = require("../controllers/VagasController");

router.post("/estacionamento/vagas", Vaga.criarVaga);
router.get("/estacionamento/vagas", Vaga.listarVagas);
router.get("/estacionamento/vagas/id/:id_vaga", Vaga.verificarVagaID);
router.get("/estacionamento/vagas/status/:condicao", Vaga.verificarStatus);
router.put("/estacionamento/vagas", Vaga.atualizarStatus);
router.delete("/estacionamento/vagas/:id_vaga", Vaga.deletarVaga);

module.exports = router;