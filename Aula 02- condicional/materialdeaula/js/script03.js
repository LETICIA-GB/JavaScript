const usuario = "ADM";
const senha = 1234;

var usuariodigitado = prompt("Insira o usuário");
var senhadigitada = prompt("Insira o senha");

if(senhadigitada == senha && usuariodigitado == usuario){
    alert(`seja bem vindo, ${usuario}`)

}else{
    alert("usuario e/ou senha incorreta, tente novamente");
    location.reload();
}

//if(usuariodigitado != usuario || senhadigitada != senha ){
//    alert("deu erro")
//}


//--------------------------------------------------
//TBM CONSEGUE ACEITAR
//else{
//    if{}
//}

//else if{

//}