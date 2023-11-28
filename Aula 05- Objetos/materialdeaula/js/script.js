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
   
 
      
        verificaSaldo(){
            return "  O saldo da conta é de R$ "+this.saldo;
        }
        sacar(valor){
            if(this.saldo >= valor){
                //this.atributo: Seleciona um atributo
                this.saldo = this.saldo - valor;
                return "Você sacou : R$ "+valor+this.verificaSaldo();
                
            }else{
                return "Operação não autorizada! Você está quebrado :(";
            }
        }
        depositar(valor){
            if(valor <= 0){
                return "Operação não autorizada! Minimo de deposito R$ 0.01";
            }else{
                this.saldo = this.saldo + valor;
                return "Depósito efetuado! R$ "+valor+this.verificaSaldo();
            }
        }
}
    
    var cliente1 = new Cliente();
    var cliente2 = new Cliente();
    cliente1.nome = "Leonardo";
    cliente1.cpf = 9999999;
    cliente1.endereco = "Taguatinga bloco E rua 30";
    cliente1.telefone = 619999-9999;
    cliente1.conta = "001";
    cliente1.saldo = 0;
    console.log(cliente1)