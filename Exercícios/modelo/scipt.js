function carrega(){
    var texto = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var hora = new Date()
    var time = hora.getHours() // Pegando as horas pelo OS.
    var mins = hora.getMinutes() // Pegando os mintos pelo OS.
    texto.innerHTML = `Agora são ${time} horas e ${mins} minutos.`
    if (time >= 6 && time <= 12){
        foto.src = 'imagens/manhã.jpg'
        document.body.style.background = '#cdd377'
    } else if (time >= 12 && time <= 18){
        foto.src = 'imagens/tarde.jpg'
        document.body.style.background = '#fca558'
    } else {
        foto.src = 'imagens/noite.jpg'
        document.body.style.background = '#17242c'
    }
}