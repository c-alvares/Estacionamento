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


function preencherVaga() {

    let cpfVaga = document.querySelector("#cpf-vaga")
    let placaVaga = document.querySelector("#placa-vaga")
    let modeloVaga = document.querySelector("#modelo-vaga")
    let corVaga = document.querySelector("#cor-vaga")


    let vaga = Number(document.querySelector("#preencher-vaga").innerHTML)
    document.querySelectorAll(".vaga")[vaga].style.backgroundColor = 'rgb(28, 189, 122, 0.7)'
    document.querySelectorAll("#add")[vaga].style.backgroundColor = 'transparent'
    document.querySelectorAll(".numero-vaga")[vaga].style.color = 'white'

    document.querySelectorAll(".vaga")[vaga].classList.add("ocupada");

    let dadosVaga = document.createElement("p")

    const textoInfos = document.createTextNode(`CPF: ${cpfVaga.value}
                                            Placa: ${placaVaga.value}
                                            Modelo: ${modeloVaga.value}
                                            Cor: ${corVaga.value}`);


    dadosVaga.classList.add("info-cliente")
    dadosVaga.appendChild(textoInfos)

    numeroVaga.setAttribute('class', 'dados-vaga');
    dadosVaga.style.display = "flex"
    dadosVaga.style.flexDirection = "column"
    dadosVaga.style.margin = '10px'
    dadosVaga.style.fontSize = '15px'
    dadosVaga.style.color = 'white'

    document.querySelectorAll(".vaga")[vaga].appendChild(dadosVaga)
    document.querySelectorAll("#add")[vaga].style.visibility = 'hidden'
    document.querySelectorAll("#remover")[vaga].style.visibility = 'visible'

    contadorVagas()
    fecharModalVaga()
}

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
}

function fecharModalFinalizar(){
    modalFinalizar.close()
    modalFinalizar.style.visibility = 'hidden'
}

function enviarDadosVaga(){
    let vaga = Number(document.querySelector("#preencher-vaga").innerHTML)

    document.querySelectorAll(".vaga")[vaga].style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
    document.querySelectorAll("#remover")[vaga].style.visibility = 'hidden'
    document.querySelectorAll("#add")[vaga].style.visibility = 'visible'
    document.querySelectorAll("#add")[vaga].style.backgroundColor = 'rgb(255, 221, 0)'
    document.querySelectorAll(".numero-vaga")[vaga].style.color = 'rgb(255, 221, 0)'

    let dados = document.querySelector(".info-cliente")
    console.log(dados)
    dados.parentNode.removeChild(dados)
    document.querySelectorAll(".vaga")[vaga].classList.remove("ocupada")
    
    fecharModalFinalizar()
}