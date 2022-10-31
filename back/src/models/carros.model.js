const novoCarro = (model) => {
    return `INSERT INTO carros VALUES ('${model.placa}','${model.modelo}','${model.cor}','${model.cpf}')`;
}
const verificarCarros = () => {
    return "SELECT * FROM carros";
}
const verificarUmCarro = (model) => {
    return `SELECT * FROM carros WHERE placa='${model.placa}'`;
}

const buscarPorModelo = (model) => {
    return `SELECT * FROM carros WHERE modelo like '%'${model.modelo}'%'`;
}

const buscarPorCor = (model) => {
    return `SELECT * FROM carros WHERE cor like '%'${model.cor}'%'`;
}

const buscarPorCpf = (model) => {
    return `SELECT * FROM carros WHERE cpf like '%'${model.cpf}'%'`;
}

const atualizarCarro = (model) => {
    return `UPDATE carros SET 
                placa = '${model.placa}',
                modelo = '${model.modelo}',
                cor = '${model.cor}',
                WHERE cpf = '${model.cpf}'`;
}
const deletarCarro = (model) => {
    return `DELETE FROM carros WHERE placa='${model.placa}'`;
}

module.exports = {
    novoCarro,
    verificarCarros,
    verificarUmCarro,
    buscarPorModelo,
    buscarPorCor,
    buscarPorCpf,
    atualizarCarro,
    deletarCarro
}