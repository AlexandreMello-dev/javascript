const pessoa1 = {
    nome: "alexandre",
    idade: 26,

    fala(){
        console.log(`Meu nome é ${this.nome}, e tenho ${this.idade}`)
    }
}

pessoa1.fala()