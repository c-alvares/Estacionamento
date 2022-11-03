const criarVaga = (model) => {
    return `INSERT INTO vagas VALUES ('${model.id_vaga}')`;
}
const listarVagas = () => {
    return "SELECT * FROM vagas";
}
const deletarVaga = (model) => {
    return `DELETE FROM vagas WHERE id_vaga='${model.id_vaga}'`;
}

module.exports = {
    criarVaga,
    listarVagas,
    deletarVaga
}