const express = require('express');
const router = express.Router();

const Cliente = require("../controllers/ClientesController");

router.post("/estacionamento/clientes", Cliente.criarCadastro);
router.get("/estacionamento/clientes", Cliente.listarClientes);
router.get("/estacionamento/clientes/cpf/:cpf", Cliente.listarCliente);
router.get("/estacionamento/clientes/nome/:nome", Cliente.buscaPorNome);
router.get("/estacionamento/clientes/telefone/:telefone", Cliente.buscaPorTelefone);
router.put("/estacionamento/clientes/:cpf", Cliente.alterarCadastro);
router.delete("/estacionamento/clientes/:cpf", Cliente.excluirCadastro);

module.exports = router;