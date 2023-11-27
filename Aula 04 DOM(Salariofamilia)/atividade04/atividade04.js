//selecionar input

var input = document.querySelector("#inputtext");


// adicionar evento de foco, perder foco / fucus e blur foram pegos essas opções no site w3school
input.addEventListener("focus", mudacor);
input.addEventListener("blur", mudacorverifica);


//foco, input amarelo

function mudacor(){
    let resposta = document.querySelector("#resposta");
    input.style.background = "yellow"
    resposta.innerHTML = "Digite uma senha maior que 3 digitos"
}





//perder foco, se tiver menos que 3, vermelho, se maior que 3, verde.

function mudacorverifica(){
    let inputvalor = input.value.length;
    if(inputvalor < 3){
        let resposta = document.querySelector("#resposta");
        input.style.background = "red";
        resposta.innerHTML = "Digite uma senha válida";
        
    }else{
        let resposta = document.querySelector("#resposta");
        input.style.background = "green"
        resposta.innerHTML = "Senha válida"
    }
}