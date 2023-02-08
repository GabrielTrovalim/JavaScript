function contar(){
    var start = window.document.getElementById('nstart')
    var n1 = Number(start.value)
    
    var end = window.document.getElementById('nend')
    var n2 = Number(end.value)

    var step = window.document.getElementById('npasso')
    var n3 = Number(step.value)

    var res = window.document.getElementById('resu')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        window.alert('[Erro] Entrada de dados invalida')
    } else {
        if (n3 <= 0){
            window.alert('Valor invalido. Considerando Passo = 1')
            n3 = 1
        }
        if (n1 < n2) { // Contagem crescente.
            for (var c = n1; c <= n2; c += n3) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else { // Contagem regressiva.
            for (var c = n1; c >= n2; c -= n3) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}
function limpar(){
    var res = window.document.getElementById('resu')

    res.innerHTML = ``
}