let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lista = []

function contadorAlfabeto(num){
    if(num > alfabeto.length){
        console.log("Escolhe um número menor.")
    } else if(num < 0){
        console.log("Escolhe um número maior")
    } else {
        for(let i = 0; i < num; i++){
            lista.push(alfabeto[i])        
        }
        console.log(lista)
    }    
    
}


contadorAlfabeto(-24)