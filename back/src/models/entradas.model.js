const clienteChegou = (model) => {
    return `INSERT INTO entradas VALUES (DEFAULT, CURDATE(), CURTIME(), NULL, NULL, ${model.preco_hora},NULL, '${model.placa}');`;
}

const listarTodasEntradas = () => {
    return `SELECT * FROM  entradas;`;
}

const entradas = () => {
    return `SELECT * FROM vw_registro;`
}

const entradasPorData = (model) => {
    return `SELECT * FROM entradas WHERE data LIKE '%${model.data}%';`;
}

const clienteSaiu = (model) => {
    return `UPDATE entradas SET 
    h_saida = CURTIME(), 
    tempo = (SELECT TIMEDIFF(CURTIME(), (SELECT h_entrada FROM entradas WHERE id_entrada = ${model.id_entrada})))
    WHERE id_entrada = ${model.id_entrada};`;
  };

    
module.exports = {
    clienteChegou,
    listarTodasEntradas,
    entradas,
    entradasPorData,
    clienteSaiu
}