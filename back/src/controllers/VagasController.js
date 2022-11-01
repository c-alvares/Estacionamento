const Vaga = require('../models/vagas.model');
const con = require('../DAO/estacionamento.dao');

const CriarVaga = (req,res) => {
    con.query(Vaga.criarVaga(req.body), (err,res) => {
        if (err == null)
            res.json("Vaga Cadastrada").status(201).end();
        else
            if(err.sqlState == 23000) // Se a vaga já está cadastrada
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarVagas = (req, res) => {
    con.query(Vaga.listarVagas(req.body), (err, res) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const verificarVagaID = (req, res) => {
    con.query(Vaga.verificarVagaPorID(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const verificarStatus = (req, res) => {
    con.query
}

module.exports = {
    CriarVaga,
    listarVagas,
    verificarVagaID,
    verificarStatus,
    atualizarStatus,
    deletarVaga
}