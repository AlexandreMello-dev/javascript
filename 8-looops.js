console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
);

const idadeComprador = 21;
const estaAcompanha = false;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanha == true;

let contador = 0;
let destinoExiste = false;


console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let cont = 0; cont < 3; cont++){

    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
    }
}