const Cliente = require('../models/clientes.model');
const con = require('../DAO/estacionamento.dao');

const criarCadastro = (req, res) => {
    con.query(Cliente.criarCliente(req.body), (err, result) => {
        if (err == null)
            res.json("Cadastrado com Sucesso").status(201).end();
        else
            if (err.sqlState == 23000)//Se o cpf já está cadastrado
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarClientes = (req, res) => {
    con.query(Cliente.verificarClientes(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.json(err).status(500).end();
    });
}

const listarCliente = (req, res) => {
    con.query(Cliente.verificarUmCliente(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const buscaPorNome = (req, res) => {
    con.query(Cliente.buscarPorNome(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const buscaPorTelefone = (req, res) => {
    con.query(Cliente.buscarPorTelefone(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const alterarCadastro = (req, res) => {
    con.query(Cliente.atualizarCadastro(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.json("Cadastro Atualizado com Sucesso").status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const excluirCadastro = (req, res) => {
    con.query(Cliente.deletarCadastro(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.json("Cadastro Deletado com Sucesso").status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

module.exports = {
    criarCadastro,
    listarClientes,
    listarCliente,
    buscaPorNome,
    buscaPorTelefone,
    alterarCadastro,
    excluirCadastro
}