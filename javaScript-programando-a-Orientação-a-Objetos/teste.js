class conta{
    nome;
    saldo;
    depositar(valor){
        if(valor < 0){
            return;
        }else{
            this.saldo += valor;
        }
    }
    transferir(valor){
        if(valor < 0){
            return;
        }
        contaAlexandre.saldo -= valor;
        contaRoberto.saldo += valor

    }
}

class conta2{
    nome;
    saldo;
}

const contaAlexandre = new conta();
const contaRoberto = new conta2();


// contas do usuarios 
contaRoberto.nome = "Roberto"
contaRoberto.saldo = 0;
contaAlexandre.nome = "Alexandre"
contaAlexandre.saldo = 500;

// tranferencias e depositos
// contaAlexandre.depositar(-1)
contaAlexandre.transferir(100)
contaAlexandre.transferir(50)

console.log(contaAlexandre)
console.log(contaRoberto)
