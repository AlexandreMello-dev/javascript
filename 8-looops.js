console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
);

const idadeComprador = 19;
const estaAcompanha = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanha == true;

let contador = 0;

while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        console.log("destino existe");
    }else{
        console.log("Não exite esse destino")
    }
    contador += 1
}