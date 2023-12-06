// para fazer o botão play funcionar no jquery
var btnplay = $('#btnplay');
var tempodamusica = 10000

btnplay.on('click', function(){
    
    
    if(btnplay.hasClass("play")) {
        document.querySelector("#btnplay").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="pink" class="bi bi-pause-fill" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/></svg>` // peguei o icone do bootstrap e mudei a cor e width e height
        document.querySelector("#btnplay").classList.replace("play","pause")
        //btnplay.removeClass("play")
        //btnplay.addClass("pause)
       
        

    } else {
        document.querySelector("#btnplay").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="pink" class="bi bi-pause-fill" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/></svg>`
        document.querySelector("#btnplay").classList.replace("pause","play")    }

   
    $(".progress-bar").animate({width: "100%"},{duration : tempodamusica}) // duration: para colocar a duração da barra, 10000 é milisegundos o tempo da musica
})           
