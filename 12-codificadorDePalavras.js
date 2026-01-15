let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lista = []

function contificador(palavra){
    for(let i = 0; i < palavra.length; i++){
        let letra = alfabeto.indexOf(palavra[i].toUpperCase())
        lista.push(letra + 1)
    }
    console.log(lista)
}

contificador("Alexandre")