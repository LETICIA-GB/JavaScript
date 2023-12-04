const botaomudartermo = document.querySelector("#botaomudartermo")
const botaomudartodostermos = document.querySelector("#botaomudartodostermos")

botaomudartermo.addEventListener("click", mudatermo)
botaomudartodostermos.addEventListener("click", mudartodosostermos)

function mudatermo(){
    let blocotexto = document.querySelector("#blocotexto")
    let removertermo = document.querySelector("#blocotexto").value
    let adicionartermo = document.querySelector("#blocotexto").value


var blocotextoformatado = blocotexto.value.replace(removertermo,adicionartermo)
blocotexto.value = blocotextoformatado
}


function mudartodosostermos(){
    let blocotexto = document.querySelector("#blocotexto")
    let removertermo = document.querySelector("#blocotexto").value
    let adicionartermo = document.querySelector("#blocotexto").value


var blocotextoformatado = blocotexto.value.replaceAll(removertermo,adicionartermo)
blocotexto.value = blocotextoformatado
}