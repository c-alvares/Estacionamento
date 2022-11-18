// Carregar Vagas

function carregarVagas(){

    const vaga = document.querySelector(".vaga")


    for (let i = 1; i <= 20; i++) {
        let novoItem = vaga.cloneNode(true)
        // let novoBotao = btnAdd.cloneNode(true)

        novoItem.classList.remove("model")

        numeroVaga = novoItem.querySelector(".numero-vaga")
        numeroVaga.innerHTML = i
        numeroVaga.setAttribute('id', `vaga-${i}`);

        numeroVaga.style.color = 'rgb(255, 221, 0)'
        novoItem.style.fontSize = '50px'

        novoItem.querySelector("button").addEventListener("click", () => {
            abrirModalVaga()
            document.querySelector("#preencher-vaga").innerHTML = i;

        })


        document.querySelector("main").appendChild(novoItem)
    }
}

//CONFIGURAÇÕES INFORMAÇÕES DO SUBNAV

    // Pegar dia atual
    const data = new Date()
    const diaAtual = String(data.getDate()).padStart(2, '0') + "/" + String(data.getMonth() + 1).padStart(2, '0') + "/" + data.getFullYear();
    const dataDia = document.querySelector(".data-dia")
    dataDia.innerHTML += diaAtual


    // Vagas livres e ocupadas (DEFAULT)
    var vagasOcupadasCont = 0
    var vagasLivresCont = 20

    document.querySelector(".vagas-ocupadas").innerHTML += vagasOcupadasCont
    document.querySelector(".vagas-livres").innerHTML += vagasLivresCont


const modalCliente = document.querySelector(".modal-cliente")
const modalVaga = document.querySelector(".modal-vaga")


// Modais - 1

    function abrirModalCliente() {
        modalCliente.showModal()
    }

    function fecharModalCliente() {
        modalCliente.close()
    }

    function abrirModalVaga() {
        modalVaga.showModal()
    }

    function fecharModalVaga() {
        modalVaga.close()
    }


// Cadastrar Cliente    
function cadastrarCliente() {

    let cpf = document.querySelector("#cpf")
    let nome = document.querySelector("#nome")
    let telefone = document.querySelector("#telefone")


    let dadosCliente = {
        "cpf": cpf.value,
        "nome": nome.value,
        "telefone": telefone.value
    }

    fetch("http://localhost:3000/estacionamento/clientes", {
        "method":"POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(dadosCliente)
    })
    .then(res => {return res.json()})
    .then(data => {
        if(data.erro === undefined) {
            alert("Cadastrado com Sucesso")
        }
    })

    fecharModalCliente()
}


// Cadastrar Carro
function cadastrarCarro() {

    let placa = document.querySelector("#placa-carro")
    let modelo = document.querySelector("#modelo-carro")
    let cor = document.querySelector("#cor-carro")
    let cpf = document.querySelector("#cpf-carro")


    let dadosCliente = {
        "placa": placa.value,
        "modelo": modelo.value,
        "cor": cor.value,
        "cpf": cpf.value
    }

    fetch("http://localhost:3000/estacionamento/carros", {
        "method":"POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(dadosCliente)
    })
    .then(res => {return res.json()})
    .then(data => {
        if(data.erro === undefined) {
            alert("Cadastrado com Sucesso")
        }
    })

    fecharModalCadastrarCarro()
}

// Modais - 2

function abrirModalCadastrarCarro() {
    let modal = document.querySelector(".modal-cadastrar-carro")
    modal.showModal()
    modal.style.display = "flex"
    modal.style.visibility = "visible"
}

function fecharModalCadastrarCarro() {
    let modal = document.querySelector(".modal-cadastrar-carro")
    modal.close()
    modal.style.display = "none"
    modal.style.visibility = "hidden"
}


// Preencher Vaga

function preencherVaga() {

    let placaVaga = document.querySelector("#placa-vaga")

    let vaga = Number(document.querySelector("#preencher-vaga").innerHTML)
    document.querySelectorAll(".vaga")[vaga].style.backgroundColor = 'rgb(255, 0, 0, 0.7)'
    document.querySelectorAll("#add")[vaga].style.backgroundColor = 'transparent'
    document.querySelectorAll(".numero-vaga")[vaga].style.color = 'white'

    document.querySelectorAll(".vaga")[vaga].classList.add("ocupada");

    let dadosVaga = document.createElement("p")

    // let horaAtual = new Date().toLocaleTimeString();

    // const textoInfos = document.createTextNode(`CPF: ${cpfVaga.value} |
    //                                         Placa: ${placaVaga.value} |
    //                                         Modelo: ${modeloVaga.value} |
    //                                         Cor: ${corVaga.value} |
    //                                         Hora Entrada: ${horaAtual}`);



    dadosVaga.classList.add("info-cliente")
    // dadosVaga.appendChild(textoInfos)

    numeroVaga.setAttribute('class', 'dados-vaga');
    dadosVaga.style.display = "flex"
    dadosVaga.style.flexDirection = "column"
    dadosVaga.style.margin = '2px'
    dadosVaga.style.fontSize = '15px'
    dadosVaga.style.color = 'white'

    document.querySelectorAll(".vaga")[vaga].appendChild(dadosVaga)
    document.querySelectorAll("#add")[vaga].style.visibility = 'hidden'
    document.querySelectorAll("#remover")[vaga].style.visibility = 'visible'
    
    let dadosPreencher = {
        "placa": placaVaga
    }

    fetch("http://localhost:3000/estacionamento/entradas", {
        "method":"POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(dadosPreencher)
    })
    .then(res => {return res.json()})
    .then(data => {
        if(data.erro === undefined) {
            alert("Cadastrado com Sucesso")
        }
    })

    contadorVagas()
    fecharModalVaga()
}

// function limparVaga(){
//     fetch("http://localhost:3000/estacionamento/entradas", {
//         "method":"PUT",
//         "headers": {
//             "Content-Type":"application/json"
//         },
//         "body": JSON.stringify(dadosPreencher)
//     })
//     .then(res => {return res.json()})
//     .then(data => {
//         if(data.erro === undefined) {
//             alert("Cadastrado com Sucesso")
//         }
//     })
// }



// Cálculo Número Vagas (Contador)

function contadorVagas(){
    vaga = document.querySelectorAll(".vaga")

    vagasOcupadasCont = 0
    vagasLivresCont = 20

    vaga.forEach(e => {
        if(e.classList.contains("ocupada")){
            vagasOcupadasCont++
            vagasLivresCont--
        }
    })

    document.querySelector(".vagas-ocupadas").innerHTML = "Vagas Ocupadas: " + vagasOcupadasCont
    document.querySelector(".vagas-livres").innerHTML = "Vagas Livres: " + vagasLivresCont
   
}

const modalFinalizar = document.querySelector(".modal-finalizar")

function abrirModalFinalizar(){
    modalFinalizar.showModal()
    modalFinalizar.style.visibility = 'visible'
    modalFinalizar.style.display = "flex"
}

function fecharModalFinalizar(){
    modalFinalizar.close()
    modalFinalizar.style.visibility = 'hidden'
    modalFinalizar.style.display = "none"
}


// Enviar Dados Vaga
function enviarDadosVaga(){
    let vaga = Number(document.querySelector("#preencher-vaga").innerHTML)

    document.querySelectorAll(".vaga")[vaga].style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
    document.querySelectorAll("#remover")[vaga].style.visibility = 'hidden'
    document.querySelectorAll("#add")[vaga].style.visibility = 'visible'
    document.querySelectorAll("#add")[vaga].style.backgroundColor = 'rgb(255, 221, 0)'
    document.querySelectorAll(".numero-vaga")[vaga].style.color = 'rgb(255, 221, 0)'

    let dados = document.querySelectorAll(".info-cliente")
    console.log(dados)
    // dados.parentNode.removeChild(dados)
    document.querySelectorAll(".vaga")[vaga].classList.remove("ocupada")
    
    contadorVagas()
    fecharModalFinalizar()
}

let el = document.querySelector("#abrir-modal-clientes-c");
el.addEventListener("click", ()=>{
    carregarClientes()
})


// Carregar Clientes Cadastrados
function carregarClientes(){

    let modeloUsuario = document.querySelector(".linhas")
    fetch("http://localhost:3000/estacionamento/clientes")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            data.forEach(e => {

                let novoItem = modeloUsuario.cloneNode(true)

                novoItem.classList.remove("model")
                
                
                novoItem.querySelector("#nome-lista").innerHTML = e.nome
                novoItem.querySelector("#cpf-lista").innerHTML = e.cpf
                novoItem.querySelector("#telefone-lista").innerHTML = e.telefone
        
                console.log(e.nome)
        
                document.querySelector("tbody").appendChild(novoItem)

            })
            
        })
    }

// Modais - 3
function abrirModalClientesC(){
    let modal = document.querySelector("#clientes-cadastrados")
    modal.showModal()
    modal.style.display = "flex"
    modal.style.visibility = "visible"
}

function fecharModalClientesC(){
    let modal = document.querySelector("#clientes-cadastrados")
    modal.close()
    modal.style.display = "none"
    modal.style.visibility = "hidden"
}


let element = document.querySelector("#abrir-modal-relatorio");
element.addEventListener("click", ()=>{
    carregarRelatorio()
})

function carregarRelatorio(){

    let modeloUsuario = document.querySelector(".linhas-relatorio")
    fetch("http://localhost:3000/estacionamento/entradas")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            data.forEach(e => {

                let novoItem = modeloUsuario.cloneNode(true)

                novoItem.classList.remove("model")
                
                console.log(e)
        
                
                novoItem.querySelector("#id-entrada").innerHTML = e.id_entrada
                novoItem.querySelector("#data").innerHTML = e.data
                novoItem.querySelector("#hora-entrada").innerHTML = e.h_entrada
                novoItem.querySelector("#hora-saida").innerHTML = e.h_saida
                novoItem.querySelector("#tempo").innerHTML = e.tempo
                novoItem.querySelector("#valor").innerHTML = e.valor
                novoItem.querySelector("#placa").innerHTML = e.placa
        
    
                document.querySelector(".linha-informacoes-relatorio").appendChild(novoItem)

            })
            
        })
    }


function abrirModalRelatorio(){
    let modal = document.querySelector("#gerar-relatorio")
    modal.showModal()
    modal.style.display = "flex"
    modal.style.visibility = "visible"
}

function fecharModalRelatorio(){
    let modal = document.querySelector("#gerar-relatorio")
    modal.close()
    modal.style.display = "none"
    modal.style.visibility = "hidden"
}
    