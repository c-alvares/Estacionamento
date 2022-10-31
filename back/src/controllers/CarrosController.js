const Carro = require('../models/carros.model');
const con = require('../DAO/estacionamento.dao');

const cadastrarCarro = (req, res) => {
    con.query(Carro.novoCarro(req.body), (err, result) => {
        if (err == null)
            res.json("Carro Cadastrado").status(201).end();
        else
            if (err.sqlState == 23000)//Se o ni já está cadastrado
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarCarros = (req, res) => {
    con.query(Carro.verificarCarros(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const listarCarro = (req, res) => {
    con.query(Carro.verificarUmCarro(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const buscarModelo = (req, res) => {
    con.query(Carro.buscarPorModelo(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const buscarCor = (req, res) => {
    con.query(Carro.buscarPorCor(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const buscarCpf = (req, res) => {
    con.query(Carro.buscarPorCpf(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.json(err).status(500).end();
    });
}

const alterarCadastro = (req, res) => {
    con.query(Carro.atualizarCarro(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const excluirCadastro = (req, res) => {
    con.query(Carro.deletarCarro(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.json("Carro deletado").status(204).end();
            else
                res.json("Carro não encontrado").status(404).end();
        else
            res.status(400).json(err).end();
    });
}

module.exports = {
    cadastrarCarro,
    listarCarros,
    listarCarro,
    buscarModelo,
    buscarCor,
    buscarCpf,
    alterarCadastro,
    excluirCadastro
}