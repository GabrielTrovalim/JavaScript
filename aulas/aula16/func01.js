function parimp(n) { // Função de parâmetro n.
    if (n%2 == 0 ) { // Se o resto da divisão de n/2 for igual a zero, faça...
        return 'Número par'
    } else {
        return 'ímpar'
    }
}
var res = parimp(10) // Chamada com o valor 10.
console.log(`O nosso número é ${res}.`) // Mostrando o resultado da função.