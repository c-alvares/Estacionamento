const clienteChegou = (model) => {
    return `INSERT INTO entradas VALUES (DEFAULT, CURDATE(), CURTIME(), NULL, NULL, NULL, '${model.placa}')`;
}

const listarTodasEntradas = () => {
    return `SELECT * FROM  entradas`;
}

const entradasPorData = (model) => {
    return `SELECT * FROM entradas WHERE data LIKE '${model.data}'`;
}

const clienteSaiu = (model) => {
    return `UPDATE entradas SET h_saida = CURTIME() WHERE id_entrada = ${model.id_entrada};
            UPDATE entradas SET tempo = (SELECT TIMEDIFF((SELECT h_saida FROM entradas WHERE id_entrada = ${model.id_entrada}), (SELECT h_entrada FROM entradas WHERE id_entrada = ${model.id_entrada}))) WHERE id_entrada = ${model.id_entrada};`
    // CREATE TRIGGER calculoTempo AFTER UPDATE ON entradas
    //     FOR EACH ROW BEGIN
    //         UPDATE entradas SET
    //             tempo = (SELECT TIMEDIFF((SELECT h_saida FROM entradas WHERE id_entrada = ${model.id_entrada}), (SELECT h_entrada FROM entradas WHERE id_entrada = ${model.id_entrada})))`; 


// valor = ${model.valor}
    
}
module.exports = {
    clienteChegou,
    listarTodasEntradas,
    entradasPorData,
    clienteSaiu
}