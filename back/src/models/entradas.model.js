const darEntrada = (model) => {
    return `INSERT INTO entradas VALUES (DEFAULT, CURDATE(), CURTIME(), NULL, NULL, NULL, '${model.placa}', '${model.id_vaga}')`;
}
// const listarE