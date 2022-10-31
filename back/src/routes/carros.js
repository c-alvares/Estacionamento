const express = require('express');
const router = express.Router();

const Carro = require("../controllers/CarrosController");

router.post("/estacionamento/carros", Carro.cadastrarCarro);
router.get("/estacionamento/carros", Carro.listarCarros);
router.get("/estacionamento/carros/placa/:placa", Carro.listarCarro);
router.get("/estacionamento/carros/modelo/:modelo", Carro.buscarModelo);
router.get("/estacionamento/carros/cor/:cor", Carro.buscarCor);
router.get("/estacionamento/carros/cpf/:cpf", Carro.buscarCpf);
router.put("/estacionamento/carros", Carro.alterarCadastro);
router.delete("/estacionamento/carros/:placa", Carro.excluirCadastro);

module.exports = router;