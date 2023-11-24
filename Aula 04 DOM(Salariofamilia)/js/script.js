// COLETAR VALORES

//var empregado = document.getElementById("empregado").value;  //primeira maneira / ele esta ido buscar a id empregado / value: interessado no valor que foi digitado. ex nome do empregado
//var empregado = document.querySelector("#empregado").value;   //segunda maneira /esta buscando a classe( a #do empregado é pq ele é uma classe)
//var filhos = document.querySelector("#filho").value;   
//var salario = document.querySelector("#salario").value; 
var btnCalcular = document.querySelector("#btnCalcular");   // sem value, pq nao tem "valor no botão"
// CONFIGURAR O CLICK NO BOTÃO
btnCalcular.addEventListener("click", calcular);
//CALCULAR SALARIO FAMILIA
function calcular(){
     //alert("botão calcular funcionando");
    let empregado = document.querySelector("#empregado").value;  //pode deixar o inico var ou let pq são temporários, const fica guardado.
    let filhos = document.querySelector("#filho").value;   
    let salario = document.querySelector("#salario").value; 
    let resposta = document.querySelector("#resposta"); 
   // alert(filhos * 41.37);

   if(filhos == 0 || salario == 0 || empregado =="" || filhos < 0 || salario < 0 ){
        resposta.innerHTML = "Insira as informações corretamente";
   
    }else if(salario > 0 && salario <= 806.80){
        let resultado = filhos * 41.37;
        resposta.innerHTML = `O Salario familia do empregado(a) ${empregado} é de R$ ${resultado.toFixed(2)}`; // tofixed é para as 2 casas decimais

    }else if(salario >= 806.81 && salario <= 1212.64){
        let resultado = filhos * 29.16;
        resposta.innerHTML = `O Salario familia do empregado(a) ${empregado} é de R$ ${resultado.toFixed(2)}`;
    }else {
        resposta.innerHTML = `O empregado(a) ${empregado} não tem direito ao salario família`;
    }

   
}
//DEVOLVER UMA RESPOSTA