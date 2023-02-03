function calcular(){
    var time = new Date()
    var atano = time.getFullYear()
    var txtano = window.document.getElementById('txtnun')
    var resu = window.document.getElementById('resultado')
    var nano = Number(txtano.value)
    var soma = atano - nano
    
    if (soma < 0) {
        resu.innerHTML = 'Você ainda não nasceu!'
    } else if (soma > 100) {
        resu.innerHTML = `Você provavelmente já morreu, ou tem ${soma} anos...`
    } else {
        resu.innerHTML = `Você tem ${soma} anos!`
    }
}