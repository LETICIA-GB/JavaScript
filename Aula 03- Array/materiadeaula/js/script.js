// ----------REPETIÇÃO-------------

// *ENQUANTO
// enquanto (condição) faca
// processo
// contador <- contador + 1
// fimEnquanto
var numero = 20 // antes tava 1
while (numero <= 10){
    console.log(numero + "bacana demais");
    numero = numero + 1;
}


// *FACA ATE
// faca
//     algo
//     controlador = controlador + 1;
// ate (condição)

var contador = 1
do{
    console.log(contador);
    contador++; // é o contador = contador + 1
}while(contador <= 10);


// *PARA
// para (var, condição, controlado)
//    algo
// fimPara

for(var cont = 1; cont <= 20; cont++){
    console.log("esse codigo rodou"+cont+"vezes");

}


// *FACA PARA CADA
var listadeelementos = ["elemento1", "elemento2", "elemento3"];
listadeelementos.forEach( (cadaelemento) => { // função anonima
    console.log(cadaelemento);
}) 
