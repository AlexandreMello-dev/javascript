function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement('img') // Cria o elemento img
        img.setAttribute('id', 'foto') // Define um id para a imagem

        if (fsex[0].checked){
            gênero = "Homem"
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'criança_M.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute("src","jovem_M.jpg")
            } else if (idade < 50){
                // Adulto
                img.setAttribute("src","adulto_M.jpg")
            } else {
                // Idoso
                img.setAttribute("src","idoso_M.jpg")
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'criança_F.jpg')
            } else if (idade < 21){
                // Jovem
                img.setAttribute("src", "jovem_F.jpg")
            } else if (idade < 50){
                // Adulto
                img.setAttribute("src", "adulto_F.jpg")
            } else {
                // Idoso
                img.setAttribute("src", "idoso_F.jpg")
            }
        }
        
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) // Adiciona a imagem ao resultado
    }
}
