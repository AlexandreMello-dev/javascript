var idade = 17
console.log(`Essa é sua ${idade}`)
if (idade < 16){
    console.log("Não pode Votar")
} else {
    if ( idade <= 18 || idade >= 67){
        console.log("O voto é opcional")
    } else {
        console.log("Vota")
    }
}
