var idade = Number(prompt("Qual é a sua idade?"));

// PRIMEIRA FORMA DE FAZER O EXERCICIO(SOMENTE COM O IF)
if(idade <= 0){ // o if pode ser sozinho pq ele não precisa do ENTÃO(ELSE) nesse momento
    alert("Idade inválida!");
    location.reload();
}

if(idade > 0 && idade < 15 ){
    alert("Criança");
    location.reload();
}

if(idade >= 15 && idade < 30 ){
    alert("jovem");
    location.reload();
}

if(idade >= 30 && idade < 60 ){
    alert("adulto");
    location.reload();
}

if(idade >= 60 ){
    alert("idoso");
    location.reload();
}

//COPIAR DO GIT DO PROF ESSA SEGUNDA PARTE

// SEGUNDA FORMA DE FAZER O EXERCICIO(COM O IF E O ELSE)-

if(idade >= 60 ){
    alert("idoso");
    location.reload();
}else{
    if(idade > 0 && idade < 15 ){
        alert("criança");
        location.reload();
    }

}