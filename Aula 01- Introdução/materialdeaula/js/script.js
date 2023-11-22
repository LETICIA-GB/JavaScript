//vou logar com o console da pagina de inspeção do navegador
console.log("Ola Mundo:)"); //ponto e virgula no js é opcional, mas é bom usar pois em outras liguagens é obrigatório


//----------------CAIXAS DE TEXTO--------------------------
//alert("Olá, este é meu primeiro comando js"); // abre tipo um pop up de alerta na pagina
//confirm("Estou aprendendo js?");// apos um comando ela aparece para vc confirmar algo(verdadeiro ou falso)
//prompt("Qual é o seu nome?"); // abre uma caixinha para o usuário digitar algo


//---------------VARIÁVEIS (Onde guardas as informações)------------
//*LET escopo local, sobrescrevível (não fica guardada na memória)
function testeLet(){
    let numero = 0;
    numero = 10
    console.log(numero)
}

//*CONST escopo global, não sobrescrevível
const pi = 3.14 //pi não modifica / const não é possivel mudar o valor da variavel
console.log(pi)  // essa linha de codigo é ela aparecer direto para o console, sem q eu digite

//*VAR escopo global, sobrescrevível
var nome = "Letícia"; // conseguimos a qlq momento muda-la(sobrescrever)
console.log(nome)


var idade = prompt("Qual é a sua idade?"); // a vaiavel vai receber o que a idade q a pessoa digitar
        //CONCATENAÇÃO
        //primeira maneira + 
        //alert("Seja bem vindo " +nome); // + é para concatenar

        //segunda maneira ${} - ignora o trecho como texto
alert("Seja bem vindo" `${nome}`);

//---------TIPO DE VALORES-------------
//NUMBER numeros
var real = 180;

//STRING textos
var texto = "exemplo";

//BOOLEAN logicos ou verdadeiro e falso
var ligado = true;

//OBJETO
var CARRO = [];