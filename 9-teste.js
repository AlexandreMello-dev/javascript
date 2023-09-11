let senha;

senhas = new Array (

    'minhanovasenha',
    'eusoualexandre',
    'MEUNOVOMUNDO',
    'minhasenha',
)

let cont = 0;

while (cont <= 5 ) {
    if (senhas == 'MEUNOVOMUNDO'){
        console.log(`A achamos a sua senha no indice ${cont}`);
        break
    } else {
        cont += 1
        console.log("Achamos sua senha")
        
    }
 
}