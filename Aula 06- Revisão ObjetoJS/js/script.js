class Filme{
    constructor(valnomefilme, valdescricao, valdata, valdiretor, valcategoria){
        this.nome = valnomefilme
        this.descricao = valdescricao
        this.data = valdata
        this.diretor = valdiretor
        this.categoria = valcategoria
        

    }
 

}
//SELETORES
var cadastrobtn = document.querySelector("#cadastrobotao")
var listabtn = document.querySelector("#listabotao") // do segundo botão- o lista


cadastrobtn.addEventListener("click", cadastrar)
listabtn.addEventListener("click", lista) // do segundo botão- o lista

var filme = null

function cadastrar(){
    let nomeinput = document.querySelector("#nomeFilme").value // depois do let eu posso cirar qualquer nome da let, o da# tem q ser a mesma q coloquei no html
    let descricaofinput = document.querySelector("#descricaof").value
    let datafinput = document.querySelector("#dataf").value
    let diretorfinput = document.querySelector("#diretorf").value
    let categoriafinput = document.querySelector("#categoriaf").value

    filme = new Filme(nomeinput,descricaofinput,datafinput,diretorfinput,categoriafinput)
     
}

function lista(){
    let resposta = document.querySelector("#resposta")
    resposta.innerHTML += `<div class="filme" id="respostadalistaFilme">
            <h2>${filme.nome}</h2>
            <p> Descrição do filme${filme.descricao}</p>
            <p> Data do filme${filme.data}</p>
            <p> Diretor do filme${filme.diretor}</p>
            <p style="color: blue;"> ${filme.categoria}</p>
    </div> `
}