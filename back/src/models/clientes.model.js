const criarCliente = (model) => {
    return `INSERT INTO clientes VALUES ('${model.cpf}','${model.nome}','${model.telefone}')`;
}
const verificarClientes = () => {
    return "SELECT * FROM clientes";
}
const verificarUmCliente = (model) => {
    return `SELECT * FROM clientes WHERE cpf='${model.cpf}'`;
}

const buscarPorNome = (model) => {
    return `SELECT * FROM clientes WHERE nome LIKE '%${model.nome}%'`;
}

const buscarPorTelefone = (model) => {
    return `SELECT * FROM clientes WHERE telefone LIKE '%${model.telefone}%'`;
}

const atualizarCadastro = (model) => {
    return `UPDATE clientes SET 
    nome='${model.nome}', telefone='${model.telefone}' 
    WHERE cpf='${model.cpf}'`;
}
const deletarCadastro = (model) => {
    return `DELETE FROM clientes WHERE cpf='${model.cpf}'`;
}

module.exports = {
    criarCliente,
    verificarClientes,
    verificarUmCliente,
    buscarPorNome,
    buscarPorTelefone,
    atualizarCadastro,
    deletarCadastro
}