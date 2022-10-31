const criarVaga = (model) => {
    return `INSERT INTO vagas VALUES ('${model.id_vaga}','${model.condicao}')`;
}
const listarVagas = (model) => {
    return "SELECT * FROM vagas";
}
const verificarVagaPorID = (model) => {
    return `SELECT * FROM vagas WHERE id_vaga LIKE '%${model.id_vaga}%'`;
}
const verificarStatusVagas = (model) => {
    return `SELECT * FROM vagas WHERE condicao = '%${model.condicao}%'`;
}

const atualizarStatus = (model) => {
    return `UPDATE vagas SET 
    condicao= '${model.condicao}'
    WHERE id_vaga='${model.id_vaga}'`;
}

const deletarVaga = (model) => {
    return `DELETE FROM vagas WHERE id_vaga='${model.id_vaga}'`;
}

module.exports = {
    criarVaga,
    listarVagas,
    verificarVagaPorID,
    verificarStatusVagas,
    atualizarStatus,
    deletarVaga
}