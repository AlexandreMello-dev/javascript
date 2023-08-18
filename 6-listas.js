console.log(`Trabalhando com listas`)
// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro)

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
)

listaDeDestinos.push(`Curitiba`, "Passo Fundo", "Porto Alegre")
console.log(listaDeDestinos)

listaDeDestinos.splice(2,4)
console.log(listaDeDestinos)

console.log(listaDeDestinos[4])