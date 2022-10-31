const express = require('express');
const router = express.Router();

const Cliente = require("../controllers/ClientesController");

router.post("/estacionamento/clientes", Cliente.criarCadastro);
router.get("/estacionamento/clientes", Cliente.listarClientes);
router.get("/estacionamento/clientes/:cpf", Cliente.listarCliente);
router.get("/estacionamento/clientes/:nome", Cliente.buscaPorNome);
router.get("/estacionamento/clientes/:telefone", Cliente.buscaPorTelefone);
router.put("/estacionamento/clientes", Cliente.alterarCadastro);
router.delete("/estacionamento/clientes/:placa", Cliente.excluirCadastro);

module.exports = router;