function gerar(){
    var txtnum = window.document.getElementById('inum')
    var num = Number(txtnum.value)

    var res = window.document.querySelector('div#resu')
    
    if (txtnum.value.length == 0){ // Verificação de entrada de dados.
        window.alert('[Erro] Entrada de dados incompleta')
    } else {
        res.innerHTML = ``
        
        for(var c = 1; c <= 10; c++){
            var tabu = (num * c) // Multiplicando uma variável pelo contador.
            res.innerHTML += `<br> ${num} X ${c} = ${tabu} <br>`
        }
    }
}
function limpar(){
    var res = window.document.querySelector('div#resu')
    // Criando uma função que limpar tanto a entrada quanto a saída de dados.
    res.innerHTML = `Resultado...`
}