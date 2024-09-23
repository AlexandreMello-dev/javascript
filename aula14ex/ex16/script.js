function Contagem(){
    var txtini = document.querySelector("input#txtini")
    var txtfim = document.querySelector("input#txtfim")
    var txtpass = document.querySelector("input#txtpass")
    
    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpass.value.length == 0){
        res.innerHTML = `Impossível contar!`
        //window.alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(txtini.value)
        let f = Number(txtfim.value)
        let p = Number(txtpass.value)
        if(i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3c1}`
    }
}