function calcular(){
    var time = new Date()
    var atano = time.getFullYear()
    var txtano = window.document.getElementById('txtnun')
    var resu = window.document.getElementById('resultado')    
    var nano = Number(txtano.value)
    var soma = atano - nano
    
    if (txtano.value.length == 0 || nano > atano){
        window.alert('Invalido')
    } else if (soma > 100) {
        resu.innerHTML = `Você provavelmente já morreu, ou tem ${soma} anos...`
    } else if (soma == 0) {
        resu.innerHTML = `Você é um recém nascido!`
    } else if (soma == 1) {
        resu.innerHTML = `Você tem apenas ${soma} ano!`
    } else {
        resu.innerHTML = `Você tem ${soma} anos!`
    }
}