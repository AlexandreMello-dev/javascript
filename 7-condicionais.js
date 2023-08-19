console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
);

const idadeComprador = 19;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);                                          

if(idadeComprador >= 18){
    console.log("Comprador é maior de idade");
    listaDeDestinos.splice(1,1);//removendo item
    console.log(listaDeDestinos)
}else{
    console.log("Ele não é menor de idade não posso vender!")
}




