// API: Aplicação que pode ser utilizada em diversos projetos(Application Programming Interface)

// fetch: Busca a API
var cep = document.querySelector('#cep');
var resposta = document.querySelector('#resposta');

resposta.innerHTML= "Digite um cep de 8 dígitos"

cep.addEventListener("focusout", consultar)
    
function consultar(){
    let cepValue = document.querySelector("#cep").value;

    if(cepValue.length < 8 || cepValue.length > 8){
        resposta.innerHTML = "Digite um cep válido"

    }else {
        fetch(`https://viacep.com.br/ws/${cepValue}/json/`).then((res) =>{
            return res.json()
    
        }).then((data) => {
            let localidade = document.querySelector("#localidade");
            localidade.value = data.localidade;
            resposta.innerHTML = ""

        })
    }

    
   
       
    }
    