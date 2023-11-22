//------OPERADORES LOGICOS-------
// > MAIOR QUE
// < MENOR QUE
// == IGUAL (=ATRIBUTO, == COMPARA VALOR, === COMPARA VALOR E TIPO)
// >=MAIOR OU IGUAL QUE 
// <= MENOR OU IGUAL QUE
// != DIFERENTE

//----------ALTERNÁRIOS-----------------
// && E (EXIGE DUAS CONDIÇÕES VERDADEIRAS)
// || OU (EXIGE APENAS UMA VERDADEIRA)
// ! NÃO (EXIGE)

// SE (CONDIÇÃO) ENTÃO
// FAZ ALGO
// SENAO 
// FAZ OUTRA COISA
// FIMSE

if(false){
    console.log("sou verdadeiro");

}else{
    console.log("sou falso:(");
}

//MAIOR DE IDADE
var idade = Number(prompt("Qual é a sua idade?"));

if(idade >= 18){
    alert("Seja bem-vindo ao website!")
}else{
    alert("Você não tem autorização neste website!")
    //location.reload() // location; p localizar a url e recarregar a pagina(reload)
      location.href = "https://www.google.com/"; // href é para colocar um link do qual quero direcionar 
}