const clienteChegou = (model) => {
    return `INSERT INTO entradas VALUES (DEFAULT, CURDATE(), CURTIME(), NULL, NULL, NULL, '${model.placa}', '${model.id_vaga}')`;
}

const listarTodasEntradas = () => {
    return `SELECT * FROM  entradas`;
}

const entradasPorData = (model) => {
    return `SELECT * FROM entradas WHERE data LIKE '${model.data}'`;
}

const clienteSaiu = (model) => {
    return `UPDATE entradas SET 
                h_saida = CURTIME(),
                tempo = (SELECT TIMEDIFF(h_saida, h_entrada) WHERE id_entrada = ${model.id_entrada}),
                valor = ${model.valor}
            WHERE id_entrada = ${model.id_entrada}`;
    
}
module.exports = {
    clienteChegou,
    listarTodasEntradas,
    entradasPorData,
    clienteSaiu
}