const express = require('express');
const router = express.Router();

const Entrada = require("../controllers/EntradasController");

router.post("/estacionamento/entradas", Entrada.criarCadastro);
router.get("/estacionamento/entradas", Entrada.listarClientes);
router.get("/estacionamento/entradas/cpf/:cpf", Entrada.listarCliente);
router.get("/estacionamento/entradas/nome/:nome", Entrada.buscaPorNome);
router.get("/estacionamento/entradas/telefone/:telefone", Entrada.buscaPorTelefone);
router.put("/estacionamento/entradas/:cpf", Entrada.alterarCadastro);
router.delete("/estacionamento/entradas/:cpf", Entrada.excluirCadastro);

module.exports = router;