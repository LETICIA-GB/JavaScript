var numero1 = Number(prompt("Digite aqui seu primeiro número: "))
var operador = prompt("Digite a operação matematica")
var numero2 = Number(prompt("Digite aqui seu segundo número: "))

//escolha (var)
//caso "isso"
//faz aquilo
// break(pra parar)
//caso "teste"
//faz uma coisa
//fimFaca

function calcularnovamente(){ // essa fuction é para esse bloco de codigo rodar no finl de cada case
    var novocalculo = confirm("Deseja fazer um novo calculo?")
        if(novocalculo == true){ //caso a pessoa deseje fazer um novo calculo
            location.reload();
        }
}

switch(operador){
    case "+":
        var resultado = numero1 + numero2;
        alert(resultado);
        calcularnovamente();
        break; // para parar o codigo
    case "-":
        var resultado = numero1 - numero2;
        alert(resultado);
        calcularnovamente();
        break;
    case "*":
        var resultado = numero1 * numero2;
        alert(resultado);
        calcularnovamente();
        break;
    case "/":
        var resultado = numero1 / numero2; 
        alert(resultado); 
        calcularnovamente();
        break; 
        default: 
            alert("Operador invalido, tente novamente!");
            location.reload();  // para voltar à tela de digitar novamente
            break;
        
     
}