console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
);

const idadeComprador = 19;
const estaAcompanha = false;
const temPassagemComprada = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanha == true) {
    console.log("Boa viagem");
    listaDeDestinos.splice(1, 1);//removendo item
    console.log(listaDeDestinos)
} else {
    console.log("Ele não é menor de idade não posso vender!")
}

console.log("Embarque: \n \n")

if(idadeComprador > 18 && temPassagemComprada){
    console.log("boa viagem")
}else{
    console.log("Você não pode embarcar")
}

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador == 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);




