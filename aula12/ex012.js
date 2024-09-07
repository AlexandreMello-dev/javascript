var agora = new Date()
var hora = agora.getHours()
console.log(`São exetamente ${hora}hrs`)
if ( hora >= 8 && hora <= 12){
    console.log("Bom dia!")
} else {
    if ( hora <= 6 && hora >= 0){
        console.log("Boa madrugada!")
    } else{
        if (hora >= 18){
            console.log("Boa noite")
        } else {
            console.log("Boa tarde")
        }
    } 
}