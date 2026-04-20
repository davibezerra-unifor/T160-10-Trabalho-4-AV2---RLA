let saldo = parseFloat(1000);
let opçao;
let desconto;
let soma;
while(true){
    console.log('==== MENU ====');
    console.log(`1 = depositar; 2 = sacar; 3 = consultar saldo; 0 = sair`);
    opçao = Number(prompt('digite sua opção '));
    if (opçao == 1) { 
    soma = Number(prompt('quanto deseja depositar? '));
        saldo += soma ;
    }
    if (opçao == 2){
        desconto = Number(prompt('quanto deseja retirar? '));
        if( saldo < desconto){
          console.log('VALOR MUITO ALTO MANO')  
        }
        else{
            saldo -= desconto
        }
    }
    if (opçao == 3){
        console.log(`seu saldo atual é ${saldo}`);
    }    
    if (opçao == 0){
        break;
    }
    if (opçao != 1 || opçao != 2 || opçao != 3 || opçao !=0){
        console.log('OPÇÃO INDISPONIVEL')
    }
}
