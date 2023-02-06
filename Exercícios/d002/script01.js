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
                img.setAttribute('src', 'imagens/kid_h.jpg')
            } else if (idade < 30) {
                // jovem
                img.setAttribute('src', 'imagens/jovem_h.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/adulto_h.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso_h.jpg')
            }
        } else if (sex[1].checked) {
            gen = `uma Mulher`
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'imagens/kid_m.jpg')
            } else if (idade < 30) {
                // jovem
                img.setAttribute('src', 'imagens/jovem_m.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/adulto_m.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso_m.jpg')
            }
        }
     }
     resu.innerHTML = `Detectamos ${gen} com ${idade} anos!`
     resu.appendChild(img)
}