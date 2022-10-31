const express = require('express');
const router = express.Router();

const Carro = require("../controllers/CarrosController");

router.post("/estacionamento/carros", Carro.criarCarro);
router.get("/estacionamento/carros", Carro.listarCarros);
router.get("/estacionamento/carros/:placa", Carro.listarCarro);
router.get("/estacionamento/carros/nome/:modelo", Carro.buscarModelo);
router.get("/estacionamento/carros/data/:cor", Carro.buscarCor);
router.get("/estacionamento/carros/data/:cpf", Carro.buscarCpf);
router.put("/estacionamento/carros", Carro.alterarCadastro);
router.delete("/estacionamento/carros/:placa", Carro.excluirCadastro);

module.exports = router;