// *PROMISSES

var primeiropromisse = new Promise((resolve, reject) =>{
    //PROMISSES SE ASESEMELHAM A PROMESSAS, PODEMOS CUMPRI-LAS OU NÃO
    var nome = "Alice"

    if (nome == "Leticia"){
        // PROMESSA CUMPRIDA
        resolve("Seja bem vinda Leticia")
    }else{
        //PROMESSA QUEBRADA
        reject("Usuario não autorizado")
    }
})

//then; esper resolve
//catch: espera o reject

primeiropromisse.then((data) => {
    console.log(data)
})


//*AWAIT
function sujeitodemorado(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log("Tudo bem")
            resolve()
        }, 5000)
})

}

// RODA ASFUNÇÕES DE FORMA ASSÍNCRONA
async function msg(){

console.log ("boa tarde")
// ESPERA UM PROCESSO ACONTECER ANTES DE CONTINUAR LENDO O CÓDIGO
await sujeitodemorado()
console.log ("Espero um excelente dia")

}
msg()  //chama a função


//*OBJECT ENTRIES

var computador = {
    sistemaoperacional: "windows",
    placamae: "Rog strix",
    placadevideo: "RTX 4090",
    processador: "INTEL I9",
    monitor: "AMOLED ASUS",
    fonte: "FONTE 1050w",
    memoriaram: "DDR5 4x16g RAM"
}

console.log(computador.placadevideo)

var arraycomputador = Object.keys(computador)
//INDEXOF: retorna se um termo existe o seu indice, caso não exista, -1
console.log(arraycomputador.indexOf("fonte"))
//INCLUDES: retorna se um termo existe, APENAS TRUE OU FALSE
console.log(arraycomputador.includes("monitor"))



var pergunta = prompt("pesquisa de componentes para pc")
var processo = arraycomputador.indexOf(pergunta)
if(processo == -1){
    alert("Componente não existe")
}else{
    alert("Componente existe")
}

console.log(Object.entries(computador))

//*MAP

const frutas = ["banana","mação","abacaxi", "tomate", "morango"]
const resultadomap = frutas.map((cadaelemento)=>"<li>Fruta :"+cadaelemento+"</li>")

document.getElementById("resposta").innerHTML = `O map, faz uma função para cada elemento de um array ou objeto <ul>${resultadomap}</ul>`