function calcular(){
    var time = new Date()
    var atano = time.getFullYear()
    var txtano = window.document.getElementById('txtnun')
    var resu = window.document.getElementById('resultado')   

     if (txtano.value.length == 0 || txtano.value > atano ){
        window.alert('[ERRO!] Entrada de dados invalida!')
     } else { // dando a permissão para o código prosseguir.
        var sex = document.getElementsByName('botsex')
        var idade = atano - Number(txtano.value)
        var gen = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked) {
            gen = `um Homem`
            if (idade >= 0  && idade <= 10){
                //criança
            } else if (idade < 21) {
                // jovem
            } else if (idade < 50) {
                // adulto
            } else {
                //idoso
            }
        } else if (sex[1].checked) {
            gen = `uma Mulher`
            if (idade >= 0 && idade <= 10){
                //criança
            } else if (idade < 21) {
                // jovem
            } else if (idade < 50) {
                // adulto
            } else {
                // idoso
            }
        }
     }
     resu.innerHTML = `Detectamos ${gen} com ${idade} anos!`
}