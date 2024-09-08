function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours() 
    msg.innerHTML = `Agora são ${hora}`
    if (hora >= 0 && hora <= 12){
        // BOM DIA
        document.body.style.background = "#fde65a"
        img.src = 'bomdia.png'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE
        document.body.style.background = "#fcb99f"
        img.src = 'boatarde.png'
    } else {
        //BOA NOITE
        document.body.style.background = "#1e3567"
        img.src = 'boanoite.png'
    }
}