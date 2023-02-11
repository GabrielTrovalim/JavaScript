let txtnum = document.querySelector('input#inun')
let resu = document.querySelector('div#resum')
let resd = document.querySelector('div#resdois')
let valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else { 
        return false
    }
}

function inlista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function enviar(){
    if(isnumero(txtnum.value) && !inlista(txtnum.value, valores)){
        valores.push(Number(txtnum.value)) // Adicionando o número na nossa lista.
        resu.innerHTML += `Novo valor adicionado: ${txtnum.value}<br>`
        resd.innerHTML = ``
    } else { 
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    txtnum.value = ''
    txtnum.focus()
}
function limpar(){ // Comando que apaga o conteúdo da div resultado 01
    resu.innerHTML = ``
    resd.innerHTML = ``
}
function verificar (){
    if (valores.length == 0){
        window.alert('Adicione valores à lista...')
        txtnum.focus()
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let med = 0
        for (let pos in valores){
            soma += valores[pos]
            med += valores[pos]/valores.length
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        if (tot == 1){
            resd.innerHTML = `A lista possui apenas um elemento`
        } else {
            resd.innerHTML = ``
            resd.innerHTML += `<p>A lista tem o total de ${tot} elementos.</p>`
            resd.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
            resd.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
            resd.innerHTML += `<p>Somando todos os valores, temos: ${soma}.</p>`
            resd.innerHTML += `<p>A média entre os valores é: ${med}.</p>`
        }
    }
}