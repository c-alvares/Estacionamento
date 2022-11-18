const Entrada = require('../models/entradas.model');
const con = require('../DAO/estacionamento.dao');

const registrarEntrada = (req, res) => {
    con.query(Entrada.clienteChegou(req.body), (err, result) => {
        if (err == null)
            res.json("Entrada Registrada").status(201).end();
        else
            res.status(500).json(err).end();
    });
}

const listarEntradas = (req, res) => {
    con.query(Entrada.listarTodasEntradas(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const mostrarEntradas = (req, res) => {
    con.query(Entrada.entradas(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const entradasNaData = (req, res) => {
    con.query(Entrada.entradasPorData(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const finalizarEntrada = (req, res) => {
    con.query(Entrada.clienteSaiu(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.json("Finalizada Utilização").status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

module.exports = {
    registrarEntrada,
    listarEntradas,
    mostrarEntradas,
    entradasNaData,
    finalizarEntrada
}