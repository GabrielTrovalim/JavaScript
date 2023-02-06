function calcular(){
    var time = new Date()
    var atano = time.getFullYear()
    var txtano = window.document.getElementById('txtnun')
    var resu = window.document.getElementById('resultado')    
     if (txtano.value.length == 0 || txtano.value > atano ){
        window.alert('Entrada de dados invalida!')
     } else{ 
        window.alert('tá de boa!')
     }
}