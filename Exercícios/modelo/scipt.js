function carrega(){
    var texto = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var hora = new Date()
    var time = hora.getHours()
    var mins = hora.getMinutes()
    texto.innerHTML = `Agora são ${time} horas e ${mins} minutos.`
}