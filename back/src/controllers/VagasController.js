const Vaga = require('../models/vagas.model');
const con = require('../DAO/estacionamento.dao');

const criarVaga = (req, res) => {
    con.query(Vaga.criarVaga(req.body), (err,result) => {
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
    con.query(Vaga.listarVagas(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const deletarVaga = (req, res) => {
    con.query(Vaga.deletarVaga(req.params), (err, result) => {
        if (err === null)
            if (result.affectedRows > 0)
                res.json("Vaga deletada").status(200).end();
            else
                res.json("Vaga não encontrada").status(404).end();
        else
            res.status(400).json(err).end();
    })
}

module.exports = {
    criarVaga,
    listarVagas,
    deletarVaga
}