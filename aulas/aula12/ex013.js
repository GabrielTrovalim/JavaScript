var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora} horas`)
if (hora > 5 && hora < 12) {
    console.log('Bom dia, tenha um ótimo dia!')
} else {
    if (hora >= 12 && hora < 18) {
        console.log('Boa tarde!')
    } else {
        if (hora == 24 || hora < 6){
            console.log('Está de madrugada, vá dormir')
        } else {
            console.log('Boa noite!')
        }
    }
}