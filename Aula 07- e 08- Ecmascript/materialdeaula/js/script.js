

//control+h

// replace: substituição


var texto = "Olá mundo, o mundo é bacana e o mundo é suave"
console.log(texto);
// replace: substituição de um termo
console.log(texto.replace("mundo","banana"));
// replaceAll: muda todos os termos
console.log(texto.replaceAll("mundo", "banana" ));


//CLASS LIST
var exemplo = document.querySelector("#exemplo");
exemplo.classList.remove("claro") // remover a classe
exemplo.classList.add("claro") // adicionar uma classe

function mudatema(){
    
    if(exemplo.classList.contains("escuro")){  //contains: verifica se elemento contem uma classe
    exemplo.classList.replace("escuro","claro") // replace: substitui uma classe por outras
}else{
    exemplo.classList.replace("claro","escuro") 
}

}

function mudaclasse(){
    exemplo.classList.toggle("claro") // troca a classe de um elemento quando engatilhado

    
}


//CONCATENAÇÃO
var primeironome = "Leticia"
var sobrenome = "Guimarães"
var cartao = "4841"
 //concatenação no começo
 var nomecompleto = sobrenome.padStart(16,primeironome) //16 caracteres do meu nome e sobrenome
 console.log(nomecompleto)
 var nomecompleto = sobrenome.padEnd(16,primeironome) 
 console.log(nomecompleto)
 var cartaoescondido = cartao.padStart(12, "*") // para colocar os asterisco para esconder os digitos do inicio do cartão
 console.log(cartaoescondido)

