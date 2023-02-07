function contar(){
    var start = window.document.getElementById('nstart')
    var n1 = Number(start.value)
    
    var end = window.document.getElementById('nend')
    var n2 = Number(end.value)

    var step = window.document.getElementById('npasso')
    var n3 = Number(step.value)

    var res = window.document.getElementById('resu')

    var c = n1
    while (c <= n2){
        res.innerHTML = `${c}`
        c *= n3
    }
}
function limpar(){
    var res = window.document.getElementById('resu')

    res.innerHTML = `Aguardando resultado...`
}