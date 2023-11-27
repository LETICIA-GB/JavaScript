//var cliete1nome = "Leonardo"
//var cliete1cpf = "999999999"
//var cliete1endereco = "Taguatinga rua E casa 02"
//var cliete1tel = "61 9999-9999"
//var cliete1conta = "001"
//var cliete1saldo = "0"

//objeto:uma entidade dentro do codigo q vc conseguiria passar atributos a ele.

class Cliente{
    nome;
    cpf;
    endereco;
    telefone;
    conta;
    saldo;
    //ação é igual a função
    //--------------------pegar do git do prof, daqui para baixo------
    sacar(){
        //this.atributo: Seleciona um atributo
        this.saldo = this.saldo - valor;
    }
    depositar(){}
}
var cliente1 = new Cliente();
var cliente2 = new Cliente();

cliente1.nome = "Leonardo";
cliente1.cpf = "999999999";
cliente1.endereco = "Taguatinga rua E casa 02"
cliente1.conta = "001"
cliente1.saldo = "0"
cliente1.telefone = "61 9999-9999"
console.log(cliente1)
