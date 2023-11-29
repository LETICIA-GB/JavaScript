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

var filmes = []

function cadastrar(){
    let nomeinput = document.querySelector("#nomeFilme").value // depois do let eu posso criar qualquer nome da let, o da# tem q ser a mesma q coloquei no html
    let descricaofinput = document.querySelector("#descricaof").value
    let datafinput = document.querySelector("#dataf").value
    let diretorfinput = document.querySelector("#diretorf").value
    let categoriafinput = document.querySelector("#categoriaf").value

    filmes.push(new Filme(nomeinput,descricaofinput,datafinput,diretorfinput,categoriafinput))
     
}

function lista(){
    let resposta = document.querySelector("#resposta")

    resposta.innerHTML = ""  // comando para limpar

    filmes.forEach((cadafilme)=> {
    resposta.innerHTML += `<div class="filme" id="respostadalistaFilme">
            <h2>${cadafilme.nome}</h2>
            <p> Descrição do filme${cadafilme.descricao}</p>
            <p> Data do filme${cadafilme.data}</p>
            <p> Diretor do filme${cadafilme.diretor}</p>
            <p style="color: blue;"> ${cadafilme.categoria}</p>
    </div> `
})

}