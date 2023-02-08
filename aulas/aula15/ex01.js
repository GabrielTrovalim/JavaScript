var vet = [6,8,3,5,1,7]
vet.sort()

console.log(`${vet} Em ordem crescente.\n`)
/*
for (var c = 0; c < vet.length; c ++){
    console.log(`A posição ${c} tem o valor: ${vet[c]}`)
}
console.log('assim.')*/

for (var c in vet){ // versão mais simples do código.
    console.log(`A posição ${c} tem o valor: ${vet[c]}`)
}
console.log('\nSimples assim.')

var proc = vet.indexOf(6) // lembrando que estou usando sort()
if (proc == -1){
    console.log('\nNão foi possível encontrar esse número por aqui...')
} else {
    console.log(`\nO número 6 aparece na posição ${proc}.`)
}